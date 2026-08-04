"use client";

import { useEffect, useRef } from "react";

// A canvas rendering of what "continuous monitoring" actually looks like:
// a wide field of faint signals, occasionally one lines up against the
// criteria and fires a trace toward the outcome. No literal claim about
// any specific tool, an honest abstraction of the mechanism.
const POINT_COUNT = 130;
const ACTIVATION_INTERVAL_MS = 1900;
const ACTIVATION_DURATION_MS = 1400;

interface Point {
  x: number;
  y: number;
  phase: number;
  speed: number;
}

interface Activation {
  point: Point;
  start: number;
}

export function ScanField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const points: Point[] = Array.from({ length: POINT_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.9,
    }));

    const target = { x: 0.82, y: 0.5 };
    let activations: Activation[] = [];
    let raf = 0;
    let lastActivation = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      if (!reduceMotion && t - lastActivation > ACTIVATION_INTERVAL_MS) {
        lastActivation = t;
        const p = points[Math.floor(Math.random() * points.length)];
        activations.push({ point: p, start: t });
      }
      activations = activations.filter(
        (a) => t - a.start < ACTIVATION_DURATION_MS
      );

      for (const p of points) {
        const flicker = reduceMotion
          ? 0.22
          : 0.14 + 0.16 * (0.5 + 0.5 * Math.sin(t * 0.0009 * p.speed + p.phase));
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199,192,178,${flicker})`;
        ctx.fill();
      }

      for (const a of activations) {
        const progress = Math.min((t - a.start) / ACTIVATION_DURATION_MS, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const px = a.point.x * w;
        const py = a.point.y * h;
        const tx = target.x * w;
        const ty = target.y * h;
        const cx = px + (tx - px) * ease;
        const cy = py + (ty - py) * ease;

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = `rgba(199,192,178,${0.5 * (1 - progress * 0.3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(px, py, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(199,192,178,0.9)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199,192,178,${0.9 * ease})`;
        ctx.fill();
      }

      // Target marker
      const tx = target.x * w;
      const ty = target.y * h;
      const pulse = reduceMotion ? 0 : Math.sin(t * 0.003) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(tx, ty, 9 + pulse * 3, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(199,192,178,0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(tx, ty, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#faf8f4";
      ctx.fill();

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    if (reduceMotion) draw(0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative h-[280px] w-full md:h-[360px]">
      <canvas ref={canvasRef} className="h-full w-full" />
      <span className="pointer-events-none absolute left-[82%] top-1/2 -translate-x-1/2 translate-y-4 whitespace-nowrap text-[0.7rem] font-medium text-[#faf8f4]">
        Interview booked
      </span>
    </div>
  );
}
