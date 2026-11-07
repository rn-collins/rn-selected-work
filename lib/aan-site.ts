import data from "../data/aan-site.json";
import { hawaiiToday } from "./releases";

// The Ask a Neuroscientist site's own pages for each post: the post as a scroll page (/posts/<slug>/, same slug
// as /sources/<slug> here), the cards that go out with it, and the reader pages (Reader Q&A, A to Z glossary).
// data/aan-site.json is written by rn-ask-a-neuroscientist scripts/import_posts.py. A page is linked only once
// it is live there: releasedAt (a Hawaii date) today or earlier and hold false, the same rule as data/releases.json.
type Dated = { releasedAt: string; hold: boolean };
type Page = Dated & { path: string };
type Card = Page & { title: string };
type Reader = Page & { key: string; title: string };

const site = data as unknown as { base: string; posts: Record<string, Page>; cards: Record<string, Card[]>; pages: Reader[] };

export const aanSiteBase = site.base;

function live(p: Dated | undefined, now = new Date()) {
  return !!p && !p.hold && p.releasedAt !== "" && p.releasedAt <= hawaiiToday(now);
}

const url = (path: string) => `${site.base}${path}`;

/** The links a sources page carries to the AaN site: the post's page there, its cards, and the AaN home. */
export function aanSiteLinks(slug: string, now = new Date()) {
  const out: { href: string; label: string }[] = [];
  const post = site.posts[slug];
  if (live(post, now)) out.push({ href: url(post.path), label: "This post, slide by slide, on Ask a Neuroscientist" });
  for (const c of site.cards[slug] ?? []) {
    if (live(c, now)) out.push({ href: url(c.path), label: `Card on Ask a Neuroscientist: ${c.title}` });
  }
  out.push({ href: url("/"), label: "More from Ask a Neuroscientist" });
  return out;
}

/** The AaN site's reader pages that are live, and its posts index once a post page is. */
export function aanReaderPages(now = new Date()) {
  const out = site.pages.filter((p) => live(p, now)).map((p) => ({ href: url(p.path), label: p.title }));
  if (Object.values(site.posts).some((p) => live(p, now))) out.unshift({ href: url("/posts/"), label: "Every post, slide by slide" });
  return out;
}
