import { useState } from "react";
import { Search, MapPin, Mail, User, ShoppingBag } from "lucide-react";





// ─── Types ───────────────────────────────────────────────────────────────────
interface SubItem {
  label: string;
  images: { src: string; caption: string }[];
}

interface NavItem {
  label: string;
  subItems: SubItem[];
}

// ─── Placeholder image grid (swap with real images later) ────────────────────
const PH = [
  { src:"https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204724/download_22_v8s9p9.jpg", caption: "Collection I" },
  { src: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204722/Dos_visiones_de_la_Alta_Joyer%C3%ADa_que_dialogan_a_trav%C3%A9s_del_oro_blanco_y_una_selecci%C3%B3n_excepcional_de_diamantes___En_esta_pulsera_la_luz_majestuosa_de_Aura_y_la_armon%C3%ADa_estructural_de_Tesela_convergen_en_un_dise%C3%B1o_bk5hpp.jpg", caption: "Collection II" },
  { src:" https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204417/Sparkle_all_the_way_Diamond_Lace_Bracelet_paved_with_diamonds__Subtly_extravagant__jehqxh.jpg", caption: "Collection III" },
  { src:"https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204417/Fashion_Inspire___Fashion_inspiration_Magazine_beauty_ideaas_luxury_trends_and_more_tjyygm.jpg", caption: "Collection IV" },
 ];

const NAV_DATA: NavItem[] = [
  {
    label: "High Jewelry",
    subItems: [
      { label: "All Creations", images: PH },
      { label: "Latest Collections", images: PH },
      { label: "Iconic Aubrenne", images: PH },
    ],
  },
  {
    label: "Jewelry",
    subItems: [
      { label: "Collections", images: PH },
      { label: "Bracelets", images: PH },
      { label: "Rings", images: PH },
      { label: "Necklaces", images: PH },
      { label: "Earrings", images: PH },
      { label: "Wedding Bands", images: PH },
    ],
  },
  {
    label: "Watches",
    subItems: [
      { label: "Collections", images: PH },
      { label: "Women", images: PH },
      { label: "Men", images: PH },
      { label: "Bracelet", images: PH },
      { label: "Leather", images: PH },
    ],
  },
  {
    label: "Accessories",
    subItems: [
      { label: "Collections", images: PH },
      { label: "Cuff Rings", images: PH },
      { label: "Belts", images: PH },
      { label: "Key Rings", images: PH },
    ],
  },
  {
    label: "Gifts",
    subItems: [
      { label: "Love & Engagement", images: PH },
      { label: "For Women", images: PH },
      { label: "For Men", images: PH },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  const currentNav = NAV_DATA.find((n) => n.label === activeNav);
  const currentSub = currentNav?.subItems.find((s) => s.label === activeSub);
  const displayImages = currentSub?.images ?? currentNav?.subItems[0]?.images ?? [];
  const defaultSub = currentNav?.subItems[0]?.label ?? null;

  const handleNavEnter = (label: string) => {
    setActiveNav(label);
    const first = NAV_DATA.find((n) => n.label === label)?.subItems[0]?.label ?? null;
    setActiveSub(first);
  };

  const handleNavLeave = () => {
    setActiveNav(null);
    setActiveSub(null);
  };

  return (
    <div className="relative z-50" onMouseLeave={handleNavLeave}>

      {/* ── Main navbar bar ── */}
      <nav className="flex items-center justify-between px-12 py-[18px] border-b border-white/10 bg-[#0a0a0a]">

        {/* LEFT */}
        <div className="flex items-center gap-5 flex-1">
          <button aria-label="Search" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
            <Search size={18} strokeWidth={1.4} />
          </button>
          <button aria-label="Find a boutique" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
            <MapPin size={18} strokeWidth={1.4} />
          </button>
        </div>

        {/* CENTER */}
        <div className="flex items-center gap-8">
          {NAV_DATA.map((item) => (
            <span
              key={item.label}
              onMouseEnter={() => handleNavEnter(item.label)}
              className={`
                font-montserrat text-[10px] font-normal tracking-[0.18em] uppercase cursor-pointer
                pb-[3px] relative transition-all duration-200 select-none
                after:absolute after:bottom-0 after:left-0 after:h-px after:bg-white after:transition-all after:duration-300
                ${activeNav === item.label
                  ? "text-white text-[11px] after:w-full"
                  : "text-[#b0aaa3] hover:text-white after:w-0 hover:after:w-full hover:text-[11px]"
                }
              `}
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 flex-1 justify-end">
          <button aria-label="Contact" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
            <Mail size={18} strokeWidth={1.4} />
          </button>
          <button aria-label="My account" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
            <User size={18} strokeWidth={1.4} />
          </button>
          <button aria-label="Shopping bag" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
            <ShoppingBag size={18} strokeWidth={1.4} />
          </button>
        </div>
      </nav>

      {/* ── Dropdown panel ── */}
      {activeNav && currentNav && (
        <div
          className="absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-white/10 shadow-2xl"
          style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}
          onMouseEnter={() => setActiveNav(activeNav)}
        >
          <div className="flex min-h-[340px]">

            {/* Left col — sub-items list */}
            <div className="w-72 border-r border-white/10 py-10 px-10 flex flex-col gap-2 shrink-0">
              <p className="text-[8px] tracking-[0.3em] text-[#b0aaa3]/40 uppercase mb-4 font-montserrat">
                {activeNav}
              </p>
              {currentNav.subItems.map((sub) => (
                <button
                  key={sub.label}
                  onMouseEnter={() => setActiveSub(sub.label)}
                  className={`
                    text-left font-montserrat text-[10.5px] tracking-[0.14em] uppercase py-[7px] px-3
                    transition-all duration-150 rounded-sm
                    ${(activeSub ?? defaultSub) === sub.label
                      ? "text-white bg-white/5"
                      : "text-[#b0aaa3] hover:text-white hover:bg-white/[0.03]"
                    }
                  `}
                >
                  {sub.label}
                </button>
              ))}
            </div>

            {/* Right col — image cards */}
            <div className="flex-1 py-10 px-10">
              <div className="grid grid-cols-4 gap-5">
                {displayImages.map((img, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="overflow-hidden bg-[#141414] aspect-square">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <p className="mt-2 text-[9px] tracking-[0.2em] uppercase text-[#b0aaa3] group-hover:text-white transition-colors duration-200 font-montserrat">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>

              {/* View all */}
<div className="mt-8 pt-6 border-t border-white/[0.06]">
  <a
    href="#"
    className="
      font-montserrat
      text-[9px]
      tracking-[0.22em]
      uppercase
      text-[#b0aaa3]
      hover:text-white
      transition-colors
      duration-200
      relative
      after:absolute
      after:bottom-0
      after:left-0
      after:h-px
      after:w-0
      after:bg-white
      hover:after:w-full
      after:transition-all
      after:duration-300
      pb-[2px]
    "
  >
    View all {activeSub ?? activeNav}
  </a>
</div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}