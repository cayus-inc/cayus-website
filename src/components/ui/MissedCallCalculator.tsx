"use client";

import { useState } from "react";

// Every number here comes from the visitor's own input - nothing precomputed,
// nothing implied to be industry-average or sourced from "our data." That's
// what keeps this from being a fabricated-statistic problem: it's their math,
// we just do the arithmetic.
export function MissedCallCalculator() {
  const [missedPerMonth, setMissedPerMonth] = useState(6);
  const [closeRate, setCloseRate] = useState(10);
  const [commission, setCommission] = useState(9000);

  const dealsLostPerYear = (missedPerMonth * 12 * closeRate) / 100;
  const revenueLostPerYear = Math.round(dealsLostPerYear * commission);

  return (
    <div className="rounded-sm border border-border bg-bg px-6 py-8 sm:px-10 sm:py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-7">
          <Field
            label="Missed calls per month"
            value={missedPerMonth}
            onChange={setMissedPerMonth}
            min={0}
            max={40}
            step={1}
            format={(v) => String(v)}
          />
          <Field
            label="Of those, % that would've become a client"
            value={closeRate}
            onChange={setCloseRate}
            min={0}
            max={40}
            step={1}
            format={(v) => `${v}%`}
          />
          <Field
            label="Average commission per closed deal"
            value={commission}
            onChange={setCommission}
            min={1000}
            max={30000}
            step={500}
            format={(v) => `$${v.toLocaleString("en-US")}`}
          />
        </div>
        <div className="flex flex-col justify-center border-t border-border pt-7 text-center md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-fg-soft">
            Based on your numbers
          </p>
          <p className="mt-3 font-serif-display text-[2.6rem] leading-none text-balance sm:text-[3.2rem]">
            ${revenueLostPerYear.toLocaleString("en-US")}
          </p>
          <p className="mt-2 text-[0.9rem] text-fg-soft">
            a year, left on the table from calls nobody answered
          </p>
          <p className="mt-6 text-[0.8rem] leading-[1.5] text-fg-soft">
            That's {dealsLostPerYear.toFixed(1)} deal{dealsLostPerYear === 1 ? "" : "s"} a year,
            at your own numbers above, not an industry average.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <label className="block">
      <div className="mb-2.5 flex items-baseline justify-between gap-3">
        <span className="text-[0.85rem] text-fg-soft">{label}</span>
        <span className="font-serif-display text-[1.15rem] text-fg">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-metal"
      />
    </label>
  );
}
