import type { Metadata, Viewport } from "next";
import hub from "../../data/links-hub.json";
import social from "../../data/social-links.json";
import { postedSoFar, longDate } from "../../lib/aan-sources";
import styles from "./links.module.css";

// The link hub on RN's business card (QR code and NFC). One column, no images to wait for, no scripts, no trackers.
// Every link is in data/links-hub.json or data/social-links.json; "This week's posts" are the newest live AaN
// sources pages, re-read every hour so the list moves on as posts go live (Hawaii dates, lib/releases.ts).
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Links: RN Collins and Ask a Neuroscientist",
  description: `${hub.subtitle}. Ask a Neuroscientist, RN Selected Work, The Polymath newsletter and LinkedIn in one place.`,
  alternates: { canonical: "/links" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f1e7" };

type Account = { id: string; label: string; url: string };
type Entry = { label: string; url: string; note?: string; confirm?: boolean };
const accounts = social as Record<"rn" | "aan", { name: string; accounts: Account[] }>;
const leaveOut = hub.leaveOut as Record<"rn" | "aan", string[]>;

function handle(url: string) {
  const m = url.match(/\/(@?[\w.-]+)\/?$/);
  return m ? (m[1].startsWith("@") ? m[1] : `@${m[1]}`) : "";
}

function Big({ e }: { e: Entry }) {
  if (e.confirm) return null;
  const external = /^https?:/.test(e.url);
  return (
    <li>
      <a className={styles.big} href={e.url} {...(external ? { rel: "noopener" } : {})}>
        <span className={styles.label}>{e.label}</span>
        {e.note ? <span className={styles.note}>{e.note}</span> : null}
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
  const latest = postedSoFar().slice(-3).reverse();
  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <p className={styles.name}>RN Collins</p>
        <h1 className={styles.title}>{hub.title}</h1>
        <p className={styles.subtitle}>{hub.subtitle}</p>
      </header>

      <section aria-labelledby="aan">
        <h2 id="aan">Ask a Neuroscientist</h2>
        <ul className={styles.list}>
          <Big e={hub.aan.site} />
          <Big e={hub.aan.sources} />
        </ul>
        <Platforms set="aan" />
      </section>

      {latest.length ? (
        <section aria-labelledby="week">
          <h2 id="week">This week&apos;s posts</h2>
          <ul className={styles.list}>
            {latest.map((p) => (
              <li key={p.slug}>
                <a className={styles.big} href={`/sources/${p.slug}`}>
                  <span className={styles.label}>{p.title}</span>
                  <span className={styles.note}>{longDate(p.date)} · sources</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="rn">
        <h2 id="rn">RN Collins</h2>
        <ul className={styles.list}>
          <Big e={hub.rn.site} />
          <Big e={hub.workWithMe as Entry} />
        </ul>
        <Platforms set="rn" />
      </section>

      <section aria-labelledby="more">
        <h2 id="more">Newsletter and contact</h2>
        <ul className={styles.list}>
          <Big e={hub.newsletter} />
          <Big e={hub.linkedin} />
        </ul>
      </section>

      <footer className={styles.foot}>
        <p>Ask a Neuroscientist is education, not medical advice.</p>
      </footer>
    </main>
  );
}
