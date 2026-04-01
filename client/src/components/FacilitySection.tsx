/*
 * Metro Mutts Facility Section
 * Showcases the 3 branded facility photos (indoor, outdoor, boarding suites)
 * Clean grid layout
 */

const INDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-2000sqft-play-area_541f1676.png";
const OUTDOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-outdoor-play-area_062d0fc7.png";
const BOARDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-boarding-suites_465c23e3.png";

const facilities = [
  {
    image: INDOOR_IMG,
    title: "2,000 Sq Ft Indoor Play Area",
    description: "Climate-controlled indoor turf play area where dogs can run, play, and socialize safely year-round.",
  },
  {
    image: OUTDOOR_IMG,
    title: "2,000 Sq Ft Outdoor Play Area",
    description: "Spacious outdoor turf area with fresh air and sunshine for dogs who love the great outdoors.",
  },
  {
    image: BOARDING_IMG,
    title: "Spacious Overnight Boarding Suites",
    description: "Comfortable, clean boarding suites where your pup can relax after a full day of play.",
  },
];

export default function FacilitySection() {
  return (
    <section id="facility" className="bg-white py-16 lg:py-24">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-[#48D597] font-bold text-lg uppercase tracking-wider mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Facility
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#345460] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Where the Fun Happens
          </h2>
        </div>

        {/* Facility cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {facilities.map((facility) => (
            <div key={facility.title} className="group">
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3
                className="text-lg font-bold text-[#345460] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {facility.title}
              </h3>
              <p className="text-[#32302F]/70 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
