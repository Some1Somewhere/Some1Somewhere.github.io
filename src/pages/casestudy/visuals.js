import React from "react";

// Inline SVG visuals for case studies. All animate with CSS (see style.css) on
// opacity/transform/stroke only, and inherit the theme via currentColor.

// Text lines flow from one long column into two pages.
const PagesVisual = () => {
  const lines = Array.from({ length: 14 });
  return (
    <svg className="cs_visual cs_pages" viewBox="0 0 520 260" role="img" aria-label="One scrolling column of text becoming two pages">
      <g className="cs_pages_scroll">
        <rect x="20" y="10" width="150" height="240" rx="4" />
        {lines.map((_, i) => (
          <line key={i} x1="34" x2={i % 5 === 4 ? 120 : 156} y1={28 + i * 16} y2={28 + i * 16} />
        ))}
      </g>
      <path className="cs_pages_arrow" d="M190 130 H240 M232 122 L240 130 L232 138" />
      {[0, 1].map((p) => (
        <g key={p} className="cs_page" style={{ animationDelay: `${0.6 + p * 0.4}s` }}>
          <rect x={270 + p * 130} y="30" width="110" height="150" rx="3" />
          {lines.slice(0, 7).map((_, i) => (
            <line key={i} x1={282 + p * 130} x2={(i === 6 && p === 1 ? 330 : 368) + p * 130} y1={48 + i * 18} y2={48 + i * 18} />
          ))}
          <text x={325 + p * 130} y="198" textAnchor="middle">{p + 1}</text>
        </g>
      ))}
    </svg>
  );
};

// Two bars: the complaining teacher's classes vs everyone else.
const TutorVisual = () => (
  <svg className="cs_visual cs_tutor" viewBox="0 0 520 220" role="img" aria-label="13 percent versus 5.5 percent of tutor conversations writing for the student">
    <line className="cs_axis" x1="40" y1="180" x2="500" y2="180" />
    <g className="cs_bar" style={{ transformOrigin: "0 180px" }}>
      <rect x="80" y={180 - 130} width="140" height="130" />
      <text x="150" y={180 - 140} textAnchor="middle" className="cs_bar_value">13.0%</text>
      <text x="150" y="202" textAnchor="middle" className="cs_bar_label">one teacher's classes</text>
    </g>
    <g className="cs_bar" style={{ transformOrigin: "0 180px", animationDelay: "0.25s" }}>
      <rect x="300" y={180 - 55} width="140" height="55" />
      <text x="370" y={180 - 65} textAnchor="middle" className="cs_bar_value">5.5%</text>
      <text x="370" y="202" textAnchor="middle" className="cs_bar_label">everyone else, matched</text>
    </g>
  </svg>
);

// Submissions per hour on benchmark day: a bell with the peak hour called out.
const ExamVisual = () => {
  // Submissions per hour, 7am to 7pm ET, Sep 17 2026 (PostHog document_processing_started).
  const hours = [3, 9, 130, 147, 477, 1000, 748, 465, 349, 466, 291, 58, 30];
  const W = 520, H = 220, pad = 40, max = Math.max(...hours);
  const x = (i) => pad + (i / (hours.length - 1)) * (W - pad * 2);
  const y = (v) => H - 40 - (v / max) * (H - 80);
  const d = hours.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  const peak = hours.indexOf(max);
  return (
    <svg className="cs_visual cs_exam" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Submissions per hour on exam day, peaking at 1,001">
      <line className="cs_axis" x1={pad} y1={H - 40} x2={W - pad} y2={H - 40} />
      <path className="cs_area" d={`${d} L${x(hours.length - 1)},${H - 40} L${x(0)},${H - 40} Z`} />
      <path className="cs_line" d={d} pathLength="1" />
      <circle className="cs_peak" cx={x(peak)} cy={y(max)} r="4" />
      <text x={x(peak)} y={y(max) - 12} textAnchor="middle" className="cs_bar_value">1,001 / hr</text>
      <text x={x(0)} y={H - 20} className="cs_bar_label">7am</text>
      <text x={x(hours.length - 1)} y={H - 20} textAnchor="end" className="cs_bar_label">7pm</text>
      <text x={W - pad} y={y(0) - 150} textAnchor="end" className="cs_bar_label">4 of 4,338 needed a retry</text>
    </svg>
  );
};

export const visuals = { pages: PagesVisual, tutor: TutorVisual, exam: ExamVisual };
