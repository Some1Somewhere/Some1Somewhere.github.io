import React from "react";
import "./style.css";

// A fanned hand of cards. Each card: an icon, a title, one line. Hover lifts it.
// Icons are simple line drawings in currentColor so they follow the theme.
const icons = {
  chip: (
    <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" /><circle cx="24" cy="24" r="11" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <line key={a} x1="24" y1="4" x2="24" y2="13" transform={`rotate(${a} 24 24)`} strokeWidth="4" />
      ))}</svg>
  ),
  dice: (
    <svg viewBox="0 0 48 48"><rect x="6" y="6" width="36" height="36" rx="6" />
      {[[15, 15], [33, 15], [24, 24], [15, 33], [33, 33]].map(([x, y]) => <circle key={x + y} cx={x} cy={y} r="2.6" fill="currentColor" />)}</svg>
  ),
  runner: (
    <svg viewBox="0 0 48 48"><circle cx="30" cy="9" r="4" /><path d="M27 15 L20 23 L12 20" /><path d="M20 23 L25 30 L19 41" /><path d="M25 30 L35 33 L40 41" /><path d="M8 36 L4 36" strokeDasharray="2 3" /></svg>
  ),
  ball: (
    <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" /><path d="M24 4 C14 14 14 34 24 44" /><path d="M4 24 C14 14 34 14 44 24" /><path d="M9 11 C20 20 28 28 39 37" /></svg>
  ),
  city: (
    <svg viewBox="0 0 48 48"><path d="M4 44 V26 H12 V44" /><path d="M12 44 V14 H22 V44" /><path d="M22 44 V20 H30 V44" /><path d="M30 44 V8 H40 V44" /><path d="M2 44 H46" /><path d="M34 14 H36 M34 20 H36 M34 26 H36 M15 20 H19 M15 26 H19 M15 32 H19" /></svg>
  ),
  trophy: (
    <svg viewBox="0 0 48 48"><path d="M14 8 H34 V20 A10 10 0 0 1 14 20 Z" /><path d="M14 12 H8 V16 A6 6 0 0 0 14 22" /><path d="M34 12 H40 V16 A6 6 0 0 1 34 22" /><path d="M24 30 V36" /><path d="M16 40 H32" /><path d="M20 36 H28 V40 H20 Z" /></svg>
  ),
  home: (
    <svg viewBox="0 0 48 48"><path d="M6 24 L24 8 L42 24" /><path d="M11 20 V42 H37 V20" /><path d="M20 42 V30 H28 V42" /><path d="M31 12 V8 H35 V16" /></svg>
  ),
  receipt: (
    <svg viewBox="0 0 48 48"><path d="M10 4 H38 V44 L33 40 L28 44 L24 40 L20 44 L15 40 L10 44 Z" /><path d="M16 14 H32 M16 21 H32 M16 28 H26" /></svg>
  ),
  briefcase: (
    <svg viewBox="0 0 48 48"><rect x="4" y="14" width="40" height="26" rx="4" /><path d="M17 14 V9 H31 V14" /><path d="M4 26 H44" /><path d="M21 26 V30 H27 V26" /></svg>
  ),
  cards: (
    <svg viewBox="0 0 48 48"><rect x="8" y="12" width="22" height="30" rx="3" transform="rotate(-8 19 27)" /><rect x="18" y="8" width="22" height="30" rx="3" transform="rotate(8 29 23)" /><path d="M29 18 l-3 4 3 4 3 -4 z" fill="currentColor" /></svg>
  ),
};

export const Hand = ({ cards }) => (
  <ul className="hand" aria-label="Off the clock">
    {cards.map((c, i) => {
      const Tag = c.url ? "a" : "div";
      const PER_ROW = 5;
      const row = Math.min(PER_ROW, cards.length - Math.floor(i / PER_ROW) * PER_ROW);
      const angle = ((i % PER_ROW) - (row - 1) / 2) * 5;
      return (
        <li key={c.title} className="hand_slot" style={{ "--angle": `${angle}deg`, "--i": i }}>
          <Tag className="card" href={c.url} target={c.url ? "_blank" : undefined} rel={c.url ? "noopener noreferrer" : undefined}>
            <span className="card_icon">{icons[c.icon]}</span>
            <span className="card_title">{c.title}</span>
            <span className="card_blurb">{c.blurb}</span>
            {c.url && <span className="card_link">open ↗</span>}
          </Tag>
        </li>
      );
    })}
  </ul>
);
