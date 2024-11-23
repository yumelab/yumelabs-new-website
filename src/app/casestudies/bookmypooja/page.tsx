import {blog} from '@/data/casestudies/bookmypooja'

import Introduction from "@/components/blog/Introduction"
import Info from "@/components/blog/Info"
import ImagePanel from "@/components/blog/ImagePanel" 
import Detials from "@/components/blog/Details"
import Cover from "@/components/blog/Cover"
import Strategy from "@/components/blog/Strategy"
import Quote from "@/components/blog/Quote" 
import Branding from "@/components/blog/Branding" 
import List from "@/components/blog/List" 
import Problems from "@/components/blog/Problems"
import Footer from "@/components/Footer"
 
const Blog = () =>{
    const blogName = "BookMypooja"
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
               {/* <Recommendation/> */}
               </div>
            <Footer/>
        </main>
    )
}

export default Blog