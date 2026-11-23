import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import social from "../../../data/social-links.json";
import { CanonicalPage } from "../../../components/canonical-page";
import { POLYMATH_SUBSCRIBE } from "../../../lib/essays";
import { isReleased } from "../../../lib/releases";
import { isPublicPost, isReviewBuild, longDate, visiblePost, visiblePosts } from "../../../lib/post-pages";
import styles from "../posts.module.css";

export const dynamicParams = true;
export const revalidate = 3600;
type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return visiblePosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = visiblePost((await params).slug);
  if (!p) notFound();
  const image = p.slides[0] && { url: `/p/${p.slug}/slides/${p.slides[0].file}`, width: p.slides[0].w, height: p.slides[0].h, alt: p.slides[0].alt };
  return {
    title: p.title, description: p.summary, alternates: { canonical: `/p/${p.slug}` },
    robots: isPublicPost(p) ? undefined : { index: false, follow: false },
    openGraph: { type: "article", title: p.title, description: p.summary, url: `/p/${p.slug}`, images: image ? [image] : undefined },
  };
}

const host = (u: string) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; } };
const FOLLOW = new Set(["instagram", "youtube", "tiktok", "bluesky", "pinterest"]);

export default async function PostPageView({ params }: Params) {
  const p = visiblePost((await params).slug);
  if (!p) notFound();
  const order = visiblePosts(); const at = order.findIndex((q) => q.slug === p.slug);
  const prev = order[at - 1]; const next = order[at + 1];
  const sourcesId = p.sourcesPage.replace("/sources/", "");
  const follow = (social as { rn: { accounts: { id: string; label: string; url: string }[] } }).rn.accounts.filter((a) => FOLLOW.has(a.id));
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        {isReviewBuild() && !isPublicPost(p) && <p className={styles.review}>Review copy. Not public: {p.holdReason}.</p>}
        <p className="eyebrow">{p.series}</p>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.date}><time dateTime={p.date}>{longDate(p.date)}</time></p>
        <p className={styles.summary}>{p.summary}</p>
        <div className={styles.actions}>
          {p.longForm && <a className={styles.primary} href={p.longForm} target="_blank" rel="noreferrer">Read the long form <span aria-hidden="true">↗</span></a>}
          <a href={POLYMATH_SUBSCRIBE} target="_blank" rel="noreferrer">Subscribe to The Polymath <span aria-hidden="true">↗</span></a>
        </div>

        {p.slides.length > 0 && (
          <section className={styles.block} aria-labelledby="slides">
            <h2 id="slides">The post, slide by slide</h2>
            <ol className={styles.slides} tabIndex={0} aria-label={`${p.slides.length} slides. Scroll sideways.`}>
              {p.slides.map((s, i) => (
                <li key={s.file}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/p/${p.slug}/slides/${s.file}`} width={s.w} height={s.h} alt={s.alt} loading={i < 2 ? "eager" : "lazy"} />
                  <span>{i + 1} of {p.slides.length}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {p.sources.length > 0 && (
          <section className={styles.block} aria-labelledby="sources">
            <h2 id="sources">Sources</h2>
            <ol className={styles.list}>
              {p.sources.map((s) => (
                <li key={s.url || s.label}>{s.url ? <a href={s.url} target="_blank" rel="noreferrer">{s.label} <span aria-hidden="true">↗</span></a> : s.label}{s.url && <small>{host(s.url)}</small>}</li>
              ))}
            </ol>
            {sourcesId && isReleased(sourcesId) && <p><Link href={p.sourcesPage}>The full sources page</Link></p>}
          </section>
        )}

        {p.slides.some((s) => s.credit) && (
          <section className={styles.block} aria-labelledby="credits">
            <h2 id="credits">Image credits</h2>
            <ol className={styles.credits}>
              {p.slides.map((s, i) => s.credit && (
                <li key={s.file}><b>Slide {i + 1}</b> {s.url ? <a href={s.url} target="_blank" rel="noreferrer">{s.credit} <span aria-hidden="true">↗</span></a> : s.credit}</li>
              ))}
            </ol>
          </section>
        )}

        <section className={styles.block} aria-labelledby="notes">
          <h2 id="notes">Notes</h2>
          {p.legalNote && <p>Education, not legal advice.</p>}
          <p>Spotted an error? <Link href="/contact">Send a correction</Link> and the fix will be noted here.</p>
        </section>

        <section className={styles.block} aria-labelledby="follow">
          <h2 id="follow">Follow RN Collins</h2>
          <ul className={styles.follow}>{follow.map((a) => <li key={a.id}><a href={a.url} target="_blank" rel="noreferrer">{a.label}</a></li>)}</ul>
        </section>

        <nav className={styles.pager} aria-label="More posts">
          {prev ? <Link href={`/p/${prev.slug}`}><small>Previous</small>{prev.title}</Link> : <span />}
          {next ? <Link href={`/p/${next.slug}`}><small>Next</small>{next.title}</Link> : <span />}
        </nav>
        <p><Link href="/p">All RN Collins posts</Link></p>
      </article>
    </CanonicalPage>
  );
}
