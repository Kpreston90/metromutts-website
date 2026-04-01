/*
 * Metro Mutts Navbar — Dogtopia-style two-tier navigation
 * Tier 1: White utility bar with small links (hides on scroll)
 * Tier 2: Green (#48D597) main nav bar with dark text, blue CTA
 * Mirrors Dogtopia's orange nav bar pattern
 */
import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-logo-dark_455bad7b.png";

const navLinks = [
  { label: "our services", href: "#services" },
  { label: "our facility", href: "#facility" },
  { label: "about", href: "#about" },
  { label: "testimonials", href: "#testimonials" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Utility bar — Dogtopia-style top white bar */}
      <div className={`bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${scrolled ? "max-h-0" : "max-h-12"}`}>
        <div className="container flex items-center justify-between py-2 text-xs text-[#345460]/70">
          <div className="flex items-center gap-5">
            <a href="tel:5398673841" className="flex items-center gap-1.5 hover:text-[#48D597] transition-colors">
              <Phone className="w-3 h-3" />
              539-867-3841
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Tulsa, Oklahoma
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              Mon–Fri 6:30AM–7PM · Sat 8AM–5PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-[#48D597] transition-colors">book a visit</a>
            <a href="#about" className="hidden sm:inline hover:text-[#48D597] transition-colors">refer a friend</a>
            <a
              href="#contact"
              className="bg-[#345460] text-white px-4 py-1.5 rounded text-xs font-semibold hover:bg-[#2a4550] transition-colors"
            >
              find us &rsaquo;
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar — green (Dogtopia uses orange) */}
      <nav className="bg-[#48D597] shadow-md">
        <div className="container flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img src={LOGO_URL} alt="Metro Mutts" className="h-9 lg:h-10 w-auto" />
          </a>

          {/* Desktop nav links — lowercase like Dogtopia */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[#345460] font-semibold text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA — blue like Dogtopia's green "find a location" */}
          <a
            href="#contact"
            className="hidden lg:inline-flex bg-[#345460] text-white px-5 py-2.5 rounded font-bold text-sm hover:bg-[#2a4550] transition-colors"
          >
            schedule a visit &rsaquo;
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#345460] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#48D597] border-t border-[#3bc085] pb-4">
            <div className="container flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-[#345460] font-semibold text-sm hover:bg-[#3bc085] rounded transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 bg-[#345460] text-white px-4 py-3 rounded font-bold text-sm text-center hover:bg-[#2a4550] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                schedule a visit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
