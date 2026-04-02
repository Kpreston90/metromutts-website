/*
 * Metro Mutts Pricing Page
 * Brand: Green #48D597, Dark #345460
 * Tabbed pricing display for Daycare, Boarding, and Grooming
 * All rates sourced from metromutts.com
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  Sun,
  Moon,
  Bed,
  Scissors,
  ArrowRight,
  Check,
  Info,
  Sparkles,
  Clock,
  Dog,
  Package,
} from "lucide-react";

const GINGR_URL = "https://metromutts.portal.gingrapp.com/public/login/Ii9zZWN1cmUvaG9tZSI=";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/realistic-indoor-play-ZvWc5A7LSn5PUgeFcAKee5.webp";
const DAYCARE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/new-daycare-9JTdpbodWw4zW5xQhTfmzM.webp";
const BOARDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/new-boarding-v2-CwC54XGXncXGgfsW4r5qkv.webp";
const GROOMING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/new-grooming-v2-P52m7Vwun9UEmDTRAQJb3H.webp";

type TabId = "daycare" | "boarding" | "grooming";

const tabs: { id: TabId; label: string; icon: typeof Sun }[] = [
  { id: "daycare", label: "Daycare", icon: Sun },
  { id: "boarding", label: "Boarding", icon: Bed },
  { id: "grooming", label: "Grooming", icon: Scissors },
];

/* ─── Daycare Data ─── */
const fullDayPackages = [
  { days: 5, price: 144 },
  { days: 10, price: 288 },
  { days: 15, price: 432 },
  { days: 20, price: 576 },
  { days: 25, price: 720 },
  { days: 30, price: 864 },
];

const halfDayPackages = [
  { days: 5, price: 99 },
  { days: 10, price: 189 },
  { days: 15, price: 271 },
  { days: 20, price: 349 },
  { days: 25, price: 420 },
  { days: 30, price: 473 },
];

