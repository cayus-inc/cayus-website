import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { HeroStage } from "@/components/ui/HeroStage";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepVisual } from "@/components/ui/StepVisual";
import { MissedCallCalculator } from "@/components/ui/MissedCallCalculator";
import { ScanField } from "@/components/ui/ScanField";
import { ParticleField } from "@/components/three/ParticleField";
import { FAQ } from "@/components/ui/FAQ";
import { CTA } from "@/components/ui/CTA";
import { GET_STARTED_HREF } from "@/lib/links";

const oldWay = [
  "An unanswered call rarely gets a callback, most buyers just move on",
  "Whoever answers next becomes their agent, not just for that house, for the whole search",
  "Nights, weekends, a showing, a client dinner, a flight, an East Coast buyer calling a West Coast agent at 11pm their time, all of it goes straight to voicemail",
];

const withCayus = [
  "Every missed call gets an instant response, day or night, weekday or weekend",
  "The lead is qualified and the showing is booked before you pick your phone back up",
  "Your number stays the same, nothing to configure",
];

const steps = [
  {
    glyph: "I",
    title: "Answered instantly",
    body: "Every missed call triggers a response within seconds, in your name. The caller never knows you weren't the one who picked up first.",
  },
  {
    glyph: "II",
    title: "Qualified automatically",
    body: "Budget, timeline, financing, and whether they're already working with another agent, checked before you ever see the lead.",
  },
  {
    glyph: "III",
    title: "On your calendar",
    body: "The showing goes straight into your schedule. You just show up.",
  },
] as const;

const pricing = [
  {
    label: "To start",
    name: "Setup",
    amount: "$299",
    suffix: "",
    body: "One-time, live within 48 hours. Call forwarding, calendar sync, and your assistant configured on your listings. Your number doesn't change.",
    featured: false,
  },
  {
    label: "Once it's live",
    name: "Monthly",
    amount: "$149",
    suffix: "/mo",
    body: "Unlimited missed-call coverage, ongoing qualification, and a dashboard showing every lead captured. Cancel anytime.",
    featured: true,
  },
];

