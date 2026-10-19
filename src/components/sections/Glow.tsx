/** Soft blue/amber light beams used behind hero sections. */
const Glow = ({ className = "" }: { className?: string }) => (
  <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
    <div className="absolute -right-[10%] -top-[30%] h-[140%] w-[45%] rotate-[28deg] bg-gradient-to-b from-sky-500/0 via-sky-500/35 to-sky-500/0 blur-3xl" />
    <div className="absolute right-[18%] -top-[20%] h-[120%] w-[18%] rotate-[28deg] bg-gradient-to-b from-amber-400/0 via-amber-400/40 to-amber-400/0 blur-3xl" />
    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
  </div>
);

export default Glow;
