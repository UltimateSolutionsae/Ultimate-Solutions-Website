"use client";
import React from "react";
import { MS, REVEAL_Y, STAGGER_MS } from "@/lib/motion.js";

/**
 * The one scroll-reveal used by every section: a small rise and fade,
 * fired once as the element comes into view.
 *
 * Deliberately IntersectionObserver + CSS rather than Motion's
 * `whileInView`. Motion renders its `initial` variant into the
 * server-side HTML, so a reveal built that way ships `opacity: 0` in the
 * markup — if JavaScript never runs, that content is permanently
 * invisible. Observing after mount keeps the hidden state out of the SSR
 * output, and the <noscript> override in app/layout.js plus the failsafe
 * timer below mean nothing stays hidden if the animation fails to fire.
 *
 * Timing comes from the shared vocabulary in lib/motion.js; reduced
 * motion is handled by the global override in styles/tokens.css, which
 * collapses both duration and delay.
 *
 * Pass `index` for a staggered group (the shared 80ms step). `delay`
 * takes a raw millisecond value for the rare one-off.
 */
export function Reveal({ as: As = "div", index = 0, delay, style, children, ...rest }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const wait = delay != null ? delay : Math.min(index, 7) * STAGGER_MS;

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Reduced motion gets a static fallback, not a fast one: skip the
    // observer entirely so nothing is ever gated on scrolling. Collapsing
    // the transition to 0.01ms (tokens.css) would still leave content
    // waiting to be scrolled past before it appeared.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    // Anything already on screen at mount is shown without waiting on the
    // observer callback.
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );
    io.observe(el);

    // Failsafe: if the observer never reports (a detached subtree, a
    // scroll container that never scrolls), reveal anyway rather than
    // leave the content hidden.
    const failsafe = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <As
      ref={ref}
      data-reveal=""
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${REVEAL_Y}px)`,
        transition: `opacity ${MS.reveal}ms var(--ease-out) ${wait}ms, transform ${MS.reveal}ms var(--ease-out) ${wait}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}
