/**
 * Social Proof Ticker — v2
 * Auto-rotating messages mixing:
 * 1. Real-time Gingr availability urgency
 * 2. 5-star review snippets
 * 3. Fun personality stats
 */
import { useState, useEffect, useRef, useMemo } from "react";
import { Star, Clock, Dog, Sparkles, Heart, TrendingUp } from "lucide-react";
import { useBookingModal } from "@/contexts/BookingModalContext";
import { trpc } from "@/lib/trpc";

interface TickerMessage {
  icon: React.ReactNode;
  text: string;
  highlight?: string;
  bookable?: boolean;
}

// Static review messages
const reviewMessages: TickerMessage[] = [
  {
    icon: <Star className="w-3.5 h-3.5 text-[#FB923C] fill-[#FB923C]" />,
    text: "5-star review:",
    highlight: '"My dog has never been happier!" — Sarah M.',
  },
  {
    icon: <Star className="w-3.5 h-3.5 text-[#FB923C] fill-[#FB923C]" />,
    text: "5-star review:",
    highlight: '"Best daycare in Tulsa, hands down!" — Jake R.',
  },
  {
    icon: <Star className="w-3.5 h-3.5 text-[#FB923C] fill-[#FB923C]" />,
    text: "4.9★ on Google",
    highlight: "96 five-star reviews",
  },
  {
    icon: <Star className="w-3.5 h-3.5 text-[#FB923C] fill-[#FB923C]" />,
    text: "5-star review:",
    highlight: '"The boarding suites are amazing!" — Lisa T.',
  },
];

// Static fun/personality messages
const funMessages: TickerMessage[] = [
  {
    icon: <Heart className="w-3.5 h-3.5 text-[#FB923C]" />,
    text: "4,000+ sq ft of pure pup paradise",
  },
  {
    icon: <Sparkles className="w-3.5 h-3.5 text-[#48D597]" />,
    text: "From the family behind OKC's most waitlisted dog care spot",
  },
  {
    icon: <Dog className="w-3.5 h-3.5 text-[#48D597]" />,
    text: "First day FREE for new pups",
    highlight: "Get started →",
    bookable: true,
  },
  {
    icon: <TrendingUp className="w-3.5 h-3.5 text-[#48D597]" />,
    text: "Tulsa's fastest-growing dog daycare",
    highlight: "Now open 7 days/week",
  },
];

function buildAvailabilityMessages(
  today: { daycare: { spotsLeft: number }; boarding: { spotsLeft: number }; grooming: { spotsLeft: number } } | undefined
): TickerMessage[] {
  if (!today) return [];

  const msgs: TickerMessage[] = [];
  const { daycare, boarding, grooming } = today;

  // Find the lowest availability for urgency
  const services = [
    { name: "daycare", spots: daycare.spotsLeft, label: "daycare spot" },
    { name: "grooming", spots: grooming.spotsLeft, label: "grooming spot" },
    { name: "boarding", spots: boarding.spotsLeft, label: "boarding suite" },
  ];

  const sorted = [...services].sort((a, b) => a.spots - b.spots);
  const lowest = sorted[0];

  // Urgency message for the lowest availability
  if (lowest.spots === 0) {
    msgs.push({
      icon: <Clock className="w-3.5 h-3.5 text-[#FB923C]" />,
      text: `${lowest.label.charAt(0).toUpperCase() + lowest.label.slice(1)}s fully booked today!`,
      highlight: "Check tomorrow →",
      bookable: true,
    });
  } else if (lowest.spots <= 3) {
    msgs.push({
      icon: <Clock className="w-3.5 h-3.5 text-[#FB923C]" />,
      text: `Only ${lowest.spots} ${lowest.label}${lowest.spots > 1 ? "s" : ""} left today`,
      highlight: "Book before it fills →",
      bookable: true,
    });
  }

  // Total spots message showing all services
  msgs.push({
    icon: <Dog className="w-3.5 h-3.5 text-[#48D597]" />,
    text: `${daycare.spotsLeft} daycare · ${grooming.spotsLeft} grooming · ${boarding.spotsLeft} boarding spots open today`,
    highlight: "Book now →",
    bookable: true,
  });

  // Fun pups-playing message based on booked count
  const totalBooked = (today.daycare as any).booked + (today.grooming as any).booked + (today.boarding as any).booked;
  if (totalBooked > 0) {
    msgs.push({
      icon: <Heart className="w-3.5 h-3.5 text-[#FB923C]" />,
      text: `${totalBooked} happy pups checked in today`,
      highlight: "Join the pack →",
      bookable: true,
    });
  }

  return msgs;
}

export default function SocialProofTicker() {
  const { openBookingModal } = useBookingModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { data: availability } = trpc.availability.todayAndTomorrow.useQuery(
    undefined,
    { refetchInterval: 60000, staleTime: 30000 }
  );

  // Build the full message rotation
  const messages = useMemo(() => {
    const availMsgs = buildAvailabilityMessages(availability?.today);
    // Interleave: availability, review, fun, availability, review, fun...
    const combined: TickerMessage[] = [];
    const maxLen = Math.max(availMsgs.length, reviewMessages.length, funMessages.length);
    for (let i = 0; i < maxLen; i++) {
      if (availMsgs[i]) combined.push(availMsgs[i]);
      if (reviewMessages[i]) combined.push(reviewMessages[i]);
      if (funMessages[i]) combined.push(funMessages[i]);
    }
    // Add any remaining
    if (combined.length === 0) {
      return [...reviewMessages, ...funMessages];
    }
    return combined;
  }, [availability]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 400);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [messages.length]);

  // Reset index if messages change
  useEffect(() => {
    setCurrentIndex(0);
  }, [messages.length]);

  const current = messages[currentIndex % messages.length];
  const isBookable = current?.bookable || current?.highlight?.includes("→");

  if (!current) return null;

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
            <strong className={isBookable ? "text-[#FB923C]" : "text-[#48D597]"}>
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

  const { data: availability } = trpc.availability.todayAndTomorrow.useQuery(
    undefined,
    { refetchInterval: 60000, staleTime: 30000 }
  );

  const messages = useMemo(() => {
    const availMsgs = buildAvailabilityMessages(availability?.today);
    const combined: TickerMessage[] = [];
    const maxLen = Math.max(availMsgs.length, reviewMessages.length, funMessages.length);
    for (let i = 0; i < maxLen; i++) {
      if (availMsgs[i]) combined.push(availMsgs[i]);
      if (reviewMessages[i]) combined.push(reviewMessages[i]);
      if (funMessages[i]) combined.push(funMessages[i]);
    }
    if (combined.length === 0) {
      return [...reviewMessages, ...funMessages];
    }
    return combined;
  }, [availability]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 400);
    }, 4500);

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [messages.length]);

  const current = messages[currentIndex % messages.length];
  const isBookable = current?.bookable || current?.highlight?.includes("→");

  if (!current) return null;

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
                <strong className={isBookable ? "text-[#FB923C]" : "text-[#48D597]"}>
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
