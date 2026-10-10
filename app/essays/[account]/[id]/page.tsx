import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../components/canonical-page";
import { EssayBody } from "../../../../components/essay-body";
import { POLYMATH_SUBSCRIBE, essay, essayAccount, essayAccounts, essayPath, essayRobots, essayShare, host, longDate, readingMinutes, sourcesPath } from "../../../../lib/essays";
import styles from "../../essays.module.css";

export const dynamicParams = false;

type Params = { params: Promise<{ account: string; id: string }> };

export function generateStaticParams() {
  return essayAccounts.flatMap((a) => a.essays.map((e) => ({ account: a.key, id: e.id })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { account, id } = await params;
  const e = essay(account, id);
  if (!e) return {};
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
  const e = a && essay(account, id);
  if (!a || !e) notFound();
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">{a.name} · Essay</p>
        <h1 className={styles.title}>{e.title}</h1>
        {e.subtitle && <p className={styles.standfirst}>{e.subtitle}</p>}
        <p className={styles.byline}>
          By {e.byline}
          {e.date ? <> · <time dateTime={e.date}>{longDate(e.date)}</time></> : null}
          {" · "}{readingMinutes(e)} minute read
        </p>
        <ul className={styles.links} aria-label="Related links">
          <li><Link href={sourcesPath(account, id)}>Sources and image credits</Link></li>
          <li><Link href="/">RN Selected Work</Link></li>
          <li><a href={POLYMATH_SUBSCRIBE} target="_blank" rel="noreferrer">Subscribe to The Polymath <span aria-hidden="true">↗</span></a></li>
        </ul>

        <EssayBody e={e} />

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
        <p className={styles.back}><Link href={`/essays/${account}`}>{a.name}: all essays</Link></p>
      </article>
    </CanonicalPage>
  );
}
