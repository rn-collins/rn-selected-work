import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/for/" },
    sitemap: "https://rn-selected-work.vercel.app/sitemap.xml",
  };
}
