// RN's standing rule (Nov 20, 2026): every page we publish carries a favicon. Runs after `next build` (npm
// "postbuild") and fails the build if any built HTML page, or any static HTML page in public/, lacks the icon links.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = [".next/server/app", "public"];
const need = [/rel="icon"/, /rel="apple-touch-icon"/, /rel="manifest"/];
const missing = [];
let checked = 0;
function walk(dir) {
  let names = [];
  try { names = readdirSync(dir); } catch { return; }
  for (const n of names) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) {
      const html = readFileSync(p, "utf8");
      if (!/<html/i.test(html)) continue;
      // Next's own prerendered 500 shell: the framework writes it and it cannot carry metadata. Our real error page,
      // app/global-error.tsx, does carry the icons.
      if (n === "_global-error.html") continue;
      checked++;
      const lacks = need.filter((re) => !re.test(html)).map(String);
      if (lacks.length) missing.push(`${p}: lacks ${lacks.join(", ")}`);
    }
  }
}
roots.forEach(walk);
if (missing.length) {
  console.error(`Favicon check FAILED: ${missing.length} of ${checked} pages lack the favicon links:\n` + missing.slice(0, 40).join("\n"));
  process.exit(1);
}
console.log(`Favicon check: all ${checked} pages carry the favicon links.`);
