import links from "../data/polymath-links.json";

// RN's rule (Oct 13, 2026): long-form essays are published on her Polymath Beehiiv. For the families listed here the
// portfolio does not carry the essay text: the page shows the title, standfirst, sources and a link to the Polymath
// article. Links live in data/polymath-links.json, keyed by piece id (the data/releases.json id, e.g.
// "ddw27/new-design-visibility"), and are added as each article publishes. Until then the page links the Polymath home.
export const POLYMATH_HOME = "https://polymath-rn-collins.beehiiv.com";
export const LINK_ONLY_FAMILIES = new Set<string>(["ddw27"]);

export const linkOnly = (family: string) => LINK_ONLY_FAMILIES.has(family);

const ARTICLE = /^https:\/\/polymath-rn-collins\.beehiiv\.com\/p\/[a-z0-9-]+\/?$/;

export function polymathArticle(pieceId: string): string | undefined {
  const url = (links.links as Record<string, unknown>)[pieceId];
  return typeof url === "string" && ARTICLE.test(url) ? url : undefined;
}
