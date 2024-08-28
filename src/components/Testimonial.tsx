import Image from "next/image";
import Comma from "@/assets/double-quotes.svg"
interface Props{
    message:string;
    name:string;
    role:string;
    company:string;
}

const Testimonial = (props:Props) =>{
    const {message, name, role, company} = props
    return(
        <div className="flex flex-col gap-8 md:pl-24 pl-12 relative">
            <div className="absolute left-0">
                <Image
                    src={Comma.src}
                    className="md:w-12 w-8 opacity-25"
                    alt="comma"
                    width={100}
                    height={100}/>
            </div>
            <p className={`text-lg md:text-xl font-light italic text-gray-400`}>{message}</p>
            <div>
                <h4 className="text-sm font-semibold">{name}</h4>
                <h6 className="text-sm text-gray-500">{role}</h6>
                <h6 className="text-sm text-gray-500">{company}</h6>
            </div>
        </div>
    )
}

export default Testimonial