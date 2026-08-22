import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Consent Flow Reference",
  robots: { index: false, follow: false },
};

// Compliance reference page for Twilio A2P 10DLC campaign review (Sachin
// Singh, Appeals Team, 2026-08-21 rejection: "Missing Opt-in Proof").
// Deliberately unlinked from the rest of the site, at an unguessable slug -
// this exists to be pasted into the "How do end users consent to receive
// messages" campaign field, not to be found by prospects. Not a real
// end-user page: shows the actual consent model (call-based, not
// text-to-join) with the exact disclosure and first-message copy that
// ships in production (see qualify.ts firstMessage()).
export default function ConsentProofPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-16 text-fg">
      <div className="mx-auto max-w-[640px]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
          Compliance reference
        </p>
        <h1 className="mt-3 font-serif-display text-2xl font-medium">
          How a caller consents to receive an SMS from Cayus
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-fg-soft">
          Cayus (a service operated by ENZO ROMA) is a missed-call
          answering service for independent US real estate agents. There is
          no text-to-join or keyword opt-in: consent is call-based. A lead
          dials the agent&apos;s own publicly listed business phone number.
          If the agent doesn&apos;t pick up, the call is forwarded to a
          dedicated number that immediately replies by SMS. The public
          listing for that number discloses, before any call is placed, that
          an unanswered call may receive a text reply.
        </p>

        <h2 className="mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-fg-soft">
          1. What the caller sees before calling
        </h2>
        <div className="mt-3 rounded-sm border border-border bg-bg-raised p-6">
          <p className="text-[1.1rem] font-medium">Dana Whitfield &middot; Whitfield Realty Group</p>
          <p className="mt-1 text-[1.3rem] tabular-nums text-fg">
            (512) 555-0148
          </p>
          <p className="mt-3 text-[0.85rem] leading-relaxed text-fg-soft">
            Call or text anytime. If we can&apos;t pick up right away,
            you&apos;ll get a text back within seconds. Msg &amp; data rates
            may apply. Msg frequency varies. Reply STOP to opt out, HELP for
            help.
          </p>
        </div>

        <h2 className="mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-fg-soft">
          2. What the caller receives after an unanswered call
        </h2>
        <div className="mt-3 max-w-[360px] rounded-sm border border-border bg-bg-raised p-4">
          <div className="rounded-lg rounded-bl-sm bg-bg px-4 py-3 text-[0.9rem] leading-relaxed">
            Hi, this is Dana&apos;s assistant. Sorry we missed your call! I
            can answer questions or help set up a time to see the property.
            What are you looking for? Reply STOP to opt out.
          </div>
        </div>
        <p className="mt-3 text-[0.8rem] leading-relaxed text-fg-soft">
          This is the exact first-message template Cayus sends in
          production, unchanged, for every client. Only the agent&apos;s
          name is substituted.
        </p>

        <h2 className="mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-fg-soft">
          3. Why this qualifies as consent
        </h2>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-fg-soft">
          The recipient is the person who initiated contact, by calling a
          business number they already found through the agent&apos;s own
          public listing (real estate portal, yard sign, business card).
          The disclosure in section 1 is shown at the same public listing,
          before the call is placed. No number is added to any list, sold,
          shared, or messaged unless it called first.
        </p>
      </div>
    </main>
  );
}
