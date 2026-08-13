# Curriculum Licensing — Route and Control Ledger

Audit date: 2026-08-12 (HST)  
Classification key: **V** verified; **P** partial; **B** broken; **E** external handoff; **M** missing; **U** unverified.

## Route ledger

| Route | HTTP | Classification | Notes |
|---|---:|---|---|
| `/` | 200 | V | Landing/offer/program overview. |
| `/programs` | 200 | V | Two-program catalog. |
| `/programs/ai-machine-learning` | 200 | V | AI/ML proposed 30-credit curriculum. |
| `/programs/cybersecurity-critical-infrastructure` | 200 | V | Cyber/critical-infrastructure proposed 30-credit curriculum. |
| `/courses` | 200 | V | 24 course inventory entries. |
| `/curriculum-development` | 200 | V | Custom-development service list. |
| `/licensing` | 200 | V | Use models, products/services, four FAQ disclosures. |
| `/method` | 200 | V | Six-phase method. |
| `/services-rendered` | 200 | V | Roles and reconstructed hours. |
| `/about` | 200 | V | RN/service biography. |
| `/request` | 200 | P | Email-only conversion. |
| `/request?program=BSAIML` | 200 | P | Query ignored by request page. |
| `/request?program=BSCYBER` | 200 | P | Query ignored by request page. |
| `/privacy` | 200 | P | Exists; incomplete hosting/email disclosure. |
| `/terms` | 200 | P | Informational only; not license/sale terms. |
| `/aloha-ds.css` | 200 | V | Shared responsive design system. |
| `/favicon.svg` | 200 | V | Static icon. |
| `/robots.txt` | 200 | V | Allows all, points to sitemap. |
| `/sitemap.xml` | 200 | V | All 13 canonical pages. |
| unknown path | 404 | V | Correct static response. |
| Aloha AI root | 200 | V | External ecosystem destination. |
| Aloha AI `/university/` | 404 | B | Linked globally; destination missing. |
| LinkedIn RN profile | 999 automated response | U | Do not call broken from automated status. |

## Repeated global controls (all 13 HTML pages)

| Control | Destination/behavior | Class | Notes |
|---|---|---|---|
| Skip to content | `#main` | V/source | Target exists on every page. |
| Aloha AI brand | `/` | V | Semantically returns to Curriculum home despite brand label. |
| Open menu hamburger | toggles `#navlinks` | U/source implemented | Native button; state/label/Escape code; browser execution unverified. |
| Programs | `/programs` | V | Header/footer. |
| Courses / Individual courses | `/courses` | V | Header/footer. |
| Development / Curriculum development | `/curriculum-development` | V | Header/footer. |
| Licensing | `/licensing` | V | Header/footer. |
| Method | `/method` | V | Header/footer. |
| About / About RN Collins | `/about` | V | Header/footer. |
| Request a proposal | `/request` | P | Route works; only email handoff available. |
| Services rendered | `/services-rendered` | V | Footer and contextual links. |
| Aloha AI | `https://aloha-ai-consulting.vercel.app` | V | Returned 200. |
| Aloha AI University | `https://aloha-ai-consulting.vercel.app/university` | B | Returned 404; appears globally. |
| LinkedIn | RN LinkedIn | U | Automated request blocked/status 999. |
| Email | `mailto:collins.ra@northeastern.edu?...` | E | Email client/delivery cannot be verified. |
| Privacy | `/privacy` | V | Route resolves. |
| Terms | `/terms` | V | Route resolves; content insufficient for transaction. |

## Page-specific controls

| Page | Control/label | Destination/behavior | Class |
|---|---|---|---|
| `/` | Browse programs | `/programs` | V |
| `/` | Commission development | `/curriculum-development` | V |
| `/` | Request licensing information | `/request` | P |
| `/` | License existing curriculum card | `/licensing` | V |
| `/` | Commission development card | `/curriculum-development` | V |
| `/` | License and customize card | `/request` | P |
| `/` | AI/ML program card | `/programs/ai-machine-learning` | V |
| `/` | Cyber program card | `/programs/cybersecurity-critical-infrastructure` | V |
| `/` | Visit Aloha AI | Aloha AI root | V |
| `/` | See the full method | `/method` | V |
| `/programs` | AI/ML program card | program detail | V |
| `/programs` | Cyber program card | program detail | V |
| `/programs` | Additional-program request | `/request` | P |
| AI detail | individual courses | `/courses` | V |
| AI detail | Request a private curriculum review | `/request?program=BSAIML` | P: context lost |
| AI detail | Licensing details | `/licensing` | V |
| Cyber detail | individual courses | `/courses` | V |
| Cyber detail | Request a private curriculum review | `/request?program=BSCYBER` | P: context lost |
| Cyber detail | Licensing details | `/licensing` | V |
| `/curriculum-development` | See the method | `/method` | V |
| `/curriculum-development`, `/courses`, `/method`, `/services-rendered` | Request proposal / Browse programs | `/request`, `/programs` | P / V |
| `/licensing` | FAQ: single course | toggles `p-lic1` | U/source implemented |
| `/licensing` | FAQ: customization | toggles `p-lic2` | U/source implemented |
| `/licensing` | FAQ: implementation/faculty | toggles `p-lic3` | U/source implemented |
| `/licensing` | FAQ: credit/accreditation | toggles `p-lic4` | U/source implemented |
| `/licensing` | Request licensing information | `/request` | P |
| `/about` | Aloha AI | external root | V |
| `/about` | Aloha AI University | external `/university` | B |

## Request-page email controls

Every card is an anchor with a prefilled subject/body; none is a submitted site form.

| Label | Intended subject | Class |
|---|---|---|
| License a complete program | Curriculum inquiry — License a complete program | E |
| License individual courses | Curriculum inquiry — License individual courses | E |
| Customize an existing curriculum | Curriculum inquiry — Customize an existing curriculum | E |
| Commission a new program | Curriculum inquiry — Commission a new program | E |
| Redesign an existing program | Curriculum inquiry — Redesign an existing program | E |
| Curriculum quality assurance | Curriculum inquiry — Curriculum quality assurance | E |
| Faculty or LMS implementation | Curriculum inquiry — Faculty or LMS implementation | E |
| Something else | Curriculum inquiry — Something else | E |
| Prefer to write directly | Generic curriculum licensing inquiry | E |

Each prefilled body asks for institution, program/course, delivery model, and timeline. No client-side validation, consent, receipt, secure upload, response status, or server processing exists.

## Missing transaction/artifact controls

| Expected capability | Classification | Evidence |
|---|---|---|
| Sample/download/evidence room | M | No route or asset. |
| Pricing/estimate/configurator | M | No prices or quote logic. |
| Web inquiry form | M | `mailto:` only. |
| Scheduling | M | No calendar link. |
| Secure document exchange | M | No portal/upload. |
| License/SOW view or acceptance | M | Terms defer to future agreement. |
| Checkout/payment/invoice | M | No commerce control. |
| Buyer account/file delivery | M | No auth/storage/fulfillment. |
| LMS package/demo/import | M/U | Service promised; no public implementation. |
| Faculty onboarding/maintenance | M/U | Add-ons promised; no workflow/artifact. |
| Accessibility/alternate-format request | M | No statement or request channel beyond generic email. |
| Correction/version history | M | No release or evidence ledger. |

## Verification boundary

HTTP and source/code classifications were directly verified. Interactive browser execution, responsive viewport rendering, keyboard/screen-reader behavior, mail-client launch/delivery, and private curriculum/product existence were not available and remain explicitly **U**. No messages or transactions were sent, and no production/source files were edited.
