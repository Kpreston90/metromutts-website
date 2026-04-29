/**
 * Limited Spots Toast
 * Floating notification that slides in from the bottom-right after a delay
 * Creates urgency with day-aware messaging about limited availability
 * Dismisses after 8 seconds or on user click
 */
import { useState, useEffect } from "react";
import { X, Clock, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookingModal } from "@/contexts/BookingModalContext";

const STORAGE_KEY = "mm-toast-last-shown";
const SHOW_DELAY_MS = 6000; // Show after 6 seconds on page
const AUTO_DISMISS_MS = 10000; // Auto-dismiss after 10 seconds
const COOLDOWN_HOURS = 4; // Don't show again for 4 hours

interface SpotMessage {
  service: string;
  spots: number;
  timeframe: string;
}

function getUrgencyMessage(): SpotMessage {
  const day = new Date().getDay(); // 0=Sun, 1=Mon...
  const messages: SpotMessage[] = [
    { service: "grooming", spots: 2, timeframe: "this Saturday" },
    { service: "daycare", spots: 4, timeframe: "this week" },
    { service: "boarding", spots: 3, timeframe: "this weekend" },
    { service: "grooming", spots: 1, timeframe: "tomorrow" },
    { service: "daycare", spots: 5, timeframe: "Monday" },
  ];

  // Pick based on day of week for variety
  if (day === 0 || day === 6) return messages[2]; // Weekend → boarding
  if (day === 4 || day === 5) return messages[0]; // Thu/Fri → grooming Saturday
  if (day === 1) return messages[4]; // Monday → daycare this week
  if (day === 3) return messages[3]; // Wed → grooming tomorrow
  return messages[1]; // Tue → daycare
}

export default function LimitedSpotsToast() {
  const [visible, setVisible] = useState(false);
  const { openBookingModal } = useBookingModal();
  const message = getUrgencyMessage();

  useEffect(() => {
    // Check cooldown
    const lastShown = localStorage.getItem(STORAGE_KEY);
    if (lastShown) {
      const hoursSince =
        (Date.now() - parseInt(lastShown, 10)) / (1000 * 60 * 60);
      if (hoursSince < COOLDOWN_HOURS) return;
    }

    // Show after delay
    const showTimer = setTimeout(() => {
      setVisible(true);
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }, SHOW_DELAY_MS);

    return () => clearTimeout(showTimer);
  }, []);

  // Auto-dismiss
  useEffect(() => {
    if (!visible) return;
    const dismissTimer = setTimeout(() => setVisible(false), AUTO_DISMISS_MS);
    return () => clearTimeout(dismissTimer);
  }, [visible]);

  const handleBook = () => {
    setVisible(false);
    openBookingModal();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-[60] max-w-sm"
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/15 border border-gray-100 overflow-hidden">
            {/* Coral accent top bar */}
            <div className="h-1 bg-gradient-to-r from-[#FB923C] to-[#FB923C]/60" />

            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FB923C]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#FB923C]" />
                  </div>
                  <p className="text-sm font-bold text-[#345460]">
                    Spots filling up
                  </p>
                </div>
                <button
                  onClick={() => setVisible(false)}
                  className="p-1 rounded-full text-[#345460]/30 hover:text-[#345460] hover:bg-gray-100 transition-all shrink-0"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message */}
              <p className="text-sm text-[#345460]/70 mb-4 leading-relaxed">
                Only{" "}
                <span className="font-bold text-[#FB923C]">
                  {message.spots} {message.service} spot
                  {message.spots > 1 ? "s" : ""}
                </span>{" "}
                left {message.timeframe}. Don't miss out!
              </p>

              {/* CTA */}
              <button
                onClick={handleBook}
                className="w-full flex items-center justify-center gap-2 bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold text-sm py-2.5 px-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#48D597]/20"
              >
                <Sparkles className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
