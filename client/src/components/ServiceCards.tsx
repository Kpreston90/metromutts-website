/*
 * Metro Mutts Service Cards — Dogtopia-style
 * Two cards side by side: Daycare + Boarding
 * Each: circle icon, photo, title, short description, outline CTA
 * Matches Dogtopia's service cards section exactly
 */
import { Sun, Moon } from "lucide-react";

const DAYCARE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-dogs-daycare-play_cff457d0.jpeg";
const BOARDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-boarding-suites_465c23e3.png";

const services = [
  {
    icon: Sun,
    title: "DAYCARE",
    description:
      "Your dog will love playing all day with like-minded furry friends in our safe and supervised playrooms.",
    cta: "explore our daycare",
    href: "#services",
    image: DAYCARE_IMG,
  },
  {
    icon: Moon,
    title: "BOARDING",
    description:
      "We're the perfect home away from home for your dog when they need a sleepover stay.",
    cta: "more on boarding",
    href: "#services",
    image: BOARDING_IMG,
  },
];

export default function ServiceCards() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center">
              {/* Circle icon — like Dogtopia's orange circles */}
              <div className="w-20 h-20 rounded-full bg-[#48D597] flex items-center justify-center mb-6 shadow-lg">
                <service.icon className="w-9 h-9 text-white" strokeWidth={2} />
              </div>

              {/* Photo */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-black text-[#345460] mb-3 tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#32302F]/70 leading-relaxed mb-6 max-w-sm italic">
                {service.description}
              </p>

              {/* CTA — outline style like Dogtopia */}
              <a
                href={service.href}
                className="inline-flex items-center gap-2 border-2 border-[#48D597] text-[#48D597] px-6 py-3 rounded font-bold text-sm hover:bg-[#48D597] hover:text-white transition-colors"
              >
                {service.cta} &rsaquo;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
