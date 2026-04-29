/**
 * Social Proof Ticker
 * Auto-scrolling marquee of real-time-feeling social proof messages
 * Replaces the static promo banner with dynamic, trust-building content
 */
import { useState, useEffect, useRef } from "react";
import { Star, Heart, Calendar, Dog, Sparkles } from "lucide-react";
import { useBookingModal } from "@/contexts/BookingModalContext";

interface TickerMessage {
  icon: React.ReactNode;
  text: string;
  highlight?: string;
}

const messages: TickerMessage[] = [
  {
    icon: <Dog className="w-3.5 h-3.5 text-[#48D597]" />,
    text: "Bella just booked her 3rd week of daycare",
  },
  {
    icon: <Star className="w-3.5 h-3.5 text-[#F97066] fill-[#F97066]" />,
    text: "New 5-star review:",
    highlight: '"My dog has never been happier!"',
  },
  {
    icon: <Heart className="w-3.5 h-3.5 text-[#F97066]" />,
    text: "14 happy pups playing right now",
  },
  {
    icon: <Calendar className="w-3.5 h-3.5 text-[#48D597]" />,
    text: "First day FREE for new pups",
    highlight: "Book today →",
  },
  {
    icon: <Sparkles className="w-3.5 h-3.5 text-[#F97066]" />,
    text: "Jacque just finished a gorgeous doodle groom",
  },
  {
    icon: <Star className="w-3.5 h-3.5 text-[#F97066] fill-[#F97066]" />,
    text: "4.9★ on Google",
    highlight: "96 five-star reviews",
  },
  {
    icon: <Dog className="w-3.5 h-3.5 text-[#48D597]" />,
    text: "Cooper & Luna are having a blast in the big dog group",
  },
  {
    icon: <Calendar className="w-3.5 h-3.5 text-[#48D597]" />,
    text: "3 grooming spots left this week",
    highlight: "Book now →",
  },
];

export default function SocialProofTicker() {
  const { openBookingModal } = useBookingModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const current = messages[currentIndex];
  const isBookable = current.highlight?.includes("→");

  return (
    <button
      onClick={isBookable ? openBookingModal : undefined}
      className={`flex items-center gap-2 transition-all duration-300 ${
        isBookable ? "cursor-pointer hover:opacity-80" : "cursor-default"
      } ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
      aria-live="polite"
    >
      {current.icon}
      <span className="text-xs tracking-wide">
        {current.text}
        {current.highlight && (
          <>
            {" "}
            <strong className={isBookable ? "text-[#F97066]" : "text-[#48D597]"}>
              {current.highlight}
            </strong>
          </>
        )}
      </span>
    </button>
  );
}

/**
 * Mobile version — simpler single-line display
 */
export function SocialProofTickerMobile() {
  const { openBookingModal } = useBookingModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = messages[currentIndex];
  const isBookable = current.highlight?.includes("→");

  return (
    <div className="bg-[#345460] text-white/90 lg:hidden">
      <div className="flex items-center justify-center py-2 px-4">
        <button
          onClick={isBookable ? openBookingModal : undefined}
          className={`flex items-center gap-2 text-center transition-all duration-300 ${
            isBookable ? "cursor-pointer" : "cursor-default"
          } ${isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
          aria-live="polite"
        >
          {current.icon}
          <span className="text-[11px] leading-tight">
            {current.text}
            {current.highlight && (
              <>
                {" "}
                <strong className={isBookable ? "text-[#F97066]" : "text-[#48D597]"}>
                  {current.highlight}
                </strong>
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
