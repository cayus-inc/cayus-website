import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Seal } from "@/components/ui/Seal";
import { SectionHead } from "@/components/ui/SectionHead";
import { StepVisual } from "@/components/ui/StepVisual";
import { FAQ } from "@/components/ui/FAQ";
import { CTA } from "@/components/ui/CTA";

const BOOK_A_CALL_HREF = "mailto:contact@cayus.io?subject=Booking%20a%20call";

const proof = [
  "Verified before every contact",
  "Anonymized until you sign",
  "Billed only if the interview is held",
  "No mail-merge, ever",
];

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
    title: "Checked against your scorecard",
    body: "Hard requirements, comp range, availability, and a real reason they'd move — verified before you ever see a name.",
  },
  {
    glyph: "III",
    title: "On your calendar",
    body: "You get the interview, coordinated on both sides. You run the conversation and make the call.",
  },
] as const;

const pricing = [
  {
    label: "Per interview",
    amount: "$800",
    suffix: "–1,500",
    body: "Billed only when the interview happens and you don't reject it as off-brief. Nothing owed otherwise.",
    featured: false,
  },
  {
    label: "Monthly pipeline",
    amount: "$10k",
    suffix: "/mo",
    body: "Twelve interviews a month, one active search. The counter is visible to you at every point.",
    featured: true,
  },
  {
    label: "Placement success fee",
    amount: "5",
    suffix: "–8%",
    body: "Optional, reduced. It exists to align incentives, not to be the revenue model.",
    featured: false,
  },
];

