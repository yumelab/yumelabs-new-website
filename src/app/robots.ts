import { MetadataRoute } from "next"; 

export default function robot():MetadataRoute.Robots{
    const baseURL = "https://yume-staging.web.app/"
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