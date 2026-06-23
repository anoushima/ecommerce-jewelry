const CATEGORIES = [
  {
    id: 1,
    label: "Necklaces & Pendants",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782222756/Search_ljovkh.jpg",
  },
  {
    id: 2,
    label: "Bracelets",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782222755/Rhinestone_Decor_Bracelet_v616al.jpg",
  },
  {
    id: 3,
    label: "Earrings",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782222756/Adding_sparkle_to_your_everyday_look_with_the_elegance_of_a_round-cut_diamond_emxcka.webp",
  },
  {
    id: 4,
    label: "Rings",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782222753/Lily___Full_Cut_Round_marquise_Diamond_Band_mxpac2.jpg",
  },
  {
    id: 5,
    label: "Watches",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782222756/25_Elegant_Timepieces_for_Women_ldzxmy.jpg",
  },
];

export default function Categories() {
  return (
    <section className="relative z-20 w-full bg-[#0a0a0a] py-24 px-12">

      {/* Section heading */}
      <div className="text-center mb-16">
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "8px",
            letterSpacing: "0.35em",
            fontWeight: 300,
            color: "rgba(176,170,163,0.45)",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Explore
        </p>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "42px",
            fontWeight: 300,
            letterSpacing: "0.2em",
            color: "#e8e2d9",
            textTransform: "uppercase",
            textIndent: "0.2em",
          }}
        >
          Shop by Category
        </h2>
        <div
          style={{
            width: "36px",
            height: "0.5px",
            background: "rgba(176,170,163,0.3)",
            margin: "14px auto 0",
          }}
        />
      </div>

      {/* 5 equal cards — image top, label below */}
      <div className="grid grid-cols-5 gap-6 w-full max-w-7xl mx-auto">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="group cursor-pointer flex flex-col"
          >
            {/* Square image box */}
            <div
              className="w-full overflow-hidden"
              style={{ aspectRatio: "1 / 1", background: "#111" }}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.92)" }}
              />
            </div>

            {/* Label below image */}
            <div className="pt-4 pb-1 text-center">
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  fontWeight: 400,
                  color: "rgba(176,170,163,0.75)",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                }}
                className="group-hover:!text-white"
              >
                {cat.label}
              </p>

              {/* Underline that expands on hover */}
              <div className="flex justify-center mt-2">
                <div
                  className="h-px bg-[#b0aaa3]/30 group-hover:bg-white/60 transition-all duration-300"
                  style={{ width: "0px" }}
                />
                <div
                  className="h-px bg-white/0 group-hover:bg-white/40 transition-all duration-500"
                  style={{ width: "24px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom rule */}
      <div
        className="max-w-7xl mx-auto mt-16"
        style={{ height: "0.5px", background: "rgba(176,170,163,0.1)" }}
      />
    </section>
  );
}