const faqs = [
  {
    q: "I already use BoomTown or Follow Up Boss, why do I need this?",
    a: "Those tools give you a place to log a lead after you've already talked to them. They don't answer the call for you. We do, in seconds, day or night, and you're not the one configuring workflows and templates to make it happen.",
  },
  {
    q: "What if it gets a question wrong?",
    a: "You see every conversation as it happens, and you can jump in by text anytime. The assistant handles the first response and basic qualification, budget, timeline, financing, current representation, it doesn't negotiate or make promises on price.",
  },
  {
    q: "Do I have to change my number?",
    a: "No. The forwarding is invisible to whoever's calling. Your number stays exactly what's on your sign, your card, your listings.",
  },
  {
    q: "What if two calls come in at once?",
    a: "Both get answered. It's built to handle simultaneous leads, not a queue.",
  },
  {
    q: "Isn't this expensive?",
    a: "Compare it to what you're already paying for lead software that still requires you to do the answering. We're a fraction of that, and we're the ones who actually respond.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "You're covered by the 3-lead guarantee: if your assistant hasn't captured at least 3 qualified leads in your first 30 days live, we refund the setup fee and that month's subscription in full, no argument.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-20 overflow-clip px-6 pb-20 pt-12 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-20">
        <Reveal direction="left">
          <span className="mb-8 inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-fg-soft">
            <span className="h-px w-6 bg-border" />
            Right now
          </span>
          <h1 className="font-serif-display text-[2.7rem] font-medium leading-[1.05] tracking-[-0.02em] text-balance md:text-[4.6rem]">
            A missed call just cost you{" "}
            <span style={{ color: "var(--metal)" }}>$7,500 to $15,000.</span>
          </h1>
          <p className="mt-8 max-w-[46ch] text-[1.15rem] leading-[1.6] text-fg-soft">
            We catch the lead. You keep the client. An AI assistant answers
            every missed call within seconds, in your name, qualifies the
            buyer, and books the showing straight into your calendar.
            Nothing to configure, nothing to learn.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href={GET_STARTED_HREF}>Get started</CTA>
            <Link
              href="/#how"
              className="border-b border-border pb-0.5 text-[0.92rem] transition-colors hover:border-fg"
            >
              See how it works
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12} direction="right" className="order-first md:order-last">
          <HeroStage />
        </Reveal>
      </div>

      {/* Problem / solution contrast */}
      <section className="overflow-clip border-t border-border bg-bg-raised px-6 pb-28 pt-20 md:pb-40 md:pt-28">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead
              eyebrow="The bottleneck"
              title="A buyer who can't reach you calls the next name on the list."
              sub="You're at an open house, showing another property, or it's 9pm on a Sunday. Add it all up and it's not a few gaps, it's most of the week, and every minute unanswered is a minute closer to them dialing someone else."
            />
          </Reveal>
          <StaggerGroup className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            <StaggerItem direction="left" className="h-full rounded-sm border border-border bg-bg-raised p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-fg-soft">
Without an assistant
              </p>
              <ul className="mt-5 flex flex-col gap-3.5">
                {oldWay.map((t) => (
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
            <StaggerItem direction="right" className="h-full rounded-sm border border-fg bg-fg p-7 text-bg">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] opacity-60">
                With Cayus
              </p>
              <ul className="mt-5 flex flex-col gap-3.5">
                {withCayus.map((t) => (
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
        </div>
      </section>

      {/* Missed-call calculator */}
      <section id="calculator" className="overflow-clip border-t border-border px-6 py-28 md:py-40">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead
              eyebrow="Your numbers, not ours"
              title="What is it actually costing you?"
              sub="No signup, no email required. Move the sliders to your own volume and see the number."
            />
          </Reveal>
          <Reveal delay={0.12} className="mt-14">
            <MissedCallCalculator />
          </Reveal>
        </div>
      </section>

      {/* The mechanism */}
      <section
        className="overflow-clip border-b border-border px-6 py-28 md:py-40"
        style={{
          background: "#0d0d0c",
          color: "#faf8f4",
          borderColor: "rgba(250,248,244,0.12)",
        }}
      >
        <div className="mx-auto max-w-[1160px]">
          <Reveal direction="left">
            <SectionHead
              align="left"
              eyebrow="How it actually works"
              title="The moment doesn't wait. So we don't either."
              sub="Answer within the first minute and most buyers still want to talk. Wait past that and they've already called the next agent. Your assistant never misses that window, day or night, any time zone."
              invert
            />
          </Reveal>
          <Reveal delay={0.12} direction="right">
            <div
              className="mt-14 overflow-hidden rounded-sm border"
              style={{ borderColor: "rgba(250,248,244,0.14)", background: "rgba(250,248,244,0.02)" }}
            >
              <ScanField />
              <div
                className="grid grid-cols-1 gap-6 border-t px-8 py-7 sm:grid-cols-3"
                style={{ borderColor: "rgba(250,248,244,0.14)" }}
              >
                {[
                  { n: "1", label: "Call missed", body: "Your existing number, forwarded to your assistant only when you don't pick up." },
                  { n: "2", label: "Answered in seconds", body: "A text goes out immediately, in your name, before the caller tries someone else." },
                  { n: "3", label: "Showing booked", body: "Qualified and scheduled straight into your calendar." },
                ].map((s) => (
                  <div key={s.n}>
                    <span className="text-[0.72rem] font-semibold text-[#9c968a]">{s.n}</span>
                    <p className="mt-1 text-[0.9rem] font-semibold text-[#faf8f4]">{s.label}</p>
                    <p className="mt-1 text-[0.85rem] leading-[1.5] text-[#9c968a]">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="overflow-clip border-t border-border px-6 py-28 md:py-40">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead
              align="left"
              eyebrow="The process"
              title="Three steps, nothing improvised."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {steps.map((step) => (
              <StaggerItem
                key={step.glyph}
                className="group flex h-full flex-col bg-bg p-8 transition-colors duration-300 hover:bg-bg-raised"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif-display text-[2.6rem] leading-none text-border transition-colors duration-300 group-hover:text-metal">
                    {step.glyph}
                  </span>
                  <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-14 group-hover:bg-metal" />
                </div>
                <div className="mt-7">
                  <StepVisual step={step.glyph} />
                </div>
                <h3 className="mt-7 text-[1.06rem] font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[32ch] text-[0.92rem] leading-[1.58] text-fg-soft">
                  {step.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* What this isn't */}
      <section className="overflow-clip border-t border-border bg-bg-raised px-6 py-28 md:py-40">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead
              align="left"
              eyebrow="What this isn't"
              title="Done for you, on purpose."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
            {[
              {
                tag: "Not a CRM",
                title: "Nothing for you to configure",
                body: "We set it up, host it, and maintain it. You don't log into a dashboard to make it work, you just see the leads it caught.",
              },
              {
                tag: "Not a negotiation",
                title: "The sale is yours",
                body: "We answer, qualify, and book the showing. What happens once you're in the room is entirely your call.",
              },
              {
                tag: "Not a new number",
                title: "Your number stays yours",
                body: "The forwarding is invisible to the caller. Nothing changes on your sign, your card, or your listings.",
              },
            ].map((cell, i) => (
              <StaggerItem
                key={cell.tag}
                direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
                className="bg-bg-raised px-7 py-8"
              >
                <div className="mb-2.5 text-[0.85rem] text-fg-soft">
                  {cell.tag}
                </div>
                <h4 className="mb-2 text-[1.02rem] font-semibold">
                  {cell.title}
                </h4>
                <p className="text-[0.92rem] leading-[1.5] text-fg-soft">
                  {cell.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="overflow-clip border-t border-border px-6 py-28 md:py-40">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead
              eyebrow="Pricing"
              title="Set up once. Covered every day after."
              sub="A fraction of what a real estate CRM costs, and unlike a CRM, we're the ones answering. One closed deal covers 50 to 100 months of the retainer. Live in 48 hours. Cancel the monthly whenever you want."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pricing.map((p) => (
              <StaggerItem
                key={p.name}
                direction={p.featured ? "right" : "left"}
                className={`rounded-sm border px-7 py-8 transition-all hover:-translate-y-1 ${
                  p.featured
                    ? "border-fg bg-fg text-bg"
                    : "border-border hover:border-metal"
                }`}
              >
                <p
                  className={`mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
                    p.featured ? "opacity-60" : "text-fg-soft"
                  }`}
                >
                  {p.label}
                </p>
                <p className="mb-5 text-[1.02rem] font-semibold">{p.name}</p>
                <div className="font-serif-display text-[2.2rem]">
                  {p.amount}
                  <small
                    className={`font-sans text-[0.95rem] ${
                      p.featured ? "opacity-60" : "text-fg-soft"
                    }`}
                  >
                    {p.suffix}
                  </small>
                </div>
                <p
                  className={`mt-3.5 text-[0.92rem] leading-[1.55] ${
                    p.featured ? "opacity-80" : "text-fg-soft"
                  }`}
                >
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.12}>
            <div className="mt-6 flex items-start gap-3 rounded-sm border border-border bg-bg-raised px-6 py-5">
              <svg width="18" height="18" viewBox="0 0 12 12" className="mt-0.5 flex-none text-metal">
                <path
                  d="M2 6.5 L5 9.5 L10 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[0.92rem] leading-[1.55] text-fg-soft">
                <strong className="text-fg">3-lead guarantee.</strong> If your
                assistant hasn&rsquo;t captured at least 3 qualified leads in
                your first 30 days, we refund the setup fee and that
                month&rsquo;s subscription in full.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-4 flex items-start gap-3 rounded-sm border border-border bg-bg-raised px-6 py-5">
              <svg width="18" height="18" viewBox="0 0 12 12" className="mt-0.5 flex-none text-metal">
                <path
                  d="M2 6.5 L5 9.5 L10 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[0.92rem] leading-[1.55] text-fg-soft">
                <strong className="text-fg">Also included, no extra charge.</strong>{" "}
                Showing reminders, follow-ups for leads who weren&rsquo;t ready
                yet, a weekly report on what your assistant captured, and
                one-click review requests once a deal closes. We run all of
                it, you set up nothing extra.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="overflow-clip border-t border-border bg-bg-raised px-6 py-28 md:py-40">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead eyebrow="Questions" title="Answered plainly." />
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <FAQ items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative overflow-hidden border-t px-6 py-32 text-center"
        style={{ background: "#0d0d0c", color: "#faf8f4", borderColor: "rgba(250,248,244,0.12)" }}
      >
        <ParticleField
          className="absolute inset-0 opacity-60"
          count={220}
          spread={3.6}
          color="#8a8375"
          size={0.045}
          style={{
            maskImage: "radial-gradient(ellipse 60% 55% at center, black 40%, transparent 92%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 55% at center, black 40%, transparent 92%)",
          }}
        />
        <div className="relative">
          <Reveal>
            <h2 className="mx-auto max-w-[30ch] font-serif-display text-[2.1rem] font-medium text-balance md:text-[3.1rem]">
              Your next lead is calling right now. Let&rsquo;s make sure someone answers.
            </h2>
            <div className="mt-9 flex justify-center">
              <CTA
                href={GET_STARTED_HREF}
                variant="invert"
                style={{ background: "#faf8f4", color: "#0d0d0c" }}
              >
                Get started
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
