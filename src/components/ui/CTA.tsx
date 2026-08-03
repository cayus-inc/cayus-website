import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "invert";

const BASE =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.92rem] font-semibold transition-all duration-200 ease-out active:scale-[0.97]";

const STYLES: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.35)]",
  ghost: "border border-border text-fg hover:-translate-y-0.5 hover:border-metal",
  invert:
    "hover:-translate-y-0.5 hover:opacity-90",
};

export function CTA({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
  style,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cls = `${BASE} ${STYLES[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        >
          <path
            d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} className={cls} style={style}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={style}>
      {inner}
    </Link>
  );
}
