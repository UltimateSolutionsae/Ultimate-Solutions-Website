"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Logotype } from "../ui/Logotype.jsx";
import { Button } from "../ui/Button.jsx";
import { IconButton } from "../ui/IconButton.jsx";
import { NAV } from "@/lib/data.js";

export function Header() {
  const pathname = usePathname();
  const [progress, setProgress] = React.useState(0);
  const [navHover, setNavHover] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Close the menu on navigation, on Escape, and if the viewport grows back
  // to desktop while it is open.
  React.useEffect(() => { setMenuOpen(false); }, [pathname]);

  React.useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    const mq = window.matchMedia("(min-width: 981px)");
    const onChange = (e) => { if (e.matches) setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(4,47,52,0.86)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border-on-dark)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px 32px", minHeight: 76, display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ flex: "1 1 0", minWidth: 0, display: "flex", alignItems: "center" }}>
          <Link href="/" aria-label="Ultimate Solutions — Home" style={{ display: "inline-flex", border: "none" }}>
            <Logotype tone="light" size="sm" />
          </Link>
        </div>

        <nav className="us-nav-desktop" style={{ alignItems: "center", justifyContent: "center", gap: 4, flexWrap: "wrap", flex: "none" }}>
          {NAV.map((n) => {
            const active = isActive(n.href);
            const hovered = navHover === n.id;
            return (
              <Link
                key={n.id}
                href={n.href}
                onMouseEnter={() => setNavHover(n.id)}
                onMouseLeave={() => setNavHover(null)}
                style={{
                  background: hovered ? "rgba(181,242,219,0.10)" : "transparent",
                  border: "none", borderBottom: "none", cursor: "pointer",
                  fontFamily: "var(--font-core)", fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em",
                  padding: "9px 14px", borderRadius: 9999,
                  transition: "background 200ms var(--ease-standard), color 200ms var(--ease-standard)",
                  color: active ? "var(--us-mint)" : "var(--us-white)",
                  display: "inline-block",
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="us-header-cta" style={{ flex: "1 1 0", minWidth: 0, justifyContent: "flex-end" }}>
          <Button variant="secondary" size="sm" icon="arrow-right" href="/contact">
            Book A Consultation
          </Button>
        </div>

        <div className="us-nav-toggle" style={{ marginLeft: "auto", flex: "none" }}>
          <IconButton
            icon={menuOpen ? "x" : "menu"}
            label={menuOpen ? "Close menu" : "Open menu"}
            variant="onDark"
            size="md"
            aria-expanded={menuOpen}
            aria-controls="us-mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "var(--us-mint)",
          opacity: 0.5, transformOrigin: "left", transform: `scaleX(${progress})`,
          transition: "transform 120ms linear",
        }}
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="us-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", bounce: 0, duration: 0.32 }}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "rgba(4,47,52,0.97)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
              borderBottom: "1px solid var(--border-on-dark)",
              padding: "12px 20px 28px",
              maxHeight: "calc(100vh - 76px)", overflowY: "auto",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {NAV.map((n) => {
                const active = isActive(n.href);
                return (
                  <Link
                    key={n.id}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      border: "none", borderBottom: "1px solid var(--border-on-dark)",
                      fontFamily: "var(--font-core)", fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em",
                      color: active ? "var(--us-mint)" : "var(--us-white)",
                      padding: "16px 4px", display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}
                  >
                    {n.label}
                    {active && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 9999, background: "var(--us-mint)" }} />}
                  </Link>
                );
              })}
            </nav>
            <div style={{ marginTop: 24 }}>
              <Button variant="secondary" size="md" icon="arrow-right" fullWidth href="/contact" onClick={() => setMenuOpen(false)}>
                Book A Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
