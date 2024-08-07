import Image from "next/image"; 

interface Props{
    id:string;
    date:string;
    title:string;
    category:string;
    cover:string;
}

const Insight = (props:Props) =>{
    const {title,category,cover,date,id} = props
    return(
        <div className="flex flex-col gap-4">
            <div className="w-full h-2/3 bg-purple-100 rounded-md">
                <Image
                    className="w-full h-full object-cover rounded-md"
                    alt={title}
                    src={cover}
                    width={400}
                    height={400}
                    />
            </div>
            <div className="flex gap-2 font-semibold text-xs">
                / <span>{id}</span> /
                <h4>{category}</h4> /
                <span>{date}</span>
            </div>
            <h2>{title}</h2>
        </div>
    )
}

export default Insight