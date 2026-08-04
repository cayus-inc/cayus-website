import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { CTA } from "@/components/ui/CTA";
import { ParticleField } from "@/components/three/ParticleField";

export const metadata: Metadata = {
  title: "About",
  description: "What Cayus does, and the rules it operates under.",
};

const commitments = [
  {
    title: "The interview is the unit",
    body: "Not the profile, not the placement. A candidate sourced, contacted, who said yes, and whose slot is on your calendar.",
  },
  {
    title: "No names before you sign",
    body: "Every candidate is anonymized until the engagement terms are agreed in writing. No exceptions, for any client.",
  },
  {
    title: "Verified, never invented",
    body: "Every quote in a candidate profile is verbatim, timestamped, and traceable to the source message. Nothing is paraphrased to sound better.",
  },
  {
    title: "One thing, not everything",
    body: "We don't negotiate offers, manage counter-offers, or make the hiring call. That decision, and that judgment, stay with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[840px] overflow-x-hidden px-6 pb-28 pt-24 md:pt-32">
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 hidden size-[460px] md:block"
          >
            <ParticleField
              className="absolute inset-0"
              count={260}
              spread={2.6}
              color="#8f8875"
              size={0.05}
              style={{
                maskImage: "radial-gradient(circle at center, black 45%, transparent 78%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 45%, transparent 78%)",
              }}
            />
            <span
              className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: "var(--metal)",
                boxShadow: "0 0 24px 6px var(--metal), 0 0 60px 16px rgba(143,136,117,0.35)",
              }}
            />
          </div>
          <Reveal direction="left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
              About
            </p>
            <h1 className="mt-4 font-serif-display text-[2.4rem] font-medium leading-[1.05] text-balance md:text-[3.4rem]">
              Companies grow stronger by who they hire, not by how many they
              hire.
            </h1>
            <p className="mt-7 max-w-[62ch] text-[1.05rem] leading-[1.65] text-fg-soft">
              Most companies get weaker as they get bigger: more people, more
              meetings, more coordination, without a matching gain in what
              any one person in the room can actually do. The fix
              isn&rsquo;t hiring more. It&rsquo;s hiring someone genuinely
              better at the job than the team already is. That kind of hire
              doesn&rsquo;t add headcount. It changes what the company is
              capable of.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-sm border border-border bg-bg-raised p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                What we sell the candidate
              </p>
              <p className="mt-3 text-[0.95rem] leading-[1.65] text-fg-soft">
                Not an opening. A seat on a specific mission: what the
                company is building, who it&rsquo;s for, and what changes,
                for the product and the customers who use it, because this
                one person is in the room. Comp and the practical terms are
                part of that, stated plainly. They are not the pitch. The
                impact is the pitch.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} direction="right">
            <div className="h-full rounded-sm border border-border bg-bg-raised p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                Why that&rsquo;s the actual differentiator
              </p>
              <p className="mt-3 text-[0.95rem] leading-[1.65] text-fg-soft">
                Finding a name is close to free now. Getting a strong,
                currently-employed candidate to take the call isn&rsquo;t a
                search problem, it&rsquo;s a persuasion problem: does the
                offer read as a real opportunity or a form letter. We keep
                AI where it belongs, doing the finding, never the writing
                that has to actually land.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-6 rounded-sm border border-border bg-bg-raised p-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
              Why the price is what it is
            </p>
            <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-[1.65] text-fg-soft">
              One hire like this changes what a team can ship. Against that,
              the cost of getting the conversation in front of you, once,
              done properly, is small. That&rsquo;s the actual basis for
              what we charge, not a percentage borrowed from how staffing
              has always been priced.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-16 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            What we operate under
          </p>
        </Reveal>
        <StaggerGroup className="mt-6 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {commitments.map((c, i) => (
            <StaggerItem
              key={c.title}
              direction={i % 2 === 0 ? "left" : "right"}
              className="bg-bg px-7 py-8"
            >
              <h3 className="text-[1.02rem] font-semibold">{c.title}</h3>
              <p className="mt-2.5 text-[0.92rem] leading-[1.55] text-fg-soft">
                {c.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-16 rounded-sm border border-border bg-bg-raised p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
              How we take on a search
            </p>
            <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-[1.65] text-fg-soft">
              One search at a time, run against criteria specific to that
              role, not a template reused across clients. We&rsquo;d
              rather run fewer searches well than spread the same attention
              across many at once. Which roles that means depends on where
              the hire genuinely changes what a company can do, not on a
              fixed list of titles.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <CTA href="/contact">Request a call</CTA>
          <Link
            href="/#how"
            className="ml-6 border-b border-border pb-0.5 text-[0.92rem] transition-colors hover:border-fg"
          >
            See how it works
          </Link>
        </Reveal>
      </div>
      <Footer />
    </>
  );
}
