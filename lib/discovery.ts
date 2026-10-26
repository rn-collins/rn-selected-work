import { siteProperties } from './site-properties';
import { builds } from './builds';
import { projects } from './portfolio';
import { publicationArchive } from './publication-archive';
import { journalArticles } from './journal-articles';
import { accounts, listed } from './sources';
import { postedSoFar } from './aan-sources';
import { tfhPostedSoFar } from './tfh-sources';
import { essayAccounts, releasedEssays } from './essays';
import { releasedDdwEssays } from './ddw-essays';
export type DiscoveryItem = { title:string; href:string; description:string; kind:string; collection:string; status:string; topics:string[] };
const subjects: [string, RegExp][] = [
 ['Law + governance',/law|legal|governance|regulat|rights|policy|ownership|institution/i],
 ['Brain + health',/brain|neuro|health|cannabis|psychedelic|nurs|medic|psych|caregiver/i],
 ['Design + culture',/design|architect|fashion|art\b|museum|culture|biophil|wood|creative/i],
 ['Technology + systems',/technolog|software|AI\b|data|system|tool|automat|comput|platform/i],
 ['Education + opportunity',/educat|school|teach|student|learn|career|workforce|access|equity/i],
 ['Place + environment',/Hawai|Oʻahu|island|landscape|environment|climate|Eindhoven|Shanghai|nature/i],
];
function item(title:string,href:string,description:string,kind:string,collection:string,status='Published'):DiscoveryItem {
 const text=[title,description,collection].join(' ');
 return {title,href,description,kind,collection,status,topics:subjects.filter(([,r])=>r.test(text)).map(([t])=>t)};
}
// Server-side projection only: never pass raw release-controlled datasets to a client.
export function discoveryItems(now=new Date()):DiscoveryItem[] {
 const rows=[
 ...siteProperties.filter(p=>p.public&&p.destination&&p.destination!=='/').map(p=>item(p.name,p.destination!,p.purpose,'Portfolio',p.kind)),
 ...projects.map(p=>item(p.shortTitle,`/work/${p.slug}`,p.thesis,'Case study',p.kind,p.status)),
 ...builds.map(b=>item(b.title,`/builds/${b.repo}`,b.does,'Build',b.category,b.statusKind)),
 ...publicationArchive.map(p=>item(p.title,p.href,p.series+(p.note ? '. '+p.note : ''),'Writing',p.publication)),
 ...journalArticles.map(p=>item(p.title,`/writing/journal-of-biophilic-design/${p.slug}`,p.standfirst||p.subtitle,'Writing','Journal of Biophilic Design')),
 ...accounts.flatMap(a=>listed(a,now).map(p=>item(p.title,`/sources/${a.key}/${p.slug}`,p.series,'Sources',a.name))),
 ...postedSoFar(now).map(p=>item(p.title,`/sources/${p.slug}`,p.series,'Sources','Ask a Neuroscientist')),
 ...tfhPostedSoFar(now).map(p=>item(p.title,`/sources/tfh/${p.slug}`,p.series,'Sources','Tech From Here')),
 ...essayAccounts.flatMap(a=>releasedEssays(a.key,now).map(p=>item(p.title,`/essays/${a.key}/${p.id}`,p.description,'Essay',a.name))),
 ...releasedDdwEssays(now).map(p=>item(p.title,`/writing/dutch-design-week/${p.family}/${p.slug}`,p.description,'Essay',p.familyLabel)),
 ...[
 ['Zero to One','/ideas','Concepts, proposals and working systems conceived by RN Collins.'],
 ['Practice','/practice','How research becomes a framework, working system, or public resource.'],
 ['For organizations','/for-organizations','Ways to work together, from a question to a concrete project.'],
 ['Initiatives','/initiatives','Explore Aloha AI, Institutions of One, and neurocognitive systems research.'],
 ['About RN','/about','The background and perspective connecting the work.'],
 ['Start a conversation','/contact','Discuss a question, collaboration, or project.'],
 ].map(([t,h,d])=>item(t,h,d,'Portfolio','Practice')),
 ];
 return Array.from(new Map(rows.map(r=>[r.href,r])).values());
}
export const pathways=[
 {title:"Enter the concept collection",href:"/ideas",description:"Zero to One: the questions, the connections, and the worlds they become."},
 {title:'Understand how I work',href:'/work',description:'Case studies: the question, the reasoning, and what I made.'},
 {title:'Try something I built',href:'/explore?kind=Build',description:'Tools, observatories, learning resources, and experiments—with their status.'},
 {title:'Read across disciplines',href:'/writing',description:'Journalism, design writing, scientific papers, and policy work.'},
 {title:'Follow the evidence',href:'/sources',description:'Research references, original records, and image credits for released work.'},
 {title:'Explore an ongoing inquiry',href:'/initiatives',description:'The larger questions behind Aloha AI and Institutions of One.'},
 {title:'Work with me',href:'/for-organizations',description:'Find a useful starting point for your organization or project.'},
];
