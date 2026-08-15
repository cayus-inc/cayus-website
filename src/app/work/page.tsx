import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { WorkSidebar } from "@/components/ui/WorkSidebar";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Concept walkthroughs of the Cayus mechanism: the moment a call is missed, how it's handled, and why.",
};

function CaseTag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-fg-soft">
      Concept: {children}
    </span>
  );
}

function Label({ children }: { children: string }) {
  return (
    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
      {children}
    </p>
  );
}

const CALL_LOG = [
  { time: "0:00", event: "Call missed", cleared: true },
  { time: "0:04", event: "Text sent", cleared: true },
  { time: "0:41", event: "Lead replies", cleared: true },
  { time: "1:20", event: "Budget confirmed", cleared: true },
  { time: "2:05", event: "Time slot offered", cleared: true },
  { time: "2:30", event: "Showing booked", cleared: true },
];

const SIDEBAR_ITEMS = [
  { id: "the-window", num: "01", tag: "The 90-second window", title: "What happens the moment a call is missed" },
  { id: "not-every-lead", num: "02", tag: "Not every lead is ready", title: "Catching a lead that isn't qualified yet" },
  { id: "two-at-once", num: "03", tag: "Two calls, one number", title: "Handling simultaneous leads" },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1160px] overflow-clip px-6 pb-16 pt-14 md:pt-20">
        <Reveal direction="left">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            How it works
          </p>
          <h1 className="mt-4 max-w-[26ch] font-serif-display text-[2.4rem] font-medium leading-[1.05] text-balance md:text-[3.2rem]">
            The reasoning behind the mechanism.
          </h1>
          <p className="mt-7 max-w-[62ch] text-[1.02rem] leading-[1.65] text-fg-soft">
            Three concept walkthroughs, marked as such, not dressed up as
            client results, we don&rsquo;t have client results yet. Each one
            shows how the assistant is meant to behave in a specific
            situation. What we don&rsquo;t show is the exact configuration.
            That stays ours.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 pb-28 lg:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <WorkSidebar items={SIDEBAR_ITEMS} />
        </aside>

        <div className="min-w-0 max-w-[720px]">
          {/* Case 1: the timeline from missed call to booked showing */}
          <div id="the-window" className="overflow-clip scroll-mt-28">
            <Reveal direction="left">
              <CaseTag>The 90-second window</CaseTag>
              <h2 className="mt-5 font-serif-display text-[1.7rem] font-medium leading-[1.15] text-balance md:text-[2.1rem]">
                What happens the moment a call is missed
              </h2>

              <StaggerGroup className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <StaggerItem direction="left">
                  <Label>The situation</Label>
                  <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
                    An agent is mid-showing with another client. Their phone
                    rings, a buyer calling about a different listing. They
                    can&rsquo;t pick up.
                  </p>
                </StaggerItem>
                <StaggerItem direction="right">
                  <Label>What usually happens</Label>
                  <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
                    Most buyers don&rsquo;t leave a voicemail. They hang up
                    and call the next listing on their list. By the time the
                    agent is free to call back, the lead has often already
                    talked to someone else.
                  </p>
                </StaggerItem>
              </StaggerGroup>

              <div className="mt-6 rounded-sm border border-border bg-bg-raised p-6">
                <Label>What the assistant does</Label>
                <StaggerGroup className="mt-4 flex flex-col gap-2">
                  {CALL_LOG.map((c) => (
                    <StaggerItem
                      key={c.event}
                      className="flex items-center justify-between gap-3 rounded-sm border border-border bg-bg px-3.5 py-2"
                    >
                      <span className="text-[0.85rem] text-fg-soft">{c.event}</span>
                      <span className="font-mono text-[0.78rem] text-fg-soft">{c.time}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              <div className="mt-6 border-l-2 border-metal pl-5">
                <p className="text-[0.95rem] italic leading-[1.6] text-fg">
                  Built so the window between a missed call and a real reply
                  is measured in seconds, not the rest of the afternoon.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Case 2: qualification screening out a not-yet-ready lead */}
          <div
            id="not-every-lead"
            className="mt-14 overflow-clip scroll-mt-28 border-t border-border pt-14"
          >
            <Reveal direction="right">
              <CaseTag>Not every lead is ready</CaseTag>
              <h2 className="mt-5 font-serif-display text-[1.7rem] font-medium leading-[1.15] text-balance md:text-[2.1rem]">
                Catching a lead that isn&rsquo;t qualified yet
              </h2>
              <p className="mt-5 max-w-[62ch] text-[0.95rem] leading-[1.6] text-fg-soft">
                A response alone isn&rsquo;t the goal, a booked showing with
                someone who&rsquo;s actually ready to move is. A caller who
                is months from financing or already working with another
                agent shouldn&rsquo;t take up a showing slot meant for a
                real buyer.
              </p>
            </Reveal>
            <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <StaggerItem
                direction="left"
                className="rounded-sm border border-border bg-bg-raised p-7"
              >
                <Label>What a simple auto-reply would do</Label>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Reply, then book whoever says yes",
                    "No check on financing or timeline",
                    "No check on whether they already have an agent",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2.5 text-[0.9rem] leading-[1.5] text-fg-soft"
                    >
                      <span className="mt-1.5 size-1 flex-none rounded-full bg-fg-soft" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
              <StaggerItem
                direction="right"
                className="rounded-sm border border-fg bg-fg p-7 text-bg"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] opacity-60">
                  What qualification finds
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Budget and timeline confirmed before booking",
                    "Already represented by another agent, flagged, not booked",
                    "A showing slot reserved for someone actually ready",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2.5 text-[0.9rem] leading-[1.5]"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 12 12"
                        className="mt-0.5 flex-none"
                      >
                        <path
                          d="M2 6.5 L5 9.5 L10 3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            </StaggerGroup>
            <Reveal delay={0.1}>
              <div className="mt-6 border-l-2 border-metal pl-5">
                <p className="text-[0.95rem] italic leading-[1.6] text-fg">
                  Built to protect your calendar, not just to reply fast.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Case 3: concurrency, two calls at once */}
          <div
            id="two-at-once"
            className="mt-14 overflow-clip scroll-mt-28 border-t border-border pt-14"
          >
            <Reveal direction="left">
              <CaseTag>Two calls, one number</CaseTag>
              <h2 className="mt-5 font-serif-display text-[1.7rem] font-medium leading-[1.15] text-balance md:text-[2.1rem]">
                Handling simultaneous leads
              </h2>
              <p className="mt-5 max-w-[62ch] text-[0.95rem] leading-[1.6] text-fg-soft">
                Open house weekends bring bursts of calls, not one at a
                time. A single voicemail box can only take one caller at a
                time; it doesn&rsquo;t queue two buyers well.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 rounded-sm border border-border bg-bg-raised p-6">
                <Label>Both calls, same minute</Label>
                <StaggerGroup className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    { caller: "Caller A", status: "Answered, qualifying" },
                    { caller: "Caller B", status: "Answered, qualifying" },
                  ].map((r) => (
                    <StaggerItem
                      key={r.caller}
                      className="flex items-center justify-between gap-2 rounded-sm border border-border bg-bg px-3.5 py-2.5"
                    >
                      <span className="text-[0.85rem] text-fg">{r.caller}</span>
                      <span className="flex items-center gap-2 text-[0.8rem] text-fg-soft">
                        <span className="size-1.5 flex-none rounded-full" style={{ background: "var(--metal)" }} />
                        {r.status}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
                <p className="mt-4 text-[0.82rem] leading-[1.5] text-fg-soft">
                  Neither caller waits on the other. Both get a reply within
                  the same few seconds, independently.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 border-l-2 border-metal pl-5">
                <p className="text-[0.95rem] italic leading-[1.6] text-fg">
                  Built to hold up during your busiest hour, not just on a
                  quiet Tuesday.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
