const FOOTER_LINKS = [
  { heading: "Contact Hub", links: ["Store Locator", "Contact & Appointments", "Book an Appointment"] },
  { heading: "Customer Care", links: ["Services", "FAQ", "Shipping & Returns", "Gift Wrapping"] },
  { heading: "About Aubrenne", links: ["Brand Story", "Sustainability", "People & Careers", "Accessibility", "Press"] },
  { heading: "Privacy & Legal", links: ["Cookie Settings", "Privacy Center", "Terms of Use", "Sitemap"] },
];

const SOCIAL = [
  { label: "Instagram", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: "YouTube", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
  { label: "Facebook", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
];

const linkStyle = { fontFamily: "Montserrat, sans-serif", fontSize: "10px", lineHeight: "1.9", fontWeight: 300, letterSpacing: "0.05em", color: "rgba(232,226,217,0.65)", textDecoration: "none", cursor: "pointer", transition: "color 0.2s ease", display: "block" };
const headingStyle = { fontFamily: "Montserrat, sans-serif", fontSize: "8px", fontWeight: 400, letterSpacing: "0.30em", color: "rgba(232,226,217,0.65)", textTransform: "uppercase" as const, marginBottom: "20px" };

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-[#0a0a0a] border-t border-white/[0.06]">

      {/* Newsletter */}
      <div className="text-center py-16 sm:py-20 md:py-24 px-6 border-b border-white/[0.04]">
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.35em", color: "rgba(176,170,163,0.45)", textTransform: "uppercase", marginBottom: "14px" }}>
          Stay Connected
        </p>
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 300, color: "#e8e2d9", marginBottom: "14px" }}>
          Enter the World of Aubrenne
        </h3>
        <p style={{ color: "rgba(176,170,163,0.7)", maxWidth: "520px", margin: "0 auto 30px", fontFamily: "Montserrat, sans-serif", fontSize: "13px", lineHeight: "1.8" }}>
          Discover new collections, exclusive releases and timeless inspirations.
        </p>
        <button className="border border-[#e8e2d9]/30 px-7 sm:px-8 py-3 text-[#e8e2d9] text-xs tracking-[0.2em] uppercase hover:bg-[#e8e2d9] hover:text-[#0a0a0a] transition-all duration-300">
          Subscribe
        </button>
      </div>

      {/* Footer Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 py-16 sm:py-20 md:py-24 grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
        {FOOTER_LINKS.map((col) => (
          <div key={col.heading}>
            <p style={headingStyle}>{col.heading}</p>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(232,226,217,0.9)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(176,170,163,0.65)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] max-w-7xl mx-auto px-6 sm:px-10 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontWeight: 300, letterSpacing: "0.08em", color: "rgba(176,170,163,0.4)" }}>
          Region: <span style={{ color: "rgba(232,226,217,0.7)", fontWeight: 400 }}>India</span>
        </p>
        <div className="flex items-center gap-5">
          {SOCIAL.map(({ icon, label }) => (
            <button
              key={label}
              aria-label={label}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(176,170,163,0.45)", padding: 0, transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(232,226,217,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(176,170,163,0.45)")}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Large Brand Mark */}
      <div className="border-t border-white/[0.04] py-8 sm:py-10 text-center overflow-hidden">
        <span
          style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(36px, 8vw, 72px)", fontWeight: 300, letterSpacing: "0.55em", textIndent: "0.55em", color: "rgba(232,226,217,0.10)", textTransform: "uppercase", userSelect: "none" }}
        >
          Aubrenne
        </span>
      </div>
    </footer>
  );
}
