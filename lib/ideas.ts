import records from '../data/ideas.json';

type Recorded = (typeof records)[number];

/**
 * /ideas is concepts: proposal, research, prototype, paused.
 * A documented or in-development build already has a live URL on /builds.
 * The fifteen NSAG modules are one shipped site, not fifteen concept cards.
 */
function isConcept(idea: Recorded): boolean {
  if (idea.stage === "Documented build" || idea.stage === "In development") return false;
  if (idea.stage === "Research module" && /NSAG site/i.test(idea.boundary)) return false;
  return idea.stage === "Proposal" || idea.stage === "Prototype" || idea.stage === "Paused" || idea.stage === "Research module" || idea.stage === "Creative study";
}

export type Idea = Omit<Recorded, "stage"> & { stage: string };
export const ideas: Idea[] = records.filter(isConcept).map((idea) =>
  idea.stage === "Creative study" ? { ...idea, stage: "Proposal" } : idea,
);

export type Exhibition = { id: string; line: string; insight: string; form: 'orbit'|'wave'|'stack'|'signal'|'mesh'|'lens'; color: string; dark?: boolean; label: string };
export const exhibition: Exhibition[] = [
 {id:'the-moving-studio',line:'The journey\nis the studio.',insight:'Make the time between destinations a place for conversation, film and research into the work a title cannot capture.',form:'wave',color:'#ff623f',label:'01 / MEDIA + RESEARCH'},
 {id:'the-sovereign-stack',line:'Authority has to\ntravel with the use.',insight:'Keep a permitted use tied to the decision that authorized it when the system changes.',form:'stack',color:'#d4ff74',dark:true,label:'02 / GOVERNANCE'},
 {id:'inflection-radar',line:'See the turn\nbefore the brief.',insight:'Make a scientific or regulatory turning point inspectable: its evidence, timing, uncertainty and possible consequence.',form:'signal',color:'#ffcf83',dark:true,label:'03 / STRATEGIC INTELLIGENCE'},
 {id:'follow-the-fact',line:'Follow the fact.\nAll the way back.',insight:'Let a reader inspect what changed between original reporting and an AI answer, and recover the source with its context.',form:'signal',color:'#d4ff74',dark:true,label:'04 / PUBLIC KNOWLEDGE'},
 {id:'human-intelligence-os',line:'Human insight.\nInstitutional memory.',insight:'Keep cultural observation, identity, creative experiments and circularity evidence connected as a brand grows.',form:'lens',color:'#ecc7b1',label:'05 / BRAND + CULTURE'},
 {id:'research-to-practice',line:'From the evidence\nto the institution.',insight:'Connect sex-aware science, research priorities, practitioner education and the communities the field needs to hear.',form:'mesh',color:'#cbc4ff',dark:true,label:'06 / RESEARCH + TRANSLATION'},
 {id:'governable-automation',line:'Build the control\ninto the workflow.',insight:'Make each version of an automated workflow carry its ownership, risks, permissions and review history.',form:'stack',color:'#8cdfce',label:'07 / LAW + AUTOMATION'},
];
for (const feature of exhibition) {
 if (!ideas.some(i => i.id === feature.id)) throw new Error(`Missing exhibition record: ${feature.id}`);
}
