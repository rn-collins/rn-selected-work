import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PortfolioWayfinding } from "../components/portfolio-wayfinding";
import { Metricool } from "../components/metricool";

export const metadata: Metadata = {
  metadataBase: new URL("https://rn-selected-work.vercel.app"),
  title: { default: "RN Selected Work", template: "%s | RN Selected Work" },
  description:
    "Builds, research, institutional frameworks, working systems, public resources, and published analysis by RN Collins.",
  applicationName: "RN Selected Work",
  manifest: "/site.webmanifest",
  // Every page carries the full favicon set (RN's standing rule, Nov 20, 2026); scripts/check-favicons.mjs fails the
  // build if any page lacks it.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-v2.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "RN Selected Work",
  },
  twitter: { card: "summary_large_image" },
  // Pinterest site claim for RN's Pinterest (Renaissance Woman 3000), Nov 21, 2026.
  other: { "p:domain_verify": "c7c5e406829bf0ef0998229d5e81809b" },
};

export const viewport: Viewport = {
  themeColor: "#f3efe4",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* No CSP on this deployment, so the link is permitted here — several
            other builds in the estate enforce style-src 'self' and must
            self-host instead. Playfair Display carries the display voice (wordmark and titles),
            Inter everything read, IBM Plex Mono code and credits (RN, Nov 24, 2026).
            Google serves latin and latin-ext, so ʻokina and kahakō render in all three. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <a className="skipLink" href="#portfolio-content">Skip to main content</a>
        <PortfolioWayfinding />
        <div id="portfolio-content">{children}</div>
        <PortfolioWayfinding bottom />
        <Metricool />
      </body>
    </html>
  );
}
