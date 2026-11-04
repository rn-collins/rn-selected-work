const assert = require('node:assert/strict');
const fs = require('node:fs');
const ideas = require('../data/ideas.json');
assert.equal(new Set(ideas.map(x=>x.id)).size,ideas.length,'Concept IDs must be unique');
for (const idea of ideas) {
 for (const key of ['id','title','category','stage','question','expression','boundary','provenance']) assert.ok(idea[key]?.trim(),`${idea.id} missing ${key}`);
 assert.match(idea.id,/^[a-z0-9-]+$/);
 assert.equal(typeof idea.held,'boolean');
}
// Public reading links are allowed only in a dedicated field, never in prose or private references.
for (const idea of ideas) {
 for (const key of ['publicationUrl', 'appendixUrl']) {
  if (idea[key] === undefined) continue;
  assert.equal(idea.stage, 'Published essay', `${idea.id}: publication link requires published status`);
  assert.match(idea[key], /^https:\/\/polymath-rn-collins\.beehiiv\.com\/p\/[a-z0-9-]+$/, `${idea.id}: only verified public article routes, no draft/query/auth URLs`);
 }
 if (idea.appendixUrl !== undefined) {
  assert.ok(idea.publicationUrl, `${idea.id}: appendix requires its parent essay link`);
  assert.notEqual(idea.appendixUrl, idea.publicationUrl, `${idea.id}: appendix must be a distinct supporting publication`);
 }
}
const publicText=JSON.stringify(ideas.map(({publicationUrl, appendixUrl, ...record})=>record));
assert.doesNotMatch(publicText,/InBody|Edge City|Pelsung|Gelephu|Lyft|Suzie Reider|Hystelica|Blest-Hopley|Yuriy Blokhin|Homecoming|Real Chemistry|Ericka McKenna|Laure Carli|Von Wooding|Helen Fan|Moonmax|Gordon Glenister|Joon Silverstein|Coachtopia|VanderVolpi|Frantz Ward|Vicente|Parabola|Buechler|Burgermeister|libfile_|file_0000|https?:\/\//i,'Recipient/private source must not leak into gallery data');
const exhibitionSource=fs.readFileSync('lib/ideas.ts','utf8');
const features=[...exhibitionSource.matchAll(/\{id:'([^']+)'/g)].map(m=>m[1]);
assert.ok(features.length>=12);
for(const id of features)assert.ok(ideas.some(x=>x.id===id),`Feature ${id} missing`);
assert.equal(ideas.filter(x=>x.stage==='Research module').length,15);
console.log(`${ideas.length} concepts, ${features.length} features: identity, content, privacy and module checks passed.`);
