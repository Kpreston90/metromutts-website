/*
 * Metro Mutts Testimonials — Dogtopia-style
 * Dark background, white italic quote text, customer name
 * Simple carousel/switcher
 * Matches Dogtopia's testimonial section
 */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Everyone on the team at Metro Mutts is super-friendly, and they all clearly love what they do. My dog always seems so happy to see them, and it's obvious that he has a great time with all his four-legged pals! With my demanding schedule, I'm very grateful to have Metro Mutts as a reliable resource.",
    name: "Sarah M.",
    location: "Tulsa, OK",
  },
  {
    quote:
      "We've been bringing our two dogs here for over a year now. The staff is extremely friendly and knowledgeable. They always go above and beyond to make sure our pups are comfortable and having fun. I wouldn't trust anyone else with our fur babies!",
    name: "Jason & Emily R.",
    location: "Tulsa, OK",
  },
  {
    quote:
      "Metro Mutts is hands down the best daycare in Tulsa. The facility is clean, spacious, and the staff genuinely cares about every dog. My golden retriever practically drags me through the door every morning. I can't recommend them enough!",
    name: "David K.",
    location: "Tulsa, OK",
  },
];

export default function TestimonialsBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="bg-[#3a5a66] py-16 lg:py-20">
      <div className="container max-w-4xl text-center relative">
        <Quote className="w-10 h-10 text-[#48D597]/40 mx-auto mb-6" />

        {/* Quote */}
        <blockquote className="text-white text-lg lg:text-xl leading-relaxed italic mb-8 min-h-[120px]">
          "{t.quote}" –{" "}
          <span className="not-italic font-bold">{t.name}</span>
        </blockquote>

        {/* Location link — green like Dogtopia */}
        <a href="#contact" className="text-[#48D597] font-bold text-sm hover:underline">
          Metro Mutts of {t.location}
        </a>

        {/* Nav arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-[#48D597]" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
