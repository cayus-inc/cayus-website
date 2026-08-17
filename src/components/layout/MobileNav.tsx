"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CTA } from "@/components/ui/CTA";
import { GET_STARTED_HREF } from "@/lib/links";

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/work", label: "How we work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative flex size-9 flex-none items-center justify-center rounded-full border border-border text-fg transition-colors hover:border-metal"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
          {open ? (
            <path
              d="M3 3l10 10M13 3L3 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M2 4.5h12M2 8h12M2 11.5h12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-x-0 top-[68px] z-40 border-b border-border bg-bg px-6 py-8 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)]"
          >
            <div className="flex flex-col gap-1">
              {NAV.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 text-[1.05rem] text-fg-soft transition-colors first:pt-0 hover:text-fg"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <CTA
              href={GET_STARTED_HREF}
              variant="primary"
              arrow={false}
              className="mt-7 w-full"
            >
              Get started
            </CTA>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
