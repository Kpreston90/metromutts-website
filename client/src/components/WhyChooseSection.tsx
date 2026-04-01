/*
 * Metro Mutts "Why Choose Us" Section
 * Design: Feature cards in a grid with icons
 * Positioned between hero and services
 */
import { motion } from "framer-motion";
import { Camera, ShieldCheck, Stethoscope, Clock, Smile, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety Certified",
    description: "All facilities meet or exceed state safety standards with secure entry, fire suppression, and 24/7 monitoring.",
  },
  {
    icon: Camera,
    title: "Live Webcams",
    description: "Watch your pup play in real-time from anywhere. Our HD webcams stream directly to your phone.",
  },
  {
    icon: Stethoscope,
    title: "Vet on Call",
    description: "Partnered with local veterinarians for immediate care. Your dog's health is always our priority.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Early drop-off and late pick-up options to fit your busy schedule. Open 7 days a week.",
  },
  {
    icon: Smile,
    title: "Trained Team",
    description: "Every team member is pet first-aid certified and undergoes extensive behavior training.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Voted 'Best Dog Care' for 5 consecutive years by the Metro Area Pet Owners Association.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[oklch(0.97_0.02_85)] text-[oklch(0.65_0.15_75)] text-sm font-bold mb-4 tracking-wide uppercase">
            Why Metro Mutts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[oklch(0.20_0.02_260)] tracking-tight mb-5">
            The <span className="text-[oklch(0.77_0.17_75)]">Metro Mutts</span> Difference
          </h2>
          <p className="text-[oklch(0.45_0.02_260)] text-lg leading-relaxed">
            We go above and beyond to ensure every dog in our care has the safest, happiest, and most enriching experience possible.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group bg-white rounded-2xl p-7 shadow-sm shadow-black/5 border border-black/5 hover:shadow-xl hover:shadow-[oklch(0.55_0.14_195)]/8 hover:border-[oklch(0.55_0.14_195)]/20 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="w-13 h-13 rounded-2xl bg-[oklch(0.97_0.02_195)] group-hover:bg-[oklch(0.55_0.14_195)] flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[oklch(0.55_0.14_195)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[oklch(0.20_0.02_260)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[oklch(0.50_0.02_260)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
