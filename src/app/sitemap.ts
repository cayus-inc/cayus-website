import type { MetadataRoute } from "next";

const BASE_URL = "https://cayus.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/contact", "/legal", "/privacy", "/terms", "/cookies"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
