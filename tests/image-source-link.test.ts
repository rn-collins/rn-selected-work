import assert from "node:assert/strict";
import test from "node:test";
import { imageSourceLink } from "../lib/image-source-link.ts";
import { sourceLinkTargets } from "../lib/source-link-targets.ts";

test("keeps archive credit notes separate from the clickable record", () => {
  assert.deepEqual(imageSourceLink("https://digitalarchives.hawaii.gov/item/ark:70111/4TM4 (image https://digitalarchives.hawaii.gov/resources/images/ark_70111_4TM4.0.jpeg, cropped to the frame)"), {
    href: "https://digitalarchives.hawaii.gov/item/ark:70111/4TM4",
    note: "(image https://digitalarchives.hawaii.gov/resources/images/ark_70111_4TM4.0.jpeg, cropped to the frame)",
  });
});

test("preserves filename punctuation and Unicode without creating a query", () => {
  const result = imageSourceLink('https://commons.wikimedia.org/wiki/File:Liège_(2)_%22Clock_Stars%22_secure(?).jpg (Library of Congress record)');
  const parsed = new URL(result.href);
  assert.equal(parsed.search, "");
  assert.equal(decodeURIComponent(parsed.pathname), '/wiki/File:Liège_(2)_"Clock_Stars"_secure(?).jpg');
  assert.equal(result.note, "(Library of Congress record)");
  assert.equal(decodeURIComponent(new URL(imageSourceLink("https://commons.wikimedia.org/wiki/File:Kew Gardens (2).jpg").href).pathname), "/wiki/File:Kew Gardens (2).jpg");
});

test("keeps ordinary query parameters and an empty source intact", () => {
  assert.deepEqual(imageSourceLink("https://www.tsunami.gov/?page=history"), { href: "https://www.tsunami.gov/?page=history", note: "" });
  assert.deepEqual(imageSourceLink(""), { href: "", note: "" });
});

test("retains both independent documents in a compound source citation", () => {
  assert.deepEqual(sourceLinkTargets("https://www.ada.gov/resources/web-rule-first-steps/ and https://www.ada.gov/resources/2024-03-08-web-rule/"), [
    "https://www.ada.gov/resources/web-rule-first-steps/",
    "https://www.ada.gov/resources/2024-03-08-web-rule/",
  ]);
  assert.deepEqual(sourceLinkTargets("https://example.org/rock-and-roll"), ["https://example.org/rock-and-roll"]);
});
