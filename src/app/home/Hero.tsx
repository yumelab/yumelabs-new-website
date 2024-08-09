import {Noto_SD} from '@/app/fonts'
const Hero = () => {
  return (
    <section className="grid grid-cols-3 gap-4 min-h-fit align-middle items-center md:py-32 py-16">
      <div className="flex flex-col gap-8 col-span-2">
        <h2 className="md:text-5xl text-3xl text-black">
          Simplifying the Next.  <br /> 
          <span className="md:text-5xl text-3xl whitespace-nowrap">for <i className={`${Noto_SD.className} md:text-7xl  text-3xl font-normal`}>Dreamers who do.</i></span>
        </h2>
        <p className="text-gray-400 md:text-base text-sm">
          High-potential global brands trust Yume Labs for better customer
          advocacy, stronger investor trust, and higher media love.
        </p>
      </div>
    </section>
  );
};
export default Hero;