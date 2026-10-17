# Portfolio discovery and page-family audit — October 17, 2026

RN requested visitor-centered organization across every portfolio page and section.

## Decisions

- Every page receives shared portfolio navigation, current-section indication, and contextual next steps through the root layout. Existing local navigation and stable URLs remain available.
- Homepage: six visitor intentions and three curated questions connect practice, builds, writing, evidence, initiatives, and collaboration.
- /explore: searchable public catalog, with format, subject, collection, and project-status filters, shareable URL filters, 12-at-a-time results, clear filters, and an explicit empty state.
- Writing: all 129 publication records plus released essays searchable; existing publication sections and Daily Pennsylvanian date-free display preserved.
- Builds: search and status filters precede the detailed atlas; retired, paused, proposal, and prelaunch statuses remain explicit. Results go to portfolio records, never a held external destination.
- Sources and essays: only released records enter discovery; large source/account indexes gain scoped search. Existing citations and piece-to-piece links remain intact.
- Case studies, initiatives, advisory, practice, about, contact, organization pages, and journal/detail pages: shared navigation and next steps connect them to the wider portfolio. Public initiatives and the existing public Culturalyst room are indexed from siteProperties; non-public properties are excluded.
- API routes and release automation are operational endpoints, not browsing destinations, and are not added to search.
- No repository visibility, release rules, dates, confirmations, or source bodies were changed.

## Search data boundary

Client components receive projected public metadata only. Sources use listed/postedSoFar/tfhPostedSoFar; essays use releasedEssays/releasedDdwEssays. These existing functions enforce the release registry. Raw datasets, manuscript text, image manifests, and private repository links are not passed to search. The index refreshes hourly and through the existing release-day layout invalidation.

Subjects are broad navigation labels inferred from public title/description text; they are not factual claims or a complete scholarly taxonomy. Search covers public metadata, not full article bodies. Separate editions remain distinct records.

## Route inventory

All route templates below inherit global wayfinding. Dynamic templates cover their generated detail pages. This is a portfolio-wide discovery and organization pass, not a bespoke visual redesign of every individual work.

- `/`
- `/about`
- `/advisory/aloha-intelligence-institute`
- `/builds`
- `/builds/[repo]`
- `/connect`
- `/contact`
- `/essays`
- `/essays/[account]`
- `/essays/[account]/[id]`
- `/explore`
- `/for-organizations`
- `/for/culturalyst`
- `/for/culturalyst/conversation`
- `/for/culturalyst/opportunities`
- `/for/culturalyst/work`
- `/initiatives`
- `/initiatives/aloha-ai`
- `/initiatives/institutions-of-one`
- `/initiatives/nsag`
- `/journal`
- `/journal/[slug]`
- `/practice`
- `/sources`
- `/sources/[slug]`
- `/sources/[slug]/[id]`
- `/sources/aan-f`
- `/sources/clr`
- `/sources/dda`
- `/sources/ddw26`
- `/sources/ddw27`
- `/sources/editions`
- `/sources/fatnugs`
- `/sources/film`
- `/sources/htw`
- `/sources/ioo`
- `/sources/ioo-fashion`
- `/sources/jbd`
- `/sources/kbyg`
- `/sources/makers`
- `/sources/museum`
- `/sources/polymath`
- `/sources/psychonaut-bookworm`
- `/sources/tfh`
- `/sources/tfh/[slug]`
- `/sources/venues`
- `/work`
- `/work/[slug]`
- `/work/neurocognitive-systems-advisory-group`
- `/writing`
- `/writing/dutch-design-week`
- `/writing/dutch-design-week/[family]/[slug]`
- `/writing/journal-of-biophilic-design/[slug]`

## Verification

`node scripts/check-discovery.cjs` checks unique URLs, the 129 publication records, a closed historical release boundary, current and future release projections, and the exact fields serialized to clients. Full production build checks all generated routes. Static-generation concurrency is bounded to two workers after the eight-worker build exceeded workspace memory.
