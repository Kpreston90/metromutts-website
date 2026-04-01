/*
 * Metro Mutts Testimonials Section
 * Design: Auto-advancing carousel with customer quotes
 * Teal accent, large quotation marks, star ratings
 */
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Downtown Location",
    text: "Metro Mutts has been a game-changer for us. My anxious rescue dog now pulls me toward the door every morning because he can't wait to see his friends. The staff genuinely cares about every single dog, and the facility is always spotless.",
    rating: 5,
    dog: "Max, Golden Retriever",
  },
  {
    name: "James & Lisa T.",
    location: "Midtown Location",
    text: "We've tried three different daycares before finding Metro Mutts, and the difference is night and day. The webcam access gives us peace of mind, and our pup comes home happy and exhausted every single time. Worth every penny.",
    rating: 5,
    dog: "Bella, French Bulldog",
  },
  {
    name: "Dr. Rachel K.",
    location: "Uptown Location",
    text: "As a veterinarian, I'm very particular about where I leave my dogs. Metro Mutts exceeds my standards in every way — from their safety protocols to their staff training. I recommend them to all my clients without hesitation.",
    rating: 5,
    dog: "Cooper & Daisy, Labs",
  },
  {
    name: "Michael P.",
    location: "Westside Location",
    text: "The boarding service is incredible. I travel frequently for work and knowing my dog is getting love, playtime, and the best care possible makes all the difference. The nightly photo updates are such a nice touch!",
    rating: 5,
    dog: "Rocky, German Shepherd",
  },
  {
    name: "Amanda W.",
    location: "Downtown Location",
    text: "The grooming team at Metro Mutts is absolutely phenomenal. My poodle has never looked better, and they're so patient and gentle with her. She actually enjoys going to the groomer now — that says everything!",
    rating: 5,
    dog: "Luna, Standard Poodle",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[oklch(0.97_0.005_90)] scroll-mt-20">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[oklch(0.97_0.02_195)] text-[oklch(0.55_0.14_195)] text-sm font-bold mb-4 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[oklch(0.20_0.02_260)] tracking-tight">
            Loved by Dogs{" "}
            <span className="text-[oklch(0.55_0.14_195)]">& Their Humans</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 sm:p-10 lg:p-14 shadow-xl shadow-black/5 relative"
          >
            {/* Quote icon */}
            <Quote className="w-12 h-12 text-[oklch(0.55_0.14_195)]/15 absolute top-6 right-8" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[oklch(0.77_0.17_75)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-[oklch(0.30_0.02_260)] leading-relaxed font-medium mb-8 italic">
              "{t.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-bold text-[oklch(0.20_0.02_260)] text-lg">{t.name}</div>
                <div className="text-[oklch(0.50_0.02_260)] text-sm">
                  {t.dog} — {t.location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white shadow-md shadow-black/5 flex items-center justify-center hover:bg-[oklch(0.97_0.02_195)] transition-colors border border-black/5"
            >
              <ChevronLeft className="w-5 h-5 text-[oklch(0.30_0.02_260)]" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-[oklch(0.55_0.14_195)]"
                      : "w-2.5 bg-[oklch(0.55_0.14_195)]/20 hover:bg-[oklch(0.55_0.14_195)]/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white shadow-md shadow-black/5 flex items-center justify-center hover:bg-[oklch(0.97_0.02_195)] transition-colors border border-black/5"
            >
              <ChevronRight className="w-5 h-5 text-[oklch(0.30_0.02_260)]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
