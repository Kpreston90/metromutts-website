/*
 * Metro Mutts Gallery / Life at Metro Mutts — Dogtopia "Dog Blog" equivalent
 * Left: green subhead + dark heading + paragraph
 * Right: fun illustration/graphic (we use a photo collage approach)
 * Below: 4 photo cards in a row
 * Matches Dogtopia's blog section layout
 */

const PHOTO_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-dogs-playing-turf_ef6e3775.jpeg";
const PHOTO_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-dog-pool-fun_29f2f81d.jpeg";
const PHOTO_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-golden-retriever-happy_7ff34448.jpeg";
const PHOTO_4 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-indoor-fenced-area_22e1dddf.jpeg";

const photos = [
  { src: PHOTO_1, caption: "Playtime on the Turf" },
  { src: PHOTO_2, caption: "Splash Pool Fun" },
  { src: PHOTO_3, caption: "Happy Pups Every Day" },
  { src: PHOTO_4, caption: "Safe & Supervised Play" },
];

export default function GallerySection() {
  return (
    <section className="bg-[#f7f7f5] py-16 lg:py-24">
      <div className="container">
        {/* Header area — two column like Dogtopia's blog header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-14">
          <div>
            <p
              className="text-[#48D597] font-bold text-lg uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Life at
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#345460] leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Metro Mutts
            </h2>
            <p className="text-[#32302F]/70 text-lg leading-relaxed max-w-md">
              At Metro Mutts, we're a unique breed. We love and care for your pup like
              they are our own. With our daycare, boarding, and grooming services,
              you'll be treating your pup to their most exciting day ever!
            </p>
          </div>

          {/* Right side — fun tagline like Dogtopia's illustration */}
          <div className="text-right hidden lg:block">
            <p className="text-[#345460] text-lg font-medium mb-1">Where every day is</p>
            <p
              className="text-5xl xl:text-6xl font-black text-[#345460] uppercase leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Most
            </p>
            <p
              className="text-5xl xl:text-6xl font-black text-[#48D597] uppercase leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Exciting
            </p>
            <p
              className="text-4xl xl:text-5xl italic text-[#345460]/60"
              style={{ fontFamily: "Georgia, serif" }}
            >
              day ever!
            </p>
          </div>
        </div>

        {/* Photo grid — 4 cards like Dogtopia's blog cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {photos.map((photo) => (
            <div key={photo.caption} className="group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-[#345460] font-bold text-sm">{photo.caption}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
