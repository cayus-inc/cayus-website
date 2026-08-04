"use client";

import { Seal } from "./Seal";
import { ParticleField } from "@/components/three/ParticleField";

// A staged backdrop for the mark: a real 3D field of points with depth and
// slow rotation, instead of a flat CSS dot grid. Abstract, not a claim about
// anything real, but it reads as an actual scene rather than a texture.
export function HeroStage() {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute h-[70%] w-[70%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--metal) 0%, transparent 70%)",
          opacity: 0.16,
          filter: "blur(40px)",
        }}
      />
      <ParticleField className="absolute inset-0" />
      <Seal />
    </div>
  );
}
