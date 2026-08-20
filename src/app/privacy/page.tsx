import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cayus Privacy Policy. How we collect, use, store, and protect personal data under GDPR and CCPA.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <h2>1. Introduction</h2>
      <p>
        Cayus (Agen, France) provides an AI assistant that answers missed
        calls on behalf of real estate agents (&quot;clients&quot;),
        qualifies the caller, and books a showing. This policy explains how
        we handle personal data belonging to two groups: our clients, and
        the callers who reach out to a client and interact with the
        assistant (&quot;leads&quot;).
      </p>

      <h2>2. Data Controller</h2>
      <ul>
        <li>EI - ENZO ROMA</li>
        <li>Agen, France</li>
        <li>SIRET: 98972292100024</li>
        <li>
          Email: <a href="mailto:contact@cayus.io">contact@cayus.io</a>
        </li>
      </ul>

      <h2>3. Client Data We Collect</h2>
      <ul>
        <li>Contact information: name, work email, brokerage, listed phone number</li>
        <li>Calendar access, used only to check availability and book showings</li>
        <li>Payment information: processed securely through Stripe. We do not store card numbers.</li>
      </ul>

      <h2>4. Lead Data We Collect</h2>
      <p>
        When someone calls a client&apos;s number and the call goes
        unanswered, our assistant texts that caller back on the
        client&apos;s behalf. We only contact people who called the client
        first; we do not send unsolicited outbound messages to purchased or
        sourced lists. We record the phone number, the conversation, and
        any qualification details the lead shares (budget, timeline,
        financing status, whether they are already working with another
        agent).
      </p>

      <h2>5. Legal Basis and Consent</h2>
      <p>
        Lead data is processed on the basis of the client&apos;s legitimate
        interest in responding to their own inbound inquiries, and the
        lead&apos;s own action in initiating contact by calling. Every
        first message discloses that the reply comes from an AI assistant
        and offers an opt-out; a lead who opts out is not contacted again.
        Clients remain responsible for their own compliance with applicable
        telemarketing and messaging law (including the TCPA) for how they
        represent and use this service.
      </p>
      <p>
        We do not share or sell mobile phone numbers to third parties for
        marketing purposes. Message frequency varies depending on your
        conversation with the assistant. Message and data rates may apply.
      </p>

      <h2>6. How We Use This Data</h2>
      <ul>
        <li>To respond to and qualify inbound leads on a client&apos;s behalf</li>
        <li>To schedule showings on the client&apos;s calendar</li>
        <li>To give the client visibility into every conversation, through the dashboard</li>
        <li>To bill clients for the service</li>
      </ul>
      <p>We do not sell lead or client personal data.</p>

      <h2>7. AI-Assisted Processing</h2>
      <p>
        The assistant that responds to leads is itself an AI system,
        configured per client. Clients can review every conversation and
        take over at any time. Data processed by our AI and messaging
        infrastructure providers is governed by their data processing
        terms and is not used to train their general-purpose models.
      </p>

      <h2>8. Sub-processors</h2>
      <p>
        We share data with a small number of vetted service providers
        acting as processors on our behalf, each bound by a data processing
        agreement: a telephony and messaging provider (call forwarding and
        SMS), an AI-assisted conversation provider, a cloud hosting
        provider, and a payment processor (client billing only). Identities
        are available on request under Section 11.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        Cayus is based in France and serves clients in the United States.
        Where data is transferred outside the EEA, we rely on Standard
        Contractual Clauses (SCCs) approved by the European Commission
        where applicable.
      </p>

      <h2>10. Data Retention</h2>
      <ul>
        <li>Client account data: retained for the duration of the relationship, deleted within 30 days of a written request thereafter.</li>
        <li>Lead conversation data: retained for up to 12 months for continuity of service, then deleted or anonymized, unless earlier deletion is requested.</li>
        <li>Financial records: 10 years, as required under French law.</li>
      </ul>

      <h2>11. Your Rights</h2>
      <p>Under GDPR, clients and leads have the right to:</p>
      <ul>
        <li>Access the personal data we hold</li>
        <li>Correct inaccurate data</li>
        <li>Request erasure</li>
        <li>Object to processing</li>
        <li>Lodge a complaint with the CNIL (cnil.fr)</li>
      </ul>
      <p>
        California residents have equivalent rights under the CCPA,
        including the right to know, delete, and opt out of sale (we do not
        sell personal data). To exercise any right, contact{" "}
        <a href="mailto:privacy@cayus.io">privacy@cayus.io</a>. We respond
        within 30 days.
      </p>

      <h2>12. Cookies</h2>
      <p>
        The Cayus website does not set cookies. See our{" "}
        <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>13. Children&apos;s Privacy</h2>
      <p>The Service is not directed at individuals under 18.</p>

      <h2>14. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy. Material changes are notified by
        email to active clients at least 30 days before taking effect.
      </p>

      <h2>15. Contact and Complaints</h2>
      <p>
        Questions about this policy or your data:{" "}
        <a href="mailto:privacy@cayus.io">privacy@cayus.io</a>. EU
        complaints: CNIL at cnil.fr.
      </p>
    </LegalLayout>
  );
}
