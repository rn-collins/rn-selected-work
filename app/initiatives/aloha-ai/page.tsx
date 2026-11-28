import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../../components/canonical-page";
import { BuildRoster } from "../../../components/build-roster";

export const metadata: Metadata = {
  title: "Aloha AI",
  description:
    "Aloha AI is my practice for AI courses, decision tools and hands-on help for organizations adopting AI. This page lists every tool built under it and its real status.",
  alternates: { canonical: "/initiatives/aloha-ai" },
};

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">My initiative · in development</p>
        <h1>Aloha AI</h1>
        <p>
          Aloha AI offers AI courses, decision tools and hands-on help for organizations,
          as part of my practice. Its claim is narrow: most organizations adopting AI
          don’t have a technology problem. They have a decision problem, and the work that
          makes the decision good happens before anyone picks a vendor.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">The problem it works on</p>
          <div>
            <h2>The missing step is not technical.</h2>
            <p className="bigcopy">
              Organizations are often pushed straight from a vague plan to use AI into
              picking a vendor. What gets skipped is the part that decides whether the
              result is any good.
            </p>
            <p>
              Define the specific problem. Consider the non-AI options honestly. Find out who
              is affected, and ask them. Keep the evidence and the doubts, not only the
              conclusion. Give ownership to one person, not a committee. And decide in
              advance, while it’s still cheap, what would make a pilot stop and what rolling
              it back would take.
            </p>
            <p>
              Each tool here tries to make one of those steps cheap enough that a team
              actually takes it. They all run in your browser: no account, nothing sent
              anywhere, and each one says which judgment it can’t make for you.
            </p>
          </div>
        </div>
      </section>

      <BuildRoster
        heading="What Aloha AI has built so far."
        intro="Every link below loaded the last time I updated the full list of my builds. Two are prototypes and one is a proposal, and each is labeled that way."
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
          <p className="eyebrow">What’s done and what isn’t</p>
          <div>
            <h2>
              The site is big.
              <br />
              Each product on it has its own bar for done.
            </h2>
            <p>
              The public Aloha AI site has courses, evidence, decision tools and ways to work
              with me. A masterclass, a twelve-month plan, a Decision Desk issue, a Source
              Desk page or a Clinic isn’t finished just because a page or an outline for it
              exists. A page existing isn’t the same as a product existing.
            </p>
            <p>
              What the live site does have: a guided starting point, open learning and Source
              Desk pages, pages for procurement and accessibility, and four finished decision
              tools that run in your browser: Opportunity Studio, plus a decision record, a
              vendor comparison and a pilot designer in its tools section. What it doesn’t
              have yet: finished client projects, independently checked sources, team
              collaboration features, professional advice, compliance certification, or
              proof that it improved any organization’s results.
            </p>
            <div className="canonicalActions">
              <Link className="button" href="/work/aloha-ai">
                Read the case study →
              </Link>
              <a
                className="button secondary"
                href="https://aloha-ai-consulting.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open the Aloha AI site ↗
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
              Aloha AI is my client-facing strategy and build practice. The Neurocognitive
              Systems Advisory Group (NSAG) is my research-led practice for designing how
              organizations work. They’re kept separate on purpose: Aloha AI may build tools
              that put NSAG work into practice, but an Aloha AI tool is not an NSAG finding,
              and neither one borrows the other’s evidence.
            </p>
            <Link href="/initiatives/nsag">See the NSAG initiative →</Link>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
