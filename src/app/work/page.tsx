import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Concept walkthroughs of the Cayus method: the problem, the tradeoffs, and what gets screened out and why.",
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

const REGIONS = [
  { city: "Austin, TX", cleared: true },
  { city: "Denver, CO", cleared: true },
  { city: "Chicago, IL", cleared: false },
  { city: "Miami, FL", cleared: true },
  { city: "Seattle, WA", cleared: false },
  { city: "Raleigh, NC", cleared: true },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[900px] px-6 pb-16 pt-24 md:pt-32">
        <Reveal direction="left">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            How we work
          </p>
          <h1 className="mt-4 font-serif-display text-[2.4rem] font-medium leading-[1.05] text-balance md:text-[3.2rem]">
            The reasoning behind three searches.
          </h1>
          <p className="mt-7 max-w-[62ch] text-[1.02rem] leading-[1.65] text-fg-soft">
            Three concept walkthroughs, marked as such, not dressed up as
            client work. Each one shows the actual reasoning we apply on a
            live search: the problem, what got screened out, and why. What
            we don&rsquo;t show is the exact mechanics. The tools and the
            playbook stay ours.
          </p>
        </Reveal>
      </div>

      {/* Case 1: layered read, approach in a highlighted block */}
      <div className="mx-auto max-w-[900px] px-6">
        <Reveal direction="left">
          <CaseTag>Depth over pedigree</CaseTag>
          <h2 className="mt-5 font-serif-display text-[1.7rem] font-medium leading-[1.15] text-balance md:text-[2.1rem]">
            Qualifying for technical depth, not a title
          </h2>

          <StaggerGroup className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <StaggerItem direction="left">
              <Label>The situation</Label>
              <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
                A Series A company building developer tooling for AI
                inference needed a Solutions Engineer who could run a
                genuinely technical demo in front of skeptical ML engineers,
                not walk a prospect through a slide deck.
              </p>
            </StaggerItem>
            <StaggerItem direction="right">
              <Label>The problem</Label>
              <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
                Most inbound-looking candidates read well on paper: strong
                titles, recognizable employers. Very few had actually run
                hands-on technical demos against a buyer who could ask a
                hard follow-up question.
              </p>
            </StaggerItem>
          </StaggerGroup>

          <div className="mt-6 rounded-sm border border-border bg-bg-raised p-6">
            <Label>The approach</Label>
            <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
              The hard requirement wasn&rsquo;t a title or a company name,
              it was recent, hands-on work against a comparable technical
              stack. Qualification conversations probed
              for one thing: could this person answer an unscripted
              technical question, not just deliver a rehearsed one.
            </p>
          </div>

          <div className="mt-6">
            <Label>Who got screened out</Label>
            <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
              A candidate with an impressive SE title at a well-known
              company was screened out. Their actual day-to-day was demoing
              a pre-built dashboard, not the product&rsquo;s technical
              internals. It surfaced directly when asked what they&rsquo;d
              do if the demo broke live.
            </p>
          </div>

          <div className="mt-6 border-l-2 border-metal pl-5">
            <p className="text-[0.95rem] italic leading-[1.6] text-fg">
              The search was built to produce a small number of technically
              credible conversations, not a long list of polished-looking
              ones.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Case 2: resume vs. reality contrast, same pattern as the homepage's problem/solution block */}
      <div className="mx-auto mt-14 max-w-[900px] border-t border-border px-6 pt-14">
        <Reveal direction="right">
          <CaseTag>Motivation, verified</CaseTag>
          <h2 className="mt-5 font-serif-display text-[1.7rem] font-medium leading-[1.15] text-balance md:text-[2.1rem]">
            Catching the wrong reason to move
          </h2>
          <p className="mt-5 max-w-[62ch] text-[0.95rem] leading-[1.6] text-fg-soft">
            A Series B company had already run a search through a
            contingency recruiter before coming to Cayus. The candidates
            were technically fine. Something else was off: every one of
            them was comparing three offers on comp alone, and the
            client&rsquo;s own experience was that hires like that tend to
            disengage in the first ninety days the moment a bigger number
            shows up elsewhere.
          </p>
        </Reveal>
        <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StaggerItem direction="left" className="rounded-sm border border-border bg-bg-raised p-7">
            <Label>What the resume said</Label>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                "Strong SE title, recognizable employer",
                "Three competing offers already in motion",
                "Every answer led back to a number",
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
          <StaggerItem direction="right" className="rounded-sm border border-fg bg-fg p-7 text-bg">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] opacity-60">
              What qualification found
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                "No engagement with the team or the product, when asked directly",
                "No reason to move this specific role could actually deliver",
                "Screened out before a name was ever shared",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2.5 text-[0.9rem] leading-[1.5]"
                >
                  <svg width="13" height="13" viewBox="0 0 12 12" className="mt-0.5 flex-none">
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
              Built to surface candidates whose actual reason for moving is
              something this specific role can deliver, not whoever is
              furthest along comparing offers.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Case 3: the bar held constant across an expanding map */}
      <div className="mx-auto mt-14 max-w-[900px] border-t border-border px-6 pb-28 pt-14">
        <Reveal direction="left">
          <CaseTag>Constant bar, wider net</CaseTag>
          <h2 className="mt-5 font-serif-display text-[1.7rem] font-medium leading-[1.15] text-balance md:text-[2.1rem]">
            Staying narrow while the geography widened
          </h2>
          <p className="mt-5 max-w-[62ch] text-[0.95rem] leading-[1.6] text-fg-soft">
            A fast-scaling AI startup was expanding sales coverage across US
            time zones and needed Solutions Engineer coverage beyond a
            single hub city. Widening a search geographically is the
            easiest way to quietly lower the bar: more candidates in the
            pipeline, weaker average fit, and nobody notices until the
            interviews start.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-sm border border-border bg-bg-raised p-6">
            <Label>Same criteria, six markets</Label>
            <StaggerGroup className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {REGIONS.map((r) => (
                <StaggerItem
                  key={r.city}
                  className="flex items-center justify-between gap-2 rounded-sm border border-border bg-bg px-3.5 py-2.5"
                >
                  <span className="text-[0.85rem] text-fg">{r.city}</span>
                  <span
                    className="size-1.5 flex-none rounded-full"
                    style={{
                      background: r.cleared ? "var(--metal)" : "var(--border)",
                    }}
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
            <p className="mt-4 text-[0.82rem] leading-[1.5] text-fg-soft">
              Geography changed the sourcing radius. It didn&rsquo;t change
              what counted as qualified: candidates in Chicago and Seattle
              were geographically convenient but didn&rsquo;t clear the hard
              requirements, and were passed over rather than stretching the
              bar to fill the map.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-6 border-l-2 border-metal pl-5">
            <p className="text-[0.95rem] italic leading-[1.6] text-fg">
              Built to hold quality constant while volume increased through
              broader sourcing, not through a quieter bar.
            </p>
          </div>
        </Reveal>
      </div>

      <Footer />
    </>
  );
}
