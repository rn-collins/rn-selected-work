import Image from "next/image";
import type { Metadata } from "next";
import { CanonicalPage } from "../../components/canonical-page";

export const metadata: Metadata = {
  title: "About RN",
  description: "About Rayven-Nikkita (RN) Collins and her cross-disciplinary practice.",
};

export default function Page() {
  return (
    <CanonicalPage>
      <header className="canonicalSubhero shell">
        <p className="eyebrow">About RN</p>
        <h1>I follow the question<br /><em>across the boundaries.</em></h1>
        <p>Rayven-Nikkita (RN) Collins is a researcher, systems designer, builder, neuroscientist, and law student based in Honolulu, Hawaiʻi.</p>
      </header>
      <section className="canonicalSection shell">
        <div className="canonicalSplit">
          <figure className="caseImage portrait">
            <Image
              src="/rn-collins-portrait.svg"
              alt="Rayven-Nikkita (RN) Collins"
              width={1122}
              height={1402}
              sizes="(max-width: 800px) 100vw, 38vw"
              priority
            />
          </figure>
          <div>
            <p className="eyebrow">The throughline</p>
            <h2>I make difficult systems easier to see and use.</h2>
            <p className="bigcopy">My work crosses technology, law, neuroscience, governance, education, institutional design, and public knowledge because the problems themselves cross those boundaries.</p>
            <p>I may research an organization, map what is breaking, draft the strategy, design the resource, build the tool, or facilitate the conversation. What stays consistent is the method: understand the system, find what matters, make it concrete, and create the next useful form.</p>
          </div>
        </div>
      </section>
    </CanonicalPage>
  );
}
