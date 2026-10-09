import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { longDate, postedSoFar } from "../../lib/aan-sources";
import styles from "./sources.module.css";

// Rebuilt daily so each post appears here on its posting day.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Ask a Neuroscientist: sources",
  description: "The research, records and image credits behind every Ask a Neuroscientist post by RN Collins, linked to the originals.",
  alternates: { canonical: "/sources" },
};

export default function SourcesIndex() {
  const posts = postedSoFar().slice().reverse();
  return (
    <CanonicalPage>
      <div className={`${styles.page} shell`}>
        <p className="eyebrow">Ask a Neuroscientist</p>
        <h1 className={styles.title}>Sources</h1>
        <p className={styles.intro}>
          Every Ask a Neuroscientist post has a page here listing the studies it cites and where each image comes
          from, linked to the original papers, museum records and listings. The address printed on a slide leads to
          that post&apos;s page.
        </p>
        {posts.length === 0 ? (
          <p className={styles.meta}>The first post goes up on October 8, 2026.</p>
        ) : (
          <ul className={styles.index}>
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/sources/${p.slug}`}>{p.title}</Link>
                <span className={styles.host}>{longDate(p.date)} · {p.series}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </CanonicalPage>
  );
}
