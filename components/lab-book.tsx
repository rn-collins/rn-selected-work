import type { ReactNode } from "react";
import QRCode from "qrcode";
import { host, longDate, type SourcePost } from "../lib/aan-sources";
import { ClientLine } from "./sources-detail";
import { SocialRow } from "./social-row";
import s from "./lab-book.module.css";

// The lab-book sources page (RN's source-page standard, aan-studio/design/SOURCE-PAGE-STANDARD.md, Nov 20, 2026):
// sixteen sections in a fixed order, each drawn only when the post has something for it, so an empty section never
// shows. The reader layers come from the package's sources_extra.json (lib/aan-sources.ts SourcesExtra); the
// references and image credits from the export as before. Server-rendered, no client script, no trackers.

const SITE = "https://rn-selected-work.vercel.app";
const AAN = "https://askaneuroscientist.vercel.app";

const SURE: Record<string, { label: string; tone: string }> = {
  strong: { label: "Strong evidence", tone: s.forest },
  moderate: { label: "Moderate evidence", tone: s.teal },
  early: { label: "Early evidence", tone: s.sun },
  mixed: { label: "Mixed evidence", tone: s.coral },
};
const GROUPS: [string, string][] = [["primary", "Primary studies"], ["review", "Reviews and meta-analyses"], ["official", "Official documents"], ["book", "Books"]];

function Section({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section className={s.section} id={id} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className={s.tape}><span className={s.num}>{String(n).padStart(2, "0")}</span>{title}</h2>
      {children}
    </section>
  );
}

function Out({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer">{children} <span aria-hidden="true">↗</span></a>;
}

// Light parse of an APA-style reference label: everything before the read-note in brackets, which is for us.
const cite = (label: string) => label.replace(/\s*\((?:read|seen|checked)[^)]*\)\s*$/i, "").trim();

