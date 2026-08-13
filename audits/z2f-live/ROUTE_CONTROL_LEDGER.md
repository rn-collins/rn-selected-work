# Zero → Frontier / `z2f-live` — Route and Control Ledger

Audit date: August 12, 2026 HST  
Stage: A — read-only  
Repository commit inspected: `a1ff9a9d3f80f2f24681c2da4c33c8d4cbde6eea`  
Duplicate deployment audited: <https://z2f-live.vercel.app/>  
Canonical deployment recommended: <https://zero-to-frontier.vercel.app/>

## Coverage boundary

The repository contains 21 HTML routes, one shared JavaScript file, one shared stylesheet, a 237-row library dataset, 22 text-template files, an Open Graph image, and `vercel.json`. All repository routes, link targets, controls, source-configured routes, and asset mappings were inventoried. Vercel deployment metadata proves both projects deploy the same repository, `main` branch, and commit. Direct HTTP checks confirmed the sampled public routes and template asset return `200`, while `/sitemap.xml`, `/robots.txt`, `/api/track`, `/privacy`, `/terms`, and an arbitrary unknown route return `404`.

A Chromium runtime was unavailable and the permitted browser binary download returned an invalid zero-byte archive. Therefore responsive rendering, computed contrast, live keyboard order, console output, and dynamic-state behavior are **source-inspected but not browser-executed**. An attempted automated resolution pass for all external URLs was also blocked by the environment's network approval boundary. Those boundaries are not represented as successful tests.

## Complete route map

| # | Route | Purpose | Page-local interactive controls | Result / issue |
|---:|---|---|---|---|
| 1 | `/` and `/index.html` | Landing page and section directory | Three hero CTAs; 11 section cards; trust links; two related-build cards; `Contact the Architect` modal with name, email, message, Cancel, Send | Source and HTTP load. Modal is the only data-entry surface. It contradicts About/privacy copy and reports “Sent!” for any resolved HTTP response without checking `response.ok`. |
| 2 | `/start-here.html` | Audience/time-based router | Route pills and site-map links | Source and HTTP load. Says “Ten pages” but the estate has 21 HTML routes; omits Playbooks and the nine tool-category pages from the reading-order map. |
| 3 | `/history.html` | 17-entry AI history timeline | 17 generated expandable `role=button` timeline cards; 28 generated source groups/links | Present. Enter/Space handlers exist. “Primary source” framing is not true for every entry. |
| 4 | `/concepts.html` | Concept map and glossary | Horizontally scrollable SVG; nine generated expandable glossary cards | Present. Glossary cards have `role=button`, `tabindex=0`, Enter/Space support. SVG has a complete text alternative. |
| 5 | `/techniques.html` | Four technique families | Four generated tabs and panels | Present in source. Tab semantics exist, but arrow-key/Home/End keyboard behavior required by the ARIA tabs pattern is absent. |
| 6 | `/use-cases.html` | 16 worked use cases in four groups | Four generated tabs and panels | Present in source. Same incomplete tab keyboard model. |
| 7 | `/tools.html` | Seven general-assistant comparisons | Tool source links and links to nine category pages | Static content and links present. Time-sensitive product/pricing/privacy assertions require dated maintenance. |
| 8 | `/tools-research.html` | Five research-tool comparisons | Ten-page tool subnavigation; six external source links | Static route present. |
| 9 | `/tools-meetings.html` | Six meeting/knowledge-tool comparisons | Tool subnavigation; six external source links | Static route present. |
| 10 | `/tools-writing.html` | Four writing-tool comparisons | Tool subnavigation; four external source links | Static route present. |
| 11 | `/tools-marketing.html` | Marketing/sales comparisons | Tool subnavigation; six external source links | Static route present. |
| 12 | `/tools-automation.html` | Five automation-tool comparisons | Tool subnavigation; five external source links | Static route present. |
| 13 | `/tools-coding.html` | 14 coding-tool comparisons | Tool subnavigation; 14 external source links | Static route present. |
| 14 | `/tools-images.html` | Five image-tool comparisons | Tool subnavigation; five external source links | Static route present. |
| 15 | `/tools-video.html` | Five video-tool comparisons | Tool subnavigation; six external source links | Static route present. |
| 16 | `/tools-audio.html` | Six audio/voice-tool comparisons | Tool subnavigation; six external source links | Source and HTTP load. |
| 17 | `/playbooks.html` | Ten operational playbooks | Ten generated tabs/panels plus related-template/use-case links | Present in source. Same incomplete tab keyboard model. |
| 18 | `/templates.html` | 18 copyable/downloadable prompt templates | Five category tabs; 18 Read/Hide buttons; 18 download links; two NIST/ABA source links | All 18 mapped downloads exist and are nonempty; a sampled deployed file returned `200`. Four additional template files are orphaned from the UI. Tab keyboard behavior incomplete. |
| 19 | `/frontier.html` | Current-state metrics and AGI debate | Four external reading/source links; Library CTA | Static route present. Current-to-mid-2026 content needs a visible last-reviewed date and maintenance owner. |
| 20 | `/library.html` | Searchable/filterable resource library | Search input; eight module filters (`All` + seven modules); 237 generated external resource cards; Back-to-top button | Dataset contains exactly 237 rows but only 233 unique URLs: four URLs are duplicated. Search/filter/render logic is present; no empty-state message exists beyond `0 of 237 resources`. |
| 21 | `/about.html` | Method, sourcing, FAQs, disclaimer | Six generated FAQ buttons | Static route present. Contains direct factual contradictions with the homepage implementation. |

