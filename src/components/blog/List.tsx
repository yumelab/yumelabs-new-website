interface Props{
    title:string;
    description:string;
    list:Array<string>;
}

const List = (props:Props) =>{
    const {title,description,list} = props
    return(
        <section>
            <h4>{title}</h4>
            <p>{description}</p>
            <ul>
                {
                    list.map((item,i)=>(
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
        </section>
    )
}

export default List