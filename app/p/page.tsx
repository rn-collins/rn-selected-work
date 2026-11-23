import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import { isPublicPost, isReviewBuild, longDate, visiblePosts } from "../../lib/post-pages";
import styles from "./posts.module.css";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Posts", description: "Every RN Collins post, each with its slides, sources and image credits.", alternates: { canonical: "/p" },
};

export default function PostsIndex() {
  const posts = [...visiblePosts()].reverse();
  return (
    <CanonicalPage>
      <div className={`${styles.page} shell`}>
        <p className="eyebrow">RN Collins</p>
        <h1 className={styles.title}>Posts</h1>
        <p className={styles.summary}>Every post has its own page, with the slides, sources and image credits.</p>
        <p><Link href="/p/archive">The archive: earlier essays and articles</Link></p>
        {posts.length === 0 ? <p>The first posts arrive on November 30, 2026.</p> : (
          <ol className={styles.index}>
            {posts.map((p) => (
              <li key={p.id}><Link href={`/p/${p.slug}`}><time dateTime={p.date}>{longDate(p.date)}</time><b>{p.title}</b>{isReviewBuild() && !isPublicPost(p) && <small>Not public</small>}</Link></li>
            ))}
          </ol>
        )}
      </div>
    </CanonicalPage>
  );
}
