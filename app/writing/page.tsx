import { publicSourceLink } from "../../lib/source-links";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Published writing and research by RN Collins: journalism, Journal of Biophilic Design columns, academic papers, policy reports, and a thesis.",
  alternates: { canonical: "/writing" },
};
import { publicationArchive } from "../../lib/publication-archive";
import { journalArticles, journalName, journalUrl } from "../../lib/journal-articles";
import { essaysByFamily, families, releasedDdwEssays, releasedWords } from "../../lib/ddw-essays";

// The Dutch Design Week section shows released essays only (data/releases.json), rechecked hourly.
export const revalidate = 3600;

const journalId = "journal-of-biophilic-design";
const ddwId = "dutch-design-week";
const totalRecords = publicationArchive.length + journalArticles.length;

const publications = [...new Set(publicationArchive.map((article) => article.publication))];

export default function WritingArchivePage() {
  const ddwEssays = releasedDdwEssays();
  const totalWords = releasedWords();
  return (
    <main>
      <nav className="nav shell" aria-label="Writing archive navigation">
        <Link className="mark" href="/">RN<span>↗</span></Link>
        <div className="navlinks"><Link href="/#work">Work</Link><Link href="/writing">Writing</Link></div>
      </nav>
      <header className="archiveHero shell">
        <p className="eyebrow">Publication archive · checked October 17, 2026</p>
        <h1>Published work,<br /><em>across disciplines.</em></h1>
        <div className="archiveIntro">
          <p>{totalRecords} located publication records across law, governance, neuroscience, cannabis, psychedelics, culture, institutional accountability, and Hawaiʻi.</p>
          <p>The archive includes five full-text Journal of Biophilic Design articles, journalism, coauthored academic papers, a policy action plan, a preprint, and a thesis. Dates retain the precision supported by the source. Separate editions and republications are labeled; the total counts records, not distinct original works. Publisher archives and public research indexes were checked on October 17, 2026; unindexed and print-only work may still be missing.</p>
        </div>
      </header>
      <nav className="publicationJump shell" aria-label="Jump to publication">
        <a href={`#${journalId}`}>{journalName} <span>{journalArticles.length}</span></a>
        {ddwEssays.length > 0 && <a href={`#${ddwId}`}>Dutch Design Week <span>{ddwEssays.length}</span></a>}
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
        {ddwEssays.length > 0 && (
        <section className="publicationArchive" id={ddwId}>
          <div className="publicationArchiveHead">
            <p className="eyebrow">Written for this site</p>
            <h2>Dutch Design Week</h2>
            <span>{ddwEssays.length} essays</span>
          </div>
          <p className="archiveDisclosure">
            {totalWords.toLocaleString("en-US")} words on the makers, venues, editions and awards of
            Eindhoven&rsquo;s design week, each written from the public record and citing its sources
            in the text. These were written for this site and are not published anywhere else.{" "}
            <Link href={`/writing/${ddwId}`}>Read the series</Link>
          </p>
          <section className="seriesGroup">
            <h3>By part of the series</h3>
            <div className="archiveList">
              {families().map((family) => {
                const group = essaysByFamily(family);
                return (
                  <article key={family}>
                    <time>{group.length} essays</time>
                    <div>
                      <h4><Link href={`/writing/${ddwId}#${family}`}>{group[0].familyLabel}</Link></h4>
                      <p>RN Collins · {group.reduce((n, e) => n + e.words, 0).toLocaleString("en-US")} words</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </section>
        )}
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
                        <time dateTime={article.date || undefined}>{formatDate(article.date)}</time>
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
      <footer className="footer archiveFooter"><div className="shell"><Link className="button archiveBack" href="/">← Return to selected work</Link>{publicSourceLink("https://github.com/rn-collins/rn-selected-work") && <p><a href={publicSourceLink("https://github.com/rn-collins/rn-selected-work")} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a></p>}</div></footer>
    </main>
  );
}

function formatDate(date: string) {
  if (!date) return "Date unconfirmed";
  if (date.length === 4) return date;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
