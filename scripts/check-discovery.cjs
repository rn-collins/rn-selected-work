// Run with node scripts/check-discovery.cjs. Verify the public projection, not raw data counts.
const fs=require('node:fs');
const ts=require('typescript');
const assert=require('node:assert/strict');
require.extensions['.ts']=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true,target:ts.ScriptTarget.ES2022}}).outputText,file);
const {discoveryItems}=require('../lib/discovery.ts');
const {accounts,listed}=require('../lib/sources.ts');
const {postedSoFar}=require('../lib/aan-sources.ts');
const {tfhPostedSoFar}=require('../lib/tfh-sources.ts');
const {essayAccounts,releasedEssays}=require('../lib/essays.ts');
const {releasedDdwEssays}=require('../lib/ddw-essays.ts');
for(const now of [new Date('1900-01-01T00:00:00Z'),new Date(),new Date('2099-01-01T00:00:00Z')]) {
 const items=discoveryItems(now);
 assert.equal(new Set(items.map(i=>i.href)).size,items.length);
 const allowed=new Set([
 ...accounts.flatMap(a=>listed(a,now).map(p=>`/sources/${a.key}/${p.slug}`)),
 ...postedSoFar(now).map(p=>`/sources/${p.slug}`),...tfhPostedSoFar(now).map(p=>`/sources/tfh/${p.slug}`),
 ...essayAccounts.flatMap(a=>releasedEssays(a.key,now).map(e=>`/essays/${a.key}/${e.id}`)),
 ...releasedDdwEssays(now).map(e=>`/writing/dutch-design-week/${e.family}/${e.slug}`),
 ]);
 for(const i of items){assert(i.title&&i.href);assert(!i.href.includes('github.com'));if(['Sources','Essay'].includes(i.kind))assert(allowed.has(i.href),`Unreleased ${i.href}`);assert.deepEqual(Object.keys(i).sort(),['collection','description','href','kind','status','title','topics']);}
 if(now.getUTCFullYear()===1900)assert.equal(items.filter(i=>['Sources','Essay'].includes(i.kind)).length,0);
 assert.equal(items.filter(i=>i.kind==='Writing').length,129);
}
console.log('Discovery privacy projection, unique URLs, publication count, and release boundaries passed.');
