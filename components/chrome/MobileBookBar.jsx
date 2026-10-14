"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Button } from "../ui/Button.jsx";
import { COPY } from "@/lib/data.js";
import { SPRING_SOFT, T } from "@/lib/motion.js";

/**
 * Phones only. Under 980px the header's "Book A Consultation" button moves
 * into the menu, and the homepage is roughly 12,000px long, so once a
 * visitor is past the first screen there is no way to book without
 * scrolling to the end or opening the menu. This bar keeps the action
 * one tap away.
 *
 * It appears after the first screen, and gets out of the way when it would
 * duplicate or cover something: on the Contact page (the form is the
 * action), while the mobile menu is open (the menu has its own button),
 * and once the footer is on screen.
 *
 * Scroll position comes from Motion's useScroll and the footer from an
 * IntersectionObserver -- no window scroll listener.
 */
export function MobileBookBar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [pastFirstScreen, setPastFirstScreen] = React.useState(false);
  const [footerVisible, setFooterVisible] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setPastFirstScreen(y > window.innerHeight * 0.8);
  });

  React.useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setFooterVisible(e.isIntersecting));
    io.observe(footer);
    return () => io.disconnect();
  }, [pathname]);

  // The header marks the document while its mobile menu is open.
  React.useEffect(() => {
    const root = document.documentElement;
    const read = () => setMenuOpen(root.dataset.menu === "open");
    read();
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ["data-menu"] });
    return () => mo.disconnect();
  }, []);

  const show = pastFirstScreen && !footerVisible && !menuOpen && pathname !== "/contact";

  return (
    <div className="us-book-bar-wrap">
      <AnimatePresence>
        {show && (
          <motion.div
            key="bar"
            className="us-book-bar"
            initial={{ y: "140%", opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: SPRING_SOFT }}
            exit={{ y: "140%", opacity: 0, transition: T.exit }}
          >
            <Button variant="secondary" size="md" icon="arrow-right" href="/contact" fullWidth>
              {COPY.cta}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
