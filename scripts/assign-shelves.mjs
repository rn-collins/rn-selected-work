#!/usr/bin/env node
/**
 * Assign every live Vercel project to one shelf.
 *
 *   shipped  one canonical project, one production URL, written up, live
 *   studio   a real prototype, prelaunch, proposal, or paused build, with its own URL
 *   hold     tests, probes, failed previews, duplicates, client deploys, signposts
 *
 * Hold is not rendered. Client projects are not named on the public site.
 * Probe projects and rn-content-second-brain-preview are marked cut. This
 * script does not delete them.
 *
 *   node scripts/assign-shelves.mjs
 *   node scripts/assign-shelves.mjs --from /tmp/rn-crawl/vercel-live.json
 */

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const fromFlag = process.argv.indexOf("--from");

function readVercelFromCli() {
  const projects = [];
  let next = null;
  for (let page = 0; page < 25; page += 1) {
    const args = ["project", "ls"];
    if (next) args.push("--next", next);
    const out = execSync(`vercel ${args.map((a) => `'${a}'`).join(" ")} 2>&1`, {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      shell: "/bin/sh",
    }).replace(/\u001b\[[0-9;]*m/g, "");
    for (const line of out.split("\n")) {
      const match = line.trim().match(/^([a-z0-9][a-z0-9._-]*)\s{2,}(https:\/\/\S+|--)\s{2,}/i);
      if (!match) continue;
      projects.push({ name: match[1], url: match[2] === "--" ? null : match[2] });
    }
    const more = out.match(/--next (\d+)/);
    if (!more) break;
    next = more[1];
  }
  return projects;
}

function readNotes() {
  const source = readFileSync(join(ROOT, "lib", "build-notes.ts"), "utf8");
  const notes = new Map();
  for (const match of source.matchAll(/repo:\s*"([^"]+)"/g)) {
    const window = source.slice(match.index, match.index + 900);
    const status = window.match(/statusKind:\s*"([^"]+)"/);
    notes.set(match[1], status ? status[1] : "live");
  }
  return notes;
}

const STUDIO = new Set(["prototype", "prelaunch", "proposal", "paused"]);

function isProbe(name) {
  return (
    name === "rn-content-second-brain-preview" ||
    name === "deployment-format-probe" ||
    name === "test-invalid-do-not-use" ||
    name.endsWith("-test") ||
    name.includes("-probe") ||
    name.includes("schema-test")
  );
}

function assign(projects) {
  const config = JSON.parse(readFileSync(join(ROOT, "data", "exclusions.json"), "utf8"));
  const excluded = new Map(config.exclusions.map((entry) => [entry.repo, entry]));
  const aliases = config.aliasProjects;
  const notes = readNotes();
  const rows = [];

  for (const project of projects) {
    const name = project.name;
    const alias = aliases[name];
    let shelf = "hold";
    let isPublic = false;
    let cut = false;
    let canonical = name;
    let url = project.url;
    let reason = "Held. No public card.";

    if (isProbe(name)) {
      cut = true;
      canonical = alias && alias !== "$scratch" ? alias : name;
      reason =
        name === "rn-content-second-brain-preview"
          ? "Failing preview. It stays off the public index and is marked for removal. The Netherlands field kit is not in this cut."
          : "Probe or test deployment. Marked for the first cut. Not a public URL.";
    } else if (alias === "$scratch") {
      reason = "Scratch or duplicate deployment of another project. Not a public URL.";
    } else if (/^nsag-m\d+$/.test(name)) {
      canonical = "nsag-site";
      reason = "Signpost left in place so older links resolve. The module lives on nsag-site, which is the one shipped URL.";
    } else if (typeof alias === "string") {
      canonical = alias;
      reason = `Duplicate of ${alias}. The public card uses that project's one URL.`;
    } else if (excluded.has(name)) {
      const entry = excluded.get(name);
      reason = entry.silent
        ? "Held and unnamed on the public site."
        : entry.reason;
      if (name === "tech-from-here-netherlands-field-kit") {
        reason = "Stays deployed while its production build is repaired. Not a public card and not part of the probe cut.";
      }
    } else if (notes.get(name) === "live") {
      shelf = "shipped";
      isPublic = true;
      reason = "One canonical project and one production URL.";
    } else if (STUDIO.has(notes.get(name))) {
      shelf = "studio";
      isPublic = true;
      reason = "A real prototype or paused build, on its own URL, with no probe address.";
    } else if (name === "rn-selected-work") {
      reason = "This is the index itself, not a card on the index.";
    } else {
      reason = "Deployed, with no public write-up yet, so it is not given a card.";
    }

    rows.push({
      name,
      url,
      shelf,
      public: isPublic,
      canonical,
      cut,
      reason,
    });
  }

  rows.sort((a, b) => a.shelf.localeCompare(b.shelf) || a.name.localeCompare(b.name));
  const count = (shelf) => rows.filter((row) => row.shelf === shelf).length;
  return {
    generatedAt: new Date().toISOString(),
    generatedBy: "scripts/assign-shelves.mjs",
    source: "vercel project ls",
    counts: {
      projects: rows.length,
      shipped: count("shipped"),
      studio: count("studio"),
      hold: count("hold"),
      cut: rows.filter((row) => row.cut).length,
    },
    projects: rows,
  };
}

const projects = fromFlag === -1
  ? readVercelFromCli()
  : JSON.parse(readFileSync(process.argv[fromFlag + 1], "utf8"));

if (!projects.length) {
  console.error("No Vercel projects found.");
  process.exit(1);
}

const payload = assign(projects);
writeFileSync(join(ROOT, "data", "vercel-shelves.json"), `${JSON.stringify(payload, null, 2)}\n`);
console.log(JSON.stringify(payload.counts));
