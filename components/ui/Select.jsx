"use client";
import React from "react";
import { Icon } from "./Icon.jsx";

export function Select({ label, hint, options = [], value, onChange, placeholder = "Select…", disabled, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const selectId = id || autoId;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && <label htmlFor={selectId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-subheading)" }}>{label}</label>}
      <div style={{ position: "relative" }}>
        <select
          id={selectId} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: "100%", boxSizing: "border-box", appearance: "none", fontFamily: "var(--font-core)",
            fontSize: "var(--text-body)", fontWeight: "var(--weight-body)", color: value ? "var(--text-primary)" : "var(--text-secondary)",
            background: disabled ? "var(--surface-subtle)" : "var(--surface-page)", padding: "12px 42px 12px 14px",
            border: "1px solid " + (focus ? "var(--us-deep-teal)" : "var(--border-subtle)"), borderRadius: "var(--radius-sm)",
            outline: "none", transition: "border-color var(--duration-base) var(--ease-standard)",
          }}
          {...rest}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={18} color="var(--text-secondary)" style={{ position: "absolute", right: 14, top: 13, pointerEvents: "none" }} />
      </div>
      {hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)" }}>{hint}</span>}
    </div>
  );
}
