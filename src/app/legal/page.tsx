import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Cayus Legal Notice (Mentions Legales).",
};

export default function LegalNoticePage() {
  return (
    <LegalLayout title="Legal Notice" updated="August 2026">
      <h2>1. Publisher</h2>
      <ul>
        <li>EI - ENZO ROMA</li>
        <li>Agen, France</li>
        <li>SIRET: 98972292100024</li>
        <li>
          Email: <a href="mailto:contact@cayus.io">contact@cayus.io</a>
        </li>
      </ul>

      <h2>2. Publication Director</h2>
      <p>
        The publication director of cayus.io is Enzo Roma, acting as legal
        representative of the company.
      </p>

      <h2>3. Hosting</h2>
      <ul>
        <li>
          <strong>Website:</strong> Vercel Inc., 340 S Lemon Ave #4133,
          Walnut, CA 91789, USA
        </li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content published on cayus.io, including text, graphics, logos,
        and software, is the exclusive property of Enzo Roma and protected
        under French and international intellectual property law.
        Reproduction, distribution, or commercial use without prior written
        consent is prohibited.
      </p>

      <h2>5. Data Processing Sub-processors</h2>
      <p>
        Cayus uses a small number of processors, each operating under a Data
        Processing Agreement in compliance with GDPR (EU) 2016/679. See our{" "}
        <a href="/privacy">Privacy Policy</a> §8 for the categories of
        processors used; identities are disclosed on request under the
        rights described there.
      </p>

      <h2>6. Cookies</h2>
      <p>
        cayus.io uses only essential cookies. See our{" "}
        <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>7. Applicable Law</h2>
      <p>
        This website is subject to French law. Disputes fall under the
        exclusive jurisdiction of the competent French courts, unless
        mandatory provisions of the user&apos;s country of residence apply.
      </p>

      <h2>8. Contact</h2>
      <p>
        <a href="mailto:contact@cayus.io">contact@cayus.io</a>
      </p>
    </LegalLayout>
  );
}
