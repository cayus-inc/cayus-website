"use client";

import { ParticleField } from "@/components/three/ParticleField";
import { PinScroll } from "@/components/ui/PinScroll";

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
    hook: "Six markets, one criteria. Convenient location never substituted for the bar.",
  },
];

const CARD_ACCENT = ["#8f8875", "#a89f8c", "#7d7666"];

export function CaseGallery() {
  return (
    <PinScroll
      fallbackClassName="grid grid-cols-1 gap-4 px-6 sm:grid-cols-3"
      items={CARDS.map((c, i) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className="group relative flex w-full max-w-[600px] flex-col justify-between overflow-hidden rounded-sm border border-border bg-bg-raised p-10 transition-colors hover:border-metal"
          style={{ minHeight: "420px" }}
        >
          <ParticleField
            className="absolute inset-0"
            count={180}
            spread={2.4}
            color={CARD_ACCENT[i % CARD_ACCENT.length]}
            size={0.045}
            style={{
              maskImage:
                "radial-gradient(ellipse 90% 80% at 70% 30%, black 30%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 80% at 70% 30%, black 30%, transparent 85%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-raised px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-fg-soft">
              Concept: {c.tag}
            </span>
            <h3 className="mt-6 font-serif-display text-[1.9rem] font-medium leading-[1.15] text-balance md:text-[2.3rem]">
              {c.title}
            </h3>
            <p className="mt-4 max-w-[46ch] text-[1rem] leading-[1.6] text-fg-soft">
              {c.hook}
            </p>
          </div>
          <div className="relative mt-10 flex items-center justify-end">
            <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-fg transition-transform duration-200 group-hover:translate-x-1">
              Read the case &rarr;
            </span>
          </div>
        </a>
      ))}
    />
  );
}
