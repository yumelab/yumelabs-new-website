interface Props{
    title:string;
    description:string; 
}

const Paragraph = (props:Props) =>{
    const {title,description} = props
    return(
        <section>
            <h4>{title}</h4>
            <p>{description}</p> 
        </section>
    )
}

export default Paragraph