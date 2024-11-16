import Project from '@/components/Project' 
import ProjectSmall from '@/components/ProjectSmall'; 

import { AppRoutes } from '@/constants/routes';  

import {ProjectType} from '../../types' 

import {ProjectsList} from "@/data/projects"; 
import GoodFlows from '@/assets/work/good-flows.webp'
import TwentyTwoYards from '@/assets/work/twenty-two-yards.webp'
import IEACIITMadras from '@/assets/work/ieac-iit-madras.webp'
import GieseckeDevrient from '@/assets/work/giesecke- devrient.webp'
import BookMyPooja from '@/assets/work/book-my-pooja.webp'
import IndicOrigin from '@/assets/work/indic-origin.webp'
import DoItZero from '@/assets/work/do-it-zero.webp'
import Maiven from '@/assets/work/maiven.webp'
import Approlabs from '@/assets/work/approlabs.webp' 
import Link from 'next/link';

const Blogs = () =>{ 
    const CoverImages = [GoodFlows, GieseckeDevrient, BookMyPooja, TwentyTwoYards, IEACIITMadras, IndicOrigin, DoItZero, Maiven, Approlabs]
    return(
        <main className="container md:max-w-screen-xl flex flex-col mx-auto px-8">
            <div className="md:columns-2 gap-4 pt-16 md:pt-0">  
                {
                    ProjectsList.map((project:ProjectType,i)=>( 
                    (i%2==0) ?  <Link key={i} href={project.url}>
                                    <Project           
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        img={CoverImages[i]?.src || ''}/>
                                </Link>
                                : <Link key={i} href={project.url}>
                                    <ProjectSmall  
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        img={CoverImages[i]?.src || ''} /> 
                                    </Link>
                                ))
                }
            </div> 
        </main>
    )
}

export default Blogs