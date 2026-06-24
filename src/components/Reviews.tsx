import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { supabase } from "../lib/supabase";

type Review = { id: string; name: string; review: string; stars: number };

const VISIBLE = 4;

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [start, setStart] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fetchReviews = () => {
    supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setReviews(data);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !review.trim()) return;
    setStatus("loading");
    const { error } = await supabase.from("reviews").insert({ name, review, stars });
    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setName("");
      setReview("");
      setStars(5);
      fetchReviews();
      setTimeout(() => {
        setShowForm(false);
        setStatus("idle");
      }, 2000);
    }
  };

  const canPrev = start > 0;
  const canNext = start + VISIBLE < reviews.length;
  const prev = () => canPrev && setStart((s) => s - 1);
  const next = () => canNext && setStart((s) => s + 1);
  const visible = reviews.slice(start, start + VISIBLE);

  if (reviews.length === 0) return null;

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
          <button
            onClick={() => setShowForm(true)}
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(176,170,163,0.6)", background: "none", border: "0.5px solid rgba(176,170,163,0.25)", padding: "8px 14px", cursor: "pointer", transition: "all 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#e8e2d9"; e.currentTarget.style.borderColor = "rgba(232,226,217,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(176,170,163,0.6)"; e.currentTarget.style.borderColor = "rgba(176,170,163,0.25)"; }}
          >
            Write a Review
          </button>

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
        {Array.from({ length: Math.max(reviews.length - VISIBLE + 1, 1) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            style={{ width: i === start ? "28px" : "4px", height: "1px", background: i === start ? "rgba(232,226,217,0.8)" : "rgba(176,170,163,0.25)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 sm:mt-16" style={{ height: "0.5px", background: "rgba(176,170,163,0.1)" }} />

      {/* Review Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}>
          <div className="relative w-full max-w-md bg-[#0f0f0f] border border-white/[0.08] p-8 sm:p-10">

            <button
              onClick={() => { setShowForm(false); setStatus("idle"); }}
              className="absolute top-5 right-5 text-[#b0aaa3] hover:text-white transition-colors"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <X size={18} strokeWidth={1.4} />
            </button>

            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.35em", fontWeight: 300, color: "rgba(176,170,163,0.45)", textTransform: "uppercase", marginBottom: "10px" }}>
              Share Your Experience
            </p>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "28px", fontWeight: 300, letterSpacing: "0.1em", color: "#e8e2d9", marginBottom: "28px" }}>
              Write a Review
            </h3>

            <div className="mb-6">
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(176,170,163,0.5)", marginBottom: "10px" }}>
                Your Rating
              </p>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setHoveredStar(i + 1)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => setStars(i + 1)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={(hoveredStar || stars) > i ? "rgba(232,226,217,0.9)" : "rgba(176,170,163,0.15)"} xmlns="http://www.w3.org/2000/svg" style={{ transition: "fill 0.15s ease" }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(176,170,163,0.5)", marginBottom: "8px" }}>
                Your Name
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Isabelle R."
                className="w-full bg-transparent border border-white/10 px-4 py-3 text-[#e8e2d9] text-xs tracking-[0.08em] placeholder:text-[#b0aaa3]/30 outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="mb-8">
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(176,170,163,0.5)", marginBottom: "8px" }}>
                Your Review
              </p>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your experience..."
                rows={4}
                className="w-full bg-transparent border border-white/10 px-4 py-3 text-[#e8e2d9] text-xs tracking-[0.08em] placeholder:text-[#b0aaa3]/30 outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            {status === "success" ? (
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(176,170,163,0.7)", textAlign: "center" }}>
                Thank you for your review.
              </p>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={status === "loading" || !name.trim() || !review.trim()}
                className="w-full border border-[#e8e2d9]/30 py-3 text-[#e8e2d9] text-xs tracking-[0.2em] uppercase hover:bg-[#e8e2d9] hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : "Submit Review"}
              </button>
            )}

            {status === "error" && (
              <p className="mt-3 text-center text-[10px] tracking-[0.15em] uppercase text-red-400/60">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}