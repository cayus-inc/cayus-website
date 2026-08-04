"use client";

import { Seal } from "./Seal";

// A staged backdrop for the mark, instead of a logo floating alone: a faint dot field
// (fading radially via mask) plus an ambient glow. Pure CSS/SVG, no fabricated imagery --
// an abstract scene, not a claim about anything real.
export function HeroStage() {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 25%, transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 25%, transparent 68%)",
          opacity: 0.7,
        }}
      />
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
      <Seal />
    </div>
  );
}
