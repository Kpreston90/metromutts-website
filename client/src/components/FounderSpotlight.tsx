/*
 * Metro Mutts Founder Spotlight — Kyle Gillum
 * Brand: Green #48D597, Dark #345460
 * Narrative section with real portrait, bio, and 9th St. Barking Lot connection
 */
import { motion } from "framer-motion";

const FOUNDER_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/kyle-gillum-real_127bdd33.png";

export default function FounderSpotlight() {
  return (
    <section className="py-20 lg:py-28 bg-[#345460] text-white overflow-hidden">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#48D597]/15 text-[#48D597] text-sm font-bold mb-4 tracking-wide uppercase">
            Meet the Founder
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            Four Generations of{" "}
            <span className="text-[#48D597]">Animal Care</span>
          </h2>
        </motion.div>

        {/* Two-column: portrait + bio */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Portrait side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Green accent bar */}
              <div className="absolute -left-3 top-6 bottom-6 w-1.5 rounded-full bg-[#48D597]" />
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Kyle Gillum, Co-Founder and Executive Director of Metro Mutts"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
              {/* Name card overlay */}
              <div className="absolute -bottom-5 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <h3 className="text-xl font-extrabold text-[#345460]">
                  Kyle Gillum
                </h3>
                <p className="text-sm text-[#345460]/70 font-medium">
                  Co-Founder &amp; Executive Director, Operations Management
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio side */}
          <motion.div
            className="lg:pt-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-white/85 text-lg leading-relaxed mb-6">
              For Kyle Gillum, caring for animals isn't just a career — it's a
              family legacy spanning more than a century. His great-grandfather
              founded Barber &amp; Lundberg, Inc., a lumber and veterinarian supply
              business. His grandfather carried on the tradition, and his father
              scaled it into{" "}
              <span className="text-[#48D597] font-semibold">
                NLS Animal Health
              </span>
              , a national animal health supply distributor now owned by Schien
              Pharmaceuticals. With his father, grandfather, and
              great-grandfather all serving as chief executives, the commitment
              to animal welfare runs deep.
            </p>
            <p className="text-white/85 text-lg leading-relaxed mb-6">
              In 2016, Kyle channeled that heritage into{" "}
              <span className="text-[#48D597] font-semibold">
                9th St. Barking Lot
              </span>{" "}
              in downtown Oklahoma City. The facility broke even within its first
              nine months, now averages 120 dogs per day, and maintains a
              six-month wait list — proof that when you build something with
              genuine care, people notice.
            </p>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Metro Mutts is the natural next chapter: a sister location bringing
              that same proven standard of care to Tulsa. Kyle holds a B.A. from
              Principia University — where he also played football — and an M.A.
              in Diplomacy from Norwich University. He lives in Oklahoma City
              with his wife Lizzie, their three daughters, and their dogs: Sam (a
              Labradoodle rescue), Patty (a feisty Chihuahua rescue), and Bernie
              (a Parti Poodle).
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-[#48D597]">
                  100+
                </div>
                <div className="text-xs text-white/60 font-medium mt-1">
                  Years of Family Legacy
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-[#48D597]">
                  120
                </div>
                <div className="text-xs text-white/60 font-medium mt-1">
                  Dogs/Day at 9th St.
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-[#48D597]">
                  4 Gen
                </div>
                <div className="text-xs text-white/60 font-medium mt-1">
                  Of Animal Care Leaders
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
