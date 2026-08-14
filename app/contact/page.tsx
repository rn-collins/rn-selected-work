import type { Metadata } from "next";
import { CanonicalPage } from "../../components/canonical-page";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description: "Begin a conversation with RN about a consequential question, system, or organizational decision.",
};

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">Start a Conversation</p>
        <h1>What is not working<br />that you need to<br /><em>understand or change?</em></h1>
        <p>You do not need to know the deliverable. Tell me what is happening, why it matters now, and what decision or outcome is stuck.</p>
      </header>
      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <p className="eyebrow">A useful first message</p>
          <div>
            <h2>Send the problem in your own words.</h2>
            <ul className="canonicalList">
              <li>What organization, system, or group of people is involved?</li>
              <li>What keeps happening—or is failing to happen?</li>
              <li>Why does it matter now?</li>
              <li>What have you already tried or learned?</li>
            </ul>
            <p>Email is the primary contact path. LinkedIn remains available for networking and brief introductions. RN will first determine whether the question fits the practice and what kind of conversation would be useful.</p>
            <div className="canonicalActions">
              <a className="button" href="mailto:collins.ra@northeastern.edu">Email RN</a>
              <a className="button secondary" href="https://www.linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">Message RN on LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
