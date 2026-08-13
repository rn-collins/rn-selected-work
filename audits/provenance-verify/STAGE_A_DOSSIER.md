# Stage A recertification dossier — Provenance Verify / Source Integrity Audit

Audit date: August 13, 2026 HST  
Round: represented-site recertification R6  
Mode: read-only; no source, portfolio, deployment, or master-ledger edits

## 1. Executive verdict

The strongest real artifact is a clearly productized idea for manual citation review, accompanied by an accessible prose framework and a small browser-local writing-pattern checker. The underlying business problem is real and important.

The name **Provenance Verify** materially overstates the implementation. Nothing verifies provenance or authenticity in the technical sense: there is no C2PA/Content Credentials support, signature or certificate validation, hash, manifest, chain of custody, authorship analysis, file inspection, cryptography, source retrieval, or upload. The “Quick Source Check” only scans text for keywords, citation-shaped strings, years, and vague quantifiers. It can award B to fabricated text containing a year and `[1]`.

The commercial service is also unverified. No sample report, full R1–R25 protocol, IDR engine, source archive, checkout, secure document intake, contract, or completed delivery is public. Pricing contradicts the later scope: tiers advertise up to 50/150/300 citations, while the full-audit section says “up to 25.” Every lead/contact flow is guaranteed to fail because CSP blocks the cross-origin NSAG API request; catch logic then displays success.

Disposition: **P only as a prelaunch/manual evidence-review service concept with a demonstrative heuristic checker.** Release and “live service system” status are blocked until intake, evidence, confidentiality, methodology, legal boundaries, delivery, and claims are remediated.

## 2. Identity and real-versus-simulated boundary

| Surface | Real | Not evidenced/simulated |
|---|---|---|
| landing page | full static service/pricing/method copy | service operations |
| Quick Source Check | local regex classification | source lookup, citation resolution, factual/support/authenticity verification |
| EVIDENCE | public high-level authored dimensions | operational rules, validation, inter-rater reliability, published R1–R25 standard |
| intake | forms/modal UI | delivered lead, checkout, secure document transfer, engagement |
| report | promised deliverable | sample/report generation/quality/archive |
| provenance | marketing term | C2PA, credentials, cryptography, authorship, chain of custody |

Repository access was private. Full production coverage is recorded in [ROUTE_CONTROL_LEDGER.md](./ROUTE_CONTROL_LEDGER.md).

## 3. Consumer and product journeys

### Publisher/lawyer assessing credibility

The page makes unusually strong claims—every citation, every claim, five days, 119 fabrications—while failing to cite its own sanctions/retraction examples or expose its standard. That contradiction damages the core trust proposition.

### User pasting a claim

Text remains client-side by inspected code. Output is instant because no source is retrieved. The grade reflects surface form, not truth/support. “Preliminary evidence grade” remains too authoritative even with the lite-check disclaimer.

### Buyer requesting an audit

All three forms appear to accept the request but cannot send it due CSP. The buyer receives a false one-business-day promise. No document can be transferred or purchased.

### Buyer assessing confidentiality

No answer exists for privilege, conflicts, secure transfer, storage, retention, deletion, subprocessors, breach, sensitive-data exclusion, source archiving, copyright, or destruction.

## 4. Methodology and evidence validity

Useful concepts include claim classification, retrievability, source type, currency, attribution, conflicts, confidence, and summary. They are not yet a defensible audit standard.

Required methodological corrections:

1. Publish all R1–R25 rules, definitions, decision trees, exceptions, scope and version.
2. Separate existence, retrieval, authenticity, authority, currency, proposition support, methodological quality, retraction/correction, conflicts, and synthesis.
3. Never infer “fabricated” merely from failure to retrieve.
4. Define unit of analysis and how one citation supporting several claims is handled.
5. Establish jurisdiction/domain reviewers and escalation for controlling law, science, medicine, policy, and statistics.
6. Publish sampling/QC, second-review, disagreement, correction, audit-log, and update procedures.
7. Validate scoring, weighting, inter-rater reliability, error rates, and permitted decisions before publishing an “integrity score.”
8. Provide redacted worked examples and a sample report.
9. Replace “primary always outranks secondary” with proposition-specific authority rules.
10. Label the free checker “citation-pattern preflight” and remove evidence grades unless validated.

## 5. Legal and professional boundary

The general no-legal-advice banner is insufficient for a law-firm/filing service. A filing lawyer cannot outsource Rule 11 or equivalent professional duties to a report. The service needs terms addressing:

- no attorney-client relationship or legal opinion unless separately agreed by qualified counsel;
- filing/editorial counsel retains responsibility;
- jurisdiction, citator/currentness cutoff, court/local rules, record completeness and inaccessible sources;
- conflicts checks, confidentiality/privilege preservation and subcontractors;
- client warranties/permissions for supplied documents and source archiving;
- reliance, limitations, correction window, liability/insurance, refunds/cancellation;
- copyright/license and secure destruction;
- no guarantee that a document is true, lawful, authentic, noninfringing, complete, or sanction-proof.

“Documented proof” should become “a documented record of the procedures and findings performed within the agreed scope.”

## 6. Privacy and security

The service’s likely inputs are high sensitivity. Before accepting documents it needs a secure authenticated transfer channel—not email or the current forms—plus encryption, least privilege, tenant separation, malware scanning, access logging, retention/deletion, backups, incident response, DPA/subprocessor disclosure, data residency, privilege/confidentiality workflow, conflicts, and a published privacy notice.

