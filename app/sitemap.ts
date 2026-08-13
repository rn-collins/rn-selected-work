import type { MetadataRoute } from "next";
import { projects } from "../lib/portfolio";
import { publicBuilds } from "../lib/public-builds";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rn-selected-work.vercel.app";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/practice`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/for-organizations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/initiatives`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/initiatives/aloha-ai`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiatives/institutions-of-one`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/initiatives/nsag`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/writing`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/for/culturalyst`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/for/culturalyst/work`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/for/culturalyst/opportunities`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/for/culturalyst/conversation`, changeFrequency: "monthly", priority: 0.5 },
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
