import type { NextConfig } from "next";
import { ESSAYS_INDEXABLE } from "./lib/essays-config";

const nextConfig: NextConfig = {
  // Bound static-generation memory as the public portfolio grows.
  experimental: { cpus: 2 },
  // The journal PDFs carry no meta tag, so while ESSAYS_INDEXABLE is false they get a noindex header instead.
  async headers() {
    return ESSAYS_INDEXABLE ? [] : [{ source: "/journal/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] }];
  },
};

export default nextConfig;
