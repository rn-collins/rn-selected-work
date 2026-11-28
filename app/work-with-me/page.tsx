import type { Metadata } from "next";
import { hasVcard } from "../../lib/vcard";
import aanSite from "../../data/aan-site.json";
import hub from "../../data/links-hub.json";
import { postedSoFar, longDate, sourcePosts } from "../../lib/aan-sources";
import { hawaiiToday } from "../../lib/releases";
import s from "../../components/specimen.module.css";
import { GalleryBar } from "../../components/gallery/gallery-bar";
import "../gallery-skin.css";

// Work with me, in the specimen design system (RN approved the brief Nov 18, 2026). Every pitch links this page.
// Service lines come from the proposal menu (names and descriptions only: prices stay in private proposals). The DDW
// 2026 posts show only once live, as their own slide 1 covers. RN approved the page, its wording included, on Nov 20, 2026.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Work with me",
  description: `RN Collins, ${hub.title}. Brand direction, content strategy, production, operations and management, with a Dutch Design Week 2026 case study.`,
  alternates: { canonical: "/work-with-me" },
};

// A general address for museums, brands, science institutions and AI companies (RN, Nov 27). It lives only in
// the Vercel env var RN_GENERAL_EMAIL, never in git; with no value set, the row is left out.
const GENERAL = process.env.RN_GENERAL_EMAIL?.trim() ?? "";

const SERVICES = [
  { name: "Brand direction", what: "A workshop, voice and visual direction, and a one-page brand guide for science content." },
  { name: "Content strategy", what: "Content pillars, a 3- or 12-month calendar, a platform plan, an archive map and the measures that show it is working." },
  { name: "Content production", what: "Carousels, single image posts, Reels, articles and newsletters, every one fact-checked and every image's licence recorded. Includes on-site capture days: photo and video at your event." },
  { name: "Content operations", what: "Posting kits, scheduling set-up, licence audits, workflow design, a brand kit and templates, and training for your team." },
  { name: "Content management", what: "Weekly running of your accounts, replies to your community on business days, scheduling and a basic monthly report." },
  { name: "AI expert work", what: "Checking and writing what AI tools say about the brain and health: each claim traced to the paper, then rewritten so it's accurate and clear." },
];

const PROCESS = [
  { step: "Brief", what: "We agree what the work is for, who it is for and what counts as done." },
  { step: "Capture with consent", what: "Photo, video and interviews on site. Makers are credited by name, and no visitor is shown as a subject without their consent." },
  { step: "Science check", what: "Every claim is checked against its primary source, and each post carries a public sources page." },
  { step: "Approval", what: "You see every piece before it goes out. Nothing is posted without sign-off." },
  { step: "Publish", what: "Posting kits for each platform, scheduled to the plan." },
  { step: "Report", what: "What went out, where, and how it did, with the date of every figure." },
];

type Dated = { releasedAt: string; hold: boolean; path: string };
const aan = aanSite as unknown as { base: string; posts: Record<string, Dated> };
const entities = (t: string) => Array.from(t, (c) => `&#${c.codePointAt(0)};`).join("");

