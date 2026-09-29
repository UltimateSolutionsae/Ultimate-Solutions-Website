"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// <Link> navigation and the browser's own back/forward both need to land
// at the top of the new page. The browser's native scroll restoration is
// turned off so a stale position never flashes before this runs, then
// every pathname change scrolls to top -- animated by the site's global
// `scroll-behavior: smooth` (tokens.css), so it eases in rather than
// jumping.
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
