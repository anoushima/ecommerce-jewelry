import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Navbar />
      <Hero />

      <footer className="border-t border-white/[0.08] py-4 px-12 flex justify-center gap-4 font-montserrat text-[8px] tracking-[0.24em] font-light text-[#b0aaa3]/35 uppercase">
        <span>Something in you recognizes it</span>
        <span className="opacity-30">/</span>
        <span>Aubrenne</span>
        <span className="opacity-30">/</span>
        <span>2026</span>
      </footer>
    </div>
  );
}