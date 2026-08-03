import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { CTA } from "@/components/ui/CTA";

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
      <div className="mx-auto max-w-[840px] px-6 pb-28 pt-24 md:pt-32">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            About
          </p>
          <h1 className="mt-4 font-serif-display text-[2.4rem] font-medium leading-[1.05] text-balance md:text-[3.4rem]">
            A narrow bet on one thing: getting the right person into the
            room.
          </h1>
          <p className="mt-7 max-w-[62ch] text-[1.05rem] leading-[1.65] text-fg-soft">
            Cayus runs one search at a time, on Sales Engineer and Solutions
            Engineer roles at funded AI companies in the US. Not because the
            method doesn&rsquo;t generalize, but because a narrow, well-run
            search beats a broad, thin one — for the candidates we contact
            and for the clients we work with.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-16 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            What we operate under
          </p>
        </Reveal>
        <StaggerGroup className="mt-6 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {commitments.map((c) => (
            <StaggerItem key={c.title} className="bg-bg px-7 py-8">
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
              Why one segment, not a broad practice
            </p>
            <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-[1.65] text-fg-soft">
              Depth on one role, in one market, beats a wide net every
              time — the sourcing gets sharper, the qualification bar gets
              clearer, and the candidates we&rsquo;ve already talked to
              compound into the next search instead of starting from zero.
              That focus is deliberate, and it stays until it stops being
              the right call.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <CTA href="mailto:contact@cayus.io?subject=About%20Cayus">
            Talk to us
          </CTA>
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