## Global controls present on every route

| Control | Count / scope | Source-inspected behavior | Finding |
|---|---:|---|---|
| Skip link | 21 | Moves focus/navigation to `#main` | Correct structure. |
| Brand/Home link | 21 | Opens `index.html` | Correct. |
| Mobile Menu button | 21 | Toggles `.open` and `aria-expanded` | No Escape, outside-click, close-on-selection, or focus-management behavior. |
| Primary navigation | 12 links per route | Home, Start Here, History, Concepts, Techniques, Use Cases, Tools, Playbooks, Templates, Frontier & AGI, Library, About | All targets exist locally. At 861px+ this large wrapped navigation can consume variable header height while `main` uses a fixed 78px offset; browser rendering remains to be verified. |
| Footer navigation | 11 links per route | Learn/Apply/More routes | All targets exist locally. |
| Reveal-on-scroll elements | Multiple routes | IntersectionObserver adds `.show`; reduced-motion CSS forces visibility | No non-IntersectionObserver fallback; unsupported/failed JS leaves `.reveal` content invisible. |

## Non-HTML and machine routes

| Path / surface | Expected | Observed |
|---|---|---|
| `/assets/style.css` | Shared styles | Repository present; referenced by all pages. |
| `/assets/site.js` | Shared mobile-nav and reveal behavior | Repository present; syntax valid. |
| `/assets/library-data.js` | 237-row resource dataset | Present; 237 rows, 233 unique URLs. |
| `/assets/og-image.png` | Social preview | Present; 1200 × 630 declared. Page-level `og:image` values are relative rather than absolute. |
| `/assets/templates/*.txt` | Downloadable prompt/checklist assets | 22 files present; 18 mapped to template cards; four orphaned: `ai-use-case-inventory.txt`, `human-review-checklist.txt`, `prompt-starter-pack.txt`, `tool-evaluation-checklist.txt`. |
| `/sitemap.xml` | Advertised by homepage `<link rel=sitemap>` | `404`. |
| `/robots.txt` | Crawler policy / sitemap discovery | `404`. |
| `/api/track` | Homepage page-view and scroll-depth tracking | `404`; client silently discards failure. |
| `/api/lead` on site origin | None | Not implemented; contact posts cross-origin to RN API. |
| `https://rn-api-rn-collins.vercel.app/api/lead` | Contact submission API | Safe GET returned `405` with `POST, OPTIONS`, confirming endpoint existence. Submission intentionally not performed. |
| `/privacy` and `/terms` | Needed if analytics/contact remain | Both `404`; no equivalent documents found. |

