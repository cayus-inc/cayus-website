import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Cayus Terms of Service.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="August 2026">
      <p>
        By engaging Cayus (&quot;the Service&quot;), operated by Cayus (EI -
        ENZO ROMA), you agree to be bound by these Terms of Service and our
        Privacy Policy. If you do not agree, you may not use the Service.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Cayus sources, contacts, and qualifies job candidates on behalf of
        hiring companies, and schedules qualified interviews on the client&apos;s
        calendar. Cayus does not make hiring decisions, negotiate offers, or
        guarantee that any interview results in a hire. The client&apos;s
        responsibility ends at deciding whether to hire; Cayus&apos;s
        responsibility ends at the interview.
      </p>

      <h2>2. Engagement</h2>
      <p>
        Each engagement begins with a written agreement covering the role,
        the qualification scorecard, and the pricing structure (per-interview
        or monthly pipeline, see Section 5). No candidate is contacted before
        the scorecard is agreed in writing.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use candidate information shared by Cayus for any purpose other than evaluating that candidate for the agreed role</li>
        <li>Contact a candidate directly before their name is released under Section 4</li>
        <li>Share anonymized candidate profiles with a third party</li>
        <li>Use the Service for any illegal or discriminatory hiring purpose</li>
        <li>Interfere with or attempt to reverse-engineer Cayus&apos;s sourcing or qualification process</li>
      </ul>

      <h2>4. Candidate Confidentiality</h2>
      <p>
        Candidate profiles are shared anonymized until the client has signed
        the engagement terms. Names and identifying details are released only
        after signature, and only for the specific role discussed.
      </p>

      <h2>5. Pricing and Payment</h2>
      <p>
        Cayus is billed either per interview held (a fixed range agreed in
        the engagement letter) or as a monthly pipeline with an agreed
        interview quota. An interview is billable only if it takes place and
        the client does not reject it as outside the agreed scorecard within
        the contestation window stated in the engagement letter. An optional,
        reduced success fee may apply on hire, as agreed per engagement.
        Prices are in USD. Payment terms are set in the engagement letter.
      </p>

      <h2>6. AI-Assisted Work</h2>
      <p>
        Cayus uses AI tools internally to help source, draft candidate
        outreach, and structure qualification notes. Every candidate
        interaction and every qualification claim is reviewed before it
        reaches a client. Cayus does not use AI voice screening on candidates
        it has contacted first (outbound); this does not apply to a
        candidate who calls in on their own initiative (inbound).
      </p>

      <h2>7. Data and Privacy</h2>
      <p>
        Cayus processes personal data of both clients and candidates. See
        our{" "}
        <a href="/privacy">Privacy Policy</a>, which is incorporated by
        reference and covers, in particular, how candidate data obtained
        through sourcing tools is handled.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The Service is provided &quot;as is.&quot; Cayus does not warrant
        that any candidate will accept an offer, remain available through
        the hiring process, or perform in the role. Cayus warrants only that
        interviews billed met the agreed scorecard at the time of contact.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Cayus shall not be
        liable for indirect, incidental, or consequential damages, including
        loss of profits or business opportunities, arising from the
        engagement. Cayus&apos;s total liability shall not exceed the amount
        paid by the client in the twelve (12) months preceding the claim.
      </p>

      <h2>10. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of France. Disputes are first
        subject to good-faith negotiation; if unresolved, they are submitted
        to the competent courts of Paris, France, unless mandatory local law
        requires otherwise.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We may update these Terms. Material changes are notified by email at
        least 30 days before taking effect for active engagements.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions about these Terms:{" "}
        <a href="mailto:contact@cayus.io">contact@cayus.io</a>
      </p>
    </LegalLayout>
  );
}
