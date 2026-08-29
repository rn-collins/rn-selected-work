import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "How RN studies systems, identifies the consequential break, and chooses the form the work should take — brief, evidence system, curriculum, prototype, or working tool.",
  alternates: { canonical: "/practice" },
};

const stages = [
  {
    title: "Study the system",
    text: "Read the organisation, the field, or the process as it actually operates rather than as its documentation describes it. This is where most of the time goes, and it is the part that cannot be skipped without producing confident work about the wrong problem.",
  },
  {
    title: "Find the consequential break",
    text: "Not every gap matters. The one that matters is the one that keeps producing the symptom people are complaining about, and it is frequently not where the complaint points. Naming it precisely is most of the value; everything after is execution.",
  },
  {
    title: "Make it concrete and visible",
    text: "A break that can only be described in a meeting will be re-argued in the next meeting. Making it visible — as a map, a ledger, a scored assessment, a worked example — is what converts a recurring disagreement into a decision someone can actually take.",
  },
  {
    title: "Build what can be tested",
    text: "The output is chosen last, from the problem. Sometimes a decision brief. Sometimes an evidence system, a strategy, a curriculum, a prototype, a working tool, a facilitated inquiry, or an implementation plan. Whatever it is, it should be possible to find out whether it worked.",
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
          <p>The order is the method. Reversing any two of these produces a deliverable in search of a problem.</p>
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
            <h2>I do not force every problem into the same consulting package.</h2>
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
            <Link href="/builds">See the range in the build index →</Link>
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
                How an engagement begins →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
