// The home page, "The Gallery" (RN, Nov 27, 2026): RN's work hung in rooms, each piece inside old tech with a wall
// label. Dated pieces (Ask a Neuroscientist posts, Reels, zines) appear on the live site only from their release date
// in Hawaii; a preview deployment shows everything, marked "Preview", so RN can review the rooms early.
import { hawaiiToday } from "./releases";
import { publicationCounts } from "./publication-archive";
import { journalArticles } from "./journal-articles";
import reelData from "../data/gallery-reels.json";

export type Dated = { date: string };
export const isPreviewDeploy = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";

export function shown<T extends Dated>(items: T[], now = new Date()): T[] {
  const today = hawaiiToday(now);
  return isPreviewDeploy ? items : items.filter((x) => x.date <= today);
}

// Lobby: three carousels that swipe themselves (AaN post slides).
export const carousels = [
  { id: "pdft01", slides: 6, date: "2026-12-04", title: "Faces in Things" },
  { id: "mj04", slides: 7, date: "2026-12-04", title: "Do Terpenes Change Your Mood?" },
  { id: "mjbyb07", slides: 7, date: "2026-12-01", title: "The First-Night Effect" },
];

// Room 1, TIL: facts from released posts, each with its source.
export const tils = [
  { date: "2026-12-04", text: "your brain sees faces in plug sockets, and its face areas respond to them.", source: "Wardle et al., 2020" },
  { date: "2026-12-01", text: "on your first night in a new bed, one half of your brain stays more alert.", source: "Tamaki et al., 2016" },
  { date: "2026-12-07", text: "a chemist described his own color blindness in 1794. His name was John Dalton.", source: "Dalton, 1798" },
  { date: "2026-12-02", text: "a table of 24 jams stopped more shoppers than a table of 6.", source: "Iyengar & Lepper, 2000" },
];

// Room 2, Try it yourself: guess first, then the study's own numbers.
export const guesses = {
  sleep: {
    date: "2026-12-01", post: "The first-night effect",
    question: "45 people slept two nights in a sleep lab, a week apart. How long did it take them to fall asleep the first night?",
    answers: [{ label: "Night 1 in the lab", value: 20.4 }, { label: "Night 2, a week later", value: 14.0 }], unit: "min", max: 40,
    credit: "Chart: RN Collins, from Wick et al. (2024) data",
  },
  jams: {
    date: "2026-12-02", post: "Noise, choices and long days standing",
    question: "A grocery store put out a tasting table. Which one stopped more passersby: 24 jams or 6 jams?",
    answers: [{ label: "24 jams on show", value: 60, detail: "145 of 242" }, { label: "6 jams on show", value: 40, detail: "104 of 260" }],
    credit: "Chart: RN Collins, from Iyengar and Lepper (2000) data",
  },
};

// Room 3, The rabbit hole: live sites RN built. image = the site's own screenshot in /previews.
export const sites = [
  { host: "htw-field-kit", title: "Tech From Here: Field Kit", medium: "2026 · website", note: "Five days, five venues, five looks. I photographed it, then built the site that holds it all.", frame: "coral", size: "c7" },
  { host: "color-vision-field-guide", title: "Color Vision Field Guide", medium: "2026 · interactive guide", note: "How your eyes build color, and why your colors aren’t mine.", frame: "lime", size: "c5 tilt2" },
  { host: "ask-a-neuroscientist-fashion", title: "The Dressed Nervous System", medium: "2026 · essay site", note: "What clothes do to the body: pressure, texture, memory and rhythm.", frame: "blue", size: "c4" },
  { host: "tech-from-here-mjbizcon", title: "The Technology Is Already Governing the Plant", medium: "2026 · investigation", note: "Tags, tests and rules. How cannabis became a regulated technical system.", frame: "lime", size: "c4 tilt1" },
  { host: "entheogen-atlas", title: "Entheogen Atlas", medium: "2026 · atlas", note: "Plants, the people who used them, and the papers behind each one.", frame: "coral", size: "c4" },
  { host: "tech-from-here-fashion-week", title: "Signal / Seam", medium: "2026 · field report", note: "Fashion week, looked at as a technical system.", frame: "blue", size: "c5 tilt2" },
  { host: "institutions-of-one-reader", title: "Institutions of One", medium: "2026 · reader", note: "What one person can run when they work like an institution.", frame: "coral", size: "c7" },
  { host: "tech-from-here-amsterdam-eindhoven", title: "Look Closer", medium: "2026 · 48 investigations", note: "Amsterdam and Eindhoven, where the technology is already in the room.", frame: "lime", size: "c6 tilt1" },
  { host: "keiki-robotics-oahu-ai", title: "Keiki Robotics, Oʻahu", medium: "2026 · parent guide", note: "How to get your kid into competitive robotics on Oʻahu.", frame: "blue", size: "c6" },
];

