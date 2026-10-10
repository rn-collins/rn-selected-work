import { journalArticle, journalName, journalUrl } from "./journal-articles";
import { ESSAYS_INDEXABLE } from "./essays-config";

// RN Collins' five Journal of Biophilic Design articles as small PDFs (public/journal/<slug>.pdf). Each file holds only
// her article and its references, cut from the issue by scripts/extract_journal_pages.py. The slug is the same slug as
// the full-text page at /writing/journal-of-biophilic-design/<slug>. Issue date, section and byline are as printed.
export type JournalPdf = {
  slug: string; issue: number; section: string; issueDate: string; byline: string; printedPages: string; pdfPages: number; bytes: number;
};

export const journalPdfs: JournalPdf[] = [
  { slug: "trauma-informed-architecture", issue: 17, section: "Architecture", issueDate: "September 2025", byline: "R N Collins", printedPages: "120 to 125", pdfPages: 3, bytes: 1505936 },
  { slug: "designing-for-cognitive-clarity", issue: 18, section: "Interior Design", issueDate: "November 2025", byline: "R N Collins", printedPages: "62 to 67", pdfPages: 3, bytes: 841041 },
  { slug: "biophilic-landscapes-as-cognitive-infrastructure", issue: 20, section: "Landscape Architecture", issueDate: "March 2026", byline: "R N Collins", printedPages: "116 to 137", pdfPages: 11, bytes: 4216368 },
  { slug: "biophilic-design-and-climate-change", issue: 21, section: "Climate Change", issueDate: "May 2026", byline: "Rayven-Nikkita Collins", printedPages: "104 to 121", pdfPages: 9, bytes: 1806147 },
  { slug: "wood-the-multisensory-physiological-magician", issue: 22, section: "Wood", issueDate: "July 2026", byline: "RN Collins", printedPages: "166 to 177", pdfPages: 6, bytes: 2700116 },
];

export function journalPdf(slug: string) {
  const p = journalPdfs.find((x) => x.slug === slug);
  const a = journalArticle(slug);
  return p && a ? { ...p, title: a.title, subtitle: a.subtitle } : undefined;
}

export const journalPdfPath = (slug: string) => `/journal/${slug}.pdf`;
export const journalPagePath = (slug: string) => `/journal/${slug}`;
export const journalTextPath = (slug: string) => `/writing/journal-of-biophilic-design/${slug}`;
export const megabytes = (bytes: number) => `${(bytes / 1e6).toFixed(1)} MB`;
export { journalName, journalUrl };

export function journalDescription(p: { issue: number; section: string; issueDate: string; byline: string; printedPages: string; pdfPages: number; title: string }) {
  return `${p.title}, printed under the byline ${p.byline} in ${journalName}, Issue ${p.issue} (${p.section}, ${p.issueDate}), pages ${p.printedPages}. The PDF holds only this article and its references, ${p.pdfPages} pages.`;
}

// Same switch as the essay pages (lib/essays-config.ts).
export function journalRobots() {
  return ESSAYS_INDEXABLE ? { index: true, follow: true } : { index: false, follow: true };
}
