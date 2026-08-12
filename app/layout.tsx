import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rn-selected-work.vercel.app"),
  title: { default: "RN Selected Work", template: "%s | RN Selected Work" },
  description:
    "Builds, research, institutional frameworks, working systems, public resources, and published analysis by Rayven-Nikkita (RN) Collins.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "RN Selected Work",
    description: "Questions too messy for a single discipline—made concrete through research, systems, and working builds.",
    type: "website",
    siteName: "RN Selected Work",
  },
  twitter: { card: "summary_large_image", title: "RN Selected Work" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main-content">Skip to main content</a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
