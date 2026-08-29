import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aloha Intelligence Institute",
  description:
    "An independently developed institutional-design brief testing whether a proposed Hawaiʻi AI institute should exist, and in what form. Prepared for consideration; not commissioned.",
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
        <p className="eyebrow">Institutional design proposal · July 2026</p>
        <h1>Aloha Intelligence Institute</h1>
        <p className="caseStatus">
          Independently developed · prepared for consideration · not
          commissioned
        </p>
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
            <p className="eyebrow">The statutory audit</p>
            <p>
              The brief compares SB 1622, SD1, HB 546, and their legislative
              movement; maps proposed functions against existing institutional
              responsibilities; and separates a substantial policy vision from
              the implementation choices still left open.
            </p>
          </section>
          <section>
            <p className="eyebrow">The decision architecture</p>
            <p>
              It frames three credible paths—a planning-and-design office, a
              networked institute, and a fuller permanent institute—alongside
              the possibility that no new entity should be created. Each path is
              tested against authority, cost, duplication, reach, legitimacy,
              and capacity.
            </p>
          </section>
          <section>
            <p className="eyebrow">The proposed engagement</p>
            <p>
              A bounded six-week legislative and institutional-design
              memorandum: primary-source audit, operating-model analysis,
              governance and legitimacy design, and a successor-legislation
              roadmap. The work explicitly excludes software procurement, a
              statewide AI code, or commitments made without an authorized
              sponsor.
            </p>
          </section>
          <section>
            <p className="eyebrow">What this demonstrates</p>
            <p>
              Primary-source policy research, nonduplication analysis,
              institutional architecture, scope discipline, operating-option
              design, and the willingness to test whether a proposed institution
              should exist rather than presume that expansion is the answer.
            </p>
          </section>
        </div>
        <section className="verifiedRecord" aria-labelledby="brief-record">
          <div className="verifiedRecordHead">
            <p className="eyebrow">What the brief actually is</p>
            <h2 id="brief-record">A test of whether the institution should exist.</h2>
            <p className="indexStatus indexStatus--proposal">
              <span className="indexStatusTag">Proposal</span>
              Independently developed · July 2026 discussion draft · not commissioned or adopted
            </p>
          </div>
          <div className="verifiedRecordBody">
            <p>
              <b>The method.</b> The brief works from primary sources — the bills
              themselves and their legislative movement — rather than from coverage of
              them, and maps each proposed function against the institutional
              responsibilities that already exist. That mapping is the load-bearing part:
              a new entity justified by functions another body already holds is a
              duplication problem dressed as a capability problem, and it is only visible
              if someone does the comparison line by line.
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
              <b>Scope discipline.</b> The proposed engagement is a bounded six-week
              memorandum. It explicitly excludes software procurement, a statewide AI code,
              and any commitment made without an authorised sponsor — exclusions stated up
              front because the failure mode of this kind of work is a mandate that grows
              quietly until nobody can say what was agreed.
            </p>
            <p className="indexLimits">
              <b>What it does not establish.</b> This is a discussion draft prepared for
              consideration. It is not a legislative finding, an endorsement, an adopted
              plan, or a commitment by any office or institution named in it, and the
              analysis reflects the statutory record as it stood in July 2026.
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
            Read the brief in browser ↗
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
