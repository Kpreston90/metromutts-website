/*
 * Metro Mutts Hero Section
 * Design: Full-width hero with overlay, animated text, wave SVG divider
 * Teal + amber palette, Plus Jakarta Sans 800 for heading
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/hero-dogs-playing-WhNjeKqRt7taus9vUJRgtp.webp";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Happy dogs playing at Metro Mutts daycare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.02_260)]/90 via-[oklch(0.15_0.02_260)]/70 to-[oklch(0.15_0.02_260)]/40" />
      </div>

      {/* Content */}
      <div className="relative container py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.77_0.17_75)]/20 text-[oklch(0.90_0.10_85)] text-sm font-semibold mb-6 border border-[oklch(0.77_0.17_75)]/30">
              <Play className="w-3.5 h-3.5 fill-current" />
              The City's Favorite Dog Care
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Where Every Dog{" "}
            <span className="text-[oklch(0.77_0.17_75)]">Lives Their</span>{" "}
            Best Life
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Award-winning daycare, luxury boarding, professional grooming, and expert training — all under one roof. Your pup deserves the best, and we deliver it every single day.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Button
              size="lg"
              className="bg-[oklch(0.77_0.17_75)] hover:bg-[oklch(0.72_0.17_75)] text-[oklch(0.20_0.02_260)] font-bold text-base px-8 h-13 shadow-xl shadow-amber-500/25 transition-all hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Free Visit
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 h-13 bg-transparent"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[oklch(0.55_0.14_195)] border-2 border-[oklch(0.15_0.02_260)] flex items-center justify-center text-white text-xs font-bold">
                    {["🐕","🐩","🐶","🐾"][i-1]}
                  </div>
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">10,000+ happy pups</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[oklch(0.77_0.17_75)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">4.9/5 rating</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 40L48 35C96 30 192 20 288 18C384 16 480 22 576 30C672 38 768 48 864 50C960 52 1056 46 1152 38C1248 30 1344 20 1392 15L1440 10V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z" fill="oklch(0.995 0.002 90)" />
        </svg>
      </div>
    </section>
  );
}