const faqs = [
  {
    q: "We already have a recruiter, why do we need this?",
    a: "Good, keep them close for the close and the culture fit, that's their strength. What we do is get you three conversations with people who already said yes and were not on the market yesterday. Ask your recruiter how many passive candidates they got to reply to a cold message this month. If the number is good, you don't need us.",
  },
  {
    q: "Can't we just source candidates ourselves?",
    a: "You could, the tools are public. What takes the time is not finding fifty profiles, it's getting three of them to say yes to a conversation with a company they weren't looking at. That's the part that doesn't scale with a subscription.",
  },
  {
    q: "How do I know these candidates are real and actually interested?",
    a: "You get a verbatim quote from each one, in their own words, about why they'd move. And you only pay if the interview actually happens. There's no incentive for us to send you someone who isn't serious.",
  },
  {
    q: "Isn't this expensive per interview?",
    a: "Compare it to a contingency search: a percentage of a year-one salary, due only after a hire is made, with no visibility until then. Here you pay per conversation that actually happens, and you decide who you hire from there.",
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
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-20 px-6 pb-32 pt-20 md:grid-cols-[1.1fr_0.9fr] md:pb-44 md:pt-44">
        <Reveal>
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[0.72rem] font-medium text-fg-soft">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-metal/50" />
              <span className="relative inline-flex size-1.5 rounded-full bg-metal" />
            </span>
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
            to a conversation with you, against a scorecard you approve
            before we start. The hiring decision stays entirely yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href={BOOK_A_CALL_HREF}>Book a call</CTA>
            <Link
              href="/#how"
              className="border-b border-border pb-0.5 text-[0.92rem] transition-colors hover:border-fg"
            >
              See how it works
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="order-first md:order-last">
          <Seal />
        </Reveal>
      </div>

      {/* Proof strip */}
      <div className="border-y border-border bg-bg-raised">
        <div className="mx-auto max-w-[1160px] px-6 py-6">
          <StaggerGroup className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {proof.map((p) => (
              <StaggerItem key={p} className="flex items-center gap-2.5 whitespace-nowrap">
                <svg width="14" height="14" viewBox="0 0 12 12" className="flex-none">
                  <path
                    d="M2 6.5 L5 9.5 L10 3"
                    fill="none"
                    stroke="var(--metal)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[0.85rem] text-fg-soft">{p}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>

      {/* Who this is for */}
      <div className="border-b border-border px-6 py-10 text-center">
        <Reveal>
          <p className="mx-auto max-w-[62ch] text-[0.98rem] leading-[1.6] text-fg-soft">
            Built for one search: <span className="text-fg">Sales Engineers and Solutions
            Engineers at funded AI startups in the US</span>, the GTM role
            that stays open longest and costs the most to leave empty. If
            that&rsquo;s your req, this is built for exactly that.
          </p>
        </Reveal>
      </div>

      {/* Problem / solution contrast */}
      <section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead
              eyebrow="The bottleneck"
              title="Great candidates don't apply. They have to be found."
              sub="Post a role and you get the people actively looking, which is not the same set as the people who'd actually move the needle. The best hire for a Sales Engineer seat is usually not job-hunting. Someone has to go get them a conversation."
            />
          </Reveal>
          <StaggerGroup className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            <StaggerItem className="h-full rounded-sm border border-border bg-bg-raised p-7">
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
            <StaggerItem className="h-full rounded-sm border border-fg bg-fg p-7 text-bg">
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

      {/* How it works */}
      <section id="how" className="border-t border-border px-6 py-28 md:py-40">
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

      {/* One thing, done well — forced-dark band regardless of theme */}
      <section
        className="border-t border-border px-6 py-28 md:py-40"
        style={{
          background: "#0d0d0c",
          color: "#faf8f4",
          borderColor: "rgba(250,248,244,0.12)",
        }}
      >
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead
              eyebrow="Focused by design"
              title="One thing. Done well, every time."
              sub="A generalist recruiter sources, screens, negotiates, and closes, all at once, for a fee that depends on the hire. We do one part of that, and only that part, so it gets our full attention."
              invert
            />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-auto mt-12 max-w-3xl space-y-6">
              <div>
                <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#9c968a]">
                  A generalist agency: everything, spread thin
                </p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {["Source", "Screen", "Negotiate", "Close"].map((x) => (
                    <div
                      key={x}
                      className="rounded-sm border p-4"
                      style={{ borderColor: "rgba(250,248,244,0.14)", background: "rgba(250,248,244,0.03)" }}
                    >
                      <span className="text-[0.78rem] text-[#9c968a]">{x}</span>
                      <div
                        className="mt-3 h-1 w-2/3 rounded-full"
                        style={{ background: "rgba(250,248,244,0.2)" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#faf8f4]">
                  Cayus: one thing, at the highest level
                </p>
                <div
                  className="flex items-center gap-4 rounded-sm border p-4"
                  style={{ borderColor: "rgba(250,248,244,0.28)", background: "rgba(250,248,244,0.07)" }}
                >
                  <span className="text-[0.9rem] font-semibold">
                    The qualified interview
                  </span>
                  <div className="ml-auto h-1.5 flex-1 rounded-full" style={{ background: "#faf8f4" }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What this isn't */}
      <section className="border-t border-border bg-bg-raised px-6 py-28 md:py-40">
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
                body: "You see an anonymized profile first. Names are released only once terms are agreed — the same rule for every client.",
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
            ].map((cell) => (
              <StaggerItem key={cell.tag} className="bg-bg-raised px-7 py-8">
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
      <section id="pricing" className="border-t border-border px-6 py-28 md:py-40">
        <div className="mx-auto max-w-[1160px]">
          <Reveal>
            <SectionHead
              eyebrow="Pricing"
              title="You see the counter, not our hours."
              sub="One interview, one line item. No setup fee, no retainer you can't cancel."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricing.map((p) => (
              <StaggerItem
                key={p.label}
                className={`rounded-sm border px-7 py-8 transition-all hover:-translate-y-1 ${
                  p.featured
                    ? "border-fg bg-fg text-bg"
                    : "border-border hover:border-metal"
                }`}
              >
                <p
                  className={`mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
                    p.featured ? "opacity-60" : "text-fg-soft"
                  }`}
                >
                  {p.label}
                </p>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-bg-raised px-6 py-28 md:py-40">
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
        className="relative overflow-hidden border-t px-6 py-28 text-center"
        style={{ background: "#0d0d0c", color: "#faf8f4", borderColor: "rgba(250,248,244,0.12)" }}
      >
        <Reveal>
          <h2 className="mx-auto max-w-[22ch] font-serif-display text-[2rem] font-medium text-balance md:text-[2.9rem]">
            One thing we don&rsquo;t do: decide who you hire.
          </h2>
          <div className="mt-8 flex justify-center">
            <CTA
              href={BOOK_A_CALL_HREF}
              variant="invert"
              style={{ background: "#faf8f4", color: "#0d0d0c" }}
            >
              Book a call
            </CTA>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
