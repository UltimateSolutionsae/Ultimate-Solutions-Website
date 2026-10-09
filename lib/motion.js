/**
 * ===== Ultimate Solutions — motion vocabulary =====
 *
 * The single source of truth for every curve, duration and spring on the
 * site. The same values are mirrored as CSS custom properties in
 * styles/tokens.css (--ease-out, --duration-*, --lift-*, --press-scale),
 * so a component can reach for whichever form fits: JS for anything
 * gesture-driven or spring-based, CSS for colour/shadow/border fades.
 *
 * No component may define its own cubic-bezier, duration or spring. If a
 * new value seems necessary, the right move is to argue for adding it
 * here, not to inline it locally.
 *
 * Rules this vocabulary exists to enforce:
 *   - transform and opacity only — never width, height, top or left
 *   - every animation communicates hierarchy, feedback or a state change
 *   - exits run faster than entrances
 *   - prefers-reduced-motion is honoured (MotionConfig reducedMotion="user"
 *     in app/layout.js, plus the global CSS override in tokens.css)
 */

/* --- Easing: one curve for everything moving into place. --------------
   An expo-out: fast departure, long settle. Matches the design system's
   original --ease-standard exactly, so adopting it site-wide changes
   consistency without re-timing the elements that were already correct. */
export const EASE = [0.16, 1, 0.3, 1];
export const EASE_CSS = "cubic-bezier(0.16, 1, 0.3, 1)";

/* --- Springs: for interactive response. ------------------------------
   Springs, not fixed-duration tweens, because a spring animates from the
   element's live on-screen value and can be grabbed and reversed
   mid-flight. Both are critically damped — no overshoot, because none of
   these interactions carry real momentum. SPRING is the interface
   response (hover, press, a pill gliding between options); SPRING_SOFT is
   slightly slower and heavier, for surfaces that open (accordions,
   menus, sheets). */
export const SPRING = { type: "spring", stiffness: 400, damping: 30 };
export const SPRING_SOFT = { type: "spring", stiffness: 260, damping: 30 };

/* --- Durations, in seconds (Motion) and milliseconds (CSS). ---------- */
export const DUR = {
  press: 0.15,
  hover: 0.25,
  ui: 0.5,
  exit: 0.35,
  reveal: 0.8,
};

export const MS = {
  press: 150,
  hover: 250,
  ui: 500,
  exit: 350,
  reveal: 800,
};

/* Stagger between siblings in a scroll reveal or load choreography. */
export const STAGGER = 0.08;
export const STAGGER_MS = 80;

/* --- Distances and scales. ------------------------------------------- */
export const LIFT = { card: -6, button: -2 };
export const PRESS_SCALE = 0.97;
export const IMAGE_ZOOM = 1.04;
export const REVEAL_Y = 16;
/* The hero image settles from just over full size rather than growing
   into place from small — it reads as focus, not as an entrance. */
export const SETTLE_SCALE = 1.03;

/* --- Ready-made transition objects. ---------------------------------- */
export const T = {
  press: SPRING,
  hover: SPRING,
  glide: SPRING,
  panel: SPRING_SOFT,
  ui: { duration: DUR.ui, ease: EASE },
  exit: { duration: DUR.exit, ease: EASE },
  reveal: { duration: DUR.reveal, ease: EASE },
};

/* --- Shared gesture prop bundles. ------------------------------------
   Spread onto a motion element so press and hover feel identical
   everywhere without each component restating the spring. */
export const pressable = {
  whileTap: { scale: PRESS_SCALE, transition: SPRING },
};

export const liftable = (y = LIFT.card) => ({
  whileHover: { y, transition: SPRING },
  whileTap: { scale: PRESS_SCALE, y: 0, transition: SPRING },
});

/* --- Scroll reveal. --------------------------------------------------
   Shared viewport trigger: fire once, a little before the element is
   fully on screen. */
export const VIEWPORT = { once: true, amount: 0.15, margin: "0px 0px -8% 0px" };

/* --- CSS helper. -----------------------------------------------------
   Builds a CSS transition string for properties that are not transform
   or opacity — colour, background, border-colour, box-shadow — which are
   cheap to animate and are the only non-transform properties allowed. */
export function cssTransition(props, ms = MS.hover) {
  return (Array.isArray(props) ? props : [props])
    .map((p) => `${p} ${ms}ms ${EASE_CSS}`)
    .join(", ");
}
