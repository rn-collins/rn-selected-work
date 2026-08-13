# Buechler Pacific / Claude for Small Business — R5 route and control ledger

Audit date: August 13, 2026 HST  
Stage: A, read-only represented-site recertification  
Canonical deployment: <https://claude-smb-buechler.vercel.app/>  
Vercel project: `prj_NdA7pkdbO82rvQH0ot5D92M8DBkz`  
Repository: `rn-collins/claude-smb-buechler`, commit `8aa742449230503ce4b22991d7b4d7c0cca54a61`

## Coverage and identity boundary

The production artifact and repository are byte-identical: one 22,678-byte static HTML page plus a manifest and four image/icon files. The page has no server, API, database, form, calculator, generated file, customer workspace, or organization-specific workflow engine. All public HTML, inline JavaScript, assets, links, controls, product claims, Git history, headers, and current portfolio copy were inspected. Browser automation was attempted but unavailable in the environment; interaction conclusions below are source-proven unless identified as browser-unverified.

The current public page contains **zero references to Buechler Pacific or Hawaiʻi**. Git history shows that commit `c886204` intentionally removed Buechler branding and an unsupported statement that the resource was “reviewed and approved by Buechler Pacific.” Nothing inspected establishes commissioning, authorization, review, approval, use, attendance, delivery, or a relationship with Buechler Pacific.

## Route/resource ledger

| Route/resource | Result | Evidence-backed treatment |
|---|---|---|
| `/` | `200`, static HTML | Sole consumer route; generic independent Claude small-business guide. |
| `/manifest.json` | `200` | Standalone PWA metadata, but no service worker or actual install prompt. |
| `/og.png` | `200` | Orphaned in current metadata; OG image tags were removed. |
| `/icon-bp-180.png`, `/icon-bp-192.png`, `/icon-bp-512.png` | repository assets | Current HTML/manifest no longer references them; filenames retain legacy BP identity. |
| `/robots.txt`, `/sitemap.xml` | no repository files | No explicit crawl policy or sitemap. |
| `/privacy`, `/terms`, `/accessibility` | no routes | No policy pages; site collects no form data but uses external fonts/links and a mail client. |
| calculator | absent | No calculator, inputs, formula, savings estimate, ROI, or output exists. |
| downloadable PDF | absent | “Download PDF” invokes browser print; it is not a hosted/downloaded PDF artifact. |
| contact form/API | absent | LinkedIn and `mailto:` only; no delivery acknowledgement or CRM. |

## Complete page/content inventory

| Surface | Content | Finding |
|---|---|---|
| hero | RN Collins independent resource; Claude first workflow | Correctly disclaims independence, but contradicts portfolio’s Buechler-specific framing. |
| product overview | launch date, 15 workflows, 15 skills, 8 named connectors | July 2026 snapshot; official product now presents a Small Business plugin with 15 commands/skills and a changed connector set. |
| connector grid | QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google/M365, Slack | Static summaries; omits currently named Stripe and Square; collapses Gmail/Outlook and uses broader Google/M365 labels. |
| prompt desk | cash/invoices, month close, morning brief | Copyable generic prompts; no Buechler process, systems, data, roles, or acceptance criteria. |
| setup checklist | install, connect, run, approve | Local visual state only; not persisted or submitted. |
| safety/cost | permissions, training default, plans, course | Overbroad permissions and approval assurances; missing prompt-injection, retention, third-party, least-privilege, admin and write-tool controls. |
| action row | official product, print, share | Product link navigates; print is mislabeled download; share depends on Web Share/clipboard. |
| PWA instructions | Add to Home Screen | Manifest-only; no service worker/offline behavior and no install event. |
| services pitch | portfolio, LinkedIn, university email | Generic RN acquisition; stale portfolio URL redirects. |
| resources | three official links | Useful primary-source desk, but frozen July 2026 and insufficient for security/data claims. |

## Every control and state

