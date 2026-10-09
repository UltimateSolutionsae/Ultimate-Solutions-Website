"use client";
import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * A large photo that drifts slightly slower than the page as it passes,
 * giving it depth without any scroll-jacking: the page scrolls normally
 * and only the image's own transform is driven from scroll progress.
 *
 * Built on Motion's `useScroll` — no raw window scroll listener. The
 * image is oversized by the drift amount on both edges so the container
 * is never uncovered at either end of the travel, and only `y` animates,
 * never height or top.
 *
 * Reserved for genuinely large imagery (page heroes, project detail
 * banners). On a card-sized photo the effect reads as a glitch, and the
 * shared card zoom is the right treatment there instead.
 */
export function ParallaxImage({
  src,
  alt = "",
  amount = 6,
  className = "",
  style,
  imgStyle,
  children,
}) {
  const ref = React.useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", overflow: "hidden", ...style }}>
      <motion.img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          top: `-${amount}%`,
          height: `${100 + amount * 2}%`,
          objectFit: "cover",
          y: reduce ? 0 : y,
          ...imgStyle,
        }}
      />
      {children}
    </div>
  );
}
