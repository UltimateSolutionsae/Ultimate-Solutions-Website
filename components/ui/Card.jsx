"use client";
import React from "react";
import { motion } from "motion/react";
import { LIFT, PRESS_SCALE, SPRING, cssTransition } from "@/lib/motion.js";

/**
 * The single shared hover response for every card and tile on the site:
 * the surface lifts, its shadow deepens, and any image inside zooms
 * slowly. Before this existed the four card sites each had their own
 * treatment (and the homepage project cards had none at all).
 *
 * Lift and press are Motion springs, so they stay interruptible. The
 * shadow fades in CSS, and the image zoom lives in styles/tokens.css
 * keyed on `.us-card:hover .us-card-media img` — wrap a card's photo in
 * an element with className="us-card-media" to opt it into the zoom, and
 * leave icons and logos outside it.
 *
 * Children are rendered inside, so a card that is itself a link can nest
 * a next/link <Link> without this component needing to know about it.
 */
export function Card({
  interactive = true,
  lift = LIFT.card,
  restShadow = "var(--shadow-sm)",
  hoverShadow = "var(--shadow-lg)",
  className = "",
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const gestures = interactive
    ? {
        onHoverStart: () => setHover(true),
        onHoverEnd: () => setHover(false),
        whileHover: { y: lift, transition: SPRING },
        whileTap: { scale: PRESS_SCALE, y: 0, transition: SPRING },
      }
    : {};

  return (
    <motion.div
      className={`us-card ${className}`.trim()}
      {...gestures}
      style={{
        position: "relative",
        boxShadow: interactive && hover ? hoverShadow : restShadow,
        transition: cssTransition("box-shadow"),
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
