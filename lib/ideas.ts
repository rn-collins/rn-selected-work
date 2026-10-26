import records from '../data/ideas.json';
export type Idea = (typeof records)[number];
export const ideas: Idea[] = records;
export type Exhibition = { id: string; line: string; insight: string; form: 'orbit'|'wave'|'stack'|'signal'|'mesh'|'lens'; color: string; dark?: boolean; label: string };
export const exhibition: Exhibition[] = [
 {id:'institutions-of-one',line:'A person can be\nan institution.',insight:'Make the value of a working life portable: its capabilities, relationships, intellectual assets and evidence.',form:'orbit',color:'#e9aeff',dark:true,label:'01 / INDEPENDENT WORK'},
 {id:'the-moving-studio',line:'The journey\nis the studio.',insight:'Turn the time between destinations into a place for conversation, film and research into the work a title cannot capture.',form:'wave',color:'#ff623f',label:'02 / MEDIA + RESEARCH'},
 {id:'the-sovereign-stack',line:'A system should\nknow its limits.',insight:'Give authority, refusal, withdrawal and accountability a place inside the technical architecture.',form:'stack',color:'#d4ff74',dark:true,label:'03 / GOVERNANCE'},
 {id:'nervous-system-studio',line:'Make room\nfor the person.',insight:'Connect a person’s sensory context to a loop of observation, hypothesis and small experiments.',form:'mesh',color:'#b6bfff',label:'04 / NEUROSCIENCE + DESIGN'},
 {id:'inflection-radar',line:'See the turn\nbefore the brief.',insight:'Make a scientific or regulatory turning point inspectable: its evidence, timing, uncertainty and possible consequence.',form:'signal',color:'#ffcf83',dark:true,label:'05 / STRATEGIC INTELLIGENCE'},
 {id:'signal-seam',line:'Read the city\nbeneath the show.',insight:'Treat a cultural event as a temporary system: who enters, how attention moves and which records survive.',form:'lens',color:'#ff8fbe',label:'06 / CULTURE + SYSTEMS'},
 {id:'follow-the-fact',line:'Follow the fact.\nAll the way back.',insight:'Let a reader inspect what changed between original reporting and an AI answer—and recover the source with its context.',form:'signal',color:'#d4ff74',dark:true,label:'07 / PUBLIC KNOWLEDGE'},
 {id:'human-intelligence-os',line:'Human insight.\nInstitutional memory.',insight:'Keep cultural observation, identity, creative experiments and circularity evidence connected as a brand grows.',form:'lens',color:'#ecc7b1',label:'08 / BRAND + CULTURE'},
 {id:'research-to-practice',line:'From the evidence\nto the institution.',insight:'Connect sex-aware science, research priorities, practitioner education and the communities the field needs to hear.',form:'mesh',color:'#cbc4ff',dark:true,label:'09 / RESEARCH + TRANSLATION'},
 {id:'governable-automation',line:'Build the control\ninto the workflow.',insight:'Make each version of an automated workflow carry its ownership, risks, permissions and review history.',form:'stack',color:'#8cdfce',label:'10 / LAW + AUTOMATION'},
 {id:'the-third-asset',line:'Before the image,\nthe decisions.',insight:'Build the rights, provenance and incident-response map before synthetic media becomes a crisis.',form:'stack',color:'#8cdfce',dark:true,label:'11 / CREATIVE GOVERNANCE'},
 {id:'source-integrity-workbench',line:'Keep the evidence\nin the picture.',insight:'Make the source and the claim travel together, so the reader can inspect what an answer rests on.',form:'orbit',color:'#f7dd7d',label:'12 / EVIDENCE DESIGN'},
];
for (const feature of exhibition) {
 if (!ideas.some(i => i.id === feature.id)) throw new Error(`Missing exhibition record: ${feature.id}`);
}
