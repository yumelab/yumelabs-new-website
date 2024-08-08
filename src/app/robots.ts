import { MetadataRoute } from "next"; 

export default function robot():MetadataRoute.Robots{
    const baseURL = "https://yumelabs.com"
    return {
        rules:[
            {
                userAgent:"*",
                allow:"/",
                disallow:["/admin","privacy"]
            }
        ],
        sitemap:`${baseURL}/sitemap.xml`
    }
}