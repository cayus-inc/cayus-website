import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { ParticleField } from "@/components/three/ParticleField";

export const metadata: Metadata = {
  title: "Request a call",
  description:
    "Tell us about the role. We'll get back to you within one business day.",
};

const STEPS = [
  { title: "You send the basics", body: "The role, the company, what you need." },
  { title: "We reply directly", body: "Usually within one business day, no ticket queue." },
  { title: "We set up a short call", body: "To scope the search and agree the criteria." },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-16 overflow-x-hidden px-6 pb-28 pt-24 md:grid-cols-[0.9fr_1.1fr] md:pt-32">
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 hidden size-[300px] md:block"
          >
            <ParticleField
              className="absolute inset-0"
              count={160}
              spread={2.2}
              color="#8f8875"
              size={0.045}
              style={{
                maskImage: "radial-gradient(circle at center, black 40%, transparent 78%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 78%)",
              }}
            />
          </div>
          <Reveal direction="left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
              Request a call
            </p>
            <h1 className="mt-4 font-serif-display text-[2.2rem] font-medium leading-[1.08] text-balance md:text-[2.7rem]">
              Tell us about the role.
            </h1>
            <p className="mt-6 max-w-[42ch] text-[1rem] leading-[1.65] text-fg-soft">
              No scheduling link, no calendar dance. Give us the basics and
              we&rsquo;ll reply directly, usually within one business day, to
              set up a short call.
            </p>
          </Reveal>
          <StaggerGroup className="relative mt-12 flex flex-col gap-5 border-t border-border pt-8">
            {STEPS.map((s, i) => (
              <StaggerItem key={s.title} direction="left" className="flex gap-4">
                <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full border border-border text-[0.72rem] font-semibold text-fg-soft">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[0.9rem] font-semibold">{s.title}</p>
                  <p className="mt-0.5 text-[0.85rem] leading-[1.5] text-fg-soft">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
        <Reveal delay={0.1} direction="right">
          <ContactForm />
        </Reveal>
      </div>
      <Footer />
    </>
  );
}