## Link inventory and integrity

- Static HTML parsing found no missing same-repository link targets.
- Dynamic target mappings in History, Use Cases, Playbooks, Templates, and Library were inspected in source. The 18 template-card files all exist and are nonempty.
- Source contains 294 unique URL literals across HTML, JavaScript, template text, schema, APIs, and external resources. The library alone has 237 records pointing to 233 unique URLs.
- Four duplicated library URLs:
  - Anthropic prompt-engineering interactive tutorial;
  - Google AI Studio quickstart;
  - Ollama quickstart;
  - Class Central Make.com tutorial.
- Full external resolution/current-content verification is incomplete because the environment rejected the requested outbound network sweep. Individual URLs must not be certified as current from this Stage A run.
- Both Vercel aliases returned byte-identical homepage and library HTML in direct hash comparisons; Vercel metadata provides stronger full-release evidence because every recorded deployment pair is built from the same GitHub SHA.

## Control-state findings

| Control family | Intended states | Source result | Defect |
|---|---|---|---|
| Mobile nav | closed → open → closed | Class and `aria-expanded` toggle | Missing Escape/focus/selection-close behaviors. |
| History cards (17) | collapsed ↔ expanded | Class and `aria-expanded` toggle; click/Enter/Space | Detail uses fixed `max-height:500px`; long content can clip, especially after font enlargement. |
| Glossary cards (9) | collapsed ↔ expanded | Click/Enter/Space and `aria-expanded` | Uses `div role=button` instead of native button; content `max-height` can clip. |
| Tabs (4 + 4 + 10 + 5) | select tab → show linked panel | `aria-selected` and active panel update | No arrow-key/Home/End implementation and no roving `tabindex`; not a complete accessible tabs pattern. |
| FAQ buttons (6) | collapsed ↔ expanded | Native buttons and `aria-expanded` | Answer container lacks a relationship such as `aria-controls`; fixed max-height can clip at high zoom. |
| Template Read/Hide (18) | collapsed ↔ expanded | `aria-expanded`, `aria-controls`, label change | Sound source implementation; browser execution pending. |
| Template downloads (18) | download matching `.txt` | All mapped files exist and are nonempty | No file size/version/date disclosed. |
| Library search | query → filtered rows/count | Case-insensitive match against title, blurb, module | No explicit “no results” recovery or clear-search control. |
| Library filters (8) | select module → filtered rows | `aria-pressed` is synchronized | Works as toggle-button group in source. |
| Back to top | hidden → visible after 600px → top | Class toggle and scroll call | Source sound; browser execution pending. |
| Contact modal | closed → open → cancel or submit | Inline style toggles display | Missing labels, accessible name relationship, focus trap, initial focus, Escape, backdrop close, focus restoration, status region, and verified response handling. |

## HTTP and deployment evidence

- `z2f-live` project ID: `prj_ukz4emkdnkWBRPI7GItuW9f0lWzn`.
- `zero-to-frontier` project ID: `prj_UqOTZn8qJTsfpeKYNuNA7LCiUa2G`.
- Both latest production deployments are `READY`, created within 196 ms of each other, and reference repository `rn-collins/zero-to-frontier`, branch `main`, SHA `a1ff9a9d3f80f2f24681c2da4c33c8d4cbde6eea`.
- All seven deployment pairs exposed by Vercel have corresponding timestamps, messages, and repository SHAs.
- The homepage `og:url`, JSON-LD WebPage URL, RN Selected Work record, repository name, and intended public name all point to `https://zero-to-frontier.vercel.app`.

## Canonicalization conclusion

`z2f-live` is a duplicate Vercel project for the same artifact, not a component or distinct product. Assign **D — duplicate/alternate deployment**. Preserve `zero-to-frontier` as the canonical project and public URL. Redirect or retire all `z2f-live` aliases only after confirming no inbound dependency requires them.
