import Link from "next/link";
import { CanonicalPage } from "./canonical-page";
import { PortfolioBlock, PortfolioLine } from "./source-portfolio-link";
import { account, listed, longDate } from "../lib/sources";
import styles from "../app/sources/sources.module.css";

export function accountMetadata(key: string) {
  const a = account(key)!;
  return {
    title: `${a.name}: sources`,
    description: `${a.blurb} Linked to the originals.`,
    alternates: { canonical: `/sources/${a.key}` },
    // Estate-wide page genre tag (see rn-estate-tools README): judged on completeness, not length.
    other: { "rn:kind": "reference", "rn:entries": String(listed(a).length) },
  };
}

export function SourceAccountIndex({ accountKey }: { accountKey: string }) {
  const a = account(accountKey)!;
  const posts = listed(a).slice().reverse();
  return (
    <CanonicalPage>
      <div className={`${styles.page} shell`}>
        <p className="eyebrow">{a.name}</p>
        <h1 className={styles.title}>Sources</h1>
        <PortfolioLine />
        <p className={styles.intro}>
          {a.blurb} The address printed on a slide leads to that post&apos;s page.
        </p>
        {posts.length === 0 ? (
          <p className={styles.meta}>Each post is listed here from its posting day.</p>
        ) : (
          <ul className={styles.index}>
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/sources/${a.key}/${p.slug}`}>{p.title}</Link>
                <span className={styles.host}>{longDate(p.date)} · {p.series}</span>
              </li>
            ))}
          </ul>
        )}
        <PortfolioBlock />
      </div>
    </CanonicalPage>
  );
}
