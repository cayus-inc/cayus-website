"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Seal() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 14 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto aspect-square w-[min(400px,68vw)]"
      style={{ perspective: 800 }}
    >
      <motion.div style={{ rotateX: rx, rotateY: ry }} className="h-full w-full">
        <svg viewBox="0 0 200 200" className="block h-full w-full">
          <defs>
            <radialGradient id="sealGradient" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="var(--pewter-bright)" />
              <stop offset="55%" stopColor="var(--pewter)" />
              <stop offset="100%" stopColor="var(--pewter-dim)" />
            </radialGradient>
          </defs>
          <circle
            className="origin-[100px_100px] motion-safe:animate-[spin_90s_linear_infinite]"
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="var(--metal)"
            strokeWidth="0.6"
            opacity="0.4"
          />
          <circle
            className="origin-[100px_100px] motion-safe:animate-[spin_70s_linear_infinite_reverse]"
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="var(--metal)"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <path
            fill="url(#sealGradient)"
            style={{ filter: "drop-shadow(0 24px 44px rgba(0,0,0,0.45))" }}
            d="M100 18
              C 130 18 152 34 160 60
              C 168 84 158 100 168 118
              C 178 138 166 160 142 168
              C 120 176 112 160 100 160
              C 88 160 80 176 58 168
              C 34 160 22 138 32 118
              C 42 100 32 84 40 60
              C 48 34 70 18 100 18 Z"
          />
          <text
            x="100"
            y="116"
            fontSize="64"
            textAnchor="middle"
            fill="var(--bg)"
            style={{ fontFamily: "var(--font-serif-display)" }}
          >
            C
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
