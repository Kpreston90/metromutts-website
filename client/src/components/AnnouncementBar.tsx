/*
 * Metro Mutts Announcement Bar — v3
 * Bold, minimal, high-contrast top strip
 * Static centered layout on all screen sizes — no ticker clipping
 */
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "wouter";
import { useBookingModal } from "@/contexts/BookingModalContext";

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
  const { openBookingModal } = useBookingModal();
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
    <div className="relative bg-[#1a2e36] text-white/90 select-none">
      <div className="flex items-center justify-center py-2 px-10">
        {/* Desktop: full layout with separators */}
        <div className="hidden sm:flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <PawIcon className="w-3.5 h-3.5 text-[#48D597]" />
            <span className="font-bold tracking-wide uppercase text-xs">
              Spring Special
            </span>
          </span>
          <span className="text-white/30">|</span>
          <span className="text-xs tracking-wide">
            First day of daycare is{" "}
            <strong className="text-[#48D597]">FREE</strong> for new pups
          </span>
          <span className="text-white/30">|</span>
          <button
            onClick={openBookingModal}
            className="text-xs font-bold tracking-wider uppercase text-[#48D597] hover:text-white transition-colors"
          >
            Claim Offer &rarr;
          </button>
        </div>

        {/* Mobile: compact stacked layout */}
        <div className="flex sm:hidden items-center gap-2 text-center">
          <PawIcon className="w-3.5 h-3.5 text-[#48D597] shrink-0" />
          <span className="text-[11px] leading-tight">
            <strong className="text-[#48D597]">FREE</strong> first day for new pups!{" "}
            <button
              onClick={openBookingModal}
              className="font-bold text-[#48D597] underline underline-offset-2"
            >
              Claim&nbsp;&rarr;
            </button>
          </span>
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
