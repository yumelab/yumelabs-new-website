import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robot():MetadataRoute.Robots{
    const baseURL = "https://yumelabs.com"
    return {
        rules:[
            {
                userAgent:"*",
                allow:"/",
                disallow:["/admin/","/private/"]
            }
        ],
        sitemap:`${baseURL}/sitemap.xml`
    }
}