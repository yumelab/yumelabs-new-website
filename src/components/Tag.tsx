interface Props{ 
    label:String, 
}

const Tag = (props:Props) =>{
    const {label} = props
    return(
        <div className=" rounded-full border border-gray-200 px-4 py-1">
            <span className="text-xs lowercase text-black flex items-center whitespace-nowrap"># {label}</span>
        </div>
    )
}

export default Tag