import { ArrowRight } from '@geist-ui/icons'

interface Props{
    variant:'icon' | 'text';
    style:'outline'|'solid';
    size:'xs'| 'sm'|'md'|'lg'|'xl';
    label?:string;
    texticon?:boolean;
    img?:string;
    type: 'button' | 'submit';
    onClick?: () => void;
}

const TempButton = (props:Props) =>{
    const {variant,style,size,label,img,texticon,type,onClick} = props

    const base = 'rounded-full max-w-fit max-w-fit'
    const solidStyle= 'bg-gray-900 hover:bg-gray-800 text-white'
    const outlineStyle = 'border  hover:border-transparent hover:bg-gray-200 text-black' 
    const padding = `${(variant=== 'icon')?'p-4':'px-8 py-4'}` 

    return ( 
        <button 
            className={`${base} ${padding} text-${size} ${style === 'solid' ? solidStyle : outlineStyle}`} 
            type={type ? "submit" : "button"} onClick={onClick}>
            {(variant=== 'icon') ? <ArrowRight  size={24}/> : label}
        </button> 
    )
}

export default TempButton