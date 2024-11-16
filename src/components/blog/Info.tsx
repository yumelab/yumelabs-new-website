import { BlogInfo } from "@/types";

interface Props{
    items:Array<BlogInfo>;
}

const Info = (props:Props) =>{
    const {items} = props
    return(
        <section className="flex flex-col gap-8 md:flex-row md:justify-between md:py-16 py-8">
            {
                items.map((item,i)=>(
                    <div key={i} className="flex flex-col">
                        <span className="md:text-sm text-xs text-gray-400">{item.label}</span>
                        <h6 className="md:text-xl font-medium">{item.value}</h6>
                    </div>
                ))
            }
        </section>
    )
}

export default Info