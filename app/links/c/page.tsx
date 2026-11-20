import type { Metadata, Viewport } from "next";
import c from "./c.module.css";
import p from "../../../components/puffy.module.css";
import { Glyph } from "../../../components/social-row";
import { Clock } from "../../../components/card/clock";
import { StickerPlay } from "../../../components/card/sticker-play";
import { ScreenDots } from "../../../components/card/screen-dots";
import { platforms, extras, emails, title, tagline, entities, thisWeek, mjbizcon, type CardLink } from "../../../lib/card-links";

// Direction C, "your own phone OS" (RN picked it, Nov 20), with A's draggable motion stickers (RN: "with A's
// draggable AND interactive with motion stickers"). A phone in a generic frame on wide screens; on a phone it fills
// the screen. Two home screens you swipe between (CSS scroll-snap, so it swipes without JavaScript): Ask a
// Neuroscientist, then RN Collins, each holding only its own accounts. The dock is shared. Email opens as a sheet
// (CSS :target). Preview for RN only (noindex).
export const revalidate = 3600;
export const metadata: Metadata = { title: "RN Collins: links (phone preview)", robots: { index: false, follow: false } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#143427" };

const GLYPH_IDS = ["instagram", "tiktok", "youtube", "bluesky", "pinterest", "linkedin"];
const byId = (id: string) => extras.find((e) => e.id === id)!;
const ext = (url: string) => (/^https?:/.test(url) ? { rel: "noopener" } : {});

type App = CardLink & { img?: string; mark?: string; badge: "AaN" | "RN" };

function Icon({ it, i }: { it: App; i: number }) {
  const g = it.id.split("-").pop() ?? "";
  return (
    <li className={c.app} style={{ ["--i" as string]: i }}>
      <a href={it.url} aria-label={it.label} {...ext(it.url)} {...(it.url.endsWith(".vcf") ? { download: "RN-Collins.vcf" } : {})}>
        <span className={`${c.tile} ${c[it.tone]}`}>
          {it.img ? <img className={c.img} src={it.img} alt="" width={96} height={96} /> : GLYPH_IDS.includes(g) ? <span className={c.glyph}><Glyph id={g} /></span> : <span className={c.mark}>{it.mark ?? it.short[0]}</span>}
          <span className={`${c.badge} ${it.badge === "AaN" ? c.badgeAan : c.badgeRn}`}>{it.badge}</span>
        </span>
        <span className={c.appName}>{it.short}</span>
      </a>
    </li>
  );
}

export default function PhoneOS() {
  const live = mjbizcon();
  const week = thisWeek();
  const aanP = platforms("aan");
  const rnP = platforms("rn");
  const pick = (list: CardLink[], id: string) => list.find((x) => x.id === id)!;

  // Screen 1: Ask a Neuroscientist. YouTube moved out of the top row (RN, Nov 20).
  const aanApps: App[] = [
    { ...pick(aanP, "aan-instagram"), badge: "AaN" },
    { ...pick(aanP, "aan-tiktok"), badge: "AaN" },
    { ...pick(aanP, "aan-bluesky"), badge: "AaN" },
    { ...pick(aanP, "aan-pinterest"), badge: "AaN" },
    { ...pick(aanP, "aan-youtube"), badge: "AaN" },
    { ...byId("aan-site"), short: "AaN site", mark: "AaN", badge: "AaN" },
    { ...byId("sources"), short: "Sources", mark: "§", badge: "AaN" },
    { ...byId("ask"), short: "Ask a question", mark: "?", badge: "AaN" },
  ];
  // Screen 2: RN Collins. RN Selected Work first (RN, Nov 20); The Polymath shows the beehiiv icon.
  const rnApps: App[] = [
    { ...byId("rnsw"), short: "Selected Work", img: "/rnc-icons/rn.png", badge: "RN" },
    { ...byId("linkedin"), short: "LinkedIn", badge: "RN" },
    { ...pick(rnP, "rn-instagram"), badge: "RN" },
    { ...pick(rnP, "rn-tiktok"), badge: "RN" },
    { ...pick(rnP, "rn-youtube"), badge: "RN" },
    { ...pick(rnP, "rn-bluesky"), badge: "RN" },
    { ...byId("polymath"), short: "The Polymath", img: "/rnc-icons/beehiiv.png", tone: "paper", badge: "RN" },
    { ...byId("work"), short: "Work with me", mark: "✦", badge: "RN" },
  ];
  const dock: App[] = [
    { ...byId("rnsw"), short: "Selected Work", img: "/rnc-icons/rn.png", badge: "RN" },
    { id: "email", label: "Email RN Collins", short: "Email", url: "#email", brand: "both", tone: "teal", mark: "✉", badge: "RN" },
    { id: "save", label: "Save my contact", short: "Save", url: "/rn-collins-card.vcf", brand: "rn", tone: "sun", mark: "＋", badge: "RN" },
    { ...byId("ask"), short: "Ask", mark: "?", badge: "AaN" },
  ];

  return (
    <main className={c.page}>
      <div className={c.device}>
        <div className={c.screenGlass}>
          <header className={c.status}>
            <Clock />
            <span className={c.camera} aria-hidden="true" />
            <span className={c.indicators} aria-hidden="true">
              <span className={c.signal}><i /><i /><i /><i /></span>
              <span className={c.battery}><i /></span>
            </span>
          </header>

          <div className={c.screens}>
            <section id="aan-screen" className={`${c.screen} ${c.wallAan}`} aria-labelledby="aan-h">
              <StickerPlay className={c.stickers}>
                <a href={byId("ask").url} rel="noopener" data-sticker className={c.sticker} style={{ left: "48%", top: "66%", ["--r" as string]: "10deg" }} aria-label="Ask me a brain question">
                  <img src="/stickers/brand-brain.svg" alt="" width={120} height={120} />
                </a>
                <span data-sticker className={c.sticker} style={{ left: "6%", top: "68%", ["--r" as string]: "-8deg" }}><img src="/stickers/sparkle.svg" alt="" width={70} height={70} /></span>
                <span data-sticker className={c.sticker} style={{ left: "74%", top: "84%", ["--r" as string]: "12deg" }}><img src="/stickers/brand-leaf.svg" alt="" width={84} height={84} /></span>
                <span data-sticker className={c.sticker} style={{ left: "28%", top: "86%", ["--r" as string]: "-6deg" }}><img src="/stickers/star.svg" alt="" width={62} height={62} /></span>
              </StickerPlay>
              <div className={c.widget}>
                <h1 className={c.name}>RN Collins</h1>
                <p className={c.title}>{title}</p>
                <h2 id="aan-h" className={c.brand}>Ask a Neuroscientist</h2>
                <p className={c.ticker} aria-label={tagline}>
                  <span>{tagline} · NOW POSTING on Instagram + TikTok · </span>
                  <span aria-hidden="true">{tagline} · NOW POSTING on Instagram + TikTok · </span>
                </p>
              </div>
              {live ? (
                <div className={`${c.widget} ${c.liveWidget}`}>
                  <b>● {live.heading}</b>
                  <span>{live.note}</span>
                </div>
              ) : null}
              {week.length ? (
                <div className={c.widget} aria-label="New this week">
                  <b className={c.small}>New this week</b>
                  <ul className={c.week}>
                    {week.map((w) => (
                      <li key={w.href}><a href={w.href} rel="noopener"><img src={w.cover} alt={`Cover of the post: ${w.title}`} width={720} height={900} loading="lazy" /></a></li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <ul className={c.grid}>{aanApps.map((it, i) => <Icon key={it.id} it={it} i={i} />)}</ul>
            </section>

            <section id="rn-screen" className={`${c.screen} ${c.wallRn}`} aria-labelledby="rn-h">
              <StickerPlay className={c.stickers}>
                <a href="/work-with-me" data-sticker className={c.sticker} style={{ left: "24%", top: "72%", ["--r" as string]: "-7deg" }}><span className={`${p.sticker} ${p.ink}`}>Work with me ✦</span></a>
                <span data-sticker className={c.sticker} style={{ left: "6%", top: "84%", ["--r" as string]: "9deg" }}><img src="/stickers/star.svg" alt="" width={66} height={66} /></span>
                <span data-sticker className={c.sticker} style={{ left: "74%", top: "78%", ["--r" as string]: "-12deg" }}><img src="/stickers/brand-sparkle.svg" alt="" width={76} height={76} /></span>
              </StickerPlay>
              <div className={c.widget}>
                <h2 id="rn-h" className={c.name}>RN Collins</h2>
                <p className={c.title}>{title}</p>
                <p className={c.ticker} aria-label="Research carousels on LinkedIn every day">
                  <span>RESEARCH CAROUSELS ON LINKEDIN, EVERY DAY · THE POLYMATH ON BEEHIIV · </span>
                  <span aria-hidden="true">RESEARCH CAROUSELS ON LINKEDIN, EVERY DAY · THE POLYMATH ON BEEHIIV · </span>
                </p>
              </div>
              <ul className={c.grid}>{rnApps.map((it, i) => <Icon key={it.id} it={it} i={i} />)}</ul>
            </section>
          </div>

          <ScreenDots className={c.dots} items={[{ href: "#aan-screen", label: "Ask a Neuroscientist screen" }, { href: "#rn-screen", label: "RN Collins screen" }]} />

          <nav className={c.dock} aria-label="Dock">
            <ul>{dock.map((it, i) => <Icon key={it.id} it={it} i={i} />)}</ul>
          </nav>
          <span className={c.homeBar} aria-hidden="true" />

          <section id="email" className={c.sheet} aria-labelledby="email-h">
            <div className={c.sheetCard}>
              <a href="#aan-screen" className={c.close} aria-label="Close">×</a>
              <h2 id="email-h">Email RN</h2>
              {emails.map((m) => (
                <p key={m.label} dangerouslySetInnerHTML={{ __html: `<a href="${entities(`mailto:${m.address}`)}"><b>${m.label.replace(/&/g, "&amp;")}</b><span>${entities(m.address)}</span></a>` }} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <p className={c.foot}>Swipe between the two screens. Drag the stickers; tap one to play. Stickers: Ask a Neuroscientist&apos;s own kit. Ask a Neuroscientist is education, not medical advice.</p>
    </main>
  );
}
