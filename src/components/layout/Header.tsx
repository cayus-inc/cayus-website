import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/components/ui/CTA";
import { MobileNav } from "@/components/layout/MobileNav";

const BOOK_A_CALL_HREF = "/contact";

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/work", label: "How we work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <nav className="sticky top-0 z-40 border-b border-transparent bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif-display text-[1.1rem] tracking-wide text-fg"
        >
          <Image
            src="/brand/mark.png"
            alt=""
            width={22}
            height={27}
            className="mark-auto"
            aria-hidden="true"
          />
          CAYUS
        </Link>
        <div className="hidden items-center gap-8 text-[0.86rem] text-fg-soft md:flex">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative py-1 transition-colors hover:text-fg"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-metal transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <MobileNav />
          <CTA
            href={BOOK_A_CALL_HREF}
            variant="ghost"
            arrow={false}
            className="!px-5 !py-2.5 !text-[0.84rem]"
          >
            Get started
          </CTA>
        </div>
      </div>
    </nav>
  );
}
