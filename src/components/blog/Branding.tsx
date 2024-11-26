import SectionHeader from "@/components/blog/SectionHeader"
import SectionInfo from "@/components/blog/SectionInfo"
import Image from "next/image"
import {Typography} from '@/types'

interface Props{ 
    header:string;
    typography:Typography;
    path:string;
}
 
const Branding = (props:Props) =>{
    const  {path,header,typography} = props  
    const fw = false
    return(
        <section className="flex flex-col gap-16 md:py-32 py-24"> 
            <div className="flex flex-col gap-4">
                <SectionHeader title={header}/>
                <SectionInfo title={typography.title} description={typography.description}/>
            </div>

            <div className={`${fw?'md:w-full':'md:w-[70%] md:ml-[30%]'} w-full flex flex-col gap-16`}>
                <div className="max-h-fit w-full">
                    <Image
                    className="w-full"
                    width={400}
                    height={400} 
                    alt={`cover-imgage-${typography.title}`}
                    src={`../assets/${path}/typography.png`}
                    />
                </div>
                <p className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: typography.more }}/>
             </div>
        </section>
    )
}

export default Branding