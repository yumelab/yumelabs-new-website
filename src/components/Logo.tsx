import Link from "next/link";  
import Image from "next/image"; 
import { AppRoutes } from '@/constants/routes'; 
import BrandLogo from '@/assets/yume-logo.svg'
import BrandLogoWhite from '@/assets/yume-logo-white.svg' 

interface Props{
    size:'sm' | 'md' | 'lg';
    theme:'dark' | 'light';
    textlogo:boolean;
    iconlogo:boolean; 
}

const Logo = (props:Props) =>{
    const {size,textlogo,theme,iconlogo} = props 
    const textStyle = theme==='dark'?'text-white':'text-gray-800'
    const logoStyle = theme==='dark'?BrandLogoWhite:BrandLogo
    return(
        <Link
            className='flex gap-4 items-center max-w-fit' 
            href={AppRoutes.HOME_PAGE}>
            <Image 
                className={`h-8 max-w-fit  ${iconlogo?'hidden':'block'} `} 
                src={logoStyle}
                alt="yume labs logo" />
            <div className="flex flex-col gap-0">
                <h4 className={`uppercase tracking-widest text-lg font-semibold ${textStyle}`}>Yume Labs</h4> 
                <p className={`text-xs ${textStyle}`}>Dreams Delivered.</p>
            </div>
        </Link>
    )
}

export default Logo