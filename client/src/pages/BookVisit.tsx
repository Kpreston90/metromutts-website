/*
 * Metro Mutts — Book a Visit Interstitial Page
 * Brand: Green #48D597, Dark #345460
 * Guides customers through what to expect before redirecting to Gingr portal
 * Plus Jakarta Sans typography, motion animations, branded design
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Phone,
  CalendarCheck,
  ClipboardCheck,
  UserCheck,
  PawPrint,
  Shield,
  Clock,
  MapPin,
  Syringe,
  CheckCircle2,
  ExternalLink,
  Heart,
  Sparkles,
} from "lucide-react";

const GINGR_URL =
  "https://metromutts.portal.gingrapp.com/public/login/Ii9zZWN1cmUvaG9tZSI=";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/new-pricing-hero-v2-a5SWsGB42RmL6secufgGrA.webp";

/* ─── Steps Data ─── */
const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Create Your Account",
    description:
      "Sign up on our booking portal with your name, email, and phone number. If you already have an account, just log in.",
    detail: "Takes about 2 minutes",
    color: "bg-[#48D597]/10 text-[#48D597]",
  },
  {
    number: "02",
    icon: PawPrint,
    title: "Add Your Dog's Profile",
    description:
      "Tell us about your pup — breed, age, weight, temperament, and any special needs. Upload vaccination records while you're at it.",
    detail: "Have your vet records handy",
    color: "bg-amber-50 text-amber-500",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Schedule a Meet & Greet",
    description:
      "Book a free temperament assessment. We'll introduce your dog to our play groups and make sure everyone's a great fit.",
    detail: "Free for all new customers",
    color: "bg-sky-50 text-sky-500",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Book Your First Visit",
    description:
      "Once approved, pick your service — daycare, boarding, or grooming — choose your dates, and you're all set!",
    detail: "Instant confirmation",
    color: "bg-purple-50 text-purple-500",
  },
];

/* ─── Requirements Data ─── */
const requirements = [
  {
    icon: Syringe,
    title: "Vaccinations",
    items: [
      "Rabies (current)",
      "DHPP / Distemper (current)",
      "Bordetella (within 6 months)",
      "Canine Influenza (recommended)",
    ],
  },
  {
    icon: Shield,
    title: "Health & Safety",
    items: [
      "Spayed/neutered (6+ months old)",
      "Flea & tick prevention (current)",
      "No signs of illness or aggression",
      "Must pass temperament assessment",
    ],
  },
  {
    icon: Clock,
    title: "Hours & Drop-off",
    items: [
      "Mon–Fri: 6:30 AM – 7:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: Boarding pickup only",
      "Early/late drop-off available",
    ],
  },
];

