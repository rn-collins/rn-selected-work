import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ESSAYS_INDEXABLE } from "./lib/essays-config";
import aanPostPaths from "./data/aan-post-paths.json";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nsagModuleRedirects = Array.from({ length: 15 }, (_, index) => {
  const n = index + 1;
  return {
    source: `/builds/nsag-m${n}`,
    destination: `https://nsag-site.vercel.app/m${n}`,
    permanent: false,
  };
});

// Ask a Neuroscientist posts from Nov 30, 2026 live at askaneuroscientist.vercel.app/p/<id>-<words>/ (RN, Nov 22 to 26).
// Slides and captions printed rn-selected-work.vercel.app/sources/<id>, so those addresses forward there. Before a post's
// date its /p/ page is not built yet, and the AaN site shows its own "not out yet" page.
const aanSourcesRedirects = Object.entries(aanPostPaths.paths as Record<string, string>).map(([slug, p]) => ({
  source: `/sources/${slug}`,
  destination: `https://askaneuroscientist.vercel.app${p}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  // Keep the dev watcher on this repo. A lockfile in the home directory
  // otherwise makes Turbopack treat /Users/rn as the workspace.
  turbopack: { root: projectRoot },
  // Post files served through the release-gated routes (lib/gated-files.ts) are read from data/ at request time.
  outputFileTracingIncludes: {
    "/charts/[slug]/[file]": ["./data/charts/**/*"],
    "/interactives/[slug]/[...path]": ["./data/interactives/**/*"],
    "/p/[slug]/slides/[file]": ["./data/post-pages/**/*"],
  },
  // Keep the production build within the existing deployment memory budget.
  // A one-CPU cap in dev leaves the first compile running until the request times out.
  experimental:
    process.env.NODE_ENV === "production"
      ? { cpus: 1, staticGenerationMaxConcurrency: 1 }
      : {},
  async redirects() {
    return [...nsagModuleRedirects, ...aanSourcesRedirects];
  },
  // The journal PDFs carry no meta tag, so while ESSAYS_INDEXABLE is false they get a noindex header instead.
  async headers() {
    return ESSAYS_INDEXABLE ? [] : [{ source: "/journal/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] }];
  },
};

export default nextConfig;
