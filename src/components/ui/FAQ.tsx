"use client";

import { useState } from "react";

export interface QA {
  q: string;
  a: string;
}

export function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-2xl divide-y divide-border border-y border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[0.98rem] font-medium text-fg">{it.q}</span>
              <span
                className="flex-none font-serif-display text-lg text-fg-soft transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="pb-5 pr-8 text-[0.92rem] leading-[1.65] text-fg-soft">
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
