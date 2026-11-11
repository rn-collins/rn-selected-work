import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ESSAYS_INDEXABLE } from "./lib/essays-config";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nsagModuleRedirects = Array.from({ length: 15 }, (_, index) => {
  const n = index + 1;
  return {
    source: `/builds/nsag-m${n}`,
    destination: `https://nsag-site.vercel.app/m${n}`,
    permanent: false,
  };
});

const nextConfig: NextConfig = {
  // Keep the dev watcher on this repo. A lockfile in the home directory
  // otherwise makes Turbopack treat /Users/rn as the workspace.
  turbopack: { root: projectRoot },
  // Keep the production build within the existing deployment memory budget.
  // A one-CPU cap in dev leaves the first compile running until the request times out.
  experimental:
    process.env.NODE_ENV === "production"
      ? { cpus: 1, staticGenerationMaxConcurrency: 1 }
      : {},
  async redirects() {
    return nsagModuleRedirects;
  },
  // The journal PDFs carry no meta tag, so while ESSAYS_INDEXABLE is false they get a noindex header instead.
  async headers() {
    return ESSAYS_INDEXABLE ? [] : [{ source: "/journal/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] }];
  },
};

export default nextConfig;
