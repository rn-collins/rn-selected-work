import Link from "next/link";
import { conversationLink, primaryNavigation } from "../lib/site-navigation";
export function SiteNav(){return <nav className="siteNav shell" aria-label="Primary navigation"><Link className="mark" href="/" aria-label="RN home">RN<span>↗</span></Link><div className="siteNavLinks">{primaryNavigation.map((link)=><Link href={link.href} key={link.href}>{link.label}</Link>)}<Link className="siteNavAction" href={conversationLink.href}>{conversationLink.label}</Link></div></nav>}
