import Image from "next/image";
import Link from "next/link";
import LogoMark from "@/assets/yume-logo-white.svg";

const Logo = ({ className = "" }: { className?: string }) => (
  <Link href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Yume Labs home">
    <Image src={LogoMark} alt="" className="h-7 w-auto" priority />
    <span className="text-base font-semibold tracking-tight">Yume Labs</span>
  </Link>
);

export default Logo;
