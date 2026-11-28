import type { Metadata, Viewport } from "next";
import { hasVcard } from "../../lib/vcard";
import hub from "../../data/links-hub.json";
import social from "../../data/social-links.json";
import aanSite from "../../data/aan-site.json";
import { postedSoFar, longDate } from "../../lib/aan-sources";
import { hawaiiToday } from "../../lib/releases";
import s from "../../components/specimen.module.css";

// The link hub on RN's business card (QR code and NFC; printed as /l), in the specimen design system. Server-rendered,
// no client script, no trackers, works with JavaScript off. Every link is in data/links-hub.json or
// data/social-links.json. "This week" shows the three newest live AaN posts as their own slide 1 covers, only once the
// post's page is live on the AaN site; the dated block (MJBizCon) shows only on its Hawaii dates. Hourly re-render.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "RN Collins: links",
  description: `RN Collins, ${hub.title}. Ask a Neuroscientist, RN Selected Work, The Polymath and how to get in touch.`,
  alternates: { canonical: "/links" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f4efe4" };

// The Ask a Neuroscientist question form (Google Form); Reader Q&A opens Nov 30, 2026.
const ASK_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScr1P62fLjNwwfOmENkb5iOFpctIYqf8PVbWcDr3Jmw72ZvTw/viewform";

type Account = { id: string; label: string; url: string };
type Entry = { label: string; url: string; note?: string; confirm?: boolean };
type Dated = { releasedAt: string; hold: boolean; path: string };
const accounts = social as Record<"rn" | "aan", { name: string; accounts: Account[] }>;
const leaveOut = hub.leaveOut as Record<"rn" | "aan", string[]>;
const aan = aanSite as unknown as { base: string; posts: Record<string, Dated> };

function handle(url: string) {
  const m = url.match(/\/(@?[\w.-]+)\/?$/);
  return m ? (m[1].startsWith("@") ? m[1] : `@${m[1]}`) : "";
}

// Every character as an HTML entity: the address works for people and mail apps, with or without JavaScript,
// and is not plain text for simple scrapers.
const entities = (t: string) => Array.from(t, (c) => `&#${c.codePointAt(0)};`).join("");

function Row({ e, primary = false }: { e: Entry; primary?: boolean }) {
  if (e.confirm) return null;
  const external = /^https?:/.test(e.url);
  return (
    <li>
      <a className={primary ? s.primary : s.row} href={e.url} {...(external ? { rel: "noopener" } : {})}>
        <span className={s.rowLabel}>{e.label}</span>
        {e.note ? <span className={s.rowNote}>{e.note}</span> : null}
        <span className={s.arrow} aria-hidden="true">→</span>
      </a>
    </li>
  );
}

function Platforms({ set }: { set: "rn" | "aan" }) {
  const list = accounts[set].accounts.filter((a) => !leaveOut[set].includes(a.id));
  return (
    <ul className={s.platforms} aria-label={`${accounts[set].name} on social platforms`}>
      {list.map((a) => (
        <li key={a.id}>
          <a href={a.url} rel="noopener">
            {a.label} <span className={s.handle}>{handle(a.url)}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function LinksPage() {
  const today = hawaiiToday();
  const dated = hub.dated.filter((d) => d.from <= today && today <= d.to);
  const live = (p?: Dated) => !!p && !p.hold && p.releasedAt !== "" && p.releasedAt <= today;
  const latest = postedSoFar().filter((p) => live(aan.posts[p.slug])).slice(-3).reverse();
  return (
    <main className={`${s.page}`}>
      <div className={s.narrow}>
        <header className={s.plate}>
          <h1 className={s.hero}>RN Collins</h1>
          <p className={s.title}>{hub.title}</p>
          {hasVcard() && <a className={s.ghost} href="/rn-collins-card.vcf" download="RN-Collins.vcf">Save my contact</a>}
          <a className={s.ghost} href="/links/qr">Show my QR code</a>
        </header>

        {dated.map((d) => (
          <section key={d.from} className={`${s.live} ${s.aan}`} aria-labelledby={`live-${d.from}`}>
            <h2 id={`live-${d.from}`} className={s.label}>{d.heading}</h2>
            <p className={s.rowNote}>{d.note}</p>
            <ul className={s.rows}>
              {d.links.map((l) => (
                <Row key={l.url} e={{ label: l.label, url: l.url, note: l.handle }} />
              ))}
            </ul>
          </section>
        ))}

        <section className={`${s.section} ${s.aan}`} aria-labelledby="aan">
          <h2 id="aan" className={s.label}>Ask a Neuroscientist</h2>
          <p className={s.lede} style={{ color: "var(--aan)" }}>{hub.aan.tagline}</p>
          {latest.length ? (
            <>
              <h3 className={s.visuallyHidden}>This week</h3>
              <ul className={s.tiles}>
                {latest.map((p) => (
                  <li key={p.slug} className={s.tile}>
                    <a href={`${aan.base}${aan.posts[p.slug].path}`} rel="noopener">
                      <img
                        src={`${aan.base}${aan.posts[p.slug].path}slide-01.webp`}
                        alt={`Cover of the post: ${p.title}`}
                        width={720}
                        height={900}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className={s.tileTitle}>{p.title}</span>
                      <span className={s.credit}>{longDate(p.date)} · slide 1, Ask a Neuroscientist</span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <ul className={s.rows} style={{ marginTop: "var(--s2)" }}>
            <Row e={hub.aan.site} />
            <Row e={{ label: "Ask a question", url: ASK_FORM, note: "RN reads every one" }} />
            {today >= "2026-11-30" && <Row e={{ label: "Reader Q&A", url: "https://askaneuroscientist.vercel.app/reader-qa/", note: "Questions readers asked, answered" }} />}
          </ul>
          <Platforms set="aan" />
        </section>

        <section className={s.section} aria-labelledby="rn">
          <h2 id="rn" className={s.label}>RN Collins</h2>
          <ul className={s.rows} style={{ borderTop: 0 }}>
            <Row e={hub.workWithMe as Entry} primary />
            <Row e={hub.linkedin} />
            <Row e={hub.rn.site} />
            <Row e={hub.newsletter} />
          </ul>
          <Platforms set="rn" />
        </section>

        <section className={s.section} aria-labelledby="sources">
          <h2 id="sources" className={s.label}>Sources</h2>
          <ul className={s.rows}>
            <Row e={hub.sources} />
          </ul>
        </section>

        <section className={s.section} aria-labelledby="email">
          <h2 id="email" className={s.label}>Email</h2>
          <ul className={s.rows}>
            {hub.email.map((m) => (
              <li
                key={m.label}
                dangerouslySetInnerHTML={{
                  __html: `<a class="${s.row}" href="${entities(`mailto:${m.address}`)}"><span class="${s.rowLabel}">${m.label.replace(/&/g, "&amp;")}</span><span class="${s.rowNote}">${entities(m.address)}</span><span class="${s.arrow}" aria-hidden="true">→</span></a>`,
                }}
              />
            ))}
          </ul>
        </section>

        <footer className={s.foot}>
          <p>Ask a Neuroscientist is education, not medical advice.</p>
        </footer>
      </div>
    </main>
  );
}
