import type { ReactNode } from "react";
import QRCode from "qrcode";
import { host, longDate, type SourcePost } from "../lib/aan-sources";
import { hawaiiToday } from "../lib/releases";
import aanSite from "../data/aan-site.json";
import { ClientLine } from "./sources-detail";
import { SocialRow } from "./social-row";
import s from "./lab-book.module.css";

// The lab-book sources page (RN's source-page standard, aan-studio/design/SOURCE-PAGE-STANDARD.md, Nov 20, 2026).
// Organised (RN, Nov 20: "how to better organize those pages and where's each thing"):
// 1. An index card at the top lists all 16 sections under fixed numbers. Sections the post has are links; the rest
//    are greyed out with the reason, so nothing is silently missing.
// 2. "Find your way" stickers send each kind of reader (from the standard's reader table) to their sections.
// 3. Long sections show their first few items and fold the rest behind a "Show all" sticker (<details>, no script).
// 4. On wide screens a sidebar stays pinned: contents, the how-sure sticker, the QR code and short link.
// 5. Order: the reading part, then the reference part, then the sections that only some posts need, then the back
//    matter. Every section keeps its number on every page, so "section 7" always means images and charts.
// The reader layers come from the package's sources_extra.json (lib/aan-sources.ts SourcesExtra); references and
// image credits from the export. Server-rendered, works with JavaScript off, no trackers.

const SITE = "https://rn-selected-work.vercel.app";
const AAN = "https://askaneuroscientist.vercel.app";

const SURE: Record<string, { label: string; tone: string }> = {
  strong: { label: "Strong evidence", tone: s.forest },
  moderate: { label: "Moderate evidence", tone: s.teal },
  early: { label: "Early evidence", tone: s.sun },
  mixed: { label: "Mixed evidence", tone: s.coral },
};
const GROUPS: [string, string][] = [["primary", "Primary studies"], ["review", "Reviews and meta-analyses"], ["official", "Official documents"], ["book", "Books"], ["secondary", "Reporting and commentary"]];

// The 16 sections: fixed number, anchor, title, and the part of the page they sit in.
const PARTS = [
  { part: "Read", items: [[1, "start", "Start here"], [2, "claims", "The claim, the evidence"], [3, "could-be-wrong", "Where this could be wrong"], [4, "go-deeper", "Go deeper"], [5, "listen-watch", "Listen and watch"]] },
  { part: "Look it up", items: [[6, "bibliography", "Annotated bibliography"], [7, "images", "Images and charts"], [8, "glossary", "Glossary"]] },
  { part: "When it applies", items: [[9, "law", "Law and policy"], [10, "clinical", "For clinicians and patients"], [11, "safety", "Safety and support"], [12, "history", "History and culture"]] },
  { part: "Use and share", items: [[13, "related", "Related"], [14, "corrections", "Corrections and updates"], [15, "cite", "Cite this page and share"], [16, "ask", "Ask or suggest"]] },
] as const;
type Id = (typeof PARTS)[number]["items"][number][1];
const NUM = Object.fromEntries(PARTS.flatMap((p) => p.items.map(([n, id]) => [id, n]))) as Record<Id, number>;
const TITLE = Object.fromEntries(PARTS.flatMap((p) => p.items.map(([, id, t]) => [id, t]))) as Record<Id, string>;
const SITUATIONAL: Id[] = ["law", "clinical", "safety", "history"];

// Who reads these pages (the standard's reader table), and where each should go first.
const READERS: { who: string; to: Id[]; tone: string }[] = [
  { who: "New to this", to: ["start", "go-deeper"], tone: s.sun },
  { who: "Skeptic", to: ["could-be-wrong", "claims"], tone: s.coral },
  { who: "Clinician or patient", to: ["clinical", "safety", "claims"], tone: s.teal },
  { who: "Student or researcher", to: ["bibliography", "images"], tone: s.forest },
  { who: "Journalist or educator", to: ["cite", "images", "corrections"], tone: s.paper },
  { who: "Policy or law", to: ["law", "claims"], tone: s.teal },
];