/* ─── FAQ Data ─── */
const faqs = [
  {
    q: "What happens during the meet & greet?",
    a: "Your dog will spend about 30 minutes with our team. We'll observe how they interact with other dogs and our staff, assess their temperament, and make sure they're comfortable in our play environment. It's completely free!",
  },
  {
    q: "What if my dog has never been to daycare before?",
    a: "No worries — most of our dogs started as first-timers! We introduce new pups gradually, starting with smaller play groups and building up. Our trained staff monitors every interaction to ensure a positive experience.",
  },
  {
    q: "Can I cancel or reschedule a booking?",
    a: "Yes! You can manage all your reservations through the customer portal. We ask for at least 24 hours notice for cancellations to avoid any fees.",
  },
  {
    q: "Do I need to bring anything for my dog?",
    a: "For daycare, just bring your pup — we provide everything else! For boarding stays, feel free to bring their favorite blanket or toy from home. We provide premium food, but you're welcome to bring your own if your dog has a special diet.",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BookVisit() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative h-[380px] lg:h-[460px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Happy dogs at Metro Mutts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#345460]/90 via-[#345460]/80 to-[#345460]/50" />
        <div className="relative container h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48D597]/20 text-[#48D597] text-sm font-bold mb-5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              New Customers Welcome
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Book Your Dog's{" "}
              <span className="text-[#48D597]">First Visit</span>
            </h1>
            <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              Everything you need to know before booking. We'll walk you through
              the process so there are no surprises — just tail wags.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold text-base px-8 h-13 shadow-xl shadow-black/15 transition-all hover:-translate-y-0.5"
                asChild
              >
                <a
                  href={GINGR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Booking Portal
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 h-13 bg-transparent"
                asChild
              >
                <a href="tel:5398673841">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Instead
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        {/* ─── How It Works — Steps ─── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-bold text-[#48D597] tracking-widest uppercase mb-3">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] tracking-tight mb-4">
                Four Simple Steps to Get Started
              </h2>
              <p className="text-[#345460]/60 text-lg max-w-2xl mx-auto">
                Our booking portal makes it easy to get your pup enrolled. Here's
                exactly what to expect.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    className="relative group"
                  >
                    <div className="bg-white rounded-2xl border border-gray-100 p-7 h-full shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1">
                      {/* Step number watermark */}
                      <span className="absolute top-4 right-5 text-6xl font-extrabold text-gray-50 select-none group-hover:text-[#48D597]/10 transition-colors">
                        {step.number}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-5`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#345460] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#345460]/60 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#48D597]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {step.detail}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ─── Requirements ─── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-bold text-[#48D597] tracking-widest uppercase mb-3">
                Before You Book
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] tracking-tight mb-4">
                What You'll Need
              </h2>
              <p className="text-[#345460]/60 text-lg max-w-2xl mx-auto">
                Have these items ready when you create your account. It'll make
                the process quick and painless.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {requirements.map((req) => {
                const Icon = req.icon;
                return (
                  <motion.div
                    key={req.title}
                    variants={fadeUp}
                    className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#345460] text-white flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#345460] mb-4">
                      {req.title}
                    </h3>
                    <ul className="space-y-3">
                      {req.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[#345460]/70 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#48D597] mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ─── What to Expect callout ─── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container">
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#345460] via-[#3a5f6d] to-[#345460] p-10 lg:p-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Decorative paw */}
              <svg
                className="absolute top-6 right-8 w-24 h-24 text-white/5 rotate-12"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <ellipse cx="35" cy="25" rx="12" ry="15" />
                <ellipse cx="65" cy="25" rx="12" ry="15" />
                <ellipse cx="20" cy="50" rx="10" ry="13" />
                <ellipse cx="80" cy="50" rx="10" ry="13" />
                <ellipse cx="50" cy="68" rx="22" ry="20" />
              </svg>
              <svg
                className="absolute bottom-6 left-12 w-16 h-16 text-white/5 -rotate-12"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <ellipse cx="35" cy="25" rx="12" ry="15" />
                <ellipse cx="65" cy="25" rx="12" ry="15" />
                <ellipse cx="20" cy="50" rx="10" ry="13" />
                <ellipse cx="80" cy="50" rx="10" ry="13" />
                <ellipse cx="50" cy="68" rx="22" ry="20" />
              </svg>

              <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#48D597]/20 text-[#48D597] text-xs font-bold mb-5">
                    <Heart className="w-3.5 h-3.5" />
                    The Metro Mutts Difference
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5 leading-tight">
                    Your Dog Will Be in{" "}
                    <span className="text-[#48D597]">Great Hands</span>
                  </h2>
                  <p className="text-white/70 text-base leading-relaxed mb-6">
                    Our booking portal is powered by Gingr, the industry-leading
                    pet care platform. When you click through, you'll land on a
                    secure login page with the Metro Mutts logo. From there you
                    can manage everything — bookings, vaccination uploads, payment
                    info, and more.
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">
                    If you ever need help navigating the portal, just give us a
                    call at{" "}
                    <a
                      href="tel:5398673841"
                      className="text-[#48D597] font-semibold hover:underline"
                    >
                      539-867-3841
                    </a>{" "}
                    and we'll walk you through it.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      label: "Secure & encrypted booking portal",
                    },
                    {
                      icon: CalendarCheck,
                      label: "Manage all reservations in one place",
                    },
                    {
                      icon: Syringe,
                      label: "Upload vaccination records digitally",
                    },
                    {
                      icon: PawPrint,
                      label: "Track your dog's activity & report cards",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 backdrop-blur-sm"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#48D597]/20 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#48D597]" />
                        </div>
                        <span className="text-white/90 font-medium text-sm">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-bold text-[#48D597] tracking-widest uppercase mb-3">
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto space-y-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {faqs.map((faq) => (
                <motion.details
                  key={faq.q}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-7 py-5 text-[#345460] font-bold text-base list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="ml-4 shrink-0 w-6 h-6 rounded-full bg-gray-100 group-open:bg-[#48D597]/20 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-[#345460]/50 group-open:text-[#48D597] transition-transform group-open:rotate-90" />
                    </span>
                  </summary>
                  <div className="px-7 pb-6 text-[#345460]/65 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-16 lg:py-20 bg-[#345460]">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Book?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
                You'll be taken to our secure booking portal. Create an account
                or log in to get started.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold text-base px-10 h-14 shadow-xl shadow-black/15 transition-all hover:-translate-y-0.5"
                  asChild
                >
                  <a
                    href={GINGR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Booking Portal
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 h-14 bg-transparent"
                  asChild
                >
                  <a href="tel:5398673841">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 539-867-3841
                  </a>
                </Button>
              </div>
              <p className="text-white/40 text-sm mt-6 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Tulsa, Oklahoma — Serving the greater Tulsa metro area
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
