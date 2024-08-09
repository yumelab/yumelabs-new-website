import Image from "next/image"
import defaultImage from '@/assets/17.png'
import Link from "next/link";
interface Props{
    image: string;
    name:string;
    details:string;
    url:string;
}

const Partner = (props:Props) => {
    const {image,name,details,url} = props
    return (
        <Link
            className="flex flex-col gap-8"
            href={url}
            target="_blank"> 
            <div className="w-full md:max-h-fit h-full bg-gray-100 md:p-24">
                <Image
                    src={image} 
                    className="w-full h-full rounded-full object-cover aspect-square"
                    alt={`partenr-${image}`}
                    width={200}
                    height={200}
                />
            </div>
            <div>
                <h2 className="text-xl font-medium whitespace-break-spaces text-black">{name}</h2>
                <h4 className="text-gray-500 text-sm">{details}</h4> 
            </div> 
        </Link>
    )
}

export default Partner
