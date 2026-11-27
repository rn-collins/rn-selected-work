const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = process.env.PROJECT_RELEASE_TEST_ROOT || path.resolve(__dirname, "..");
const cache = new Map();
function load(relative) {
  if (cache.has(relative)) return cache.get(relative);
  const filename = path.join(root, relative);
  const result = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    fileName: filename, reportDiagnostics: true,
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020, esModuleInterop: true }
  });
  assert.equal((result.diagnostics || []).filter(d => d.category === ts.DiagnosticCategory.Error).length, 0);
  const module = { exports: {} };
  function dependency(id) {
    if (id.endsWith("/portfolio")) return load("lib/portfolio.ts");
    if (id === "next/link") return ({ children, ...props }) => React.createElement("a", props, children);
    if (id === "next/image") return props => React.createElement("img", props);
    // Render boundary probes: if a held preview/source reaches these dependencies,
    // its URL is emitted, so the assertions below fail.
    if (id.endsWith("/live-preview")) return { LivePreview: ({ url }) => React.createElement("iframe", { src: url }) };
    if (id.endsWith("/source-links")) return { publicSourceLink: candidate => candidate };
    if (id.endsWith("/verified-record")) return { VerifiedRecord: () => null };
    if (id.endsWith("/builds")) return { buildByCaseStudy: new Map() };
    if (id.endsWith("/public-builds")) return { publicBuilds: [], getPublicBuild: () => undefined };
    return require(id);
  }
  vm.runInNewContext(result.outputText, { module, exports: module.exports, require: dependency }, { filename });
  cache.set(relative, module.exports);
  return module.exports;
}
const portfolio = load("lib/portfolio.ts");
const Case = load("app/work/[slug]/page.tsx").default;
const Cards = load("app/for/culturalyst/work/page.tsx").default;
for (const project of portfolio.projects) {
  test(`case release boundary: ${project.slug}`, async () => {
    const html = renderToStaticMarkup(await Case({ params: Promise.resolve({ slug: project.slug }) }));
    assert.ok(html.includes(project.title));
    if (/release-blocked/i.test(project.status)) {
      assert.ok(!html.includes(project.live), "held live URL must not enter preview or action");
      assert.ok(!html.includes(project.repo), "held source must not become a public CTA");
      assert.ok(!html.includes(project.image), "held image fallback must not render");
      assert.match(html, /held pending release review/);
    } else {
      assert.ok(html.includes(project.live), "unheld live action must remain");
    }
  });
}
test("both Culturalyst card loops preserve case links and suppress only held live actions", () => {
  const html = renderToStaticMarkup(React.createElement(Cards));
  for (const p of portfolio.projects) {
    assert.ok(html.includes(`href="/work/${p.slug}"`));
    assert.equal(html.includes(p.live), !/release-blocked/i.test(p.status), p.slug);
    assert.ok(html.includes(p.status));
  }
  assert.ok(!html.includes("makes a tailored AI workflow"));
  assert.ok(!html.includes("into a durable pathway"));
});
test("explicit holds and historical blocked status independently prevent promotion", () => {
  const sample = portfolio.projects[0];
  assert.equal(portfolio.canPromoteProject({ ...sample, releaseHeld: true }), false);
  assert.equal(portfolio.canPromoteProject({ ...sample, releaseHeld: false, status: "Concept · RELEASE-BLOCKED" }), false);
  assert.equal(portfolio.canPromoteProject(sample), true);
});
