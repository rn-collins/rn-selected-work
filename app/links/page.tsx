import type { Metadata, Viewport } from "next";
import hub from "../../data/links-hub.json";
import social from "../../data/social-links.json";
import aanSite from "../../data/aan-site.json";
import { postedSoFar, longDate } from "../../lib/aan-sources";
import { hawaiiToday } from "../../lib/releases";
import { Glyph } from "../../components/social-row";
import g from "./genz.module.css";

// The link hub on RN's business card (QR code and NFC; printed as /l). Gen Z and Gen Alpha version (RN, Nov 20):
// both brands' colours and type, with paper grain, sticker labels, an app-icon grid (Instagram and TikTok first for
// AaN, LinkedIn first for RN) and a swipeable strip of this week's covers. Server-rendered, no client script, no
// trackers. "This week" shows only posts live on the AaN site; the MJBizCon block shows only on its Hawaii dates.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "RN Collins: links",
  description: `RN Collins, ${hub.title}. Ask a Neuroscientist, RN Selected Work, The Polymath and how to get in touch.`,
  alternates: { canonical: "/links" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f4efe4" };

type Account = { id: string; label: string; url: string };
type Entry = { label: string; url: string; note?: string; confirm?: boolean };
type Dated = { releasedAt: string; hold: boolean; path: string };
const accounts = social as Record<"rn" | "aan", { name: string; accounts: Account[] }>;
const leaveOut = hub.leaveOut as Record<"rn" | "aan", string[]>;
const aan = aanSite as unknown as { base: string; posts: Record<string, Dated> };

// The order people tap: where RN posts updates first.
const ORDER: Record<"rn" | "aan", string[]> = {
  aan: ["instagram", "tiktok", "youtube", "bluesky", "pinterest"],
  rn: ["instagram", "tiktok", "youtube", "bluesky"],
};

function handle(url: string) {
  const m = url.match(/\/(@?[\w.-]+)\/?$/);
  return m ? (m[1].startsWith("@") ? m[1] : `@${m[1]}`) : "";
}
const entities = (t: string) => Array.from(t, (c) => `&#${c.codePointAt(0)};`).join("");

function Apps({ set, lead }: { set: "rn" | "aan"; lead?: { label: string; url: string; note: string; glyph: string } }) {
  const list = accounts[set].accounts
    .filter((a) => !leaveOut[set].includes(a.id))
    .sort((a, b) => ORDER[set].indexOf(a.id) - ORDER[set].indexOf(b.id));
  return (
    <ul className={`${g.apps} ${set === "aan" ? g.aanApps : g.rnApps}`} aria-label={`${accounts[set].name} on social platforms`}>
      {lead ? (
        <li className={`${g.app} ${g.big}`}>
          <a href={lead.url} rel="noopener">
            <Glyph id={lead.glyph} />
            <span>
              <span className={g.appName}>{lead.label}</span>
              <br />
              <span className={g.appHandle}>{lead.note}</span>
            </span>
          </a>
        </li>
      ) : null}
      {list.map((a) => (
        <li key={a.id} className={g.app}>
          <a href={a.url} rel="noopener" aria-label={`${accounts[set].name} on ${a.label}, ${handle(a.url)}`}>
            <Glyph id={a.id} />
            <span className={g.appName}>{a.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Row({ e, primary = false }: { e: Entry; primary?: boolean }) {
  if (e.confirm) return null;
  const external = /^https?:/.test(e.url);
  return (
    <li>
      <a className={`${g.row} ${primary ? g.primary : ""}`} href={e.url} {...(external ? { rel: "noopener" } : {})}>
        <span className={g.rowLabel}>{e.label}</span>
        {e.note ? <span className={g.rowNote}>{e.note}</span> : null}
        <span className={g.arrow} aria-hidden="true">→</span>
      </a>
    </li>
  );
}

export default function LinksPage() {
  const today = hawaiiToday();
  const dated = hub.dated.filter((d) => d.from <= today && today <= d.to);
  const live = (p?: Dated) => !!p && !p.hold && p.releasedAt !== "" && p.releasedAt <= today;
  const latest = postedSoFar().filter((p) => live(aan.posts[p.slug])).slice(-3).reverse();
  return (
    <main className={g.page}>
      <div className={g.wrap}>
        <header className={g.head}>
          <h1 className={g.name}>RN Collins</h1>
          <p className={g.title}>{hub.title}</p>
          <div className={g.actions}>
            <a className={`${g.pill} ${g.dark}`} href="/rn-collins-card.vcf" download="RN-Collins.vcf">Save my contact</a>
            <a className={g.pill} href="https://askaneuroscientist.vercel.app/questions/" rel="noopener">Ask me a brain question</a>
          </div>
        </header>

        {dated.map((d) => (
          <section key={d.from} className={g.live} aria-labelledby={`live-${d.from}`}>
            <h2 id={`live-${d.from}`} className={`${g.sticker} ${g.stickerPop}`} style={{ marginTop: 0 }}>
              <span className={g.liveDot} aria-hidden="true" />{d.heading}
            </h2>
            <p className={g.rowNote}>{d.note}</p>
            <ul className={g.rows}>
              {d.links.map((l) => (
                <Row key={l.url} e={{ label: l.label, url: l.url, note: l.handle }} />
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="aan">
          <h2 id="aan" className={`${g.sticker} ${g.stickerAan}`}>Ask a Neuroscientist</h2>
          <p className={g.tagline}>{hub.aan.tagline}</p>
          <Apps set="aan" />
          {latest.length ? (
            <>
              <h3 className={`${g.sticker} ${g.stickerPop}`}>New this week</h3>
              <ul className={g.strip}>
                {latest.map((p) => (
                  <li key={p.slug}>
                    <a href={`${aan.base}${aan.posts[p.slug].path}`} rel="noopener">
                      <img src={`${aan.base}${aan.posts[p.slug].path}slide-01.webp`} alt={`Cover of the post: ${p.title}`} width={720} height={900} loading="lazy" decoding="async" />
                      <span className={g.stripTitle}>{p.title}</span>
                      <span className={g.credit}>{longDate(p.date)} · slide 1, Ask a Neuroscientist</span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <ul className={g.rows}>
            <Row e={{ ...hub.aan.site, note: "Every post, slide by slide" }} />
          </ul>
        </section>

        <section aria-labelledby="rn">
          <h2 id="rn" className={`${g.sticker} ${g.stickerRn}`}>RN Collins</h2>
          <Apps set="rn" lead={{ label: "LinkedIn", url: hub.linkedin.url, note: "Research carousels, every day", glyph: "linkedin" }} />
          <ul className={g.rows}>
            <Row e={hub.workWithMe as Entry} primary />
            <Row e={hub.newsletter} />
            <Row e={hub.rn.site} />
            <Row e={hub.sources} />
          </ul>
        </section>

        <section aria-labelledby="email">
          <h2 id="email" className={`${g.sticker} ${g.stickerPop}`}>Email</h2>
          <ul className={g.rows}>
            {hub.email.map((m) => (
              <li
                key={m.label}
                dangerouslySetInnerHTML={{
                  __html: `<a class="${g.row}" href="${entities(`mailto:${m.address}`)}"><span class="${g.rowLabel}">${m.label.replace(/&/g, "&amp;")}</span><span class="${g.rowNote}">${entities(m.address)}</span><span class="${g.arrow}" aria-hidden="true">→</span></a>`,
                }}
              />
            ))}
          </ul>
        </section>

        <footer className={g.foot}>
          <p>Ask a Neuroscientist is education, not medical advice.</p>
        </footer>
      </div>
    </main>
  );
}
