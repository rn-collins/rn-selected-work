import Link from "next/link";
import type { ReactNode } from "react";
import { host, type SourceLink, type SourcePost } from "../lib/aan-sources";
import styles from "../app/sources/sources.module.css";
import { SocialRow } from "./social-row";

// RN's client line (Oct 10, 2026): exact wording, never change it. Sits below the references, outside the lists.
const CLIENT_LINE = "I'm taking on clients for storytelling strategy and content production and operations. DMs are open.";

// The one shared place: every sources page (all accounts) renders this below its references.
export function ClientLine() {
  return <p className={styles.client}>{CLIENT_LINE}</p>;
}

// One sources page body, shared by every account (Ask a Neuroscientist, Tech From Here, ...).
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


const AAN_INTRO = "The studies, records and images behind this post, each linked to the original. Where a slide shows a number card, the number is quoted from the study named on the card.";

// `links` (the piece's link set, components/piece-links.tsx) takes the place of the plain back link when given.
export function SourcesDetail({ p, eyebrow, meta, backHref, backLabel, intro = AAN_INTRO, social = "aan", links, clientLine = true }: { p: SourcePost; eyebrow: string; meta: string; backHref: string; backLabel: string; intro?: string; social?: "rn" | "aan"; links?: ReactNode; clientLine?: boolean }) {
  return (
      <article className={`${styles.page} shell`}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.meta}>{meta}</p>
        <p className={styles.intro}>{intro}</p>
        {p.disclaimer && <p className={styles.intro}>{p.disclaimer}</p>}
        {p.resources && <p className={styles.intro}>{p.resources}</p>}

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
                    {im.url && <a href={im.url} target="_blank" rel="noreferrer">{im.card ? "The study" : "Museum or journal record"} <span aria-hidden="true">↗</span></a>}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        <section className="socialFollow" aria-label="Follow">
          <p>{social === "aan" ? "Follow Ask a Neuroscientist" : "Follow RN Collins"}</p>
          <SocialRow set={social} />
        </section>
        {clientLine && <ClientLine />}
        {links ?? <p className={styles.back}><Link href={backHref}>{backLabel}</Link></p>}
      </article>
  );
}

export function entryCount(p: SourcePost) {
  return p.research.length + p.other.length + p.images.length;
}
