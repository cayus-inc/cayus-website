import type { Metadata } from "next";
import Link from "next/link";
import { MissedCallCalculator } from "@/components/ui/MissedCallCalculator";
import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Cayus - what we're building",
  robots: { index: false, follow: false },
};

// Deliberately not the main marketing site: no header, no footer, no
// pricing, no "Get Started" checkout button. This is the value-first touch
// in the outreach sequence (calculator, no email required) - kept separate
// from cayus.io so it never feels like a sales page.
//
// Correction 2026-08-30: this used to say the product wasn't live yet
// (carrier approval pending) - that's been done for days, this page was
// stale and actively wrong for anyone reaching it from a live campaign.
// Fixed, and added the demo number now that it's true and testable.
export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-20 text-fg">
      <div className="mx-auto max-w-[720px]">
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
          A quick look, no signup
        </p>
        <h1 className="font-serif-display text-balance text-[1.9rem] font-medium leading-[1.15] sm:text-[2.4rem]">
          What Cayus does for real estate agents
        </h1>
        <p className="mt-5 max-w-[540px] text-[1.02rem] leading-relaxed text-fg-soft">
          When you miss a call, an AI assistant texts the caller back within seconds, in
          your name. It asks about budget, timeline, and financing, then books a showing
          straight into your calendar. If someone&apos;s not ready yet, it checks back in
          over the following weeks instead of letting them go cold. If a showing gets
          booked, either through the assistant or by you directly, it sends a reminder text
          the day before so fewer people no-show.
        </p>
        <p className="mt-4 max-w-[540px] text-[1.02rem] leading-relaxed text-fg-soft">
          It&apos;s live. Try it yourself, no signup: text or call{" "}
          <a href={`tel:${DEMO_PHONE_TEL}`} className="font-medium text-fg underline decoration-border underline-offset-2">
            {DEMO_PHONE_DISPLAY}
          </a>
          , it&apos;s the exact AI you&apos;d be buying. Or start with your own numbers
          below, no email required.
        </p>

        <div className="mt-14">
          <MissedCallCalculator />
        </div>

        <p className="mt-14 text-[0.92rem] text-fg-soft">
          Want to see the full thing?{" "}
          <Link href="/watch" className="font-medium text-fg underline decoration-border underline-offset-2">
            Watch the 29-second version
          </Link>
          . Questions? Just reply to the email this came from.
        </p>
      </div>
    </main>
  );
}
