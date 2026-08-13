# AIAPC Site — Route and Control Ledger

Audit date: 2026-08-12 (HST)  
Companion: [`STAGE_A_DOSSIER.md`](./STAGE_A_DOSSIER.md)

## Route/destination ledger

| Route/destination | Result | Notes |
|---|---|---|
| `/` | 200 | Canonical main document. |
| `/#home` | Client state | Home pseudo-page. |
| `/#newsletter` | Client state | Newsletter pseudo-page; Back synchronization broken. |
| `/#products` | Client state | Planned product catalog. |
| `/#who` | Client state | Founder/role biographies. |
| `/#contact` | Client state | Contact/mailto form. |
| `/bundle` | 200 | Canonical annual bundle page. |
| `/bundle.html` | 200 → clean `/bundle` | Clean URL behavior. |
| `/privacy` | 200 | Canonical privacy page. |
| `/privacy.html` | 200 → clean `/privacy` | Clean URL behavior. |
| `/AIAPC-Team-License-Terms-v1.pdf` | 200 | 3-page license PDF; defective. |
| `/robots.txt` | 200 | Allows all; sitemap reference. |
| `/sitemap.xml` | 200 | Lists three canonical pages. |
| `/og-image.png` | Static | Home/bundle social image. |
| `/api/track` | 404 | Page-view and scroll POST target missing. |
| `/api/lead` | 404 | Architect-contact POST target missing. |
| unknown same-origin path | 404 | Expected. |
| `rn-portfolio-khaki.vercel.app` | 200 | Obsolete portfolio/RN Builds link. |
| `rncollins.com` + Aloha/Clerking/Set for Life paths | 502 observed | Broken at audit time. |
| `rncollins.com/nsag` | Not completed | Network check not completed. |
| `twitter.com/aicakeweekly` | Unverified | Ownership/status not established. |
| `twitter.com/rn_collins` | Unverified | Ownership/status not established. |
| Beehiiv/Formspree/Vercel/Gumroad privacy links | Source present | Destination content not relied on for implementation truth. |
| `mailto:collins.ra@northeastern.edu` | External handoff | Primary contact/privacy/refund route. |

## Main-page control ledger

| Control | Result | Consumer effect |
|---|---|---|
| Logo button | Works visually | Activates Home, pushes `#home`. |
| Desktop Home/Newsletter/Products/Who/Contact | Mouse works; semantic/keyboard partial | `<a>` without href; changes visible panel/hash; loses focus. |
| Get Notified + subscribe CTAs | Partial/misleading | Route to Contact; no list subscription. |
| Mobile hamburger | Partial | Main page toggles class and ARIA state; no focus management/Escape. |
| Mobile nav items | Partial | Click switches panel and closes menu; anchors lack href. |
| More than 10 “Notify me” product CTAs | Planned only | Route to newsletter/contact; do not enroll or reserve. |
| Bundle CTA | Works | Goes to `/bundle`. |
| License Terms | Works/downloadable | Opens PDF. |
| Institutional inquiry | Partial | Routes Contact, preselects institutional after timer. |
| Site-license/review-copy CTAs | Partial | Contact only. |
| Primary contact name/email/type/message | Native fields | Proper visible labels; type optional. |
| Send message | Mailto only | Opens local email app, resets immediately, no delivery proof. |
| Contact status | Partial | Visual only; not live region. |
| Contact the Architect | Opens modal | Duplicate contact path. |
| Architect modal name/email/message | Partial | Placeholder-only labels, no focus trap. |
| Architect Cancel | Closes visually | No focus return. |
| Architect Send | Broken/false-success | POST 404 treated as success and modal closes. |
| Privacy link | Works | Opens `/privacy`. |
| Social/portfolio/byline links | Mixed | Portfolio resolves; RNCollins routes observed 502; social unverified. |

## Bundle-page control ledger

| Control | Result | Notes |
|---|---|---|
| Desktop nav | Works to root/hash routes | Full navigation. |
| Mobile hamburger | Visual class toggle | Does not update expanded/hidden state. |
| Notify Me at Launch | Contact only | No enrollment. |
| Six FAQ questions | Mouse partial | Clickable divs; not semantic/keyboard accessible. |
| Get the Annual Bundle | Contact only | No Gumroad/checkout despite purchase/delivery FAQ. |
| Questions/Get early access | Root/contact | No dedicated support flow. |
| License/privacy/social links | Present | License/privacy resolve. |

## Privacy-page control ledger

| Control | Result | Notes |
|---|---|---|
| Desktop/mobile nav | Same as bundle | Mobile ARIA state stale. |
| Operator email links | Mailto | Privacy request/contact mechanism. |
| Processor privacy links | Present | Beehiiv, Formspree, Vercel, Gumroad. |
| License/privacy/contact/social links | Present | Standard footer navigation. |

## PDF ledger

| Attribute | Result |
|---|---|
| Pages/format | 3 pages, US Letter, PDF 1.4. |
| Text extractability | Yes. |
| Tags/reading structure | None (`Tagged: no`). |
| Forms/JavaScript/encryption | None. |
| Metadata | Anonymous; no useful title/author/subject. |
| Visual quality | Failing: severe character spacing/overlap, awkward pagination, nearly blank page 3. |
| Public-tier consistency | Failing: 25/200 seat definitions conflict with 5/20/50 sales tiers. |
| Governing law | Massachusetts/Suffolk, conflicting with privacy's Hawaii framework and unclear entity/operator. |
| Refund/renewal | Nonrefundable/no auto-renew; public promises require reconciliation. |

## State/history/accessibility ledger

| State | Finding |
|---|---|
| Hash navigation | `pushState` called; no `popstate`; Back changes URL only. |
| Page title/canonical | Remains generic main-page metadata across hash states. |
| Focus after route | Falls to body; no heading focus/announcement. |
| Reduced motion | Missing across pages. |
| Focus-visible | No dedicated rule; inline outline removal on controls. |
| Desktop overflow | None at observed 1348 px. |
| Mobile/zoom | Source responsive rules present; live resizing unverified. |
| Analytics | Vercel scripts declared; local custom events 404. |
| Forms | Mailto handoff plus broken duplicate API modal; no subscription/commerce. |
