const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const { createRequire } = require('node:module');
const file = path.join(__dirname, 'check-ideas.cjs');
const source = fs.readFileSync(file, 'utf8');
const nativeRequire = createRequire(file);
const saved = nativeRequire('../data/ideas.json');
const id = 'what-youre-buying-when-you-buy-a-cannabis-seed';
function validate(mutate = () => {}) {
 const records = structuredClone(saved);
 const entry = records.find(x => x.id === id);
 assert.ok(entry, 'reviewed seed article fixture is present');
 mutate(entry, records);
 vm.runInNewContext(source, {
  require: name => name === '../data/ideas.json' ? records : nativeRequire(name),
  console: { log() {} },
 }, { filename: file });
}
test('saved published parent and held companion pass the actual validator', () => validate());
const badUrls = [
 'http://www.fatnugsmag.com/what-youre-buying-when-you-buy-a-cannabis-seed/',
 'https://www.fatnugsmag.com/what-youre-buying-when-you-buy-a-cannabis-seed/?preview=true',
 'https://www.fatnugsmag.com/what-youre-buying-when-you-buy-a-cannabis-seed/#draft',
 'https://www.fatnugsmag.com/another-unreviewed-article/',
 'https://www.fatnugsmag.com.evil.example/what-youre-buying-when-you-buy-a-cannabis-seed/',
 'https://user@www.fatnugsmag.com/what-youre-buying-when-you-buy-a-cannabis-seed/',
];
for (const url of badUrls) test('reject unreviewed URL: ' + url, () =>
 assert.throws(() => validate(e => { e.publicationUrl = url; }), /only verified public article routes/));
test('publisher exception cannot be used as an appendix', () =>
 assert.throws(() => validate(e => { e.appendixUrl = e.publicationUrl; }), /only verified public article routes/));
test('draft cannot expose approved published URL', () =>
 assert.throws(() => validate(e => { e.workStatus = 'Draft'; }), /requires published writing/));
test('approved URL cannot be relabelled as another work', () =>
 assert.throws(() => validate(e => { e.title = 'Different work'; }), /identity mismatch/));
test('held original cannot expose a reading link', () =>
 assert.throws(() => validate(e => { delete e.holdScope; }), /fully held work/));
test('companion cannot become a second record with the same publisher link', () =>
 assert.throws(() => validate((e, records) => { records.push({ ...e, id: 'seed-companion' }); }), /only verified public article routes/));
test('existing Polymath duplicate-link guard remains active', () =>
 assert.throws(() => validate((e, records) => {
  const original = records.find(x => x.publicationUrl?.startsWith('https://polymath-rn-collins.beehiiv.com/'));
  records.push({ ...original, id: 'duplicate-published-work' });
 }), /reading URL already belongs/));
