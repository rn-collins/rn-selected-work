# keiki-robotics-oahu-ai — Represented-Site Recertification Dossier

**Product:** Getting Your Keiki Into Competitive Robotics in Hawaiʻi  
**Audit date:** August 13, 2026 HST  
**Scope:** Wave R4 exhaustive read-only consumer, software, copy, education/evidence, child/family safety, privacy, accessibility, Hawaiʻi/affiliation, brand, and business audit  
**Recommended disposition:** **P — organization/event-specific static resource, release-blocked pending affiliation and time-state corrections**  
**Source edits:** none

## 1. Asset identity

| Field | Finding |
|---|---|
| Repository | public `rn-collins/keiki-robotics-oahu-ai` |
| Branch / tree | `main`; tree `4f01fa8bd8c23d7600470c12c687b07d07d55b13` |
| Canonical deployment | `https://keiki-robotics-oahu-ai.vercel.app/` |
| Vercel | project `prj_537kS7NHBYGCLL86dvVAj0auT6pq`; production deployment `dpl_xkyyqkL8aqi8P3hpYxLd3oMF1vnp`, READY |
| Architecture | one 24 KB static HTML page; PWA manifest/icons/OG image; inline CSS/JavaScript; Google Fonts |
| Event context | Oʻahu A.I. “Meet Hawaii's Championship Robotics Teams,” September 5, 2026 at Entrepreneurs Sandbox, during Hawaiʻi Tech Week (August 31–September 6, 2026) |
| Portfolio boundary | existing RN Selected Work record says independently initiated and not commissioned |
| Public-page boundary | repeatedly says “Made with Oʻahu A.I.,” “Made for Oʻahu A.I.” and “with Oʻahu A.I. and Island Robotics,” creating an unresolved contradiction |

## 2. Executive verdict

This is a polished, usable, mobile-first static explainer for families curious about competitive robotics. It explains VEX IQ and V5 at a high level, offers a five-step checklist, myth disclosures, two prominent local/resource links, print-to-PDF, native sharing, PWA installation instructions and 13 annotated sources. It collects no child information and has no registration/account/analytics code in the repository.

It is not currently a durable robotics pathway or operating family service. There is no team finder, school/club directory, live program availability, age/grade selector, transportation/accessibility guidance, cost table, scholarship application, mentor contact workflow, calendar feed, registration handoff, saved progress, reminder, update mechanism or family support channel. Checklist state disappears on reload. Its only prominent “where to look” routes are Friends of Island Robotics and the general Oʻahu A.I. site; the actual September 5 event registration is buried as source 11.

The page's time and affiliation claims are release-blocking. On August 13, the event was still scheduled for September 5, yet the page calls itself “a keepsake,” refers to “today's showcase,” and says it was made “with” and “for” the organizations. RN Selected Work says it was independently initiated and not commissioned. No repository evidence proves Oʻahu A.I., Island Robotics, Hawaiʻi Tech Week, Haleʻiwa Elementary or the named coach reviewed, authorized, commissioned or adopted the page. Until that is documented, the public page must say **independently created from public event information; not an official event, school, team, nonprofit, VEX or RECF publication**.

The educational framing is approachable, but several claims need correction. Current VEX product material labels VEX IQ for grades 5–8, not all elementary/middle children; the linked RECF V5 age-band article now redirects to sign-in; “cost is rarely the real barrier” dismisses real cost, transport, time, disability/access, equipment, travel and team-availability barriers; “no scary tools” is subjective child-directed marketing and conflicts with VEX's own statement that kits include a hand tool.

Keep P as a strong audience-translation artifact, but classify it accurately as a static, pre-event, public-source family handout—not a delivered partnership or durable community infrastructure.

## 3. Complete route and asset map

