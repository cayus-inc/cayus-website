import type { Metadata } from "next";
import Link from "next/link";
import { MissedCallCalculator } from "@/components/ui/MissedCallCalculator";
import { GET_STARTED_HREF } from "@/lib/links";

export const metadata: Metadata = {
  title: "Cayus - see exactly how it works",
  robots: { index: false, follow: false },
};

// Dedicated conversion page for the short (~30s) cold prospecting video -
// deliberately separate from the general marketing site (no header, no nav,
// no footer, no competing links). The video's only job is to earn a click;
// this page's only job is to finish the story it didn't have time to tell
// and lead to one single action. Same narrative order as the pitch deck
// (scratch/loom-slides.html): pain, fix, mechanism, trust, effort, pricing,
// guarantee, CTA - see MEMORY.md 2026-08-21.
export default function StartPage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      {/* Hook */}
      <section className="bg-ink px-6 py-24 text-paper md:py-32">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-pewter-bright">
            Right now
          </p>
          <h1 className="font-serif-display text-balance text-[2.3rem] font-medium leading-[1.1] sm:text-[3.1rem]">
            A missed call just cost you{" "}
            <span className="text-pewter-bright">$7,500 to $15,000 in commission.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[1.05rem] leading-relaxed text-paper/70">
            Somewhere right now, a buyer is calling about one of your listings. If you
            don&apos;t pick up, that call just went to whoever answers instead of you.
          </p>
        </div>
      </section>

      {/* Pain build */}
      <section className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            The moment
          </p>
          <h2 className="mt-3 font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
            A call comes in. You can&apos;t take it.
          </h2>
          <p className="mt-3 text-[1rem] text-fg-soft">
            Open house. Another showing. 9pm on a Sunday.
          </p>

          <p className="mt-10 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            It gets worse
          </p>
          <h2 className="mt-3 font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
            It&apos;s not just that house. It&apos;s ten years of their business.
          </h2>
          <p className="mt-3 max-w-[520px] text-[1.02rem] leading-relaxed text-fg-soft">
            Most buyers don&apos;t leave a voicemail, they just call the next agent on
            the list. Whoever picks up becomes their agent, not just for this house, for
            their next move, and everyone they send your way.
          </p>

          <p className="mt-10 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            Why this happens
          </p>
          <h2 className="mt-3 font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
            Not a skill problem. A time problem.
          </h2>
          <p className="mt-3 max-w-[520px] text-[1.02rem] leading-relaxed text-fg-soft">
            Nobody can be reachable every hour of every day. Evenings, weekends, a
            showing, a buyer on the other coast calling while you&apos;re asleep, none
            of that is rare, it&apos;s most of your week. That&apos;s not a flaw in how
            you work, it&apos;s a limit no agent can beat alone.
          </p>
        </div>
      </section>

      {/* The fix */}
      <section className="border-t border-border bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-pewter-bright">
            The fix
          </p>
          <h2 className="font-serif-display text-balance text-[2rem] font-medium leading-[1.1] sm:text-[2.6rem]">
            We catch the <span className="text-pewter-bright">lead.</span>
            <br />
            You keep the client.
          </h2>
          <p className="mt-4 max-w-[480px] text-[1.02rem] leading-relaxed text-paper/70">
            An AI assistant, texting in your name, the second a call goes unanswered.
          </p>
        </div>
      </section>

      {/* Mechanism */}
      <section className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            No new number
          </p>
          <h2 className="mt-3 font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
            Here&apos;s what happens instead.
          </h2>
          <p className="mt-3 max-w-[520px] text-[1.02rem] leading-relaxed text-fg-soft">
            Your number stays exactly the same. You just forward the calls you miss, a
            two-minute setting on your phone, no new hardware, nothing to install.
          </p>

          <div className="mt-8 max-w-[460px] rounded-sm border border-border">
            {[
              { label: "Call missed", t: "0:00" },
              { label: "Text sent, in your name", t: "0:04" },
              { label: "Lead replies", t: "0:41" },
              { label: "Budget & timeline confirmed", t: "1:20" },
              { label: "Showing booked", t: "2:30" },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-5 py-3 text-[0.92rem] ${
                  i !== 0 ? "border-t border-border" : ""
                }`}
              >
                <span>{row.label}</span>
                <span className="font-mono text-[0.78rem] text-fg-soft">{row.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / dashboard */}
      <section className="border-t border-border bg-bg-raised px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            What you see
          </p>
          <h2 className="mt-3 font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
            Every conversation, one link away.
          </h2>
          <p className="mt-3 max-w-[520px] text-[1.02rem] leading-relaxed text-fg-soft">
            No app, no password. Jump into any conversation yourself, any time. It only
            qualifies and books, it never negotiates price or promises anything beyond a
            showing.
          </p>
        </div>
      </section>

      {/* Effort */}
      <section className="border-t border-border bg-ink px-6 py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-pewter-bright">
            Effort on your side
          </p>
          <h2 className="font-serif-display text-balance text-[1.9rem] font-medium leading-[1.15] sm:text-[2.3rem]">
            About 10 minutes. Nothing to get wrong.
          </h2>
          <p className="mt-4 max-w-[500px] text-[1.02rem] leading-relaxed text-paper/70">
            Connect your calendar, set up call forwarding, and fill in a short form
            about your listings and pricing so your assistant answers exactly like you
            would. Every step is documented, click by click. We handle the rest.
          </p>
        </div>
      </section>

      {/* Calculator - own numbers, real ROI */}
      <section className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            Your numbers, not ours
          </p>
          <h2 className="mt-3 font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
            What is it actually costing you?
          </h2>
          <div className="mt-8">
            <MissedCallCalculator />
          </div>
        </div>
      </section>

      {/* Pricing + guarantee */}
      <section className="border-t border-border bg-bg-raised px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            Pricing
          </p>
          <h2 className="mt-3 font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
            One setup fee. Then you&apos;re covered.
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="min-w-[200px] rounded-sm border border-border bg-bg p-6">
              <div className="text-[0.66rem] uppercase tracking-[0.14em] text-fg-soft">
                To start
              </div>
              <div className="mt-2 font-serif-display text-[1.8rem]">$299</div>
              <div className="mt-1 text-[0.83rem] text-fg-soft">
                One-time setup. Live in 48 hours.
              </div>
            </div>
            <div className="min-w-[200px] rounded-sm border border-ink bg-ink p-6 text-paper">
              <div className="text-[0.66rem] uppercase tracking-[0.14em] text-pewter-bright opacity-85">
                Once it&apos;s live
              </div>
              <div className="mt-2 font-serif-display text-[1.8rem]">
                $149<small className="text-[1rem] opacity-70">/mo</small>
              </div>
              <div className="mt-1 text-[0.83rem] text-paper/70">Unlimited coverage.</div>
            </div>
          </div>
          <p className="mt-6 max-w-[520px] text-[1.02rem] leading-relaxed text-fg-soft">
            What one closed deal is worth in commission, at your own numbers. That alone
            covers 50 to 100 months of this, plus every deal that client sends back your
            way after.
          </p>

          <div className="mt-12 border-t border-border pt-10">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
              Zero risk
            </p>
            <h2 className="mt-3 font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
              3 leads in 30 days. Or it&apos;s free.
            </h2>
            <p className="mt-3 max-w-[520px] text-[1.02rem] leading-relaxed text-fg-soft">
              If your assistant hasn&apos;t captured at least 3 qualified leads in your
              first 30 days live, we refund the setup fee and that month&apos;s
              subscription in full. No argument, no fine print. Cancel anytime, no
              contract.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-ink px-6 py-24 text-paper md:py-32">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-serif-display text-balance text-[1.9rem] font-medium leading-[1.15] sm:text-[2.5rem]">
            Your next client is calling right now.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[1.02rem] leading-relaxed text-paper/70">
            Two minutes to set up, live in 48 hours, cancel anytime.
          </p>
          <Link
            href={GET_STARTED_HREF}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-8 py-3.5 text-[0.95rem] font-semibold text-ink"
          >
            Get started
          </Link>
        </div>
      </section>
    </main>
  );
}
