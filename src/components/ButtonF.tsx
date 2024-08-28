import * as Icon from '@geist-ui/icons';

interface Props{
    theme:'dark'|'light';
    style:'solid'|'outline';
    label?:string;
    iconName?: keyof typeof Icon;
    size:'sm'|'md'|'lg';
    type: 'button' | 'submit';
    widthfixed?:boolean;
    onClick?:()=>void;
}

const ButtonF = (props:Props) =>{
    const {theme,style,size,label,iconName,type,widthfixed, onClick}= props

    const baseStyles = `${widthfixed?'w-44':'max-w-fit'} font-medium rounded-full transform transition duration-500`

    const modeStyles = theme === 'dark' ? 'dark:bg-gray-800 dark:text-white' : 'bg-gray-200 text-black';

    const variantStyles = {
        solid: 'bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600',
        outline: 'border border-gray-200 text-gray-600 hover:bg-gray-300 hover:text-white dark:border-gray-200 dark:text-gray-300 dark:hover:bg-gray-50 dark:hover:text-white'
    } 

    const sizeStyles = {
        sm:'px-8 py-4 text-sm',
        md:'px-12 py-4',
        lg:'px-16 py-6 text-lg'
    }

    // Combine all classes
    const buttonClasses = [
        baseStyles,
        modeStyles,
        sizeStyles[size],
        variantStyles[style],
    ].join(' ');

    return(
        <button className={`${buttonClasses}`} type={type ? "submit" : "button"} onClick={onClick}>
            {label}
        </button>
    )
}

export default ButtonF