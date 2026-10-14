"use client";
import React from "react";
import { QUOTES } from "@/lib/data.js";

// QUOTES has no photos and the names are anonymised to initials ("F.D."),
// so each client is a monogram rather than an invented headshot.
const initials = (name) => name.replace(/\./g, "").toUpperCase();
const pad = (n) => String(n).padStart(2, "0");

/**
 * Client testimonials, after a minimal reference design: one large quote,
 * and a row of overlapping monograms that doubles as the selector, with
 * the current author beside it.
 *
 * - The monograms are a proper tab list: click or tap one, or use the
 *   arrow keys (Home/End too) to move through them.
 * - Every quote sits in the same grid cell, so the block is always as tall
 *   as the longest one and the page never shifts when the quote changes.
 * - The outgoing quote fades and drops away first; the incoming one rises
 *   in a beat later. Transform and opacity only.
 */
export function Testimonial() {
  const [active, setActive] = React.useState(0);
  const tabs = React.useRef([]);
  const count = QUOTES.length;

  const select = (i, focus) => {
    const next = (i + count) % count;
    setActive(next);
    if (focus) tabs.current[next]?.focus();
  };

  const onKeyDown = (e) => {
    const moves = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: count - 1 };
    if (e.key in moves) {
      e.preventDefault();
      select(moves[e.key], true);
    }
  };

  return (
    <section data-screen-label="Testimonial" className="us-testi">
      <div className="us-container">
        <div className="us-testi-inner">
          <div className="us-testi-head">
            <span className="us-eyebrow">Testimonials</span>
            <span className="us-testi-count" aria-hidden="true">
              <b>{pad(active + 1)}</b> / {pad(count)}
            </span>
          </div>

          <div id="us-testi-panel" role="tabpanel" aria-labelledby={`us-testi-tab-${active}`} className="us-testi-stack">
            {QUOTES.map((q, i) => (
              <blockquote key={i} className={"us-testi-quote" + (i === active ? " is-active" : "")} aria-hidden={i !== active}>
                <span className="us-testi-mark" aria-hidden="true">&ldquo;</span>
                {q.text}
                <span aria-hidden="true">&rdquo;</span>
              </blockquote>
            ))}
          </div>

          <div className="us-testi-foot">
            <div role="tablist" aria-label="Choose a testimonial" className="us-testi-avatars" onKeyDown={onKeyDown}>
              {QUOTES.map((q, i) => (
                <button
                  key={i}
                  ref={(el) => (tabs.current[i] = el)}
                  id={`us-testi-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-controls="us-testi-panel"
                  aria-label={`${q.name}, ${q.role}`}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => select(i)}
                  className={"us-testi-avatar" + (i === active ? " is-active" : "")}
                  style={{ zIndex: i === active ? count + 1 : count - i }}
                >
                  {initials(q.name)}
                </button>
              ))}
            </div>

            <span className="us-testi-rule" aria-hidden="true" />

            <div className="us-testi-who">
              {QUOTES.map((q, i) => (
                <div key={i} className={"us-testi-author" + (i === active ? " is-active" : "")} aria-hidden={i !== active}>
                  <span className="us-testi-name">{q.name}</span>
                  <span className="us-testi-role">{q.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
