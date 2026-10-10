import trauma from "../data/journal/trauma-informed-architecture.json";
import clarity from "../data/journal/designing-for-cognitive-clarity.json";
import landscapes from "../data/journal/biophilic-landscapes-as-cognitive-infrastructure.json";
import climate from "../data/journal/biophilic-design-and-climate-change.json";
import wood from "../data/journal/wood-the-multisensory-physiological-magician.json";

export type JournalSection = { t: "h2" | "h3" | "p"; x: string };

export type JournalArticle = {
  slug: string;
  issue: number;
  theme: string;
  title: string;
  subtitle: string;
  author: string;
  standfirst: string | null;
  sections: JournalSection[];
  references: string[];
  words: number;
};

export const journalName = "Journal of Biophilic Design";
export const journalUrl = "https://journalofbiophilicdesign.com/journal-of-biophilic-design-1";

// Newest issue first. The journal's issues are sold as ebook or print, so these
// full texts are the only place the articles can be read online.
export const journalArticles = [wood, climate, landscapes, clarity, trauma] as JournalArticle[];

export function journalArticle(slug: string) {
  return journalArticles.find((a) => a.slug === slug);
}

export function readingMinutes(article: JournalArticle) {
  return Math.max(1, Math.round(article.words / 230));
}
