"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  const centered = align === "center";
  const reduced = useReducedMotion();
  const fgClass = invert ? "text-[#faf8f4]" : "text-fg";
  const softClass = invert ? "text-[#9c968a]" : "text-fg-soft";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${softClass}`}
        >
          <span className={`h-px w-6 ${invert ? "bg-[#4a4640]" : "bg-border"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif-display text-balance text-[1.9rem] font-medium leading-[1.1] sm:text-[2.6rem] ${fgClass}`}
      >
        {reduced ? (
          title
        ) : (
          <motion.span
            className="block overflow-hidden pb-[0.15em]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span
              className="block will-change-transform"
              variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {title}
            </motion.span>
          </motion.span>
        )}
      </h2>
      {sub && (
        <p className={`mt-5 text-balance text-[1rem] leading-[1.6] ${softClass}`}>{sub}</p>
      )}
    </div>
  );
}
