import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-5 border-t border-border px-6 py-9 text-[0.8rem] text-fg-soft">
      <span>Cayus</span>
      <div className="flex flex-wrap gap-6">
        <Link href="/#how" className="hover:text-fg">
          How it works
        </Link>
        <Link href="/#pricing" className="hover:text-fg">
          Pricing
        </Link>
        <Link href="/terms" className="hover:text-fg">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-fg">
          Privacy
        </Link>
        <Link href="/legal" className="hover:text-fg">
          Legal notice
        </Link>
      </div>
      <span>&copy; {new Date().getFullYear()}</span>
    </footer>
  );
}