| Route/asset | Result | Purpose |
|---|---|---|
| `/` | HTTP 200; 24,039 bytes | complete single-page guide |
| `/manifest.json` | HTTP 200 | install metadata; repeats “with Oʻahu A.I.” affiliation implication |
| `/og.png` | HTTP 200 | social preview |
| `/icon-oai-180.png` | HTTP 200 | Apple touch icon |
| `/icon-oai-192.png` | present | PWA icon |
| `/icon-oai-512.png` | present | PWA/maskable icon |
| unknown path | HTTP 404 | platform 404; no custom recovery |

There is no sitemap, robots file, privacy page, accessibility statement, terms, update log, server route, form endpoint, API, database, analytics endpoint, service worker, offline cache or automated test/build configuration.

## 4. Complete link and control inventory

### Interactive controls

- Five checklist rows toggle visual completion and a progress bar/message. State is in memory only.
- Four myth cards toggle explanatory text by mouse/touch click.
- “Download PDF” invokes browser print; it is not a generated/downloaded PDF.
- Share invokes Web Share or clipboard copy and changes button text.
- PWA OS-detection highlights iOS or Android install instructions.
- IntersectionObserver reveals content; scroll listener updates progress bar.

### Primary outbound actions

- Friends of Island Robotics home button.
- Oʻahu A.I. events/home button.
- RN portfolio (obsolete `rn-portfolio-khaki.vercel.app`).
- RN LinkedIn.
- `mailto:collins.ra@northeastern.edu`.

### Thirteen evidence/resource links

1. VEX IQ product page.
2. REC Foundation V5RC event-formats/classifications article — currently redirects to sign-in, so it is not a usable open family citation.
3. RECF 2025 Worlds press release hosted on PR Newswire.
4. VEX competition overview.
5. VEX Library IQ construction article.
6. VEX Library V5 building article.
7. Friends of Island Robotics About.
8. Honolulu Star-Advertiser 2023 Island Robotics article (likely paywall/access friction).
9. Honolulu Star-Advertiser teacher-finalist article (likely paywall/access friction).
10. Hawaiʻi State Public Library System event record.
11. Oʻahu A.I. Luma event registration.
12. Oʻahu A.I. homepage.
13. Hawaiʻi Tech Week homepage.

## 5. Actual pathway versus static resource

### What works as a pathway

- A novice family receives basic vocabulary and a sensible first action: ask the school or contact a local club.
- It distinguishes an entry-oriented plastic platform from more advanced metal V5 systems.
- It points to one local nonprofit/club, the host community and original evidence.
- Print/share/install make the artifact portable.

### What does not yet exist

- No verified list of Oʻahu schools/teams, age/grade eligibility, open seats, season dates, dues, equipment, practice location, transport, accommodations, language support or contact expectations.
- No “find a team” query or RobotEvents team/event finder.
- No direct, prominent registration button for the September 5 showcase.
- No saved checklist or reminder; installing the page does not make it an offline app because no service worker/cache exists.
- No owner/update cadence after the event, correction channel or last-check per resource.
- No feedback or evidence that families kept, used or progressed through it.

Therefore the portfolio phrase “convert a one-time event into durable community infrastructure” is aspirational and must be replaced with “designed a reusable take-home guide intended to extend an event beyond the room.”

## 6. Child, family, and educational safety

Positive findings:

- No child data, photos, profiles, location, registration or direct messaging is collected.
- The page addresses adults/families rather than soliciting children privately.
- It routes families to established organizations and schools.
- It encourages confirmation with a local coach because programs/costs change.

Corrections and omissions:

