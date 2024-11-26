import {blog} from '@/data/casestudies/twentytwoyards'

import Introduction from "@/components/blog/Introduction"
import Info from "@/components/blog/Info"
import ImagePanel from "@/components/blog/ImagePanel" 
import Detials from "@/components/blog/Details"
import Cover from "@/components/blog/Cover"
import Strategy from "@/components/blog/Strategy" 
import Branding from "@/components/blog/Branding"  
import Problems from "@/components/blog/Problems"
import Recommendation from '@/app/home/Recommendation'
import Engage from '@/components/Engage'
import Footer from "@/components/Footer"

import GoodFlows from '@/assets/work/good-flows.webp' 
import IEACIITMadras from '@/assets/work/ieac-iit-madras.webp'
import GieseckeDevrient from '@/assets/work/giesecke- devrient.webp' 

import {ProjectsList} from "@/data/projects"; 
 
const Blog = () =>{ 
    return(
        <main className="container md:max-w-screen-xl flex flex-col mx-auto px-8">
              
             {/* overview section */
                (blog.overview.state) && <Introduction data={blog.overview}/>
             }
             {
                /* key attribute section */ 
               (blog.keyAttributes.state) 
               && <Info items={blog.keyAttributes.data}/>
             }
             { 
               <ImagePanel 
                     title={blog.overview.title} 
                     imgSrc={`../assets/${blog.path}/header.png`} />
             }
             {
                /* project scope and  details section */
                (blog.outline.state) && <Detials details={blog.outline}/> 
             }
             {
               <Cover
                  projectName={blog.overview.title}  
                  imgSrc={`../assets/${blog.path}/cover-1.png`} /> 
             }
             {
               /* project strategy section */
               (blog.strategy.state) 
               && <Strategy 
                     data={blog.strategy} 
                     path={blog.path}/>
             } 
             {
               /* branding section */
               (blog.brandIdentity.state) 
               && <Branding 
                     header={blog.brandIdentity.header} 
                     path={blog.path} 
                     typography={blog.brandIdentity.typography}/>
             } 
             {
                /* product design section */
                (blog.designApproach.state) 
                && <Problems 
                        header={blog.designApproach.header} 
                        path={blog.path} 
                        objective={blog.designApproach.objective} 
                        problems={blog.designApproach.problems} 
                        details={blog.designApproach.details}/>
             } 
            <Cover
               projectName={blog.overview.title} 
               imgSrc={`../assets/${blog.path}/cover-2.png`} />  
               <div className='h-32'></div>
            <Recommendation
               projects = {ProjectsList.filter((item,i)=>i<3)}
               images = {[GoodFlows.src, GieseckeDevrient.src, IEACIITMadras.src]}/>
            <Engage/>
            <Footer/>
        </main>
    )
}

export default Blog