# keiki-robotics-oahu-ai — Route, Link, Resource, and Control Ledger

**Audit date:** August 13, 2026 HST  
**Tree:** `4f01fa8bd8c23d7600470c12c687b07d07d55b13`  
**Canonical:** `https://keiki-robotics-oahu-ai.vercel.app/`

## Route/asset ledger

| Route/asset | Status | Notes |
|---|---|---|
| `/` | 200 | single static guide; all content and controls |
| `/manifest.json` | 200 | standalone PWA metadata; no service worker/offline cache |
| `/og.png` | 200 | 1200×630 social image |
| `/icon-oai-180.png` | 200 | Apple icon |
| `/icon-oai-192.png` | present | PWA icon |
| `/icon-oai-512.png` | present | PWA/maskable icon |
| unknown path | 404 | no custom recovery |
| sitemap/robots/privacy/accessibility | absent | no files/routes |

## Interactive control ledger

| Control | Implementation | Persistence/external effect | Finding |
|---|---|---|---|
| 5 checklist steps | clickable `<li>` toggles class | memory only; lost on reload | visually works; inaccessible semantics/keyboard |
| checklist progress | CSS width and text | none | no ARIA progress/state |
| 4 myths | clickable `<div>` toggles class | memory only | visually works; inaccessible semantics/keyboard |
| Print/PDF | anchor calls `window.print()` | OS/browser print flow | not a PDF download; label misleading |
| Share | Web Share else clipboard | device/clipboard | no error handling/status announcement |
| Install guidance | UA highlights iOS/Android card | none | home-screen wrapper only; no offline service worker |
| Scroll progress | scroll listener | none | decorative |
| Reveal | IntersectionObserver | none | content may stay hidden when JS/observer fails |
| Star field | generated inline elements | none | motion lacks reduced-motion control |

## Primary action/contact links

| Label | Destination | Boundary |
|---|---|---|
| Island Robotics | `friendsofislandrobotics.org` | third-party nonprofit; no adoption/availability guarantee |
| Oʻahu A.I. events | `oahu.ai` | host-community home, not direct family registration |
| RN Collins | obsolete `rn-portfolio-khaki.vercel.app` | replace with current RN Selected Work/Aloha AI |
| Connect on LinkedIn | RN LinkedIn | adult, third-party messaging |
| Email directly | Northeastern `mailto:` | no privacy/child-sensitive-data warning |

## Evidence/resource ledger

| # | Resource | Claimed support | Audit treatment |
|---:|---|---|---|
| 1 | VEX IQ | grade band/construction | current page says grades 5–8 and includes a hand tool; correct broader “elementary/no tools” copy |
| 2 | RECF V5RC classification | middle/high band | currently redirects to sign-in; replace with open current rule |
| 3 | RECF/PR Newswire 2025 Worlds | 2,400+ teams/60+ countries | keep explicitly dated 2025; press release |
| 4 | VEX competition | annual game/local-to-Worlds | official vendor overview |
| 5 | VEX Library IQ | plastic construction/no soldering | verify current URL/content; vendor technical source |
| 6 | VEX Library V5 | metal/advanced | verify current URL/content; vendor technical source |
| 7 | Friends of Island Robotics About | Waipahu/all levels/support | organization self-description; not independent validation or current enrollment |
| 8 | Star-Advertiser 2023 club | teams/nominal cost | historical news; potential paywall; not current access guarantee |
| 9 | Star-Advertiser 2022 finalist | coach finalist | historical news; potential paywall |
| 10 | HSPLS event | coach/team/library event | historic event proves one event, not recurring library program |
| 11 | Luma event | Oʻahu A.I. showcase framing | event source; September 5, 2026; make registration prominent |
| 12 | Oʻahu A.I. | host community | affiliation not proven by link |
| 13 | Hawaiʻi Tech Week | event week | official dates Aug 31–Sep 6; distributed independently hosted events |

## Claim/state ledger

| Claim | Status |
|---|---|
| “Made with/for Oʻahu A.I.” | unresolved/unsupported; contradicts portfolio noncommissioned status |
| “with ... Island Robotics” | unsupported as collaboration/approval |
| “today's showcase” / “keepsake” | false time state on Aug 13; event scheduled Sep 5 |
| biggest program in Hawaiʻi schools | unsupported without statewide counts |
| IQ = elementary and middle | overbroad; current vendor says grades 5–8 |
| no tools | inaccurate/absolute; vendor says kit includes hand tool |
| cost rarely real barrier | unsupported and exclusionary |
| libraries host events | one historic example only |
| dozens to Worlds over decade | event-host framing; independently verify |
| details verified July 2026 | method/owner absent; one citation already gated |
| durable pathway/infrastructure | not implemented; static guide with two main entry links |

## Data/privacy ledger

- No first-party child/family data collection, storage, account, cookie or analytics code found.
- Checklist/myth state is transient and never transmitted.
- Google Fonts receives normal web request metadata.
- Web Share/clipboard/print are device/browser operations.
- External resources, Luma/Meetup, LinkedIn, email and news sites control their own data practices.
- No privacy notice or third-party handoff explanation exists.

## Build/operations ledger

| Item | Finding |
|---|---|
| Build system | none; raw static files |
| Tests/CI | none |
| Data/update mechanism | none |
| PWA | manifest/icons only; no service worker/offline cache |
| Security headers/CSP | not repository-configured |
| Vercel | READY production; no detected framework |
| Source maintenance | static “verified July 2026”; no per-source review log |

## Portfolio disposition

- **P** individual organization/event-specific concept.
- Public linking blocked until affiliation and event-time copy is corrected.
- Portfolio-safe: independently initiated static family explainer, public-source research, mobile interaction and annotated resources.
- Not portfolio-safe: commissioned/official/“with” organizations, delivered keepsake, durable infrastructure, program enrollment, family adoption/outcomes, maintained directory or saved pathway.
