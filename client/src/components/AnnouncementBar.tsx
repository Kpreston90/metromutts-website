/*
 * Metro Mutts Announcement Bar — v2
 * Bold, minimal, high-contrast top strip
 * Animated scrolling text ticker with paw accent
 */
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "wouter";

const STORAGE_KEY = "mm-promo-dismissed";
const PROMO_ID = "spring-2026";

function PawIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 17.5c-1.5 1.5-4.5 2.5-5 1s1-4 3-5c1.2-.6 2.8-.6 4 0 2 1 3.5 3.5 3 5s-3.5.5-5-1z" />
      <ellipse cx="7" cy="8.5" rx="2" ry="2.5" />
      <ellipse cx="17" cy="8.5" rx="2" ry="2.5" />
      <ellipse cx="10.5" cy="5" rx="1.8" ry="2.2" />
      <ellipse cx="13.5" cy="5" rx="1.8" ry="2.2" />
    </svg>
  );
}

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

  const tickerContent = (
    <span className="inline-flex items-center gap-6 whitespace-nowrap">
      <span className="inline-flex items-center gap-2">
        <PawIcon className="w-3.5 h-3.5 text-[#48D597]" />
        <span className="font-bold tracking-wide uppercase text-[11px] sm:text-xs">
          Spring Special
        </span>
      </span>
      <span className="text-white/60">|</span>
      <span className="text-[11px] sm:text-xs tracking-wide">
        First day of daycare is <strong className="text-[#48D597]">FREE</strong> for new pups
      </span>
      <span className="text-white/60">|</span>
      <Link
        href="/book"
        className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#48D597] hover:text-white transition-colors"
      >
        Claim Offer &rarr;
      </Link>
    </span>
  );

  return (
    <div className="relative bg-[#1a2e36] text-white/90 select-none overflow-hidden">
      {/* Desktop: centered static content */}
      <div className="hidden sm:flex items-center justify-center gap-2 py-2 px-10">
        {tickerContent}
      </div>

      {/* Mobile: scrolling ticker */}
      <div className="sm:hidden py-2 px-10 overflow-hidden">
        <div className="flex animate-[ticker_18s_linear_infinite]">
          <span className="shrink-0 pr-12">{tickerContent}</span>
          <span className="shrink-0 pr-12">{tickerContent}</span>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={dismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all"
        aria-label="Dismiss promotion"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
