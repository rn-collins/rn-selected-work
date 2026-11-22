// RN's rule (Nov 22, 2026): the site says "RN Collins", never her legal name. Runs after `next build` (npm
// "postbuild") and fails the build if any built page, or any text file in public/, prints it. Addresses of
// other sites (href/src/url values, e.g. a third-party article slug) are skipped: we cannot change them.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = [".next/server/app", "public"];
const NAMES = /rayven|nikkita/i;
const TEXT = /\.(html|txt|json|webmanifest|svg|xml|rsc|body|vcf|css|js|md)$/i;
const URLS = /(https?:\/\/[^\s"'<>)]+)|((href|src|content)="[^"]*")/gi;
const bad = [];
function walk(dir) {
  let names;
  try { names = readdirSync(dir); } catch { return; }
  for (const n of names) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) { if (!p.startsWith("public/review")) walk(p); continue; }
    if (!TEXT.test(n)) continue;
    const text = readFileSync(p, "utf8").replace(URLS, (m) => (/^(content)=/i.test(m) ? m : ""));
    if (NAMES.test(text)) bad.push(p);
  }
}
roots.forEach(walk);
if (bad.length) {
  console.error("Name check FAILED: RN's legal name appears in:\n  " + bad.slice(0, 20).join("\n  "));
  process.exit(1);
}
console.log("Name check: no legal name in built pages or public files.");