// One plain line under each label: what the section is for (art direction pass, RN Nov 20).
const BLURB: Record<Id, string> = {
  start: "The short version, and how sure the evidence is.",
  claims: "Each claim in the post, and exactly where in the source it comes from.",
  "could-be-wrong": "Limits, critiques and open questions, each with its source.",
  "go-deeper": "Where to read next, by how deep you want to go.",
  "listen-watch": "Talks and podcasts, only ones watched or read in transcript.",
  bibliography: "Every source, what it found, and who paid for it.",
  images: "Who made each image, its licence, and the data behind our charts.",
  glossary: "The terms in this post, in plain words.",
  law: "The laws and rules, with the date their status was checked.",
  clinical: "Trial registrations, what was measured, and side effects.",
  safety: "Where to get help. No dosing information, ever.",
  history: "Archives, museum objects and community sources.",
  related: "This piece on every platform, and the ones either side of it.",
  corrections: "Every change since publishing, dated.",
  cite: "How to cite this page, and a code to share it.",
  ask: "Ask a question, or point to a source we missed.",
};

function Section({ id, title, children }: { id: Id; title?: string; children: ReactNode }) {
  return (
    <section className={s.section} id={id} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className={s.tape}><span className={s.num}>{String(NUM[id]).padStart(2, "0")}</span>{title ?? TITLE[id]}</h2>
      <p className={s.blurb}>{BLURB[id]}</p>
      {children}
    </section>
  );
}

function Out({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}{"\u00a0"}<span aria-hidden="true">↗</span></a>;
}

// The first `show` items, then the rest behind a "Show all" sticker. Works without JavaScript.
function Fold<T>({ items, show, label, wrap, render }: { items: T[]; show: number; label: string; wrap: (children: ReactNode) => ReactNode; render: (item: T, i: number) => ReactNode }) {
  if (items.length <= show + 1) return <>{wrap(items.map(render))}</>;
  return (
    <>
      {wrap(items.slice(0, show).map(render))}
      <details className={s.fold}>
        <summary>Show {items.length - show} more {label}</summary>
        {wrap(items.slice(show).map((it, i) => render(it, i + show)))}
      </details>
    </>
  );
}

// Light parse of an APA-style reference label: everything before the read-note in brackets, which is for us.
const cite = (label: string) => label.replace(/\s*\((?:read|seen|checked)[^)]*\)\s*$/i, "").trim();

