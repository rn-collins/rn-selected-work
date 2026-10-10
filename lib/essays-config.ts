// Search indexing for the essay pages (/essays, /essays/<account>, /essays/<account>/<id>).
//
// false: every essay page and index carries <meta name="robots" content="noindex"> and the essays stay out of
//        sitemap.xml. The pages still open for anyone with the address.
// true:  the pages are indexable and listed in sitemap.xml.
//
// RN's packages post after October 17, 2026. To turn indexing on, change this one value to true, commit, and
// deploy. See "Essay pages" in PORTFOLIO_CONTROL.md.
export const ESSAYS_INDEXABLE = false;
