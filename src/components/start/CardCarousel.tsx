"use client";

import { useRef, useState, useEffect } from "react";

type Card = { eyebrow: string; title: string; body: string };

// Fixes two real usability gaps found after shipping the first version
// (Enzo, 2026-08-27): native scroll-snap only responds to trackpad/touch
// swipe gestures, a mouse has no equivalent, so mouse users were stuck on
// card 1; and with no visible order/position, six unlabeled cards read as
// "a mess" rather than a clear start-to-finish sequence. Arrows + drag-to-
// scroll fix the mouse case, numbered badges + progress dots fix the
// reading-order case. Client component (needs scroll position + drag
// state), the rest of /start stays a plain server component.
export function CardCarousel({ cards }: { cards: Card[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const dragState = useRef<{ startX: number; startScrollLeft: number; dragging: boolean }>({
    startX: 0,
    startScrollLeft: 0,
    dragging: false,
  });

  function updateEdgeState() {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
    const cardWidth = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 16 : 1;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  }

  useEffect(() => {
    updateEdgeState();
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 16 : 320;
    el.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
  }

  function onPointerDown(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (!el) return;
    dragState.current = { startX: e.clientX, startScrollLeft: el.scrollLeft, dragging: true };
    el.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (!el || !dragState.current.dragging) return;
    el.scrollLeft = dragState.current.startScrollLeft - (e.clientX - dragState.current.startX);
  }
  function onPointerUp() {
    dragState.current.dragging = false;
  }

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={updateEdgeState}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing md:cursor-grab md:justify-center [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInline: "1.5rem" }}
      >
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="relative w-[78vw] flex-none snap-center rounded-sm border border-border bg-bg p-6 sm:w-[320px]"
          >
            <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-bg-raised text-[0.72rem] font-semibold text-fg-soft">
              {i + 1}
            </span>
            <p className="pr-6 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
              {card.eyebrow}
            </p>
            <h3 className="mt-2 font-serif-display text-balance text-[1.2rem] font-medium leading-[1.2]">
              {card.title}
            </h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-fg-soft">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-5 px-6">
        <div className="flex gap-1.5">
          {cards.map((card, i) => (
            <span
              key={card.title}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === activeIndex ? "bg-fg" : "bg-border"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-fg disabled:opacity-30"
          >
            &larr;
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-fg disabled:opacity-30"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
