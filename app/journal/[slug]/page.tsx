import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../components/canonical-page";
import { POLYMATH_SUBSCRIBE, essayShare } from "../../../lib/essays";
import { journalDescription, journalName, journalPagePath, journalPdf, journalPdfPath, journalPdfs, journalRobots, journalTextPath, journalUrl, megabytes } from "../../../lib/journal-pdfs";
import styles from "../journal-pdfs.module.css";

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalPdfs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = journalPdf((await params).slug);
  if (!p) return {};
  const title = `${p.title}: PDF`;
  const description = journalDescription(p);
  return {
    title, description, alternates: { canonical: journalPagePath(p.slug) }, robots: journalRobots(),
    authors: [{ name: p.byline }],
    ...essayShare(title, description, journalPagePath(p.slug), "article", { authors: [p.byline] }),
  };
}

export default async function JournalPdfPage({ params }: Params) {
  const p = journalPdf((await params).slug);
  if (!p) notFound();
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">{journalName}, Issue {p.issue}</p>
        <h1 className={styles.title}>{p.title}</h1>
        {p.subtitle && <p className={styles.subtitle}>{p.subtitle}</p>}
        <p className={styles.meta}>From <Link href="/">RN Collins, selected work</Link></p>
        <dl className={styles.facts}>
          <div><dt>Byline as printed</dt><dd>{p.byline}</dd></div>
          <div><dt>Issue</dt><dd>{journalName}, Issue {p.issue}: {p.section}, {p.issueDate}</dd></div>
          <div><dt>Printed pages</dt><dd>{p.printedPages}</dd></div>
          <div><dt>This file</dt><dd>PDF, {p.pdfPages} pages, {megabytes(p.bytes)}</dd></div>
        </dl>
        <p><a className={styles.download} href={journalPdfPath(p.slug)}>Open the PDF ({megabytes(p.bytes)})</a></p>
        <p className={styles.note}>
          The PDF holds this article and its references only, as printed in the issue. The rest of the issue is sold by the journal, as an ebook or in print.
        </p>
        <ul className={styles.links}>
          <li><Link href={journalTextPath(p.slug)}>Read the text on this site</Link></li>
          <li><a href={journalUrl} target="_blank" rel="noreferrer">The journal&apos;s issues <span aria-hidden="true">↗</span></a></li>
          <li><Link href="/">RN Selected Work</Link></li>
          <li><a href={POLYMATH_SUBSCRIBE} target="_blank" rel="noreferrer">Subscribe to The Polymath <span aria-hidden="true">↗</span></a></li>
        </ul>
        <p className={styles.back}><Link href="/journal">All five articles from the journal</Link></p>
      </article>
    </CanonicalPage>
  );
}
