import type { Metadata } from "next";
import Link from "next/link";
import { CanonicalPage } from "../../components/canonical-page";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "Begin a conversation with RN about a consequential question, system, or organizational decision — what to send, what happens next, and what does not fit.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">Start a Conversation</p>
        <h1>
          What is not working
          <br />
          that you need to
          <br />
          <em>understand or change?</em>
        </h1>
        <p>
          You do not need to know the deliverable. Tell me what is happening, why it
          matters now, and what decision or outcome is stuck.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">A useful first message</p>
          <div>
            <h2>Send the problem in your own words.</h2>
            <ul className="canonicalList">
              <li>What organisation, system, or group of people is involved?</li>
              <li>What keeps happening — or keeps failing to happen?</li>
              <li>Why does it matter now, rather than last year?</li>
              <li>What have you already tried, and what did you learn from it?</li>
            </ul>
            <p>
              The last question is the one that does the most work. A problem that has
              survived two serious attempts is a different problem from one nobody has
              tried yet, and knowing which it is changes where the first week goes.
            </p>
            <p>
              You do not need to arrive with a brief, a budget or a proposed solution. If
              you already have one, send it — but send the situation as well, because a
              brief is a hypothesis about the problem and it is worth checking.
            </p>
          </div>
        </div>
      </section>

      <section className="canonicalBand">
        <div className="shell canonicalSplit">
          <p className="eyebrow">What happens next</p>
          <div>
            <h2>First I work out whether this is a question I should take.</h2>
            <p className="bigcopy">
              Not every question fits this practice, and the honest version of that
              conversation is short. Where it does fit, the next step is deciding what kind
              of engagement would actually be useful — which is a decision, not a menu.
            </p>
            <p>
              Scope and deliverables are defined before paid work begins. Where the work
              would need a licensed professional in a specific jurisdiction — legal advice,
              clinical judgement, a compliance opinion — I will say so rather than build
              around it. Several tools in this estate exist precisely to make that boundary
              legible, and the practice holds itself to the same line.
            </p>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">How to reach me</p>
          <div>
            <h2>Email is the path that works.</h2>
            <p>
              Email is the primary contact route. LinkedIn is available for networking and
              brief introductions, but a problem description does not survive a message
              box well, and it is worth the extra minute to send it properly.
            </p>
            <div className="canonicalActions">
              <a className="button" href="mailto:collins.ra@northeastern.edu">
                Email RN
              </a>
              <a
                className="button secondary"
                href="https://www.linkedin.com/in/rn-collins"
                target="_blank"
                rel="noreferrer"
              >
                Message RN on LinkedIn ↗
              </a>
            </div>
            <p>
              If you would rather see the work before writing, the{" "}
              <Link href="/builds">build index</Link> lists everything currently running,
              with an honest status on each, and <Link href="/practice">the practice page</Link>{" "}
              sets out the method those builds came out of.
            </p>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
