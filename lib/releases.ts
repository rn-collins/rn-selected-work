import data from "../data/releases.json";

// The release record (data/releases.json, written by scripts/sync_releases.py). It is the only thing that decides
// whether a piece is public: its sources page, its essay (under /essays and under /writing/dutch-design-week), its
// place in every index and in sitemap.xml. A piece that is not released returns 404, also by direct address.
// A piece with no entry is treated as not released.
//
// Piece ids: <account>/<slug> (ddw26/s12), aan/<slug> (aan/oct-08), tfh/<slug> (tfh/12).
export type Release = {
  id: string; releasedAt: string; hold: boolean; postUrls: Record<string, string>;
  longFormUrl: string; sourcePageUrl: string; galleryUrl: string;
};

const TIME_ZONE = "Pacific/Honolulu";
const byId = new Map((data.pieces as Release[]).map((r) => [r.id, r]));

export function release(id: string): Release | undefined {
  return byId.get(id);
}

// Today's date in Hawaii, as YYYY-MM-DD.
export function hawaiiToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(now);
}

export function isReleased(id: string, now = new Date()) {
  const r = byId.get(id);
  return !!r && !r.hold && r.releasedAt !== "" && r.releasedAt <= hawaiiToday(now);
}

export const aanId = (slug: string) => `aan/${slug}`;
export const tfhId = (slug: string) => `tfh/${slug}`;
export const pieceId = (account: string, slug: string) => `${account}/${slug}`;

// Post addresses, labelled by platform, for the link set on each piece's pages.
const PLATFORM: Record<string, string> = {
  instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube", linkedin: "LinkedIn", threads: "Threads",
  x: "X", bluesky: "Bluesky", facebook: "Facebook", substack: "Substack", beehiiv: "Newsletter",
};
export function postLinks(id: string) {
  const r = byId.get(id);
  if (!r) return [];
  return Object.entries(r.postUrls ?? {})
    .filter(([, url]) => !!url)
    .map(([platform, url]) => ({ label: `The post on ${PLATFORM[platform] ?? platform}`, url }));
}

// The previous and next released pieces in a list already in posting order.
export function neighbours<T>(items: T[], index: number) {
  return { prev: index > 0 ? items[index - 1] : undefined, next: index >= 0 && index < items.length - 1 ? items[index + 1] : undefined };
}
