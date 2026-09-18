"use client";
import React from "react";

export function Tooltip({ label, children, placement = "top", style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: "100%", left: "50%", transform: "translate(-50%,-8px)" },
    bottom: { top: "100%", left: "50%", transform: "translate(-50%,8px)" },
    left: { right: "100%", top: "50%", transform: "translate(-8px,-50%)" },
    right: { left: "100%", top: "50%", transform: "translate(8px,-50%)" },
  };
  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: "absolute", ...pos[placement], whiteSpace: "nowrap", pointerEvents: "none",
          background: "var(--us-charcoal-teal)", color: "var(--us-white)", fontFamily: "var(--font-core)",
          fontSize: "var(--text-xs)", fontWeight: "var(--weight-body)", padding: "6px 10px",
          borderRadius: "var(--radius-xs)", boxShadow: "var(--shadow-md)",
          opacity: show ? 1 : 0, transition: "opacity var(--duration-fast) var(--ease-standard)", zIndex: 40,
        }}
      >
        {label}
      </span>
    </span>
  );
}
