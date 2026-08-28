import type { Metadata } from "next";
import Link from "next/link";
import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Cayus - a missed call just cost you",
  robots: { index: false, follow: false },
};

// First touch of the two-video funnel (see MEMORY.md 2026-08-26): the cold
// outreach message links here instead of an external Tella-hosted video, so
// the whole sequence stays on cayus.io - same reasoning as /start, just one
// step earlier. This page does one job: play the ~30s hook video, then send
// the viewer on to /start for the full mechanism/pricing/guarantee video and
// recap. No card carousel here - that's /start's job, this page is short on
// purpose, matching the video itself.
export default function WatchPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-pewter-bright">
            29 seconds
          </p>
          <h1 className="font-serif-display text-balance text-[1.7rem] font-medium leading-[1.15] sm:text-[2.1rem]">
            A missed call just cost you<br />
            <span className="text-pewter-bright">$7,500 to $15,000 in commission.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[420px] text-[0.98rem] leading-relaxed text-paper/70">
            Here&apos;s the fix, in less time than it took to read this.
          </p>

          <div className="mx-auto mt-8 aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-black">
            <video controls className="h-full w-full" poster="">
              <source src="/videos/watch.mp4" type="video/mp4" />
            </video>
          </div>

          <Link
            href="/start"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-8 py-3.5 text-[0.95rem] font-semibold text-ink transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.5)] active:scale-[0.97] active:duration-75"
          >
            See exactly how we fix it
          </Link>
          <p className="mt-3 text-[0.8rem] text-paper/60">
            Under 2 minutes, start to finish.
          </p>

          <p className="mt-5 text-[0.8rem] text-paper/60">
            Or skip the video: text/call{" "}
            <a href={`tel:${DEMO_PHONE_TEL}`} className="font-medium text-paper underline decoration-white/25 underline-offset-2">
              {DEMO_PHONE_DISPLAY}
            </a>{" "}
            right now, it&apos;s the exact AI you&apos;d be buying.
          </p>

          <p className="mt-6 text-[0.78rem] text-paper/50">
            Hosted securely on U.S. servers.{" "}
            <Link href="/privacy#security" className="underline hover:text-paper/80">
              Learn more
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
