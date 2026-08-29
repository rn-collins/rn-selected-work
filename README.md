# Selected Work — RN Collins

Selected research, institutional frameworks, working systems, public resources, and
published analysis by Rayven-Nikkita (RN) Collins.

Public portfolio: https://rn-selected-work.vercel.app
Complete build index: https://rn-selected-work.vercel.app/builds

Deployed automatically from `main` with Vercel. Framework: Next.js.

---

## The build index is generated, not maintained

The index used to be a hand-kept list. It drifted to 32 entries while the estate held
more than twice that, and a hand-kept list will drift again. So it is generated:

```sh
npm run builds:regenerate   # query GitHub + Vercel, probe every URL, rewrite data/builds.json
npm run builds:check        # report drift without writing; exit 1 if any
```

`scripts/regenerate-builds.mjs` asks `gh repo list rn-collins` what repositories exist
and `vercel project ls` what is deployed, cross-references the two, applies
`data/exclusions.json`, fetches every production URL, and writes `data/builds.json`.
It requires an authenticated `gh` and `vercel`.

**A new build appears on the site by running the script, not by remembering.**

### The three files, and which of them you edit

| File | Generated? | What it holds |
|---|---|---|
| `data/builds.json` | **yes** | Inventory: repo, live URL, visibility, HTTP status, rendered word count, last deploy. Committed so the site builds without network access. |
| `data/exclusions.json` | no | Builds deliberately kept off the index, each with a reason. Entries marked `silent: true` are not named anywhere in the rendered site. Also maps duplicate, preview and probe Vercel projects to their canonical project. |
| `lib/build-notes.ts` | no | The prose. One entry per build: the problem it addresses, what it does, what it runs on, its honest status, and what it does not establish. |

`lib/builds.ts` joins the generated inventory to the curated notes; the pages render
from that join. The same join feeds the case studies, so a case study and the index
cannot disagree about a build's status.

### Drift is loud

A reachable build with no entry in `lib/build-notes.ts` is reported as `DRIFT` by the
script and rendered on `/builds` under **Deployed, not yet written up**. It is never
published with an empty description, and it is never silently dropped. A note whose
build is gone or unreachable is reported the same way.

## Writing a build note

Open the build and read it. Do not paraphrase its meta description, and where a build
is API-backed, read what its endpoints actually return — several of the monitors
publish their own collection health, and the status line here should repeat what the
build says about itself, including when that is *overdue*.

Two rules:

1. **Describe the capability that exists.** A monitor that collects candidate links for
   a human to verify is not a monitor that verifies them.
2. **Retired means retired.** Paused means paused. A 130-word prototype is described as
   a 130-word prototype, or it is left out — and the index says which.

## Verification

The estate ship gate lives in `rn-estate-tools`:

```sh
python3 /path/to/rn-estate-tools/estate_check.py https://rn-selected-work.vercel.app
```

It checks every route for 200, resolves internal and external links, requires per-page
title/description/canonical/og:image, enforces a 400-word substance floor and a 30%
caveat-density ceiling, and checks heading order, alt text, form labels and `lang`.
Bot-blocked hosts (LinkedIn answers `999`) are reported and never failed.
