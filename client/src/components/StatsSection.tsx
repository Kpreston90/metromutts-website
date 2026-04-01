/*
 * Metro Mutts Stats Section
 * Brand: Green #48D597, Dark #345460
 * Dark background with animated stat counters, wave dividers
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Maximize, Heart, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Maximize,
    value: 4000,
    suffix: "+",
    label: "Sq Ft of Play Space",
    color: "#48D597",
    format: true,
  },
  {
    icon: Heart,
    value: 500,
    suffix: "+",
    label: "Happy Dogs Served",
    color: "#48D597",
    format: false,
  },
  {
    icon: Users,
    value: 15,
    suffix: "+",
    label: "Trained Staff",
    color: "#48D597",
    format: false,
  },
  {
    icon: Award,
    value: 5,
    suffix: "",
    label: "Star Rating",
    color: "#48D597",
    format: false,
  },
];

function AnimatedCounter({ value, suffix, format }: { value: number; suffix: string; format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();
    let rafId: number;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
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
          <path d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 36C672 40 768 48 864 52C960 56 1056 56 1152 48C1248 40 1344 24 1392 16L1440 8V80H0Z" fill="#345460" />
        </svg>
      </div>

      {/* Dark background */}
      <div className="bg-[#345460] py-20 lg:py-24">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Tulsa's{" "}
              <span className="text-[#48D597]">Most Trusted</span>{" "}
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
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[#48D597]/20">
                    <Icon className="w-8 h-8 text-[#48D597]" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold mb-2 text-[#48D597]">
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
          <path d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 36C672 40 768 48 864 52C960 56 1056 56 1152 48C1248 40 1344 24 1392 16L1440 8V80H0Z" fill="#345460" />
        </svg>
      </div>
    </section>
  );
}
