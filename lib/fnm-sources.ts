import data from "../data/fnm-sources.json";
import { hawaiiToday } from "./releases";
import type { SourcePost } from "./aan-sources";

// Fat Nugs article source pages (RN's source-page standard, Nov 20, 2026). data/fnm-sources.json is written by the
// AaN site sync from the studio's finished articles. Each article has a permanent number n, printed under its QR code
// as rn-selected-work.vercel.app/fn/<n>. Release gate: a page and its short link exist only once runDate (a Hawaii
// date set by RN or Jessica) has come; until then both answer 404, so no source page runs ahead of its article.
export type FnmArticle = { n: number; file: string; slug: string; title: string; runDate: string; articleUrl: string;
  references: { label: string; url: string }[]; resources: { label: string; url: string }[] };
export const fnmArticles = (data as { articles: FnmArticle[] }).articles;

export const fnmLive = (a?: FnmArticle, now = new Date()) => !!a && a.runDate !== "" && a.runDate <= hawaiiToday(now);
export const fnmBySlug = (slug: string) => fnmArticles.find((a) => a.slug === slug);
export const fnmByNumber = (n: string) => fnmArticles.find((a) => String(a.n) === n);

// The article as a sources record, so the lab-book page can draw it.
export function fnmAsPost(a: FnmArticle): SourcePost {
  return {
    slug: `fnm/${a.slug}`, id: `FN${a.n}`, title: a.title, date: a.runDate, series: "Fat Nugs Magazine",
    origin: a.articleUrl ? { kind: "article", label: a.title, url: a.articleUrl } : null,
    research: a.references, other: a.resources, images: [],
  };
}
