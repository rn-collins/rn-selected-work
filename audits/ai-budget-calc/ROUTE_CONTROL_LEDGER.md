# AI Build Budget Calculator — Route and Control Ledger

Audit date: 2026-08-13 (HST)  
Disposition: **P — canonical case, release-blocked**  
Classes: **W** working; **P** partial/simulated; **B** broken/misleading; **E** external; **M** missing; **U** unverified.

## Routes/resources

| Surface | Result | Class |
|---|---:|---|
| `/` | 200 static calculator | W |
| `/api/leads` GET | 405 | W; POST unsafe/U |
| `/api/track` | 404 | B — page posts on scroll |
| `/robots.txt` | 404 | M |
| `/sitemap.xml` | 404 | B — declared in HTML |
| `/privacy` | 404 | M |
| arbitrary route | 404 plain Vercel | W/P |
| Aloha AI | 200 | E/W |
| legacy RN Builds | 308 → RN Selected Work | E/P |
| Zero → Frontier | 200 | E/W |
| Set for Life | access verification unavailable | E/U |
| Google Sheet | only in server email | E/U |
| RN API lead | cross-origin contact | E/U; separately audited |

## Inputs and formulas

| Input | Default | Behavior | Class |
|---|---:|---|---|
| hourly rate | $150 | finite parse or fallback 150 | P; negative possible |
| GET/tax | 4.5% | PS × rate | B as tax logic |
| project name | blank | CSV filename/preset label | W |
| phase names | 11 defaults | editable, reused through unsafe innerHTML | B/XSS |
| low/high hours | 300/490 total default | independent numeric fields | P; no ordering/negative validation |
| SE visibility | off | reveals separate checkbox | P/confusing |
| SE enabled | off | PS × 14.13% added only to header totals | B as tax logic |

Default: 300–490 hours; PS $45,000–$73,500; 4.5% line $2,025–$3,307.50; main total $47,025–$76,807.50. Display rounds to whole dollars in most fields.

## Presets

| Preset | Rate / GET | Hours low–high | Key risk |
|---|---|---:|---|
| EOLPC | $150 / 4.5% | 223–305 | Named organization-specific work; authored scope. |
| Legal AI | $150 / 4.5% | 315–490 | Compliance/privilege/security adequacy not established. |
| Startup | $125 / 0% | 130–215 | 60-day support bundled without service assumptions. |
| Healthcare | $150 / 4.5% | 370–585 | HIPAA/PHI/FHIR/WCAG/clinical UAT hours not compliance evidence. |

## Controls

| Control | Count | Result | Class |
|---|---:|---|---|
| presets | 4 | replaces project/rate/tax/phases | W/source |
| rate/tax/project | 3 | live recalculation/name | W/P |
| phase fields | 33 initially | names + low/high | W/P |
| delete | 11 initially | stacks removal; one phase minimum | W |
| add / undo | 2 | add 20–40; LIFO restore | W |
| SE checkboxes | 2 | reveal then enable | P |
| CSV | 1 | local five-column rows + tax/SE lines | W/P |
| paid-interest CTA | 1 | scroll/focus lead email | B as “pre-order” |
| lead form | 4 fields + submit | POST then unconditional success | B |
| related/footer links | 4 | external | E |
| contact openers | 2 | style-display modal | P/a11y |
| contact form | 3 fields + send/cancel | RN API; closes on any resolved response | B/P |

## Lead data/processors

Lead payload: `name`, `email`, `role`, `building`, `source`, current `url`. Server adds timestamp and key. Intended processors/destinations: Upstash Redis (no TTL), Slack webhook (PII/build text), Resend (HTML email), Google Drive sheet link. Future launch marketing is bundled with sheet request. No privacy/consent/retention/preferences UI.

Security: no origin/auth/CAPTCHA/rate limit/schema/length/email validation; unescaped `name`/`building` enter Resend HTML and Slack; all downstream status ignored; 200 always. No POST was made.

Contact payload: `name`, `email`, `message`, source `ai-budget-calc` to `https://rn-api-rn-collins.vercel.app/api/lead`. Non-2xx still closes modal.

## Static paid preview

Not a calculator and not purchasable. Visible claims: 26 build-material lines, Year 1 operations, mobile options, complete ask summary, Google Sheet and guide; $67 interest pricing/$97 launch. Examples are static: LLM dev $150–400, vector DB $60–150/3 months, security audit $8k–15k, inference $75–400/month, E&O $55–76/month and inconsistent $662–907/year.

## Metadata/security/accessibility

- wrong OG/schema URL (`ai-budget-calc.vercel.app`), no canonical, schema wrongly says NSAG-aligned;
- Vercel Analytics/Speed Insights scripts; UTM sessionStorage; broken scroll event endpoint;
- CSP permits inline/eval; frame denial, HSTS, nosniff, referrer and limited permissions present;
- no main/h1/skip, associated labels, semantic table, live totals, proper dialog/focus/Escape, hidden locked preview, responsive alternative, reduced-motion, privacy/terms/methodology/accessibility pages.

## Exact portfolio boundary

One Aloha AI portfolio build: a live editable **labor scenario** calculator with local CSV, not a complete budget, quote, benchmark, tax tool, live paid product, validated legal/healthcare scope or NSAG framework. The unsafe lead funnel and tax labels are release-blocked.

## Verification boundary

Read-only source/HTTP audit. No source/portfolio/master edits, POST, lead, email, Slack, Redis, contact, checkout or download. Live browser runner unavailable; interactive/a11y/mobile execution remains U where source alone cannot prove results.
