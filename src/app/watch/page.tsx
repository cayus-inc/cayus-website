import type { Metadata } from "next";
import Link from "next/link";

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
          <div className="mx-auto aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-black">
            {/* TODO: replace with the real exported video file once recorded
                (e.g. /videos/watch.mp4), self-hosted - no Tella player/branding. */}
            <video controls className="h-full w-full" poster="">
              <source src="/videos/watch.mp4" type="video/mp4" />
            </video>
          </div>

          <Link
            href="/start"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-8 py-3.5 text-[0.95rem] font-semibold text-ink"
          >
            See exactly how it works
          </Link>
        </div>
      </section>
    </main>
  );
}