The public checker currently performs no upload, which is privacy-positive and should be explicitly disclosed beside the textarea. Lead capture is broken/false-success. No privacy or terms routes exist. Analytics tracking is configured but `/api/track` returns 404; UTM capture persists per session.

## 7. Accessibility and delivery

The page has a coherent visual system and strong response headers. Major issues:

- modals lack `role=dialog`, accessible naming, focus trap/restore, Escape support, and live success/error;
- CTA form relies on placeholders, while modal labels are not explicitly bound with `for`;
- quick-check textarea has no programmatic label and result changes are not announced;
- required/invalid state and network errors are not exposed;
- fixed navigation/contact controls require mobile/zoom overlap testing;
- no privacy/terms/accessibility links;
- browser/assistive-tech verification remains unperformed.

## 8. Business and brand review

The service has a credible pain point and clear product packaging. It currently creates more liability than trust because its strongest proof claims are themselves unsupported, the buying path is broken, and confidential-document operations are absent.

Brand architecture should use **Source Integrity Audit** as the product name. “Provenance” may describe source traceability, but “Provenance Verify” should be retired or explicitly limited so audiences do not infer technical content authenticity. The RN Collins LLC/Aloha AI/RN Builds/NSAG API fragmentation should be consolidated into one accountable commercial identity and durable contact/privacy surface.

## 9. Ranked defects

### Critical

1. All three intake/contact flows are CSP-blocked false success.
2. No secure-document/privacy/confidentiality/privilege operating boundary for sensitive legal/publishing material.
3. Product/domain implies provenance verification but implements none.

### High

4. Quick checker assigns “evidence grades” without checking evidence.
5. R1–R25, IDR, 119 finding, experience, and performance/delivery claims are not inspectable.
6. Pricing/scope contradicts itself (25 versus 50/150/300 citations).
7. Own risk examples are uncited.
8. No sample report, checkout, terms, refund, or operating proof.
9. “Every” and “proof” guarantees exceed defensible scope.

### Medium

10. Self-serve products have no purchase links.
11. Broken analytics/sitemap and stale portfolio identity.
12. Modal/form/result accessibility defects.

## 10. Exact Stage B remediation plan

1. Rename/reframe to manual Source Integrity Audit; remove technical-authenticity implications.
2. Disable intake until delivery works; align CSP/API and show success only on confirmed server response.
3. Create secure document intake and the full privacy/security/confidentiality system.
4. Publish terms, professional limitations, conflicts process and service agreement.
5. Publish/version R1–R25, score rules, samples, QC and reviewer qualifications.
6. Replace or relabel the checker as unvalidated citation-pattern preflight; show what it does not do.
7. Reconcile citation tiers/scope, turnaround conditions, rush capacity, corrections and exclusions.
8. Cite every public sanctions/retraction and performance example with primary sources or remove it.
9. Document or remove 119/IDR/years/daily/clerking claims.
10. Ship inspectable sample deliverables and functioning commerce/contact.
11. Add privacy/terms/accessibility/sitemap and correct analytics.
12. Remediate modal/form/keyboard/screen-reader/mobile behavior and independently verify.

## 11. Estate disposition

**P — retain as one prelaunch manual evidence-review service concept.** It is not a cryptographic provenance product and should not be split into a separate “verification tool” case. The free checker is only a small demonstrative feature within the service case.

## 12. Exact RN Selected Work corrections

- **Title:** retain “Source Integrity Audit”; remove any “Provenance Verify” consumer label.
- **Status:** replace “Live service system” with **“Prelaunch service architecture + local citation-pattern preflight · intake broken at audit.”**
- **Purpose:** “Help publishers and legal teams document a scoped manual review of citation existence, currency, authority, and proposition support before publication or filing.”
- **Researched:** describe the eight public EVIDENCE dimensions as an authored framework; do not say a published/validated R1–R25 standard or IDR engine was verified.
- **Built:** “A static commercial service page, pricing model, high-level methodology, and browser-local regex preflight that detects citation-shaped markers, years, and vague language.”
- **Serves:** “Potential publishers, researchers, and legal teams, subject to secure intake, conflict, confidentiality, and professional-review controls.”
- **Demonstrates:** “Service architecture, evidence-operations framing, claim taxonomy, and productized quality-assurance design—not completed audit performance.”
- **Evidence:** replace current note with:

> The public artifact verifies service positioning, proposed deliverables/pricing, an eight-part methodology explanation, and an unvalidated browser-local text-pattern preflight. It does not verify a completed client audit, secure document intake, source-retrieval or IDR engine, published R1–R25 rules, sample report, 119-citation result, five-day delivery, checkout, or legal-filing adequacy. The preflight performs no source lookup and cannot determine truth, support, fabrication, authenticity, or provenance. At audit, every lead path was blocked by CSP while still displaying success.

- **Boundary:** explicitly state this is not C2PA/Content Credentials, cryptographic verification, authorship attribution, chain of custody, or authenticity certification.
- **Live action:** remove or label prelaunch until intake/privacy/terms are operational.

## 13. Unverified evidence

Unverified: private repo/build/config; server/log/storage; R1–R25; IDR; source archive; reports; client work; credentials/employment; 119 count; delivery/turnaround; purchases; insurance; privacy/security operations; browser/mobile/AT behavior. No document or PII was submitted.

## Stage A decision

Freeze this dossier. Retain P only under the corrected prelaunch/manual-service boundary. Do not represent the checker as verification, the site as an operating service, or the product as technical provenance/authenticity infrastructure.
