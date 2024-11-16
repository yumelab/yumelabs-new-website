interface Props{ 
    label:String, 
    size?:'xs'|'sm'|'md'|'lg'|'xl';
}

const Tag = (props:Props) =>{
    const {label,size='xs'} = props
    return(
        <div className=" rounded-full border border-gray-200 px-4 py-2">
            <span className={`text-${size} lowercase text-black flex items-center whitespace-nowrap`}># {label}</span>
        </div>
    )
}

export default Tag