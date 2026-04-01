/*
 * Metro Mutts Stats Bar — Dogtopia-style
 * Dark slate/teal background
 * Bold heading + 3 stats with line icons and green numbers
 * Matches Dogtopia's "Largest provider of dog daycare" section
 */
import { MapPin, Heart, Users } from "lucide-react";

const stats = [
  { icon: MapPin, value: "4,000+", label: "Sq Ft of Play Space" },
  { icon: Heart, value: "100%", label: "Happy Dogs Every Day" },
  { icon: Users, value: "LIFETIME", label: "Friendships" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#345460] py-16 lg:py-20">
      <div className="container text-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white leading-tight mb-14 uppercase tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Tulsa's Premier Dog Daycare<br className="hidden sm:block" /> & Boarding Facility
        </h2>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <stat.icon className="w-12 h-12 text-white/60 mb-4" strokeWidth={1.2} />
              <div
                className="text-4xl lg:text-5xl font-black text-[#48D597] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/80 font-medium text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
