/*
 * Metro Mutts Stats Section
 * Design: Dark background with animated stat counters
 * Wave dividers top and bottom, teal/amber accent numbers
 * Added proper padding to prevent wave overlap with content
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Heart, Users, Award } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: 12,
    suffix: "+",
    label: "Locations",
    color: "oklch(0.55 0.14 195)",
  },
  {
    icon: Heart,
    value: 10000,
    suffix: "+",
    label: "Happy Dogs Served",
    color: "oklch(0.77 0.17 75)",
    format: true,
  },
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Trained Staff",
    color: "oklch(0.55 0.14 195)",
  },
  {
    icon: Award,
    value: 15,
    suffix: "",
    label: "Years of Excellence",
    color: "oklch(0.77 0.17 75)",
  },
];

function AnimatedCounter({ value, suffix, format }: { value: number; suffix: string; format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue = format ? count.toLocaleString() : count;

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative mt-16 mb-16">
      {/* Top wave */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 36C672 40 768 48 864 52C960 56 1056 56 1152 48C1248 40 1344 24 1392 16L1440 8V80H0Z" fill="oklch(0.20 0.02 260)" />
        </svg>
      </div>

      {/* Dark background */}
      <div className="bg-[oklch(0.20_0.02_260)] py-20 lg:py-24">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              The Metro Area's{" "}
              <span className="text-[oklch(0.77_0.17_75)]">Most Trusted</span>{" "}
              Dog Care
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `color-mix(in oklch, ${stat.color} 20%, transparent)` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div
                    className="text-4xl lg:text-5xl font-extrabold mb-2"
                    style={{ color: stat.color }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} format={stat.format} />
                  </div>
                  <div className="text-white/70 font-medium text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 36C672 40 768 48 864 52C960 56 1056 56 1152 48C1248 40 1344 24 1392 16L1440 8V80H0Z" fill="oklch(0.20 0.02 260)" />
        </svg>
      </div>
    </section>
  );
}
