# WNH — Women’s Neuro-Health — Route and Control Ledger

Audit date: August 13, 2026 (HST)

## Route/API ledger

| Surface | Method | Result | Classification |
|---|---|---:|---|
| `/` | GET | 200 | only public surface; health/evidence release blocked |
| `/robots.txt` | GET | 200 `Allow: /` | inappropriate until corrected |
| `/sitemap.xml` | GET | 404 | linked but missing |
| `/api/track` | GET/source POST | 404 | broken custom tracking |
| arbitrary route | GET | 404 | no guide/report/purchase routes |
| `nsag-api.vercel.app/api/lead` | POST | not submitted | external contact; sensitive-data/privacy risk |

## Offer/control ledger

| Control/item | Intended result | Actual result |
|---|---|---|
| WNH brand | page top | `#` |
| NSAG | parent | external NSAG site |
| Discovery Call (2) | booking | personal Northeastern BookWithMe |
| Vol. 1 $47 | guide purchase | inert `<div>`; no guide/checkout |
| Vol. 2 $47 | guide purchase | inert `<div>`; no guide/checkout |
| Vol. 3 $47 | guide purchase | inert `<div>`; no guide/checkout |
| Vol. 4 $97 | guide purchase | inert `<div>`; no guide/checkout |
| bundle $197 | bundle purchase | inert `<div>`; no guide/checkout |
| five quiz radio groups | self-score | working client-side; unvalidated |
| incomplete quiz | validation | blocking `alert()` |
| Get Full Report | report | opens contact; no report |
| Contact Send | inquiry | external POST; no `response.ok`; closes on HTTP error |
| Contact Cancel/overlay | close | works by mouse |
| Contact Escape/focus | accessible modal | absent |

## Diagnostic ledger

| # | Construct | 0/1/2 high answer | Validity issue |
|---:|---|---|---|
| 1 | sex-differentiated guidance | protocols sex-disaggregated | presence ≠ quality/safety |
| 2 | cycle/dosing primary research | use it for dosing/timing | rewards unsupported clinical practice |
| 3 | general vs female-specific gap | documented application approach | no evidence verification |
| 4 | life-stage psychiatric training | formal training | no competence measure |
| 5 | patient materials | female-context design | binary/inclusive applicability gap |

| Score | Label | Finding |
|---:|---|---|
| 0–49 | Early Stage | arbitrary threshold |
| 50–79 | Developing | arbitrary threshold |
| 80–100 | Advanced | arbitrary threshold |
| low copy | “Most WNH organizations” | no cohort/sample evidence |

## DOI identity ledger

| Displayed DOI | Site attribution | Verified identity/finding |
|---|---|---|
| `10.1016/j.drugalcdep.2012.11.009` | Craft, estrous cycle/cannabinoid receptor | Goodwin et al., mental disorders and smoking trajectories; **mismatch** |
| `10.1038/npp.2015.302` | Cooper & Haney, marijuana sex differences | Doyle & Berrettini, somatic DNA variation/CNS disease commentary; **mismatch** |
| `10.3389/fphar.2021.625348` | Shao, psilocybin PK/PD sex differences | exact DOI/title not verified through searched authoritative/indexed sources; **do not use** |
| `10.1097/GME.0000000000001972` | perimenopause cannabis patterns | Yeganeh et al., co-designed early-menopause digital resource; **mismatch** |

## Framework/claim ledger

| Claim | Classification/correction |
|---|---|
| female nervous system categorically different | overbroad/essentialist; use population/context language |
| receptor/metabolism/risk differences | needs correct outcome-specific evidence |
| luteal phase is days 15–28 | not universal |
| same THC dose measurably differs by cycle | unsupported here |
| progesterone-CB1 elevates luteal THC sensitivity | unsafe unsupported clinical inference |
| track cycle for 60 days | individualized-seeming health recommendation; remove |
| females dependence faster/lower-dose effects | needs valid source/effect/limitations |
| menopause survey indicates moderated response | cross-sectional self-report cannot establish efficacy/moderation |
| primary sources superior/current | synthesis/guidelines remain necessary |
| FDA 2016 SABV mandate | false attribution; NIH NOT-OD-15-102 funding policy |
| 35% use vs 5% EHR | no source/population/date |
| omission violates informed consent | jurisdiction/fact-specific; cannot declare categorically |
| four priced guides | absent/unpurchasable |
| scored gap analysis/report | absent |
| current as Aug 2026 | no update method; citation identities fail |

## External-link ledger

| Destination | Finding |
|---|---|
| NSAG/M3/M4/M9 | correct conceptual parent; no standalone inflation |
| NARCH | sibling NSAG Applied; separate limits |
| AI for Developing Brains | sibling/module-derived surface |
| SPORT | sibling NSAG Applied |
| Myelin CE | retired/broken; remove |
| Nervous System Studio | separate release-limited concept |
| Aloha AI | technical-build attribution only |
| old RN portfolio | stale; replace canonical RN Selected Work |
| Northeastern BookWithMe | affiliation/authorization ambiguity |

## Privacy/security/accessibility ledger

| Item | Finding |
|---|---|
| repository | private; deployment public |
| lead data | name/email/free text to external NSAG API |
| health-data warning/privacy | absent |
| response semantics | no status check; silent network catch |
| analytics | Vercel scripts; broken track; undisclosed |
| headers | XFO/nosniff/referrer/permissions; observed HSTS; no repo CSP |
| contact modal | no dialog semantics/labels/Escape/focus lifecycle |
| quiz | no fieldset/legend/live result; alert validation |
| guide cards | hover implies action but inert |
| sources | DOI plain text, not links |
| document order | footer before most main content |
| mobile | guide rows stack; domain grid/fixed contact require reflow test |
| inclusive language | binary sex/gender framing; missing applicability boundaries |
| RN portrait | absent; not required before evidence correction; no broken asset |
| visible authorship | footer credential only; no writer/verifier/clinical reviewer/conflicts |
| recommended portrait placement | optional single canonical image in future authorship card, after method/limits; not hero/pricing/contact/footer repetition |
| portrait mobile/desktop | if used, verify square/4:5 face-safe crop, resolution, loading and descriptive alt |
| OG/social authorship | no image/byline metadata; prefer evidence-led branded card unless explicitly authored commentary |

## Final disposition/count/treatment

1. Change `P` to `C`; parent is canonical NSAG case.
2. Zero standalone addition to portfolio build count; repository remains one estate asset.
3. Remove standalone Build Atlas card or convert to a nested NSAG applied example.
4. Temporary status: **Release-blocked framework concept**, not **Live guidance system**.
5. Suppress/noindex public link immediately because all four DOI records fail and clinical claims derive from them.
6. Do not count four guide volumes, quiz, evidence list or contact as builds.
7. Reconsider standalone `P` only after corrected/clinically reviewed evidence, completed guides, independent delivery and product governance exist.
