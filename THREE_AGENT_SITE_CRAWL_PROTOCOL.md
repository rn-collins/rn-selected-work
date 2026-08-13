# Three-Agent Site Crawl Protocol

Version: August 12, 2026

Operational status: Waves 1 and 2 Stage A were completed and accepted August 12, 2026. Their dispositions are recorded in `MASTER_ASSET_RECONCILIATION.md`. Stage B remediation remains separate. Wave 3 Stage A is authorized for `nsag-m3`, `nsag-m4`, and `nsag-m5`.

## Purpose

This is the controlling handoff for auditing RN’s digital build estate with **three agents active at a time**, each assigned to a different site or independently deployed module.

An agent is not merely a link checker. For its assigned site, it must work simultaneously as:

1. a consumer;
2. a software engineer;
3. a software/product developer;
4. a copywriter and information architect;
5. a science, law, policy, and regulatory communicator, where the subject matter requires it;
6. a brand strategist; and
7. RN’s business partner.

These are required review lenses, not seven separate agents.

## Concurrency rule

- Run exactly three site agents in each wave when three unaudited sites remain.
- Each agent receives one site, its repository, its canonical deployment, its RN Selected Work record if one exists, and any parent/component relationship.
- Agents may not edit another agent’s site or RN Selected Work.
- The root/coordinating agent maintains the master ledger, resolves cross-site duplication, and is the only agent permitted to reconcile RN Selected Work records after accepting a site dossier.
- A new wave may start only after the preceding three dossiers have been received, checked for completeness, and entered into the ledger.

## Audit before remediation

Each site receives two distinct stages:

### Stage A — Read-only crawl and diagnosis

The agent maps and tests the site without changing it. It must inspect all discoverable same-origin routes and all visible consumer controls. It may fill fields with clearly synthetic, non-sensitive test values, but it must not submit contact, subscription, enrollment, purchase, booking, legal, medical, employment, or other consequential forms.

### Stage B — Approved remediation

Only after the dossier freezes the findings may the assigned site be changed. Remediation must occur in that site’s own repository, pass build and interaction checks, deploy, and then trigger a focused update to its RN Selected Work case study and evidence boundary.

## Required seven-lens audit

### 1. Consumer lens

- Identify the intended user and the job they believe the product will do.
- Begin with no insider knowledge.
- Record the first impression, value clarity, trust signals, confusion, friction, dead ends, and unanswered questions.
- Complete every safe primary journey.
- Test navigation, calls to action, forms without consequential submission, filters, search, calculators, downloads, onboarding, empty states, errors, persistence, back/forward behavior, and return visits.
- Decide whether the site delivers what it appears to promise.

### 2. Software-engineering lens

- Inspect repository architecture, dependencies, build configuration, deployment linkage, data sources, APIs, environment requirements, secrets boundaries, error handling, logging, testing, accessibility implementation, metadata, caching, and security-relevant behavior.
- Run the existing tests and production build.
- Identify placeholder code, unresolved templates, dead routes, broken imports, console errors, network failures, hydration problems, unsafe client exposure, and inaccessible controls.
- Distinguish production functionality from mocked, hard-coded, local-only, or conceptual behavior.

### 3. Software/product-development lens

- Reconstruct the product specification from the artifact.
- Determine which features are complete, partial, simulated, missing, or unnecessary.
- Test state transitions and feature dependencies.
- Evaluate responsiveness, keyboard use, touch behavior, loading, failure, empty, and completion states.
- Recommend the smallest coherent path from current artifact to a genuinely usable product.

### 4. Copywriting and information-architecture lens

- Read every visible word, label, title, notice, disclaimer, button, validation message, and metadata field.
- Check clarity, specificity, hierarchy, repetition, consistency, grammar, audience fit, tone, and “AI-writing” signals.
- Verify that buttons say what they actually do.
- Identify unsupported superlatives, vague promises, internal jargon, false urgency, accidental client implications, and copy that describes a future feature as present.

### 5. Science/law/policy/regulatory communication lens

- Extract every factual, scientific, medical, legal, regulatory, policy, historical, quantitative, and outcome claim.
- Trace each claim to the strongest available primary source.
- Check jurisdiction, effective date, currency, scope, qualification, causal language, uncertainty, and professional-advice boundaries.
- Identify claims that are unsupported, outdated, overstated, decontextualized, or inappropriate for the intended audience.
- Do not treat a citation count as proof of citation quality.

### 6. Brand-strategy lens

- Determine what practice owns the work: Aloha AI, NSAG, Institutions of One, RN Builds, another RN initiative, or an independently initiated organization-specific concept.
- Check naming, visual identity, authorship, Hawaiʻi grounding, differentiation, credibility, and fit with RN’s broader public identity.
- Prevent conflation of NSAG, Aloha AI, and Institutions of One.
- Determine whether the site strengthens, fragments, duplicates, or contradicts RN’s brand architecture.

