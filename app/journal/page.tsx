import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { POLYMATH_SUBSCRIBE, essayShare } from "../../lib/essays";
import { journalName, journalPagePath, journalPdf, journalPdfs, journalRobots, megabytes } from "../../lib/journal-pdfs";
import styles from "./journal-pdfs.module.css";

export function generateMetadata(): Metadata {
  const title = "Journal of Biophilic Design: RN Collins's articles";
  const description = "Five articles by RN Collins from the Journal of Biophilic Design, Issues 17, 18, 20, 21 and 22, each as a PDF of the article and its references.";
  return {
    title, description, alternates: { canonical: "/journal" }, robots: journalRobots(),
    ...essayShare(title, description, "/journal", "website"),
    other: { "rn:kind": "reference", "rn:entries": String(journalPdfs.length) },
  };
}

export default function JournalIndex() {
  const items = journalPdfs.map((p) => journalPdf(p.slug)!).slice().reverse();
  return (
    <CanonicalPage>
      <div className={`${styles.page} shell`}>
        <p className="eyebrow">{journalName}</p>
        <h1 className={styles.title}>Articles by RN Collins</h1>
        <p className={styles.meta}>From <Link href="/">RN Collins, selected work</Link></p>
        <p className={styles.intro}>
          Five articles from {journalName}, each as a PDF of the article and its references, as printed in the issue. The full text of each is also on this site.
        </p>
        <ul className={styles.index}>
          {items.map((p) => (
            <li key={p.slug}>
              <Link href={journalPagePath(p.slug)}>{p.title}</Link>
              <span className={styles.sub}>{p.subtitle ? `${p.subtitle}. ` : ""}Issue {p.issue}: {p.section}, {p.issueDate} · PDF, {megabytes(p.bytes)}</span>
            </li>
          ))}
        </ul>
        <p className={styles.back}>
          <a href={POLYMATH_SUBSCRIBE} target="_blank" rel="noreferrer">Subscribe to The Polymath <span aria-hidden="true">↗</span></a>
          {" · "}<Link href="/writing#journal-of-biophilic-design">All writing</Link>
        </p>
      </div>
    </CanonicalPage>
  );
}
