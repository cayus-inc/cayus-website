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
        Cayus provides an AI assistant that answers a real estate
        agent&apos;s missed calls, qualifies the caller, and books a
        showing on the client&apos;s calendar. The client&apos;s public
        phone number is unchanged; unanswered calls are forwarded to the
        Service. Cayus does not negotiate offers, close sales, or guarantee
        that any lead results in a transaction. The client&apos;s
        responsibility is the sale; Cayus&apos;s responsibility is the
        response and the booking.
      </p>

      <h2>2. Engagement</h2>
      <p>
        Setup begins once the client provides the required details
        (brokerage, listed phone number, calendar access) and configures
        call forwarding, a one-time step on the client&apos;s side. The
        Service is billed as a one-time setup fee plus a monthly
        subscription (Section 5).
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any purpose other than responding to your own real estate leads</li>
        <li>Direct the Service to contact anyone who has not first called your number</li>
        <li>Use the Service for any illegal, discriminatory, or deceptive purpose</li>
        <li>Interfere with or attempt to reverse-engineer the Service</li>
      </ul>
      <p>
        Cayus only replies to inbound callers; it does not send unsolicited
        outbound messages to purchased or sourced contact lists. The client
        remains responsible for complying with applicable telemarketing and
        messaging law (including the TCPA) in how they use and represent
        the Service.
      </p>

      <h2>4. Pricing and Payment</h2>
      <p>
        A one-time setup fee covers configuration and onboarding. The
        monthly subscription covers ongoing coverage, hosting, and updates,
        and can be cancelled at any time by emailing{" "}
        <a href="mailto:contact@cayus.io">contact@cayus.io</a>; cancellation
        stops the next billing cycle, no refund for the current period.
        Prices are in USD. Payments are processed by Stripe; Cayus does not
        store card details. Cayus may suspend the Service for non-payment or
        for use that violates Section 3.
      </p>

      <h2>5. Lead Guarantee</h2>
      <p>
        If your assistant has not captured at least three (3) qualified
        leads within your first 30 days live, email{" "}
        <a href="mailto:contact@cayus.io">contact@cayus.io</a> within 45 days
        of going live and Cayus will refund your setup fee and that first
        month&apos;s subscription in full. A qualified lead is one your
        assistant marks as ready for a showing (status &quot;qualified&quot;
        or &quot;booked&quot; on your dashboard), visible to you as it
        happens, not a metric decided after the fact. This guarantee applies
        once per client and requires that call forwarding remained active
        for the full 30-day period; it does not apply if forwarding was
        disabled, misconfigured on the client&apos;s carrier, or removed
        before the period ended.
      </p>

      <h2>6. AI-Assisted Work</h2>
      <p>
        The assistant that responds to your leads is an AI system,
        configured per client and disclosed as such in its first message
        to any caller. You can review every conversation and take over by
        text at any time. Cayus does not use an AI voice to make unsolicited
        outbound calls; any AI voice line offered is inbound only, initiated
        by the caller, and disclosed as AI.
      </p>

      <h2>7. Data and Privacy</h2>
      <p>
        Cayus processes personal data of both clients and the leads who
        contact them. See our{" "}
        <a href="/privacy">Privacy Policy</a>, incorporated by reference.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The Service is provided &quot;as is.&quot; Cayus does not warrant
        that any lead will result in a sale, remain responsive, or proceed
        to a showing. Cayus warrants only that the Service will attempt to
        respond to a qualifying missed call within the timeframe stated in
        the client&apos;s onboarding materials, and the Lead Guarantee in
        Section 5. The Service depends on third-party providers (telephony,
        calendar, AI infrastructure); Cayus is not liable for an outage or
        limitation originating from a third-party provider outside its
        control.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Cayus shall not
        be liable for indirect, incidental, or consequential damages,
        including loss of profits or business opportunities, arising from
        the engagement. Cayus&apos;s total liability shall not exceed the
        amount paid by the client in the twelve (12) months preceding the
        claim.
      </p>

      <h2>10. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of France. Disputes are first
        subject to good-faith negotiation; if unresolved, they are
        submitted to the competent courts of Paris, France, unless
        mandatory local law requires otherwise.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We may update these Terms. Material changes are notified by email
        at least 30 days before taking effect for active clients.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions about these Terms:{" "}
        <a href="mailto:contact@cayus.io">contact@cayus.io</a>
      </p>
    </LegalLayout>
  );
}
