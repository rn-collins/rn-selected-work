import type { MetadataRoute } from "next";
import { projects } from "../lib/portfolio";
import { publicBuilds } from "../lib/public-builds";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rn-selected-work.vercel.app";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/connect`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/writing`, changeFrequency: "weekly", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...publicBuilds.map((build) => ({
      url: `${base}/work/${build.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/work/neurocognitive-systems-advisory-group`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/advisory/aloha-intelligence-institute`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