// brand "fnm": a Fat Nugs article's source page (/sources/fnm/<slug>, short link /fn/<n>), RN Collins's byline.
// brand "rnc": an RN Collins post's source page from its package record (lib/sources-lab-rnc.ts). Its annotated sources
// may have no link (an archive record, a conversation), so those draw from the annotation alone; no AaN question links.
export async function LabBook({ p, links, brand = "aan", shortPath, page }: { p: SourcePost; links: ReactNode; brand?: "aan" | "fnm" | "rnc"; shortPath?: string; page?: string }) {
  const x = p.extra ?? {};
  // The post's own slides, from its page on the AaN site, once that page is released and actually up.
  const site = aanSite as unknown as { base: string; posts: Record<string, { path: string; releasedAt: string; hold: boolean }> };
  const ap = brand === "aan" ? site.posts[p.slug] : undefined;
  const slideBase = ap && !ap.hold && ap.releasedAt && ap.releasedAt <= hawaiiToday() ? `${site.base}${ap.path}` : "";
  let slidesUp = false;
  if (slideBase) {
    try { slidesUp = (await fetch(`${slideBase}slide-01.webp`, { method: "HEAD", next: { revalidate: 3600 } })).ok; } catch { slidesUp = false; }
  }
  const slideSrc = (where: string) => { const m = /^Slide (\d+)$/i.exec(where.trim()); return slidesUp && m ? `${slideBase}slide-${m[1].padStart(2, "0")}.webp` : ""; };
  const url = `${SITE}${page ?? `/sources/${p.slug}`}`;
  const sp = shortPath ?? `/s/${p.slug}`;
  const short = `${SITE.replace("https://", "")}${sp}`;
  const venue = brand === "fnm" ? "Fat Nugs Magazine" : brand === "rnc" ? "RN Collins" : "Ask a Neuroscientist";
  const qr = await QRCode.toString(`${SITE}${sp}`, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#123524", light: "#ffffff" } });
  const sure = x.start_here?.how_sure ? SURE[x.start_here.how_sure] : undefined;
  const sureNote = x.start_here?.how_sure_note || p.how_sure;
  const dated = p.date !== "";
  const year = dated ? p.date.slice(0, 4) : "n.d.";
  const d = new Date(`${dated ? p.date : "2026-01-01"}T12:00:00Z`);
  const mla = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).replace(/(\w{3})\w* /, "$1. ").replace("Sept.", "Sep.");
  const apaDate = d.toLocaleDateString("en-US", { month: "long", day: "numeric", timeZone: "UTC" });

  // Annotations attach to the reference whose link is their DOI; references with none still list, plainly.
  const notes = new Map((x.annotations ?? []).filter((a) => brand !== "rnc" || a.doi).map((a) => [a.doi ?? "", a]));
  const annotated = (x.annotations ?? []).filter((a) => a.doi ? p.research.some((r) => r.url === a.doi) : brand === "rnc");
  const plain = p.research.filter((r) => !notes.has(r.url));
  const charts = [...(x.charts ?? []).map((c) => ({ title: c.title, file: c.file ?? c.csv.split("/").pop()!, from: c.source_table })),
    ...(p.chart_csvs ?? []).filter((c) => !(x.charts ?? []).some((e) => (e.file ?? e.csv.split("/").pop()) === c.file)).map((c) => ({ title: `Chart, ${c.where}`, file: c.file, from: undefined }))];
  const deeper = ([["new", "New to this"], ["serious", "Getting serious"], ["expert", "Expert"]] as const).filter(([k]) => (x.go_deeper?.[k] ?? []).length);
  const safetyOn = !!(x.safety?.relevant || x.safety?.note);

  const has: Record<Id, boolean> = {
    start: true,
    claims: !!x.claims?.length,
    "could-be-wrong": !!x.could_be_wrong?.length,
    "go-deeper": deeper.length > 0,
    "listen-watch": !!x.listen_watch?.length,
    bibliography: p.research.length + p.other.length > 0,
    images: p.images.length + charts.length > 0,
    glossary: !!x.glossary?.length,
    law: !!x.law_policy?.length,
    clinical: !!x.clinical?.length,
    safety: safetyOn,
    history: !!x.history_culture?.length,
    related: true,
    corrections: !!(x.corrections?.length || x.last_checked),
    cite: true,
    ask: brand !== "rnc",
  };
  // Why a section is missing: the ones only some posts need are "not needed"; the others are still being written
  // for posts whose reader layers have not landed yet.
  const why = (id: Id) => SITUATIONAL.includes(id) ? "Not needed for this one" : p.extra ? "None for this one" : "Coming soon";
  const present = PARTS.flatMap((pt) => pt.items.filter(([, id]) => has[id]));
  const readers = READERS.map((r) => ({ ...r, go: r.to.find((id) => has[id]) })).filter((r) => r.go && (r.who !== "Policy or law" || has.law) && (r.who !== "Clinician or patient" || has.clinical || has.safety));

  const indexList = (
    <div className={s.indexParts}>
      {PARTS.map((pt) => (
        <div key={pt.part}>
          <p className={s.partName}>{pt.part}</p>
          <ol>
            {pt.items.map(([n, id, t]) => (
              <li key={id} value={n}>
                {has[id] ? <a href={`#${id}`}>{t}</a> : <span className={s.off}>{t}<small>{why(id)}</small></span>}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );

  const sticker = (sure || sureNote) && (
    <div className={`${s.sure} ${sure?.tone ?? s.paper}`} role="note" aria-label="How sure is this?">
      <b>{sure?.label ?? "How sure?"}</b>
      {sureNote && <span>{sureNote}</span>}
    </div>
  );

  return (
    <article className={`${s.book} shell`}>
      <header className={s.cover}>
        <div className={slidesUp ? s.hero : undefined}>
          <div>
            <p className={s.kicker}>{brand === "aan" && <img className={s.mark} src="/stickers/brand-brain.svg" alt="" width={44} height={33} />}{brand === "fnm" ? "Fat Nugs Magazine · RN Collins · Sources" : brand === "rnc" ? "RN Collins · Sources" : "Ask a Neuroscientist · Lab book · Sources"}</p>
            <h1 className={s.title}>{p.title}</h1>
            <p className={s.meta}>
              <span>{p.series}</span>
              <span>{dated ? `${brand === "fnm" ? "Published" : "Posted"} ${longDate(p.date)}` : "Not yet published"}</span>
              {x.last_checked && <span>Last checked {longDate(x.last_checked)}</span>}
              {x.start_here?.reading_minutes ? <span>{x.start_here.reading_minutes} min read</span> : null}
              <a href="#cite">Cite this page</a>
            </p>
          </div>
          {slidesUp && (
            <a className={s.heroCover} href={`${site.base}${ap!.path}`}>
              <img src={`${slideBase}slide-01.webp`} alt={`Slide 1 of the post: ${p.title}`} width={720} height={900} />
              <span>The post, slide by slide <span aria-hidden="true">→</span></span>
            </a>
          )}
        </div>

        {/* Wide screens: the index card, open. Phones: the same list, folded behind one sticker. */}
        <nav className={`${s.index} ${s.wideOnly}`} aria-label="What's in this lab book">
          <p className={s.indexHead}>What&apos;s in this lab book</p>
          {indexList}
        </nav>
        <details className={`${s.fold} ${s.narrowOnly}`}>
          <summary>What&apos;s in this lab book: {present.length} of 16</summary>
          <nav className={s.index} aria-label="What's in this lab book">{indexList}</nav>
        </details>

        {readers.length > 0 && (
          <nav className={s.ways} aria-label="Find your way">
            <p className={s.indexHead}>Find your way</p>
            <ul>{readers.map((r) => <li key={r.who}><a className={`${s.sticker} ${s.small2} ${r.tone}`} href={`#${r.go}`}>{r.who} <span aria-hidden="true">→</span></a></li>)}</ul>
          </nav>
        )}
      </header>

      <div className={s.layout}>
        <div className={s.main}>
          <p className={s.partBand}>Read</p>
          <Section id="start">
            <div className={s.startGrid}>
              <div>
                {x.start_here?.summary?.length ? <ul className={s.summary}>{x.start_here.summary.map((l) => <li key={l}>{l}</li>)}</ul> : <p className={s.lede}>{brand === "fnm" ? "Every source behind this article, and further resources, each linked to the original." : brand === "rnc" ? "Every source behind this post, and further resources, each linked to the original." : "The studies, records and images behind this post, each linked to the original."}</p>}
                {p.origin && <p className={s.small}><Out href={p.origin.url}>Read the article: {p.origin.label}</Out></p>}
                {p.interactive && (
                  <p className={s.tryit}><a className={`${s.sticker} ${s.sun}`} href={`/${p.interactive.file}`}>Try it yourself: {p.interactive.title} <span aria-hidden="true">→</span></a></p>
                )}
                <p className={s.small}>{p.disclaimer || "Education, not medical advice."} Not legal advice.</p>
              </div>
              {sticker && <div className={s.sureInline}>{sticker}</div>}
            </div>
          </Section>

          {has.claims && (
            <Section id="claims">
              <Fold items={x.claims!} show={3} label="claims" wrap={(c) => <ol className={s.claims}>{c}</ol>} render={(c, i) => (
                <li key={i} value={i + 1}>
                  <p className={s.claim}>{c.claim}</p>
                  <p className={s.rests}>{[c.source, c.where].filter(Boolean).join(" · ")}{c.study ? <span className={s.study}>{c.study}</span> : null}</p>
                </li>
              )} />
            </Section>
          )}

          {has["could-be-wrong"] && (
            <Section id="could-be-wrong">
              <Fold items={x.could_be_wrong!} show={3} label="caveats" wrap={(c) => <ul className={s.wrong}>{c}</ul>} render={(w, i) => (
                <li key={i}>{w.point}{w.source && <span className={s.study}>{w.url ? <Out href={w.url}>{w.source}</Out> : w.source}</span>}</li>
              )} />
            </Section>
          )}

          {has["go-deeper"] && (
            <Section id="go-deeper">
              <div className={s.levels}>
                {deeper.map(([k, label]) => (
                  <div key={k} className={s.level}>
                    <h3>{label}</h3>
                    <ul>{x.go_deeper![k]!.map((g) => <li key={g.url}><Out href={g.url}>{g.title}</Out>{g.why && <span>{g.why}</span>}</li>)}</ul>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {has["listen-watch"] && (
            <Section id="listen-watch">
              <ul className={s.media}>
                {x.listen_watch!.map((m) => (
                  <li key={m.url} className={s.card}>
                    <p className={s.ref}><Out href={m.url}>{m.title}</Out></p>
                    <p className={s.small}>{[m.speaker, m.credentials, m.length, m.timestamp && `relevant part at ${m.timestamp}`].filter(Boolean).join(" · ")}</p>
                    {m.why && <p>{m.why}</p>}
                    <p className={s.small}>{m.checked ? `${m.checked[0].toUpperCase()}${m.checked.slice(1)}` : ""}{m.checked_on ? ` on ${longDate(m.checked_on)}` : ""}{m.conflicts ? ` · Conflicts: ${m.conflicts}` : ""}</p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <p className={s.partBand}>Look it up</p>
          {has.bibliography && (
            <Section id="bibliography">
              {GROUPS.map(([g, label]) => {
                const items = annotated.filter((a) => (a.group ?? "primary") === g);
                if (!items.length) return null;
                return (
                  <div key={g} className={s.group}>
                    <h3>{label}</h3>
                    <ol className={s.refs}>
                      {items.map((a, i) => {
                        const r = p.research.find((q) => a.doi && q.url === a.doi) ?? { label: a.source, url: "" };
                        return (
                          <li key={a.doi ?? `${a.source}-${i}`} className={s.card}>
                            <p className={s.ref}>{r.url ? <Out href={r.url}>{cite(r.label)}</Out> : cite(r.label)}</p>
                            {a.open_access && <p className={s.oa}><Out href={a.open_access}>Free full text</Out></p>}
                            {a.note && <p>{a.note}</p>}
                            {(a.funding || a.conflicts) && (
                              <dl className={s.disc}>
                                {a.funding && <><dt>Funding</dt><dd>{a.funding}</dd></>}
                                {a.conflicts && <><dt>Conflicts</dt><dd>{a.conflicts}</dd></>}
                              </dl>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              })}
              {plain.length > 0 && (
                <div className={s.group}>
                  <h3>{annotated.length ? "Also cited" : brand === "fnm" ? "References" : "Research cited"}</h3>
                  <Fold items={plain} show={8} label="references" wrap={(c) => <ol className={s.refs}>{c}</ol>} render={(r, i) => (
                    <li key={`${r.url}-${i}`} value={i + 1}>{r.url ? <><Out href={r.url}>{cite(r.label) || host(r.url)}</Out><span className={s.host}>{host(r.url)}</span></> : cite(r.label)}</li>
                  )} />
                </div>
              )}
              {p.other.length > 0 && (
                <div className={s.group}>
                  <h3>{brand === "fnm" ? "Resources" : "Other sources"}</h3>
                  <Fold items={p.other} show={8} label="sources" wrap={(c) => <ol className={s.refs}>{c}</ol>} render={(r, i) => (
                    <li key={`${r.url}-${i}`} value={i + 1}>{r.url ? <><Out href={r.url}>{r.label || host(r.url)}</Out><span className={s.host}>{host(r.url)}</span></> : r.label}</li>
                  )} />
                </div>
              )}
            </Section>
          )}

          {has.images && (
            <Section id="images" title={charts.length ? "Images and charts" : "Images"}>
              {charts.length > 0 && (
                <div className={s.chartTab}>
                  <h3>Chart data</h3>
                  <p className={s.small}>The values each chart plots, as a spreadsheet file (CSV), with the table they come from.</p>
                  <ul>
                    {charts.map((c) => (
                      <li key={c.file}>
                        <a href={`/charts/${p.slug}/${c.file}`} download>{c.title}<span className={s.host}>CSV</span></a>
                        {c.from && <span className={s.small}>From {c.from}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {p.images.length > 0 && (
                <>
                  <h3 className={s.subhead}>Image credits</h3>
                  <Fold items={p.images} show={4} label="image credits" wrap={(c) => <ul className={s.polaroids}>{c}</ul>} render={(im) => (
                    <li key={im.where} className={s.polaroid}>
                      {slideSrc(im.where) && <img src={slideSrc(im.where)} alt={`${im.where} of the post`} width={720} height={900} loading="lazy" decoding="async" />}
                      <b>{im.where}</b>
                      <span>{im.card ? `Number card made for this post, citing ${im.credit}.` : im.what}</span>
                      {!im.card && im.credit && <span className={s.small}>{im.credit}</span>}
                      {im.url && <Out href={im.url}>{im.card ? "The study" : "Record"}</Out>}
                    </li>
                  )} />
                </>
              )}
            </Section>
          )}

          {has.glossary && (
            <Section id="glossary">
              <Fold items={x.glossary!} show={6} label="terms" wrap={(c) => <dl className={s.gloss}>{c}</dl>} render={(g) => (
                <div key={g.term}><dt>{g.term}</dt><dd>{g.plain}</dd></div>
              )} />
            </Section>
          )}

          {SITUATIONAL.some((id) => has[id]) && <p className={s.partBand}>When it applies</p>}
          {has.law && (
            <Section id="law">
              <ul className={s.plainList}>{x.law_policy!.map((l) => <li key={l.citation}>{l.url ? <Out href={l.url}>{l.citation}</Out> : l.citation}{(l.status || l.as_of) && <span className={s.small}>{l.status}{l.as_of ? ` (as of ${longDate(l.as_of)})` : ""}</span>}</li>)}</ul>
            </Section>
          )}
          {has.clinical && (
            <Section id="clinical">
              <ul className={s.plainList}>{x.clinical!.map((c) => <li key={c.registry_id}>{c.url ? <Out href={c.url}>{c.registry_id}</Out> : c.registry_id}{c.what_measured && <span>Measured: {c.what_measured}</span>}{c.adverse_events && <span className={s.small}>Adverse events: {c.adverse_events}</span>}</li>)}</ul>
              <p className={s.small}>Find a trial: <Out href="https://clinicaltrials.gov/">ClinicalTrials.gov</Out>. Talk to a clinician about your own care.</p>
            </Section>
          )}
          {has.safety && (
            <Section id="safety">
              {(x.safety!.lines ?? []).length > 0 && <ul className={s.safetyList}>{x.safety!.lines!.map((l) => <li key={l}>{l}</li>)}</ul>}
              {x.safety!.note && <p className={s.safetyNote}>{x.safety!.note}</p>}
              <p className={s.small}>In an emergency, call 911. Possible poisoning (US): Poison Help, <a href="tel:18002221222">1-800-222-1222</a>. No dosing information is given here.</p>
            </Section>
          )}
          {has.history && (
            <Section id="history">
              <ul className={s.plainList}>{x.history_culture!.map((h) => <li key={h.url}><Out href={h.url}>{h.title}</Out>{h.why && <span>{h.why}</span>}</li>)}</ul>
            </Section>
          )}

          <p className={s.partBand}>Use and share</p>
          <Section id="related">{links}</Section>

          {has.corrections && (
            <Section id="corrections">
              {x.corrections?.length ? <ul className={s.log}>{x.corrections.map((c, i) => <li key={i}><time dateTime={c.date}>{longDate(c.date)}</time> {c.change}</li>)}</ul> : <p className={s.small}>No corrections so far.</p>}
              {x.last_checked && <p className={s.small}>Last checked {longDate(x.last_checked)}.{has.ask ? " Spotted an error? Use “Suggest a source” below." : ""}</p>}
            </Section>
          )}

          <Section id="cite">
            <div className={s.citeGrid}>
              <dl className={s.cites}>
                <div><dt>APA</dt><dd>Collins, R. N. ({dated ? `${year}, ${apaDate}` : year}). <i>{p.title}</i> [Sources page]. {venue}. {url}</dd></div>
                <div><dt>MLA</dt><dd>Collins, RN. “{p.title}.” <i>{venue}</i>, {dated ? mla : "n.d."}, {url.replace("https://", "")}.</dd></div>
              </dl>
              <figure className={`${s.qr} ${s.qrInline}`}>
                <span dangerouslySetInnerHTML={{ __html: qr }} />
                <figcaption>{short}</figcaption>
              </figure>
            </div>
          </Section>

          {has.ask && <Section id="ask">
            <div className={s.askRow}>
              <a className={`${s.sticker} ${s.teal}`} href={`${AAN}/questions/?from=src-${p.slug}`}>Ask me a brain question</a>
              <a className={`${s.sticker} ${s.sun}`} href={`${AAN}/questions/?from=suggest-${p.slug}`}>Suggest a source</a>
            </div>
            <p className={s.small}>Only what you type is kept. No trackers on this page.</p>
          </Section>}

          <section className="socialFollow" aria-label="Follow">
            <p>{brand !== "aan" ? "Follow RN Collins" : "Follow Ask a Neuroscientist"}</p>
            <SocialRow set={brand !== "aan" ? "rn" : "aan"} />
          </section>
          <ClientLine />
        </div>

        {/* Wide screens only: stays in view while the page scrolls. */}
        <aside className={s.side} aria-label="Contents and share">
          <nav aria-label="Contents">
            <p className={s.indexHead}>Contents</p>
            <ol className={s.sideList}>{present.map(([n, id, t]) => <li key={id} value={n}><a href={`#${id}`}>{t}</a></li>)}</ol>
          </nav>
          {sticker}
          <figure className={s.qr}>
            <span dangerouslySetInnerHTML={{ __html: qr }} />
            <figcaption>{short}</figcaption>
          </figure>
        </aside>
      </div>
    </article>
  );
}
