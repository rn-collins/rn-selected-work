import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "How RN Collins studies a problem, finds what’s really broken and picks what to make: a brief, a guide, a course, a prototype or a working tool.",
  alternates: { canonical: "/practice" },
};

const stages = [
  {
    title: "Study the system",
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
          The problem determines
          <br />
          <em>the form.</em>
        </h1>
        <p>
          I research organisations and systems, find the gap that matters, make it
          concrete and visible, and then research, design, draft, build, facilitate or
          strategise what needs to happen next.
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
          <p className="eyebrow">Why the form varies</p>
          <div>
            <h2>I don’t force every problem into the same package.</h2>
            <p className="bigcopy">
              A practice that only sells one shape of engagement will find that every
              client turns out to need that shape. The alternative is to determine first
              what is happening, who it affects, what is missing, and what would make the
              next decision easier — and only then decide what to make.
            </p>
            <p>
              In practice that has meant a scored assessment for one problem and a plain
              two-page guide for another; a monitoring system where the constraint was that
              nobody could see a field changing, and a browser-local worksheet where the
              constraint was that nobody would put the information into anything that
              transmitted it. The variation is not eclecticism. It is the consequence of
              letting the constraint pick the form.
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
              Scope and deliverables are defined before paid work begins. The form changes;
              the obligation to make the work clear, useful and evidence-conscious does not.
            </p>
            <p>
              That obligation has a specific meaning here. It means the work states what it
              does not establish alongside what it does — because a finding presented
              without its boundary will be used past that boundary, and usually by someone
              who was not in the room when it was made. Several of the builds in this
              estate exist chiefly to make that boundary survive the handoff.
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
