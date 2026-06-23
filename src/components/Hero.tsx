export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#0b0a09]">

      {/* Background Image 1 */}
      <img
        src="https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204367/bracelet1_htciiu.png"
        alt=""
        aria-hidden="true"
       className="absolute inset-0 w-full h-full object-cover object-[80%_center] sm:object-[70%_center] animate-bgFadeOne pointer-events-none"
      />

      {/* Background Image 2 */}
      <img
        src="https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204413/bracelet2_gl0wgz.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[80%_center] sm:object-[70%_center] animate-bgFadeTwo pointer-events-none"
      />

      {/* Overlay — stronger on mobile for text legibility */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/35 md:bg-black/25" />

      {/* Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[85vh] items-center px-12 md:px-20">
        <div>
          <p
            className="mb-5 uppercase text-[#b0aaa3]"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8.5px", letterSpacing: "0.35em", fontWeight: 300, opacity: 0.55 }}
          >
            Maison de Haute Joaillerie
          </p>

          <h1
            className="uppercase leading-none text-[#e8e2d9]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(38px, 8vw, 72px)",
              fontWeight: 400,
              letterSpacing: "0.55em",
              textIndent: "0.55em",
            }}
          >
            Aubrenne
          </h1>

          <div className="my-6 w-10 bg-[#b0aaa3]/30" style={{ height: "0.5px" }} />

          <p
            className="italic text-[#b0aaa3]/70"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "18px", fontWeight: 300, letterSpacing: "0.08em" }}
          >
            Worn close. Felt forever.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center text-[#b0aaa3] text-xs">
        <button className="px-8 hover:text-white transition-colors duration-500">DISCOVER</button>
        <span className="h-4 w-px bg-[#b0aaa3]/30" />
        <button className="px-8 hover:text-white transition-colors duration-500">TIMELESS</button>
        <span className="h-4 w-px bg-[#b0aaa3]/30" />
        <button className="px-8 hover:text-white transition-colors duration-500">BRILLIANCE</button>
      </div>
    </section>
  );
}