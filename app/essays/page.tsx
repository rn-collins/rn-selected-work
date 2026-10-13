import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { POLYMATH_SUBSCRIBE, essayAccounts, essayCount, essayRobots, essayShare, releasedEssays } from "../../lib/essays";

// Counts released essays only (data/releases.json), rechecked hourly and refreshed by the daily cron.
export const revalidate = 3600;
import styles from "./essays.module.css";

export function generateMetadata(): Metadata {
  const title = "Essays";
  const description = "Long-form essays by RN Collins on Dutch Design Week and the Dutch Design Awards, each with its numbered sources.";
  return {
    title, description, alternates: { canonical: "/essays" }, robots: essayRobots(),
    ...essayShare(title, description, "/essays", "website"),
    other: { "rn:kind": "reference", "rn:entries": String(essayAccounts.length) },
  };
}

export default function EssaysIndex() {
  return (
    <CanonicalPage>
      <div className={`${styles.page} shell`}>
        <p className="eyebrow">RN Collins</p>
        <h1 className={styles.title}>Essays</h1>
        <p className={styles.meta}>From <Link href="/">RN Collins, selected work</Link></p>
        <p className={styles.intro}>
          {essayCount()} long-form essays that go with RN&apos;s posts. Each one has plain-English headings, a section on what the
          record does not show, and a numbered list of sources.
        </p>
        <ul className={styles.index}>
          {essayAccounts.map((a) => (
            <li key={a.key}>
              <Link href={`/essays/${a.key}`}>{a.name}</Link>
              <span className={styles.sub}>{a.blurb}</span>
              <span className={styles.host}>{releasedEssays(a.key).length} published so far</span>
            </li>
          ))}
        </ul>
        <p className={styles.back}>
          <a href={POLYMATH_SUBSCRIBE} target="_blank" rel="noreferrer">Subscribe to The Polymath <span aria-hidden="true">↗</span></a>
          {" · "}<Link href="/sources">Sources pages</Link>
        </p>
      </div>
    </CanonicalPage>
  );
}
