import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const COLLECTIONS = [
  {
    id: 1,
    title: "Lumière Noire",
    subtitle: "High Jewelry · 2026",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782214181/75013150041263225_lorxbe.webp",
  },
  {
    id: 2,
    title: "Éclat Éternel",
    subtitle: "Jewelry · Ring Collection",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782214180/Louis_Vuitton_presents_its_largest_high_jewellery_collection_to_date_cckmik.webp",
  },
  {
    id: 3,
    title: "Ombre Dorée",
    subtitle: "Watches · Women",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782216088/BVLGARI_B01_campaign_on_Behance_l1ijvm.webp",
  },
  {
    id: 4,
    title: "Soir de Soie",
    subtitle: "Accessories · Cuff",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782213705/All_Posts_Instagram_hlggic.webp",
  },
  {
    id: 5,
    title: "Nuit Blanche",
    subtitle: "High Jewelry · Necklaces",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782213706/Inspired_by_nature_s_light_wjiy2n.webp",
  },
  {
    id: 6,
    title: "Velours Noir",
    subtitle: "Jewelry · Bracelets",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782216505/Elegance_is_not_being_noticed_it_s_about_being_remembered____You_are_one_click_away_from_owning_this__Link_in_bio_now_____labgrowndiamonds_gloradiamonds_sustainability_sustainablefashion_sustainableliv_mtfhpt.jpg",
  },
  {
    id: 7,
    title: "Rose de Minuit",
    subtitle: "Gifts · For Her",
    image: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782216505/AWAKENED_HANDS_AWAKENED_MINDS_bzmvpi.jpg",
  },
];

const sizeConfig: Record<number, { width: string; height: string; opacity: number; zIndex: number; left: string; transform: string }> = {
  [-2]: { width: "9%",  height: "55%", opacity: 0.35, zIndex: 1, left: "0%",   transform: "translateX(0%)" },
  [-1]: { width: "18%", height: "72%", opacity: 0.65, zIndex: 2, left: "9%",   transform: "translateX(0%)" },
  [0]:  { width: "34%", height: "88%", opacity: 1,    zIndex: 3, left: "50%",  transform: "translateX(-50%)" },
  [1]:  { width: "18%", height: "72%", opacity: 0.65, zIndex: 2, left: "73%",  transform: "translateX(0%)" },
  [2]:  { width: "9%",  height: "55%", opacity: 0.35, zIndex: 1, left: "91%",  transform: "translateX(0%)" },
};

export default function LatestCollections() {
  const [centerIndex, setCenterIndex] = useState(2);

  const prev = () => setCenterIndex((i) => (i - 1 + COLLECTIONS.length) % COLLECTIONS.length);
  const next = () => setCenterIndex((i) => (i + 1) % COLLECTIONS.length);

  const getItem = (offset: number) =>
    COLLECTIONS[(centerIndex + offset + COLLECTIONS.length) % COLLECTIONS.length];

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden py-20">

      {/* Heading */}
      <div className="text-center mb-14 z-10">
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.35em", fontWeight: 300, color: "rgba(176,170,163,0.45)", textTransform: "uppercase", marginBottom: "12px" }}>
          Aubrenne · 2026
        </p>
        <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "42px", fontWeight: 300, letterSpacing: "0.2em", color: "#e8e2d9", textTransform: "uppercase", textIndent: "0.2em" }}>
          Latest Collections
        </h2>
        <div style={{ width: "36px", height: "0.5px", background: "rgba(176,170,163,0.3)", margin: "14px auto 0" }} />
      </div>

      {/* Carousel */}
      <div className="relative w-full flex items-center justify-center" style={{ height: "520px" }}>

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-6 z-20 flex items-center justify-center w-10 h-10 text-[#b0aaa3] hover:text-white transition-colors duration-200"
          aria-label="Previous"
        >
          <ChevronLeft size={28} strokeWidth={1} />
        </button>

        {/* Cards */}
        <div className="relative w-full h-full flex items-center">
          {([-2, -1, 0, 1, 2] as const).map((offset) => {
            const item = getItem(offset);
            const cfg = sizeConfig[offset];
            const isCenter = offset === 0;

            return (
              <div
                key={`${offset}-${item.id}`}
                onClick={() => !isCenter && (offset < 0 ? prev() : next())}
                style={{
                  position: "absolute",
                  width: cfg.width,
                  height: cfg.height,
                  opacity: cfg.opacity,
                  zIndex: cfg.zIndex,
                  left: cfg.left,
                  transform: cfg.transform,
                  cursor: isCenter ? "default" : "pointer",
                  transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div className="w-full h-full overflow-hidden relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: isCenter ? "none" : "brightness(0.6)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%)" }} />

                  {/* Caption — center card only */}
                  {isCenter && (
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.25em", fontWeight: 300, color: "rgba(176,170,163,0.7)", textTransform: "uppercase", marginBottom: "6px" }}>
                        {item.subtitle}
                      </p>
                      <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "28px", fontWeight: 300, letterSpacing: "0.1em", color: "#e8e2d9" }}>
                        {item.title}
                      </h3>
                      <div style={{ marginTop: "14px" }}>
                        <a href="#" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8.5px", letterSpacing: "0.22em", fontWeight: 300, color: "rgba(176,170,163,0.8)", textTransform: "uppercase", textDecoration: "none", borderBottom: "0.5px solid rgba(176,170,163,0.4)", paddingBottom: "2px" }}>
                          Discover
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-6 z-20 flex items-center justify-center w-10 h-10 text-[#b0aaa3] hover:text-white transition-colors duration-200"
          aria-label="Next"
        >
          <ChevronRight size={28} strokeWidth={1} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2 mt-10 z-10">
        {COLLECTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCenterIndex(i)}
            style={{
              width: i === centerIndex ? "24px" : "4px",
              height: "1px",
              background: i === centerIndex ? "rgba(232,226,217,0.9)" : "rgba(176,170,163,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

    </section>
  );
}