/*
 * Metro Mutts CTA Section
 * Design: Bold teal background with amber CTA button
 * Paw print decorative elements
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-[oklch(0.50_0.14_195)] via-[oklch(0.55_0.14_195)] to-[oklch(0.48_0.12_200)] py-20 lg:py-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white/5" />
          {/* Paw prints */}
          <svg className="absolute top-8 right-1/4 w-16 h-16 text-white/8 rotate-12" viewBox="0 0 100 100" fill="currentColor">
            <ellipse cx="35" cy="25" rx="12" ry="15" />
            <ellipse cx="65" cy="25" rx="12" ry="15" />
            <ellipse cx="20" cy="50" rx="10" ry="13" />
            <ellipse cx="80" cy="50" rx="10" ry="13" />
            <ellipse cx="50" cy="68" rx="22" ry="20" />
          </svg>
          <svg className="absolute bottom-12 left-1/4 w-12 h-12 text-white/8 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
            <ellipse cx="35" cy="25" rx="12" ry="15" />
            <ellipse cx="65" cy="25" rx="12" ry="15" />
            <ellipse cx="20" cy="50" rx="10" ry="13" />
            <ellipse cx="80" cy="50" rx="10" ry="13" />
            <ellipse cx="50" cy="68" rx="22" ry="20" />
          </svg>
        </div>

        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Ready to Give Your Dog the{" "}
              <span className="text-[oklch(0.84_0.16_85)]">Best Day Ever?</span>
            </h2>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Schedule a free meet and greet today. Tour our facility, meet our team, and see why thousands of dogs (and their humans) love Metro Mutts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-[oklch(0.77_0.17_75)] hover:bg-[oklch(0.72_0.17_75)] text-[oklch(0.20_0.02_260)] font-bold text-base px-8 h-13 shadow-xl shadow-black/15 transition-all hover:-translate-y-0.5"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule a Free Tour
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 h-13 bg-transparent"
                asChild
              >
                <a href="tel:+15551234567">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
