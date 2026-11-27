import Link from 'next/link';
import { CanonicalPage } from '../../components/canonical-page';
import { DiscoveryBrowser } from '../../components/discovery-browser';
import { discoveryItems, pathways } from '../../lib/discovery';
export const revalidate=3600;
export const metadata={title:'Search the work',description:'Find writing, tools, case studies, essays, and evidence across RN Collins’s work.',alternates:{canonical:'/explore'}};
export default function Explore(){return <CanonicalPage><header className="canonicalSubhero shell"><p className="eyebrow">A way into the work</p><h1>Start with<br/><em>your question.</em></h1><p>Search across fields and projects, or find a specific piece. Every result opens a page on this site or the published original.</p></header><div className="pathways shell">{pathways.map(p=><Link href={p.href} key={p.href}><h2>{p.title} →</h2><p>{p.description}</p></Link>)}</div><DiscoveryBrowser items={discoveryItems()}/></CanonicalPage>}
