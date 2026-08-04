import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selected Work — RN Collins",
  description:
    "Selected research, systems, builds, advisory work, and published writing by Rayven-Nikkita (RN) Collins.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
