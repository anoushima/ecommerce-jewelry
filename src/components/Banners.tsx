export default function LuxuryBanners() {
  return (
    <section className="bg-[#0a0a0a]">

      {/* Banner 1 */}
      <div className="grid md:grid-cols-2 min-h-[650px]">

        <div className="bg-[#121212] flex items-center justify-center px-12 md:px-24 border-y border-white/[0.05]">
          <div className="max-w-xl text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#b0aaa3] mb-6">
              Fine Jewelry
            </p>

            <h2 className="text-[#e8e2d9] text-4xl md:text-5xl font-light tracking-[0.12em] uppercase mb-8">
              Crafted To Be Remembered
            </h2>

            <p className="text-[#e8e2d9] text-lg mb-4">
              Fine jewelry that transcends time.
            </p>

            <p className="text-[#b0aaa3] leading-8 mb-10">
              From rare gemstones to masterful craftsmanship,
              every creation reflects elegance that never fades.
              Designed to be cherished today and treasured forever.
            </p>

            <button className="border border-[#e8e2d9] text-[#e8e2d9] px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Discover Fine Jewelry
            </button>
          </div>
        </div>
        

        <div>
          <img
            src="https://res.cloudinary.com/dnnk7dymx/image/upload/v1782234904/Dear_London_____We_invite_you_to_discover_our_fine_jewellery_collection_in_London_March_14_15__i2p1en.jpg"
            alt="Wedding Rings"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Banner 2 */}
      <div className="grid md:grid-cols-2 min-h-[650px]">

        <div>
          <img
            src="https://res.cloudinary.com/dnnk7dymx/image/upload/v1782234892/download_2_zk2bqi.jpg"
            alt="Fine Jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-[#0d0d0d] flex items-center justify-center px-12 md:px-24 border-y border-white/[0.05]">
          <div className="max-w-xl text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#b0aaa3] mb-6">
              Wedding Collection
            </p>

            <h2 className="text-[#e8e2d9] text-4xl md:text-5xl font-light tracking-[0.12em] uppercase mb-8">
              The Art Of Commitment
            </h2>

            <p className="text-[#e8e2d9] text-lg mb-4">
              Wedding rings designed to endure generations.
            </p>

            <p className="text-[#b0aaa3] leading-8 mb-10">
              Celebrate a bond that grows stronger with time.
              Crafted with exceptional precision, each ring is designed
              to become part of your family's story for generations to come.
            </p>

            <button className="border border-[#e8e2d9] text-[#e8e2d9] px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Wedding Bands
            </button>
          </div>
        </div>

        
      </div>

      {/* Banner 3 */}
      <div className="grid md:grid-cols-2 min-h-[650px]">
        <div className="bg-[#0d0d0d] flex items-center justify-center px-12 md:px-24 border-y border-white/[0.05]">
          <div className="max-w-xl text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#b0aaa3] mb-6">
              Signature Collections
            </p>

            <h2 className="text-[#e8e2d9] text-4xl md:text-5xl font-light tracking-[0.12em] uppercase mb-8">
              For Every Chapter Of You
            </h2>

            <p className="text-[#e8e2d9] text-lg mb-4">
              Luxury designed to evolve with your journey.
            </p>

            <p className="text-[#b0aaa3] leading-8 mb-10">
              Whether celebrating milestones or embracing new beginnings,
              our collections accompany every meaningful moment.
              A timeless expression of your individuality and style.
            </p>

            <button className="border border-[#e8e2d9] text-[#e8e2d9] px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Collections
            </button>
          </div>
        </div>

        <div>
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