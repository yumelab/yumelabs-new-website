import Project from '@/components/Project'
import {ProjectType} from '@/types'

import {ProjectsList} from "@/data/projects"; 

import defaultImage from '@/assets/bg-background.webp'
 
import DoItZero from '@/assets/work/do-it-zero.webp'
import Maiven from '@/assets/work/maiven.webp'
import Approlabs from '@/assets/work/approlabs.webp'

const Recommendation = () => {
    
    const CoverImages = [DoItZero, Maiven, Approlabs]
     
    return(
        <div className='md:flex gap-2 hidden'>
            {
                ProjectsList.filter((item,i)=>i>5).map((project:ProjectType,i)=>(
                    <div key={i} className='w-1/3'>
                        <Project 
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            img={CoverImages[i].src || defaultImage.src}
                            width="100%"/>
                    </div>
                ))
            }
        </div>
    )
}

export default Recommendation