"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { circleTexture } from "./circleTexture";

function scatterSphere(count: number, spread: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Scatter inside a flattened sphere so it reads as a volume, not a flat disc.
    const r = spread * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
    arr[i * 3 + 2] = r * Math.cos(phi) * 0.7;
  }
  return arr;
}

function Field({
  count,
  spread,
  color,
  size,
}: {
  count: number;
  spread: number;
  color: string;
  size: number;
}) {
  const group = useRef<THREE.Group>(null);
  const nearRef = useRef<THREE.Points>(null);
  const farRef = useRef<THREE.Points>(null);
  const { pointer } = useThree();
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Two depth layers: a sparse, larger, brighter "near" set and a denser,
  // smaller, dimmer "far" set that drifts slightly slower, a cheap but
  // real parallax cue instead of one flat, uniform cloud.
  const nearPositions = useMemo(
    () => scatterSphere(Math.round(count * 0.35), spread * 0.85),
    [count, spread]
  );
  const farPositions = useMemo(
    () => scatterSphere(Math.round(count * 0.65), spread * 1.15),
    [count, spread]
  );

  const autoRotation = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!reduceMotion) autoRotation.current += delta * 0.09;
    const tiltX = pointer.y * 0.14;
    const tiltY = autoRotation.current + pointer.x * 0.22;
    group.current.rotation.x += (tiltX - group.current.rotation.x) * 0.03;
    group.current.rotation.y += (tiltY - group.current.rotation.y) * 0.03;
    if (nearRef.current) nearRef.current.rotation.y += delta * (reduceMotion ? 0 : 0.02);
    if (farRef.current) farRef.current.rotation.y -= delta * (reduceMotion ? 0 : 0.012);
  });

  return (
    <group ref={group}>
      <points ref={farRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[farPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={size * 0.65}
          sizeAttenuation
          transparent
          opacity={0.45}
          depthWrite={false}
          map={circleTexture()}
          alphaTest={0.01}
        />
      </points>
      <points ref={nearRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nearPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={size * 1.15}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
          map={circleTexture()}
          alphaTest={0.01}
        />
      </points>
    </group>
  );
}

export function ParticleField({
  count = 420,
  spread = 3.4,
  color = "#8f8875",
  size = 0.05,
  className = "",
  style,
}: {
  count?: number;
  spread?: number;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      <Canvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 4.4], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ alpha: true, antialias: true }}
      >
        <Field count={count} spread={spread} color={color} size={size} />
      </Canvas>
    </div>
  );
}
