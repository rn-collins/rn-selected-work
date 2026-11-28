'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const destinations=[['Home','/'],['Work','/work'],['Writing','/writing'],['About','/about'],['Work with me','/work-with-me'],['Archive','/archive']]; // five pages plus the Archive (redesign, Nov 27)
export function PortfolioWayfinding({bottom=false}:{bottom?:boolean}){
 const path=usePathname();
 // The business-card hub (/links) starts at the top of a phone screen: no portfolio bar or 'Where next?' there.
 if(path==='/'||path==='/about'||path==='/links'||path==='/links/qr'||path==='/work-with-me')return null; // the home has its own gallery nav (redesign, Nov 27)
 if(bottom){const reading=/^\/(writing|journal|essays)/.test(path);const evidence=path.startsWith('/sources');const building=/^\/(builds|work|initiatives|advisory)/.test(path);const links=reading?[['See the sources','/sources'],['Explore related tools','/explore?kind=Build']]:evidence?[['Read the essays','/essays'],['Browse published writing','/writing']]:building?[['Read the case studies','/work'],['Work with me','/for-organizations']]:[['See the work','/explore'],['Get in touch','/contact']];return <aside className="portfolioNext shell" aria-label="Continue exploring"><p className="eyebrow">Where next?</p><div>{links.filter(([,h])=>h!==path).map(([t,h])=><Link key={h} href={h}>{t} →</Link>)}<Link href="/explore">Search the site →</Link></div></aside>}
 return <nav className="portfolioBar" aria-label="Across the portfolio"><div className="shell"><Link href="/" className="portfolioHome">RN / Selected Works</Link><div>{destinations.map(([label,href])=><Link href={href} key={href} aria-current={path===href||path.startsWith(href+'/')?'page':undefined}>{label}</Link>)}</div></div></nav>;
}
