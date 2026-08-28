import type { Metadata } from "next";
import Link from "next/link";
import { GET_STARTED_HREF, DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/links";
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
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-8 py-3.5 text-[0.95rem] font-semibold text-ink transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.5)] active:scale-[0.97] active:duration-75"
          >
            Get started
          </Link>
          <p className="mt-4 text-[0.8rem] text-paper/60">
            Or text/call{" "}
            <a href={`tel:${DEMO_PHONE_TEL}`} className="font-medium text-paper underline decoration-white/25 underline-offset-2">
              {DEMO_PHONE_DISPLAY}
            </a>{" "}
            right now, it&apos;s the exact AI you&apos;d be buying.
          </p>
        </div>
      </section>

      {/* Built around the core - same tree diagram as the home page, sized
          for this page's narrower 720px column (2x2 instead of 4-across). */}
      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            Built around the core
          </p>
          <div className="mx-auto mt-6 max-w-[320px] rounded-sm border border-fg bg-fg px-6 py-5 text-bg">
            <p className="text-[0.95rem] font-semibold">Never miss a lead</p>
            <p className="mt-1 text-[0.8rem] leading-[1.45] opacity-80">
              Every missed call answered, qualified, and booked in minutes.
            </p>
          </div>
          <div className="mx-auto h-8 w-px bg-border" />
          <div className="grid grid-cols-2 gap-4 border-t border-border pt-6">
            {[
              { title: "Showing reminders", body: "Fewer no-shows, so you don't lose the time or the sale." },
              { title: "Long-term follow-up", body: "7/21/60-day check-ins for leads who weren't ready yet." },
              { title: "Weekly report", body: "Exactly what got captured, every week, no digging." },
              { title: "Review requests", body: "One click once a deal closes. Real social proof." },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-border px-4 py-4 text-left">
                <h4 className="text-[0.86rem] font-semibold">{item.title}</h4>
                <p className="mt-1.5 text-[0.78rem] leading-[1.45] text-fg-soft">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[0.78rem] text-fg-soft">
            All four run automatically. Nothing extra to set up, nothing extra to pay.
          </p>
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
        <p className="mt-2 text-center text-[0.82rem] font-medium text-fg">
          $299 to start, $149/mo. 3 leads in 30 days, or it&apos;s free.
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
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-8 py-3.5 text-[0.95rem] font-semibold text-ink transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.5)] active:scale-[0.97] active:duration-75"
          >
            Get started
          </Link>
          <p className="mt-4 text-[0.8rem] text-paper/60">
            Or text/call{" "}
            <a href={`tel:${DEMO_PHONE_TEL}`} className="font-medium text-paper underline decoration-white/25 underline-offset-2">
              {DEMO_PHONE_DISPLAY}
            </a>{" "}
            right now, it&apos;s the exact AI you&apos;d be buying.
          </p>

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
