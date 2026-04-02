/*
 * Metro Mutts Announcement Bar
 * Dismissible seasonal promotion banner at the very top of the page
 * Brand: Green #48D597 primary, Dark #345460 text
 * Persists dismissal in localStorage so it stays hidden for the session
 */
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "wouter";

const STORAGE_KEY = "mm-promo-dismissed";
const PROMO_ID = "spring-2026"; // Change this to reset dismissal for new promos

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed !== PROMO_ID) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, PROMO_ID);
  };

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#345460] via-[#3a6070] to-[#345460] text-white overflow-hidden">
      {/* Subtle animated shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />

      <div className="container relative flex items-center justify-center gap-3 py-2.5 text-sm">
        <Sparkles className="w-4 h-4 text-[#48D597] shrink-0 hidden sm:block" />
        <p className="font-medium text-center">
          <span className="inline-flex items-center gap-1.5">
            <span className="bg-[#48D597] text-[#345460] text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Spring Special
            </span>
            <span className="hidden sm:inline">—</span>
            <span>First day of daycare is <strong>FREE</strong> for new pups!</span>
          </span>
          <Link
            href="/book"
            className="ml-2 underline underline-offset-2 decoration-[#48D597] hover:text-[#48D597] transition-colors font-semibold"
          >
            Book now →
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Dismiss promotion"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
