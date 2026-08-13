# Provenance Verify / Source Integrity Audit — R6 route and control ledger

Audit date: August 13, 2026 HST  
Canonical: <https://provenance-verify.vercel.app/>  
Repository: private/inaccessible `rn-collins/provenance-verify`  
Mode: read-only; no PII or documents submitted

## Identity and coverage boundary

The public product is **Source Integrity Audit**, a citation/claim review service with a browser-local regex checker. Despite the repository/domain name, it is not a media-provenance, C2PA/Content Credentials, cryptographic signature, hash, chain-of-custody, authorship-attribution, or authenticity-verification system. No file upload exists.

The full 55,549-byte production HTML, all inline scripts, visible sections, forms, modal states, quick-check algorithm, network destinations, headers, machine routes, and links were inspected. The private repository, server logs, unpublished R1–R25 protocol, IDR engine, sample report, source archive, contracts, fulfillment evidence, and client records were unavailable.

## Route/resource ledger

| Path | Result | Finding |
|---|---|---|
| `/` | `200` | Only product route; service page + local checker. |
| `/api/track` | `404` | Page-view/scroll analytics silently fail. |
| `/privacy`, `/terms`, `/sitemap.xml` | `404` | No privacy, service terms, retention/confidentiality, conflicts, refund, or sitemap. |
| `/robots.txt` | `200` | Public/indexable. |
| report/sample/methodology file | absent | No inspectable R1–R25 standard, report, archive, score rubric, or completed audit. |
| upload API/storage | absent | No upload or document processing. |
| checkout | absent | No payment or engagement acceptance. |
| cryptographic/C2PA API | absent | No authenticity/content-credential verification. |

## Section inventory

| Section | Delivered | Material finding |
|---|---|---|
| hero | R1–R25/IDR claims, 5-day promise, 119 count | All are self-asserted; no documentary artifact. |
| legal note | informational/not legal advice | Does not define attorney-client privilege, filing counsel, confidentiality, conflicts, scope, reliance, or malpractice boundary. |
| risk cases | 2024 sanctions, 2025 retractions | No case names, citations, links, jurisdiction, publisher, or primary evidence. |
| deliverables | audit/report/summary/correction | Commercial promises only; no sample. |
| pricing | $750–$2,500, retainer, rush | No checkout/SOW/terms; scope contradiction with later “up to 25.” |
| self-serve | $47/$67 products | No Gumroad/product links or delivery. |
| credentials | education/work claims | Must be documented; “clerking for law firms,” academic publication, IDR engine, and 119 findings unverified. |
| intake | CTA + two modals | All three lead paths are guaranteed false success. |
| Quick Source Check | textarea + regex output | Runs locally; no retrieval or verification. |
| EVIDENCE framework | eight prose dimensions | High-level authored rubric, not operational/published validation standard. |
| full audit | scope/deliverable repeat | Says up to 25 citations, conflicting with 50/150/300 pricing. |
| related tools | 3 sites | Claims about sibling tools require their own dossiers. |

## Control and data-flow ledger

| Control | Intended result | Proven result |
|---|---|---|
| Request Audit buttons | open enroll modal | Open client-side modal. |
| floating Contact | open contact modal | Opens client-side modal. |
| CTA form | send name/email | POST intended to cross-origin NSAG API. CSP `connect-src 'self'` blocks it; catch resolves and UI falsely promises follow-up. |
| enroll submit | send name/email | Same guaranteed blocked request and false “Request Received.” No checkout. |
| contact submit | send name/email/message | Same guaranteed blocked request and false “Message Sent.” |
| modal close/backdrop | dismiss | Click handlers present; no Escape/focus trap/dialog semantics. |
| Quick Check Analyze | preliminary grade | Pure client regex/keyword score, no source lookup. Empty input triggers alert. |
| source/portfolio/sibling links | external navigation | Links present; old portfolio URL is stale/redirecting. |
| self-serve products | purchase | No links; nonfunctional merchandising. |

### Quick-check algorithm

- claim type is whichever regex assignment runs last, not a reasoned classification;
- “citation” means only a superficial marker such as `(2024)`, `[1]`, “according to X,” or “et al”;
- currency means any `20xx` string;
- specificity means count of a small vague-word list;
- grade is a five-point heuristic: citation +2, no vague attribution +1, a year +1, fewer than two vague terms +1;
- outputs only B/C/D; it never retrieves, opens, resolves, authenticates, checks support, checks retraction, checks law, or verifies a source.

A fabricated sentence containing `[1] (2026)` can receive B. A true uncited commonplace can receive D. This is a writing-pattern prompt, not an integrity, provenance, fact-checking, or evidence-grade tool.

## Claim/legal/provenance ledger

| Claim | Treatment |
|---|---|
| “Every citation verified / every claim traced” | Overbroad and impossible to guarantee before scope/source availability; AI-generation origin is often unknowable. |
| “documented proof that you checked” | A report may document procedures, not prove truth, authenticity, completeness, competence, or legal adequacy. |
| “published standard R1–R25” | No publication or 25 rules are exposed; later text calls it an internally developed standard. |
| “IDR engine” | No code, interface, specification, output, or independent evidence. |
| “119 fabricated citations” | Specific marketing performance claim with no inspectable redacted report/method/counting rule. |
| sanctions/retraction examples | Plausible category, but page gives no sources and thereby fails its own standard. |
| “primary outranks secondary” | Too categorical: authority depends on proposition; controlling law, systematic reviews, standards, and reliable secondary synthesis serve different roles. |
| F = fabricated/retracted/unverifiable | Conflates distinct states; unretrieved/unverifiable is not proof of fabrication. |
| overall integrity score | No calculation, weighting, reliability, validation, or decision threshold exposed. |
| 5 days / 48-hour rush | No complexity, accessibility, paywall, foreign-language, domain, legal-update, or source-availability conditions. |

## Privacy/security/accessibility

- Prospective documents may contain privileged, confidential, personal, health, employment, trade-secret, sealed, copyrighted, or regulated data, yet there is no intake boundary, DPA, retention/deletion, storage, encryption, subprocessors, breach, conflict, privilege, secure-transfer, or destruction policy.
- Current page does not upload documents; the local checker keeps text in the browser DOM. This must be stated plainly.
- Three lead forms intend PII transfer to NSAG API but are CSP-blocked and falsely succeed.
- UTM data is stored in session storage; Vercel analytics intent and broken `/api/track` exist without a privacy notice.
- Security headers are comparatively strong; CSP includes `unsafe-inline` and `unsafe-eval` and cannot support the configured cross-origin lead service.
- Forms/modals lack complete dialog semantics, focus trap/restore, Escape handling, live status, consent notice, error handling, and robust email validation.
- Placeholder-only CTA labels, unlabeled quick-check textarea, alert-only error, and generated result without live announcement impair accessibility.

## Exact portfolio boundary

The public artifact verifies a service design, pricing copy, high-level methodology explanation, a heuristic local text-pattern checker, and broken intake interfaces. It does **not** verify an operating audit service, completed engagement, upload/secure transfer, source retrieval engine, IDR system, published R1–R25 protocol, cryptographic provenance, C2PA/content credentials, authenticity determination, report quality, 119-result claim, five-day delivery, or legal-filing adequacy.

