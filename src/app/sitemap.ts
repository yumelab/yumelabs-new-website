import { MetadataRoute } from "next";
 
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    const baseURL = "https://yumelabs.com"
    return[
        {
            url: `${baseURL}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
          },
          {
            url: `${baseURL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          },
          {
            url: `${baseURL}/work`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
          },
          {
            url: `${baseURL}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
          },
          {
            url: `${baseURL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
          },
    ]
}