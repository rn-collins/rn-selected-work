# JBD web-edition evidence audit

18 October 2026. RN authorized continued independent corroboration and correction across all five articles. Three research agents reviewed the articles, followed by cross-review of proposed changes. This expands the earlier eleven-passage review.

## Coverage and changes

Every one of the 289 body sections, including headings, and each article's standfirst field has an audit record. The combined ledger contains 302 records and 433 claim-or-paragraph units; the two long landscape/climate articles use full paragraphs as the unit, so this number is not a count of atomized factual claims. Metadata was also considered. Original article JSON remains unchanged.

There are 206 dated amendments: 195 additions to the earlier eleven. Each displays corrected wording, an explanation, supporting sources where applicable, and the exact original wording in an expandable disclosure. Amendments also work for introductions and headings. Original heading anchors are retained, and contents labels reflect amended headings.

| Article | Amended passages | Main corrections |
| --- | ---: | --- |
| Trauma-informed architecture | 9 | EEG alpha result corrected; design studies distinguished from measured clinical effects; trauma-treatment promises removed. |
| Designing for cognitive clarity | 8 | Mixed office evidence, diagnosis-specific sunlight findings, conceptual housing examples, historically bounded policy claims. |
| Wood | 51 | Mixed physiological findings; unsupported healing, education and civic outcomes removed; qualified carbon, fire, durability and emissions statements. |
| Landscapes as cognitive infrastructure | 62 | Mortality distinguished from mental health; navigation and nature findings narrowed; unverified case numbers removed; proposals labeled as proposals. |
| Design and climate change | 76 | Heat and temperature denominators clarified; unsupported city/case/economic figures removed; policy targets separated from demonstrated effects. |

The Philadelphia trial's depression-item improvement is separated from its nonsignificant overall poor-mental-health endpoint. The climate article distinguishes land-surface temperatures from air temperatures. Anonymous hospital, courtyard and pediatric case statistics were not replaced with invented cases. Useful design ideas remain as proposals to evaluate.

Printed references remain historical records. Newly identified bibliographic errors receive notes, and the Edinburgh address wrongly attributed to Shepley/Sachs is withheld as a source link. Missing printed works are not represented as recovered merely because a related source exists.

## Evidence and verification

`data/journal/web-amendments.json` is the authoritative amended reading text. `docs/jbd-full-audit-ledger-2026-10-18.json` records review snapshots, classifications and evidence limits. Final reading text includes small cross-review refinements beyond the proposal ledger: explicit no-intervention and non-redlined comparators, narrower FSC assurance wording, and added theory/end-of-life source notes.

The verification script checks section coverage, exact preservation of originals, rendered amendment counts, source links and contents anchors for all five pages. The production build passed. A standalone TypeScript invocation encountered pre-existing .ts import configuration errors in tests/image-source-link.test.ts; this is distinct from the production build and its configured checks.

The review does not certify every original assertion as true. It removes or narrows claims that were unsupported, overgeneralized or contradicted by the reviewed evidence. Some source full texts remain restricted, and study results retain population, duration and design limitations. No systematic-review claim is made.

See `docs/link-access-followup-2026-10-18.md` for external-access and interface limits, including the outstanding mobile interaction check. Repository visibility and release controls are unchanged.

Made-with: ChatGPT (OpenAI) · Codex / ChatGPT Work in browser · account: rndc gmail · chat: "ddw '26 gmail interview outreach" · https://chatgpt.com/g/g-p-6a6646890c688191b0df41d38e2e02de-polymath/c/6acb6a9a-30a0-83e8-82b8-a79e2e88dfd7
