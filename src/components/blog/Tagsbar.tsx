import Tag from "@/components/Tag";

interface Props{
    tags:Array<string>;
}

const Tagsbar = (props:Props) =>{
    const {tags} = props
    return(
        <section className="flex gap-2">
            {
                tags.map((tag,i)=>(
                    <Tag key={i} label={tag}/>
                ))
            }
        </section>
    )
}

export default Tagsbar