import Problem from "./Problem"  

import SectionHeader from "@/components/blog/SectionHeader"
import SectionInfo from "@/components/blog/SectionInfo"

import {ProblemsContent,ProblemDetails,DefaultType} from '@/types'
import ProblemCard from "./ProblemCard"

interface Props{ 
    header:string; 
    path:string;
    objective:DefaultType;
    problems:ProblemsContent;
    details:Array<ProblemDetails>; 
}

const Problems = (props:Props) =>{
    const  {header,path,objective,problems,details} = props  

    return(
        <section className="flex flex-col gap-32">
             <div className="flex flex-col gap-4">
                <SectionHeader title={header}/>
                <SectionInfo title={objective.title} description={objective.description}/>
            </div>
            {/* <div className="w-full h-full">
                <Image
                    alt="image"
                    className="w-full h-full"
                    width={500}
                    height={500}
                    src={imgSrc}/>
            </div>  */}
            
            {/* problems list */} 
            <div className="flex flex-col gap-24">
                <SectionInfo title={problems.title} description={problems.description}/>
                <div className="flex md:flex-row flex-col gap-8">
                    {
                        problems.list.map((item,i)=>(
                            <ProblemCard 
                                key={i} 
                                imgSrc={`../assets/${path}/problem-thumb-${i}.png`} 
                                detail={item.detail}/> 
                        ))
                    }
                </div>
            </div>

            {/* problems details */}
            <div className="md:pb-32 flex flex-col gap-32">
                {
                    details.map((item,i)=>(
                        <Problem 
                            key={i} 
                            id={i+1} 
                            imgSrc={`../assets/${path}/problem-${i}.png`}
                            title={item.title}
                            description={item.description}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Problems