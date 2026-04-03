/**
 * Metro Mutts Analytics Tracking Utility
 * Wraps Umami event tracking for consistent, site-wide analytics.
 *
 * Events are categorized by type:
 * - cta_click: Call-to-action button clicks (book, call, pricing)
 * - phone_call: Phone number link taps
 * - form_submit: Contact/careers form submissions
 * - nav_click: Navigation interactions
 * - gallery_view: Photo gallery interactions
 * - page_section: Section visibility (scroll depth)
 * - outbound_link: External link clicks
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number>) => void;
    };
  }
}

type EventCategory =
  | "cta_click"
  | "phone_call"
  | "form_submit"
  | "nav_click"
  | "gallery_view"
  | "page_section"
  | "outbound_link"
  | "social_click";

interface TrackEventParams {
  category: EventCategory;
  action: string;
  label?: string;
  page?: string;
}

/**
 * Track a custom event via Umami analytics.
 * Safely no-ops if Umami is not loaded (e.g., ad blockers, dev mode).
 */
export function trackEvent({ category, action, label, page }: TrackEventParams): void {
  try {
    if (window.umami?.track) {
      window.umami.track(action, {
        category,
        label: label || "",
        page: page || window.location.pathname,
      });
    }
  } catch {
    // Silently fail — analytics should never break the app
  }
}

// ─── Convenience helpers ───────────────────────────────────────

/** Track a CTA button click */
export function trackCTA(buttonLabel: string, page?: string): void {
  trackEvent({
    category: "cta_click",
    action: `cta_${buttonLabel.toLowerCase().replace(/\s+/g, "_")}`,
    label: buttonLabel,
    page,
  });
}

/** Track a phone call link click */
export function trackPhoneCall(location: string): void {
  trackEvent({
    category: "phone_call",
    action: "phone_call_click",
    label: location,
  });
}

/** Track a form submission */
export function trackFormSubmit(formName: string, success: boolean): void {
  trackEvent({
    category: "form_submit",
    action: success ? "form_submit_success" : "form_submit_error",
    label: formName,
  });
}

/** Track navigation click */
export function trackNavClick(destination: string): void {
  trackEvent({
    category: "nav_click",
    action: "nav_click",
    label: destination,
  });
}

/** Track gallery photo view */
export function trackGalleryView(photoId: string, galleryName: string): void {
  trackEvent({
    category: "gallery_view",
    action: "gallery_photo_view",
    label: `${galleryName}:${photoId}`,
  });
}

/** Track social media link click */
export function trackSocialClick(platform: string): void {
  trackEvent({
    category: "social_click",
    action: "social_click",
    label: platform,
  });
}
