import type { Metadata } from "next";
import "./gallery.css";
import { Gallery } from "../components/gallery/gallery";

// The home page is "The Gallery" (RN, Nov 27, 2026). The previous home lives on at /archive.
const description =
  "RN Collins, neuroscientist, content creator and analyst. Neuroscience studies turned into posts, sites and exhibits, for museums, science institutions, brands and AI.";

export const revalidate = 3600; // dated rooms open on their release day (Hawaii time)

export const metadata: Metadata = {
  title: { absolute: "RN Collins · Neuroscience you can check" },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: "RN Collins", description, url: "/" },
  twitter: { card: "summary_large_image", title: "RN Collins", description },
};

export default function Home() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
