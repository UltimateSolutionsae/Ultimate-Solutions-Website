import React from "react";
import { Icon } from "./Icon.jsx";

const TONES = {
  dark: { background: "var(--surface-dark)", color: "var(--us-white)", border: "1px solid var(--border-on-dark)" },
  gradientMoody: { background: "var(--us-gradient-moody)", color: "var(--us-white)", border: "1px solid var(--border-on-dark)" },
  gradientLuminous: { background: "var(--us-gradient-luminous)", color: "var(--us-white)", border: "1px solid transparent" },
  mint: { background: "var(--surface-mint)", color: "var(--us-deep-teal)", border: "1px solid transparent" },
};
const pad = (n) => String(n).padStart(2, "0");

export function StatCard({
  value, unit, label, caption, icon, index, total,
  size = "lg", tone = "dark", treatment = "indexed", style, ...rest
}) {
  const accent = tone === "mint" ? "var(--us-deep-teal)" : "var(--us-mint)";
  const numberSize = size === "lg" ? "var(--text-stat)" : "var(--text-stat-sm)";
  const indexed = treatment === "indexed" && index != null;
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "var(--space-6)",
        padding: "var(--space-6)", borderRadius: "var(--radius-lg)", minHeight: size === "lg" ? 260 : 200,
        ...TONES[tone], ...style,
      }}
      {...rest}
    >
      {indexed ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: accent }}>
          <span>{pad(index)}{total != null ? " / " + pad(total) : ""}</span>
          {icon && <Icon name={icon} size={18} color={accent} />}
        </div>
      ) : (
        icon && <Icon name={icon} size={24} color={accent} />
      )}
      <div>
        {treatment === "ruled" && (
          <div aria-hidden="true" style={{ height: 1, background: tone === "mint" ? "rgba(4,47,52,0.18)" : "var(--border-on-dark)", marginBottom: "var(--space-4)" }}>
            <span style={{ display: "block", width: 34, height: 1, marginTop: -1, background: accent }} />
          </div>
        )}
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontSize: numberSize, fontWeight: "var(--weight-heading)", letterSpacing: "var(--tracking-display)", lineHeight: "var(--leading-display)" }}>{value}</span>
          {unit && <span style={{ fontSize: "var(--text-h3)", fontWeight: "var(--weight-heading)", opacity: 0.7 }}>{unit}</span>}
        </div>
        {label && <div style={{ marginTop: "var(--space-3)", fontSize: "var(--text-body-lg)", fontWeight: "var(--weight-subheading)" }}>{label}</div>}
        {caption && <div style={{ marginTop: 6, fontSize: "var(--text-sm)", opacity: 0.72 }}>{caption}</div>}
      </div>
    </div>
  );
}
