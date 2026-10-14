import React from "react";
import "./style.css";

// A sentence that arrives in beats: each clause fades in after the last, the
// whole line holds, then it resets. CSS only; animation-delay staggers the beats.
export const BeatLine = ({ beats }) => (
  <p className="beatline mb-1x" aria-label={beats.join(" ")}>
    {beats.map((b, i) => (
      <span key={i} className="beat" style={{ animationDelay: `${0.4 + i * 1.2}s` }} aria-hidden="true">
        {b}
      </span>
    ))}
  </p>
);
