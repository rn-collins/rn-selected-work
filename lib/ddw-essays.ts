import data from "../data/ddw-essays.json";

// The Dutch Design Week essays. RN wrote one long-form article for every package
// in the series — makers, venues, editions, the Dutch Design Awards and the 27
// essays — and until now they lived only in the working folder, so a post had
// nothing of its own to link to. The text here is the essay as written; the
// working notes that sit beside it in the source files are not published.
//
// Page address: /writing/dutch-design-week/<family>/<slug>. The package's own
// citation page stays at /sources/<account>/<slug>; sourcesPath() pairs them.

export type EssaySection = { t: "h2" | "p" | "li" | "tr"; x: string };
export type EssaySource = { id?: string; label?: string; url: string; publisher?: string; published?: string };
export type Essay = {
  family: string;
  familyLabel: string;
  slug: string;
  title: string;
  subtitle: string;
  byline: string;
  description: string;
  tags: string[];
  sections: EssaySection[];
  sources: EssaySource[];
  words: number;
};

export const essays = data as Essay[];

export const FAMILY_ORDER = ["ddw27", "makers", "venues", "editions", "dda"] as const;

export const FAMILY_BLURB: Record<string, string> = {
  ddw27: "Essays on work in the Dutch Design Week 2026 programme.",
  makers: "Makers and studios traced through the official photo archive and the written record.",
  venues: "The Eindhoven buildings that host the week, and what the records say they were before.",
  editions: "The week year by year, read through its own programme and archive.",
  dda: "The Dutch Design Awards year by year.",
};

export function essay(family: string, slug: string) {
  return essays.find((e) => e.family === family && e.slug === slug);
}

export function essaysByFamily(family: string) {
  return essays.filter((e) => e.family === family);
}

export function families() {
  const present = new Set(essays.map((e) => e.family));
  return FAMILY_ORDER.filter((f) => present.has(f));
}

export function readingMinutes(e: Essay) {
  return Math.max(1, Math.round(e.words / 230));
}

export function essayPath(e: Pick<Essay, "family" | "slug">) {
  return `/writing/dutch-design-week/${e.family}/${e.slug}`;
}

// The citation pages use the same accounts, except that a Dutch Design Awards
// year is filed as d2015 rather than 2015.
export function sourcesPath(e: Pick<Essay, "family" | "slug">) {
  return `/sources/${e.family}/${e.family === "dda" ? `d${e.slug}` : e.slug}`;
}

export const totalWords = essays.reduce((n, e) => n + e.words, 0);
