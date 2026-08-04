import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cayus Cookie Policy.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="August 2026">
      <p>
        The Cayus website (cayus.io) does not set cookies. No essential
        cookies, no advertising cookies, no cross-site tracking, no
        marketing pixels. That&rsquo;s also why there&rsquo;s no cookie
        consent banner: there&rsquo;s nothing to ask consent for.
      </p>
      <h2>Changes</h2>
      <p>
        If we ever add analytics or marketing cookies, this page will be
        updated first and a consent banner will be added before any such
        cookie is set.
      </p>
      <h2>Contact</h2>
      <p>
        <a href="mailto:privacy@cayus.io">privacy@cayus.io</a>
      </p>
    </LegalLayout>
  );
}
