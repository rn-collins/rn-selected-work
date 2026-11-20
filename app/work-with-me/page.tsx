import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";
import aanSite from "../../data/aan-site.json";
import { postedSoFar, longDate } from "../../lib/aan-sources";
import { hawaiiToday } from "../../lib/releases";

// DRAFT for RN's approval (Nov 9, 2026). Every pitch links this page. Service lines are from the proposal menu
// (names and descriptions only: prices stay in private proposals). The DDW 2026 posts are listed only once they are
// live (lib/releases.ts), like every sources page. Lines marked "RN to check" are not published until RN approves.
export const revalidate = 3600;

const LONG_TITLE = "Storytelling strategist, content and experiential producer, resident neuroscientist and design technologist";
const SHORT_TITLE = "Neuroscientist, anatomist and builder turned content creator";

export const metadata: Metadata = {
  title: "Work with me",
  description: `RN Collins: ${SHORT_TITLE.toLowerCase()}. Brand direction, content strategy, production, operations and management, with a Dutch Design Week 2026 case study.`,
  alternates: { canonical: "/work-with-me" },
  robots: { index: false, follow: false },
};

const SERVICES = [
  { name: "Brand direction", what: "A workshop, voice and visual direction, and a one-page brand guide for science content." },
  { name: "Content strategy", what: "Content pillars, a 3- or 12-month calendar, a platform plan, an archive map and the measures that show it is working." },
  { name: "Content production", what: "Carousels, single image posts, Reels, articles and newsletters, every one fact-checked and every image's licence recorded. Includes on-site capture days: photo and video at your event." },
  { name: "Content operations", what: "Posting kits, scheduling set-up, licence audits, workflow design, a brand kit and templates, and training for your team." },
  { name: "Content management", what: "Weekly running of your accounts, replies to your community on business days, scheduling and a basic monthly report." },
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
const aanPosts = (aanSite as unknown as { base: string; posts: Record<string, Dated> }).posts;
const aanBase = (aanSite as unknown as { base: string }).base;

function Check({ children }: { children: React.ReactNode }) {
  return <span className="draftCheck" title="Draft: not published until RN approves">[RN to check] {children}</span>;
}

export default function WorkWithMePage() {
  const today = hawaiiToday();
  const ddw = postedSoFar().filter((p) => p.series === "Dutch Design Week").reverse();
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">Work with me</p>
        <h1>{LONG_TITLE}</h1>
        <p>{SHORT_TITLE}. I make science content that is accurate, credited and worth stopping for, for brands, events and institutions.</p>
      </header>

      <section className="canonicalSection shell" aria-labelledby="services">
        <div className="canonicalSplit">
          <p className="eyebrow" id="services">Services</p>
          <div>
            <h2>Five lines, bought alone or together.</h2>
            <ol className="canonicalList">
              {SERVICES.map((s) => (
                <li key={s.name}><strong>{s.name}.</strong> {s.what}</li>
              ))}
            </ol>
            <p>Prices are set per project in a written proposal.</p>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell" aria-labelledby="process">
        <div className="canonicalSplit">
          <p className="eyebrow" id="process">How it works</p>
          <div>
            <h2>Brief, capture, check, approve, publish, report.</h2>
            <ol className="canonicalList">
              {PROCESS.map((s) => (
                <li key={s.step}><strong>{s.step}.</strong> {s.what}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell" aria-labelledby="ddw">
        <div className="canonicalSplit">
          <p className="eyebrow" id="ddw">Case study</p>
          <div>
            <h2>Dutch Design Week 2026, Eindhoven</h2>
            <p>Dutch Design Week ran from October 17 to 25, 2026. I covered it for Ask a Neuroscientist: the design, science and health work on show, explained through what it does to the brain and body, with every claim sourced.</p>
            <p><Check>What I captured: photo and video on three camera cards and an iPhone, recorded interviews with makers, and stills chosen for each exhibit, across the venues of the festival.</Check></p>
            <p><Check>How: one shot list per venue, makers credited by name, visitors kept out of frame unless they agreed, and interviews transcribed so every quote is checked against the recording.</Check></p>
            <p>The posts it became go out from November 16, 2026. Each one has a public sources page, and the list below grows as they go live.</p>
            {ddw.length ? (
              <ul className="canonicalList">
                {ddw.map((p) => {
                  const site = aanPosts[p.slug];
                  const live = site && !site.hold && site.releasedAt !== "" && site.releasedAt <= today;
                  return (
                    <li key={p.slug}>
                      {live ? <a href={`${aanBase}${site.path}`}>{p.title}</a> : p.title}{" "}
                      <span>({longDate(p.date)}, <Link href={`/sources/${p.slug}`}>sources</Link>)</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>The first posts are not out yet.</p>
            )}
          </div>
        </div>
      </section>

      <section className="canonicalSection shell" aria-labelledby="contact">
        <div className="canonicalSplit">
          <p className="eyebrow" id="contact">Get in touch</p>
          <div>
            <h2>Tell me about the project.</h2>
            <p>Message me on <a href="https://www.linkedin.com/in/rn-collins" rel="noopener">LinkedIn</a>, or see <Link href="/contact">what to send</Link> in a first message.</p>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
