import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Concept walkthroughs of the Cayus method: the problem, the tradeoffs, and what gets screened out and why.",
};

interface CaseStudy {
  tag: string;
  title: string;
  situation: string;
  problem: string;
  approach: string;
  rejected: string;
  intent: string;
}

const cases: CaseStudy[] = [
  {
    tag: "Depth over pedigree",
    title: "Qualifying for technical depth, not a title",
    situation:
      "A Series A company building developer tooling for AI inference needed a Solutions Engineer who could run a genuinely technical demo in front of skeptical ML engineers, not walk a prospect through a slide deck.",
    problem:
      "Most inbound-looking candidates read well on paper: strong titles, recognizable employers. Very few had actually run hands-on technical demos against a buyer who could ask a hard follow-up question.",
    approach:
      "The scorecard's hard requirement wasn't a title or a company name, it was recent, hands-on work against a comparable technical stack. Qualification conversations probed for one thing: could this person answer an unscripted technical question, not just deliver a rehearsed one.",
    rejected:
      "A candidate with an impressive SE title at a well-known company was screened out. Their actual day-to-day was demoing a pre-built dashboard, not the product's technical internals. It surfaced directly when asked what they'd do if the demo broke live.",
    intent:
      "The search was built to produce a small number of technically credible conversations, not a long list of polished-looking ones.",
  },
  {
    tag: "Motivation, verified",
    title: "Catching the wrong reason to move",
    situation:
      "A Series B company had already run a search through a contingency recruiter before coming to Cayus. The candidates were technically fine. Something else was off.",
    problem:
      "Every candidate surfaced was comparing three offers on comp alone. The client's own experience: hires like that tend to disengage in the first ninety days the moment a bigger number shows up elsewhere.",
    approach:
      "Qualification required a specific, verified reason for being open, asked directly and captured verbatim, not inferred from a resume. A vague or purely comp-driven answer doesn't clear the bar, regardless of how strong the background looks.",
    rejected:
      "A candidate with an excellent resume gave one reason for moving: a number. No engagement with the team, the product, or the problem space when asked directly. Screened out before a name was ever shared.",
    intent:
      "Built to surface candidates whose actual reason for moving is something this specific role can deliver, not whoever is furthest along comparing offers.",
  },
  {
    tag: "Constant bar, wider net",
    title: "Staying narrow while the geography widened",
    situation:
      "A fast-scaling AI startup was expanding sales coverage across US time zones and needed Solutions Engineer coverage beyond a single hub city.",
    problem:
      "Widening a search geographically is the easiest way to quietly lower the bar: more candidates in the pipeline, weaker average fit, and nobody notices until the interviews start.",
    approach:
      "The same hard scorecard applied regardless of region. Freshness was verified the same way for every profile, in every city. Geography changed the sourcing radius. It didn't change what counted as qualified.",
    rejected:
      "Several candidates were geographically convenient, based exactly where the client needed coverage, but their current tenure or scope didn't clear the hard requirements. Passed over rather than stretching the bar to fill the map.",
    intent:
      "Built to hold quality constant while volume increased through broader sourcing, not through a quieter bar.",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[900px] px-6 pb-16 pt-24 md:pt-32">
        <Reveal>
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

      <StaggerGroup className="mx-auto max-w-[900px] px-6 pb-28">
        {cases.map((c, i) => (
          <StaggerItem
            key={c.title}
            className={i > 0 ? "mt-14 border-t border-border pt-14" : ""}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-fg-soft">
              Concept: {c.tag}
            </span>
            <h2 className="mt-5 font-serif-display text-[1.7rem] font-medium leading-[1.15] text-balance md:text-[2.1rem]">
              {c.title}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                  The situation
                </p>
                <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
                  {c.situation}
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                  The problem
                </p>
                <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
                  {c.problem}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-border bg-bg-raised p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                The approach
              </p>
              <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
                {c.approach}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                Who got screened out
              </p>
              <p className="mt-2.5 text-[0.95rem] leading-[1.6] text-fg-soft">
                {c.rejected}
              </p>
            </div>

            <div className="mt-6 border-l-2 border-metal pl-5">
              <p className="text-[0.95rem] italic leading-[1.6] text-fg">
                {c.intent}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Footer />
    </>
  );
}
