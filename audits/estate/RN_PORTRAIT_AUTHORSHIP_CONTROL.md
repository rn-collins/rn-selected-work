# RN Portrait and Authorship Control

Date: August 13, 2026

## Controlling requirement

Every canonical public build and every RN Selected Work case-study surface must make RN's role legible and use the approved portrait intentionally where human identity improves authorship, trust, orientation, or conversion. A portrait is not required on every screen. Each surface must receive an explicit placement decision.

## Approved local source assets

- `public/rn-collins-portrait.webp` — canonical raster portrait.
- `public/rn-collins-portrait.svg` — embedded derivative with the title “Portrait of Rayven-Nikkita (RN) Collins.”

Do not introduce a different generated image, crop, or likeness without RN's approval. Prefer the WebP source for ordinary responsive-image delivery; retain the SVG only where its embedded form is technically justified.

## Preliminary RN Selected Work finding

The current source visibly uses RN's portrait on `/connect`. The generic case-study renderer uses project screenshots when provided and has no creator-portrait treatment. The site-wide metadata defines a large-image social card but does not presently declare a portrait or other explicit default Open Graph image in `app/layout.tsx`. This is not evidence that every deployed build has been inspected; the estate-wide result remains open until every canonical public deployment and every portfolio representation is recorded in the ledger below.

## Required estate ledger fields

For every canonical public build, record:

| Field | Required value |
| --- | --- |
| Canonical build | Repository and production URL |
| RN role | Builder, researcher, author, founder, independent initiator, or another accurate role |
| Live-build attribution | Present, missing, broken, inconsistent, or not warranted |
| Live-build portrait | Present, missing, broken, inconsistent, or not warranted |
| Selected Work attribution | Present, missing, broken, inconsistent, or not warranted |
| Selected Work portrait | Present, missing, broken, inconsistent, or not warranted |
| Mobile/desktop QA | Crop, resolution, layout, and loading result |
| Accessibility | Alt text and accessible-name result |
| Social/metadata | OG image, author image, schema, and preview result |
| Exact remediation | Placement, copy, asset, component, and acceptance test |

## Placement policy

- **Portfolio home and tailored recipient views:** include one deliberate RN identity moment, not a portrait on every card.
- **Case-study page:** include a compact “Built/researched by RN” authorship module with portrait when the page otherwise reads like anonymous institutional work.
- **Independent public build:** provide creator attribution in About, methodology, footer, or contact architecture. Use the portrait on an About/creator or conversion surface when appropriate; do not force it into operational dashboards or dense tools.
- **Editorial/article:** use byline/author identity and an author image where the publication format supports it.
- **Organization-specific uncommissioned concept:** pair the portrait with explicit independent-initiation and non-affiliation language so identity treatment cannot imply endorsement or client relationship.
- **NSAG and Institutions of One:** identify RN as founder/framework author accurately while preserving the practices' separation from Aloha AI.
- **Internal, retired, duplicate, quarantined, or private infrastructure:** no public portrait requirement; record `not warranted` and do not create a public surface merely to add one.

## Acceptance criteria

The control is complete only when every retained public build and every canonical case study has an evidence-backed row; all recommended portrait assets load at production URLs; mobile and desktop crops are visually verified; alt text is meaningful; social previews are checked; authorship does not imply unsupported commission, partnership, approval, or operating maturity; and the portfolio index contains no anonymous public case without an intentional identity decision.
