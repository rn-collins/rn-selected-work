import Link from 'next/link';
import { CanonicalPage } from '../../components/canonical-page';
import { DiscoveryBrowser } from '../../components/discovery-browser';
import { discoveryItems, pathways } from '../../lib/discovery';
export const revalidate=3600;
export const metadata={title:'Explore the portfolio',description:'Find writing, tools, case studies, essays, and evidence across RN Collins’s work.',alternates:{canonical:'/explore'}};
export default function Explore(){return <CanonicalPage><header className="canonicalSubhero shell"><p className="eyebrow">A way into the work</p><h1>Start with<br/><em>your question.</em></h1><p>Move between disciplines, follow an inquiry, or find a specific piece. Every result leads to a public portfolio record or published work.</p></header><div className="pathways shell">{pathways.map(p=><Link href={p.href} key={p.href}><h2>{p.title} →</h2><p>{p.description}</p></Link>)}</div><DiscoveryBrowser items={discoveryItems()}/></CanonicalPage>}
