import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../../components/canonical-page";
import { archiveGroups, longDate } from "../../../lib/post-pages";
import styles from "../posts.module.css";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Archive", description: "Earlier RN Collins essays and articles from The Polymath and Fat Nugs Magazine.", alternates: { canonical: "/p/archive" },
};

export default function PostArchive() {
  const groups = archiveGroups();
  return (
    <CanonicalPage>
      <div className={`${styles.page} shell`}>
        <p className="eyebrow">RN Collins</p>
        <h1 className={styles.title}>Archive</h1>
        <p className={styles.summary}>Earlier essays and articles, grouped by subject.</p>
        <p><Link href="/p">All posts</Link></p>
        {groups.map((g) => (
          <section className={styles.block} key={g.name} aria-labelledby={g.name}>
            <h2 id={g.name}>{g.name} <small className={styles.count}>{g.items.length}</small></h2>
            <ul className={styles.archive}>
              {g.items.map((a) => (
                <li key={a.url}>
                  <a href={a.href} {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                    <b>{a.title}{a.external && <span aria-hidden="true"> ↗</span>}</b>
                    {a.summary && <span>{a.summary}</span>}
                    {a.date && <small>{longDate(a.date)}</small>}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </CanonicalPage>
  );
}
