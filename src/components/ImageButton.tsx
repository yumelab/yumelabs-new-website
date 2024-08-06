'use client' 
import { ArrowRight,ArrowLeft } from '@geist-ui/icons'

interface ComponentProps{  
    direction:boolean;
    color:string;
    size: 'md' | 'sm' | 'xs';
    onClick?: () => void;
}

const ImageButton = (props:ComponentProps) =>{
    const {onClick, direction,color,size} = props;   

    return(
        <button className={`rounded-full p-4 border bg-gray-${color} hover:bg-gray-50`} onClick={onClick}>
            {(direction)?<ArrowLeft  size={24}/> : <ArrowRight  size={24}/>}
        </button> 
    )
}

export default ImageButton