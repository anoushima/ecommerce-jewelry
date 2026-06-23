import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestCollections from "./components/Latest_Collections";
import LuxuryBanners from "./components/Banners";
import Categories from "./components/Categories";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0a0a]">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="sticky top-0 h-screen z-10">
        <Hero />
      </div>

      <div className="relative z-20">
        <LatestCollections />
      </div>

      <div className="relative z-20">
        <LuxuryBanners />
      </div>

      <div className="relative z-20">
        <Categories />
      </div>

      <div className="relative z-20">
        <Reviews />
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}