import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { HeroStage } from "@/components/ui/HeroStage";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepVisual } from "@/components/ui/StepVisual";
import { ScanField } from "@/components/ui/ScanField";
import { ParticleField } from "@/components/three/ParticleField";
import { FAQ } from "@/components/ui/FAQ";
import { CTA } from "@/components/ui/CTA";

const BOOK_A_CALL_HREF = "/contact";

const oldWay = [
  "A cut of first-year salary, due only if it works out",
  "You find out if it worked after the hire is made",
  "The incentive is to close fast, not to get the fit right",
];

const withCayus = [
  "A fixed price per interview that actually happens",
  "You see who you're meeting before you commit to anything",
  "We're paid to get you a conversation, not to talk you into a hire",
];

const steps = [
  {
    glyph: "I",
    title: "Sourced and qualified",
    body: "We source against your open role, verify the profile is current, and contact candidates directly. Only the ones who agree to talk move forward.",
  },
  {
    glyph: "II",
    title: "Checked against your criteria",
    body: "Hard requirements, comp range, availability, and a real reason they'd move, verified before you ever see a name.",
  },
  {
    glyph: "III",
    title: "On your calendar",
    body: "You get the interview, coordinated on both sides. You run the conversation and make the call.",
  },
] as const;

const pricing = [
  {
    label: "To start",
    name: "Per interview",
    amount: "$800",
    suffix: "-1,500",
    body: "Billed only when the interview happens and you don't reject it as off-brief. Nothing owed otherwise. How every engagement begins.",
    featured: false,
  },
  {
    label: "Once it's working",
    name: "Monthly pipeline",
    amount: "$10k",
    suffix: "/mo",
    body: "The same unit, packaged at volume: twelve interviews a month, one active search. The counter is visible to you at every point.",
    featured: true,
  },
];

const faqs = [
  {
    q: "We already have a recruiter, why do we need this?",
    a: "Good, keep them close for the close and the culture fit, that's their strength. What we do is get you conversations with people who already said yes and were not on the market yesterday. Ask your recruiter how many passive candidates they got to reply to a cold message this month. If the number is good, you don't need us.",
  },
  {
    q: "Can't we just source candidates ourselves?",
    a: "You could, the tools are public. What takes the time is not finding fifty profiles, it's getting even one of them to say yes to a conversation with a company they weren't looking at. That's the part that doesn't scale with a subscription.",
  },
  {
    q: "How do I know these candidates are real and actually interested?",
    a: "You get a verbatim quote from each one, in their own words, about why they'd move. And you only pay if the interview actually happens. There's no incentive for us to send you someone who isn't serious.",
  },
  {
    q: "Isn't this expensive per interview?",
    a: "Compare it to a contingency search: 20-30% of first-year salary for a technical role, due only after a hire is made, with no visibility until then. A handful of interviews at our rate is a fraction of that, and you're paying for conversations that happen, not a percentage owed on the back end.",
  },
  {
    q: "What if none of them get hired?",
    a: "That happens, and it isn't on us to fix, the same way a great first date isn't the matchmaker's job to guarantee a marriage. What we control is that the conversation happens and that the person was real, qualified, and interested. The hire is yours to make.",
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
            Qualified interviews, on your calendar
          </span>
          <h1 className="font-serif-display text-[3.4rem] font-medium leading-[0.95] tracking-[-0.02em] text-balance md:text-[6.8rem]">
            We book the
            <br />
            <span style={{ color: "var(--metal)" }}>interview.</span>
            <br />
            You decide who you hire.
          </h1>
          <p className="mt-8 max-w-[46ch] text-[1.15rem] leading-[1.6] text-fg-soft">
            We source, contact, and qualify candidates who already said yes
            to a conversation with you, against criteria you approve before
            we start. The hiring decision stays entirely yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href={BOOK_A_CALL_HREF}>Request a call</CTA>
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
              title="Great candidates don't apply. They have to be found."
              sub="Post a role and you get the people actively looking, which is not the same set as the people who'd actually move the needle. Your best hire is usually not job-hunting. Someone has to go get them a conversation."
            />
          </Reveal>
          <StaggerGroup className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            <StaggerItem direction="left" className="h-full rounded-sm border border-border bg-bg-raised p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-fg-soft">
                Contingency search
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
              title="The web doesn't stop moving. So the search doesn't either."
              sub="Every profile that could fit your role is watched against your criteria continuously, not in a weekly batch. A resume update, a new post, a role change: each one is a signal. When enough of them line up, that's the moment we reach out, not before, and not after the person has already gone cold."
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
                  { n: "1", label: "Signal detected", body: "A resume update, a new post, a role change on a profile that fits." },
                  { n: "2", label: "Checked against criteria", body: "Verified current, verified qualified, before anyone is contacted." },
                  { n: "3", label: "Interview booked", body: "Reached out at the right moment, not before, not after." },
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
              title="We stop at the interview. On purpose."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
            {[
              {
                tag: "Not a candidate list",
                title: "No names before you sign",
                body: "You see an anonymized profile first. Names are released only once terms are agreed, the same rule for every client.",
              },
              {
                tag: "Not a placement guarantee",
                title: "The hiring call is yours",
                body: "We don't negotiate offers or manage counter-offers. Fit and final judgment stay with you, every time.",
              },
              {
                tag: "Not volume outreach",
                title: "Every line is written for one person",
                body: "No mail-merge. Each message is grounded in something real about that candidate's work, or it doesn't go out.",
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
              title="One unit. Two ways to pay for it."
              sub="Every engagement bills the same thing, a qualified interview held. You start per interview; once the search is proven, most clients move to the monthly version of the same unit. No setup fee, no retainer you can't cancel."
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
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-sm border border-dashed border-border px-6 py-5 text-[0.9rem] text-fg-soft">
              <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-fg">
                Optional add-on
              </span>
              <span>
                A success fee (5-8% of first-year salary, paid only on hire)
                is available on either plan. It&rsquo;s well below the
                20-30% a contingency search typically runs, since you&rsquo;re
                already paying per interview by the time it applies. It
                exists to sharpen incentives on harder searches, not to
                replace the base price.
              </span>
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
              Your best hire isn&rsquo;t looking. Let&rsquo;s change that.
            </h2>
            <div className="mt-9 flex justify-center">
              <CTA
                href={BOOK_A_CALL_HREF}
                variant="invert"
                style={{ background: "#faf8f4", color: "#0d0d0c" }}
              >
                Request a call
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
