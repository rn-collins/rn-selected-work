import type { Metadata } from "next";
import c from "./c.module.css";
import { Glyph } from "../../../components/social-row";
import { platforms, extras, emails, title, tagline, entities, thisWeek, mjbizcon, type CardLink } from "../../../lib/card-links";

// Direction C, "your own phone OS": the page is a home screen. Glossy Y2K app icons (AaN palette), a "now posting"
// ticker, widgets (this week's covers, MJBizCon live on its dates) and a dock with the four most-used links.
// No JavaScript; motion only without reduced motion. Preview for RN only (noindex).
export const revalidate = 3600;
export const metadata: Metadata = { title: "Direction C: your own phone OS", robots: { index: false, follow: false } };

const GLYPH_IDS = ["instagram", "tiktok", "youtube", "bluesky", "pinterest", "linkedin"];
const MARK: Record<string, string> = { work: "✦", ask: "?", "aan-site": "AaN", polymath: "P", rnsw: "RN", sources: "§" };

function Icon({ it, i }: { it: CardLink; i: number }) {
  const g = it.id.split("-").pop() ?? "";
  return (
    <li className={c.app} style={{ ["--i" as string]: i }}>
      <a href={it.url} aria-label={it.label} {...(/^https?:/.test(it.url) ? { rel: "noopener" } : {})}>
        <span className={`${c.tile} ${c[it.tone]}`}>
          {GLYPH_IDS.includes(g) ? <span className={c.glyph}><Glyph id={g} /></span> : <span className={c.mark}>{MARK[it.id] ?? it.short[0]}</span>}
          {it.brand === "rn" && it.id.startsWith("rn-") ? <span className={c.badge}>RN</span> : null}
        </span>
        <span className={c.appName}>{it.short}</span>
      </a>
    </li>
  );
}

export default function DirectionC() {
  const live = mjbizcon();
  const week = thisWeek();
  const dock = ["work", "linkedin", "ask", "save"];
  const save: CardLink = { id: "save", label: "Save my contact", short: "Save", url: "/rn-collins-card.vcf", brand: "rn", tone: "ink" };
  const all = [...extras, save];
  const apps = [...platforms("aan"), ...platforms("rn"), ...extras.filter((e) => !dock.includes(e.id))];
  return (
    <main className={c.page}>
      <div className={c.phone}>
        <header className={c.status}>
          <span>RN Collins</span>
          <span aria-hidden="true">◉ ◉ ◉</span>
        </header>

        <section className={c.widgetBig}>
          <h1 className={c.name}>RN Collins</h1>
          <p className={c.title}>{title}</p>
          <p className={c.ticker} aria-label="Now posting: Ask a Neuroscientist on Instagram and TikTok, research carousels on LinkedIn">
            <span>NOW POSTING · Ask a Neuroscientist on Instagram + TikTok · research carousels on LinkedIn · {tagline} · </span>
            <span aria-hidden="true">NOW POSTING · Ask a Neuroscientist on Instagram + TikTok · research carousels on LinkedIn · {tagline} · </span>
          </p>
        </section>

        {live ? (
          <section className={c.widgetLive}>
            <b>● {live.heading}</b>
            <span>{live.note}</span>
          </section>
        ) : null}

        {week.length ? (
          <section className={c.widgetWeek} aria-label="New this week">
            <b>New this week</b>
            <ul>
              {week.map((w) => (
                <li key={w.href}><a href={w.href} rel="noopener"><img src={w.cover} alt={`Cover of the post: ${w.title}`} width={720} height={900} loading="lazy" /></a></li>
              ))}
            </ul>
          </section>
        ) : null}

        <ul className={c.grid}>
          {apps.map((it, i) => <Icon key={it.id} it={it} i={i} />)}
        </ul>

        <section className={c.mail} aria-label="Email">
          {emails.map((m) => (
            <p key={m.label} dangerouslySetInnerHTML={{ __html: `<a href="${entities(`mailto:${m.address}`)}"><b>✉ ${m.label.replace(/&/g, "&amp;")}</b><span>${entities(m.address)}</span></a>` }} />
          ))}
        </section>

        <nav className={c.dock} aria-label="Most used">
          <ul>
            {dock.map((id, i) => {
              const it = all.find((x) => x.id === id)!;
              return id === "save" ? (
                <li key={id} className={c.app} style={{ ["--i" as string]: i }}>
                  <a href={it.url} download="RN-Collins.vcf" aria-label="Save my contact">
                    <span className={`${c.tile} ${c.sun}`}><span className={c.mark}>＋</span></span>
                    <span className={c.appName}>Save</span>
                  </a>
                </li>
              ) : <Icon key={id} it={it} i={i} />;
            })}
          </ul>
        </nav>
      </div>
      <p className={c.foot}>Ask a Neuroscientist is education, not medical advice.</p>
    </main>
  );
}
