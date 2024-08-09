import Image from "next/image";

interface Props{
    picture:string;
    name:string;
    role:string;
    social:{ [key: string]: string };
}

const Founder = (props:Props) => {
    const {picture, name,role,social} = props
    return(
        <div className="flex flex-col gap-8">
            <div className="w-full h-fit bg-red-100">
                <Image
                    className="w-full h-full object-cover md:aspect-auto aspect-square"
                    src={picture}
                    alt={picture}
                    width={400}
                    height={400}
                />
            </div>
            <div className="person-details">
                <h2 className="text-xl font-medium whitespace-break-spaces text-black">{name}</h2>
                <h4 className="text-gray-500 text-sm">{role}</h4>
            </div>
        </div>
    )
}
export default Founder