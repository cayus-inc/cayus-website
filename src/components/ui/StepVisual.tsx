const shell =
  "rounded-sm border border-border bg-bg-raised p-3.5";

export function StepVisual({ step }: { step: "I" | "II" | "III" }) {
  if (step === "I") {
    return (
      <div className={`flex items-center gap-2.5 ${shell}`}>
        <span className="relative flex size-1.5 flex-none">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-metal/50" />
          <span className="relative inline-flex size-1.5 rounded-full bg-metal" />
        </span>
        <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-fg-soft">
          Sourcing against open Sales Engineer role…
        </span>
      </div>
    );
  }
  if (step === "II") {
    const rows = ["Hard requirements", "Comp range", "Availability", "Reason to move"];
    return (
      <div className={`space-y-2 ${shell}`}>
        {rows.map((r) => (
          <div key={r} className="flex items-center gap-2.5">
            <svg width="12" height="12" viewBox="0 0 12 12" className="flex-none">
              <path
                d="M2 6.5 L5 9.5 L10 3"
                fill="none"
                stroke="var(--metal)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[11.5px] text-fg-soft">{r}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-between ${shell}`}>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="size-1.5 rounded-full"
            style={{
              background: i === 9 ? "var(--metal)" : "var(--border)",
            }}
          />
        ))}
      </div>
      <span className="ml-3 flex-none text-[11px] font-medium text-fg">
        Tue 2:00pm
      </span>
    </div>
  );
}
