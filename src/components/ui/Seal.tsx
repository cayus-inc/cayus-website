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
        <svg viewBox="0 0 200 200" className="block h-full w-full overflow-visible">
          <defs>
            <linearGradient id="ringGradient" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="var(--pewter-bright)" />
              <stop offset="100%" stopColor="var(--pewter-dim)" />
            </linearGradient>
          </defs>
          <circle
            className="origin-[100px_100px] motion-safe:animate-[spin_120s_linear_infinite]"
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="var(--metal)"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <path
            d="M 152.00 66.23 A 62 62 0 1 1 152.00 133.77"
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="26"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 10px 16px rgba(0,0,0,0.35))" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
