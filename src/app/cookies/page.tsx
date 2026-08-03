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
        The Cayus website (cayus.io) uses only essential cookies required
        for the site to function correctly. We do not use advertising
        cookies, cross-site tracking, or marketing pixels.
      </p>
      <h2>Essential cookies</h2>
      <p>
        Used for basic site functionality (such as remembering your theme
        preference). These cannot be disabled without breaking the site.
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
