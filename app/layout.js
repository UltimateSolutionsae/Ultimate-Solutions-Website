import "./globals.css";
import { MotionConfig } from "motion/react";
import { Header } from "@/components/chrome/Header.jsx";
import { Footer } from "@/components/chrome/Footer.jsx";
import { ScrollToTop } from "@/components/chrome/ScrollToTop.jsx";

export const metadata = {
  title: "Ultimate Solutions — KNX Systems Integration, Dubai",
  description:
    "Ultimate Solutions designs, installs, commissions and supports intelligent building-control systems across lighting, climate, security, shading, audio and network — Dubai, since 2007.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionConfig reducedMotion="user" transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
          <ScrollToTop />
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </MotionConfig>
      </body>
    </html>
  );
}
