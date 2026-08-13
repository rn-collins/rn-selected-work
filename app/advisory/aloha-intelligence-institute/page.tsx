import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aloha Intelligence Institute",
  description: "An independently developed, non-commissioned institutional-design proposal by RN Collins.",
};

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
      <article id="main-content" tabIndex={-1} className="case shell">
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
          <Link className="textlink" href="/contact">Start a conversation →</Link>
        </div>
      </article>
    </main>
  );
}
