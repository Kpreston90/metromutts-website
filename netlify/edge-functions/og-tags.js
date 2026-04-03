const OG_DATA = {
  "/boarding": {
    title: "Dog Boarding in Tulsa | $50/Night | Metro Mutts",
    description: "Your dog's home away from home. Spacious suites, daily play sessions, overnight staff check-ins. $50/night. Call 539-867-3841.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/og-boarding-A8KWr35xjcZ99ZqWf8A6Sr.png",
    url: "https://www.metromutts.com/boarding",
  },
  "/grooming": {
    title: "Dog Grooming in Tulsa | Starting at $30 | Metro Mutts",
    description: "Professional dog grooming by Jacque. Baths, breed cuts, full spa treatments. Starting at $30. Call 539-867-3841 to book.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/og-grooming-FkNBjx9i9Ut6LrNjgZq9Qz.png",
    url: "https://www.metromutts.com/grooming",
  },
  "/grooming-gallery": {
    title: "Grooming Gallery | 30+ Photos | Metro Mutts Tulsa",
    description: "Browse 30+ photos of freshly groomed pups by our in-house groomer Jacque. Doodles, poodles, schnauzers, and more.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/og-gallery-W9MY8CxQfZgYbNfdMQBb9u.png",
    url: "https://www.metromutts.com/grooming-gallery",
  },
  "/pricing": {
    title: "Pricing | Daycare, Boarding & Grooming | Metro Mutts",
    description: "Daycare from $21/day. Boarding $50/night. Grooming from $30. View all Metro Mutts pricing. Tulsa, OK.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/og-homepage-BgNMUf5cGEkMLKRdunv64P.png",
    url: "https://www.metromutts.com/pricing",
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
  path: ["/boarding", "/grooming", "/grooming-gallery", "/pricing"],
};
