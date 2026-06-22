export default function Hero() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center bg-[#0a0a0a] px-12 py-20 overflow-hidden min-h-[560px]">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Faint watermark letter */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] font-cormorant text-[260px] font-light text-white/[0.04] select-none pointer-events-none leading-none">
        A
      </span>

      {/* Content */}
      <p className="relative font-montserrat text-[8.5px] tracking-[0.35em] font-light text-[#b0aaa3]/55 uppercase mb-5">
        Maison de Haute Joaillerie
      </p>

      <h1 className="relative font-cormorant text-[72px] font-normal tracking-[0.55em] indent-[0.55em] text-[#e8e2d9] uppercase leading-none">
        Aubrenne
      </h1>

      <div className="relative w-10 h-[0.5px] bg-[#b0aaa3]/30 my-6" />

      <p className="relative font-cormorant text-lg font-light italic text-[#b0aaa3]/70 tracking-[0.08em]">
        Worn close. Felt forever.
      </p>
    </section>
  );
}