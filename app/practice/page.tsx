import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";

export const metadata: Metadata = {
  title: "How I work",
  description:
    "How RN Collins studies a problem, finds what’s really broken and picks what to make: a brief, a guide, a course, a prototype or a working tool.",
  alternates: { canonical: "/practice" },
};

const stages = [
  {
    title: "Learn how it actually works",
    text: "I read the organization, field or process as it really runs, not as its documents describe it. This takes the most time, and skipping it produces confident work on the wrong problem.",
  },
  {
    title: "Find what’s really broken",
    text: "Not every gap matters. The one that does keeps causing the symptom people complain about, and it’s often not where the complaint points. Naming it precisely is most of the value.",
  },
  {
    title: "Make it visible",
    text: "A problem described only in a meeting gets re-argued at the next one. Showing it as a map, a log, a scored assessment or a worked example turns a recurring argument into a decision someone can make.",
  },
  {
    title: "Build what can be tested",
    text: "I pick the format last, from the problem: a decision brief, a strategy, a course, a prototype, a working tool, a facilitated session or a plan. Whatever it is, you should be able to tell whether it worked.",
  },
];

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">Practice</p>
        <h1>
          The problem decides
          <br />
          <em>what I make.</em>
        </h1>
        <p>
          I study how organizations and fields actually work, find the gap that matters
          and make it clear. Then I research, design, write, build, facilitate or plan
          what comes next.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSectionHead">
          <div>
            <p className="eyebrow">The method</p>
            <h2>Four steps, in this order.</h2>
          </div>
          <p>The order matters. Swap any two steps and you get a deliverable looking for a problem.</p>
        </div>
        <ol className="stageList">
          {stages.map((stage, index) => (
            <li key={stage.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="canonicalBand">
        <div className="shell canonicalSplit">
          <p className="eyebrow">Why the format changes</p>
          <div>
            <h2>I don’t force every problem into the same package.</h2>
            <p className="bigcopy">
              If you only sell one kind of project, every client turns out to need it. I’d
              rather find out first what’s happening, who it affects, what’s missing and
              what would make the next decision easier, then decide what to make.
            </p>
            <p>
              That has meant a scored assessment for one problem and a two-page guide for
              another; a tracker where nobody could see a field changing, and a
              browser-only worksheet where nobody would type the information into anything
              that sent it. The problem picked the format each time.
            </p>
            <Link href="/builds">See everything I’ve built →</Link>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">What you leave with</p>
          <div>
            <h2>A problem you can finally see, and something concrete you can use.</h2>
            <p className="bigcopy">
              Scope and deliverables are agreed before paid work starts. The format changes;
              the work is always clear, useful and honest about its evidence.
            </p>
            <div className="canonicalActions">
              <Link className="button" href="/contact">Bring me the problem →</Link>
              <Link className="button secondary" href="/for-organizations">
                How a project starts →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
