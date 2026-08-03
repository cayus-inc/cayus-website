import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cayus Privacy Policy. How we collect, use, store, and protect personal data, including candidate data, under GDPR and CCPA.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <h2>1. Introduction</h2>
      <p>
        Cayus (Agen, France) is a recruitment service that sources, contacts,
        and qualifies job candidates on behalf of hiring companies
        (&quot;clients&quot;). This Privacy Policy explains how we handle
        personal data belonging to two different groups: our clients, and
        the candidates we source and contact on a client&apos;s behalf.
        Candidates are not our users, and this policy explains how their
        data is handled under Article 14 GDPR (see Section 5).
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
        <li>Contact information: name, work email, company, role</li>
        <li>Engagement details: role requirements, qualification scorecard, compensation range shared for a search</li>
        <li>Payment information: processed securely through Stripe. We do not store card numbers.</li>
        <li>Communications between Cayus and the client</li>
      </ul>

      <h2>4. Candidate Data We Collect</h2>
      <p>
        To fill a client&apos;s open role, we source publicly available
        professional profile data (name, current title, employer, tenure,
        skills, public contact details) through a third-party sourcing
        platform. We contact a small number of sourced candidates directly.
        For candidates who respond, we additionally record:
      </p>
      <ul>
        <li>Their reply and stated reason for being open to a conversation</li>
        <li>Self-reported availability and compensation expectations, if shared</li>
        <li>Whether they were qualified against the client&apos;s scorecard</li>
      </ul>
      <p>
        Candidate names and identifying details are not shared with the
        client until the client has signed engagement terms for that
        specific role.
      </p>

      <h2>5. Legal Basis for Processing Candidate Data (GDPR Article 14)</h2>
      <p>
        Because candidate data is not collected directly from the candidate
        in the first instance, GDPR Article 14 requires this notice. We
        process candidate data on the basis of{" "}
        <strong>legitimate interest</strong>: matching a professional to a
        specific, named job opening they may not otherwise have heard about.
        We balance this interest against the candidate&apos;s rights as
        follows:
      </p>
      <ul>
        <li>We only contact candidates whose public profile indicates they are plausibly qualified and currently employed in a comparable role.</li>
        <li>We verify the profile is current before contacting, and again before an interview is scheduled.</li>
        <li>The first message we send discloses who we are and why we are reaching out, and always offers an opt-out.</li>
        <li>A candidate who does not respond, or who asks not to be contacted, is not contacted again for that search or a future one.</li>
      </ul>
      <p>
        Candidates can object to this processing or request erasure at any
        time by emailing{" "}
        <a href="mailto:privacy@cayus.io">privacy@cayus.io</a>, or by
        replying &quot;opt out&quot; to any message from us.
      </p>

      <h2>6. How We Use This Data</h2>
      <ul>
        <li>To identify and contact candidates who may be a fit for a specific client role</li>
        <li>To verify and record a candidate&apos;s qualification against the client&apos;s agreed scorecard</li>
        <li>To coordinate and schedule interviews</li>
        <li>To invoice clients based on interviews held</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>We do not sell candidate or client personal data.</p>

      <h2>7. AI-Assisted Processing</h2>
      <p>
        We use AI tools internally to help draft outreach and structure
        qualification notes from candidate replies. A person reviews every
        candidate-facing message and every qualification claim before it is
        sent or shared with a client. Data processed by our AI tooling
        provider is governed by their data processing terms and is not used
        to train their general-purpose models.
      </p>

      <h2>8. Sub-processors</h2>
      <p>We share data with the following processors:</p>
      <ul>
        <li><strong>Origami</strong> — candidate and company sourcing, enrichment, and outreach sequencing (DPA available)</li>
        <li><strong>Vercel</strong> — website hosting (DPA available)</li>
        <li><strong>Anthropic</strong> — AI-assisted drafting and qualification support (DPA available)</li>
        <li><strong>Stripe</strong> — payment processing, client billing only (DPA available)</li>
      </ul>
      <p>
        This list reflects the tools in active use and will be updated as
        the underlying stack changes.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        Cayus is based in France. Some sub-processors are located outside
        the European Economic Area (EEA), including in the United States.
        Where data is transferred outside the EEA, we rely on Standard
        Contractual Clauses (SCCs) approved by the European Commission.
      </p>

      <h2>10. Data Security</h2>
      <p>
        We use TLS 1.2+ in transit, encryption at rest, and role-based
        access control. In the event of a personal data breach that poses a
        risk to affected individuals, we will notify the CNIL within 72
        hours and affected individuals without undue delay.
      </p>

      <h2>11. Data Retention</h2>
      <ul>
        <li>Client account data: retained for the duration of the relationship, deleted within 30 days of a written request thereafter.</li>
        <li>Candidate data for a search that did not lead to contact: not retained beyond the active search.</li>
        <li>Candidate data for a contacted candidate: retained for up to 12 months to avoid re-contacting the same person on an unrelated search, then deleted or anonymized, unless the candidate requests earlier deletion.</li>
        <li>Financial records: 10 years, as required under French law.</li>
      </ul>

      <h2>12. Your Rights</h2>
      <p>Under GDPR, both clients and candidates have the right to:</p>
      <ul>
        <li>Access the personal data we hold</li>
        <li>Correct inaccurate data</li>
        <li>Request erasure</li>
        <li>Object to processing based on legitimate interest</li>
        <li>Data portability, where applicable</li>
        <li>Lodge a complaint with the CNIL (cnil.fr)</li>
      </ul>
      <p>
        California residents have equivalent rights under the CCPA,
        including the right to know, delete, and opt out of sale (we do not
        sell personal data).
      </p>
      <p>
        To exercise any right, contact{" "}
        <a href="mailto:privacy@cayus.io">privacy@cayus.io</a>. We respond
        within 30 days.
      </p>

      <h2>13. Cookies</h2>
      <p>
        The Cayus website uses only essential cookies required for the site
        to function. No advertising or cross-site tracking cookies are set.
        See our <a href="/cookies">Cookie Policy</a> for detail.
      </p>

      <h2>14. Children&apos;s Privacy</h2>
      <p>
        The Service is not directed at individuals under 18. We do not
        knowingly source or contact minors as candidates.
      </p>

      <h2>15. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy. Material changes are notified by
        email to active clients at least 30 days before taking effect.
      </p>

      <h2>16. Contact and Complaints</h2>
      <p>
        Questions about this policy or your data:{" "}
        <a href="mailto:privacy@cayus.io">privacy@cayus.io</a>. EU
        complaints: CNIL at cnil.fr.
      </p>
    </LegalLayout>
  );
}
