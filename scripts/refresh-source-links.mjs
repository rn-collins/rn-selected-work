#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
const root = new URL("../", import.meta.url);
const repos = JSON.parse(execFileSync("gh", ["repo", "list", "rn-collins", "--limit", "1000", "--json", "name,visibility,url,homepageUrl"], {encoding:"utf8"}));
const byName = new Map(repos.map(repo => [repo.name, repo]));
const publicUrls = new Set(repos.filter(repo => repo.visibility === "PUBLIC").map(repo => repo.url));
const inventory = JSON.parse(readFileSync(new URL("data/builds.json", root), "utf8"));
const config = JSON.parse(readFileSync(new URL("data/exclusions.json", root), "utf8"));
const sites = {};
const checkedAt = new Date().toISOString();
for (const record of [...inventory.builds, ...inventory.unreachable]) {
  const repo = byName.get(record.repo);
  record.visibility = repo?.visibility.toLowerCase() || "unknown";
  const candidate = config.repoUrlOverrides?.[record.repo] || repo?.url;
  record.repoUrl = publicUrls.has(candidate) ? candidate : null;
  if (record.live && record.repoUrl) {
    const url = new URL(record.live);
    sites[url.origin + url.pathname.replace(/\/+$/, "")] = record.repoUrl;
  }
}
inventory.sourceLinksCheckedAt = checkedAt;
writeFileSync(new URL("data/builds.json", root), JSON.stringify(inventory, null, 2) + "\n");
writeFileSync(new URL("data/public-repositories.json", root), JSON.stringify({checkedAt, repositories:[...publicUrls].sort(), sites}, null, 2) + "\n");
console.log(`${publicUrls.size} public repositories verified; ${Object.keys(sites).length} site mappings.`);
