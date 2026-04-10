/**
 * Per-route Open Graph metadata for dynamic injection.
 * Crawlers (iMessage, Facebook, Slack, Google) see these tags
 * instead of the static index.html defaults.
 */

export interface OgMeta {
  title: string;
  description: string;
  image: string;
  url: string;
}

const BASE_URL = "https://www.metromutts.com";
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb";

// Default / fallback OG metadata (homepage)
const defaultOg: OgMeta = {
  title: "Metro Mutts | Dog Daycare, Boarding & Grooming in Tulsa",
  description:
    "Tulsa's newest dog daycare, boarding, and grooming facility. 4,000+ sq ft of pure pup paradise. Call 539-867-3841.",
  image: `${CDN}/og-homepage-4Bvn5v2GYGM8G8Cq2fVJZq.png`,
  url: BASE_URL,
};

/**
 * Route-specific OG metadata map.
 * Keys are path prefixes matched against the request URL.
 * More specific routes should come first.
 */
const routeOgMap: Record<string, OgMeta> = {
  "/vet-referred": {
    title: "Free Trial Day | Metro Mutts — Recommended by Your Vet",
    description:
      "Your veterinarian recommends Metro Mutts for daycare, boarding, and grooming. Claim your free trial day — because your vet trusts us with their patients.",
    image: `${CDN}/vet-referred-hero-NDd4fTY9BdDrJ9HMbsxEuv.webp`,
    url: `${BASE_URL}/vet-referred`,
  },
  "/refer": {
    title: "Refer a Friend | Metro Mutts — You Both Get $15 Off",
    description:
      "Refer a friend to Metro Mutts and you both get $15 off your next service. Because good things are better shared — especially dog care.",
    image: `${CDN}/og-refer-v2-gegNfk5rw2qURCwoGL5xZS.png`,
    url: `${BASE_URL}/refer`,
  },
  "/services": {
    title: "Services | Metro Mutts — Daycare, Boarding & Grooming",
    description:
      "Three premium services under one roof: supervised daycare, luxury overnight boarding, and professional grooming by Jacque. First day of daycare is free.",
    image: `${CDN}/services-hero-v2_cd3ef501.png`,
    url: `${BASE_URL}/services`,
  },
  "/daycare": {
    title: "Dog Daycare | Metro Mutts Tulsa — First Day FREE",
    description:
      "Supervised group play in 4,000+ sq ft of indoor and outdoor space. Dogs grouped by size and temperament. Enrichment activities and flexible drop-off.",
    image: `${CDN}/services-hero-v2_cd3ef501.png`,
    url: `${BASE_URL}/daycare`,
  },
  "/boarding": {
    title: "Overnight Boarding | Metro Mutts Tulsa — Private Suites",
    description:
      "Spacious, climate-controlled private suites with cozy bedding. Daily group play, evening walks, meals on your schedule, and overnight staff check-ins.",
    image: `${CDN}/boarding-suites_dd0c1aa0.png`,
    url: `${BASE_URL}/boarding`,
  },
  "/grooming": {
    title: "Dog Grooming | Metro Mutts Tulsa — Fresh Cuts by Jacque",
    description:
      "Professional grooming from basic baths to full breed-specific styling by Jacque. Premium pet-safe products and spa add-ons available.",
    image: `${CDN}/grooming-room-active-1_3a32bb83.png`,
    url: `${BASE_URL}/grooming`,
  },
  "/grooming-gallery": {
    title: "Grooming Gallery | Metro Mutts Tulsa",
    description:
      "See Jacque's grooming work — real client photos showcasing breed-specific styling, fresh cuts, and happy pups.",
    image: `${CDN}/grooming-room-active-1_3a32bb83.png`,
    url: `${BASE_URL}/grooming-gallery`,
  },
  "/pricing": {
    title: "Pricing | Metro Mutts — Daycare, Boarding & Grooming Rates",
    description:
      "Transparent pricing for all Metro Mutts services. Daycare from $30/day, boarding from $50/night, grooming from $30. Multi-dog discounts available.",
    image: `${CDN}/og-homepage-4Bvn5v2GYGM8G8Cq2fVJZq.png`,
    url: `${BASE_URL}/pricing`,
  },
  "/book": {
    title: "Book a Visit | Metro Mutts Tulsa",
    description:
      "Schedule your pup's first visit to Metro Mutts. First day of daycare is always free. Call 539-867-3841 or book online.",
    image: `${CDN}/og-homepage-4Bvn5v2GYGM8G8Cq2fVJZq.png`,
    url: `${BASE_URL}/book`,
  },
  "/careers": {
    title: "Careers | Metro Mutts Tulsa — Join Our Team",
    description:
      "Love dogs? Join the Metro Mutts team. We're hiring passionate dog care professionals in Tulsa.",
    image: `${CDN}/og-homepage-4Bvn5v2GYGM8G8Cq2fVJZq.png`,
    url: `${BASE_URL}/careers`,
  },
  "/blog": {
    title: "Blog | Metro Mutts — Dog Care Tips & News",
    description:
      "Expert dog care tips, training advice, and news from Metro Mutts Tulsa. Science-backed insights for happier, healthier pups.",
    image: `${CDN}/og-homepage-4Bvn5v2GYGM8G8Cq2fVJZq.png`,
    url: `${BASE_URL}/blog`,
  },
  "/faq": {
    title: "FAQ | Metro Mutts Tulsa",
    description:
      "Answers to common questions about Metro Mutts daycare, boarding, grooming, vaccinations, hours, and first visit policies.",
    image: `${CDN}/og-homepage-4Bvn5v2GYGM8G8Cq2fVJZq.png`,
    url: `${BASE_URL}/faq`,
  },
  "/tour": {
    title: "Facility Tour | Metro Mutts Tulsa",
    description:
      "Take a virtual tour of Metro Mutts — 4,000+ sq ft of indoor and outdoor play space, private boarding suites, and professional grooming stations.",
    image: `${CDN}/services-hero-v2_cd3ef501.png`,
    url: `${BASE_URL}/tour`,
  },
};

/**
 * Get OG metadata for a given URL path.
 * Returns route-specific metadata if available, otherwise defaults.
 */
export function getOgMetaForPath(path: string): OgMeta {
  // Normalize path
  const normalized = path.split("?")[0].split("#")[0].toLowerCase();

  // Check exact matches first
  if (routeOgMap[normalized]) {
    return routeOgMap[normalized];
  }

  // Check prefix matches (e.g., /blog/some-slug)
  for (const [route, meta] of Object.entries(routeOgMap)) {
    if (normalized.startsWith(route + "/")) {
      return meta;
    }
  }

  // Fallback to default
  return defaultOg;
}

/**
 * Inject OG meta tags into the HTML template.
 * Replaces the static meta tags with route-specific ones.
 */
export function injectOgMeta(html: string, meta: OgMeta): string {
  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${meta.image}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${meta.url}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${meta.image}" />`
  );

  // Replace page title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );

  return html;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
