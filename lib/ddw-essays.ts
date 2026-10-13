import data from "../data/ddw-essays.json";
import { isReleased, release } from "./releases";

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

// The piece id each essay shares with its sources page (lib/releases.ts): a Dutch Design Awards year is filed as
// d2015 rather than 2015, and the essays in the ddw27 family carry a "ddw-nl-" prefix their sources pages do not.
export function pieceSlug(e: Pick<Essay, "family" | "slug">) {
  if (e.family === "dda") return `d${e.slug}`;
  if (e.family === "ddw27") return e.slug.replace(/^ddw-nl-/, "");
  return e.slug;
}
export const ddwPieceId = (e: Pick<Essay, "family" | "slug">) => `${e.family}/${pieceSlug(e)}`;

// An essay is public with its piece (data/releases.json). Before that its address returns 404 and no list shows it.
export function releasedDdwEssays(now = new Date()) {
  const day = (e: Essay) => release(ddwPieceId(e))?.releasedAt ?? "";
  return essays.filter((e) => isReleased(ddwPieceId(e), now)).sort((a, b) => day(a).localeCompare(day(b)));
}

export function essay(family: string, slug: string, now = new Date()) {
  const e = essays.find((x) => x.family === family && x.slug === slug);
  return e && isReleased(ddwPieceId(e), now) ? e : undefined;
}

export function essaysByFamily(family: string, now = new Date()) {
  return releasedDdwEssays(now).filter((e) => e.family === family);
}

export function families(now = new Date()) {
  const present = new Set(releasedDdwEssays(now).map((e) => e.family));
  return FAMILY_ORDER.filter((f) => present.has(f));
}

export function readingMinutes(e: Essay) {
  return Math.max(1, Math.round(e.words / 230));
}

export function essayPath(e: Pick<Essay, "family" | "slug">) {
  return `/writing/dutch-design-week/${e.family}/${e.slug}`;
}

// The citation page for the essay's piece.
export function sourcesPath(e: Pick<Essay, "family" | "slug">) {
  return `/sources/${e.family}/${pieceSlug(e)}`;
}

export const releasedWords = (now = new Date()) => releasedDdwEssays(now).reduce((n, e) => n + e.words, 0);
