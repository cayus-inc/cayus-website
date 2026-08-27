import type { Metadata } from "next";
import Link from "next/link";
import { GET_STARTED_HREF } from "@/lib/links";
import { CardCarousel } from "@/components/start/CardCarousel";
import { StickyCta } from "@/components/start/StickyCta";

export const metadata: Metadata = {
  title: "Cayus - see exactly how it works",
  robots: { index: false, follow: false },
};

const cards: { eyebrow: string; title: string; body: string }[] = [
  {
    eyebrow: "The fix",
    title: "We catch the lead. You keep the client.",
    body: "An AI assistant, texting in your name, the second a call goes unanswered.",
  },
  {
    eyebrow: "Start to finish",
    title: "Answered, qualified, booked.",
    body: "Budget, timeline, financing, then the showing goes straight onto your calendar. You just show up.",
  },
  {
    eyebrow: "What you see",
    title: "Every conversation, one link away.",
    body: "No app, no password. Jump in yourself any time, it only qualifies and books, never negotiates price.",
  },
  {
    eyebrow: "Effort on your side",
    title: "About 10 minutes.",
    body: "Connect your calendar, forward your calls, live within 48 hours. We handle the rest.",
  },
  {
    eyebrow: "Pricing",
    title: "$299 to start, then $149/mo.",
    body: "One kept client pays for this 50 to 100 months over.",
  },
  {
    eyebrow: "Zero risk",
    title: "3 leads in 30 days. Or it's free.",
    body: "Refund the setup fee and that month's subscription in full. No argument, no fine print. Cancel anytime.",
  },
];

// Dedicated conversion page for the prospecting video sequence - deliberately
// separate from the general marketing site (no header, no nav, no footer).
// Video does the persuasion work (same person as the ~30s cold video, more
// of them keeps the trust already earned); the card carousel below is a
// scannable recap for anyone who scrolls past or wants to double check a
// number before clicking, not a competing "read this instead" option.
// See MEMORY.md 2026-08-21.
export default function StartPage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <section className="bg-ink px-6 pb-16 pt-16 text-paper md:pt-24">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-pewter-bright">
            See exactly how it works
          </p>
          <h1 className="font-serif-display text-balance text-[1.9rem] font-medium leading-[1.15] sm:text-[2.4rem]">
            Your next client is calling right now.
          </h1>

          <div className="mx-auto mt-8 aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-black">
            {/* TODO: replace with the real exported video file once recorded
                (e.g. /videos/start.mp4), self-hosted - no Tella player/branding. */}
            <video controls className="h-full w-full" poster="">
              <source src="/videos/start.mp4" type="video/mp4" />
            </video>
          </div>

          <Link
            id="hero-cta"
            href={GET_STARTED_HREF}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-8 py-3.5 text-[0.95rem] font-semibold text-ink"
          >
            Get started
          </Link>
        </div>
      </section>

      {/* Recap carousel - arrows + drag-to-scroll for mouse users, numbered
          cards and progress dots for a clear start-to-finish reading order
          (see CardCarousel.tsx). */}
      <section className="border-t border-border bg-bg-raised py-14">
        <CardCarousel cards={cards} />
        <p className="mt-4 text-center text-[0.76rem] text-fg-soft">
          Start to finish, in order. Swipe, drag, or use the arrows.
        </p>
      </section>

      <section className="border-t border-border bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.2rem]">
            Let&apos;s make sure someone answers.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[1.02rem] leading-relaxed text-paper/70">
            Two minutes to set up, live in 48 hours, cancel anytime.
          </p>
          <Link
            id="final-cta"
            href={GET_STARTED_HREF}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-8 py-3.5 text-[0.95rem] font-semibold text-ink"
          >
            Get started
          </Link>

          <p className="mt-6 text-[0.78rem] text-paper/50">
            Hosted securely on U.S. servers.{" "}
            <Link href="/privacy#security" className="underline hover:text-paper/80">
              Learn more
            </Link>
          </p>
        </div>
      </section>

      <StickyCta href={GET_STARTED_HREF} heroCtaId="hero-cta" finalCtaId="final-cta" />
    </main>
  );
}
