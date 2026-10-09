import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../components/canonical-page";
import { host, longDate, sourcePost, sourcePosts, type SourceLink } from "../../../lib/aan-sources";
import styles from "../sources.module.css";

export function generateStaticParams() {
  return sourcePosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = sourcePost((await params).slug);
  if (!p) return {};
  return {
    title: `Sources: ${p.title}`,
    description: `Every study, record and image behind the Ask a Neuroscientist post of ${longDate(p.date)}, "${p.title}", linked to the original.`,
    alternates: { canonical: `/sources/${p.slug}` },
  };
}

function Links({ items }: { items: SourceLink[] }) {
  return (
    <ol className={styles.links}>
      {items.map((s) => (
        <li key={s.url}>
          <a href={s.url} target="_blank" rel="noreferrer">{s.label || host(s.url)} <span aria-hidden="true">↗</span></a>
          <span className={styles.host}>{host(s.url)}</span>
        </li>
      ))}
    </ol>
  );
}

export default async function SourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = sourcePost((await params).slug);
  if (!p) notFound();
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">Ask a Neuroscientist · Sources</p>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.meta}>{p.series} · posted {longDate(p.date)}</p>
        <p className={styles.intro}>
          The studies, records and images behind this post, each linked to the original. Where a slide shows a
          number card, the number is quoted from the study named on the card.
        </p>

        {p.research.length > 0 && (
          <section className={styles.block} aria-labelledby="research">
            <h2 id="research">Research cited</h2>
            <Links items={p.research} />
          </section>
        )}
        {p.other.length > 0 && (
          <section className={styles.block} aria-labelledby="other">
            <h2 id="other">Other sources</h2>
            <Links items={p.other} />
          </section>
        )}
        {p.images.length > 0 && (
          <section className={styles.block} aria-labelledby="images">
            <h2 id="images">Images, slide by slide</h2>
            <dl className={styles.images}>
              {p.images.map((im) => (
                <div key={im.where}>
                  <dt>{im.where}</dt>
                  <dd>
                    {im.card ? <span>Number card made for this post, citing {im.credit}.</span> : <span>{im.what}</span>}
                    {!im.card && im.credit && <span className={styles.credit}>{im.credit}</span>}
                    {im.url && <a href={im.url} target="_blank" rel="noreferrer">{im.card ? "The study" : "Museum or journal record"} <span aria-hidden="true">↗</span></a>}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        <p className={styles.back}><Link href="/sources">All posts and their sources</Link></p>
      </article>
    </CanonicalPage>
  );
}
