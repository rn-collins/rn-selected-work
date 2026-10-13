import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { ClientLine } from "../../../../components/sources-detail";
import { PortfolioBlock, PortfolioLine } from "../../../../components/source-portfolio-link";
import { PieceLinks } from "../../../../components/piece-links";
import { POLYMATH_SUBSCRIBE, essay, essayPath } from "../../../../lib/essays";
import { pieceId } from "../../../../lib/releases";
import { account, accounts, entryCount, host, listed, releasedPost, type SourceLink } from "../../../../lib/sources";
import styles from "../../sources.module.css";

// In this folder [slug] is the account (ddw26, venues, makers, editions) and [id] the post. Next.js allows one
// parameter name per path level, and Ask a Neuroscientist's /sources/[slug] page already owns it.
// Only released pieces (data/releases.json) are built. Any other address renders on request and returns 404 until
// the piece's release day; pages are rechecked hourly, and the daily cron (app/api/release-day) refreshes them all.
export const dynamicParams = true;
export const revalidate = 3600;

type Params = { params: Promise<{ slug: string; id: string }> };

export function generateStaticParams() {
  return accounts.flatMap((a) => listed(a).map((p) => ({ slug: a.key, id: p.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, id } = await params;
  const p = releasedPost(slug, id);
  if (!p) notFound();
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
      {items.map((s, i) => (
        <li key={s.url || `${i}-${s.label}`}>
          {s.url ? (
            <>
              <a href={s.url} target="_blank" rel="noreferrer">{s.label || host(s.url)} <span aria-hidden="true">↗</span></a>
              <span className={styles.host}>{host(s.url)}</span>
            </>
          ) : (
            <span>{s.label}</span>
          )}
        </li>
      ))}
    </ol>
  );
}

export default async function SourcePage({ params }: Params) {
  const { slug, id } = await params;
  const a = account(slug);
  const p = a && releasedPost(slug, id);
  if (!a || !p) notFound();
  // The long-form for this piece: its essay on this site when there is one. The DDW packages name the newsletter
  // subscribe page as their article; the essay takes its place, because a subscribe page is not the piece.
  const e = essay(slug, p.slug);
  const essayHref = e ? essayPath(slug, p.slug) : undefined;
  const origin = p.origin?.url === POLYMATH_SUBSCRIBE
    ? (e ? { kind: "article" as const, label: e.title, url: essayHref! } : null)
    : p.origin;
  const order = listed(a);
  const at = order.findIndex((q) => q.slug === p.slug);
  const ref = (q?: { slug: string; title: string }) => q && { href: `/sources/${slug}/${q.slug}`, title: q.title };
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">{a.name} · Sources</p>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.meta}>{p.series}</p>
        <PortfolioLine />
        {p.note && <p className={styles.note}>{p.note}</p>}
        <p className={styles.intro}>
          {a.intro ?? "The article, the sources and the image credits behind this post, each linked to the original."}
        </p>

        {origin && (origin.url === essayHref ? (
          <Link className={styles.origin} href={origin.url}>
            <span className={styles.originLabel}>The essay</span>
            <span className={styles.originTitle}>{origin.label}</span>
            <span className={styles.host}>rn-selected-work.vercel.app</span>
          </Link>
        ) : (
          <a className={styles.origin} href={origin.url} target="_blank" rel="noreferrer">
            <span className={styles.originLabel}>{origin.kind === "article" ? "The article" : origin.kind === "listing" ? "The work" : "Start here"}</span>
            <span className={styles.originTitle}>{origin.label} <span aria-hidden="true">↗</span></span>
            <span className={styles.host}>{host(origin.url)}</span>
          </a>
        ))}

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
        <ClientLine />
        <PieceLinks
          id={pieceId(slug, p.slug)}
          longForm={essayHref ? { href: essayHref, label: `The essay: ${e!.title}` } : undefined}
          index={{ href: `/sources/${slug}`, title: `${a.name}: all posts and their sources` }}
          prev={ref(order[at - 1])}
          next={ref(at >= 0 ? order[at + 1] : undefined)}
        />
        <PortfolioBlock />
      </article>
    </CanonicalPage>
  );
}
