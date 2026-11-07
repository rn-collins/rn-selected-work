// Fail the review build if a withdrawn file is restored under its old name or copied verbatim under a new one.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const withdrawn = new Map([["6bd4cc0d2dbb996c8ae9c36ce2484036d1b0e854",42268],["1058749be93f8bb38bfa916cc0d591cd6b8482f5",109750]]);
const sizes = new Set(withdrawn.values());
for (const file of [
  'app/advisory/aloha-intelligence-institute/page.tsx',
  'public/documents/aloha-intelligence-institute-decision-brief.pdf',
  'public/evidence/aloha-intelligence-institute.png',
]) {
  if (fs.existsSync(file)) throw Error('A withdrawn portfolio route or public file has been restored');
}
const visited = new Set();
function inspect(dir) {
  const real = fs.realpathSync(dir);
  if (visited.has(real)) return;
  visited.add(real);
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const st = fs.statSync(file);
    if (st.isDirectory()) inspect(file);
    else if (st.isFile() && sizes.has(st.size)) {
      const sha = crypto.createHash('sha1').update('blob ' + st.size + '\0').update(fs.readFileSync(file)).digest('hex');
      if (withdrawn.has(sha)) throw Error('A copy of a withdrawn portfolio file is present in public assets');
    }
  }
}
inspect('public');
console.log('Withdrawn portfolio route and public-file checks passed.');
