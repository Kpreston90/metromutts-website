/*
 * Metro Mutts Founder Spotlight — Kyle Gillum
 * Brand: Green #48D597, Dark #345460
 * Matches site style: light bg, two-column layout, rounded cards, motion
 */
import { motion } from "framer-motion";
import { Award, TrendingUp, History, PawPrint } from "lucide-react";

const KYLE_HEADSHOT =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/kyle-headshot_1c72e339.png";

const highlights = [
  {
    icon: History,
    title: "100+ Year Legacy",
    description:
      "Four generations of animal care leadership — from his great-grandfather's Barber & Lundberg veterinarian supply business to today.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "Founded 9th St. Barking Lot in OKC in 2016 — broke even in 9 months, now averages 120 dogs/day with a 6-month wait list.",
  },
  {
    icon: Award,
    title: "Industry Roots",
    description:
      "His father, grandfather, and great-grandfather all served as chief executives of NLS Animal Health (now Schien Pharmaceuticals).",
  },
  {
    icon: PawPrint,
    title: "Dog Dad",
    description:
      "Lives with his wife Lizzie, three daughters, and their dogs — Sam, Patty, and Bernie.",
  },
];

export default function FounderSpotlight() {
  return (
    <section className="py-20 lg:py-28 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#48D597]/10 text-[#48D597] text-sm font-bold mb-4 tracking-wide uppercase">
              Meet the Founder
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#345460] tracking-tight mb-6 leading-tight">
              Four Generations of{" "}
              <span className="text-[#48D597]">Animal Care</span>
            </h2>
            <p className="text-[#345460]/70 text-lg leading-relaxed mb-5">
              For Kyle Gillum, caring for animals isn't just a career — it's a
              family legacy spanning more than a century. As Co-Founder and
              Executive Director of Operations Management, Kyle brings the same
              passion and proven expertise that made{" "}
              <span className="font-semibold text-[#345460]">
                9th St. Barking Lot
              </span>{" "}
              in downtown Oklahoma City one of the most sought-after dog care
              facilities in the state.
            </p>
            <p className="text-[#345460]/70 text-base leading-relaxed mb-8">
              Metro Mutts is the natural next chapter — a sister location
              bringing that same standard of care to Tulsa. Kyle holds a B.A.
              from Principia University, where he played football, and an M.A.
              in Diplomacy from Norwich University.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#48D597]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#345460] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#345460]/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative">
              {/* Main headshot */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10 max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <img
                  src={KYLE_HEADSHOT}
                  alt="Kyle Gillum, Co-Founder and Executive Director of Metro Mutts"
                  className="w-full aspect-square object-cover object-top"
                />
              </div>
              {/* Floating name card */}
              <div className="absolute -bottom-6 left-4 lg:left-0 bg-white rounded-2xl p-5 shadow-xl shadow-black/10 border border-black/5">
                <h3 className="text-lg font-extrabold text-[#345460]">
                  Kyle Gillum
                </h3>
                <p className="text-sm text-[#345460]/60 font-medium">
                  Co-Founder &amp; Executive Director
                </p>
              </div>
              {/* Floating stat card */}
              <div className="absolute -top-4 -right-2 lg:-right-6 bg-white rounded-2xl p-4 shadow-xl shadow-black/10 border border-black/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#48D597]" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-[#345460]">
                      120/day
                    </div>
                    <div className="text-xs text-[#345460]/60 font-medium">
                      Dogs at 9th St.
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#48D597]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
