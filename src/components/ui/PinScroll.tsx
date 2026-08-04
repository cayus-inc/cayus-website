"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Shared scroll-pin mechanics: the section stays fixed on screen while its
// cards move horizontally, driven by vertical scroll progress. Falls back to
// a plain stacked/grid layout for reduced-motion users instead of forcing
// them through a tall scroll-jacked section they can't see animate.
export function PinScroll({
  items,
  fallbackClassName = "grid grid-cols-1 gap-4 sm:grid-cols-3",
}: {
  items: ReactNode[];
  fallbackClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(items.length - 1) * 100}%`]
  );

  if (reduceMotion) {
    return <div className={fallbackClassName}>{items}</div>;
  }

  return (
    <div ref={containerRef} style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex h-full w-screen flex-none items-center justify-center px-6"
            >
              {item}
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {items.map((_, i) => (
            <span key={i} className="h-1 w-6 rounded-full bg-border" />
          ))}
        </div>
      </div>
    </div>
  );
}
