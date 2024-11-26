import Image from "next/image"
import defaultImage from '@/assets/bg-background.webp'

interface Props{
    detail:string; 
    imgSrc:string;
}

const ProblemCard = (props:Props) =>{
    const {detail,imgSrc} = props
    return(
        <div className="flex flex-col"> 
            <div className="w-full h-full rounded-t-lg overflow-hidden">
                <Image
                    className="w-full h-full object-cover"
                    alt={detail}
                    width={400}
                    height={400}
                    src={imgSrc || defaultImage}/>
            </div>
            <h4 className="text-sm md:text-lg font-medium bg-gray-50 md:p-8 p-5 rounded-b-lg">{detail}</h4>
        </div>
    )
}
export default ProblemCard