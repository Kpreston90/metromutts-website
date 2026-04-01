/*
 * Metro Mutts Contact Section
 * Design: Two-column layout with contact form and info
 * Teal accents, clean card design
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const locations = [
  {
    name: "Downtown",
    address: "123 Main Street, Suite 100",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 6:30am - 7:00pm | Sat-Sun: 8:00am - 5:00pm",
  },
  {
    name: "Midtown",
    address: "456 Oak Avenue",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 6:30am - 7:00pm | Sat-Sun: 8:00am - 5:00pm",
  },
  {
    name: "Uptown",
    address: "789 Park Boulevard",
    phone: "(555) 345-6789",
    hours: "Mon-Fri: 7:00am - 7:00pm | Sat: 8:00am - 5:00pm",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.", {
      description: "Check your email for a confirmation.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[oklch(0.97_0.005_90)] scroll-mt-20">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[oklch(0.97_0.02_195)] text-[oklch(0.55_0.14_195)] text-sm font-bold mb-4 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[oklch(0.20_0.02_260)] tracking-tight mb-5">
            Find a Location{" "}
            <span className="text-[oklch(0.55_0.14_195)]">Near You</span>
          </h2>
          <p className="text-[oklch(0.45_0.02_260)] text-lg leading-relaxed">
            Visit one of our locations or reach out to schedule a free meet and greet for your pup.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-black/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-extrabold text-[oklch(0.20_0.02_260)] mb-6">
              Schedule a Free Meet & Greet
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.30_0.02_260)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.90_0.005_90)] bg-[oklch(0.98_0.002_90)] text-[oklch(0.20_0.02_260)] placeholder:text-[oklch(0.65_0.02_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.14_195)]/30 focus:border-[oklch(0.55_0.14_195)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.30_0.02_260)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.90_0.005_90)] bg-[oklch(0.98_0.002_90)] text-[oklch(0.20_0.02_260)] placeholder:text-[oklch(0.65_0.02_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.14_195)]/30 focus:border-[oklch(0.55_0.14_195)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.30_0.02_260)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.90_0.005_90)] bg-[oklch(0.98_0.002_90)] text-[oklch(0.20_0.02_260)] placeholder:text-[oklch(0.65_0.02_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.14_195)]/30 focus:border-[oklch(0.55_0.14_195)] transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[oklch(0.30_0.02_260)] mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.90_0.005_90)] bg-[oklch(0.98_0.002_90)] text-[oklch(0.20_0.02_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.14_195)]/30 focus:border-[oklch(0.55_0.14_195)] transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="daycare">Dog Daycare</option>
                    <option value="boarding">Overnight Boarding</option>
                    <option value="grooming">Grooming & Spa</option>
                    <option value="training">Dog Training</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[oklch(0.30_0.02_260)] mb-2">
                  Tell Us About Your Dog
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[oklch(0.90_0.005_90)] bg-[oklch(0.98_0.002_90)] text-[oklch(0.20_0.02_260)] placeholder:text-[oklch(0.65_0.02_260)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.14_195)]/30 focus:border-[oklch(0.55_0.14_195)] transition-all resize-none"
                  placeholder="Breed, age, any special needs..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[oklch(0.55_0.14_195)] hover:bg-[oklch(0.48_0.12_195)] text-white font-bold text-base h-13 shadow-lg shadow-[oklch(0.55_0.14_195)]/20 transition-all hover:-translate-y-0.5"
              >
                Book My Free Visit
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </form>
          </motion.div>

          {/* Locations sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-black/5 hover:shadow-xl transition-shadow"
              >
                <h4 className="font-extrabold text-lg text-[oklch(0.20_0.02_260)] mb-3">
                  Metro Mutts {loc.name}
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-sm text-[oklch(0.45_0.02_260)]">
                    <MapPin className="w-4 h-4 text-[oklch(0.55_0.14_195)] mt-0.5 flex-shrink-0" />
                    {loc.address}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[oklch(0.45_0.02_260)]">
                    <Phone className="w-4 h-4 text-[oklch(0.55_0.14_195)] flex-shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="hover:text-[oklch(0.55_0.14_195)] transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[oklch(0.45_0.02_260)]">
                    <Clock className="w-4 h-4 text-[oklch(0.55_0.14_195)] mt-0.5 flex-shrink-0" />
                    {loc.hours}
                  </div>
                </div>
              </div>
            ))}

            {/* General contact */}
            <div className="bg-[oklch(0.55_0.14_195)] rounded-2xl p-6 text-white">
              <h4 className="font-extrabold text-lg mb-3">General Inquiries</h4>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm text-white/90">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  hello@metrommutts.com
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/90">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (555) 123-4567
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
