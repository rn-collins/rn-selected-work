// Search indexing for the essay pages (/essays, /essays/<account>, /essays/<account>/<id>) and the journal PDF
// pages (/journal, /journal/<slug>, /journal/<slug>.pdf).
//
// false: every one of these pages carries <meta name="robots" content="noindex"> (the PDFs an X-Robots-Tag: noindex
//        header, set in next.config.ts) and none is in sitemap.xml. The pages still open for anyone with the address.
// true:  the pages are indexable and listed in sitemap.xml, and the PDFs lose the noindex header.
//
// RN's packages post after October 17, 2026. To turn indexing on, change this one value to true, commit, and
// deploy. See "Essay pages" in PORTFOLIO_CONTROL.md.
export const ESSAYS_INDEXABLE = false;
