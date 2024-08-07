import Image from "next/image"

interface Props{
    title:string
}

const Highlight = (props:Props) =>{
    const {title} = props
    return (
        <div className="relative py-32 px-16">
            <div className="absolute left-0 top-0 w-full h-full -z-10 rounded-md">
                <Image
                    className="object-cover w-full h-full rounded-md"
                    alt="highlighted insights"
                    src="https://images.unsplash.com/photo-1489769002049-ccd828976a6c?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={400}
                    height={400}
                />
            </div>
            <h2 className="text-2xl w-1/3 font-semibold">{title}</h2>
        </div>
    )
}

export default Highlight