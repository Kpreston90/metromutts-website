/*
 * Metro Mutts Meet the Team Section
 * Brand: Green #48D597, Dark #345460
 * Features Jacque's profile with "coming soon" placeholders for other staff
 */
import { motion } from "framer-motion";
import { Scissors, Dog, Heart, UserPlus } from "lucide-react";

const JACQUE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/jacque-portrait-v3_d7a92609.png";

const teamMembers = [
  {
    name: "Jacque",
    role: "Lead Groomer",
    image: JACQUE_IMG,
    bio: "With years of professional grooming experience across all breeds and sizes, Jacque brings skill, patience, and genuine love for dogs to every appointment. From doodle teddy bear cuts to breed-specific styling, she'll have your pup looking and feeling their absolute best.",
    icon: Scissors,
    comingSoon: false,
  },
  {
    name: "Coming Soon",
    role: "Daycare Attendant",
    image: null,
    bio: "We're growing our team! Check back soon to meet our amazing daycare staff who keep your pups happy, safe, and entertained all day long.",
    icon: Dog,
    comingSoon: true,
  },
  {
    name: "Coming Soon",
    role: "Boarding Specialist",
    image: null,
    bio: "Our boarding team ensures every overnight guest gets the comfort, care, and attention they deserve. Profiles coming soon!",
    icon: Heart,
    comingSoon: true,
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 lg:py-28 bg-[oklch(0.97_0.003_90)]">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48D597]/10 text-[#48D597] text-sm font-bold mb-4 tracking-wide uppercase">
            <UserPlus className="w-4 h-4" />
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#345460] tracking-tight mb-5">
            Meet the{" "}
            <span className="text-[#48D597]">Metro Mutts</span> Crew
          </h2>
          <p className="text-[#345460]/60 text-lg leading-relaxed">
            Our passionate team of dog lovers is what makes Metro Mutts special.
            Every member is dedicated to giving your pup the best care possible.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-black/5 ${
                  member.comingSoon ? "opacity-80" : ""
                }`}
              >
                {/* Photo or placeholder */}
                <div className="relative h-64 overflow-hidden bg-[#345460]/5">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Metro Mutts`}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#345460]/5 to-[#48D597]/5">
                      <div className="w-20 h-20 rounded-full bg-[#345460]/8 flex items-center justify-center mb-3">
                        <Icon className="w-9 h-9 text-[#345460]/25" />
                      </div>
                      <span className="text-[#345460]/30 text-sm font-medium">
                        Photo Coming Soon
                      </span>
                    </div>
                  )}
                  {/* Role badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#345460] shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-[#48D597]" />
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#345460] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#345460]/55 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Coming soon overlay badge */}
                {member.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#48D597]/15 text-[#48D597] text-xs font-bold">
                      Coming Soon
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Hiring CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-[#345460]/40 text-sm mb-3">
            Want to join our team?
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#345460]/15 text-[#345460] font-semibold text-sm hover:bg-[#345460]/5 transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
