"use client";

import { ScanField3D } from "@/components/three/ScanField3D";

// What "continuous monitoring" actually looks like: a real 3D field of
// signals, occasionally one lines up against the criteria and fires a
// trace toward the outcome. No literal claim about any specific tool,
// an honest abstraction of the mechanism.
export function ScanField() {
  return (
    <div className="relative h-[280px] w-full md:h-[360px]">
      <ScanField3D className="h-full w-full" />
      <span className="pointer-events-none absolute left-[71%] top-1/2 -translate-y-1/2 whitespace-nowrap pl-4 text-[0.7rem] font-medium text-[#faf8f4]">
        Interview booked
      </span>
    </div>
  );
}
