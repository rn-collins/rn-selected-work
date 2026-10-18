'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { DiscoveryItem } from '../lib/discovery';
type DiscoveryProps = {items:DiscoveryItem[];title?:string};
export function DiscoveryBrowser(props:DiscoveryProps) {
 return <Suspense fallback={<p className="shell" role="status">Loading portfolio search…</p>}><DiscoveryBrowserContent {...props}/></Suspense>;
}
function DiscoveryBrowserContent({items,title='Find your way through the work'}:DiscoveryProps) {
 const searchParams = useSearchParams();
 const [q,setQ]=useState(''),[kind,setKind]=useState(''),[topic,setTopic]=useState(''),[collection,setCollection]=useState(''),[status,setStatus]=useState(''),[limit,setLimit]=useState(12);
 useEffect(()=>{const p=searchParams;setQ(p.get('q')||'');setKind(p.get('kind')||'');setTopic(p.get('topic')||'');setCollection(p.get('collection')||'');setStatus(p.get('status')||'');setLimit(12)},[searchParams]);
 function update(key:string,value:string){({q:setQ,kind:setKind,topic:setTopic,collection:setCollection,status:setStatus}[key]!)(value);setLimit(12);const u=new URL(window.location.href);if(value)u.searchParams.set(key,value);else u.searchParams.delete(key);window.history.replaceState(null,'',u);}
 function clear(){setQ('');setKind('');setTopic('');setCollection('');setStatus('');setLimit(12);const u=new URL(window.location.href);['q','kind','topic','collection','status'].forEach(k=>u.searchParams.delete(k));window.history.replaceState(null,'',u);}
 const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const words=normalize(q).trim().split(/\s+/).filter(Boolean);
 const result=items.filter(i=>(!kind||i.kind===kind)&&(!topic||i.topics.includes(topic))&&(!collection||i.collection===collection)&&(!status||i.status===status)&&words.every(w=>normalize([i.title,i.description,i.collection,...i.topics].join(' ')).includes(w)));
 const options=(key:'kind'|'collection'|'status')=>Array.from(new Set(items.map(i=>i[key]))).sort();
 const topics=Array.from(new Set(items.flatMap(i=>i.topics))).sort();
 if(items.length===0) return <section className="discovery shell" aria-label={title}><h2>{title}</h2><p>There are no public records to browse in this collection yet. New work appears here after release.</p><a href="/writing">Browse published writing →</a></section>;
 return <section className="discovery shell" aria-label={title}><div className="discoveryHeading"><div><p className="eyebrow">Explore the portfolio</p><h2>{title}</h2></div><p>Search by a question, subject, title, or publication.</p></div>
 <div className="discoveryControls"><label className="discoveryQuery">Search<input type="search" value={q} onChange={e=>update('q',e.target.value)} placeholder="Try neuroscience, ownership, education…"/></label>
 <label>Format<select value={kind} onChange={e=>update('kind',e.target.value)}><option value="">All formats</option>{options('kind').map(v=><option key={v}>{v}</option>)}</select></label>
 <label>Subject<select value={topic} onChange={e=>update('topic',e.target.value)}><option value="">All subjects</option>{topics.map(v=><option key={v}>{v}</option>)}</select></label>
 <label>Collection<select value={collection} onChange={e=>update('collection',e.target.value)}><option value="">All collections</option>{options('collection').map(v=><option key={v}>{v}</option>)}</select></label>
 {items.some(i=>i.kind==='Build')&&<label>Project status<select value={status} onChange={e=>update('status',e.target.value)}><option value="">All statuses</option>{Array.from(new Set(items.filter(i=>i.kind==='Build').map(i=>i.status))).sort().map(v=><option key={v}>{v}</option>)}</select></label>}</div>
 <div className="discoveryCount"><p role="status" aria-live="polite">{result.length} results · showing {Math.min(limit,result.length)}</p><button type="button" onClick={clear}>Clear filters</button></div>
 {result.length===0?<p className="discoveryEmpty">No matching work. Try a broader term or clear a filter.</p>:<ol className="discoveryResults">{result.slice(0,limit).map(i=><li key={i.href}><p className="eyebrow">{i.kind} · {i.collection}{i.kind==='Build'?` · ${i.status}`:''}</p><h3><a href={i.href} {...(i.href.startsWith('https:')?{target:'_blank',rel:'noopener noreferrer'}:{})}>{i.title}{i.href.startsWith('https:')?' ↗':' →'}</a></h3><p>{i.description}</p></li>)}</ol>}
 {result.length>limit&&<button className="discoveryMore" type="button" onClick={()=>setLimit(limit+12)}>Show 12 more</button>}
 </section>;
}
