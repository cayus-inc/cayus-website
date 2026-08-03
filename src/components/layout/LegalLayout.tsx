import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[720px] px-6 pb-24 pt-16">
        <p className="mb-8 text-sm text-fg-soft">Last updated: {updated}</p>
        <h1 className="mb-10 font-serif-display text-3xl font-medium">
          {title}
        </h1>
        <div className="legal-prose space-y-6 text-[0.95rem] leading-[1.7] text-fg-soft [&_a]:text-fg [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-fg [&_li]:mb-1 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
