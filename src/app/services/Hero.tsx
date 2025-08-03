const Hero = () => {
  return (
       <section className="flex align-middle items-center py-32">
            <div className="flex flex-col gap-8 md:w-[70%]">
                <h1 className="md:text-7xl text-5xl font-medium text-gray-800">UX for <span className="bg-gradient-to-r from-red-100 to-blue-600 bg-clip-text text-transparent">AI</span><sup className="md:text-3xl text-xl align-super text-purple-300">✦</sup><br /> And Everything Else.</h1>
                <p className="md:text-2xl md:leading-snug text-xl leading-snug text-gray-500">Our work sits at the intersection of product innovation, experiences design, and AI experiences.</p>
            </div>
        </section>
  );
};
export default Hero;