1. Add a clear adult-supervision boundary: families should contact programs, verify safeguarding/background-check, supervision, pickup, transportation, accessibility and emergency policies themselves.
2. Do not imply RN or the page vets teams/coaches, guarantees availability, safety, inclusion or program quality.
3. “No scary tools” should become objective construction information; VEX itself says IQ uses snap-together plastic and includes a hand tool.
4. “Let them build badly” is playful but can be reframed as normalizing iteration without shaming children.
5. Avoid universal benefit claims. Robotics can support practice in design, coding, collaboration and problem-solving; this page provides no outcome study or guarantee.
6. “Every championship team started with a robot that didn't work” is an inspirational absolute with no source.
7. Event details should include date, time, venue, free-admission/check-in link, caregiver expectations and a last-verified date. The external event description says keiki are welcome and do not need separate registration, but adult/household registration and entry/safety rules should be surfaced rather than assumed.
8. Add a family privacy warning before linking to third-party registration, Meetup/Luma, LinkedIn, email and external sites; those services have their own collection rules.

## 7. Evidence and claim accuracy

- **VEX IQ age/grade:** current VEX product page says grades 5–8. “Elementary and middle school” is only partly true (fifth grade may be elementary) and should not imply all elementary ages. Competition eligibility should cite current RECF rules, not only product marketing.
- **V5 age/grade:** the cited RECF article is now sign-in gated. Replace it with a current public RECF/VEX competition eligibility source.
- **Construction:** IQ is plastic/snap-together, but “no tools” is too absolute because the current product page states every kit includes a hand tool. “No soldering” should be verified to a current technical source.
- **Worlds scale:** the 2,400+/60-country statement is explicitly tied to 2025 and a press release; keep the year and do not imply 2026 scale.
- **Local access/cost:** Friends of Island Robotics supports access, but “cost is rarely the real barrier” is not established by one nonprofit and erases nonfinancial/structural barriers.
- **Libraries:** one historic library event supports that a library hosted a robotics event; it does not establish a current recurring statewide/Oʻahu schedule.
- **Coach/team:** finalist, team and Worlds claims rely partly on news/event-host copy. “Dozens ... over the past decade” is explicitly Oʻahu A.I.'s promotional framing and needs coach/school/competition-record verification before being repeated as fact.
- **“Biggest program in Hawaiʻi schools”:** no statewide participation dataset is cited. Change to “a prominent program represented in Hawaiʻi schools” or provide official current counts.
- **“Details verified July 2026”:** verification owner/method is absent and one citation is already inaccessible. Add claim-level checked dates and a correction method.

## 8. Hawaiʻi, event, school, and organization claims

The Hawaiʻi grounding is substantive: local event, nonprofit, public library, school team, coach and island-specific entry points are named. However, Hawaiʻi should not become evidence of affiliation or ecosystem authority.

- Hawaiʻi Tech Week 2026 is scheduled August 31–September 6; the robotics event is listed September 5 at 1:00 PM at Entrepreneurs Sandbox.
- Hawaiʻi Tech Week describes its events as independently hosted; appearing during the week does not mean Hawaiʻi Tech Week authored or endorsed this handout.
- Oʻahu A.I.'s event listing supports the event context and its own “dozens to Worlds” framing, not RN's collaboration status.
- Friends of Island Robotics supports its own program story; it does not evidence review or co-publication of this page.
- A public school, teacher/coach and team are named. Avoid any implication the Hawaiʻi DOE, Haleʻiwa Elementary, coach, students or families approved the use.
- Use diacritics consistently: Oʻahu, Hawaiʻi and Haleʻiwa in public copy and metadata.

## 9. Affiliation, commissioning, and intellectual-property boundary

The live page and manifest say:

- “Made with Oʻahu A.I.”
- “Made for Oʻahu A.I.”
- “with Oʻahu A.I. and Island Robotics”
- “A keepsake ... today's showcase”

The portfolio says independently initiated and not commissioned. These cannot coexist without documentation explaining an authorized collaboration. “With” and “for” reasonably imply participation, approval or commission. Use only one of these evidence-backed states:

- **If authorized:** document who requested/approved it, what organizations reviewed it, event distribution status and trademark/name permissions.
- **If independent:** say “Independent public-source companion guide inspired by the Oʻahu A.I. event; not commissioned, reviewed, endorsed or adopted by Oʻahu A.I., Island Robotics, Hawaiʻi Tech Week, VEX, RECF, any school or Hawaiʻi DOE.”

