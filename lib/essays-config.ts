// Search indexing for the essay pages (/essays, /essays/<account>, /essays/<account>/<id>) and the journal PDF
// pages (/journal, /journal/<slug>, /journal/<slug>.pdf).
//
// false: every one of these pages carries <meta name="robots" content="noindex"> (the PDFs an X-Robots-Tag: noindex
//        header, set in next.config.ts) and none is in sitemap.xml. The pages still open for anyone with the address.
// true:  the pages are indexable and listed in sitemap.xml, and the PDFs lose the noindex header.
//
// The October 17, 2026 hold is lifted. Unreleased pieces still 404: sitemap and indexes use releasedEssays
// and the Hawaii date in data/releases.json. Set this back to false to take the essay and journal PDF pages
// out of search results again. See "Essay pages" in PORTFOLIO_CONTROL.md.
export const ESSAYS_INDEXABLE = true;
