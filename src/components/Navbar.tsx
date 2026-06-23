import { useState } from "react";
import { Search, MapPin, Mail, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";

interface SubItem {
  label: string;
  images: { src: string; caption: string }[];
}

interface NavItem {
  label: string;
  subItems: SubItem[];
}

const PH = [
  { src: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204724/download_22_v8s9p9.jpg", caption: "Collection I" },
  { src: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204722/Dos_visiones_de_la_Alta_Joyer%C3%ADa_que_dialogan_a_trav%C3%A9s_del_oro_blanco_y_una_selecci%C3%B3n_excepcional_de_diamantes___En_esta_pulsera_la_luz_majestuosa_de_Aura_y_la_armon%C3%ADa_estructural_de_Tesela_convergen_en_un_dise%C3%B1o_bk5hpp.jpg", caption: "Collection II" },
  { src: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204417/Sparkle_all_the_way_Diamond_Lace_Bracelet_paved_with_diamonds__Subtly_extravagant__jehqxh.jpg", caption: "Collection III" },
  { src: "https://res.cloudinary.com/dnnk7dymx/image/upload/v1782204417/Fashion_Inspire___Fashion_inspiration_Magazine_beauty_ideaas_luxury_trends_and_more_tjyygm.jpg", caption: "Collection IV" },
];

const NAV_DATA: NavItem[] = [
  { label: "High Jewelry", subItems: [{ label: "All Creations", images: PH }, { label: "Latest Collections", images: PH }, { label: "Iconic Aubrenne", images: PH }] },
  { label: "Jewelry", subItems: [{ label: "Collections", images: PH }, { label: "Bracelets", images: PH }, { label: "Rings", images: PH }, { label: "Necklaces", images: PH }, { label: "Earrings", images: PH }, { label: "Wedding Bands", images: PH }] },
  { label: "Watches", subItems: [{ label: "Collections", images: PH }, { label: "Women", images: PH }, { label: "Men", images: PH }, { label: "Bracelet", images: PH }, { label: "Leather", images: PH }] },
  { label: "Accessories", subItems: [{ label: "Collections", images: PH }, { label: "Cuff Rings", images: PH }, { label: "Belts", images: PH }, { label: "Key Rings", images: PH }] },
  { label: "Gifts", subItems: [{ label: "Love & Engagement", images: PH }, { label: "For Women", images: PH }, { label: "For Men", images: PH }] },
];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
    <div className="relative z-50">
      {/* ── Desktop navbar ── */}
      <div className="hidden lg:block" onMouseLeave={handleNavLeave}>
        <nav className="flex items-center justify-between px-12 py-[18px] border-b border-white/10 bg-[#0a0a0a]">
          <div className="flex items-center gap-5 flex-1">
            <button aria-label="Search" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
              <Search size={18} strokeWidth={1.4} />
            </button>
            <button aria-label="Find a boutique" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
              <MapPin size={18} strokeWidth={1.4} />
            </button>
          </div>

          <div className="flex items-center gap-8">
            {NAV_DATA.map((item) => (
              <span
                key={item.label}
                onMouseEnter={() => handleNavEnter(item.label)}
                className={`font-montserrat text-[10px] font-normal tracking-[0.18em] uppercase cursor-pointer pb-[3px] relative transition-all duration-200 select-none after:absolute after:bottom-0 after:left-0 after:h-px after:bg-white after:transition-all after:duration-300 ${activeNav === item.label ? "text-white text-[11px] after:w-full" : "text-[#b0aaa3] hover:text-white after:w-0 hover:after:w-full hover:text-[11px]"}`}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 flex-1 justify-end">
            <button aria-label="Contact" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer"><Mail size={18} strokeWidth={1.4} /></button>
            <button aria-label="My account" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer"><User size={18} strokeWidth={1.4} /></button>
            <button aria-label="Shopping bag" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer"><ShoppingBag size={18} strokeWidth={1.4} /></button>
          </div>
        </nav>

        {activeNav && currentNav && (
          <div
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-white/10 shadow-2xl"
            style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}
            onMouseEnter={() => setActiveNav(activeNav)}
          >
            <div className="flex min-h-[340px]">
              <div className="w-72 border-r border-white/10 py-10 px-10 flex flex-col gap-2 shrink-0">
                <p className="text-[8px] tracking-[0.3em] text-[#b0aaa3]/40 uppercase mb-4 font-montserrat">{activeNav}</p>
                {currentNav.subItems.map((sub) => (
                  <button
                    key={sub.label}
                    onMouseEnter={() => setActiveSub(sub.label)}
                    className={`text-left font-montserrat text-[10.5px] tracking-[0.14em] uppercase py-[7px] px-3 transition-all duration-150 rounded-sm ${(activeSub ?? defaultSub) === sub.label ? "text-white bg-white/5" : "text-[#b0aaa3] hover:text-white hover:bg-white/[0.03]"}`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 py-10 px-10 flex flex-col justify-center">
                <div className="flex justify-center gap-8 flex-wrap">
                  {displayImages.map((img, i) => (
                    <div key={i} className="group cursor-pointer w-[150px] xl:w-[170px] shrink-0">
                      <div className="overflow-hidden bg-[#141414] aspect-square">
                        <img src={img.src} alt={img.caption} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                      </div>
                      <p className="mt-2 text-[9px] tracking-[0.2em] uppercase text-[#b0aaa3] group-hover:text-white transition-colors duration-200 font-montserrat">{img.caption}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <a href="#" className="font-montserrat text-[9px] tracking-[0.22em] uppercase text-[#b0aaa3] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 pb-[2px]">
                    View all {activeSub ?? activeNav}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile/Tablet navbar ── */}
      <nav className="lg:hidden flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-[#0a0a0a]">
        {/* Brand name center */}
        <span
          style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "22px", fontWeight: 300, letterSpacing: "0.3em", color: "#e8e2d9", textTransform: "uppercase" }}
        >
          Aubrenne
        </span>

        <div className="flex items-center gap-4">
          <button aria-label="Shopping bag" className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
            <ShoppingBag size={18} strokeWidth={1.4} />
          </button>
          <button aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)} className="text-[#b0aaa3] hover:text-white transition-colors cursor-pointer">
            {mobileOpen ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-white/10 z-50 max-h-[80vh] overflow-y-auto">
          {/* Top icons */}
          <div className="flex items-center gap-6 px-6 py-5 border-b border-white/[0.06]">
            <button className="flex items-center gap-2 text-[#b0aaa3] hover:text-white transition-colors">
              <Search size={16} strokeWidth={1.4} />
              <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase">Search</span>
            </button>
            <button className="flex items-center gap-2 text-[#b0aaa3] hover:text-white transition-colors">
              <User size={16} strokeWidth={1.4} />
              <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase">Account</span>
            </button>
            <button className="flex items-center gap-2 text-[#b0aaa3] hover:text-white transition-colors">
              <MapPin size={16} strokeWidth={1.4} />
              <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase">Stores</span>
            </button>
          </div>

          {/* Nav items */}
          {NAV_DATA.map((item) => (
            <div key={item.label} className="border-b border-white/[0.06]">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-montserrat text-[11px] tracking-[0.2em] uppercase text-[#e8e2d9]">{item.label}</span>
                <ChevronDown
                  size={16}
                  strokeWidth={1.2}
                  className={`text-[#b0aaa3] transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                />
              </button>

              {mobileExpanded === item.label && (
                <div className="px-6 pb-5 flex flex-col gap-3">
                  {item.subItems.map((sub) => (
                    <a key={sub.label} href="#" className="font-montserrat text-[10px] tracking-[0.15em] uppercase text-[#b0aaa3] hover:text-white transition-colors py-1 pl-3 border-l border-white/10 hover:border-white/30">
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="px-6 py-5">
            <button className="flex items-center gap-2 text-[#b0aaa3] hover:text-white transition-colors">
              <Mail size={16} strokeWidth={1.4} />
              <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase">Contact</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
