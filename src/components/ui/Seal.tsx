"use client";

import { useRef } from "react";
import Image from "next/image";
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
      className="relative mx-auto flex aspect-square w-[min(400px,68vw)] items-center justify-center"
      style={{ perspective: 800 }}
    >
      <div className="absolute inset-0 rounded-full border border-border opacity-40 motion-safe:animate-[spin_120s_linear_infinite]" />
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        className="relative flex h-[64%] w-[64%] items-center justify-center"
      >
        <Image
          src="/brand/mark.png"
          alt="Cayus"
          fill
          sizes="(max-width: 768px) 68vw, 400px"
          className="seal-mark object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
