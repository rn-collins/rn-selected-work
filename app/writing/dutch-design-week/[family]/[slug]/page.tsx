import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPage } from "../../../../../components/canonical-page";
import {
  Essay, essay, essayPath, essays, readingMinutes, sourcesPath,
} from "../../../../../lib/ddw-essays";
import styles from "../../ddw.module.css";

export function generateStaticParams() {
  return essays.map((e) => ({ family: e.family, slug: e.slug }));
}

type Params = { params: Promise<{ family: string; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { family, slug } = await params;
  const e = essay(family, slug);
  if (!e) return {};
  return {
    title: e.title,
    description: e.description || e.subtitle,
    alternates: { canonical: essayPath(e) },
    authors: [{ name: "RN Collins" }],
  };
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Sentences carry their citations inline as [S12]. Each marker becomes a link
// to that source in the list at the foot, so a reader can check any one claim
// without hunting for it.
function withRefs(text: string, byId: Map<string, number>) {
  return text.split(/(\[S\d+\])/g).map((part, i) => {
    const id = /^\[(S\d+)\]$/.exec(part)?.[1];
    const n = id ? byId.get(id) : undefined;
    if (!n) return part;
    return (
      <a className={styles.ref} href={`#source-${n}`} key={i} aria-label={`Source ${n}`}>
        {n}
      </a>
    );
  });
}

export default async function DutchDesignWeekEssay({ params }: Params) {
  const { family, slug } = await params;
  const e = essay(family, slug);
  if (!e) notFound();
  const byId = new Map(e.sources.map((s, i) => [s.id ?? "", i + 1]));
  const headings = e.sections.filter((s) => s.t === "h2");
  return (
    <CanonicalPage>
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">Dutch Design Week · {e.familyLabel}</p>
        <h1 className={styles.title}>{e.title}</h1>
        {e.subtitle ? <p className={styles.subtitle}>{e.subtitle}</p> : null}
        <p className={styles.byline}>
          {e.byline.replace(/^By /, "By ")} · {readingMinutes(e)} minute read
        </p>
        <p className={styles.origin}>
          Written from the public record. Every claim carries the source it rests on, numbered
          through the text and listed at the end. The citation page for this package, with the
          image credits, is at <Link href={sourcesPath(e)}>{sourcesPath(e)}</Link>.
        </p>
        {headings.length > 3 ? (
          <nav className={styles.contents} aria-label="In this essay">
            <p>In this essay</p>
            <ol>
              {headings.map((h) => (
                <li key={h.x}>
                  <a href={`#${slugify(h.x)}`}>{h.x}</a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className={styles.body}>
          {e.sections.map((s, i) => {
            if (s.t === "h2") return <h2 id={slugify(s.x)} key={i}>{s.x}</h2>;
            if (s.t === "li") return <ul key={i}><li>{withRefs(s.x, byId)}</li></ul>;
            if (s.t === "tr") return <p key={i}>{withRefs(s.x, byId)}</p>;
            return <p key={i}>{withRefs(s.x, byId)}</p>;
          })}
        </div>
        <section className={styles.refs} aria-labelledby="sources">
          <h2 id="sources">Sources</h2>
          <ol>
            {e.sources.map((s, i) => (
              <li id={`source-${i + 1}`} key={s.url + i}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label || s.url}
                  <span aria-hidden="true"> ↗</span>
                </a>
                {s.publisher ? ` · ${s.publisher}` : ""}
                {s.published ? ` · ${s.published}` : ""}
              </li>
            ))}
          </ol>
        </section>
        <p className={styles.back}>
          <Link href="/writing/dutch-design-week">All Dutch Design Week essays</Link>
        </p>
      </article>
    </CanonicalPage>
  );
}
