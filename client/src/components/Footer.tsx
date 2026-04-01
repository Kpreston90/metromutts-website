/*
 * Metro Mutts Footer
 * Design: Dark navy background, multi-column links
 * Social icons, newsletter signup
 */
import { Dog, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Dog Daycare", href: "#daycare" },
    { label: "Overnight Boarding", href: "#boarding" },
    { label: "Grooming & Spa", href: "#grooming" },
    { label: "Dog Training", href: "#training" },
    { label: "Webcam Access", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Locations", href: "#contact" },
    { label: "Safety Promise", href: "#" },
    { label: "Refer a Friend", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.15_0.02_260)] text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.55_0.14_195)] flex items-center justify-center">
                <Dog className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight leading-tight">
                  Metro<span className="text-[oklch(0.55_0.14_195)]">Mutts</span>
                </span>
                <span className="text-[10px] font-medium text-white/50 tracking-widest uppercase leading-tight">
                  Dog Care & More
                </span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              The metro area's most trusted dog care provider. Award-winning daycare, luxury boarding, professional grooming, and expert training — all under one roof.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[oklch(0.55_0.14_195)] transition-colors"
                  onClick={(e) => { e.preventDefault(); }}
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-[oklch(0.55_0.14_195)] transition-colors"
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

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Metro Mutts. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
