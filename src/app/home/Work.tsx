
import Link from "next/link"; 
import Section from '@/components/Section';
import {ProjectsList} from "@/data/projects"; 
import Project from '@/components/Project' 
import ProjectSmall from '@/components/ProjectSmall'; 

import { AppRoutes } from '@/constants/routes';  

import {ProjectType} from '../../types'
import Button from "@/components/Button";
// import Recommendation from "./Recommendation";

import GoodFlows from '@/assets/work/good-flows.webp'
import TwentyTwoYards from '@/assets/work/twenty-two-yards.webp'
import IEACIITMadras from '@/assets/work/ieac-iit-madras.webp'
import GieseckeDevrient from '@/assets/work/giesecke- devrient.webp'
import BookMyPooja from '@/assets/work/book-my-pooja.webp'
import IndicOrigin from '@/assets/work/indic-origin.webp'


const Projects = () => {

  const CoverImages = [GoodFlows, GieseckeDevrient, BookMyPooja, TwentyTwoYards, IEACIITMadras, IndicOrigin]

  return (
    <section className="flex flex-col md:gap-16 md:py-32 py-16"> 
      <Section
          subtitle='our work'
          title='Simplifying the Next for Dreamers who do.'
          width="1/3"/>
      <div className="md:columns-2 gap-4 pt-16 md:pt-0">  
        {
            ProjectsList.filter((item,i)=>i<6).map((project:ProjectType,i)=>( 
              (i%2==0) ?  <Project
                            key={i}              
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            url={project.url}
                            img={CoverImages[i]?.src || ''}/>
                        : <ProjectSmall  
                            key={i}   
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            url={project.url}
                            img={CoverImages[i]?.src || ''} /> 
                          ))
        }
      </div> 
      {/* <Recommendation/> */}
      <div className='flex items-center justify-center'>
        <Link 
          href={AppRoutes.SERVICES}>
            <Button
                label="Explore Services"
                variant="text"
                style="outline"
                size="xl"
                type="button"
                texticon={true}
                />   
      </Link>   
      </div>
    </section>
  );
}

export default Projects
