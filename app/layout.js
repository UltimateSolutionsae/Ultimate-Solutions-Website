import "./globals.css";
import { MotionConfig } from "motion/react";
import { Header } from "@/components/chrome/Header.jsx";
import { Footer } from "@/components/chrome/Footer.jsx";
import { ScrollToTop } from "@/components/chrome/ScrollToTop.jsx";
import { MobileBookBar } from "@/components/chrome/MobileBookBar.jsx";
import { SPRING } from "@/lib/motion.js";

export const metadata = {
  title: "Ultimate Solutions — KNX Systems Integration, Dubai",
  description:
    "Ultimate Solutions designs, installs, commissions and supports intelligent building-control systems across lighting, climate, security, shading, audio and network — Dubai, since 2007.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Scroll reveals hide themselves in JS and un-hide on
            intersection. With JS unavailable that never happens, so force
            them visible rather than leave the page blank. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {/* One default transition for the whole tree: the shared
            interface spring from lib/motion.js. reducedMotion="user"
            makes Motion drop transform animations when the OS asks. */}
        <MotionConfig reducedMotion="user" transition={SPRING}>
          <ScrollToTop />
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
          <MobileBookBar />
        </MotionConfig>
      </body>
    </html>
  );
}
