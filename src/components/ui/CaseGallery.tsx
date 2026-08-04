"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface CaseCard {
  id: string;
  tag: string;
  title: string;
  hook: string;
}

const CARDS: CaseCard[] = [
  {
    id: "depth-over-pedigree",
    tag: "Depth over pedigree",
    title: "Qualifying for technical depth, not a title",
    hook: "A well-known name at a well-known company, screened out on a single unscripted question.",
  },
  {
    id: "motivation-verified",
    tag: "Motivation, verified",
    title: "Catching the wrong reason to move",
    hook: "A strong resume, comparing three offers on comp alone. Screened out before a name was shared.",
  },
  {
    id: "constant-bar",
    tag: "Constant bar, wider net",
    title: "Staying narrow while the geography widened",
    hook: "Six markets, one scorecard. Convenient location never substituted for the bar.",
  },
];

function CardVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="grid grid-cols-6 gap-1.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="size-1.5 rounded-full"
            style={{ background: i === 13 ? "var(--metal)" : "var(--border)" }}
          />
        ))}
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="flex items-end gap-1.5">
        {[0.4, 0.7, 0.5, 1, 0.35].map((h, i) => (
          <span
            key={i}
            className="w-3 rounded-t-sm"
            style={{
              height: `${h * 40}px`,
              background: i === 3 ? "var(--metal)" : "var(--border)",
            }}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="h-2.5 w-6 rounded-full"
          style={{ background: i === 2 || i === 5 ? "var(--border)" : "var(--metal)" }}
        />
      ))}
    </div>
  );
}

export function CaseGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(CARDS.length - 1) * 100}%`]
  );

  if (reduceMotion) {
    return (
      <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-3">
        {CARDS.map((c, i) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="flex flex-col justify-between rounded-sm border border-border bg-bg-raised p-7"
          >
            <div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-fg-soft">
                Concept: {c.tag}
              </span>
              <h3 className="mt-3 font-serif-display text-[1.3rem] font-medium leading-[1.2]">
                {c.title}
              </h3>
              <p className="mt-3 text-[0.88rem] leading-[1.55] text-fg-soft">
                {c.hook}
              </p>
            </div>
            <div className="mt-6">
              <CardVisual index={i} />
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${CARDS.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          {CARDS.map((c, i) => (
            <div
              key={c.id}
              className="flex h-full w-screen flex-none items-center justify-center px-6"
            >
              <a
                href={`#${c.id}`}
                className="flex w-full max-w-[560px] flex-col justify-between rounded-sm border border-border bg-bg-raised p-10 transition-colors hover:border-metal"
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-fg-soft">
                    Concept: {c.tag}
                  </span>
                  <h3 className="mt-6 font-serif-display text-[1.9rem] font-medium leading-[1.15] text-balance md:text-[2.3rem]">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[1rem] leading-[1.6] text-fg-soft">
                    {c.hook}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <CardVisual index={i} />
                  <span className="text-[0.85rem] font-medium text-fg">
                    Read the case &rarr;
                  </span>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {CARDS.map((c) => (
            <span key={c.id} className="h-1 w-6 rounded-full bg-border" />
          ))}
        </div>
      </div>
    </div>
  );
}
