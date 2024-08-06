
// import ShowReel from '@/assets/reels.mp4'

const Reels = () => {
  return (
    <section className="w-full md:h-screen h-half relative">
      <div className="absolute w-screen h-full left-1/2 -translate-x-1/2">
        <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="./reels.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Reels; 