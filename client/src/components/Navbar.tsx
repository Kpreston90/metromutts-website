/*
 * Metro Mutts Navbar
 * Design: Vibrant Contemporary — teal primary, amber accents
 * Scroll-aware sticky navigation with backdrop blur
 * Plus Jakarta Sans 700-800 for nav items
 */
import { useState, useEffect } from "react";
import { Dog, Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="hidden lg:block bg-[oklch(0.20_0.02_260)] text-white/80 text-sm">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+15551234567" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              (555) 123-4567
            </a>
            <a href="#contact" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5" />
              Find a Location
            </a>
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
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-[oklch(0.55_0.14_195)] flex items-center justify-center transition-transform group-hover:scale-105">
              <Dog className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-extrabold tracking-tight text-[oklch(0.20_0.02_260)] leading-tight">
                Metro<span className="text-[oklch(0.55_0.14_195)]">Mutts</span>
              </span>
              <span className="text-[10px] lg:text-xs font-medium text-[oklch(0.50_0.02_260)] tracking-widest uppercase leading-tight">
                Dog Care & More
              </span>
            </div>
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
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[oklch(0.30_0.02_260)] hover:text-[oklch(0.55_0.14_195)] transition-colors rounded-lg hover:bg-[oklch(0.97_0.02_195)]"
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
                          className="block px-4 py-2.5 text-sm font-medium text-[oklch(0.30_0.02_260)] hover:text-[oklch(0.55_0.14_195)] hover:bg-[oklch(0.97_0.02_195)] transition-colors"
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
              className="border-[oklch(0.55_0.14_195)] text-[oklch(0.55_0.14_195)] hover:bg-[oklch(0.97_0.02_195)] font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Find a Location
            </Button>
            <Button
              className="bg-[oklch(0.77_0.17_75)] hover:bg-[oklch(0.72_0.17_75)] text-[oklch(0.20_0.02_260)] font-bold shadow-lg shadow-amber-500/20"
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
                    className="block px-4 py-3 text-base font-semibold text-[oklch(0.30_0.02_260)] hover:text-[oklch(0.55_0.14_195)] hover:bg-[oklch(0.97_0.02_195)] rounded-lg transition-colors"
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
                          className="block px-4 py-2 text-sm font-medium text-[oklch(0.50_0.02_260)] hover:text-[oklch(0.55_0.14_195)] transition-colors"
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
                  className="w-full bg-[oklch(0.77_0.17_75)] hover:bg-[oklch(0.72_0.17_75)] text-[oklch(0.20_0.02_260)] font-bold"
                  onClick={() => {
                    setMobileOpen(false);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book a Visit
                </Button>
                <a href="tel:+15551234567" className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-[oklch(0.50_0.02_260)]">
                  <Phone className="w-4 h-4" /> (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
