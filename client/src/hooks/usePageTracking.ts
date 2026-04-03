/**
 * usePageTracking — Auto-track page views and section visibility via Umami.
 * Drop this into any page component to get scroll-depth tracking for free.
 */
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Track when a section becomes visible (scroll depth).
 * Pass an array of section IDs to observe.
 */
export function useSectionTracking(sectionIds: string[]): void {
  const tracked = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tracked.current.has(entry.target.id)) {
            tracked.current.add(entry.target.id);
            trackEvent({
              category: "page_section",
              action: "section_viewed",
              label: entry.target.id,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}
