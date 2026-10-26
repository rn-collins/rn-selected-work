import styles from './ideas.module.css';
import type { Exhibition } from '../../lib/ideas';
/** Original abstract visual studies: never screenshots or evidence of delivery. */
export function ConceptArt({form,identity}:{form:Exhibition['form'];identity:string}) {
 return <div className={`${styles.art} ${styles[form]}`} aria-hidden="true">
  {form==='orbit'?<><div className={styles.orbitCore}>{identity==='institutions-of-one'?'I / 1':'[ S ]'}</div>{Array.from({length:5},(_,i)=><i key={i} style={{'--i':i} as React.CSSProperties}/>)}</>:null}
  {form==='wave'?<><div className={styles.road}/><div className={styles.waveform}>{Array.from({length:38},(_,i)=><i key={i} style={{height:`${15+Math.abs(Math.sin(i*1.7))*65}%`,'--i':i} as React.CSSProperties}/>)}</div><span className={styles.artWord}>ON THE WAY.</span></>:null}
  {form==='stack'?<div className={styles.planes}>{['AUTHORITY','PROVENANCE','ACCOUNTABILITY','REFUSAL'].map((x,i)=><div key={x} style={{'--i':i} as React.CSSProperties}><span>{x}</span><b>0{i+1}</b></div>)}</div>:null}
  {form==='signal'?<><div className={styles.radar}>{Array.from({length:4},(_,i)=><i key={i} style={{'--i':i} as React.CSSProperties}/>)}</div><svg viewBox="0 0 500 300"><path d="M0 220L90 220 110 190 125 235 155 170 178 209 210 209 244 60 267 190 300 160 330 160 365 90 400 90 450 45 500 45" fill="none" stroke="currentColor" strokeWidth="2"/></svg></>:null}
  {form==='mesh'?<><div className={styles.meshLines}>{Array.from({length:18},(_,i)=><i key={i} style={{'--i':i} as React.CSSProperties}/>)}</div><span className={styles.artWord}>{identity==='nervous-system-studio'?'FEEL / NOTICE / TEST':'RESEARCH / TRANSLATE / LEARN'}</span></>:null}
  {form==='lens'?<><div className={styles.lensRings}>{Array.from({length:8},(_,i)=><i key={i} style={{'--i':i} as React.CSSProperties}/>)}</div><div className={styles.crosshair}/><span className={styles.artWord}>{identity==='signal-seam'?'ENTRY. IMAGE. AFTERLIFE.':'OBSERVE. CONNECT. REMEMBER.'}</span></>:null}
 </div>;
}
