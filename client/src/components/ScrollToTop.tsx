import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Scrolls the window to the top whenever the route changes.
 * Also handles browser reload by using the "manual" scrollRestoration mode.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration so it doesn't
    // jump back to the previous scroll position on reload
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Don't scroll to top if navigating to a hash (e.g., /#about)
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