// brand "fnm": a Fat Nugs article's source page (/sources/fnm/<slug>, short link /fn/<n>), RN Collins's byline.
export async function LabBook({ p, links, brand = "aan", shortPath, page }: { p: SourcePost; links: ReactNode; brand?: "aan" | "fnm"; shortPath?: string; page?: string }) {
  const x = p.extra ?? {};
  const url = `${SITE}${page ?? `/sources/${p.slug}`}`;
  const sp = shortPath ?? `/s/${p.slug}`;
  const short = `${SITE.replace("https://", "")}${sp}`;
  const venue = brand === "fnm" ? "Fat Nugs Magazine" : "Ask a Neuroscientist";
  const qr = await QRCode.toString(`${SITE}${sp}`, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#17201b", light: "#ffffff" } });
  const sure = x.start_here?.how_sure ? SURE[x.start_here.how_sure] : undefined;
  const sureNote = x.start_here?.how_sure_note || p.how_sure;
  const dated = p.date !== "";
  const year = dated ? p.date.slice(0, 4) : "n.d.";
  const d = new Date(`${dated ? p.date : "2026-01-01"}T12:00:00Z`);
  const mla = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).replace(/(\w{3})\w* /, "$1. ").replace("Sept.", "Sep.");
  const apaDate = d.toLocaleDateString("en-US", { month: "long", day: "numeric", timeZone: "UTC" });

  // Annotations attach to the reference whose link is their DOI; references with none still list, plainly.
  const notes = new Map((x.annotations ?? []).map((a) => [a.doi ?? "", a]));
  const annotated = (x.annotations ?? []).filter((a) => a.doi && p.research.some((r) => r.url === a.doi));
  const plain = p.research.filter((r) => !notes.has(r.url));
  const charts = [...(x.charts ?? []).map((c) => ({ title: c.title, file: c.csv, from: c.source_table })),
    ...(p.chart_csvs ?? []).filter((c) => !(x.charts ?? []).some((e) => e.csv === c.file)).map((c) => ({ title: `Chart, ${c.where}`, file: c.file, from: undefined }))];
  const deeper = x.go_deeper && ([["new", "New to this"], ["serious", "Getting serious"], ["expert", "Expert"]] as const).filter(([k]) => (x.go_deeper?.[k] ?? []).length);

  const tabs: [string, string][] = [];
  const tab = (id: string, label: string, on: unknown) => { if (on) tabs.push([id, label]); return !!on; };
  const has = {
    start: true,
    claims: tab("claims", "The evidence", x.claims?.length),
    bib: tab("bibliography", "Bibliography", p.research.length + p.other.length),
    wrong: tab("could-be-wrong", "Could be wrong", x.could_be_wrong?.length),
    deeper: tab("go-deeper", "Go deeper", deeper && deeper.length),
    watch: tab("listen-watch", "Listen & watch", x.listen_watch?.length),
    images: tab("images", charts.length ? "Images & charts" : "Images", p.images.length + charts.length),
    law: tab("law", "Law", x.law_policy?.length),
    clinical: tab("clinical", "Clinicians", x.clinical?.length),
    safety: tab("safety", "Safety", x.safety?.relevant),
    history: tab("history", "History", x.history_culture?.length),
    glossary: tab("glossary", "Glossary", x.glossary?.length),
  };
  let n = 0;
  const no = () => ++n;

  return (
    <article className={`${s.book} shell`}>
      <header className={s.cover}>
        <p className={s.kicker}>{brand === "fnm" ? "Fat Nugs Magazine · RN Collins · Sources" : "Ask a Neuroscientist · Lab book · Sources"}</p>
        <h1 className={s.title}>{p.title}</h1>
        <p className={s.meta}>{p.series} · {dated ? `${brand === "fnm" ? "published" : "posted"} ${longDate(p.date)}` : "not yet published"}{x.last_checked ? ` · last checked ${longDate(x.last_checked)}` : ""}</p>
        {tabs.length > 0 && (
          <nav className={s.tabs} aria-label="On this page">
            {tabs.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
        )}
      </header>

      {has.start && (
        <Section id="start" n={no()} title="Start here">
          <div className={s.startGrid}>
            <div>
              {x.start_here?.summary?.length ? <ul className={s.summary}>{x.start_here.summary.map((l) => <li key={l}>{l}</li>)}</ul> : <p className={s.lede}>{brand === "fnm" ? "Every source behind this article, and further resources, each linked to the original." : "The studies, records and images behind this post, each linked to the original."}</p>}
              {p.origin && <p className={s.small}><Out href={p.origin.url}>Read the article: {p.origin.label}</Out></p>}
              <p className={s.small}>{x.start_here?.reading_minutes ? `${x.start_here.reading_minutes} minute read · ` : ""}{p.disclaimer || "Education, not medical advice."} Not legal advice.</p>
            </div>
            {(sure || sureNote) && (
              <aside className={`${s.sure} ${sure?.tone ?? s.paper}`} aria-label="How sure is this?">
                <b>{sure?.label ?? "How sure?"}</b>
                {sureNote && <span>{sureNote}</span>}
              </aside>
            )}
          </div>
        </Section>
      )}

      {has.claims && (
        <Section id="claims" n={no()} title="The claim, the evidence">
          <ol className={s.claims}>
            {x.claims!.map((c, i) => (
              <li key={i}>
                <p className={s.claim}>{c.claim}</p>
                <p className={s.rests}>{[c.source, c.where].filter(Boolean).join(" · ")}{c.study ? <span className={s.study}>{c.study}</span> : null}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {has.bib && (
        <Section id="bibliography" n={no()} title="Annotated bibliography">
          {GROUPS.map(([g, label]) => {
            const items = annotated.filter((a) => (a.group ?? "primary") === g);
            if (!items.length) return null;
            return (
              <div key={g} className={s.group}>
                <h3>{label}</h3>
                <ol className={s.refs}>
                  {items.map((a) => {
                    const r = p.research.find((q) => q.url === a.doi)!;
                    return (
                      <li key={a.doi} className={s.card}>
                        <p className={s.ref}><Out href={r.url}>{cite(r.label)}</Out></p>
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
              <ol className={s.refs}>{plain.map((r, i) => <li key={`${r.url}-${i}`}>{r.url ? <><Out href={r.url}>{cite(r.label) || host(r.url)}</Out><span className={s.host}>{host(r.url)}</span></> : cite(r.label)}</li>)}</ol>
            </div>
          )}
          {p.other.length > 0 && (
            <div className={s.group}>
              <h3>{brand === "fnm" ? "Resources" : "Other sources"}</h3>
              <ol className={s.refs}>{p.other.map((r, i) => <li key={`${r.url}-${i}`}>{r.url ? <><Out href={r.url}>{r.label || host(r.url)}</Out><span className={s.host}>{host(r.url)}</span></> : r.label}</li>)}</ol>
            </div>
          )}
        </Section>
      )}

      {has.wrong && (
        <Section id="could-be-wrong" n={no()} title="Where this could be wrong">
          <ul className={s.wrong}>
            {x.could_be_wrong!.map((w, i) => (
              <li key={i}>{w.point}{w.source && <span className={s.study}>{w.url ? <Out href={w.url}>{w.source}</Out> : w.source}</span>}</li>
            ))}
          </ul>
        </Section>
      )}

      {has.deeper && (
        <Section id="go-deeper" n={no()} title="Go deeper">
          <div className={s.levels}>
            {deeper!.map(([k, label]) => (
              <div key={k} className={s.level}>
                <h3>{label}</h3>
                <ul>{x.go_deeper![k]!.map((g) => <li key={g.url}><Out href={g.url}>{g.title}</Out>{g.why && <span>{g.why}</span>}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {has.watch && (
        <Section id="listen-watch" n={no()} title="Listen and watch">
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

      {has.images && (
        <Section id="images" n={no()} title={charts.length ? "Images and charts" : "Images"}>
          {p.images.length > 0 && (
            <ul className={s.polaroids}>
              {p.images.map((im) => (
                <li key={im.where} className={s.polaroid}>
                  <b>{im.where}</b>
                  <span>{im.card ? `Number card made for this post, citing ${im.credit}.` : im.what}</span>
                  {!im.card && im.credit && <span className={s.small}>{im.credit}</span>}
                  {im.url && <Out href={im.url}>{im.card ? "The study" : "Record"}</Out>}
                </li>
              ))}
            </ul>
          )}
          {charts.length > 0 && (
            <div className={s.chartTab}>
              <h3>Chart data</h3>
              <p className={s.small}>The values each chart plots, as a spreadsheet file (CSV), with the table they come from.</p>
              <ul>
                {charts.map((c) => (
                  <li key={c.file}>
                    <a href={`/charts/${p.slug}/${c.file}`} download>{c.title} <span className={s.host}>CSV</span></a>
                    {c.from && <span className={s.small}>From {c.from}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      )}

      {has.law && (
        <Section id="law" n={no()} title="Law and policy">
          <ul className={s.plainList}>{x.law_policy!.map((l) => <li key={l.citation}>{l.url ? <Out href={l.url}>{l.citation}</Out> : l.citation}{(l.status || l.as_of) && <span className={s.small}>{l.status}{l.as_of ? ` (as of ${longDate(l.as_of)})` : ""}</span>}</li>)}</ul>
        </Section>
      )}

      {has.clinical && (
        <Section id="clinical" n={no()} title="For clinicians and patients">
          <ul className={s.plainList}>{x.clinical!.map((c) => <li key={c.registry_id}>{c.url ? <Out href={c.url}>{c.registry_id}</Out> : c.registry_id}{c.what_measured && <span>Measured: {c.what_measured}</span>}{c.adverse_events && <span className={s.small}>Adverse events: {c.adverse_events}</span>}</li>)}</ul>
          <p className={s.small}>Find a trial: <Out href="https://clinicaltrials.gov/">ClinicalTrials.gov</Out>. Talk to a clinician about your own care.</p>
        </Section>
      )}

      {has.safety && (
        <Section id="safety" n={no()} title="Safety and support">
          <ul className={s.safetyList}>{(x.safety!.lines ?? []).map((l) => <li key={l}>{l}</li>)}</ul>
          {x.safety!.note && <p className={s.small}>{x.safety!.note}</p>}
          <p className={s.small}>In an emergency, call 911. Possible poisoning (US): Poison Help, <a href="tel:18002221222">1-800-222-1222</a>. No dosing information is given here.</p>
        </Section>
      )}

      {has.history && (
        <Section id="history" n={no()} title="History and culture">
          <ul className={s.plainList}>{x.history_culture!.map((h) => <li key={h.url}><Out href={h.url}>{h.title}</Out>{h.why && <span>{h.why}</span>}</li>)}</ul>
        </Section>
      )}

      {has.glossary && (
        <Section id="glossary" n={no()} title="Glossary">
          <dl className={s.gloss}>{x.glossary!.map((g) => <div key={g.term}><dt>{g.term}</dt><dd>{g.plain}</dd></div>)}</dl>
        </Section>
      )}

      <Section id="related" n={no()} title="Related">
        {links}
      </Section>

      {(x.corrections?.length || x.last_checked) ? (
        <Section id="corrections" n={no()} title="Corrections and updates">
          {x.corrections?.length ? <ul className={s.log}>{x.corrections.map((c, i) => <li key={i}><time dateTime={c.date}>{longDate(c.date)}</time> {c.change}</li>)}</ul> : <p className={s.small}>No corrections so far.</p>}
          {x.last_checked && <p className={s.small}>Last checked {longDate(x.last_checked)}. Spotted an error? Use “Suggest a source” below.</p>}
        </Section>
      ) : null}

      <Section id="cite" n={no()} title="Cite this page and share">
        <div className={s.citeGrid}>
          <dl className={s.cites}>
            <div><dt>APA</dt><dd>Collins, R. N. ({dated ? `${year}, ${apaDate}` : year}). <i>{p.title}</i> [Sources page]. {venue}. {url}</dd></div>
            <div><dt>MLA</dt><dd>Collins, RN. “{p.title}.” <i>{venue}</i>, {dated ? mla : "n.d."}, {url.replace("https://", "")}.</dd></div>
          </dl>
          <figure className={s.qr}>
            <span dangerouslySetInnerHTML={{ __html: qr }} />
            <figcaption>{short}</figcaption>
          </figure>
        </div>
      </Section>

      <Section id="ask" n={no()} title="Ask or suggest">
        <div className={s.askRow}>
          <a className={`${s.sticker} ${s.teal}`} href={`${AAN}/questions/?from=src-${p.slug}`}>Ask me a brain question</a>
          <a className={`${s.sticker} ${s.sun}`} href={`${AAN}/questions/?from=suggest-${p.slug}`}>Suggest a source</a>
        </div>
        <p className={s.small}>Only what you type is kept. No trackers on this page.</p>
      </Section>

      <section className="socialFollow" aria-label="Follow">
        <p>{brand === "fnm" ? "Follow RN Collins" : "Follow Ask a Neuroscientist"}</p>
        <SocialRow set={brand === "fnm" ? "rn" : "aan"} />
      </section>
      <ClientLine />
    </article>
  );
}
