import type { Metadata } from "next";
import p from "../../../components/puffy.module.css";
import b from "./b.module.css";
import { platforms, extras, emails, title, tagline, entities, mjbizcon } from "../../../lib/card-links";

// Direction B, "the brain you can tap": an illustrated brain drawn in code; each region is a link, labelled with what
// that region actually does. Every region is a real <a> in the SVG, so it works without JavaScript and with a keyboard.
// Preview for RN only (noindex).
export const revalidate = 3600;
export const metadata: Metadata = { title: "Direction B: the brain you can tap", robots: { index: false, follow: false } };

const by = (id: string) => [...extras, ...platforms("aan"), ...platforms("rn")].find((x) => x.id === id)!;

// Region shapes on a 400 x 300 side view (front of the head on the left).
const REGIONS = [
  { key: "frontal", name: "Frontal lobe", does: "plans what you do next", link: by("work"), tone: "#143427", d: "M58 172 C34 112 80 48 162 44 C186 43 200 47 206 51 L192 150 C152 160 112 176 58 172Z", lx: 112, ly: 108 },
  { key: "parietal", name: "Parietal lobe", does: "feels touch and tracks movement", link: by("aan-tiktok"), tone: "#0f6e6a", d: "M206 51 C262 49 312 70 332 110 L252 141 L192 150Z", lx: 262, ly: 92 },
  { key: "occipital", name: "Occipital lobe", does: "makes sense of what you see", link: by("aan-instagram"), tone: "#e8735a", d: "M332 110 C357 141 357 181 332 201 L272 191 L252 141Z", lx: 318, ly: 156 },
  { key: "temporal", name: "Temporal lobe", does: "hears and understands language", link: by("ask"), tone: "#f2b81c", d: "M58 172 C112 176 152 160 192 150 L252 141 L272 191 C232 216 152 226 100 206 C80 196 66 186 58 172Z", lx: 170, ly: 190 },
  { key: "cerebellum", name: "Cerebellum", does: "gets better with daily practice", link: by("linkedin"), tone: "#5b7f9a", d: "M272 191 L332 201 C342 226 317 251 282 246 C257 241 247 216 272 191Z", lx: 300, ly: 226 },
  { key: "stem", name: "Brainstem", does: "keeps the basics running", link: { id: "save", label: "Save my contact", short: "Save my contact", url: "/rn-collins-card.vcf", brand: "rn" as const, tone: "ink" as const }, tone: "#7a5c8f", d: "M236 214 C246 230 251 260 246 292 L226 292 C223 262 221 240 223 220Z", lx: 236, ly: 270 },
];

export default function DirectionB() {
  const live = mjbizcon();
  const rest = [...platforms("aan").filter((x) => x.id !== "aan-instagram" && x.id !== "aan-tiktok"), ...platforms("rn"), ...extras.filter((e) => !["work", "ask", "linkedin"].includes(e.id))];
  return (
    <main className={b.page}>
      <header className={b.head}>
        <h1 className={b.name}>RN Collins</h1>
        <p className={b.title}>{title}</p>
        {live ? <p className={`${p.sticker} ${p.coral}`}>● {live.heading}: {live.note}</p> : null}
      </header>

      <p className={b.prompt}>Tap a part of the brain.</p>
      <svg className={b.brain} viewBox="0 0 400 300" role="group" aria-label="A brain, each part a link">
        <defs>
          <filter id="puff" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#143427" floodOpacity=".28" />
          </filter>
          <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".45" />
            <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g filter="url(#puff)">
          {REGIONS.map((r) => (
            <a key={r.key} href={r.link.url} className={b.region} aria-label={`${r.name}, which ${r.does}: ${r.link.label}`} {...(r.link.url.endsWith(".vcf") ? { download: "RN-Collins.vcf" } : /^https?:/.test(r.link.url) ? { rel: "noopener" } : {})}>
              <path d={r.d} fill={r.tone} stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
              <path d={r.d} fill="url(#gloss)" />
            </a>
          ))}
        </g>
        {/* Gyri: a few curved folds so it reads as a brain */}
        <g className={b.folds} fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="2.5" strokeLinecap="round">
          <path d="M96 120 C112 100 132 100 142 84" /><path d="M120 150 C136 132 160 132 170 112" /><path d="M150 70 C164 82 178 80 190 92" />
          <path d="M232 76 C246 90 266 86 280 100" /><path d="M300 128 C312 140 316 156 312 172" /><path d="M120 196 C150 196 180 184 214 178" />
          <path d="M286 214 C300 210 314 214 322 222" /><path d="M280 228 C296 226 310 232 316 240" />
        </g>
        {REGIONS.map((r) => (
          <text key={`t-${r.key}`} x={r.lx} y={r.ly} className={b.tag} textAnchor="middle">{r.link.short}</text>
        ))}
      </svg>

      <ol className={b.key}>
        {REGIONS.map((r) => (
          <li key={r.key}>
            <a href={r.link.url} className={b.keyRow} {...(r.link.url.endsWith(".vcf") ? { download: "RN-Collins.vcf" } : /^https?:/.test(r.link.url) ? { rel: "noopener" } : {})}>
              <span className={b.swatch} style={{ background: r.tone }} />
              <span><b>{r.link.short}</b><small>{r.name}: {r.does}</small></span>
            </a>
          </li>
        ))}
      </ol>

      <p className={b.tagline}>{tagline}</p>
      <ul className={b.rest}>
        {rest.map((it) => (
          <li key={it.id}>
            <a href={it.url} className={`${p.sticker} ${p[it.tone]}`} {...(/^https?:/.test(it.url) ? { rel: "noopener" } : {})}>
              {it.id.startsWith("rn-") ? `RN · ${it.short}` : it.short}
            </a>
          </li>
        ))}
      </ul>

      <section className={b.mail}>
        <h2>Email</h2>
        <ul>
          {emails.map((m) => (
            <li key={m.label} dangerouslySetInnerHTML={{ __html: `<a href="${entities(`mailto:${m.address}`)}"><b>${m.label.replace(/&/g, "&amp;")}</b><span>${entities(m.address)}</span></a>` }} />
          ))}
        </ul>
      </section>
      <p className={b.foot}>Brain drawn in code for this page; regions simplified. Ask a Neuroscientist is education, not medical advice.</p>
    </main>
  );
}
