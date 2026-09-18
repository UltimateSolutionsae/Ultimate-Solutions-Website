"use client";
import React from "react";

/**
 * Fade-up-on-scroll wrapper, matching the prototype's `usFadeUp` reveal behaviour
 * (IntersectionObserver-driven, 720ms var(--ease-standard), optional stagger delay).
 * Respects prefers-reduced-motion via the global media query, which collapses
 * transition/animation durations to near-zero.
 */
export function Reveal({ as: As = "div", delay = 0, style, children, ...rest }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
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
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(18px)",
        transition: `opacity 720ms var(--ease-standard) ${delay}ms, transform 720ms var(--ease-standard) ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}
