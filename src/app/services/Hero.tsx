import {Noto_SD} from '@/app/fonts'
const Hero = () => {
  return (
    <section className="grid md:grid-cols-3 gap-4 min-h-fit align-middle items-center md:py-32 py-16">
      <div className="flex flex-col gap-8 md:col-span-2">
        <h2 className="md:text-5xl text-3xl text-black md:leading-tight">
          <i className={`${Noto_SD.className} md:text-5xl  text-3xl font-normal`}>Experience is the New Moat.</i> <br />
          <i className={`${Noto_SD.className} md:text-5xl  text-3xl font-normal`}>Innovation is the New Marketing.</i>
        </h2>
        <p className="text-gray-400 md:text-base text-sm">
        High-potential global brands trust Yume Labs to drive customer conviction, investor interest, and media momentum by setting apart their AI, Embedded, Mobile, and Web products through deeper user research, product innovation, and experience design.
        </p>
      </div>
    </section>
  );
};
export default Hero;