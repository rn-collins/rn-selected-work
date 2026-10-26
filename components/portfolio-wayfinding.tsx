'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const destinations=[['Explore','/explore'],['Work','/work'],['Builds','/builds'],['Ideas','/ideas'],['Writing','/writing'],['Essays','/essays'],['Sources','/sources'],['Initiatives','/initiatives'],['About','/about'],['Contact','/contact']];
export function PortfolioWayfinding({bottom=false}:{bottom?:boolean}){
 const path=usePathname();
 if(bottom){const reading=/^\/(writing|journal|essays)/.test(path);const evidence=path.startsWith('/sources');const building=/^\/(builds|work|initiatives|advisory)/.test(path);const links=reading?[['Follow the evidence','/sources'],['Explore related tools','/explore?kind=Build']]:evidence?[['Read the essays','/essays'],['Browse published writing','/writing']]:building?[['Read the case studies','/work'],['Discuss a project','/for-organizations']]:[['Explore the work','/explore'],['Start a conversation','/contact']];return <aside className="portfolioNext shell" aria-label="Continue exploring"><p className="eyebrow">Where next?</p><div>{links.filter(([,h])=>h!==path).map(([t,h])=><Link key={h} href={h}>{t} →</Link>)}<Link href="/explore">Search the portfolio →</Link></div></aside>}
 return <nav className="portfolioBar" aria-label="Across the portfolio"><div className="shell"><Link href="/" className="portfolioHome">RN / Selected Works</Link><div>{destinations.map(([label,href])=><Link href={href} key={href} aria-current={path===href||path.startsWith(href+'/')?'page':undefined}>{label}</Link>)}</div></div></nav>;
}
