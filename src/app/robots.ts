import { MetadataRoute } from "next"; 

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