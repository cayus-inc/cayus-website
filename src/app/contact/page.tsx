import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Tell us about the role. We'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-16 px-6 pb-28 pt-24 md:grid-cols-[0.9fr_1.1fr] md:pt-32">
        <Reveal direction="left">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            Book a call
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
        <Reveal delay={0.1} direction="right">
          <ContactForm />
        </Reveal>
      </div>
      <Footer />
    </>
  );
}
