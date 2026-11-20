import hub from "../data/links-hub.json";
import social from "../data/social-links.json";
import aanSite from "../data/aan-site.json";
import { postedSoFar, longDate } from "./aan-sources";
import { hawaiiToday } from "./releases";

// Everything the business-card page links to, in one place, for the three direction previews (/links/a, b, c).
// Platforms come from data/social-links.json (X dropped, Threads paused); the rest from data/links-hub.json.
export type CardLink = { id: string; label: string; short: string; url: string; brand: "aan" | "rn" | "both"; tone: Tone };
export type Tone = "forest" | "teal" | "sun" | "coral" | "paper" | "holo" | "glitter" | "ink";

type Account = { id: string; label: string; url: string };
const accounts = social as Record<"rn" | "aan", { name: string; accounts: Account[] }>;
const leaveOut = hub.leaveOut as Record<"rn" | "aan", string[]>;
type Dated = { releasedAt: string; hold: boolean; path: string };
const aan = aanSite as unknown as { base: string; posts: Record<string, Dated> };

const AAN_TONE: Record<string, Tone> = { instagram: "holo", tiktok: "forest", youtube: "coral", bluesky: "teal", pinterest: "sun" };
const RN_TONE: Record<string, Tone> = { instagram: "paper", tiktok: "ink", youtube: "paper", bluesky: "paper" };
const ORDER = ["instagram", "tiktok", "linkedin", "youtube", "bluesky", "pinterest"];

export function platforms(brand: "aan" | "rn"): CardLink[] {
  return accounts[brand].accounts
    .filter((a) => !leaveOut[brand].includes(a.id))
    .sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id))
    .map((a) => ({
      id: `${brand}-${a.id}`,
      label: `${brand === "aan" ? "Ask a Neuroscientist" : "RN Collins"} on ${a.label}`,
      short: a.label,
      url: a.url,
      brand,
      tone: (brand === "aan" ? AAN_TONE : RN_TONE)[a.id] ?? "paper",
    }));
}

export const extras: CardLink[] = [
  { id: "work", label: "Work with me", short: "Work with me", url: "/work-with-me", brand: "rn", tone: "ink" },
  { id: "linkedin", label: "RN on LinkedIn: research carousels every day", short: "LinkedIn", url: hub.linkedin.url, brand: "rn", tone: "teal" },
  { id: "ask", label: "Ask me a brain question", short: "Ask a question", url: "https://askaneuroscientist.vercel.app/questions/", brand: "aan", tone: "sun" },
  { id: "aan-site", label: "Ask a Neuroscientist: every post, slide by slide", short: "AaN site", url: hub.aan.site.url, brand: "aan", tone: "forest" },
  { id: "polymath", label: "The Polymath newsletter", short: "The Polymath", url: hub.newsletter.url, brand: "rn", tone: "coral" },
  { id: "rnsw", label: "RN Selected Work", short: "Selected Work", url: hub.rn.site.url, brand: "rn", tone: "paper" },
  { id: "sources", label: "Every source, both brands", short: "Sources", url: hub.sources.url, brand: "both", tone: "glitter" },
];

export const emails = hub.email;
export const title = hub.title;
export const tagline = hub.aan.tagline;

// Every character as an HTML entity: works without JavaScript, not plain text for simple scrapers.
export const entities = (t: string) => Array.from(t, (c) => `&#${c.codePointAt(0)};`).join("");

export function thisWeek() {
  const today = hawaiiToday();
  const live = (p?: Dated) => !!p && !p.hold && p.releasedAt !== "" && p.releasedAt <= today;
  return postedSoFar()
    .filter((p) => live(aan.posts[p.slug]))
    .slice(-3)
    .reverse()
    .map((p) => ({
      title: p.title,
      date: longDate(p.date),
      href: `${aan.base}${aan.posts[p.slug].path}`,
      cover: `${aan.base}${aan.posts[p.slug].path}slide-01.webp`,
    }));
}

export function mjbizcon() {
  const today = hawaiiToday();
  return hub.dated.find((d) => d.from <= today && today <= d.to) ?? null;
}
