/*
 * Metro Mutts Navbar
 * Brand: Green #48D597 primary, Dark #345460 text
 * Scroll-aware sticky navigation with backdrop blur
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-logo-dark_455bad7b.png";

const navLinks = [
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Daycare", href: "#daycare" },
      { label: "Boarding", href: "#boarding" },
      { label: "Grooming & Spa", href: "#grooming" },
      { label: "Training", href: "#training" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-[#345460] text-white/80 text-sm">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="tel:5398673841" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              539-867-3841
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Tulsa, Oklahoma
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Refer a Friend</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white"
        }`}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src={LOGO_URL}
              alt="Metro Mutts"
              className="h-12 lg:h-14 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#345460] hover:text-[#48D597] transition-colors rounded-lg hover:bg-[#48D597]/10"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-black/5 py-2 overflow-hidden">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-[#345460] hover:text-[#48D597] hover:bg-[#48D597]/10 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-[#48D597] text-[#48D597] hover:bg-[#48D597]/10 font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Find Us
            </Button>
            <Button
              className="bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold shadow-lg shadow-[#48D597]/20"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Visit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-base font-semibold text-[#345460] hover:text-[#48D597] hover:bg-[#48D597]/10 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="ml-4 space-y-1">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-[#345460]/70 hover:text-[#48D597] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Button
                  className="w-full bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold"
                  onClick={() => {
                    setMobileOpen(false);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book a Visit
                </Button>
                <a href="tel:5398673841" className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-[#345460]/70">
                  <Phone className="w-4 h-4" /> 539-867-3841
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
