'use client' 
import { ArrowRight } from '@geist-ui/icons'

interface ComponentProps{
    style?:boolean;
    color?:string;
    label: string;
    type: 'button' | 'submit';
    size: 'md' | 'sm' | 'xs';
    onClick?: () => void;
}

const Button = (props:ComponentProps) =>{
    const { label, type, onClick, size,style,color} = props; 

    const baseClass = `max-w-fit flex items-center justify-center gap-2 text-${size} tracking-widest whitespace-nowrap px-8 py-4 cursor-pointer font-medium uppercase transition-all ease-in-out delay-150 rounded-full`;
    const solidClass = `bg-black text-white hover:bg-gray-800`;
    const borderClass = `border-${color} border-2 text-${color} hover:bg-black hover:text-white hover:border-transparent`;

    return(
        (style)
        ? 
        <button className={`${baseClass} ${solidClass}`} type={type ? "submit" : "button"} onClick={onClick}>
            <span>{label}</span> <ArrowRight  size={24}/>
        </button>
        :
        <button className={`${baseClass} ${borderClass}`} type={type ? "submit" : "button"} onClick={onClick}>
            <span>{label}</span> <ArrowRight  size={24}/>
        </button>
    )
}

export default Button