The custom “OʻAHU A.I.” brandline and OAI icons intensify officialness. Confirm permission or replace with RN/Aloha AI authorship and plain-text context. VEX/RECF nonaffiliation is disclosed only in the footer; extend it to all named entities.

## 10. Privacy, data, and security

- No first-party personal/child data storage or transmission is implemented.
- Checklist/myth state is ephemeral; no localStorage.
- Share uses the device share sheet or clipboard. Print sends content to browser/OS print handling.
- Google Fonts loads from Google domains, exposing routine request metadata; no privacy disclosure exists.
- External links transfer the user to organizations, news publishers, Luma/Meetup, LinkedIn, mail client and current/obsolete RN portfolio, each with separate privacy practices.
- `mailto:` exposes RN's Northeastern email publicly and invokes the family's configured client; first-contact guidance should say not to send child-sensitive information.
- No CSP or security headers are repository-configured. The inline script/style design would complicate strict CSP.
- No third-party analytics code was found in source.
- PWA installation suggests app-like persistence, but without a service worker it is a home-screen wrapper requiring network availability.

## 11. Accessibility and responsive findings

Strengths:

- Mobile viewport and narrow-layout CSS; large tap targets; readable line length.
- Headings, lists and anchors are structurally present.
- Decorative robot SVG is hidden from assistive tech.
- Print stylesheet exposes hidden myth content.

Serious gaps:

- Checklist rows and myth cards are clickable `<li>`/`div>` elements, not buttons/checkboxes/details; they have no keyboard operation, focus, role, state or accessible name.
- Progress bar is visual only, not a native/ARIA progress indicator.
- `.rev` content begins at `opacity:0`; if JavaScript/IntersectionObserver fails or reduced-motion/accessibility tooling behaves differently, most information may remain invisible.
- No `prefers-reduced-motion` rule disables star twinkle, reveal or smooth scrolling.
- Share success is visual text mutation without aria-live feedback; clipboard failures are unhandled.
- Print/Share links use `href="#"`, creating navigation noise.
- Gradient-clipped H1 and muted small text require measured contrast testing.
- No skip link, main landmark, navigation landmark, focus styling or accessibility statement.
- Install instructions are visual-only operational text and need browser/version caveats.

## 12. Product, brand, and business role

The build demonstrates audience translation, compact research, playful interaction, source annotation, responsive single-page design and an event-to-take-home content concept. It is a credible Aloha AI proof point for turning technical material into a family-facing artifact.

It does not demonstrate a functioning youth program, sustained community infrastructure, event partnership, program adoption, family outcomes or product analytics. Business CTAs route to an obsolete RN portfolio, LinkedIn and personal university email. Replace with the current Aloha AI/RN Selected Work conversion path and state that inquiries must remain nonconfidential and adult-led.

If productized for event/community clients, a stronger version would include a verified program directory, family/educator tracks, current dates/cost/access fields, translations, printable accessible PDF, offline caching, correction ownership, third-party privacy notice, organizer approval record and post-event usage feedback.

## 13. Defects by severity

### P0 — blocking

1. Unsupported/contradictory affiliation and commissioning claims (“with/for” versus independently initiated/not commissioned).
2. False current-time framing: “today's showcase” and “keepsake” before the September 5, 2026 event.

### P1 — serious

1. “Durable community infrastructure” overstates a static two-entry-point guide with no maintained directory/pathway.
2. Inaccurate/overbroad VEX age, tool, cost/barrier and Hawaiʻi-prevalence claims.
3. Core checklist/myth interactions are inaccessible to keyboard/assistive technology.
4. No child/family program-vetting, supervision, privacy or third-party registration boundary.
5. “Details verified July 2026” lacks method; one governing-body citation is already sign-in gated.

### P2 — material

