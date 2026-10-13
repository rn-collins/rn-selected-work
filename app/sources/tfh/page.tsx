import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../../components/canonical-page";
import { tfhPostedSoFar } from "../../../lib/tfh-sources";
import styles from "../sources.module.css";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return {
  title: "Tech From Here: sources",
  description: "The listings and sources behind RN Collins's Tech From Here: NL posts from Dutch Design Week 2026, linked to the originals.",
  alternates: { canonical: "/sources/tfh" },
  // Estate-wide page genre tag (see rn-estate-tools README): judged on completeness, not length.
  other: { "rn:kind": "reference", "rn:entries": String(tfhPostedSoFar().length) },
  };
}

export default function TfhIndex() {
  const posts = tfhPostedSoFar();
  return (
    <CanonicalPage>
      <div className={`${styles.page} shell`}>
        <p className="eyebrow">Tech From Here: NL</p>
        <h1 className={styles.title}>Sources</h1>
        <p className={styles.intro}>
          RN Collins&apos;s Tech From Here posts on the technology underneath places and events. Each one has a page
          here listing the work it covers and every source it draws on, linked to the original. The address in a
          post&apos;s first reply leads to that post&apos;s page.
        </p>
        {posts.length === 0 ? <p className={styles.meta}>Posts appear here as they go up.</p> : (
        <ul className={styles.index}>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/sources/tfh/${p.slug}`}>{p.title}</Link>
              <span className={styles.host}>Dutch Design Week 2026</span>
            </li>
          ))}
        </ul>
        )}
        <p className={styles.back}><Link href="/sources">Ask a Neuroscientist sources</Link></p>
      </div>
    </CanonicalPage>
  );
}
