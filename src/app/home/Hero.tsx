import Image from 'next/image';
import HeroIcons from '@/assets/hero-icons.svg'
const Hero = () => {
  return ( 
    <section className="flex align-middle items-center md:py-32 py-16">
      <div className="w-full h-36 relative">
        <div className="md:text-9xl text-3xl text-black md:leading-tight absolute left-1/2 -translate-x-1/2 w-screen whitespace-nowrap animate-infinite-scroll-fast">
          <span className="md:text-9xl text-3xl font-medium bg-gradient-to-r from-sky-950 to-blue-800 bg-clip-text text-transparent">Experience</span> is the New Moat. <span className="md:text-9xl  text-3xl font-medium bg-gradient-to-r from-sky-950 to-blue-800 bg-clip-text text-transparent">Innovation </span> <Image className='inline' src={HeroIcons} alt="hero-icon" width={200} height={24}/> is the New Marketing.
        </div> 
        <div className="md:text-9xl text-3xl text-black md:leading-tight absolute left-1/2 -translate-x-1/2 w-screen whitespace-nowrap animate-infinite-scroll-fast">
          <span className="md:text-9xl text-3xl font-medium bg-gradient-to-r from-sky-950 to-blue-800 bg-clip-text text-transparent">Experience</span> is the New Moat. <span className="md:text-9xl  text-3xl font-medium bg-gradient-to-r from-sky-950 to-blue-800 bg-clip-text text-transparent">Innovation </span> <Image className='inline' src={HeroIcons} alt="hero-icon" width={200} height={24}/> is the New Marketing.
        </div> 
      </div>
    </section>
  );
};

export default Hero;