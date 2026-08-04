"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { circleTexture } from "./circleTexture";

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
  const { pointer } = useThree();
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const positions = useMemo(() => {
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
  }, [count, spread]);

  const autoRotation = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!reduceMotion) autoRotation.current += delta * 0.05;
    const tiltX = pointer.y * 0.14;
    const tiltY = autoRotation.current + pointer.x * 0.22;
    group.current.rotation.x += (tiltX - group.current.rotation.x) * 0.03;
    group.current.rotation.y += (tiltY - group.current.rotation.y) * 0.03;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={size}
          sizeAttenuation
          transparent
          opacity={0.55}
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
  color = "#c7c0b2",
  size = 0.035,
  className = "",
}: {
  count?: number;
  spread?: number;
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div className={className}>
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
