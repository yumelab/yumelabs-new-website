interface Props{ 
    label:String, 
}

const Tag = (props:Props) =>{
    const {label} = props
    return(
        <div className=" rounded-full border border-gray-200 px-6">
            <span className="text-sm uppercase"># {label}</span>
        </div>
    )
}

export default Tag