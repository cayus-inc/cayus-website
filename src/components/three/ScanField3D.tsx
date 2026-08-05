"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { circleTexture } from "./circleTexture";

const POINT_COUNT = 220;
const ACTIVATION_INTERVAL = 1900;
const ACTIVATION_DURATION = 1500;
const TARGET = new THREE.Vector3(2.1, 0, 0);

interface Activation {
  id: number;
  origin: THREE.Vector3;
  start: number;
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 5.6,
          (Math.random() - 0.5) * 2.6,
          (Math.random() - 0.5) * 2.2
        )
      );
    }
    return arr;
  }, []);

  // Faint static links between nearby points: a constellation/network
  // read, not a claim about literal connections, just enough structure
  // that the field doesn't look like scattered noise.
  const connections = useMemo(() => {
    const maxDist = 1.05;
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

  // Split into a bright near layer and a dim far layer by depth (z), a
  // cheap depth cue instead of one flat, evenly-lit cloud.
  const { nearPositions, farPositions } = useMemo(() => {
    const near: number[] = [];
    const far: number[] = [];
    for (const p of points) {
      const bucket = p.z > 0 ? near : far;
      bucket.push(p.x, p.y, p.z);
    }
    return {
      nearPositions: new Float32Array(near),
      farPositions: new Float32Array(far),
    };
  }, [points]);

  const [activations, setActivations] = useState<Activation[]>([]);
  const lastActivation = useRef(0);
  const idCounter = useRef(0);
  const activeMeshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    // A slow bounded sway rather than a full spin: the target marker has to
    // stay near its resting screen position for the DOM label next to it to
    // track it, a full rotation would carry it out of alignment.
    if (group.current && !reduceMotion) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.11) * 0.05;
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
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[connections, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#c7c0b2" transparent opacity={0.1} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[farPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#c7c0b2"
          size={0.04}
          sizeAttenuation
          transparent
          opacity={0.35}
          depthWrite={false}
          map={circleTexture()}
          alphaTest={0.01}
        />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nearPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#c7c0b2"
          size={0.075}
          sizeAttenuation
          transparent
          opacity={0.75}
          depthWrite={false}
          map={circleTexture()}
          alphaTest={0.01}
        />
      </points>

      {activations.map((a) => (
        <ActivationTrace key={a.id} activation={a} />
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
    </group>
  );
}

function ActivationTrace({ activation }: { activation: Activation }) {
  const lineRef = useRef<THREE.BufferGeometry>(null);
  const dotRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 1000;
    const progress = Math.min(
      (t - activation.start) / ACTIVATION_DURATION,
      1
    );
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = activation.origin.clone().lerp(TARGET, ease);

    if (lineRef.current) {
      const positions = new Float32Array([
        activation.origin.x,
        activation.origin.y,
        activation.origin.z,
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
      <line>
        <bufferGeometry ref={lineRef} />
        <lineBasicMaterial color="#c7c0b2" transparent opacity={0.55} />
      </line>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#faf8f4" />
      </mesh>
    </group>
  );
}

export function ScanField3D({ className = "" }: { className?: string }) {
  return (
    <div className={className} style={{ position: "relative" }}>
      <Canvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 5.2], fov: 38 }}
        dpr={[1, 1.8]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
