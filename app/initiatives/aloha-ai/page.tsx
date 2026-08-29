import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../../components/canonical-page";
import { BuildRoster } from "../../../components/build-roster";

export const metadata: Metadata = {
  title: "Aloha AI",
  description:
    "An RN initiative for AI-specific education, decision support, tools, and implementation work — with the builds that currently exist under it, and their honest status.",
  alternates: { canonical: "/initiatives/aloha-ai" },
};

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">An RN initiative · in development</p>
        <h1>Aloha AI</h1>
        <p>
          AI-specific education, decision support, tools and implementation work, held
          within RN&rsquo;s practice. The organising claim is narrow: most organisations
          adopting AI do not have a technology problem, they have a decision-architecture
          problem, and the work that would have made the decision good happens before any
          vendor is chosen.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">The problem it works on</p>
          <div>
            <h2>The missing step is not technical.</h2>
            <p className="bigcopy">
              Organisations are routinely pushed from a vague intention to use AI straight
              into vendor selection. What gets skipped is the part that determines whether
              the result is any good.
            </p>
            <p>
              Defining the bounded problem. Considering the non-AI alternatives honestly.
              Identifying who is affected and asking them. Preserving the evidence and the
              uncertainty rather than the conclusion. Assigning ownership to a person, not
              a committee. And deciding in advance — while it is still cheap to decide —
              what would make a pilot stop, and what rolling it back would involve.
            </p>
            <p>
              Every tool under this initiative is an attempt to make one of those steps
              cheap enough that a team actually takes it. They are browser-local by
              design: no account, nothing transmitted, and each one states the judgement it
              cannot make on your behalf.
            </p>
          </div>
        </div>
      </section>

      <BuildRoster
        heading="What exists under Aloha AI right now."
        intro="Each of these was checked and answered at the last regeneration of the build index. Two are prototypes and one is a proposal; they are labelled as such rather than folded into the same present tense as the released tools."
        repos={[
          "aloha-ai-consulting",
          "ai-budget-calc",
          "aloha-governance-audit",
          "aloha-creator-rights",
          "aloha-third-asset",
          "aloha-ai-governance",
          "aloha-culture-monitor",
          "aloha-behavioral-intelligence",
          "aloha-encoding-effect",
          "aloha-build-club",
          "sovereign-stack",
        ]}
      />

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">Current boundary</p>
          <div>
            <h2>
              The platform is substantial.
              <br />
              Its products have separate completion gates.
            </h2>
            <p>
              The public platform contains learning surfaces, evidence, decision tools and
              service pathways. A masterclass, a twelve-month plan, a Decision Desk issue,
              a Source Desk surface or a Clinic is not complete merely because a page or an
              architecture for it exists, and this initiative does not treat the existence
              of a route as the existence of a product.
            </p>
            <p>
              What the live platform does establish: a routed starting experience, open
              learning and Source Desk surfaces, procurement and accessibility pathways,
              and four complete browser-local decision aids — the Opportunity Studio, and a
              decision record, a vendor comparison and a pilot designer under its tools
              route. What it does not establish: completed client engagements, independently verified
              source accuracy, enterprise collaboration, professional advice, compliance
              certification, or improved organisational outcomes.
            </p>
            <div className="canonicalActions">
              <Link className="button" href="/work/aloha-ai">
                Read the verified case study →
              </Link>
              <a
                className="button secondary"
                href="https://aloha-ai-consulting.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open the current platform ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">Relationship to NSAG</p>
          <div>
            <h2>Two initiatives, one of which builds for the other.</h2>
            <p>
              Aloha AI is the client-facing strategy and build practice. The Neurocognitive
              Systems Advisory Group is the research-led institutional-design practice.
              They are separate, and the separation matters: Aloha AI may build technical
              infrastructure that implements NSAG work, but an Aloha AI tool is not an NSAG
              finding, and neither initiative inherits the other&rsquo;s evidence.
            </p>
            <Link href="/initiatives/nsag">See the NSAG initiative →</Link>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
