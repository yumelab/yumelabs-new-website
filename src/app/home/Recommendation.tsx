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
        <div className='md:grid md:grid-cols-3 gap-2 hidden'>
            {
                projects.map((project:ProjectType,i)=>( 
                    <Project  
                        key={i}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        img={images[i] || defaultImage.src}
                        url={project.url}
                        width="100%"/>
                ))
            }
        </div>
    )
}

export default Recommendation