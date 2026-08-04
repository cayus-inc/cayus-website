import Link from "next/link";
import Image from "next/image";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Agency",
    links: [
      { label: "How it works", href: "/#how" },
      { label: "Pricing", href: "/#pricing" },
      { label: "How we work", href: "/work" },
      { label: "About", href: "/about" },
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
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2">
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
            <p className="mt-3 max-w-[30ch] text-[0.85rem] leading-[1.6] text-fg-soft">
              The hire that makes a team stronger, not just bigger. Found
              before they start looking.
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
          <p>&copy; {new Date().getFullYear()} Cayus</p>
          <a href="mailto:contact@cayus.io" className="hover:text-fg">
            contact@cayus.io
          </a>
        </div>
      </div>
    </footer>
  );
}
