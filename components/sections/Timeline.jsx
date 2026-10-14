"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { T } from "@/lib/motion.js";

/**
 * Milestones as something you move through rather than a wall of rows.
 *
 * Desktop: a large year sits sticky on the left and changes as each
 * milestone reaches the middle of the screen; the milestones run down a
 * rail on the right, with the current one in full focus and the rest
 * quieter. The focus is tracked with an IntersectionObserver on a thin
 * band across the middle of the viewport -- no scroll listener, and the
 * page scrolls normally.
 *
 * Phones: no sticky column; each milestone carries its own year inline,
 * and every entry is at full strength (layout.css).
 *
 * A range like "2005–2007" sets the start year large and the rest on a
 * smaller line beneath, so the display year never outgrows its column.
 */
function splitYear(year) {
  const i = year.indexOf("–");
  return i < 0 ? [year, null] : [year.slice(0, i), year.slice(i)];
}

export function Timeline({ items }) {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef([]);

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const [big, rest] = splitYear(items[active].year);

  return (
    <div className="us-tl">
      <div className="us-tl-year" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: T.ui }}
            exit={{ opacity: 0, y: -10, transition: T.exit }}
          >
            <div className="us-tl-year-big">{big}</div>
            {rest && <div className="us-tl-year-rest">{rest}</div>}
          </motion.div>
        </AnimatePresence>
      </div>

      <ol className="us-tl-rail">
        {items.map((t, i) => (
          <li
            key={t.year + t.title}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className={"us-tl-item" + (i === active ? " is-active" : "")}
          >
            <div className="us-tl-when">{t.year}</div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{t.title}</h3>
            <p style={{ margin: "10px 0 0", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{t.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
