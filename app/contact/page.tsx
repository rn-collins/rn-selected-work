import type { Metadata } from "next";
import Link from "next/link";
import { SocialRow } from "../../components/social-row";
import { CanonicalPage } from "../../components/canonical-page";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "How to start a conversation with RN Collins: what to send, what happens next and what doesn’t fit.",
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
          You don’t need to know what you want made. Tell me what’s happening, why it
          matters now and what’s stuck.
        </p>
      </header>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">A useful first message</p>
          <div>
            <h2>Send the problem in your own words.</h2>
            <ul className="canonicalList">
              <li>Which organization or group of people is involved?</li>
              <li>What keeps happening, or keeps not happening?</li>
              <li>Why does it matter now, rather than last year?</li>
              <li>What have you already tried, and what did you learn from it?</li>
            </ul>
            <p>
              The last question matters most. A problem that has survived two serious
              attempts is different from one nobody has tried, and knowing which changes
              where the first week goes.
            </p>
            <p>
              You don’t need a brief, a budget or a solution. If you have one, send it,
              along with the situation.
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
              Not every question fits, and if yours doesn’t, I’ll say so quickly. If it
              does, we’ll decide together what kind of work would help.
            </p>
            <p>
              Scope and deliverables are agreed before paid work starts. If the work needs a
              licensed professional (legal advice, clinical judgment, a compliance opinion),
              I’ll tell you instead of working around it.
            </p>
          </div>
        </div>
      </section>

      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">How to reach me</p>
          <div>
            <h2>Message me where I post.</h2>
            <p className="dmLine">DMs are open on Instagram at @rn_collins.</p>
            <p>
              Instagram is the quickest route. LinkedIn works for networking and brief
              introductions. A problem description does not survive a message box well, so
              it is worth the extra minute to say what keeps happening, who it affects, and
              what has already been tried.
            </p>
            <SocialRow set="rn" />
            <p>
              Want to see the work first? The list of{" "}
              <Link href="/builds">everything I’ve built</Link> shows what’s running and its
              status, and <Link href="/practice">the practice page</Link> explains how I work.
            </p>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
