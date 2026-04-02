/*
 * Metro Mutts Contact Section
 * Brand: Green #48D597, Dark #345460
 * Two-column layout with contact form, location info, and interactive Google Map
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { MapView } from "@/components/Map";

// Metro Mutts exact location: 3321 E 15th St, Tulsa, OK 74104
const METRO_MUTTS_LOCATION = { lat: 36.1404, lng: -95.9508 };

export default function ContactSection() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/book";
  };

  const handleMapReady = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    // Add a custom styled marker for Metro Mutts
    const markerContent = document.createElement("div");
    markerContent.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div style="background:#48D597;color:#345460;padding:8px 14px;border-radius:12px;font-weight:700;font-size:13px;box-shadow:0 4px 12px rgba(0,0,0,0.15);white-space:nowrap;font-family:system-ui,-apple-system,sans-serif;">
          🐾 Metro Mutts
        </div>
        <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #48D597;margin-top:-1px;"></div>
      </div>
    `;

    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: METRO_MUTTS_LOCATION,
      title: "Metro Mutts - 3321 E 15th St, Tulsa, OK 74104",
      content: markerContent,
    });
  }, []);

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=3321+E+15th+St+Tulsa+OK+74104`,
      "_blank"
    );
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#48D597]/10 text-[#48D597] text-sm font-bold mb-4 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#345460] tracking-tight mb-5">
            Visit Us in{" "}
            <span className="text-[#48D597]">Tulsa</span>
          </h2>
          <p className="text-[#345460]/70 text-lg leading-relaxed">
            Come see our facility and schedule a free meet and greet for your pup.
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
            <h3 className="text-2xl font-extrabold text-[#345460] mb-6">
              Schedule a Free Meet & Greet
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#345460] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48D597]/30 focus:border-[#48D597] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#345460] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48D597]/30 focus:border-[#48D597] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#345460] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48D597]/30 focus:border-[#48D597] transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#345460] focus:outline-none focus:ring-2 focus:ring-[#48D597]/30 focus:border-[#48D597] transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="daycare">Dog Daycare</option>
                    <option value="boarding">Overnight Boarding</option>
                    <option value="grooming">Grooming & Spa</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#345460] mb-2">
                  Tell Us About Your Dog
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#345460] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48D597]/30 focus:border-[#48D597] transition-all resize-none"
                  placeholder="Breed, age, any special needs..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold text-base h-13 shadow-lg shadow-[#48D597]/20 transition-all hover:-translate-y-0.5"
              >
                Book My Free Visit
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </form>
          </motion.div>

          {/* Location sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Location card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-black/5">
              <h4 className="font-extrabold text-lg text-[#345460] mb-4">
                Metro Mutts Tulsa
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-[#345460]/70">
                  <MapPin className="w-4 h-4 text-[#48D597] mt-0.5 flex-shrink-0" />
                  3321 E 15th St, Tulsa, OK 74104
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#345460]/70">
                  <Phone className="w-4 h-4 text-[#48D597] flex-shrink-0" />
                  <a href="tel:5398673841" className="hover:text-[#48D597] transition-colors">
                    539-867-3841
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#345460]/70">
                  <Mail className="w-4 h-4 text-[#48D597] flex-shrink-0" />
                  <a href="mailto:info@metromutts.com" className="hover:text-[#48D597] transition-colors">
                    info@metromutts.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#345460]/70">
                  <Clock className="w-4 h-4 text-[#48D597] mt-0.5 flex-shrink-0" />
                  <div>
                    <div>Mon–Fri: 7:00 AM – 6:00 PM</div>
                    <div>Sat–Sun: 9:00 AM – 5:00 PM</div>
                  </div>
                </div>
              </div>
              {/* Get Directions button */}
              <button
                onClick={handleGetDirections}
                className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#345460] text-white text-sm font-semibold hover:bg-[#2a4550] transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </button>
            </div>

            {/* Interactive Google Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-black/5">
              <MapView
                className="w-full h-[250px]"
                initialCenter={METRO_MUTTS_LOCATION}
                initialZoom={15}
                onMapReady={handleMapReady}
              />
            </div>

            {/* General contact */}
            <div className="bg-[#48D597] rounded-2xl p-6 text-[#345460]">
              <h4 className="font-extrabold text-lg mb-3">Questions?</h4>
              <p className="text-[#345460]/80 text-sm mb-4">
                Give us a call or send an email — we'd love to hear from you!
              </p>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm font-medium">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:5398673841">539-867-3841</a>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@metromutts.com">info@metromutts.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
