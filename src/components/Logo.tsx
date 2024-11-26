import Link from "next/link";  
import Image from "next/image"; 
import { AppRoutes } from '@/constants/routes'; 
import BrandLogo from '@/assets/yume-logo.svg'
import BrandLogoWhite from '@/assets/yume-logo-white.svg' 

interface Props{
    size:'sm' | 'md' | 'lg';
    textlogo:boolean;
    iconlogo:boolean;
    logostyle:boolean;
}

const Logo = (props:Props) =>{
    const {size,textlogo,iconlogo,logostyle} = props
    return(
        <Link
            className='flex gap-4 items-center max-w-fit' 
            href={AppRoutes.HOME_PAGE}>
            <Image 
                className={`h-7 max-w-fit  ${iconlogo?'hidden':'block'} `} 
                src={logostyle?BrandLogoWhite:BrandLogo}
                alt="yume labs logo" />
            <h4 className="uppercase font-medium text-black tracking-widest">Yume Labs</h4>
        </Link>
    )
}

export default Logo