export default function WorkWithMePage() {
  const today = hawaiiToday();
  const live = (p?: Dated) => !!p && !p.hold && p.releasedAt !== "" && p.releasedAt <= today;
  const ddw = postedSoFar().filter((p) => p.series === "Dutch Design Week").reverse();
  // The schedule comes from the sources data, so the dates here move when the posting calendar moves.
  const ddwAll = sourcePosts.filter((p) => p.series === "Dutch Design Week");
  return (
    <>
    <GalleryBar room="Work with me · Commissions open" />
    <main className={`${s.page} glskin wwm`}>
      <div className={s.wide}>
        <header className={s.plate}>
          <p className={s.label}>Work with me</p>
          <h1 className={s.hero}>RN Collins</h1>
          <p className={s.title}>{hub.title}</p>
          <p className={s.lede}>Science content that is accurate, credited and worth stopping for, for brands, events and institutions.</p>
        </header>

        <section className={`${s.section} ${s.split}`} aria-labelledby="services">
          <h2 id="services" className={s.label}>Services</h2>
          <div>
            <p className={s.headline}>Six lines, bought alone or together.</p>
            <ol className={s.entries}>
              {SERVICES.map((x) => (
                <li key={x.name} className={s.reveal}>
                  <div>
                    <h3 className={s.entryTitle}>{x.name}</h3>
                    <p className={s.entryText}>{x.what}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={s.evidence}>Prices are set per project, in a written proposal.</p>
          </div>
        </section>

        <section className={`${s.section} ${s.split}`} aria-labelledby="process">
          <h2 id="process" className={s.label}>How it works</h2>
          <div>
            <p className={s.headline}>Brief, capture, check, approve, publish, report.</p>
            <ol className={s.entries}>
              {PROCESS.map((x) => (
                <li key={x.step} className={s.reveal}>
                  <div>
                    <h3 className={s.entryTitle}>{x.step}</h3>
                    <p className={s.entryText}>{x.what}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${s.section} ${s.split} ${s.aan}`} aria-labelledby="ddw">
          <h2 id="ddw" className={s.label}>Case study</h2>
          <div className={s.prose}>
            <p className={s.headline}>Dutch Design Week 2026, Eindhoven</p>
            <p>Dutch Design Week ran from October 17 to 25, 2026. I covered it for Ask a Neuroscientist: the design, science and health work on show, explained through what it does to the brain and body, with each claim linked to its source.</p>
            <p>What I captured: photo and video on three camera cards and an iPhone, recorded interviews with makers, and stills chosen for each exhibit, across the venues of the festival.</p>
            <p>How: one shot list per venue, makers credited by name, visitors kept out of frame unless they agreed, and interviews transcribed so every quote is checked against the recording.</p>
            <p className={s.evidence}>
              {ddwAll.length} posts, each with a public sources page, scheduled through {longDate(ddwAll[ddwAll.length - 1].date)}. They appear here as they go live.
            </p>
            {ddw.length ? (
              <ul className={s.tiles}>
                {ddw.map((p) => {
                  const page = aan.posts[p.slug];
                  const onAan = live(page);
                  const href = onAan ? `${aan.base}${page.path}` : `/sources/${p.slug}`;
                  return (
                    <li key={p.slug} className={s.tile}>
                      <a href={href} {...(onAan ? { rel: "noopener" } : {})}>
                        {onAan ? (
                          <img src={`${aan.base}${page.path}slide-01.webp`} alt={`Cover of the post: ${p.title}`} width={720} height={900} loading="lazy" decoding="async" />
                        ) : null}
                        <span className={s.tileTitle}>{p.title}</span>
                        <span className={s.credit}>{longDate(p.date)}{onAan ? " · slide 1, Ask a Neuroscientist" : " · sources"}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </section>

        <section className={`${s.section} ${s.split}`} aria-labelledby="contact">
          <h2 id="contact" className={s.label}>Get in touch</h2>
          <div>
            <p className={s.headline}>Tell me about the project.</p>
            <ul className={s.rows}>
              {[...(GENERAL ? [{ label: "Museums, brands, science institutions and AI", address: GENERAL }] : []), ...hub.email].map((m) => (
                <li
                  key={m.label}
                  dangerouslySetInnerHTML={{
                    __html: `<a class="${s.row}" href="${entities(`mailto:${m.address}`)}"><span class="${s.rowLabel}">${m.label.replace(/&/g, "&amp;")}</span><span class="${s.rowNote}">${entities(m.address)}</span><span class="${s.arrow}" aria-hidden="true">→</span></a>`,
                  }}
                />
              ))}
              <li>
                <a className={s.row} href={hub.linkedin.url} rel="noopener">
                  <span className={s.rowLabel}>Me on LinkedIn</span>
                  <span className={s.arrow} aria-hidden="true">→</span>
                </a>
              </li>
              <li>
                <a className={s.row} href="/links">
                  <span className={s.rowLabel}>All links</span>
                  <span className={s.rowNote}>Ask a Neuroscientist, RN Selected Work, The Polymath</span>
                  <span className={s.arrow} aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
            {hasVcard() && <a className={s.ghost} href="/rn-collins-card.vcf" download="RN-Collins.vcf">Save my contact</a>}
          </div>
        </section>

        <footer className={s.foot}>
          <p>RN Collins · <a href="/">RN Selected Work</a> · Ask a Neuroscientist is education, not medical advice.</p>
        </footer>
      </div>
    </main>
    </>
  );
}
