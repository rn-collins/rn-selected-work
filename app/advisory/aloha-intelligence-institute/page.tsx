import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aloha Intelligence Institute",
  description:
    "A brief I wrote on my own that tests whether a proposed Hawaiʻi AI institute should exist, and in what form. Prepared for consideration; not commissioned.",
  alternates: { canonical: "/advisory/aloha-intelligence-institute" },
};
import Link from "next/link";

export default function AiiCase() {
  return (
    <main>
      <nav className="nav shell">
        <Link className="mark" href="/">
          RN<span>↗</span>
        </Link>
        <div className="navlinks">
          <Link href="/#work">Selected work</Link>
        </div>
      </nav>
      <article className="case shell">
        <p className="eyebrow">Proposal for a Hawaiʻi AI institute · July 2026</p>
        <h1>Aloha Intelligence Institute</h1>
        <p className="caseStatus">Written independently · Not commissioned</p>
        <p className="caseThesis">
          Strengthen the institute before asking government to build it.
        </p>
        <div className="caseImage portrait">
          <Image
            src="/evidence/aloha-intelligence-institute.png"
            alt="Cover of the Aloha Intelligence Institute decision brief"
            width={935}
            height={1210}
            priority
          />
        </div>
        <div className="caseGrid">
          <section>
            <p className="eyebrow">The policy question</p>
            <p>
              Hawaiʻi had already articulated an ambitious University of
              Hawaiʻi-based AI institute. The unresolved problem was whether its
              authority, governance, staffing, public legitimacy, funding, and
              first-year operating model were defined well enough to launch and
              endure.
            </p>
          </section>
          <section>
            <p className="eyebrow">What the bills say</p>
            <p>
              The brief compares SB 1622, SD1 and HB 546 and tracks how each
              moved through the Legislature. It checks every job the bills give
              the institute against offices that already do that job, and
              separates the bills’ big goals from the practical choices they
              leave open.
            </p>
          </section>
          <section>
            <p className="eyebrow">The options</p>
            <p>
              It lays out three paths: a planning-and-design office, a networked
              institute, or a fuller permanent institute. It also keeps a fourth
              open: creating nothing new. Each path is tested against authority,
              cost, duplication, reach, legitimacy and capacity.
            </p>
          </section>
          <section>
            <p className="eyebrow">What I proposed</p>
            <p>
              A six-week memo in four parts: a check of the primary sources, an
              analysis of how the institute would run, a design for its
              governance and public legitimacy, and a plan for follow-up
              legislation. It leaves out buying software, writing a statewide AI
              code, and any commitment made without an authorized sponsor.
            </p>
          </section>
          <section>
            <p className="eyebrow">What this shows</p>
            <p>
              I research policy from primary sources, check whether a new body
              would duplicate an existing one, design how it would run, keep the
              scope fixed, and test whether a proposed institute should exist at
              all instead of assuming it should.
            </p>
          </section>
        </div>
        <section className="verifiedRecord" aria-labelledby="brief-record">
          <div className="verifiedRecordHead">
            <p className="eyebrow">What the brief is</p>
            <h2 id="brief-record">A test of whether the institution should exist.</h2>
            <p className="indexStatus indexStatus--proposal">
              <span className="indexStatusTag">Proposal</span>
              Independently developed · July 2026 discussion draft · not commissioned or adopted
            </p>
          </div>
          <div className="verifiedRecordBody">
            <p>
              <b>The method.</b> The brief works from the bills themselves and how they
              moved through the Legislature, not from news coverage of them. It maps each
              proposed job against the offices that already hold it. That map matters
              most: a new body justified by work another body already does is a
              duplication problem, not a missing capability, and you only see it by
              comparing line by line.
            </p>
            <p>
              <b>Why the null option is on the table.</b> Institutional-design work is
              usually commissioned by someone who has already decided the institution
              should exist, which makes &ldquo;do not create it&rdquo; unavailable as a
              finding. Holding it open changes what the other three paths have to prove.
              A planning-and-design office, a networked institute and a fuller permanent
              institute are each then tested against authority, cost, duplication, reach,
              legitimacy and capacity rather than against each other.
            </p>
            <p>
              <b>Fixed scope.</b> The proposed work is a six-week memo. It leaves out buying
              software, writing a statewide AI code, and any commitment made without an
              authorized sponsor. Those limits come first because work like this tends to
              fail by growing quietly until nobody can say what was agreed.
            </p>
            <p className="indexLimits">
              <b>What it doesn’t claim.</b> This is a discussion draft. It is not a
              legislative finding, an endorsement, an adopted plan, or a commitment by any
              office or organization named in it. The analysis reflects the bills as they
              stood in July 2026.
            </p>
          </div>
        </section>
        <aside className="evidenceNote">
          <b>Disclosure</b>
          <p>
            Prepared for consideration by Senator Stanley Chang's office. It was
            not commissioned by Senator Chang, the Hawaiʻi State Legislature,
            the University of Hawaiʻi, or the State of Hawaiʻi. The PDF is
            preserved as the July 2026 discussion draft.
          </p>
        </aside>
        <div className="caseActions">
          <a
            className="button"
            href="/documents/aloha-intelligence-institute-decision-brief.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Read the brief in your browser ↗
          </a>
          <a
            className="button secondary"
            href="/documents/aloha-intelligence-institute-decision-brief.pdf"
            download
          >
            Download PDF ↓
          </a>
          <Link className="textlink" href="/">
            Return to selected work →
          </Link>
        </div>
      </article>
    </main>
  );
}
