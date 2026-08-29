import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../../components/canonical-page";
import { BuildRoster } from "../../../components/build-roster";
import { buildsIn } from "../../../lib/builds";

export const metadata: Metadata = {
  title: "Neurocognitive Systems Advisory Group",
  description:
    "Nervous-system-aware governance and research-led institutional design: the framework, the workbenches that operationalise it, and the fifteen prototype modules that were retired.",
  alternates: { canonical: "/initiatives/nsag" },
};

export default function Page() {
  const retiredCount = buildsIn("retired").length;

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
              are almost never measured that way afterwards.
            </p>
            <p>
              The framework asks a governance question that most governance frameworks
              skip: not whether a policy is defensible, but what it does to the people
              living inside it, and what observation would have shown otherwise. That is a
              measurable question, which is the point — it turns a value into something a
              programme can be held to.
            </p>
            <p>
              What that produces is not a policy document. It produces workbenches: a
              structured pass over a real programme that ends in an owned action register
              with named responsibility, a review date and an escalation path that does not
              depend on the goodwill of the person being escalated about.
            </p>
          </div>
        </div>
      </section>

      <BuildRoster
        heading="The framework, operationalised."
        intro="Each of these takes one domain and turns the framework into a pass someone can actually run. All are browser-local; none transmits what you enter."
        repos={["nsag-site", "sport-nsag", "narch-advisory", "wnh-guide", "gapi-governance", "kids-developing-brains"]}
      />

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">What was retired</p>
          <div>
            <h2>{retiredCount} prototype modules, retired and left online on purpose.</h2>
            <p className="bigcopy">
              The first attempt at this work split institutional governance into fifteen
              numbered assessable domains, from governance and accountability through to
              implementation readiness, each with its own deployment.
            </p>
            <p>
              That approach did not survive contact with use. Fifteen separate assessments
              produced fifteen separate conversations and no single place where a decision
              got made, which is the failure mode the framework exists to name. The modules
              were retired rather than quietly repurposed.
            </p>
            <p>
              Their deployments are still online, serving a retirement notice. A link to
              one of them resolves to an honest statement rather than a 404 — or, worse, a
              working-looking assessment form that nobody maintains. They are listed in the
              build index under their own heading, as retired, because pretending they were
              never built would be its own inaccuracy.
            </p>
            <div className="canonicalActions">
              <Link className="button" href="/work/neurocognitive-systems-advisory-group">
                Read the NSAG case study →
              </Link>
              <Link className="button secondary" href="/builds#retired">
                See the retired modules →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">Evidence boundary</p>
          <div>
            <h2>Frameworks must stay attached to their boundaries.</h2>
            <p>
              The case study documents the framework, the assessment modules, the evidence,
              the intelligence, the education and the advisory architecture without treating
              a proposed capability as a verified outcome. The workbenches are
              issue-spotting instruments: none of them is a safeguarding audit, an
              accessibility certification, a clinical determination or a legal opinion, and
              each says so on its own page rather than only here.
            </p>
            <Link href="/initiatives/institutions-of-one">
              See the sibling initiative, Institutions of One →
            </Link>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
