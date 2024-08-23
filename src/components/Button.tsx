import * as Icon from '@geist-ui/icons';

interface Props{
    variant:'icon' | 'text';
    style:'outline'|'solid';
    size:'xs'| 'sm'|'md'|'lg'|'xl';
    label?:string;
    texticon?:boolean;
    iconName?: keyof typeof Icon;
    type: 'button' | 'submit';
    onClick?: () => void;
}

const Button = (props:Props) =>{
    const {variant,style,size,label,iconName,type,texticon, onClick} = props

    const base = 'rounded-full max-w-fit max-w-fit flex items-center gap-4'
    const solidStyle= 'bg-black hover:bg-gray-800 text-white'
    const outlineStyle = 'border border-gray-300 hover:border-transparent hover:bg-gray-200 text-black' 
    const padding = `${(variant=== 'icon')?'p-4':'px-8 md:py-4 py-3'}` 
    const IconComponent = (iconName!=undefined) ? Icon[iconName] : Icon.ArrowDownRight;
    return ( 
        <button 
            className={`group ${base} ${padding} text-${size} ${style === 'solid' ? solidStyle : outlineStyle} `} 
            type={type ? "submit" : "button"} onClick={onClick}>
            {(variant=== 'icon') ?  <IconComponent size={24}/>  : label}  {texticon? <Icon.ArrowRight size={24}/> : ''}
        </button> 
    )
}

export default Button