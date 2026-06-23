export default function LuxuryBanners() {
  return (
    <section className="bg-[#0a0a0a]">

      {/* Banner 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[650px]">
        <div className="bg-[#121212] flex items-center justify-center px-8 sm:px-12 md:px-24 py-16 md:py-0 border-y border-white/[0.05] order-2 md:order-1">
          <div className="max-w-xl text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#b0aaa3] mb-4 sm:mb-6">Fine Jewelry</p>
            <h2 className="text-[#e8e2d9] font-light tracking-[0.12em] uppercase mb-6 sm:mb-8" style={{ fontSize: "clamp(26px, 4vw, 44px)" }}>
              Crafted To Be Remembered
            </h2>
            <p className="text-[#e8e2d9] text-base sm:text-lg mb-3 sm:mb-4">Fine jewelry that transcends time.</p>
            <p className="text-[#b0aaa3] leading-7 sm:leading-8 mb-8 sm:mb-10 text-sm sm:text-base">
              From rare gemstones to masterful craftsmanship, every creation reflects elegance that never fades.
              Designed to be cherished today and treasured forever.
            </p>
            <button className="border border-[#e8e2d9] text-[#e8e2d9] px-8 sm:px-10 py-3 sm:py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Discover Fine Jewelry
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 h-64 sm:h-80 md:h-auto">
          <img
            src="https://res.cloudinary.com/dnnk7dymx/image/upload/v1782234904/Dear_London_____We_invite_you_to_discover_our_fine_jewellery_collection_in_London_March_14_15__i2p1en.jpg"
            alt="Wedding Rings"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Banner 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[650px]">
        <div className="h-64 sm:h-80 md:h-auto">
          <img
            src="https://res.cloudinary.com/dnnk7dymx/image/upload/v1782234892/download_2_zk2bqi.jpg"
            alt="Fine Jewelry"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#0d0d0d] flex items-center justify-center px-8 sm:px-12 md:px-24 py-16 md:py-0 border-y border-white/[0.05]">
          <div className="max-w-xl text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#b0aaa3] mb-4 sm:mb-6">Wedding Collection</p>
            <h2 className="text-[#e8e2d9] font-light tracking-[0.12em] uppercase mb-6 sm:mb-8" style={{ fontSize: "clamp(26px, 4vw, 44px)" }}>
              The Art Of Commitment
            </h2>
            <p className="text-[#e8e2d9] text-base sm:text-lg mb-3 sm:mb-4">Wedding rings designed to endure generations.</p>
            <p className="text-[#b0aaa3] leading-7 sm:leading-8 mb-8 sm:mb-10 text-sm sm:text-base">
              Celebrate a bond that grows stronger with time. Crafted with exceptional precision, each ring is designed
              to become part of your family's story for generations to come.
            </p>
            <button className="border border-[#e8e2d9] text-[#e8e2d9] px-8 sm:px-10 py-3 sm:py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Wedding Bands
            </button>
          </div>
        </div>
      </div>

      {/* Banner 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[650px]">
        <div className="bg-[#0d0d0d] flex items-center justify-center px-8 sm:px-12 md:px-24 py-16 md:py-0 border-y border-white/[0.05] order-2 md:order-1">
          <div className="max-w-xl text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#b0aaa3] mb-4 sm:mb-6">Signature Collections</p>
            <h2 className="text-[#e8e2d9] font-light tracking-[0.12em] uppercase mb-6 sm:mb-8" style={{ fontSize: "clamp(26px, 4vw, 44px)" }}>
              For Every Chapter Of You
            </h2>
            <p className="text-[#e8e2d9] text-base sm:text-lg mb-3 sm:mb-4">Luxury designed to evolve with your journey.</p>
            <p className="text-[#b0aaa3] leading-7 sm:leading-8 mb-8 sm:mb-10 text-sm sm:text-base">
              Whether celebrating milestones or embracing new beginnings, our collections accompany every meaningful moment.
              A timeless expression of your individuality and style.
            </p>
            <button className="border border-[#e8e2d9] text-[#e8e2d9] px-8 sm:px-10 py-3 sm:py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Collections
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 h-64 sm:h-80 md:h-auto">
          <img
            src="https://res.cloudinary.com/dnnk7dymx/image/upload/v1782233439/Jewelry_Store_in_Indianapolis___Barrington_Jewels___Fine_Jewelry_psusut.jpg"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
