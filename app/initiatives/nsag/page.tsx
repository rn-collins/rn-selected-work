import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../../components/canonical-page";
import { BuildRoster } from "../../../components/build-roster";

export const metadata: Metadata = {
  title: "Neurocognitive Systems Advisory Group",
  description:
    "Nervous-system-aware governance: my research on how an organization’s rules, tools and buildings affect people’s nervous systems. This page covers the framework, its workbenches, and the 15 modules now gathered on the NSAG site.",
  alternates: { canonical: "/initiatives/nsag" },
};

export default function Page() {

  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">An RN initiative · in development</p>
        <h1>
          Neurocognitive Systems
          <br />
          <em>Advisory Group.</em>
        </h1>
        <p>
          Nervous-system-aware governance and research-led institutional design: an
          original framework for identifying, documenting, measuring and governing how
          institutional policies, technologies, procedures, language, environments and
          power structures shape human cognitive and physiological conditions.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">The claim</p>
          <div>
            <h2>Institutions act on nervous systems whether or not they intend to.</h2>
            <p className="bigcopy">
              A scheduling policy, an escalation path, a lighting specification, a consent
              form and a piece of internal language are all interventions on a human
              nervous system. They are almost never designed as though they were, and they
              are almost never measured that way afterward.
            </p>
            <p>
              Most governance guides ask whether a policy can be defended. This framework
              asks what the policy does to the people living under it, and what you would
              have to observe to show otherwise. That can be measured, which is the point:
              it turns a value into something a program can be held to.
            </p>
            <p>
              The output is a set of workbenches, not a policy document. Each one walks
              through a real program step by step and ends in a list of actions, each with a
              named owner, a review date, and an escalation path that doesn’t depend on the
              goodwill of the person the complaint is about.
            </p>
          </div>
        </div>
      </section>

      <BuildRoster
        heading="The framework, put to work."
        intro="Each tool takes one area and turns the framework into a check someone can actually run. They all run in your browser, and none sends what you enter anywhere."
        repos={["nsag-site", "sport-nsag", "narch-advisory", "wnh-guide", "gapi-governance", "kids-developing-brains"]}
      />

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">The module collection</p>
          <div>
            <h2>Fifteen modules, now together on the NSAG site.</h2>
            <p className="bigcopy">
              The 15 modules set out the evidence and governance questions for 15 areas of
              how organizations are designed. Each one used to have its own website; now
              they’re all on the NSAG site.
            </p>
            <p>
              The separate sites were merged on August 15, 2026. The modules are still
              current; only the separate websites were retired.
            </p>
            <p>
              The old addresses still work and point to the current modules, so links shared
              before the merge don’t break. The full list of my builds keeps an entry for
              each one, with its status and where it now points.
            </p>
            <div className="canonicalActions">
              <Link className="button" href="/work/neurocognitive-systems-advisory-group">
                Read the NSAG case study →
              </Link>
              <Link className="button secondary" href="/builds#retired">
                See the old addresses →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">What the evidence supports</p>
          <div>
            <h2>A framework should say what it can’t do.</h2>
            <p>
              The case study documents the framework, the assessment modules, the evidence,
              the intelligence, the education and the advisory architecture without treating
              a proposed capability as a verified outcome. The workbenches are
              issue-spotting instruments: none of them is a safeguarding audit, an
              accessibility certification, a clinical determination or a legal opinion, and
              each says so on its own page rather than only here.
            </p>
            <Link href="/initiatives/institutions-of-one">
              See the related project, Institutions of One →
            </Link>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
