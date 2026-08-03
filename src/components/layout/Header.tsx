import Link from "next/link";

export function Header() {
  return (
    <nav className="sticky top-0 z-40 mx-auto flex max-w-[1160px] items-center justify-between px-6 py-5 backdrop-blur-md bg-bg/80">
      <Link
        href="/"
        className="flex items-center gap-2.5 font-serif-display text-[1.05rem] tracking-wide text-fg"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="9" fill="none" stroke="var(--metal)" strokeWidth="1" />
          <circle cx="10" cy="10" r="3.2" fill="var(--fg)" />
        </svg>
        CAYUS
      </Link>
      <div className="flex items-center gap-8 text-[0.86rem] text-fg-soft">
        <Link href="/#how" className="transition-colors hover:text-fg">
          How it works
        </Link>
        <Link href="/#pricing" className="transition-colors hover:text-fg">
          Pricing
        </Link>
        <Link href="/about" className="transition-colors hover:text-fg">
          About
        </Link>
      </div>
    </nav>
  );
}
