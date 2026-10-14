"use client";
import React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

// Each moment pairs a photo from the project galleries with the line the
// site already uses for that discipline. Only the moment names are new.
const MOMENTS = [
  { discipline: "Control", moment: "Arriving", text: "Mobile, remote, voice and gesture control resolved into a single interface across the home.", img: "/projects/c128/control-panel.png", position: "45% 50%" },
  { discipline: "Communications", moment: "The Gate", text: "Intercom, paging and telephony on the same backbone, so a call reaches the room a person is actually in.", img: "/projects/volante-2/intercom.png", position: "50% 40%" },
  { discipline: "Lighting", moment: "Evening", text: "Lighting, climate and curtains resolved into one scene, so a single press sets the room.", img: "/projects/c128/bar.png", position: "50% 55%" },
  { discipline: "Entertainment", moment: "Film Night", text: "Speaker and screen positions taken from the seating plan, agreed with the interior designer.", img: "/projects/volante-1/living-room.png", position: "50% 55%" },
];

/** One progress segment, filling as its moment is scrolled through. */
function Segment({ progress, index, count }) {
  const scaleX = useTransform(progress, [index / count, (index + 1) / count], [0, 1], { clamp: true });
  return (
    <span className="us-day-seg">
      <motion.span style={{ scaleX }} />
    </span>
  );
}

/**
 * "A day in the home": the disciplines told as four moments.
 *
 * Desktop: the section is taller than the screen and its panel is sticky,
 * so as the page scrolls past, the panel stays put and steps through the
 * moments -- the photo crossfades and the matching line comes into focus.
 * The page itself scrolls normally the whole time (sticky positioning,
 * not scroll-jacking), with progress read from Motion's useScroll.
 *
 * Phones: a plain stacked list, one photo and line per moment.
 */
export function DayInTheHome() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = React.useState(0);
  const count = MOMENTS.length;

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(count - 1, Math.max(0, Math.floor(p * count))));
  });

  const heading = (
    <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>A Day In The Home</h2>
  );

  return (
    <section data-screen-label="A day in the home" className="us-day">
      {/* Desktop: sticky, scroll-stepped panel */}
      <div ref={ref} className="us-day-track" style={{ "--day-count": count }}>
        <div className="us-day-panel">
          <div className="us-day-text">
            <div>
              {heading}
              <ol className="us-day-steps">
                {MOMENTS.map((m, i) => (
                  <li key={m.moment} className={"us-day-step" + (i === active ? " is-active" : "")}>
                    <div className="us-day-label">{m.discipline} · {m.moment}</div>
                    <p>{m.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="us-day-progress" aria-hidden="true">
              {MOMENTS.map((m, i) => <Segment key={m.moment} progress={scrollYProgress} index={i} count={count} />)}
            </div>
          </div>
          <div className="us-day-pics">
            {MOMENTS.map((m, i) => (
              <img key={m.img} src={m.img} alt="" className={i === active ? "is-active" : undefined} style={{ objectPosition: m.position }} />
            ))}
          </div>
        </div>
      </div>

      {/* Phones: stacked */}
      <div className="us-day-stack us-container">
        {heading}
        {MOMENTS.map((m) => (
          <div key={m.moment} className="us-day-card">
            <img src={m.img} alt="" style={{ objectPosition: m.position }} loading="lazy" />
            <div className="us-day-label">{m.discipline} · {m.moment}</div>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
