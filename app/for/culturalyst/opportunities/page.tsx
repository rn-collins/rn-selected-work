import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Culturalyst — Opportunity areas",
  description: "Possible opportunity areas identified from public sources, offered for discussion rather than as a proposal.",
  alternates: { canonical: "/for/culturalyst/opportunities" },
};

const opportunities = [
  {
    number: "01",
    title: "Make the ecosystem legible from the participant's side",
    text: "Translate Culturalyst's knowledge about discovery, validation, relationships, and funding into a visual map that helps an artist or cultural worker understand where they are, what evidence or connection may be missing, and where to move next.",
    form: "Visual explainer · public knowledge map · guided pathway",
  },
  {
    number: "02",
    title: "Turn discovery barriers into a diagnostic",
    text: "Build a self-assessment that helps multidisciplinary practitioners identify where their work becomes difficult for institutions to recognize—without forcing the person or the work into an artificial single category.",
    form: "Self-assessment · personalized next steps · ecosystem routing",
  },
  {
    number: "03",
    title: "Document where Hawaiʻi's creative infrastructure breaks",
    text: "Combine Culturalyst's ecosystem knowledge with interviews, public records, and participant experience to identify recurring breakdowns between valuable work and institutional recognition, relationships, capital, or sustained support.",
    form: "Research brief · article · field intelligence · system map",
  },
  {
    number: "04",
    title: "Build a reusable route back into Culturalyst",
    text: "Create an interactive public resource whose value is immediate to the user while keeping Culturalyst visible as the source, authority, and canonical destination for deeper participation.",
    form: "Interactive tool · referral logic · attribution architecture",
  },
];

export default function CulturalystOpportunities() {
  return <main><RecipientNav /><header className="recipientHero shell"><p className="eyebrow">03 · Opportunity map</p><h1>Useful forms<br /><em>begin with the</em><br />actual break.</h1><p>These are research-grounded directions for discussion. The right form depends on where Culturalyst sees discovery, validation, relationships, or funding breaking down in practice.</p></header><section className="work shell"><div className="opportunityGrid">{opportunities.map((item)=><article key={item.number}><span>{item.number}</span><h2>{item.title}</h2><p>{item.text}</p><small>{item.form}</small></article>)}</div></section><section className="culturalystAnswer"><div className="shell answergrid"><section><p className="eyebrow">Culturalyst contributes</p><p>Ecosystem knowledge, subject-matter authority, participant context, priorities, and the relationships that determine whether a resource is useful.</p></section><section><p className="eyebrow">RN contributes</p><p>Research, interviews, synthesis, institutional analysis, audience translation, service design, and the technical build required to make the knowledge usable.</p></section><section><p className="eyebrow">The first decision</p><p>Identify one concrete place where a Hawaiʻi artist or cultural worker currently loses visibility, context, connection, or momentum.</p></section></div></section><section className="canonicalSection shell"><div className="canonicalSplit"><p className="eyebrow">How these were derived</p><div><h2>From public sources, and therefore provisional.</h2><p className="bigcopy">Each area above was identified by reading Culturalyst&rsquo;s public material and the surrounding ecosystem, then asking where a stated intention appeared to be doing more work than the infrastructure supporting it.</p><p>That method has a known weakness, and it is worth naming rather than hiding: what is publicly visible about an organisation is a poor guide to what is actually hard inside it. An area that looks underbuilt from outside is frequently one that was deliberately deprioritised for a good reason, and an area that looks settled may be the one consuming everyone&rsquo;s week. These are prompts for a conversation, not findings, and the conversation brief exists to correct them.</p><p>They are also not a proposal. No scope, timeline or cost is implied by anything here, and none of it presumes that building something new is the right answer — for several of these, the more useful outcome would be establishing that the need is already met.</p></div></div></section><section className="canonicalSection shell"><div className="canonicalSplit"><p className="eyebrow">Disclosure</p><div><h2>Independently prepared.</h2><p>This view was researched and built by RN Collins without commission. It was not requested by, produced on behalf of, reviewed by, or endorsed by Culturalyst, and nothing in it should be read as a statement of Culturalyst&rsquo;s plans, priorities, or internal assessments. All source material is public.</p></div></div></section><RecipientFooter /></main>;
}

function RecipientNav(){return <nav className="nav shell" aria-label="Culturalyst view"><Link className="mark" href="/">RN<span>↗</span></Link><div className="navlinks"><Link href="/for/culturalyst">Why RN</Link><Link href="/for/culturalyst/work">Work</Link><Link href="/for/culturalyst/opportunities">Opportunities</Link><Link href="/for/culturalyst/conversation">Conversation</Link></div></nav>}
function RecipientFooter(){return <footer className="footer"><div className="shell footergrid"><div><p className="eyebrow">Next</p><h2>Bring the map<br /><em>into the room.</em></h2></div><div className="contact"><Link href="/for/culturalyst/conversation">Continue to the conversation brief →</Link><Link href="/">Explore all RN work →</Link></div></div></footer>}