/* ─── Grooming Data ─── */
const groomingAddOns = [
  { name: "De-matting", price: "$30" },
  { name: "Nail buffing", price: "$15", note: "We use a Dremel if your pup is comfortable!" },
  { name: "Teeth brushing", price: "$10", note: "Brush teeth with doggy toothpaste and apply breath freshening gel." },
  { name: "Ear cleaning", price: "$15", note: "Flush and wipe ears" },
  { name: "Anal gland expression", price: "$15" },
  { name: "Face, feet, and fanny trim", price: "$15" },
  { name: "Poodle design", price: "$40" },
  { name: "Flea & tick treatment", price: "$30" },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<TabId>("daycare");
  const [daycareSub, setDaycareSub] = useState<"full" | "half">("full");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[380px] sm:h-[340px] lg:h-[420px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Dogs playing at Metro Mutts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#345460]/90 via-[#345460]/75 to-[#345460]/50" />
        <div className="relative container h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48D597]/20 text-[#48D597] text-sm font-bold mb-5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Services &{" "}
              <span className="text-[#48D597]">Pricing</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Simple, honest pricing for Tulsa's best dog care. No hidden fees — just happy pups.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-1">
        {/* Tab Navigation */}
        <div className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="container">
            <div className="flex gap-1 py-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#48D597] text-[#345460] shadow-lg shadow-[#48D597]/20"
                        : "text-[#345460]/60 hover:text-[#345460] hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "daycare" && (
            <motion.div
              key="daycare"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <DaycareTab sub={daycareSub} setSub={setDaycareSub} />
            </motion.div>
          )}
          {activeTab === "boarding" && (
            <motion.div
              key="boarding"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <BoardingTab />
            </motion.div>
          )}
          {activeTab === "grooming" && (
            <motion.div
              key="grooming"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <GroomingTab />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <section className="py-16 lg:py-20 bg-[#345460]">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
                Book your pup's first visit today. New customers get a free meet & greet!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold text-base px-8 h-13 shadow-xl shadow-black/15"
                  asChild
                >
                  <Link href="/book">
                    Book a Visit
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 h-13 bg-transparent"
                  asChild
                >
                  <a href="tel:5398673841">
                    Call 539-867-3841
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DAYCARE TAB
   ═══════════════════════════════════════════════════════════ */
function DaycareTab({
  sub,
  setSub,
}: {
  sub: "full" | "half";
  setSub: (v: "full" | "half") => void;
}) {
  const packages = sub === "full" ? fullDayPackages : halfDayPackages;
  const singlePrice = sub === "full" ? 32 : 21;
  const additionalPrice = sub === "full" ? 24 : 15;

  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] tracking-tight mb-4">
              Dog Daycare
            </h2>
            <p className="text-[#345460]/70 text-lg leading-relaxed mb-6">
              For your convenience, daycare is broken up in two ways — full day sessions and half day sessions. A full day is any stay more than 5 hours, while a half day is any session less than 5 hours.
            </p>
            <div className="flex items-center gap-3 text-sm text-[#345460]/60">
              <Clock className="w-4 h-4 text-[#48D597]" />
              Mon–Fri: 7:00 AM – 6:00 PM &nbsp;|&nbsp; Sat–Sun: 9:00 AM – 5:00 PM
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/10">
            <img src={DAYCARE_IMG} alt="Dogs playing at Metro Mutts daycare" className="w-full h-64 lg:h-80 object-cover" />
          </div>
        </div>

        {/* Full/Half toggle */}
        <div className="flex gap-2 mb-10">
          <button
            onClick={() => setSub("full")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              sub === "full"
                ? "bg-[#345460] text-white shadow-lg"
                : "bg-gray-100 text-[#345460]/60 hover:bg-gray-200"
            }`}
          >
            <Sun className="w-4 h-4" />
            Full Day
          </button>
          <button
            onClick={() => setSub("half")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              sub === "half"
                ? "bg-[#345460] text-white shadow-lg"
                : "bg-gray-100 text-[#345460]/60 hover:bg-gray-200"
            }`}
          >
            <Moon className="w-4 h-4" />
            Half Day
          </button>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* Single day rate */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center">
                <Dog className="w-5 h-5 text-[#48D597]" />
              </div>
              <h3 className="text-lg font-bold text-[#345460]">
                {sub === "full" ? "Full Day" : "Half Day"} Daycare
              </h3>
            </div>
            <p className="text-[#345460]/60 text-sm mb-5">
              {sub === "full"
                ? "Drop off any time during the day. While you're away, your dog will be cared for in a safe, respectful, loving environment."
                : "The closest thing you'll find to a hip play area for your dog. Your dog will receive loving, attentive care throughout the day."}
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-[#345460]">${singlePrice}</span>
              <span className="text-[#345460]/50 text-sm font-medium">/ day</span>
            </div>
            <p className="text-sm text-[#345460]/50">One dog</p>
          </div>

          {/* Additional dog */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center">
                <Dog className="w-5 h-5 text-[#48D597]" />
              </div>
              <h3 className="text-lg font-bold text-[#345460]">Each Additional Dog</h3>
            </div>
            <p className="text-[#345460]/60 text-sm mb-5">
              Got more than one pup? Not a problem. Bring the whole pack and save on each additional dog.
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-[#345460]">${additionalPrice}</span>
              <span className="text-[#345460]/50 text-sm font-medium">/ day</span>
            </div>
            <p className="text-sm text-[#345460]/50">Per additional dog</p>
          </div>
        </div>

        {/* Packages table */}
        <div className="bg-[#345460] rounded-2xl p-8 lg:p-10 shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-5 h-5 text-[#48D597]" />
            <h3 className="text-xl font-extrabold text-white">
              {sub === "full" ? "Full Day" : "Half Day"} Packages
            </h3>
          </div>
          <p className="text-white/50 text-sm mb-8">
            Save more as you purchase more days for your precious pup! Discount already applied. Ask us about further discounts on siblings!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((pkg) => {
              const perDay = (pkg.price / pkg.days).toFixed(2);
              const fullRate = sub === "full" ? 32 : 21;
              const savings = (fullRate * pkg.days - pkg.price);
              return (
                <div
                  key={pkg.days}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-colors group"
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-white font-bold text-lg">{pkg.days} Days</span>
                    <span className="text-[#48D597] font-extrabold text-2xl">${pkg.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">${perDay}/day</span>
                    <span className="text-[#48D597]/80 font-medium">Save ${savings}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   BOARDING TAB
   ═══════════════════════════════════════════════════════════ */
function BoardingTab() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] tracking-tight mb-4">
              Overnight Boarding
            </h2>
            <p className="text-[#345460]/70 text-lg leading-relaxed mb-6">
              Your dog deserves a comfortable home away from home. Our spacious boarding suites ensure your pup gets the rest and care they need while you're away.
            </p>
            <div className="flex items-center gap-3 text-sm text-[#345460]/60">
              <Clock className="w-4 h-4 text-[#48D597]" />
              Check-in during regular business hours
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/10">
            <img src={BOARDING_IMG} alt="Metro Mutts boarding suites" className="w-full h-64 lg:h-80 object-cover" />
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center">
                <Bed className="w-5 h-5 text-[#48D597]" />
              </div>
              <h3 className="text-lg font-bold text-[#345460]">Boarding (One Dog)</h3>
            </div>
            <p className="text-[#345460]/60 text-sm mb-5">
              Your dog will enjoy a spacious suite with comfortable bedding, plus full access to our play areas during the day.
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-[#345460]">$50</span>
              <span className="text-[#345460]/50 text-sm font-medium">/ night</span>
            </div>
            <p className="text-sm text-[#345460]/50">Includes full day of daycare</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center">
                <Bed className="w-5 h-5 text-[#48D597]" />
              </div>
              <h3 className="text-lg font-bold text-[#345460]">Each Additional Dog</h3>
            </div>
            <p className="text-[#345460]/60 text-sm mb-5">
              Got more than one pup? Not a problem. Each additional dog boards at a discounted nightly rate.
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-[#345460]">$45</span>
              <span className="text-[#345460]/50 text-sm font-medium">/ night</span>
            </div>
            <p className="text-sm text-[#345460]/50">Per additional dog</p>
          </div>
        </div>

        {/* Important note */}
        <div className="bg-[#48D597]/10 border border-[#48D597]/20 rounded-2xl p-6 lg:p-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#48D597]/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-[#48D597]" />
            </div>
            <div>
              <h4 className="font-bold text-[#345460] mb-2">Important Note for First-Time Boarders</h4>
              <p className="text-[#345460]/70 text-sm leading-relaxed">
                All first-time boarding dogs are required to complete a full day of daycare for temperament testing purposes. Please call our front desk at{" "}
                <a href="tel:5398673841" className="text-[#48D597] font-semibold hover:underline">539-867-3841</a>{" "}
                to schedule your temperament testing day at least 2 days in advance of your scheduled boarding dates.
              </p>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Spacious private suites",
            "Full day of daycare included",
            "Climate-controlled facility",
            "Loving & attentive staff",
            "Indoor & outdoor play areas",
            "Feeding per your schedule",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-[#48D597]/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-[#48D597]" />
              </div>
              <span className="text-sm font-medium text-[#345460]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   GROOMING TAB
   ═══════════════════════════════════════════════════════════ */
function GroomingTab() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] tracking-tight mb-4">
              Grooming Services
            </h2>
            <p className="text-[#345460]/70 text-lg leading-relaxed mb-6">
              Our professional groomers will have your pup looking and feeling their best. Prices vary based on size, breed, and temperament.
            </p>
            <div className="flex items-center gap-3 text-sm text-[#345460]/60">
              <Sparkles className="w-4 h-4 text-[#48D597]" />
              Book through your Metro Mutts account
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/10">
            <img src={GROOMING_IMG} alt="Happy dog after grooming at Metro Mutts" className="w-full h-64 lg:h-80 object-cover" />
          </div>
        </div>

        {/* Main grooming services */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Full Bath */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#48D597]" />
              </div>
              <h3 className="text-lg font-bold text-[#345460]">Full Bath</h3>
            </div>
            <p className="text-[#345460]/60 text-sm mb-5">
              Recommended for short-hair/non-grooming dogs. Includes wash, dry, and brush out.
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-extrabold text-[#345460]">$30–$80</span>
            </div>
            <p className="text-xs text-[#345460]/40">*Base price for smaller breeds. Range depends on size, breed & temperament.</p>
          </div>

          {/* Grooming */}
          <div className="bg-white rounded-2xl border-2 border-[#48D597] p-8 shadow-lg shadow-[#48D597]/10 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-3 left-6">
              <span className="bg-[#48D597] text-[#345460] text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-[#48D597]" />
              </div>
              <h3 className="text-lg font-bold text-[#345460]">Full Grooming</h3>
            </div>
            <p className="text-[#345460]/60 text-sm mb-5">
              Includes full bath and any additional grooming/shaving. Ear hair pulling, paw pads and anal gland expression included upon request.
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-extrabold text-[#345460]">$70–$100</span>
            </div>
            <p className="text-xs text-[#345460]/40">*Base price for smaller breeds. Range depends on size, breed & temperament.</p>
          </div>

          {/* De-shedding */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#48D597]/10 flex items-center justify-center">
                <Dog className="w-5 h-5 text-[#48D597]" />
              </div>
              <h3 className="text-lg font-bold text-[#345460]">De-shedding Treatment</h3>
            </div>
            <p className="text-[#345460]/60 text-sm mb-5">
              Includes shampoo and conditioner designed to reduce shedding, with de-shedding brushes/rakes.
            </p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-extrabold text-[#345460]">$20–$40</span>
            </div>
            <p className="text-xs text-[#345460]/40">Add-on service. Price varies by coat type.</p>
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-[oklch(0.97_0.005_90)] rounded-2xl p-8 lg:p-10">
          <h3 className="text-xl font-extrabold text-[#345460] mb-2">Grooming Add-Ons</h3>
          <p className="text-[#345460]/50 text-sm mb-6">
            Customize your pup's grooming experience with any of these additional services.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {groomingAddOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#48D597]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#48D597]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#345460]">{addon.name}</span>
                    {addon.note && (
                      <p className="text-xs text-[#345460]/40 mt-0.5">{addon.note}</p>
                    )}
                  </div>
                </div>
                <span className="text-sm font-bold text-[#48D597] ml-4 flex-shrink-0">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
