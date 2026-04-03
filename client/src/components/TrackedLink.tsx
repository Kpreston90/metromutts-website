/**
 * TrackedLink — A wrapper for phone links and CTAs that auto-tracks clicks.
 * Use this for all phone call links and important CTA buttons across the site.
 */
import { trackPhoneCall, trackCTA } from "@/lib/analytics";

interface TrackedPhoneLinkProps {
  phone: string;
  location: string;
  className?: string;
  children: React.ReactNode;
}

/** Phone link with automatic call tracking */
export function TrackedPhoneLink({
  phone,
  location,
  className,
  children,
}: TrackedPhoneLinkProps) {
  return (
    <a
      href={`tel:${phone}`}
      className={className}
      onClick={() => trackPhoneCall(location)}
    >
      {children}
    </a>
  );
}

interface TrackedCTAProps {
  href: string;
  label: string;
  page?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

/** CTA link/button with automatic click tracking */
export function TrackedCTA({
  href,
  label,
  page,
  className,
  children,
  onClick,
}: TrackedCTAProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        trackCTA(label, page);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
