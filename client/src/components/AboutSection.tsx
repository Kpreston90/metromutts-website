/*
 * Metro Mutts About Section
 * Design: Two-column with image collage and company story
 * Values grid with icons, teal/amber palette
 */
import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every facility is designed with your dog's safety as the top priority. From secure play areas to trained staff, we leave nothing to chance.",
  },
  {
    icon: Heart,
    title: "Genuine Love",
    description: "Our team members aren't just employees — they're passionate dog lovers who treat every pup like their own.",
  },
  {
    icon: Sparkles,
    title: "Premium Care",
    description: "We invest in the best facilities, products, and training to ensure your dog receives nothing but the highest quality care.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're more than a business — we're a community of dog lovers dedicated to making life better for dogs and their families.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                  alt="Happy dogs running together"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-xl shadow-black/10 border border-black/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.97_0.02_195)] flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[oklch(0.55_0.14_195)]" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[oklch(0.20_0.02_260)]">15+</div>
                    <div className="text-sm text-[oklch(0.50_0.02_260)] font-medium">Years of Love</div>
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-[oklch(0.55_0.14_195)]" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[oklch(0.97_0.02_195)] text-[oklch(0.55_0.14_195)] text-sm font-bold mb-4 tracking-wide uppercase">
              About Metro Mutts
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[oklch(0.20_0.02_260)] tracking-tight mb-6 leading-tight">
              Born From a Love{" "}
              <span className="text-[oklch(0.55_0.14_195)]">of Dogs</span>
            </h2>
            <p className="text-[oklch(0.45_0.02_260)] text-lg leading-relaxed mb-5">
              Metro Mutts was founded in 2011 with a simple mission: to create the kind of dog care we'd want for our own pups. What started as a single daycare facility has grown into the metro area's most trusted name in dog care.
            </p>
            <p className="text-[oklch(0.45_0.02_260)] text-base leading-relaxed mb-8">
              Every decision we make — from the products we use to the staff we hire — is guided by one question: "Is this what's best for the dogs?" That commitment to excellence is why thousands of families trust us with their furry family members every day.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[oklch(0.97_0.02_195)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[oklch(0.55_0.14_195)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[oklch(0.20_0.02_260)] mb-1">{value.title}</h4>
                      <p className="text-sm text-[oklch(0.50_0.02_260)] leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
