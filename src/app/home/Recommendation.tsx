import Project from '@/components/Project'
import {ProjectType} from '@/types' 

import defaultImage from '@/assets/bg-background.webp' 

interface Props{
    projects: ProjectType[];
    images:Array<string>;
}

const Recommendation = (props:Props) => {
    const {projects,images} = props 
     
    return(
        <div className='md:flex gap-2 hidden'>
            {
                projects.map((project:ProjectType,i)=>(
                    <div key={i} className='w-1/3'>
                        <Project 
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            img={images[i] || defaultImage.src}
                            url={project.url}
                            width="100%"/>
                    </div>
                ))
            }
        </div>
    )
}

export default Recommendation