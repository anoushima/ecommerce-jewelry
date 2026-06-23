import bracletImg from"../assets/image_b7a6629f.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <img
        src={bracletImg}
        alt="Luxury Bracelet"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Ambient Glow */}
      <div
        className="absolute left-0 top-0 h-full w-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Watermark A */}
      <span
        className="absolute left-20 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none text-white/[0.04]"
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: "260px",
          fontWeight: 300,
        }}
      >
        A
      </span>

      {/* Content */}
      <div className="relative z-10 flex min-h-[85vh] items-center px-12 md:px-20">
        <div>
          <p
            className="text-[#b0aaa3] uppercase mb-5"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "8.5px",
              letterSpacing: "0.35em",
              fontWeight: 300,
              opacity: 0.55,
            }}
          >
            Maison de Haute Joaillerie
          </p>

          <h1
            className="text-[#e8e2d9] uppercase leading-none"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "72px",
              fontWeight: 400,
              letterSpacing: "0.55em",
              textIndent: "0.55em",
            }}
          >
            Aubrenne
          </h1>

          <div
            className="w-10 my-6 bg-[#b0aaa3]/30"
            style={{ height: "0.5px" }}
          />

          <p
            className="text-[#b0aaa3]/70 italic"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "18px",
              fontWeight: 300,
              letterSpacing: "0.08em",
            }}
          >
            Worn close. Felt forever.
          </p>
        </div>
      </div>
    </section>
  );
}