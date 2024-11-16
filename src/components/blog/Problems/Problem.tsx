import Image from "next/image";

interface Props{
    id:number;
    title:string;
    description:string;
    imgSrc:string;
}


const Problem = (props:Props)=>{
    const {id,title,description,imgSrc} = props
     return(
        <section className="flex flex-col gap-16">
            <div className="flex items-center gap-4">
                <span className="text-4xl font-light text-gray-700">/0{id}</span>
                <div className="h-[1px] bg-gray-200 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 md:w-1/2">
                <h3 className="md:text-4xl text-2xl font-medium md:leading-tight text-black">{title}</h3>  
                <p className="text-gray-700 text-sm md:text-base">{description}</p> 
            </div>
            <div className="w-full h-full">
                <Image
                    alt="image"
                    className="w-full h-full"
                    width={500}
                    height={500}
                    src={imgSrc}/>
            </div>
        </section>
    )
}

export default Problem      