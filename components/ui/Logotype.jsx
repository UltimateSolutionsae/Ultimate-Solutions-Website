import React from "react";

const WIDTHS = { sm: 120, md: 168, lg: 240, xl: 360 };
const MARK_WIDTHS = { sm: 32, md: 48, lg: 72, xl: 112 };

export function Logotype({ tone = "dark", variant, lockup = "full", size = "md", width, showEyebrow = false, style, ...rest }) {
  const onDark = tone === "light";
  const v = variant || (onDark ? "white" : "colour");
  const mark = lockup === "mark";
  const w = width || (mark ? MARK_WIDTHS[size] || MARK_WIDTHS.md : WIDTHS[size] || WIDTHS.md);
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", gap: 6, ...style }} {...rest}>
      <img
        src={"/logo/us-" + (mark ? "mark" : "logo") + "-" + v + ".svg"}
        alt="Ultimate Solutions"
        width={w}
        height={mark ? w : Math.round(w / 3)}
        style={{ display: "block", width: w, height: "auto" }}
      />
      {showEyebrow && !mark && (
        <span
          style={{
            fontFamily: "var(--font-core)", fontSize: Math.max(9, w * 0.048), fontWeight: "var(--weight-subheading)",
            letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
            color: onDark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)",
          }}
        >
          KNX Systems Integration
        </span>
      )}
    </span>
  );
}
