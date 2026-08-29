import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../../components/canonical-page";
import { BuildRoster } from "../../../components/build-roster";

export const metadata: Metadata = {
  title: "Institutions of One",
  description:
    "Research and systems concerning ownership, portability, independent practice, and institutional legibility — and the builds that currently exist under it.",
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
          Research and systems concerning ownership, portability, independent practice and
          institutional legibility — the conditions under which one person&rsquo;s work,
          capability, relationships and intellectual assets become portable, cumulative and
          legible to institutions that were not built to read them.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">The question</p>
          <div>
            <h2>What does an independent practice actually own?</h2>
            <p className="bigcopy">
              Independent professionals are assessed through institutional proxies —
              employer, title, credential, network — while the things that actually
              constitute the practice stay invisible.
            </p>
            <p>
              The work exists, often across a dozen systems. The relationships exist. The
              capability is demonstrable. None of it is legible as a coherent whole, and
              none of it travels well: it is held in platforms that can close, formats that
              can rot, and reputations that live inside a company someone else owns.
            </p>
            <p>
              The initiative treats that as a measurement and governance problem rather
              than a personal-branding one. What would have to be true for a body of
              independent work to compound? What evidence would a person need to carry
              with them? And what are the ethics of measuring any of it — because an
              instrument that scores a person&rsquo;s worth is not a neutral object, and
              the programme&rsquo;s own gates say so.
            </p>
          </div>
        </div>
      </section>

      <BuildRoster
        heading="What exists under Institutions of One."
        intro="The research platform, the public reader that publishes out of it, and the practice-architecture workbench that came out of the same inquiry."
        repos={["ownership-platform", "institutions-of-one-reader", "opfos-firm"]}
      />

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">Evidence boundary</p>
          <div>
            <h2>The instruments are candidates, and stay candidates.</h2>
            <p>
              The Ownership Index and the Portfolio Professional instrument are candidate
              instruments. Neither is validated, normed or activated, and neither should be
              described as though it were. The programme records its own gates for exactly
              that reason: an instrument that has not cleared them is a research artefact,
              not a measurement.
            </p>
            <p>
              Participant data and research operations remain private while the evidence and
              participation safeguards develop. The public reader is built with a
              build-time boundary check so that the private studio, review records,
              unreleased audio and uncleared assets cannot reach the deployment by
              accident — the separation is enforced by the build, not by a policy someone
              has to remember.
            </p>
            <div className="canonicalActions">
              <Link className="button" href="/work/ownership-platform">
                Read the case study →
              </Link>
              <Link className="button secondary" href="/initiatives/nsag">
                See the sibling initiative, NSAG →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
