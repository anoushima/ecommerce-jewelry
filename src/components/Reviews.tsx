import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "../lib/supabase";

type Review = { id: string; name: string; review: string; stars: number };

const FALLBACK_REVIEWS: Review[] = [
  { id: "1", stars: 5, review: "Absolutely breathtaking. The craftsmanship is unlike anything I have experienced before.", name: "Isabelle R." },
  { id: "2", stars: 5, review: "My engagement ring arrived perfectly. Simple, refined, and of exceptional quality.", name: "Melissa S." },
  { id: "3", stars: 5, review: "Beautiful and exactly as described. The packaging alone felt like a luxury experience.", name: "Carolyn M." },
  { id: "4", stars: 5, review: "Exactly as depicted. The ring is stunning and the service was impeccable throughout.", name: "Scott C." },
  { id: "5", stars: 5, review: "An heirloom-quality piece. I receive compliments every single time I wear it.", name: "Priya N." },
  { id: "6", stars: 5, review: "The necklace exceeded every expectation. Aubrenne truly understands luxury.", name: "Sophie L." },
  { id: "7", stars: 5, review: "Gifted a bracelet to my mother and she was moved to tears. Worth every moment.", name: "Ryan K." },
  { id: "8", stars: 5, review: "The attention to detail is extraordinary. A truly timeless piece of jewellery.", name: "Amara J." },
];

const VISIBLE = 4;

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_REVIEWS);
  const [start, setStart] = useState(0);

  useEffect(() => {
    supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data && data.length > 0) setReviews(data);
      });
  }, []);

  const canPrev = start > 0;
  const canNext = start + VISIBLE < reviews.length;

  const prev = () => canPrev && setStart((s) => s - 1);
  const next = () => canNext && setStart((s) => s + 1);

  const visible = reviews.slice(start, start + VISIBLE);

  return (
    <section className="relative z-20 w-full bg-[#0a0a0a] py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 border-t border-white/[0.06]">

      {/* Header row */}
      <div className="flex items-start justify-between w-full max-w-7xl mx-auto mb-10 sm:mb-14">
        <div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.35em", fontWeight: 300, color: "rgba(176,170,163,0.45)", textTransform: "uppercase", marginBottom: "12px" }}>
            Our Clients
          </p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 300, letterSpacing: "0.2em", color: "#e8e2d9", textTransform: "uppercase", textIndent: "0.2em" }}>
            Reviews
          </h2>
          <div style={{ width: "36px", height: "0.5px", background: "rgba(176,170,163,0.3)", marginTop: "14px" }} />
        </div>

        <div className="flex items-center gap-4 mt-2">
          <button onClick={prev} disabled={!canPrev} aria-label="Previous" style={{ color: canPrev ? "rgba(176,170,163,0.8)" : "rgba(176,170,163,0.2)", background: "none", border: "none", cursor: canPrev ? "pointer" : "default", padding: 0, transition: "color 0.2s ease" }}>
            <ChevronLeft size={22} strokeWidth={1.2} />
          </button>
          <button onClick={next} disabled={!canNext} aria-label="Next" style={{ color: canNext ? "rgba(176,170,163,0.8)" : "rgba(176,170,163,0.2)", background: "none", border: "none", cursor: canNext ? "pointer" : "default", padding: 0, transition: "color 0.2s ease" }}>
            <ChevronRight size={22} strokeWidth={1.2} />
          </button>
        </div>
      </div>

      {/* Review cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full max-w-7xl mx-auto">
        {visible.map((r, idx) => {
          let hiddenClass = "";
          if (idx >= 1) hiddenClass += " hidden sm:flex";
          if (idx >= 2) hiddenClass += " sm:hidden lg:flex";

          return (
            <div key={r.id} className={`flex flex-col gap-4${hiddenClass}`}>
              <div className="flex items-center gap-[3px]">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="rgba(232,226,217,0.9)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "16px", fontWeight: 300, fontStyle: "italic", lineHeight: 1.65, color: "rgba(232,226,217,0.75)", letterSpacing: "0.02em" }}>
                "{r.review}"
              </p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8.5px", letterSpacing: "0.2em", fontWeight: 300, color: "rgba(176,170,163,0.5)", textTransform: "uppercase", marginTop: "4px" }}>
                {r.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 flex items-center gap-2">
        {Array.from({ length: reviews.length - VISIBLE + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            style={{ width: i === start ? "28px" : "4px", height: "1px", background: i === start ? "rgba(232,226,217,0.8)" : "rgba(176,170,163,0.25)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 sm:mt-16" style={{ height: "0.5px", background: "rgba(176,170,163,0.1)" }} />
    </section>
  );
}