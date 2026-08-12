import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Culturalyst — RN Collins",
  description: "A researched, guided view of RN Collins's work for Culturalyst.",
  robots: { index: false, follow: false },
};

export default function CulturalystLayout({ children }: { children: React.ReactNode }) {
  return children;
}
