import React from "react";

/**
 * A hairline grid of partner or client logos, all in one graphite tone so
 * no single brand shouts; each returns to its own colour on hover.
 *
 * Logos arrive in every shape: transparent marks, marks on a baked-in white
 * background, and white-on-dark marks drawn for a teal tile. The styles in
 * layout.css even them out: greyscale plus `mix-blend-mode: multiply` drops
 * any white background into the page, and `invert` (via the `dark` flag)
 * turns white marks dark before that blend so they don't vanish.
 *
 * Items without a logo render as a wordmark in the same cell, so a missing
 * file reads as a deliberate style rather than a broken tile. Hyphens become
 * non-breaking (U+2011) so names like "Crestron DMC-E" never split at the dash.
 */
export function LogoWall({ items, label, active = "all" }) {
  // With a category active, matching items are "on" (full colour) and the
  // rest "off" (faded back); see the .is-filtered rules in layout.css.
  const filtered = active !== "all";
  const state = (it) => (!filtered ? undefined : it.cat === active ? "is-on" : "is-off");
  return (
    <div className={"us-logo-wall" + (filtered ? " is-filtered" : "")} role="list" aria-label={label}>
      {items.map((it) => (
        <div key={it.name} role="listitem" className={state(it)}>
          {it.logo ? (
            <img src={it.logo} alt={it.name} loading="lazy" className={it.dark ? "us-logo-inv" : undefined} />
          ) : (
            <span className="us-logo-word">{it.name.replace(/-/g, "‑")}</span>
          )}
        </div>
      ))}
    </div>
  );
}
