import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../../components/canonical-page";
import { BuildRoster } from "../../../components/build-roster";

export const metadata: Metadata = {
  title: "Institutions of One",
  description:
    "Institutions of One is my research on what independent workers own, what they can take with them, and how institutions can read their work. This page lists the tools built under it.",
  alternates: { canonical: "/initiatives/institutions-of-one" },
};

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">An RN initiative · in development</p>
        <h1>
          Institutions
          <br />
          <em>of One.</em>
        </h1>
        <p>
          Research and tools on what independent workers own and can take with them. It
          asks when one person’s work, skills, relationships and ideas can move with them,
          add up over time, and make sense to institutions that weren’t built to read them.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">The question</p>
          <div>
            <h2>What does an independent practice actually own?</h2>
            <p className="bigcopy">
              Independent professionals get judged by stand-ins: employer, title,
              credential, network. The work that actually makes up their practice stays
              invisible.
            </p>
            <p>
              The work exists, often spread across a dozen apps and platforms. The
              relationships exist. The skill can be shown. But none of it reads as one
              whole, and none of it travels well: it sits on platforms that can close, in
              file formats that can stop opening, and in reputations that live inside a
              company someone else owns.
            </p>
            <p>
              This project treats that as a problem of measurement and governance, not
              personal branding. It asks what it would take for a body of independent work
              to add up over time, what evidence a person would need to carry, and whether
              measuring any of it is ethical. A tool that scores a person’s worth isn’t
              neutral, and the project’s own release rules say so.
            </p>
          </div>
        </div>
      </section>

      <BuildRoster
        heading="What Institutions of One has built so far."
        intro="The research site, the public reader that publishes from it, and a workbench for organizing your practice that grew out of the same research."
        repos={["ownership-platform", "institutions-of-one-reader", "opfos-firm"]}
      />

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">What the evidence supports</p>
          <div>
            <h2>The assessments aren’t validated, and the site says so.</h2>
            <p>
              The Ownership Index and the Portfolio Professional instrument are candidate
              instruments. Neither is validated, normed or activated, and neither should be
              described as though it were. The programme records its own gates for exactly
              that reason: an instrument that has not cleared them is a research artefact,
              not a measurement.
            </p>
            <p>
              Participant data and research work stay private while the evidence and the
              protections for participants are developed. The public reader runs a check
              every time it’s built, so private drafts, review notes, unreleased audio and
              material not yet cleared for use can’t go live by accident. The code enforces
              that line, not a rule someone has to remember.
            </p>
            <div className="canonicalActions">
              <Link className="button" href="/work/ownership-platform">
                Read the case study →
              </Link>
              <Link className="button secondary" href="/initiatives/nsag">
                See the related project, NSAG →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
