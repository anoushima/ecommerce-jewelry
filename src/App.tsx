import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestCollections from "./components/Latest_Collections";
import Categories from "./components/Categories";

export default function App() {
  return (
    <div className="bg-[#0a0a0a]">

      {/* Navbar — always on top */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero — sticks while next section scrolls over */}
      <div className="sticky top-0 h-screen z-10">
        <Hero />
      </div>

      {/* Latest Collections — slides over hero */}
      <div className="relative z-20">
        <LatestCollections />
      </div>

      {/* Categories */}
      <Categories />

      {/* Footer */}
      <footer
        className="relative z-20 border-t border-white/[0.08] py-4 px-12 flex justify-center gap-4 bg-[#0a0a0a]"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "8px",
          letterSpacing: "0.24em",
          fontWeight: 300,
          color: "rgba(176,170,163,0.35)",
          textTransform: "uppercase",
        }}
      >
        <span>Something in you recognizes it</span>
        <span style={{ opacity: 0.3 }}>/</span>
        <span>Aubrenne</span>
        <span style={{ opacity: 0.3 }}>/</span>
        <span>2026</span>
      </footer>
    </div>
  );
}