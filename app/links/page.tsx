import type { Metadata, Viewport } from "next";
import hub from "../../data/links-hub.json";
import social from "../../data/social-links.json";
import { postedSoFar, longDate } from "../../lib/aan-sources";
import { hawaiiToday } from "../../lib/releases";
import styles from "./links.module.css";

// The link hub on RN's business card (QR code and NFC; printed as /l). Server-rendered, no client script, no
// trackers, works with JavaScript off. Every link is in data/links-hub.json or data/social-links.json. "This week"
// is the three newest live AaN sources pages, and the dated block (MJBizCon) shows only on its Hawaii dates;
// the page is re-rendered every hour, so both move on without anyone touching it.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "RN Collins: links",
  description: `RN Collins, ${hub.title}. Ask a Neuroscientist, RN Selected Work, The Polymath and how to get in touch.`,
  alternates: { canonical: "/links" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f4efe4" };

type Account = { id: string; label: string; url: string };
type Entry = { label: string; url: string; note?: string; confirm?: boolean };
const accounts = social as Record<"rn" | "aan", { name: string; accounts: Account[] }>;
const leaveOut = hub.leaveOut as Record<"rn" | "aan", string[]>;

function handle(url: string) {
  const m = url.match(/\/(@?[\w.-]+)\/?$/);
  return m ? (m[1].startsWith("@") ? m[1] : `@${m[1]}`) : "";
}

// Every character as an HTML entity: the address works for people and mail apps, with or without JavaScript,
// and is not plain text for simple scrapers.
const entities = (s: string) => Array.from(s, (c) => `&#${c.codePointAt(0)};`).join("");

function Row({ e, primary = false }: { e: Entry; primary?: boolean }) {
  if (e.confirm) return null;
  const external = /^https?:/.test(e.url);
  return (
    <li>
      <a className={primary ? styles.primary : styles.row} href={e.url} {...(external ? { rel: "noopener" } : {})}>
        <span className={styles.label}>{e.label}</span>
        {e.note ? <span className={styles.note}>{e.note}</span> : null}
        <span className={styles.arrow} aria-hidden="true">→</span>
      </a>
    </li>
  );
}

function Platforms({ set }: { set: "rn" | "aan" }) {
  const list = accounts[set].accounts.filter((a) => !leaveOut[set].includes(a.id));
  return (
    <ul className={styles.platforms} aria-label={`${accounts[set].name} on social platforms`}>
      {list.map((a) => (
        <li key={a.id}>
          <a href={a.url} rel="noopener">
            {a.label} <span className={styles.handle}>{handle(a.url)}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function LinksPage() {
  const today = hawaiiToday();
  const dated = hub.dated.filter((d) => d.from <= today && today <= d.to);
  const latest = postedSoFar().slice(-3).reverse();
  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <h1 className={styles.name}>RN Collins</h1>
        <p className={styles.title}>{hub.title}</p>
        <a className={styles.save} href="/rn-collins-card.vcf" download="RN-Collins.vcf">Save my contact</a>
      </header>

      {dated.map((d) => (
        <section key={d.from} className={styles.live} aria-labelledby={`live-${d.from}`}>
          <h2 id={`live-${d.from}`}>{d.heading}</h2>
          <p className={styles.note}>{d.note}</p>
          <ul className={styles.list}>
            {d.links.map((l) => (
              <Row key={l.url} e={{ label: l.label, url: l.url, note: l.handle }} />
            ))}
          </ul>
        </section>
      ))}

      <section className={styles.chapter} aria-labelledby="aan">
        <h2 id="aan" className={styles.aanHead}><span className={styles.leader} aria-hidden="true" />Ask a Neuroscientist</h2>
        <p className={styles.tagline}>{hub.aan.tagline}</p>
        <ul className={styles.list}>
          <Row e={hub.aan.site} />
          {latest.map((p) => (
            <Row key={p.slug} e={{ label: p.title, url: `/sources/${p.slug}`, note: `${longDate(p.date)} · sources` }} />
          ))}
        </ul>
        <Platforms set="aan" />
      </section>

      <section className={styles.chapter} aria-labelledby="rn">
        <h2 id="rn"><span className={styles.leader} aria-hidden="true" />RN Collins</h2>
        <ul className={styles.list}>
          <Row e={hub.workWithMe as Entry} primary />
          <Row e={hub.rn.site} />
          <Row e={hub.newsletter} />
          <Row e={hub.linkedin} />
        </ul>
        <Platforms set="rn" />
      </section>

      <section className={styles.chapter} aria-labelledby="sources">
        <h2 id="sources" className={styles.visuallyHidden}>Sources</h2>
        <ul className={styles.list}>
          <Row e={hub.sources} />
        </ul>
      </section>

      <section className={styles.chapter} aria-labelledby="contact">
        <h2 id="contact"><span className={styles.leader} aria-hidden="true" />Email</h2>
        <ul className={styles.list}>
          {hub.email.map((m) => (
            <li
              key={m.label}
              dangerouslySetInnerHTML={{
                __html: `<a class="${styles.row}" href="${entities(`mailto:${m.address}`)}"><span class="${styles.label}">${m.label.replace(/&/g, "&amp;")}</span><span class="${styles.note}">${entities(m.address)}</span><span class="${styles.arrow}" aria-hidden="true">→</span></a>`,
              }}
            />
          ))}
        </ul>
      </section>

      <footer className={styles.foot}>
        <p>Ask a Neuroscientist is education, not medical advice.</p>
      </footer>
    </main>
  );
}
