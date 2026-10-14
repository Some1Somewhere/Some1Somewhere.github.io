import React, { useEffect, useState } from "react";
import "./style.css";

// Hero stat: a year ticker, a number that counts up to each stop, and a line
// that draws itself across the width as the years advance. Loops forever.
const STOP_MS = 1600;
const COUNT_MS = 900;
const END_PAUSE_MS = 7000;
const W = 420;
const H = 110;

const fmt = (n) => Math.round(n).toLocaleString("en-US");

// Points are laid out evenly on x. y is a true exponential in time, not in the
// stop values: 4 clients and 45,000 students can't share a readable scale, so the
// counter carries the real numbers and the line carries the shape. STEEPNESS
// controls how hard it bends (1 is almost a straight line, 5 is a hockey stick).
const STEEPNESS = 2.6;
const layout = (stops) => {
  const n = stops.length - 1;
  const norm = Math.exp(STEEPNESS) - 1;
  return stops.map((s, i) => {
    const t = i / n;
    const y = (Math.exp(STEEPNESS * t) - 1) / norm;
    return { x: t * W, y: H - 6 - y * (H - 12) };
  });
};

// Smooth polyline into a cubic path (Catmull-Rom to Bezier) so the curve has no kinks.
const smoothPath = (pts) => {
  if (pts.length < 2) return "";
  let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
};

export const GrowthTicker = ({ stops }) => {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(stops[0].value);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // advance the stop index
  useEffect(() => {
    if (reduced) { setI(stops.length - 1); return; }
    const isLast = i === stops.length - 1;
    const t = setTimeout(() => setI(isLast ? 0 : i + 1), isLast ? END_PAUSE_MS : STOP_MS);
    return () => clearTimeout(t);
  }, [i, stops.length, reduced]);

  // count from previous value to current value
  useEffect(() => {
    const to = stops[i].value;
    if (reduced) { setShown(to); return; }
    const from = i === 0 ? 0 : stops[i - 1].value;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / COUNT_MS);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [i, stops, reduced]);

  const pts = layout(stops);
  const d = smoothPath(pts);
  const progress = i / (stops.length - 1);
  const stop = stops[i];

  return (
    <div className="growth" aria-live="polite">
      <div className="growth_year">{stop.year}</div>
      <div className="growth_value">
        {fmt(shown)} <span className="growth_unit">{stop.unit}</span>
      </div>
      <div className="growth_label">{stop.label}</div>
      <svg className="growth_line" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
        <path className="growth_path_bg" d={d} />
        <path className="growth_path" d={d} pathLength="1" style={{ strokeDashoffset: 1 - progress }} />
        <circle className="growth_dot" cx={pts[i].x} cy={pts[i].y} r="4" />
      </svg>
    </div>
  );
};