1. No actual downloadable PDF; browser print is labeled “Download PDF.”
2. PWA language overstates app/offline capability; no service worker.
3. No reduced-motion treatment; reveal design can hide content when scripts fail.
4. Obsolete RN portfolio and personal university-email conversion path.
5. No sitemap, robots, privacy, accessibility, correction or update page.

## 14. Exact RN Selected Work corrections

**Keep P as an organization/event-specific concept, not a delivered partnership.** Recommended listing:

> **Keiki Robotics — Hawaiʻi Family First-Steps Guide**  
> An independently initiated, public-source companion resource inspired by an Oʻahu A.I. Hawaiʻi Tech Week robotics showcase. The static mobile guide explains basic VEX pathways, points families toward local starting places, and annotates its sources. It was not commissioned, reviewed, endorsed or adopted by the event host, teams, schools, VEX or RECF unless separate authorization is documented.

Replace these current portfolio implications:

- “created around an Oʻahu AI robotics event” → keep, but add the exact independent/public-source boundary.
- “created ... with Oʻahu A.I.” → remove unless documented.
- “durable pathway/community infrastructure” → “reusable take-home guide intended to extend a one-time event.”
- “age-specific pathways” → “high-level VEX IQ/V5 orientation”; current page does not offer individualized age routing.
- “local entry points” → “two prominent local/community links plus annotated sources.”
- Any implication families used/kept it → no usage evidence exists.

Case-study evidence paragraph should disclose:

- one static route, no child data, no program enrollment or team matching;
- in-memory checklist, myth toggles, print/share/PWA wrapper;
- 13 sources, with at least one now access-gated and several claims requiring correction;
- event date is September 5, 2026 and distribution/delivery is unverified;
- current affiliation copy conflicts with the noncommissioned status and is release-blocking.

Buttons:

- **Read case study** → RN Selected Work case page.
- **Open family guide** → canonical deployment only after affiliation/time corrections.
- Optional **View the event source** → verified current registration page, clearly third-party.

## 15. Release gates

1. Resolve/document affiliation and replace every unsupported “with/for” statement and OAI brand asset.
2. Change pre-event/future/past states dynamically or use timeless wording; prominently show event date/time/location/registration status.
3. Correct VEX grade/tool claims and replace the gated V5 citation.
4. Replace barrier-dismissive and universal-outcome language.
5. Add adult supervision, safeguarding, access, privacy and independent-program-vetting boundaries.
6. Convert clickable div/li controls to semantic keyboard-accessible controls; add reduced-motion and JS-failure visibility.
7. Relabel print as “Print or save as PDF,” or supply an accessible real PDF.
8. Either implement a maintained directory/pathway/update owner or narrow all durability claims.
9. Update current RN/Aloha AI contact/portfolio links and add nonconfidential contact guidance.
10. Add resource last-checked/correction information and recurring review ownership.

## 16. Verification record and limitations

- Read the full repository tree and complete HTML/CSS/JavaScript/manifest source.
- Verified production root, manifest and image/icon assets return 200; unknown path returns 404.
- Inspected all controls, 26 hrefs and all 13 annotated resource citations.
- Verified current VEX IQ public product material, Friends of Island Robotics About, Hawaiʻi Tech Week dates/context, and the Oʻahu A.I. event listing via current web sources.
- The linked V5RC article redirected to sign-in; some library/Luma pages were not directly renderable through the audit browser, though current search evidence confirmed event details.
- No external registration, share, print, email or contact action was executed.
- No source, portfolio or master-ledger file was changed.

## 17. Bottom line

Keiki Robotics deserves a case study as a strong example of family-facing technical translation. The honest artifact is a static pre-event guide, not yet a durable pathway, official handout or commissioned partnership. Correct the organization/time claims, strengthen the evidence and family-safety boundaries, make the interactions accessible, and then link it as a carefully bounded Aloha AI concept build.
