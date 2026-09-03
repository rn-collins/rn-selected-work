import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rn-selected-work.vercel.app"),
  title: { default: "RN Selected Work", template: "%s | RN Selected Work" },
  description:
    "Builds, research, institutional frameworks, working systems, public resources, and published analysis by Rayven-Nikkita (RN) Collins.",
  applicationName: "RN Selected Work",
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon-v2.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-v2.svg",
    apple: "/favicon-v2.svg",
  },
  openGraph: {
    title: "RN Selected Work",
    description: "Questions too messy for a single discipline—made concrete through research, systems, and working builds.",
    type: "website",
    siteName: "RN Selected Work",
  },
  twitter: { card: "summary_large_image", title: "RN Selected Work" },
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
            self-host instead. Bodoni Moda carries the display voice at the
            126px hero size; Outfit carries everything read at text size. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,400&family=Outfit:wght@300;400;500;600;800&display=swap"
        />
      </head>
      <body>
        <a className="skipLink" href="#main-content">Skip to main content</a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
