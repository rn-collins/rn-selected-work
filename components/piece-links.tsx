import Link from "next/link";
import { postLinks, release } from "../lib/releases";
import styles from "./piece-links.module.css";

type Ref = { href: string; title: string };

// The link set every released piece carries (data/releases.json): its post or posts, its sources page, its
// long-form, its gallery page, then the index and the previous and next released pieces. Links with no address
// yet are left out.
export function PieceLinks({ id, sources, longForm, index, prev, next }: {
  id: string; sources?: string; longForm?: { href: string; label: string };
  index: Ref; prev?: Ref; next?: Ref;
}) {
  const r = release(id);
  const posts = postLinks(id);
  const items: { href: string; label: string; external: boolean }[] = [
    ...posts.map((p) => ({ href: p.url, label: p.label, external: true })),
    ...(sources ? [{ href: sources, label: "Sources and image credits", external: false }] : []),
    ...(longForm ? [{ ...longForm, external: /^https?:/.test(longForm.href) }] : []),
    ...(r?.galleryUrl ? [{ href: r.galleryUrl, label: "This piece in the gallery", external: true }] : []),
  ];
  return (
    <nav className={styles.box} aria-label="This piece and the pieces around it">
      {items.length > 0 && (
        <>
          <h2>This piece</h2>
          <ul className={styles.list}>
            {items.map((l) => (
              <li key={l.href}>
                {l.external
                  ? <a href={l.href} target="_blank" rel="noreferrer">{l.label} <span aria-hidden="true">↗</span></a>
                  : <Link href={l.href}>{l.label}</Link>}
              </li>
            ))}
          </ul>
        </>
      )}
      <ul className={styles.nav}>
        {prev && <li><span className={styles.label}>Previous</span><Link href={prev.href}>{prev.title}</Link></li>}
        {next && <li><span className={styles.label}>Next</span><Link href={next.href}>{next.title}</Link></li>}
        <li><span className={styles.label}>All</span><Link href={index.href}>{index.title}</Link></li>
      </ul>
    </nav>
  );
}
