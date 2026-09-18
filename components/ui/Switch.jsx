"use client";
import React from "react";

export function Switch({ label, checked, onChange, disabled, tone = "light", style, ...rest }) {
  const on = !!checked;
  const track = on ? (tone === "dark" ? "var(--us-mint)" : "var(--us-deep-teal)") : (tone === "dark" ? "rgba(181,242,219,0.22)" : "var(--border-strong)");
  const knob = on && tone === "dark" ? "var(--us-deep-teal)" : "var(--us-white)";
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, color: tone === "dark" ? "var(--us-white)" : "var(--text-primary)", ...style }}>
      <input type="checkbox" role="switch" checked={on} onChange={onChange} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{ width: 44, height: 26, flex: "none", borderRadius: "var(--radius-pill)", background: track, padding: 3, boxSizing: "border-box", transition: "background var(--duration-base) var(--ease-standard)" }}>
        {/* Switch knob is the one documented exception: it settles on the overshoot ease */}
        <span style={{ display: "block", width: 20, height: 20, borderRadius: "var(--radius-pill)", background: knob, transform: on ? "translateX(18px)" : "translateX(0)", transition: "transform var(--duration-base) var(--ease-overshoot)" }} />
      </span>
      {label && <span style={{ fontSize: "var(--text-body)", fontWeight: "var(--weight-body)" }}>{label}</span>}
    </label>
  );
}
