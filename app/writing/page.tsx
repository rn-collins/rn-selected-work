import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "The complete located editorial archive: Fat Nugs Magazine, Cannabis Law Report, and Cannabis Law Journal publication records by RN Collins.",
  alternates: { canonical: "/writing" },
};
import { publicationArchive } from "../../lib/publication-archive";
import { journalArticles, journalName, journalUrl } from "../../lib/journal-articles";

const journalId = "journal-of-biophilic-design";
const totalRecords = publicationArchive.length + journalArticles.length;

const publications = [
  "Fat Nugs Magazine",
  "Cannabis Law Report",
  "Cannabis Law Journal",
] as const;

export default function WritingArchivePage() {
  return (
    <main>
      <nav className="nav shell" aria-label="Writing archive navigation">
        <Link className="mark" href="/">RN<span>↗</span></Link>
        <div className="navlinks"><Link href="/#work">Work</Link><Link href="/writing">Writing</Link></div>
      </nav>
      <header className="archiveHero shell">
        <p className="eyebrow">Complete editorial archive · through October 9, 2026</p>
        <h1>Published work,<br /><em>in full.</em></h1>
        <div className="archiveIntro">
          <p>{totalRecords} located publication records across law, governance, neuroscience, cannabis, psychedelics, culture, institutional accountability, and Hawaiʻi.</p>
          <p>Five articles from the Journal of Biophilic Design are reproduced in full below, because the journal’s issues cannot be linked to. This archive searches the bylines RN Collins, Rayven-Nikkita Collins, Nikkita Collins, and RN Williams. Publication duplicates and Journal republications remain visible and are explicitly labeled.</p>
        </div>
      </header>
      <nav className="publicationJump shell" aria-label="Jump to publication">
        <a href={`#${journalId}`}>{journalName} <span>{journalArticles.length}</span></a>
        {publications.map((publication) => (
          <a href={`#${publication.toLowerCase().replaceAll(" ", "-")}`} key={publication}>
            {publication} <span>{publicationArchive.filter((item) => item.publication === publication).length}</span>
          </a>
        ))}
      </nav>
      <div className="archiveBody shell">
        <section className="publicationArchive" id={journalId}>
          <div className="publicationArchiveHead">
            <p className="eyebrow">Publication</p>
            <h2>{journalName}</h2>
            <span>{journalArticles.length} full texts</span>
          </div>
          <p className="archiveDisclosure">
            The journal is sold as an ebook or in print, so these articles are reproduced here in full as printed. Each page credits the issue where it first appeared. <a href={journalUrl} target="_blank" rel="noreferrer">The journal’s issues ↗</a>
          </p>
          <section className="seriesGroup">
            <h3>Science columns, Issues 17 to 22</h3>
            <div className="archiveList">
              {journalArticles.map((article) => (
                <article key={article.slug}>
                  <time>Issue {article.issue}</time>
                  <div>
                    <h4><Link href={`/writing/${journalId}/${article.slug}`}>{article.title}{article.subtitle ? `: ${article.subtitle}` : ""}</Link></h4>
                    <p>{article.author} · {article.theme} issue · full text</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
        {publications.map((publication) => {
          const articles = publicationArchive
            .filter((item) => item.publication === publication)
            .sort((a, b) => b.date.localeCompare(a.date));
          const series = [...new Set(articles.map((article) => article.series))];
          return (
            <section className="publicationArchive" id={publication.toLowerCase().replaceAll(" ", "-")} key={publication}>
              <div className="publicationArchiveHead">
                <p className="eyebrow">Publication</p>
                <h2>{publication}</h2>
                <span>{articles.length} records</span>
              </div>
              {publication === "Cannabis Law Journal" ? (
                <p className="archiveDisclosure">The publication’s current site identifies itself as Cannabis Law Journal. These are separately located Journal editions of work also published by Cannabis Law Report; they are not represented as three additional original articles.</p>
              ) : null}
              {series.map((seriesName) => (
                <section className="seriesGroup" key={seriesName}>
                  <h3>{seriesName}</h3>
                  <div className="archiveList">
                    {articles.filter((article) => article.series === seriesName).map((article) => (
                      <article key={article.href}>
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                        <div>
                          <h4><a href={article.href} target="_blank" rel="noreferrer">{article.title} ↗</a></h4>
                          <p>{article.byline}{article.note ? ` · ${article.note}` : ""}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </section>
          );
        })}
      </div>
      <footer className="footer archiveFooter"><div className="shell"><Link className="button archiveBack" href="/">← Return to selected work</Link></div></footer>
    </main>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
