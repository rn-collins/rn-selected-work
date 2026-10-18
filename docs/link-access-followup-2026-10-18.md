# External access follow-up

This follow-up distinguishes a working destination, a matching source, support for a particular claim, and unrestricted full-text access. These are separate checks.

The earlier crawl covered 760 public HTML pages, 2,651 distinct external destinations (2,647 clickable), and 14,999 occurrences. HTTP success for 2,429 destinations does not establish semantic accuracy. The separate scholarly identity review and article claim review address that distinction.

Reconciliation against the previously built site found 161 of 218 baseline exception destinations still linked; 57 had been removed or replaced. These are reconciliation counts, not fresh HTTP results or a count of broken links. Remaining baseline classes include publisher restrictions, login requirements, rate limiting and fetch failures.

## Additional checks and changes

- Six Google help destinations were retrieved with matching official content: account answers 14452558 and 3024190; Docs answer 190843; YouTube answers 171780, 7002106 and 9481328. The language-query variant of 171780 was not separately retested. Earlier rate limits do not make these dead links.
- The ImageNet CVPR 2009 paper was retrieved as an eight-page PDF from the ImageNet project. The IEEE bot-challenge destination was replaced with that matching project-hosted paper: https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf.
- The NBC Connecticut syndication of CNBC's Hoffman board-departure report returned 403. CNBC's original also restricted access. Its link now explicitly warns that publisher access may be restricted; no claim of full-text verification is made.
- Duke's Linda Fisher article remains identifiable in the official index, but the article fetch timed out. This is unresolved access, not proof of deletion.
- Publication notes distinguish New Bones publisher access, the Sage resilience abstract from full text, and the BU institutional thesis record from an unconfirmed PDF download.

## Interface coverage and limits

Prior desktop checks covered shared navigation, Explore filters and pagination, Writing filters and anchors, Builds filters and pagination, Sources filters, and all five article correction expanders. The new article rendering also supports amended introductions and headings while preserving original heading anchors.

A fresh mobile browser check remains outstanding. The available cloud browser interface offered no viewport-emulation operation. Local Playwright was installed, but its required browser binary was absent; the normal browser download failed with an unusable archive. A build or desktop check must not be described as a mobile interaction test.

No repository visibility or release settings are changed by this follow-up. The previous repository visibility comparison remains its own evidence; it is not represented as a new visibility audit.

Made-with: ChatGPT (OpenAI) · Codex / ChatGPT Work in browser · account: rndc gmail · chat: "ddw '26 gmail interview outreach" · https://chatgpt.com/g/g-p-6a6646890c688191b0df41d38e2e02de-polymath/c/6acb6a9a-30a0-83e8-82b8-a79e2e88dfd7
