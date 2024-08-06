import Link from "next/link";  
import Image from "next/image"; 
import insta from '@/assets/social/instagram.svg'
import linked from '@/assets/social/linkedin.svg'

const Copyright = () =>{
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-8  md:items-end">
                <div className="flex flex-col gap-4">
                    <span className="uppercase text-xs">follow us on</span>
                    <div className="flex gap-8"> 
                        <Link
                            href='https://www.instagram.com/yumelabs/?igsh=eGlmZWxzeW5nbzBu'
                            target='_blank'>
                            <Image
                                className="w-4"
                                src={insta} 
                                alt='instagram logo'/>
                        </Link>
                        <Link href='https://www.linkedin.com/company/yumelabs/' target='_blank'>
                            <Image
                                className="w-4"
                                src={linked} 
                                alt='linkedin logo'/>
                        </Link>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-8 text-xs">
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span> 
                    <span className="text-xs text-white">©2024 Indic Origins Private Limited dba Yume Labs®. All Rights Reserved.</span>
                </div>
            </div>
        </>
    )
}

export default Copyright;