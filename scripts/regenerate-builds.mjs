#!/usr/bin/env node
/**
 * Regenerate the build inventory from live data.
 *
 * The index used to be a hand-kept list, and a hand-kept list drifts: it sat at
 * 32 entries while the estate held far more. This script is the maintenance
 * path. It asks GitHub what repositories exist and Vercel what is deployed,
 * cross-references the two, verifies each production URL actually answers, and
 * writes data/builds.json. The page renders from that file.
 *
 *   node scripts/regenerate-builds.mjs          # regenerate and report drift
 *   node scripts/regenerate-builds.mjs --check  # report only; exit 1 on drift
 *
 * Prose lives in lib/build-notes.ts and is never generated. A build that
 * appears here without a note is reported as drift rather than published with
 * an empty description, so a missing write-up is loud instead of silent.
 *
 * Requires: gh (authenticated), vercel (authenticated).
 */

import { execFileSync, execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OWNER = "rn-collins";
const CHECK_ONLY = process.argv.includes("--check");
const UA = "rn-selected-work-inventory/1.0 (+https://rn-selected-work.vercel.app)";

/**
 * Hosts that refuse robots and serve humans fine. A 403 from one of these is
 * not evidence of breakage, so it is recorded as unknown and never treated as
 * a dead build. Same rule as rn-estate-tools/estate_check.py.
 */
const BOT_BLOCKED_HOSTS = [];

function sh(cmd, args) {
  return execFileSync(cmd, args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

/**
 * The Vercel CLI prints its project table on stderr, not stdout, so capture
 * both streams and read the table out of the combined output.
 */
function shBoth(cmd, args) {
  return execSync(`${cmd} ${args.map((a) => `'${a}'`).join(" ")} 2>&1`, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    shell: "/bin/sh",
  });
}

function readGithub() {
  const raw = sh("gh", [
    "repo", "list", OWNER,
    "--limit", "300",
    "--json", "name,visibility,description,homepageUrl,pushedAt,isArchived",
  ]);
  return JSON.parse(raw);
}

/**
 * `vercel project ls` paginates and prints a table, so walk the pages and pull
 * the project name and its latest production URL out of each row.
 */
function readVercel() {
  const projects = new Map();
  let next = null;
  for (let page = 0; page < 25; page += 1) {
    const args = ["project", "ls"];
    if (next) args.push("--next", next);
    // The CLI colourises its table, so strip escape sequences before parsing.
    const out = shBoth("vercel", args).replace(/\u001b\[[0-9;]*m/g, "");
    for (const line of out.split("\n")) {
      const row = line.trim();
      const match = row.match(/^([a-z0-9][a-z0-9._-]*)\s{2,}(https:\/\/\S+|--)\s{2,}/i);
      if (!match) continue;
      projects.set(match[1], match[2] === "--" ? null : match[2]);
    }
    const more = out.match(/--next (\d+)/);
    if (!more) break;
    next = more[1];
  }
  if (projects.size === 0) throw new Error("vercel project ls returned no rows — is the CLI authenticated?");
  return projects;
}

function textOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function probe(url) {
  if (!url) return { status: "no-deployment", words: 0 };
  const host = new URL(url).hostname;
  try {
    const response = await fetch(url, { headers: { "user-agent": UA }, redirect: "follow" });
    const body = response.ok ? await response.text() : "";
    if (response.status === 403 && BOT_BLOCKED_HOSTS.includes(host)) {
      return { status: "bot-blocked", words: null };
    }
    return { status: response.status, words: response.ok ? textOf(body).split(" ").filter(Boolean).length : 0 };
  } catch (error) {
    return { status: `error:${error.code || error.name}`, words: 0 };
  }
}

/** Read the curated slugs out of lib/build-notes.ts without importing TypeScript. */
function readNoteKeys() {
  const source = readFileSync(join(ROOT, "lib", "build-notes.ts"), "utf8");
  const keys = [...source.matchAll(/^\s{4}repo:\s*"([a-z0-9-]+)"/gm)].map((m) => m[1]);
  // The retired NSAG modules are generated from a tuple table rather than
  // written out one by one, so pick those up too.
  const table = source.match(/retiredNsagModules[\s\S]*?\n\];/);
  if (table) keys.push(...[...table[0].matchAll(/\["([a-z0-9-]+)",/g)].map((m) => m[1]));
  return new Set(keys);
}

async function main() {
  const config = JSON.parse(readFileSync(join(ROOT, "data", "exclusions.json"), "utf8"));
  const excluded = new Map(config.exclusions.map((entry) => [entry.repo, entry]));
  const aliases = config.aliasProjects;

  const repos = readGithub();
  const vercel = readVercel();
  const noteKeys = readNoteKeys();

  const byName = new Map(repos.map((repo) => [repo.name, repo]));
  const candidates = new Set([...byName.keys()]);
  for (const project of vercel.keys()) {
    const canonical = aliases[project] || project;
    if (canonical.startsWith("$")) continue;
    candidates.add(canonical);
  }

  const records = [];
  const skipped = [];

  for (const name of [...candidates].sort()) {
    if (name.startsWith("$")) continue;
    const exclusion = excluded.get(name);
    const repo = byName.get(name) || null;
    const live = vercel.get(name) || repo?.homepageUrl || null;

    if (exclusion) {
      skipped.push({ repo: name, reason: exclusion.reason, silent: exclusion.silent === true });
      continue;
    }

    const result = await probe(live);
    records.push({
      repo: name,
      live,
      visibility: repo ? repo.visibility.toLowerCase() : "unknown",
      repoUrl: repo && repo.visibility === "PUBLIC" ? `https://github.com/${OWNER}/${name}` : null,
      githubDescription: repo?.description || null,
      pushedAt: repo?.pushedAt || null,
      httpStatus: result.status,
      renderedWords: result.words,
      reachable: result.status === 200 || result.status === "bot-blocked",
      hasNote: noteKeys.has(name),
    });
  }

  const reachable = records.filter((record) => record.reachable);
  const unreachable = records.filter((record) => !record.reachable);
  const missingNotes = reachable.filter((record) => !record.hasNote);
  const orphanNotes = [...noteKeys].filter((key) => !reachable.some((record) => record.repo === key));

  const payload = {
    generatedAt: new Date().toISOString(),
    generatedBy: "scripts/regenerate-builds.mjs",
    counts: {
      repositories: repos.length,
      vercelProjects: vercel.size,
      excluded: skipped.length,
      published: reachable.length,
      unreachable: unreachable.length,
    },
    builds: reachable,
    unreachable,
    excluded: skipped.filter((entry) => !entry.silent),
  };

  if (!CHECK_ONLY) {
    writeFileSync(join(ROOT, "data", "builds.json"), `${JSON.stringify(payload, null, 2)}\n`);
  }

  console.log(`repositories        ${repos.length}`);
  console.log(`vercel projects     ${vercel.size}`);
  console.log(`excluded            ${skipped.length}`);
  console.log(`published           ${reachable.length}`);
  console.log(`unreachable         ${unreachable.length}`);
  for (const record of unreachable) console.log(`  unreachable  ${record.repo}  ${record.httpStatus}  ${record.live || "no url"}`);
  for (const record of missingNotes) console.log(`  DRIFT  no write-up in lib/build-notes.ts: ${record.repo}  ${record.live}`);
  for (const key of orphanNotes) console.log(`  DRIFT  write-up with no reachable build: ${key}`);

  if ((missingNotes.length || orphanNotes.length) && CHECK_ONLY) process.exit(1);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(2);
});
