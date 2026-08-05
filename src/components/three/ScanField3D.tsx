"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { circleTexture } from "./circleTexture";

const POINT_COUNT = 240;
const SPHERE_RADIUS = 1.55;
const ACTIVATION_INTERVAL = 1900;
const ACTIVATION_DURATION = 1500;
// Fixed in world space, outside the rotating group, so the DOM label next
// to it never has to track a moving 3D point.
const TARGET = new THREE.Vector3(2.3, 0, 0);

interface Activation {
  id: number;
  origin: THREE.Vector3;
  start: number;
}

// A point per candidate signal, scattered on a sphere shell: the read is
// "searched everywhere," not a literal map, just the shape that says it
// fastest. Slight radius jitter keeps it from looking like a CAD model.
function sphereDistribution(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * (0.94 + Math.random() * 0.12);
    points.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      )
    );
  }
  return points;
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const points = useMemo(
    () => sphereDistribution(POINT_COUNT, SPHERE_RADIUS),
    []
  );

  // Faint static links between nearby points: a constellation/network
  // read, not a claim about literal connections, just enough structure
  // that the sphere doesn't look like scattered noise.
  const connections = useMemo(() => {
    const maxDist = 0.55;
    const maxPerPoint = 2;
    const segments: number[] = [];
    for (let i = 0; i < points.length; i++) {
      const candidates: { j: number; d: number }[] = [];
      for (let j = 0; j < points.length; j++) {
        if (i === j) continue;
        const d = points[i].distanceTo(points[j]);
        if (d < maxDist) candidates.push({ j, d });
      }
      candidates.sort((a, b) => a.d - b.d);
      for (const { j } of candidates.slice(0, maxPerPoint)) {
        if (j > i) {
          segments.push(
            points[i].x,
            points[i].y,
            points[i].z,
            points[j].x,
            points[j].y,
            points[j].z
          );
        }
      }
    }
    return new Float32Array(segments);
  }, [points]);

  const positions = useMemo(() => {
    const arr = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [points]);

  const [activations, setActivations] = useState<Activation[]>([]);
  const lastActivation = useRef(0);
  const idCounter = useRef(0);
  const activeMeshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current && !reduceMotion) {
      group.current.rotation.y += delta * 0.09;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.12;
    }
    const t = state.clock.elapsedTime * 1000;
    if (t - lastActivation.current > ACTIVATION_INTERVAL) {
      lastActivation.current = t;
      const origin = points[Math.floor(Math.random() * points.length)];
      idCounter.current += 1;
      setActivations((prev) => [
        ...prev.filter((a) => t - a.start < ACTIVATION_DURATION),
        { id: idCounter.current, origin, start: t },
      ]);
    }
  });

  return (
    <>
      <group ref={group}>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[connections, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#c7c0b2" transparent opacity={0.14} />
        </lineSegments>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          </bufferGeometry>
          <pointsMaterial
            color="#c7c0b2"
            size={0.06}
            sizeAttenuation
            transparent
            opacity={0.75}
            depthWrite={false}
            map={circleTexture()}
            alphaTest={0.01}
          />
        </points>
      </group>

      {/* Rendered at scene root, not inside the rotating group: the trace
          geometry below is already computed in world space each frame, so
          nesting it under the group's transform would rotate it twice. */}
      {activations.map((a) => (
        <ActivationTrace key={a.id} activation={a} groupRef={group} />
      ))}

      <sprite position={TARGET} scale={[0.55, 0.55, 0.55]}>
        <spriteMaterial
          map={circleTexture()}
          color="#faf8f4"
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </sprite>
      <mesh position={TARGET}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#faf8f4" />
      </mesh>
      <mesh position={TARGET} ref={activeMeshRef}>
        <ringGeometry args={[0.12, 0.135, 32]} />
        <meshBasicMaterial color="#c7c0b2" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

function ActivationTrace({
  activation,
  groupRef,
}: {
  activation: Activation;
  groupRef: React.RefObject<THREE.Group | null>;
}) {
  const lineRef = useRef<THREE.BufferGeometry>(null);
  const dotRef = useRef<THREE.Mesh>(null);
  const worldOrigin = useRef(new THREE.Vector3());

  useFrame((state) => {
    if (!groupRef.current) return;
    // The origin point rotates with the sphere; project it to world space
    // each frame so the trace always starts from where that signal
    // currently sits, and ends at the target, which never moves.
    worldOrigin.current.copy(activation.origin);
    groupRef.current.localToWorld(worldOrigin.current);

    const t = state.clock.elapsedTime * 1000;
    const progress = Math.min(
      (t - activation.start) / ACTIVATION_DURATION,
      1
    );
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = worldOrigin.current.clone().lerp(TARGET, ease);

    if (lineRef.current) {
      const positions = new Float32Array([
        worldOrigin.current.x,
        worldOrigin.current.y,
        worldOrigin.current.z,
        current.x,
        current.y,
        current.z,
      ]);
      lineRef.current.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
    }
    if (dotRef.current) {
      dotRef.current.position.copy(current);
      const s = 1 + Math.sin(progress * Math.PI) * 0.6;
      dotRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      {/* Rendered outside the rotating group's transform via world-space
          coordinates computed above, so this must live at the scene root
          to avoid double-applying the group's rotation. */}
      <line>
        <bufferGeometry ref={lineRef} />
        <lineBasicMaterial
          color="#c7c0b2"
          transparent
          opacity={0.55}
          depthTest={false}
        />
      </line>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#faf8f4" depthTest={false} />
      </mesh>
    </group>
  );
}

export function ScanField3D({ className = "" }: { className?: string }) {
  return (
    <div className={className} style={{ position: "relative" }}>
      <Canvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 5.6], fov: 38 }}
        dpr={[1, 1.8]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
