
import Link from "next/link"; 
import Section from '@/components/Section';
import {ProjectsList} from "@/data/projects";
import DummyImg from '@/assets/14.png'
import Project from '@/components/Project' 
import ProjectSmall from '@/components/ProjectSmall';
import Button from '@/components/Button';

import { AppRoutes } from '@/constants/routes';  

import {ProjectType} from '../../types'

const Projects = () => {
  return (
    <section className="flex flex-col md:gap-16 md:py-32 py-16"> 
      <Section
          subtitle='our work'
          title='Discover brand innovation stories. Reimagine the Next for yours.'/>
      <div className="md:columns-2 gap-4 pt-16 md:pt-0">
        {
            ProjectsList.filter((item,i) => i<4 ).map((project:ProjectType,i)=>(
                <div key={i} >  
                  {
                    (0<i && i<3) 
                    ?<Project  
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      img={DummyImg.src} />
                  : <ProjectSmall
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    img={DummyImg.src} />
                  }
                </div>
            ))
        }
      </div>
      <div className='md:flex gap-2 overflow-x-hidden hidden'>
        {
            ProjectsList.filter((item,i) => i<3 ).map((project:ProjectType,i)=>(
                <div key={i} className='w-1/3'>
                    <Project 
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        img={DummyImg.src}/>
                </div>
            ))
        }
      </div>
      <div className='flex items-center md:py-16 justify-center'>
        <Link 
          href={AppRoutes.SERVICES}>
          <Button
              style={false} 
              label='EXPLORE SERVICES'
              size='md'
              type='button'
          />
      </Link>   
      </div>
    </section>
  );
}

export default Projects
