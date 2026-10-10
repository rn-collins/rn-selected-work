import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { PortfolioBlock, PortfolioLine } from "../../../../components/source-portfolio-link";
import { account, accounts, entryCount, host, sourcePost, type SourceLink } from "../../../../lib/sources";
import styles from "../../sources.module.css";

// In this folder [slug] is the account (ddw26, venues, makers, editions) and [id] the post. Next.js allows one
// parameter name per path level, and Ask a Neuroscientist's /sources/[slug] page already owns it.
export const dynamicParams = false;

type Params = { params: Promise<{ slug: string; id: string }> };

export function generateStaticParams() {
  return accounts.flatMap((a) => a.posts.map((p) => ({ slug: a.key, id: p.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, id } = await params;
  const p = sourcePost(slug, id);
  if (!p) return {};
  return {
    title: `Sources: ${p.title}`,
    description: `The article, sources and image credits behind the RN Collins post "${p.title}", each linked to the original.`,
    alternates: { canonical: `/sources/${slug}/${p.slug}` },
    // Estate-wide page genre tag (see rn-estate-tools README): judged on completeness, not length.
    other: { "rn:kind": "reference", "rn:entries": String(entryCount(p)) },
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

export default async function SourcePage({ params }: Params) {
  const { slug, id } = await params;
  const a = account(slug);
  const p = a && sourcePost(slug, id);
  if (!a || !p) notFound();
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">{a.name} · Sources</p>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.meta}>{p.series}</p>
        <PortfolioLine />
        <p className={styles.intro}>
          The article, the sources and the image credits behind this post, each linked to the original.
        </p>

        {p.origin && (
          <a className={styles.origin} href={p.origin.url} target="_blank" rel="noreferrer">
            <span className={styles.originLabel}>{p.origin.kind === "article" ? "The article" : p.origin.kind === "listing" ? "The work" : "Start here"}</span>
            <span className={styles.originTitle}>{p.origin.label} <span aria-hidden="true">↗</span></span>
            <span className={styles.host}>{host(p.origin.url)}</span>
          </a>
        )}

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
                    {im.url && <a href={im.url} target="_blank" rel="noreferrer">{im.card ? "The study" : "Photo record"} <span aria-hidden="true">↗</span></a>}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        <p className={styles.back}><Link href={`/sources/${slug}`}>{a.name}: all posts and their sources</Link></p>
        <PortfolioBlock />
      </article>
    </CanonicalPage>
  );
}
