import Link from "next/link";
import Image from "next/image";
import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/links";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Agency",
    links: [
      { label: "How it works", href: "/#how" },
      { label: "Pricing", href: "/#pricing" },
      { label: "How we work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Talk to us first", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Legal notice", href: "/legal" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1160px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/brand/mark.png"
                alt=""
                width={16}
                height={20}
                className="mark-auto"
                aria-hidden="true"
              />
              <span className="font-serif-display text-[1rem] tracking-wide">
                CAYUS
              </span>
            </Link>
            <p className="mt-3 max-w-[28ch] text-[0.85rem] leading-[1.6] text-fg-soft">
              The assistant that answers when you can&rsquo;t.
            </p>
            <p className="mt-3 max-w-[28ch] text-[0.8rem] leading-[1.6] text-fg-soft">
              Try it yourself:{" "}
              <a href={`tel:${DEMO_PHONE_TEL}`} className="font-medium text-fg hover:underline">
                {DEMO_PHONE_DISPLAY}
              </a>
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-fg-soft">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[0.85rem] text-fg-soft hover:text-fg"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[0.78rem] text-fg-soft sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Cayus. All rights reserved.</p>
          <p>
            Hosted securely on U.S. servers.{" "}
            <Link href="/privacy#security" className="hover:text-fg">
              Learn more
            </Link>
          </p>
          <a href="mailto:contact@cayus.io" className="hover:text-fg">
            contact@cayus.io
          </a>
        </div>
      </div>
    </footer>
  );
}
