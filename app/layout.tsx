import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rn-selected-work.vercel.app"),
  title: { default: "RN — Research, Systems, and Selected Work", template: "%s | RN" },
  description:
    "The practice, selected work, initiatives, and published analysis of Rayven-Nikkita (RN) Collins.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "RN — Research, Systems, and Selected Work",
    description: "Questions too messy for a single discipline—studied, made visible, and developed into useful forms.",
    type: "website",
    siteName: "RN Selected Work",
  },
  twitter: { card: "summary_large_image", title: "RN — Research, Systems, and Selected Work" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
