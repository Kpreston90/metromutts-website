/*
 * Metro Mutts Intro Section — Dogtopia-style
 * Two-column: Left = green subhead + large black heading + paragraph + CTA
 * Right = photo of staff with dogs
 * Matches Dogtopia's "Dogs fill our lives with joy" section
 */

const STAFF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-staff-with-dogs_2c5ab082.jpeg";

export default function IntroSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            <p
              className="text-[#48D597] font-bold text-lg uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dogs fill our lives with joy.
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-[#345460] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              It's time to repay the favor.
            </h2>
            <p className="text-[#32302F]/80 text-lg leading-relaxed mb-8 max-w-lg">
              We've created a loving place with dogs' wants and needs in mind. We offer
              everything your furry family member requires — from award-winning daycare
              and overnight boarding to professional grooming. Our trained staff will love
              and care for your pup like they are our own. You can trust your dog will
              come home overjoyed — and most likely overtired — from all the excitement
              of the day.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-[#48D597] text-[#48D597] px-6 py-3 rounded font-bold text-sm hover:bg-[#48D597] hover:text-[#345460] transition-colors"
            >
              find us &rsaquo;
            </a>

            {/* Decorative script text — like Dogtopia's "endless love" */}
            <div className="mt-10">
              <p
                className="text-[#48D597]/30 text-6xl lg:text-7xl italic font-light select-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                endless love
              </p>
              <p
                className="text-[#345460] text-2xl lg:text-3xl font-black uppercase tracking-wider -mt-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Trusted Support
              </p>
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative">
            <img
              src={STAFF_IMG}
              alt="Metro Mutts staff caring for dogs"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
