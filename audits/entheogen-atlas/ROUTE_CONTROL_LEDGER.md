# Entheogen Atlas — route/control/evidence ledger

Audit date: August 13, 2026 HST  
Canonical: <https://entheogen-atlas.vercel.app/>  
Repository: private/inaccessible `rn-collins/entheogen-atlas`  
Mode: read-only; no contact or consequential action

## Coverage

Production is a 436 KB single-document JavaScript atlas. “Pages” are client-side panels, modals and generated views, not independently addressable routes. Full HTML/data/script, controls, headers and machine paths were inspected. It contains ten substance profiles, timelines, radar/comparison displays, receptor/science, research, phenomenology, researchers, legal/RFRA, clinical trials, global law, ceremonies/culture, interactions, dose/risk tools, glossary and search.

## Route/resource map

| Resource | Result |
|---|---|
| `/` | `200`; sole route |
| `/api/track` | `404`; analytics silently fails |
| `/privacy`, `/terms`, `/sitemap.xml`, `/robots.txt` | all `404` |
| configured OG/Twitter `https://entheogetatlas.com/og-image.png` | wrong domain and local `/og-image.png` is `404` |
| portrait/image assets | none; no `<img>` |

## Major views and controls

- navigation/mega-menu and Cmd/Ctrl-K client search;
- ten pointer-activated substance `div` cards and modal tabs;
- three timeline cards, filters and detail overlays;
- radar substance selector and SVG rendering;
- research filters/matrix/comparison selectors;
- legal-status and world-map views;
- RFRA issue-spotter / “Legal Risk Calculator”;
- dose, interaction and other risk-reference calculators;
- clinical-trial, ceremony, tradition, researcher and glossary views;
- print behavior and multiple client-generated result regions.

Many cards are clickable `div`s without button/link semantics or keyboard operation. Several navigation attributes are malformed (`class="... role="menuitem""`). Dynamic results/modals need focus management, Escape, accessible names and live announcements. Search results have `tabindex=0` but require explicit keyboard-handler verification.

## Real versus simulated

Real: extensive static authored dataset, client-side search/filter/comparison/chart/calculation rendering. Simulated/unverified: current legal/clinical database, validated risk/dose decision support, primary-source completeness, live trial status, legal conclusion, medical safety determination or professional review. All outputs derive from embedded constants/heuristics; no live ClinicalTrials.gov, court, statute, FDA/DEA or literature retrieval was observed.

## High-risk evidence defects

- “All citations are primary sources” is false/overbroad: displayed source lists include books, company/institution pages, reviews and shorthand citations; many claims have no clickable source.
- ClinicalTrials.gov statuses/completions are stale and several descriptions confuse study phase/sponsor/institution or publication status.
- Legal entries are time-sensitive and contain likely errors: Holy Light is described as “first circuit-level” though cited as a district-court case; Soul Quest status/outcome requires current docket review; “California RFRA (RLUIPA)” is conceptually wrong; blanket US “all five Schedule I” and state counts are oversimplified.
- Dose ranges, interaction tables and ceremony-dose descriptions can enable use and are not individualized/validated. Ibogaine, ayahuasca/MAOI, MDMA, ketamine and polysubstance risks require especially strict emergency/contraindication boundaries.
- Mechanistic claims repeatedly turn hypotheses/correlations into asserted neural bases (DMN, thalamic gating, Broca connectivity, BDNF/spines, parasympathetic effects).
- Numerical phenomenology scores by substance lack derivation/validation.
- Archaeological, Indigenous, religious and cultural statements are frequently categorical, use outsider terminology, and show no community review/consent/data-sovereignty process.
- “Sixty millennia,” “most ancient human practice,” “one legal contradiction,” and universal federal-crime framing are editorial claims, not neutral atlas facts.

## Privacy/security/accessibility

No user health data is transmitted by inspected calculators, but queries/UTMs remain in browser/session and Vercel analytics scripts are present without privacy notice. CSP and major hardening headers exist; CSP permits inline/eval. No accounts/uploads exist.

Safety needs poison-control/emergency guidance, no-use/no-dosing recommendation, contraindication escalation, pregnancy/minors/cardiovascular/psychiatric/medication boundaries, jurisdiction/date, and clinician/pharmacist/legal referral. A disclaimer alone cannot make a dose or legal-risk calculator safe.

Accessibility positives: skip link, labels on some selects, printable styling. Defects: pointer-only cards, malformed nav markup, focus removed on selects/search, color-heavy risk coding, dense small text, canvas/SVG alternatives unverified, dynamic content/focus/live status weak, and huge SPA makes mobile/zoom navigation difficult.

## RN portrait/authorship audit

No RN portrait ships. Authorship appears in structured data, disclaimer and an About block that calls RN “neuroscientist, technologist, AI content creator, and law student,” with degree/class details. Credential/title claims require documentary and professional-scope review. A portrait is strategically optional: the atlas benefits more from named reviewers and transparent evidence governance. If used, place exactly one verified local portrait in the existing About block (right column), with source/rights, alt “RN Collins, creator of Entheogen Atlas,” intrinsic dimensions, optimized delivery and face-safe mobile/desktop crops. Do not place portraits in substance/science/legal views or use one as scientific authority. Use a purpose-built atlas graphic for OG/social; current OG image is broken/wrong-domain.

## Portfolio boundary

Exactly one case. Ten substances and many tools are internal layers, not separate builds. Verified: large static atlas and client-side interfaces. Not verified: every fact/source/status, live updating, professional review, calculator validity, user outcomes or safe decision support.

