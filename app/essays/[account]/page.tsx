import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../components/canonical-page";
import { essayAccount, essayAccounts, essayPath, essayRobots, essayShare, readingMinutes, releasedEssays } from "../../../lib/essays";
import styles from "../essays.module.css";

export const dynamicParams = false;
// Lists released essays only (data/releases.json), rechecked hourly and refreshed by the daily cron.
export const revalidate = 3600;

type Params = { params: Promise<{ account: string }> };

export function generateStaticParams() {
  return essayAccounts.map((a) => ({ account: a.key }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const a = essayAccount((await params).account);
  if (!a) return {};
  const title = `${a.name}: essays`;
  const description = `${a.blurb} By RN Collins, each with its numbered sources.`;
  return {
    title, description, alternates: { canonical: `/essays/${a.key}` }, robots: essayRobots(),
    ...essayShare(title, description, `/essays/${a.key}`, "website"),
    other: { "rn:kind": "reference", "rn:entries": String(releasedEssays(a.key).length) },
  };
}

export default async function EssayAccountIndex({ params }: Params) {
  const a = essayAccount((await params).account);
  if (!a) notFound();
  const list = releasedEssays(a.key);
  return (
    <CanonicalPage>
      <div className={`${styles.page} shell`}>
        <p className="eyebrow">{a.name}</p>
        <h1 className={styles.title}>Essays</h1>
        <p className={styles.meta}>From <Link href="/">RN Collins, selected work</Link></p>
        <p className={styles.intro}>{a.blurb} Each essay lists its numbered sources and links to the sources and image credits for the post it goes with.</p>
        {list.length === 0 ? <p className={styles.meta}>Each essay is listed here from the day its post goes up.</p> : (
        <ul className={styles.index}>
          {list.map((e) => (
            <li key={e.id}>
              <Link href={essayPath(a.key, e.id)}>{e.title}</Link>
              <span className={styles.sub}>{e.subtitle}</span>
              <span className={styles.host}>{readingMinutes(e)} minute read</span>
            </li>
          ))}
        </ul>
        )}
        <p className={styles.back}><Link href="/essays">All essays</Link></p>
      </div>
    </CanonicalPage>
  );
}
