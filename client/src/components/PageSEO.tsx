import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
}

/**
 * PageSEO component — updates document.title and meta description
 * on client-side navigation. Server-side injection handles crawlers
 * via ogMetadata.ts, but this ensures the browser tab title updates
 * for real users navigating the SPA.
 */
export default function PageSEO({ title, description, canonical }: PageSEOProps) {
  useEffect(() => {
    document.title = title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    // Update canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) {
        link.href = canonical;
      }
    }
  }, [title, description, canonical]);

  return null;
}
