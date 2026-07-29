import type { MetadataRoute } from "next"
import { PROJECTS } from "@/lib/projects"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PROJECTS.map((project) => ({
      url: `${SITE_URL}/portafolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
