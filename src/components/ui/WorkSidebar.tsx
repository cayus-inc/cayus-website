"use client";

import { useEffect, useRef, useState } from "react";

interface SidebarItem {
  id: string;
  num: string;
  tag: string;
  title: string;
}

const ANCHOR_Y = 180;

export function WorkSidebar({ items }: { items: SidebarItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const ticking = useRef(false);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const update = () => {
      ticking.current = false;
      let current = sections[0]?.id;
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= ANCHOR_Y) {
          current = el.id;
        }
      }
      if (current) setActive(current);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  return (
    <nav className="sticky top-28 flex flex-col gap-1">
      <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
        The cases
      </p>
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`group flex gap-3 rounded-sm px-3 py-2.5 text-[0.85rem] leading-[1.4] transition-colors ${
              isActive ? "bg-bg-raised text-fg" : "text-fg-soft hover:text-fg"
            }`}
          >
            <span
              className={`font-mono text-[0.75rem] ${isActive ? "text-metal" : "text-border"}`}
            >
              {item.num}
            </span>
            <span>{item.title}</span>
          </a>
        );
      })}
    </nav>
  );
}
