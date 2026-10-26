'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Sculpture from './sculpture';
import Link from 'next/link';
import type { Idea, Exhibition } from '../../lib/ideas';
import { ConceptArt } from './concept-art';
import styles from './ideas.module.css';

export function IdeaGallery({ideas,exhibition}:{ideas:Idea[];exhibition:Exhibition[]}) {
 const [paused,setPaused]=useState(true);
 const [query,setQuery]=useState('');const [category,setCategory]=useState('All');
 const [selected,setSelected]=useState<Idea|null>(null);const [copied,setCopied]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);const trigger=useRef<HTMLElement|null>(null);
 const categories=['All',...new Set(ideas.map(x=>x.category))];
 const filtered=ideas.filter(x=>(category==='All'||x.category===category)&&`${x.title} ${x.question} ${x.expression} ${x.stage}`.toLowerCase().includes(query.toLowerCase()));
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');setPaused(media.matches);const change=()=>setPaused(media.matches);media.addEventListener('change',change);return()=>media.removeEventListener('change',change);},[]);
 useEffect(()=>{const sync=()=>{const id=new URLSearchParams(window.location.search).get('idea');const found=ideas.find(x=>x.id===id);if(found){setSelected(found);dialog.current?.showModal();}else{dialog.current?.close();setSelected(null);}};sync();window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[ideas]);
 useEffect(()=>{if(!selected)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};},[selected]);
 function open(idea:Idea){trigger.current=document.activeElement as HTMLElement;setSelected(idea);setCopied(false);const url=new URL(window.location.href);url.searchParams.set('idea',idea.id);window.history.pushState({},'',url);dialog.current?.showModal();}
 function close(){dialog.current?.close();setSelected(null);const url=new URL(window.location.href);url.searchParams.delete('idea');window.history.replaceState({},'',url);trigger.current?.focus();}
 async function copy(){try{await navigator.clipboard.writeText(window.location.href);setCopied(true);}catch{setCopied(false);}}
 return <main className={styles.gallery} data-paused={paused||!!selected}>
  <div className={styles.utility}><Link href="/">RN / SELECTED WORKS</Link><span>THE CONCEPT COLLECTION</span><button onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?'Play motion ↗':'Pause motion Ⅱ'}</button></div>
  <header className={styles.hero}>
   <div className={styles.heroTop}><span>CONCEIVED BY RAYVEN-NIKKITA COLLINS</span><span>RESEARCH / STRATEGY / SYSTEMS / CULTURE</span></div>
   <div className={styles.heroTitle}><span>ZERO</span><span className={styles.to}>to</span><span>ONE<span className={styles.period}>.</span></span></div>
   <Sculpture paused={paused||!!selected}/>
   <div className={styles.heroBottom}><div><p className={styles.kicker}>BEFORE IT EXISTS, SOMEONE HAS TO SEE IT.</p><p className={styles.intro}>I find the question.<br/>Then I give it a world.</p></div><div className={styles.heroCaption}><p>Concepts, proposals and working systems across disciplines. A collection of what I saw—and what I made of it.</p><a href="#exhibition">Enter the collection <span>↓</span></a></div></div>
   <span className={styles.axis}>RN — ORIGIN / POSSIBILITY / FORM</span>
  </header>
  <div className={styles.ribbon} aria-hidden="true"><div>{[0,1,2,3].map(i=><span key={i}>A QUESTION BECOMES A WORLD <b>↗</b> ZERO TO ONE <b>✳</b> </span>)}</div></div>
  <section className={styles.collection} id="exhibition" aria-labelledby="exhibition-title">
   <div className={styles.sectionHead}><div><p className={styles.kicker}>01 / THE EXHIBITION</p><h1 id="exhibition-title">Possibility,<br/><em>made tangible.</em></h1></div><p>Enter a concept to see the question, the move, and its present form. Each visual is an original interpretation of the idea.</p></div>
   <div className={styles.exhibits}>{exhibition.map((feature,i)=>{const idea=ideas.find(x=>x.id===feature.id)!;return <article key={idea.id} className={`${styles.exhibit} ${feature.dark?styles.dark:styles.light}`} style={{'--accent':feature.color} as CSSProperties}>
    <div className={styles.exhibitTop}><span>{feature.label}</span><span>{idea.stage}</span></div>
    <button className={styles.exhibitButton} onClick={()=>open(idea)} aria-label={`Explore ${idea.title}`}><ConceptArt form={feature.form} identity={idea.id}/><div className={styles.exhibitText}><p className={styles.exhibitName}>{idea.title}</p><h2>{feature.line.split('\n').map((line,j)=><span key={j}>{line}</span>)}</h2><p className={styles.insight}>{feature.insight}</p><span className={styles.enter}>Inside the idea <span>↗</span></span></div></button>
    <div className={styles.exhibitFoot}><span>CONCEPT / RN COLLINS</span><span>{String(i+1).padStart(2,'0')} — {String(exhibition.length).padStart(2,'0')}</span></div>
   </article>;})}</div>
  </section>
  <section className={styles.manifesto}><p className={styles.kicker}>THE THREAD THROUGH THE WORK</p><p>A legal question.<br/>A nervous system.<br/>A city. A working life.<br/><em>I see the connections.</em></p><span>Then I build something you can examine.</span></section>
  <section className={styles.register} id="register" aria-labelledby="register-title"><div className={styles.sectionHead}><div><p className={styles.kicker}>02 / THE IDEA REGISTER</p><h2 id="register-title">Follow the<br/><em>range.</em></h2></div><p>{ideas.length} documented concepts, builds and research modules in this edition. The archive grows as earlier proposals and source records are recovered.</p></div>
   <div className={styles.searchRow}><label htmlFor="idea-search">Find a question, concept or field</label><input id="idea-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try ownership, learning, governance…"/><span role="status">{filtered.length} / {ideas.length}</span></div>
   <div className={styles.filters} aria-label="Filter concepts by field">{categories.map(x=><button key={x} aria-pressed={category===x} onClick={()=>setCategory(x)}>{x}</button>)}</div>
   <div className={styles.recordList}>{filtered.map(idea=><button className={styles.record} key={idea.id} onClick={()=>open(idea)}><span className={styles.recordField}>{idea.category}</span><span className={styles.recordName}>{idea.title}</span><span className={styles.recordStage}>{idea.stage}</span><span aria-hidden="true">↗</span></button>)}{!filtered.length?<div className={styles.empty}><p>No matching concepts.</p><button onClick={()=>{setQuery('');setCategory('All');}}>Reset filters</button></div>:null}</div>
   <p className={styles.archiveNote}>This is a catalogue of RN’s work and proposed directions. Related modules are listed individually; the count is not a claim of {ideas.length} separate inventions. Development labels describe the recovered records, not a fresh operational audit. Recipient identities and correspondence are omitted.</p>
  </section>
  <footer className={styles.footer}><span>THE NEXT ONE STARTS WITH A QUESTION.</span><h2>What could<br/><em>we make real?</em></h2><Link href="/contact">Work with RN <b>↗</b></Link><div><span>RAYVEN-NIKKITA COLLINS</span><a href="#exhibition">Back to the collection ↑</a></div></footer>
  <dialog ref={dialog} className={styles.dialog} onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===e.currentTarget)close();}} aria-labelledby="idea-dialog-title"><div className={styles.dialogInner}>{selected?<><div className={styles.dialogTop}><span>{selected.category} / {selected.stage}</span><button onClick={close} aria-label="Close concept" autoFocus>Close ×</button></div><p className={styles.kicker}>CONCEIVED + DEVELOPED BY RN COLLINS</p><h2 id="idea-dialog-title">{selected.title}</h2><section><h3>The question</h3><p>{selected.question}</p></section><section><h3>The expression</h3><p>{selected.expression}</p></section><section className={styles.boundary}><h3>Where it stands</h3><p>{selected.boundary}</p>{selected.held?<p>The working artifact is held from public linking.</p>:null}</section><div className={styles.dialogActions}><Link href="/contact">Discuss this direction ↗</Link><button onClick={copy}>{copied?'Link copied ✓':'Copy concept link ↗'}</button></div><p className={styles.dialogCredit}>{selected.provenance}<br/>RN Selected Works / Zero to One · Catalogue edition October 2026</p></>:null}</div></dialog>
 </main>;
}