### 7. Business-partner lens

- Identify the audience, buyer, beneficiary, decision-maker, economic value, adoption barrier, trust barrier, and plausible conversion path.
- Determine whether the artifact is a portfolio demonstration, lead generator, public resource, paid product, service-delivery layer, institutional proposal, research infrastructure, or internal operating system.
- Test whether pricing, scope, fulfillment, ownership, maintenance, data responsibility, customer support, and next steps are coherent.
- Recommend whether to invest, reposition, merge, complete, maintain privately, archive, or stop.

## Complete crawl requirements

For each site, the agent must inventory and test:

- every same-origin route discoverable through navigation, HTML, sitemap, robots file, source configuration, and repository routing;
- every header, footer, menu, breadcrumb, card, CTA, and text link;
- every button, tab, accordion, drawer, modal, carousel, filter, search field, form field, calculator control, upload control, and download;
- every external destination and cited source;
- desktop and mobile layouts;
- keyboard navigation and visible focus;
- headings, landmarks, labels, alternative text, contrast, reduced-motion behavior, and zoom/reflow;
- titles, descriptions, canonical URLs, Open Graph data, structured data, sitemap, and robots behavior;
- console, network, build, and runtime errors;
- privacy, terms, disclaimers, data collection, cookies, analytics, and user expectations;
- every stated product, service, course, tool, dashboard, report, resource, community, booking route, or promised deliverable.

## Required dossier

Each agent returns one dossier with these sections:

1. Asset identity: site, repository, deployment, parent practice, status, privacy.
2. Executive verdict: what it is, whether it works, whether it should exist, and top risks.
3. Complete route map.
4. Complete interaction/control inventory.
5. Consumer journeys and observed results.
6. Functional matrix: working, partial, simulated, broken, missing, intentionally unavailable.
7. Copy and information-architecture findings.
8. Science/law/policy/regulatory claim ledger.
9. Accessibility and responsive findings.
10. Brand-architecture findings.
11. Business-model and conversion findings.
12. Security, privacy, data, and operational findings.
13. Defects ranked P0 blocking, P1 serious, P2 material, P3 polish.
14. Exact remediation plan with file-level targets where repository access permits.
15. Recommended estate disposition: P, C, I, D, E, or X.
16. Proposed RN Selected Work case-study corrections.
17. Evidence appendix: URLs, screenshots where useful, logs, test output, source citations, and explicit unverified areas.

## Acceptance gate

A dossier is rejected as incomplete if it:

- samples routes instead of completing the route map without declaring the boundary;
- says buttons “appear to work” without recording the resulting state;
- treats a successful build as proof of a working consumer experience;
- checks copy without checking factual claims;
- checks facts without checking product delivery;
- ignores mobile or keyboard use;
- makes brand or business recommendations without inspecting the artifact;
- overclaims private, simulated, or unavailable functionality;
- omits unresolved defects; or
- fails to state what could not be verified.

## Initial wave order

The first waves should resolve unrepresented and high-risk assets before re-auditing simpler represented sites.

### Wave 1

1. `myelin-ce` — public GitHub and Vercel project, absent from RN Selected Work.
2. `aloha-ai-consulting-an6n` — determine relationship to canonical Aloha AI.
3. `z2f-live` — determine relationship to Zero → Frontier.

### Wave 2

1. `nsag-site` — parent NSAG public experience.
2. `nsag-m1` — first deployed module.
3. `nsag-m2` — second deployed module.

### Waves 3–7

Continue `nsag-m3` through `nsag-m15`, three at a time, keeping each module’s dossier separate while evaluating its consistency with the parent framework.

### Next unresolved-repository waves

Audit `aiapc-site`, `clerking-site`, `curriculum-licensing`, `eolpc-demo-v5`, `fadiman-atlas`, `field-intelligence-os`, `rn-agent-os`, `rn-portfolio`, `y`, and the nine unrepresented Aloha-related repositories. Private infrastructure such as `rn-api`, `nsag-api`, and `nsag-admin` receives a code/integration audit rather than a consumer-site crawl unless a public interface is discovered.

### Represented-site waves

After all unrepresented assets are dispositioned, crawl every represented build using the same protocol. Start with previously observed defects and large route sets: Startup Legal Risk Monitor, Nervous System Studio, EOLPC Knowledge System, Psychedelic Law Library, Aloha AI, Zero → Frontier, and Burgermeister Expansion Intel.

## Estate-level completion

The crawl program is complete only when every record in `MASTER_ASSET_RECONCILIATION.md` has a final disposition, every public or consumer-facing deployment has an accepted dossier, every accepted remediation has been verified in production, and RN Selected Work has been reconciled to the resulting canonical estate.
