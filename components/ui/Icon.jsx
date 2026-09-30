"use client";
import React from "react";

// NOTE: lucide-static@0.474.0 (the version named in the handoff) was never
// published to npm/unpkg, so any icon not bundled locally 404'd (surfacing
// in the browser as a CORS error, since unpkg's 404 response omits CORS
// headers). Fixed to a real published version, and every icon actually used
// by this app is now bundled locally so there's no runtime CDN dependency.
const LUCIDE_CDN = "https://unpkg.com/lucide-static@1.47.0/icons/";

// Icons we bundled locally (from the handoff assets/icons folder, plus a
// few more pulled from lucide-static for icons used beyond that set)
const LOCAL_ICONS = new Set([
  "lightbulb", "blinds", "thermometer-sun", "speaker", "shield-check",
  "sliders-horizontal", "network", "zap", "check", "file-text", "file-check",
  "download", "arrow-right", "arrow-up-right", "mail", "phone", "map-pin",
  "clock", "chevron-left", "chevron-right", "user-round",
  "award", "chevron-down", "x", "triangle-alert", "circle-check", "menu",
  "instagram", "facebook", "linkedin",
]);

// KNX-category aliases -> Lucide glyph. Lucide is the only icon set.
export const ICON_ALIASES = {
  lighting: "lightbulb",
  climate: "thermometer-sun",
  security: "shield-check",
  shading: "blinds",
  audio: "speaker",
  network: "network",
  energy: "zap",
  access: "key-round",
  scenes: "sliders-horizontal",
};

export function Icon({ name, size = 20, color = "currentColor", style, title, ...rest }) {
  const glyph = ICON_ALIASES[name] || name;
  const url = LOCAL_ICONS.has(glyph)
    ? `url("/icons/${glyph}.svg")`
    : `url("${LUCIDE_CDN}${glyph}.svg")`;
  return (
    <span
      role="img"
      aria-label={title || glyph}
      style={{
        display: "inline-block",
        flex: "none",
        width: size,
        height: size,
        background: color,
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        ...style,
      }}
      {...rest}
    />
  );
}
