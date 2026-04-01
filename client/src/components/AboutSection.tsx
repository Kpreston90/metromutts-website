/*
 * Metro Mutts About Section
 * Two-column: aerial photo left, text right
 * Clean layout matching Dogtopia's style
 */

const AERIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-aerial-building-tulsa_db8a7bcb.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f7f7f5] py-16 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <img
              src={AERIAL_IMG}
              alt="Aerial view of Metro Mutts facility in Tulsa"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p
              className="text-[#48D597] font-bold text-lg uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Us
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#345460] leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tulsa's Trusted Dog Care
            </h2>
            <p className="text-[#32302F]/80 text-lg leading-relaxed mb-6">
              Metro Mutts was founded with a simple mission: to provide Tulsa's dogs with
              the highest quality care in a safe, fun, and enriching environment. Our
              state-of-the-art facility features over 4,000 square feet of indoor and
              outdoor play space, spacious boarding suites, and a dedicated team of
              dog-loving professionals.
            </p>
            <p className="text-[#32302F]/80 text-lg leading-relaxed mb-8">
              Whether your pup needs a full day of socialization, overnight boarding, or
              a fresh grooming session, we treat every dog like family. Located
              conveniently in Tulsa, we make drop-off and pick-up easy for busy pet parents.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-[#48D597] text-[#48D597] px-6 py-3 rounded font-bold text-sm hover:bg-[#48D597] hover:text-[#345460] transition-colors"
            >
              schedule a visit &rsaquo;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
