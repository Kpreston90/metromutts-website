const OG_DATA = {
  "/boarding": {
    title: "Dog Boarding in Tulsa | $50/Night | Metro Mutts",
    description: "Their own space at night. New best friends by day. Private suites, daily play sessions, overnight staff. $50/night. Call 539-867-3841.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/insta-ad-boarding-v5_5981d89c.png",
    url: "https://www.metromutts.com/boarding",
  },
  "/grooming": {
    title: "Dog Grooming in Tulsa | Starting at $30 | Metro Mutts",
    description: "Professional dog grooming by Jacque. Baths, breed cuts, full spa treatments. Starting at $30. Call 539-867-3841 to book.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/insta-ad-grooming-final_7ae03431.png",
    url: "https://www.metromutts.com/grooming",
  },
  "/grooming-gallery": {
    title: "Grooming Gallery | 30+ Photos | Metro Mutts Tulsa",
    description: "Browse 30+ photos of freshly groomed pups by our in-house groomer Jacque. Doodles, poodles, schnauzers, and more.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/og-gallery-W9MY8CxQfZgYbNfdMQBb9u.png",
    url: "https://www.metromutts.com/grooming-gallery",
  },
  "/daycare": {
    title: "Dog Daycare in Tulsa | First Day FREE | Metro Mutts",
    description: "Supervised group play, enrichment activities, 4,000+ sq ft of space. First day free for new pups. From $30/day. Call 539-867-3841.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/daycare-hero-8mHoiByPEENzni474W7hiK.webp",
    url: "https://www.metromutts.com/daycare",
  },
  "/services": {
    title: "Dog Daycare, Boarding & Grooming | Metro Mutts Tulsa",
    description: "Everything your dog needs under one roof. Daycare, overnight boarding, and professional grooming in Tulsa. First day free. Call 539-867-3841.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/all-services-hero-v2-F7Rco3Tzz3Mz2bBh8CM8dG.webp",
    url: "https://www.metromutts.com/services",
  },
  "/pricing": {
    title: "Pricing | Daycare, Boarding & Grooming | Metro Mutts",
    description: "Daycare from $21/day. Boarding $50/night. Grooming from $30. View all Metro Mutts pricing. Tulsa, OK.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/og-homepage-BgNMUf5cGEkMLKRdunv64P.png",
    url: "https://www.metromutts.com/pricing",
  },
  "/faq": {
    title: "FAQ | Vaccinations, Hours, Policies | Metro Mutts Tulsa",
    description: "Answers to common questions about Metro Mutts dog daycare, boarding, and grooming. Vaccination requirements, hours, pricing, cancellation policy, and more.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/og-homepage-BgNMUf5cGEkMLKRdunv64P.png",
    url: "https://www.metromutts.com/faq",
  },
  "/tour": {
    title: "Virtual Facility Tour | See Inside Metro Mutts Tulsa",
    description: "Take a room-by-room walkthrough of Metro Mutts. Real photos of our lobby, indoor play area, grooming salon, and more. 4,000+ sq ft of dog care space.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/facility-lobby-wide_f16bbb5d.jpg",
    url: "https://www.metromutts.com/tour",
  },
};

export default async (request, context) => {
  const url = new URL(request.url);
  const path = url.pathname;

  // Only modify HTML responses for pages with custom OG data
  const ogData = OG_DATA[path];
  if (!ogData) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  let html = await response.text();

  // Replace default OG tags with page-specific ones
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${ogData.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${ogData.description}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${ogData.image}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${ogData.url}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${ogData.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${ogData.description}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${ogData.image}" />`
  );
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${ogData.title}</title>`
  );
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${ogData.description}" />`
  );

  return new Response(html, {
    headers: response.headers,
    status: response.status,
  });
};

export const config = {
  path: ["/boarding", "/grooming", "/grooming-gallery", "/pricing", "/daycare", "/services", "/faq", "/tour"],
};
