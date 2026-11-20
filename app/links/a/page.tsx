import type { Metadata } from "next";
import p from "../../../components/puffy.module.css";
import a from "./a.module.css";
import { DragBoard } from "../../../components/card/drag-board";
import { Glyph } from "../../../components/social-row";
import { platforms, extras, emails, title, tagline, entities, thisWeek, mjbizcon } from "../../../lib/card-links";

// Direction A, "sticker lab book": a graph-paper page of AaN's puffy stickers (kit v3.1 style). Drag them around;
// a tap opens the link. Preview for RN only (noindex).
export const revalidate = 3600;
export const metadata: Metadata = { title: "Direction A: sticker lab book", robots: { index: false, follow: false } };

// Two staggered columns so even the longest sticker stays on a 360 px phone screen.
const PLACES = [
  [3, 3, -6], [44, 1, 5], [8, 10, 3], [46, 12, -4], [2, 20, 4], [42, 22, -7], [6, 30, -3], [46, 33, 6],
  [2, 41, 5], [38, 44, -5], [5, 52, 3], [40, 55, -6], [3, 63, 4], [42, 66, -2], [6, 75, 7], [44, 78, 3],
];

export default function DirectionA() {
  const live = mjbizcon();
  const items = [
    ...extras.filter((e) => e.id === "work" || e.id === "linkedin" || e.id === "ask"),
    ...platforms("aan"),
    ...platforms("rn"),
    ...extras.filter((e) => !["work", "linkedin", "ask"].includes(e.id)),
  ];
  const week = thisWeek();
  return (
    <main className={a.page}>
      <header className={a.head}>
        <img className={a.brain} src="/stickers/brand-brain.svg" alt="" width={140} height={140} />
        <h1 className={a.name}>RN Collins</h1>
        <p className={a.title}>{title}</p>
        <a className={`${p.sticker} ${p.ink} ${p.big}`} href="/rn-collins-card.vcf" download="RN-Collins.vcf" style={{ ["--r" as string]: "-2deg" }}>
          Save my contact
        </a>
      </header>

      {live ? (
        <p className={a.live}>
          <span className={`${p.sticker} ${p.coral}`}>● {live.heading}</span> {live.note}
        </p>
      ) : null}

      <p className={a.tagline}>
        <span className={a.tape}>Ask a Neuroscientist</span> {tagline}
      </p>

      <p className={a.hint}>Drag the stickers. Tap one to open it.</p>
      <DragBoard className={a.board}>
        {items.map((it, i) => {
          const [x, y, r] = PLACES[i % PLACES.length];
          const icon = it.id.split("-").pop() ?? "";
          return (
            <a
              key={it.id}
              data-drag
              href={it.url}
              aria-label={it.label}
              className={`${p.sticker} ${p[it.tone]} ${p.pop} ${a.placed}`}
              style={{ left: `${x}%`, top: `${y}%`, ["--r" as string]: `${r}deg`, ["--d" as string]: `${i * 60}ms` }}
              {...(/^https?:/.test(it.url) ? { rel: "noopener" } : {})}
            >
              {["instagram", "tiktok", "youtube", "bluesky", "pinterest", "linkedin"].includes(icon) ? (
                <span className={p.icon}><Glyph id={icon} /></span>
              ) : null}
              {it.brand === "rn" && it.id.startsWith("rn-") ? `RN · ${it.short}` : it.short}
            </a>
          );
        })}
        <img className={a.deco} src="/stickers/sparkle.svg" alt="" width={70} height={70} style={{ left: "84%", top: "33%" }} />
        <img className={a.deco} src="/stickers/star.svg" alt="" width={64} height={64} style={{ left: "34%", top: "88%" }} />
        <img className={a.deco} src="/stickers/brand-leaf.svg" alt="" width={86} height={86} style={{ left: "80%", top: "70%" }} />
      </DragBoard>

      {week.length ? (
        <section className={a.week}>
          <h2 className={a.tape}>New this week</h2>
          <ul>
            {week.map((w, i) => (
              <li key={w.href} style={{ rotate: `${[-3, 2, -1][i]}deg` }}>
                <a href={w.href} rel="noopener">
                  <img src={w.cover} alt={`Cover of the post: ${w.title}`} width={720} height={900} loading="lazy" />
                  <span>{w.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className={a.mail}>
        <h2 className={a.tape}>Email</h2>
        <ul>
          {emails.map((m) => (
            <li
              key={m.label}
              dangerouslySetInnerHTML={{
                __html: `<a href="${entities(`mailto:${m.address}`)}"><b>${m.label.replace(/&/g, "&amp;")}</b><span>${entities(m.address)}</span></a>`,
              }}
            />
          ))}
        </ul>
      </section>
      <p className={a.foot}>Stickers: Ask a Neuroscientist&apos;s own kit, drawn in code. Ask a Neuroscientist is education, not medical advice.</p>
    </main>
  );
}
