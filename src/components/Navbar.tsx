import { Search, MapPin, Mail, User, ShoppingBag } from "lucide-react";

const NAV_LINKS = ["High Jewelry", "Jewelry", "Accessories", "Watches", "Gifts"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-[18px] border-b border-white/10 bg-[#0a0a0a]">

      {/* LEFT — Search + Location */}
      <div className="flex items-center gap-5 flex-1">
        <button aria-label="Search" className="text-[#b0aaa3] hover:text-white transition-colors">
          <Search size={18} strokeWidth={1.4} />
        </button>
        <button aria-label="Find a boutique" className="text-[#b0aaa3] hover:text-white transition-colors">
          <MapPin size={18} strokeWidth={1.4} />
        </button>
      </div>

      {/* CENTER — Nav links */}
      <div className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          
            key={link}
            href="#"
            className="font-montserrat text-[10px] font-normal tracking-[0.18em] uppercase
              text-[#b0aaa3] hover:text-white transition-colors pb-[3px]
              relative after:absolute after:bottom-0 after:left-0
              after:h-[0.5px] after:w-0 after:bg-white
              hover:after:w-full after:transition-all after:duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      {/* RIGHT — Contact + Profile + Cart */}
      <div className="flex items-center gap-5 flex-1 justify-end">
        <button aria-label="Contact" className="text-[#b0aaa3] hover:text-white transition-colors">
          <Mail size={18} strokeWidth={1.4} />
        </button>
        <button aria-label="My account" className="text-[#b0aaa3] hover:text-white transition-colors">
          <User size={18} strokeWidth={1.4} />
        </button>
        <button aria-label="Shopping bag" className="text-[#b0aaa3] hover:text-white transition-colors">
          <ShoppingBag size={18} strokeWidth={1.4} />
        </button>
      </div>

    </nav>
  );
}