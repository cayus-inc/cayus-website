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
    title: "The response is the unit",
    body: "Not a lead list, not a login you have to remember to check. A reply actually sent, in seconds, and a showing on your calendar.",
  },
  {
    title: "Your number, unchanged",
    body: "Nothing to reprint, nothing to migrate. The forwarding is invisible to whoever's calling.",
  },
  {
    title: "You see everything",
    body: "Every conversation the assistant has is visible to you, and you can take over by text at any time.",
  },
  {
    title: "Done for you, not by you",
    body: "We configure it, host it, and keep it running. You don't manage software, you just get the lead.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[840px] overflow-clip px-6 pb-28 pt-14 md:pt-20">
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
              The agent who answers first usually wins the deal.
            </h1>
            <p className="mt-7 max-w-[62ch] text-[1.05rem] leading-[1.65] text-fg-soft">
              Most agents don&rsquo;t lose leads because they&rsquo;re bad at
              the job. They lose them because no one can be reachable
              twenty-four hours a day, and buyers don&rsquo;t wait for a
              convenient time to call. The fix isn&rsquo;t working more
              hours. It&rsquo;s making sure the response happens even when
              you can&rsquo;t be the one sending it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-sm border border-border bg-bg-raised p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                What we actually deliver
              </p>
              <p className="mt-3 text-[0.95rem] leading-[1.65] text-fg-soft">
                Not a CRM you have to configure and remember to check. An
                assistant that already works the moment it&rsquo;s live,
                answering in your name, qualifying the lead, and putting the
                showing on your calendar. You show up, that&rsquo;s it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} direction="right">
            <div className="h-full rounded-sm border border-border bg-bg-raised p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                Why that&rsquo;s the actual differentiator
              </p>
              <p className="mt-3 text-[0.95rem] leading-[1.65] text-fg-soft">
                Any agent can buy lead software. Almost none of them
                actually respond to a lead in the first sixty seconds,
                because that requires being awake and available around the
                clock, which no person can do alone. That gap is what we
                close.
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
              A CRM that logs your leads costs hundreds a month and still
              leaves the answering to you. We charge a fraction of that,
              because the assistant does the answering itself. That&rsquo;s
              the basis for what we charge, not a number borrowed from
              software that does less.
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
              How we set up a new agent
            </p>
            <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-[1.65] text-fg-soft">
              One assistant per agent, configured on your listings, your
              areas, and how you actually talk to a lead, not a generic bot
              reused across every client. Live within 48 hours of setup,
              and adjusted as your listings change.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <CTA href="/contact">Get started</CTA>
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
