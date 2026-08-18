import type { Metadata } from "next";
import { MissedCallCalculator } from "@/components/ui/MissedCallCalculator";

export const metadata: Metadata = {
  title: "Cayus - what we're building",
  robots: { index: false, follow: false },
};

// Deliberately not the main marketing site: no header, no footer, no
// pricing, no "Get Started". This is the link used in early outreach to
// agents we haven't sold to yet, while the product isn't fully live
// (Twilio A2P still pending) - see MEMORY.md 2026-08-18. Showing the
// calculator here instead of on cayus.io avoids implying the full site
// (Stripe checkout included) is ready to buy from right now.
export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-20 text-fg">
      <div className="mx-auto max-w-[720px]">
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
          Early look, not a live product yet
        </p>
        <h1 className="font-serif-display text-balance text-[1.9rem] font-medium leading-[1.15] sm:text-[2.4rem]">
          What we&apos;re building for real estate agents
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
          It&apos;s built, and we&apos;re finishing carrier approval for text messaging
          before opening it up. In the meantime, here&apos;s a calculator with your own
          numbers, no email required.
        </p>

        <div className="mt-14">
          <MissedCallCalculator />
        </div>

        <p className="mt-14 text-[0.92rem] text-fg-soft">
          Questions or thoughts on any of this? Just reply to the email this came from.
        </p>
      </div>
    </main>
  );
}
