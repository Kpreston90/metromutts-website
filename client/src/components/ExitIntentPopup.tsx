/*
 * Metro Mutts Exit-Intent Popup
 * Brand: Green #48D597, Dark #345460
 * Triggers when user moves cursor toward browser close/back
 * Offers free first day to capture leaving visitors
 * Shows once per session, respects dismissal for 7 days
 */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { X, ArrowRight, Phone, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneCall } from "@/lib/analytics";
import { useBookingModal } from "@/contexts/BookingModalContext";

const DISMISS_KEY = "mm-exit-popup-dismissed";
const DISMISS_DAYS = 7;

function PawIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 17.5c-1.5 1.5-4.5 2.5-5 1s1-4 3-5c1.2-.6 2.8-.6 4 0 2 1 3.5 3.5 3 5s-3.5.5-5-1z" />
      <ellipse cx="7" cy="8.5" rx="2" ry="2.5" />
      <ellipse cx="17" cy="8.5" rx="2" ry="2.5" />
      <ellipse cx="10.5" cy="5" rx="1.8" ry="2.2" />
      <ellipse cx="13.5" cy="5" rx="1.8" ry="2.2" />
    </svg>
  );
}

export default function ExitIntentPopup() {
  const { openBookingModal } = useBookingModal();
  const [show, setShow] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
    const expires = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(DISMISS_KEY, String(expires));
  }, []);

  useEffect(() => {
    // Check if previously dismissed
    const dismissedUntil = localStorage.getItem(DISMISS_KEY);
    if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
      return;
    }

    // Don't trigger on mobile (no mouse leave)
    if (window.innerWidth < 768) return;

    // Wait 5 seconds before enabling exit intent
    const enableTimer = setTimeout(() => {
      const handleMouseLeave = (e: MouseEvent) => {
        // Only trigger when cursor moves toward top of viewport (closing/navigating away)
        if (e.clientY <= 5 && !hasTriggered) {
          setShow(true);
          setHasTriggered(true);
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, 5000);

    return () => clearTimeout(enableTimer);
  }, [hasTriggered]);

  // Also handle Escape key
  useEffect(() => {
    if (!show) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [show, dismiss]);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={dismiss}
          />

          {/* Popup */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top accent bar */}
              <div className="bg-[#345460] px-8 pt-10 pb-12 text-center relative overflow-hidden">
                {/* Decorative paws */}
                <div className="absolute top-3 left-6 opacity-10">
                  <PawIcon className="w-12 h-12 text-[#48D597] rotate-[-20deg]" />
                </div>
                <div className="absolute bottom-4 right-8 opacity-10">
                  <PawIcon className="w-10 h-10 text-[#48D597] rotate-[15deg]" />
                </div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#48D597]/20 mb-5">
                  <Gift className="w-8 h-8 text-[#48D597]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  Wait — Don't Leave
                  <br />
                  Without Your{" "}
                  <span className="text-[#48D597]">Free Day!</span>
                </h3>
                <p className="text-white/60 text-sm">
                  Your pup's first day of daycare is on us.
                </p>
              </div>

              {/* Content */}
              <div className="px-8 py-8 text-center">
                <p className="text-[#345460]/70 text-[15px] leading-relaxed mb-6">
                  Try Metro Mutts risk-free. Your dog gets a full day of supervised play, a temperament assessment, and new friends — completely free.
                </p>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold text-base h-13 shadow-lg shadow-[#48D597]/20"
                    onClick={() => { dismiss(); openBookingModal(); }}
                  >
                    Claim Your Free Day
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>

                  <a
                    href="tel:5398673841"
                    className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#345460]/60 hover:text-[#48D597] transition-colors"
                    onClick={() => {
                      trackPhoneCall("exit_popup");
                      dismiss();
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Or call 539-867-3841
                  </a>
                </div>

                <button
                  onClick={dismiss}
                  className="mt-4 text-xs text-[#345460]/35 hover:text-[#345460]/60 transition-colors"
                >
                  No thanks, I'll pass on the free day
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