| Control | Count | Intended result | Proven behavior/defect |
|---|---:|---|---|
| connector expanders `.cx` | 7 | reveal summary | Click toggles class. Implemented as non-focusable `div`; no button role, keyboard activation, `aria-expanded`, or relationship. |
| Copy prompt | 3 | copy prompt | Clipboard promise changes label on success; no rejection/capability fallback, live announcement, or error state. |
| checklist items | 5 | mark progress | Click toggles local state/progress; non-focusable `li`, no checkbox semantics/keyboard/persistence. |
| Open Claude | 1 | navigate to official product | Direct external navigation; no `target`; current URL resolves. |
| Download PDF | 1 | download | Calls `window.print()`; no PDF file, filename, version, or download. Mislabeling is material. |
| Share | 1 | native share/copy link | Uses Web Share when available, otherwise clipboard; no catch/error state. No share-success reset. |
| Add-to-home instructions | 2 passive cards | explain install | User-agent highlight only; not an install control and no offline app behavior. |
| portfolio | 1 | view RN work | Legacy URL redirects to RN Selected Work; should link directly. |
| LinkedIn | 1 | external contact | Direct profile navigation. |
| Email | 1 | contact | Opens `mailto:collins.ra@northeastern.edu`; no guarantee of configured mail client/delivery and institutional address raises continuity/brand concerns. |
| research links | 3 | open primary sources | Official Anthropic/Claude/course sources; annotated but details require revalidation. |

There are no input elements, forms, submissions, cookies, local storage, analytics calls, fetches, calculator controls, checkout, download generation, or authenticated functionality.

## Product/currentness claim ledger

| Claim | Audit conclusion |
|---|---|
| Launched May 13, 2026 | Supported by the cited official launch page as a dated snapshot. |
| “package of connectors and ready-to-run workflows” | Stale terminology: current official discovery presents an Anthropic-verified Small Business **plugin**, with commands and skills installed in Cowork. |
| 15 workflows / 15 skills | Current official plugin presents 15 commands and 15 skills; “workflow” should be reconciled with current terminology. |
| 8 named connectors | No longer current/clear. Official plugin currently names QuickBooks, PayPal, HubSpot, Canva, DocuSign, Gmail/Outlook, Slack, Stripe, and Square. |
| “Claude does the work” | Too broad; capability depends on plugin, connector, scope, plan, tool availability, approval, and task. |
| “You approve before anything sends, posts, or pays” | Overgeneralized. Official materials describe approvals for money/customer actions and organization controls, but write-tool approvals can vary; do not imply universal technical prevention. |
| permissions always carry over | Directionally true for supported delegated connectors, but incomplete: organization enablement, per-user authentication, requested scopes, third-party terms, role policy, and connector implementation matter. |
| Team/Enterprise data not used for training by default | Needs direct current privacy/commercial-terms link and distinctions among plan, connector data, chats, third parties, retention, and settings. |
| Pro for individuals, Team for business | Oversimplified; Cowork is currently available on Pro, Max, Team, and Enterprise, and plugin/connector availability and admin controls vary. |
| “Every fact on this page is sourced” | Too absolute: implementation suggestions, UI behavior, install language, business-fit assumptions, and current synthesis are not individually supported by three sources. |

## Security/privacy/data boundary

This static page itself receives no business data. The copied prompts, however, encourage connecting accounting, payments, CRM, email, calendar, drive, contracts, design, and messaging systems—high-impact financial, customer, employee, and confidential data. The guide needs a clear adoption gate: inventory data/classes; use business-managed accounts; verify current plan and terms; restrict scopes/connectors/users; require admin approval; test read-only/sandbox data first; prevent secrets/regulated data; address retention/deletion/third parties; defend against prompt injection; log and review consequential actions; define rollback and incident escalation; consult accounting/legal/security owners.

Production headers show HSTS and permissive `Access-Control-Allow-Origin: *`, but no observed CSP, `X-Content-Type-Options`, Referrer Policy, Permissions Policy, or frame protection. External fonts create third-party requests. External links are mostly safely opened with `noopener noreferrer`; same-tab product/course/pricing links leave the site. No secrets were found in source.

## Accessibility/UX ledger

- No skip link or `<main>` landmark.
- Connector expanders and checklist items are mouse-only semantic `div`/`li` controls.
- No global keyboard focus style; links/buttons rely heavily on `:active` rather than `:focus-visible`.
- Dynamic copy/progress/share status lacks `aria-live`.
- Scroll and reveal/count animations ignore `prefers-reduced-motion`; hidden `.rev` content depends on IntersectionObserver.
- Print CSS is useful, but calling it “Download PDF” is inaccurate and browser-dependent.
- Responsive rules exist at 430px, but device/browser execution was not available for independent visual certification.
- Color contrast, zoom/reflow, print pagination, clipboard/share failure, and screen-reader output require browser/assistive-tech verification.

## Exact RN Selected Work evidence boundary

The case cannot presently be represented as a Buechler Pacific deliverable, tailored organizational workflow, commissioned engagement, approved artifact, or live client outcome. Its verified public identity is a generic, independently initiated Claude small-business quick-start. The repository name and removed legacy copy explain the Buechler association, but do not establish authorization.

