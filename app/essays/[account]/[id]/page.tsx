import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { EssayBody } from "../../../../components/essay-body";
import { PieceLinks } from "../../../../components/piece-links";
import { POLYMATH_SUBSCRIBE, essayAccount, essayAccounts, essayPath, essayRobots, essayShare, host, longDate, readingMinutes, releasedEssay, releasedEssays, sourcesPath } from "../../../../lib/essays";
import { POLYMATH_HOME, linkOnly, polymathArticle } from "../../../../lib/longform";
import { pieceId } from "../../../../lib/releases";
import styles from "../../essays.module.css";

// Only released essays (data/releases.json) are built. Any other address returns 404 until the release day;
// pages are rechecked hourly, and the daily cron (app/api/release-day) refreshes them all.
export const dynamicParams = true;
export const revalidate = 3600;

type Params = { params: Promise<{ account: string; id: string }> };

export function generateStaticParams() {
  return essayAccounts.flatMap((a) => releasedEssays(a.key).map((e) => ({ account: a.key, id: e.id })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { account, id } = await params;
  const e = releasedEssay(account, id);
  if (!e) notFound();
  const path = essayPath(account, id);
  return {
    title: e.seoTitle,
    description: e.description,
    alternates: { canonical: path },
    robots: essayRobots(),
    authors: [{ name: e.byline }],
    ...essayShare(e.seoTitle, e.description, path, "article", { authors: [e.byline], ...(e.date ? { publishedTime: e.date } : {}) }),
  };
}

export default async function EssayPage({ params }: Params) {
  const { account, id } = await params;
  const a = essayAccount(account);
  const e = a && releasedEssay(account, id);
  if (!a || !e) notFound();
  const order = releasedEssays(account);
  const at = order.findIndex((q) => q.id === id);
  const ref = (q?: { id: string; title: string }) => q && { href: essayPath(account, q.id), title: q.title };
  // Link-only accounts (lib/longform.ts): the essay itself is on the Polymath, so the body is not shown here.
  const outside = linkOnly(account);
  const article = outside ? polymathArticle(pieceId(account, id)) : undefined;
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">{a.name} · Essay</p>
        <h1 className={styles.title}>{e.title}</h1>
        {e.subtitle && <p className={styles.standfirst}>{e.subtitle}</p>}
        <p className={styles.byline}>
          By {e.byline}
          {e.date ? <> · <time dateTime={e.date}>{longDate(e.date)}</time></> : null}
          {outside ? null : <>{" · "}{readingMinutes(e)} minute read</>}
        </p>
        <ul className={styles.links} aria-label="Related links">
          <li><Link href={sourcesPath(account, id)}>Sources and image credits</Link></li>
          <li><Link href="/">RN Selected Work</Link></li>
          <li><a href={POLYMATH_SUBSCRIBE} target="_blank" rel="noreferrer">Subscribe to The Polymath <span aria-hidden="true">↗</span></a></li>
        </ul>

        {outside ? (
          <>
            {e.description ? <p className={styles.standfirst}>{e.description}</p> : null}
            <p>
              {article ? (
                <a href={article}>Read the full essay on The Polymath <span aria-hidden="true">↗</span></a>
              ) : (
                <>The full essay is published on The Polymath, RN Collins&apos; newsletter.{" "}
                  <a href={POLYMATH_HOME}>Go to The Polymath <span aria-hidden="true">↗</span></a></>
              )}
            </p>
          </>
        ) : (
          <EssayBody e={e} />
        )}

        <section className={styles.sources} aria-labelledby="sources">
          <h2 id="sources">Sources</h2>
          <ol>
            {e.sources.map((s) => (
              <li id={`src-${s.id}`} key={s.id}>
                {s.url ? (
                  <>
                    <a href={s.url} target="_blank" rel="noreferrer">{s.label} <span aria-hidden="true">↗</span></a>
                    <span className={styles.host}>{host(s.url)}</span>
                  </>
                ) : s.label}
              </li>
            ))}
          </ol>
        </section>

        <aside className={styles.closing} aria-labelledby="essay-links">
          <h2 id="essay-links">More from RN Collins</h2>
          <ul>
            <li><Link href={sourcesPath(account, id)}>Sources and image credits for this essay</Link></li>
            <li><a href={POLYMATH_SUBSCRIBE} target="_blank" rel="noreferrer">Subscribe to The Polymath <span aria-hidden="true">↗</span></a></li>
            <li><Link href="/">RN Selected Work</Link></li>
          </ul>
        </aside>
        <PieceLinks
          id={pieceId(account, id)}
          sources={sourcesPath(account, id)}
          index={{ href: `/essays/${account}`, title: `${a.name}: all essays` }}
          prev={ref(order[at - 1])}
          next={ref(at >= 0 ? order[at + 1] : undefined)}
        />
      </article>
    </CanonicalPage>
  );
}
