/*
 * Metro Mutts Footer — Dogtopia-style
 * Dark background
 * Left: brand info + storefront photo + contact (replaces Dogtopia's app promo)
 * Right: 4 link columns
 * Bottom: legal bar with social icons
 */
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-logo-white_a0eef0bd.png";
const STOREFRONT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-storefront-exterior_2b8736e6.jpeg";

const linkColumns = [
  {
    title: "SERVICES",
    links: [
      { label: "Daycare", href: "#services" },
      { label: "Boarding", href: "#services" },
      { label: "Grooming", href: "#services" },
    ],
  },
  {
    title: "OUR FACILITY",
    links: [
      { label: "Indoor Play Area", href: "#facility" },
      { label: "Outdoor Play Area", href: "#facility" },
      { label: "Boarding Suites", href: "#facility" },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Our Team", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#contact" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "Schedule a Visit", href: "#contact" },
      { label: "General Inquiries", href: "#contact" },
      { label: "Careers", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2a3a42]">
      <div className="container py-14 lg:py-20">
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-12 lg:gap-16">
          {/* Left — brand info + storefront */}
          <div>
            <p
              className="text-[#48D597] font-bold text-sm uppercase tracking-wider mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Visit Us At
            </p>
            <h3
              className="text-2xl lg:text-3xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Metro Mutts Tulsa
            </h3>

            {/* Storefront photo */}
            <div className="rounded-lg overflow-hidden mb-6">
              <img
                src={STOREFRONT_IMG}
                alt="Metro Mutts storefront in Tulsa"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-3 text-white/70 text-sm">
              <a href="tel:5398673841" className="flex items-center gap-2 hover:text-[#48D597] transition-colors">
                <Phone className="w-4 h-4 text-[#48D597]" />
                539-867-3841
              </a>
              <a href="mailto:info@metromutts.com" className="flex items-center gap-2 hover:text-[#48D597] transition-colors">
                <Mail className="w-4 h-4 text-[#48D597]" />
                info@metromutts.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#48D597] mt-0.5 shrink-0" />
                <span>Tulsa, Oklahoma</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#48D597] mt-0.5 shrink-0" />
                <span>Mon–Fri 6:30AM–7PM · Sat 8AM–5PM</span>
              </div>
            </div>
          </div>

          {/* Right — link columns like Dogtopia */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h4
                  className="text-[#48D597] font-bold text-sm tracking-wider mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/60 text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal bar — bottom strip like Dogtopia */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-5 gap-4">
          <div className="flex flex-wrap items-center gap-4 text-white/40 text-xs">
            <a href="#" className="hover:text-white/60 transition-colors">privacy notice</a>
            <a href="#" className="hover:text-white/60 transition-colors">terms of use</a>
            <a href="#" className="hover:text-white/60 transition-colors">careers</a>
          </div>
          <div className="flex items-center gap-3 text-white/40 text-xs">
            <span>Metro Mutts &copy; {new Date().getFullYear()}</span>
            <div className="flex gap-3 ml-3">
              <a href="https://www.facebook.com/MetroMuttsTulsa/" target="_blank" rel="noopener noreferrer" className="hover:text-[#48D597] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/metrumutts/" target="_blank" rel="noopener noreferrer" className="hover:text-[#48D597] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