// Room 4, Screening room: Ask a Neuroscientist video only (RN, Nov 27; no Aloha AI reels here). The studio's motion
// piece, then every released Reel, newest first, from data/gallery-reels.json (web copies on Vercel Blob, with sound).
export type Channel = { kind: "video" | "still"; src: string; poster?: string; title: string; medium: string; date: string; music?: string };
const studioPiece: Channel = { kind: "video", src: "/gallery/video/claim-check.mp4", poster: "/gallery/video/claim-check.jpg", title: "Every claim, read in full", medium: "2026 · motion piece, 12 s", date: "2026-11-01" };
export const channels: Channel[] = [
  studioPiece,
  ...(reelData.reels as { lane: string; date: string; title: string; medium: string; src: string; poster: string; music: string }[])
    .filter((r) => r.lane === "reel").slice().reverse()
    .map((r) => ({ kind: "video" as const, src: r.src, poster: r.poster || undefined, title: r.title, medium: r.medium, date: r.date, music: r.music })),
];

// Room 5, TL;DR: zines (open on their release day) and publication counts from the archive.
export const zines = [
  { id: "2026-11-30", date: "2026-12-06" }, { id: "made-world-2026-11-30", date: "2026-12-06" },
  { id: "2026-12-07", date: "2026-12-13" }, { id: "made-world-2026-12-07", date: "2026-12-13" },
  { id: "2026-12-14", date: "2026-12-20" }, { id: "made-world-2026-12-14", date: "2026-12-20" },
];
export const outlets = Object.entries(publicationCounts).sort((a, b) => b[1] - a[1]);
// The same total /writing shows: the publication archive plus the full-text journal articles.
export const pieceCount = outlets.reduce((n, [, c]) => n + c, 0) + journalArticles.length;

// Room 7, AMA: what you can hire RN for.
export const offers = [
  { title: "Content series", text: "Carousels, Reels and newsletters. Fact-checked, license-clear, on time." },
  { title: "Exhibit and event content", text: "Wall text, guides and on-site coverage that people read to the end." },
  { title: "Research briefs", text: "What the studies say, how sure we can be, and what to do next." },
  { title: "AI expert work", text: "Checking and writing what AI tools say about the brain and health." },
];

// Sound effects behind the "Sound on" switch (from Ask a Neuroscientist's sound kit, sound/sounds.json).
export const soundCredits = [
  "Typing: Michael Mol, “Sounds of Typing”, Internet Archive, CC BY 3.0 US",
  "Dial click and page turn: Patrick Lauser, Internet Archive, CC0",
  "Film projector: collettivocromocinque, radio aporee, Public Domain Mark",
  "Clock bell: Seth Thomas clock, 1862–65, Internet Archive, Public Domain Mark",
];

// Room "Every app": one released post as it looks on each platform Ask a Neuroscientist posts to, with the real
// account names (data/social-links.json). Newest released post that has both a Reel and a slideshow Reel.
type ReelRow = { id: string; lane: string; date: string; title: string; src: string; music: string };
export function everyAppPost(now = new Date()) {
  const rows = reelData.reels as ReelRow[];
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Pacific/Honolulu" }).format(now);
  const ok = (r?: ReelRow) => !!r && (isPreviewDeploy || r.date <= today);
  const ids = [...new Set(rows.map((r) => r.id))];
  const posts = ids.map((id) => ({ id, reel: rows.find((r) => r.id === id && r.lane === "reel"), show: rows.find((r) => r.id === id && r.lane === "slideshow") }))
    .filter((p) => ok(p.reel) && ok(p.show));
  // Not "Faces in things", which the lobby and the TIL room already show; the newest other post instead.
  const pick = [...posts].reverse().find((p) => p.id !== "PDFT01") ?? posts[posts.length - 1];
  return pick ? { id: pick.id, title: pick.reel!.title, reel: pick.reel!.src, show: pick.show!.src, music: pick.reel!.music, date: pick.show!.date } : null;
}
export const accounts = { instagram: "ask_a_neuroscientist", tiktok: "askaneuro", youtube: "@ask_a_neuroscientist", pinterest: "ask_a_neuroscientist", bluesky: "askaneuro.bsky.social" };
