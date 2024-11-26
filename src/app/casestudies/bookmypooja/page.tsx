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
import Recommendation from '@/app/home/Recommendation'
import Engage from '@/components/Engage'
import Footer from "@/components/Footer"


import GoodFlows from '@/assets/work/good-flows.webp'
import TwentyTwoYards from '@/assets/work/twenty-two-yards.webp'
import IEACIITMadras from '@/assets/work/ieac-iit-madras.webp'
import GieseckeDevrient from '@/assets/work/giesecke- devrient.webp'
import BookMyPooja from '@/assets/work/book-my-pooja.webp'
import IndicOrigin from '@/assets/work/indic-origin.webp'
import DoItZero from '@/assets/work/do-it-zero.webp'
import Maiven from '@/assets/work/maiven.webp'
import Approlabs from '@/assets/work/approlabs.webp'

import {ProjectsList} from "@/data/projects"; 
 
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
               (blog.info.state) && <ImagePanel title={blog.introduction.title} imgSrc={`../assets/${blog.path}/header.png`} />
             }
             {
                /* project scope and  details section */
                (blog.details.state) && <Detials details={blog.details}/> 
             }
             {
               /* project scope and  details section */
               <Cover
                  projectName={blog.introduction.title}  
                  imgSrc={`../assets/${blog.path}/cover-1.png`} /> 
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
               imgSrc={`../assets/${blog.path}/cover-2.png`} /> 
               <div className="md:py-32">
               {/* <Recommendation/> */}
               </div>
            <Recommendation
               projects = {ProjectsList.filter((item,i)=>i<3)}
               images = {[GoodFlows.src, GieseckeDevrient.src, IEACIITMadras.src]}
            />
            <Engage/>
            <Footer/>
        </main>
    )
}

export default Blog