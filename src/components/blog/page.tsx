import Introduction from "@/app/blog/Introduction"
import Info from "@/app/blog/Info"
import List from "@/app/blog/List" 
import Quote from "@/app/blog/Quote" 
import Footer from "@/components/Footer"

import {blog} from '@/data/casestudies/bookmypooja'
 
import Detials from "@/app/blog/Details"
import Cover from "./Cover"
import Branding from "./Branding" 
import Problems from "./Problems"
import ImagePanel from "./ImagePanel"
import Recommendation from "../home/Recommendation"
import Strategy from "./Strategy"
 
const Blog = () =>{
    const blogName = "SimpliContract"
    return(
        <main className="container md:max-w-screen-xl flex flex-col mx-auto px-8">
              
             {/* introduction section */
                (blog.introduction.state) && <Introduction data={blog.introduction}/>
             }
             {
                /* info section */ 
                (blog.info.state) && <Info items={blog.info.data}/>
             }
             {
               /* image panel section */ 
               (blog.info.state) && <ImagePanel title={blog.introduction.title} imgSrc={`assets/${blog.path}/header.png`} />
             }
             {
                /* project scope and  details section */
                (blog.details.state) && <Detials details={blog.details}/> 
             }
             {
               /* project scope and  details section */
               <Cover
                  projectName={blog.introduction.title}  
                  imgSrc={`/assets/${blog.path}/cover-1.png`} /> 
             }
             {
               /* project scope and  details section */
               <Strategy data={blog.strategy} path={blog.path}/>
             }
             {/* <Tagsbar /> */}
             <Quote text={blog.quote}/>
             {
               (blog.branding.state) && <Branding path={blog.path} section={blog.branding.section}/>
             }
             {/* <Paragraph title={blog.paragraph} description={blog.description} /> */}
             <List title={blog.list.title} description={blog.list.description} list={blog.list.items} />
             {/* <Socialbar/> */}
             {
                /* product design section */
                (blog.design.state) && <Problems path={blog.path} section={blog.design.section} problems={blog.design.problems} list={blog.design.list}/>
             } 
            <Cover
               projectName={blog.introduction.title} 
               imgSrc={`/assets/${blog.path}/cover-2.png`} /> 
               <div className="md:py-32">
               <Recommendation/>
               </div>
            <Footer/>
        </main>
    )
}

export default Blog