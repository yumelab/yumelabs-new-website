import SubSection from "@/components/SubSection"
import Problem from "./Problem"
import defaultImage from '@/assets/bg-background.webp'
import Image from "next/image"

import {SectionType,ProblemType,ProblemDetails} from '@/types'

interface Props{
    section:SectionType;
    problems:Array<ProblemType>
    list:Array<ProblemDetails>
    path:string;
}

const Problems = (props:Props) =>{
    const  {section,problems,list,path} = props 

    return(
        <section className="flex flex-col gap-32">
            <SubSection  data={section}/>

            <div className="flex md:flex-row flex-col gap-8">
                {
                    problems.map((item,i)=>(
                        <div key={i} > 
                            <div className="w-full h-full rounded-t-lg overflow-hidden">
                                <Image
                                    className="w-full h-full object-cover"
                                    alt={item.detail}
                                    width={400}
                                    height={400}
                                    src={`../assets/${path}/problem-thumb-${i}.png` || defaultImage}/>
                            </div>
                            <h4 className="text-sm md:text-lg font-medium bg-gray-50 md:p-8 p-5 rounded-b-lg">{item.detail}</h4>
                        </div>
                    ))
                }
            </div>
            
            <div className="md:py-32 flex flex-col gap-32">
                {
                    list.map((item,i)=>(
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