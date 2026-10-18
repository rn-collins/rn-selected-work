import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { journalArticle, journalArticles, journalName, journalUrl, readingMinutes } from "../../../../lib/journal-articles";
import linkFixes from "../../../../data/journal/link-fixes.json";
import amendments from "../../../../data/journal/web-amendments.json";
import { isReleased, pieceId } from "../../../../lib/releases";

// The link to the article's sources page (/sources/jbd/jbd<issue>) appears from that page's release day.
export const revalidate = 3600;
import styles from "../journal.module.css";

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = journalArticle((await params).slug);
  if (!a) return {};
  return {
    title: `${a.title}${a.subtitle ? `: ${a.subtitle}` : ""}`,
    description: `Full text of ${a.title}, by ${a.author}, first published in ${journalName}, Issue ${a.issue} (${a.theme}).`,
    alternates: { canonical: `/writing/journal-of-biophilic-design/${a.slug}` },
    authors: [{ name: a.author }],
  };
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = journalArticle((await params).slug);
  if (!a) notFound();
  const headings = a.sections.filter((s) => s.t === "h2");
  const changes = (amendments.articles as Record<string, Amendment[]>)[a.slug] ?? [];
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">
          {journalName} · Issue {a.issue} · {a.theme}
        </p>
        <h1 className={styles.title}>{a.title}</h1>
        {a.subtitle ? <p className={styles.subtitle}>{a.subtitle}</p> : null}
        <p className={styles.byline}>
          By {a.author} · {readingMinutes(a)} minute read
        </p>
        <p className={styles.origin}>
          First published in <a href={journalUrl} target="_blank" rel="noreferrer">{journalName}, Issue {a.issue}<span aria-hidden="true"> ↗</span></a>.
          The journal is sold as an ebook or in print, so the full text is reproduced here.
          {changes.length ? " This web edition includes evidence corrections dated 18 October 2026. Amended passages link to their supporting sources and retain the original wording for comparison." : " The wording is as printed."}
        </p>
        {a.standfirst ? <p className={styles.standfirst}>{a.standfirst}</p> : null}
        {headings.length > 3 ? (
          <nav className={styles.contents} aria-label="In this article">
            <p>In this article</p>
            <ol>
              {headings.map((h) => (
                <li key={h.x}><a href={`#${slugify(h.x)}`}>{h.x}</a></li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className={styles.body}>
          {a.sections.map((s, i) => {
            if (s.t === "h2") return <h2 id={slugify(s.x)} key={i}>{s.x}</h2>;
            if (s.t === "h3") return <h3 key={i}>{s.x}</h3>;
            const change = changes.find((item) => item.section === i && item.original === s.x);
            if (change) return (
              <div key={i} className={styles.amended}>
                <p>{change.text}</p>
                <details className={styles.amendment}>
                  <summary>Web edition correction · 18 October 2026 · sources and original wording</summary>
                  <p>{change.reason}</p>
                  <ul>
                    {change.sources.map((source) => (
                      <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>{source.note ? ` — ${source.note}` : ""}</li>
                    ))}
                  </ul>
                  <p><strong>As first published</strong></p>
                  <blockquote>{s.x}</blockquote>
                </details>
              </div>
            );
            return <p key={i}>{s.x}</p>;
          })}
        </div>
        {a.references.length > 0 ? (
          <section className={styles.refs} aria-labelledby="references">
            <h2 id="references">References as printed</h2>
            <p className={styles.refnote}>Citations below preserve the publication record. Sources supporting amendments appear beside each corrected passage. Verified replacement links are identified below. Unverified or mismatched links are withheld. These verification notes are additions to this web edition.</p>
            <ol>
              {a.references.map((r) => (
                <li key={r}>{linkify(r)}</li>
              ))}
            </ol>
          </section>
        ) : null}
        {isReleased(pieceId("jbd", `jbd${a.issue}`)) ? (
          <p className={styles.back}>
            <Link href={`/sources/jbd/jbd${a.issue}`}>Sources and image credits for the post on this article</Link>
          </p>
        ) : null}
        <p className={styles.back}>
          <Link href="/writing#journal-of-biophilic-design">All writing</Link>
        </p>
      </article>
    </CanonicalPage>
  );
}

const fixes = linkFixes.links as Record<string, string | null>;
type Amendment = { section: number; original: string; text: string; reason: string; sources: { label: string; url: string; note?: string }[] };
const verificationNotes = linkFixes.notes as Record<string, string>;

// Printed addresses that no longer resolve are swapped for the verified record of the same work,
// or shown as plain text when none exists. The citation text itself is never changed.
function linkify(text: string) {
  const parts = text.split(/(https?:\/\/\S+)/g);
  return parts.map((part, i) => {
    if (!/^https?:\/\//.test(part)) return part;
    const printed = part.replace(/[.,;]$/, "");
    const tail = part.slice(printed.length);
    const target = printed in fixes ? fixes[printed] : printed;
    if (target === null) return (
      <span key={i}>
        {part}
        <span className={styles.refnote}> — {verificationNotes[printed] || "Source verification pending: no verified matching destination is available for this printed address."}</span>
      </span>
    );
    return (
      <span key={i}>
        <a href={target} target="_blank" rel="noreferrer">{target}</a>
        {tail}
        {(verificationNotes[printed] || target !== printed) && <span className={styles.refnote}> — {verificationNotes[printed] || "Link corrected to the verified record of the cited work."}</span>}
      </span>
    );
  });
}
