"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Extra conversion pass (Enzo, 2026-08-27): once a visitor scrolls past the
// hero's own "Get started" button, the only way back to a CTA is scrolling
// all the way back up or down to the final section - this keeps one within
// reach at all times without repeating the full pitch. Hidden until the
// hero CTA scrolls out of view, and hidden again once the final section's
// own CTA is on screen, so it never shows two "Get started" buttons at once.
export function StickyCta({ href, heroCtaId, finalCtaId }: { href: string; heroCtaId: string; finalCtaId: string }) {
  const [visible, setVisible] = useState(false);
  const heroPassed = useRef(false);
  const finalVisible = useRef(false);

  useEffect(() => {
    const hero = document.getElementById(heroCtaId);
    const final = document.getElementById(finalCtaId);
    if (!hero || !final) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroPassed.current = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setVisible(heroPassed.current && !finalVisible.current);
      },
      { threshold: 0 },
    );
    const finalObserver = new IntersectionObserver(
      ([entry]) => {
        finalVisible.current = entry.isIntersecting;
        setVisible(heroPassed.current && !finalVisible.current);
      },
      { threshold: 0 },
    );
    heroObserver.observe(hero);
    finalObserver.observe(final);
    return () => {
      heroObserver.disconnect();
      finalObserver.disconnect();
    };
  }, [heroCtaId, finalCtaId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-20 border-t border-border bg-paper/95 px-6 py-3 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4">
        <p className="hidden text-[0.85rem] text-fg-soft sm:block">Two minutes to set up, live in 48 hours.</p>
        <Link
          href={href}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-6 py-2.5 text-[0.9rem] font-semibold text-paper sm:flex-none"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
