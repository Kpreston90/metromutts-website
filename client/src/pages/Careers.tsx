/*
 * Metro Mutts — Careers Page
 * Brand: Green #48D597, Dark #345460
 * Job listings, perks, and application form
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import {
  Briefcase,
  Clock,
  MapPin,
  Heart,
  Dog,
  Shield,
  Sun,
  Users,
  ChevronDown,
  ChevronUp,
  Send,
  Sparkles,
  DollarSign,
  GraduationCap,
  Scissors,
  Headset,
} from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/careers-hero-X4AadayhPJnqFMuZvGPwV2.webp";

interface Job {
  id: string;
  title: string;
  icon: typeof Briefcase;
  type: string;
  location: string;
  pay: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: "dog-care-attendant",
    title: "Dog Care Attendant",
    icon: Dog,
    type: "Full-Time / Part-Time",
    location: "Tulsa, OK",
    pay: "$13 – $16/hr",
    summary:
      "Be the heart of our daycare floor. You'll supervise group play, ensure every pup is safe and happy, and build relationships with our four-legged regulars.",
    responsibilities: [
      "Supervise dogs during indoor and outdoor group play sessions",
      "Monitor dog behavior and intervene when needed to maintain a safe environment",
      "Perform feeding, medication administration, and potty breaks on schedule",
      "Maintain cleanliness of play areas, kennels, and common spaces",
      "Communicate with pet parents about their dog's day via reports and photos",
      "Assist with check-in and check-out procedures",
    ],
    requirements: [
      "Genuine love for dogs and comfort handling all breeds and sizes",
      "Ability to stay on your feet for extended periods in an active environment",
      "Reliable, punctual, and able to work weekends and holidays as needed",
      "Previous animal care experience preferred but not required — we'll train you",
      "Must be 18 years or older",
    ],
  },
  {
    id: "groomer",
    title: "Professional Groomer",
    icon: Scissors,
    type: "Full-Time",
    location: "Tulsa, OK",
    pay: "$16 – $22/hr + tips",
    summary:
      "Bring your grooming skills to a facility that values quality and animal welfare. You'll handle everything from baths and brush-outs to breed-specific cuts.",
    responsibilities: [
      "Perform full grooming services including bathing, drying, brushing, and haircuts",
      "Execute breed-specific trims and styling per client requests",
      "Conduct nail trims, ear cleaning, and teeth brushing",
      "Assess each dog's skin and coat condition, flagging concerns to owners",
      "Maintain a clean, organized, and sanitized grooming station",
      "Build rapport with repeat clients and their pets",
    ],
    requirements: [
      "Minimum 1 year of professional grooming experience",
      "Proficiency with grooming tools (clippers, shears, dryers, etc.)",
      "Calm, patient demeanor with dogs of all temperaments",
      "Strong attention to detail and pride in your craft",
      "Ability to lift dogs up to 70 lbs onto grooming tables",
      "Must be 18 years or older",
    ],
  },
  {
    id: "front-desk-coordinator",
    title: "Front Desk Coordinator",
    icon: Headset,
    type: "Full-Time",
    location: "Tulsa, OK",
    pay: "$14 – $17/hr",
    summary:
      "You're the first face our customers see. You'll manage check-ins, answer questions, handle bookings, and keep our front-of-house running smoothly.",
    responsibilities: [
      "Greet customers and their dogs with a warm, professional welcome",
      "Manage reservations, check-ins, and check-outs using our booking system (Gingr)",
      "Answer phone calls, emails, and walk-in inquiries about services and pricing",
      "Process payments and maintain accurate customer records",
      "Coordinate with the daycare and grooming teams on scheduling",
      "Keep the reception area clean, organized, and welcoming",
    ],
    requirements: [
      "Excellent communication and customer service skills",
      "Comfortable with computers and booking/POS software",
      "Ability to multitask in a fast-paced, sometimes noisy environment",
      "Friendly, upbeat personality — you genuinely enjoy helping people (and dogs)",
      "Previous front desk or customer-facing experience preferred",
      "Must be 18 years or older",
    ],
  },
];

const perks = [
  {
    icon: Dog,
    title: "Free Dog Daycare",
    desc: "Bring your pup to work — employees get complimentary daycare for their own dogs.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    desc: "Fair wages with opportunities for raises based on performance and tenure.",
  },
  {
    icon: GraduationCap,
    title: "Paid Training",
    desc: "Comprehensive onboarding plus ongoing education in animal behavior and care.",
  },
  {
    icon: Sun,
    title: "Flexible Scheduling",
    desc: "We work with your availability — great for students, parents, or side hustlers.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    desc: "Full camera coverage, strict safety protocols, and a supportive team culture.",
  },
  {
    icon: Users,
    title: "Tight-Knit Team",
    desc: "Small team, big heart. We look out for each other and celebrate wins together.",
  },
];

function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl border border-[#345460]/8 shadow-sm shadow-black/3 overflow-hidden hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#345460] flex items-center justify-center shrink-0">
            <job.icon className="w-6 h-6 text-[#48D597]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-[#345460]">{job.title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-sm text-[#345460]/55">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {job.type}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" />
                {job.pay}
              </span>
            </div>
          </div>
        </div>

        <p className="text-[#345460]/65 leading-relaxed mb-4">{job.summary}</p>

        {/* Expand/Collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#48D597] hover:text-[#3bc085] transition-colors"
        >
          {expanded ? "Show Less" : "View Full Details"}
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {/* Expanded Details */}
        <div
          className={`overflow-hidden transition-all duration-400 ${
            expanded ? "max-h-[800px] mt-6" : "max-h-0"
          }`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#345460] text-sm uppercase tracking-wider mb-3">
                Responsibilities
              </h4>
              <ul className="space-y-2">
                {job.responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-[#345460]/65"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#48D597] mt-1.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#345460] text-sm uppercase tracking-wider mb-3">
                Requirements
              </h4>
              <ul className="space-y-2">
                {job.requirements.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-[#345460]/65"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#345460]/30 mt-1.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Apply CTA strip */}
      <div className="border-t border-[#345460]/8 bg-[#fafaf8] px-6 sm:px-8 py-4 flex items-center justify-between">
        <span className="text-sm text-[#345460]/45">
          Accepting applications now
        </span>
        <a
          href="#apply"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#345460] hover:text-[#48D597] transition-colors"
        >
          Apply Now →
        </a>
      </div>
    </motion.div>
  );
}

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    availability: "",
    about: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.position) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      const body = new URLSearchParams({
        "form-name": "careers",
        ...form,
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setSubmitted(true);
      toast.success("Application submitted! We'll be in touch soon.");
    } catch {
      setSubmitted(true);
      toast.success("Application submitted! We'll be in touch soon.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative h-[420px] sm:h-[380px] lg:h-[460px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Metro Mutts team working with dogs"
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
              <Briefcase className="w-4 h-4" />
              We're Hiring
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Love Dogs?{" "}
              <span className="text-[#48D597]">Join Our Pack.</span>
            </h1>
            <p className="text-white/75 text-lg lg:text-xl leading-relaxed max-w-xl">
              We're looking for passionate, reliable people who want to make
              dogs' days better. No corporate fluff — just a great team doing
              meaningful work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Work Here ─── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#48D597] font-bold text-sm uppercase tracking-widest">
              Perks & Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] mt-3">
              Why Work at Metro Mutts
            </h2>
            <p className="text-[#345460]/55 mt-4 max-w-xl mx-auto">
              We take care of our people the same way we take care of the dogs —
              with genuine attention and respect.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                className="bg-white rounded-2xl p-6 border border-[#345460]/6 hover:border-[#48D597]/30 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#345460]/5 group-hover:bg-[#48D597]/10 flex items-center justify-center mb-4 transition-colors">
                  <perk.icon className="w-5 h-5 text-[#345460] group-hover:text-[#48D597] transition-colors" />
                </div>
                <h3 className="font-bold text-[#345460] mb-1.5">{perk.title}</h3>
                <p className="text-sm text-[#345460]/55 leading-relaxed">
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Open Positions ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#48D597] font-bold text-sm uppercase tracking-widest">
              Open Positions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] mt-3">
              Current Openings
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Application Form ─── */}
      <section id="apply" className="py-20 lg:py-28 scroll-mt-24">
        <div className="container max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#48D597] font-bold text-sm uppercase tracking-widest">
              Apply Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] mt-3 mb-4">
              Ready to Join the Pack?
            </h2>
            <p className="text-[#345460]/55 max-w-lg mx-auto">
              Fill out the form below and we'll reach out within a few days. No
              formal resume needed — just tell us about yourself.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              className="bg-white rounded-2xl border border-[#48D597]/30 p-10 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#48D597]/15 flex items-center justify-center mx-auto mb-5">
                <Heart className="w-8 h-8 text-[#48D597]" />
              </div>
              <h3 className="text-2xl font-bold text-[#345460] mb-3">
                Application Received!
              </h3>
              <p className="text-[#345460]/60 max-w-md mx-auto mb-6">
                Thanks for your interest in Metro Mutts, {form.name.split(" ")[0]}! We'll
                review your application and get back to you within 3–5 business
                days.
              </p>
              <p className="text-sm text-[#345460]/40">
                Questions? Call us at{" "}
                <a
                  href="tel:5398673841"
                  className="text-[#48D597] hover:underline"
                >
                  539-867-3841
                </a>
              </p>
            </motion.div>
          ) : (
            <motion.form
              name="careers"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-[#345460]/8 shadow-sm p-6 sm:p-10 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <input type="hidden" name="form-name" value="careers" />
              <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-[#345460]/12 bg-[#fafaf8] text-[#345460] placeholder:text-[#345460]/30 focus:outline-none focus:ring-2 focus:ring-[#48D597]/40 focus:border-[#48D597] transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#345460]/12 bg-[#fafaf8] text-[#345460] placeholder:text-[#345460]/30 focus:outline-none focus:ring-2 focus:ring-[#48D597]/40 focus:border-[#48D597] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Phone & Position */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl border border-[#345460]/12 bg-[#fafaf8] text-[#345460] placeholder:text-[#345460]/30 focus:outline-none focus:ring-2 focus:ring-[#48D597]/40 focus:border-[#48D597] transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-1.5">
                    Position <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#345460]/12 bg-[#fafaf8] text-[#345460] focus:outline-none focus:ring-2 focus:ring-[#48D597]/40 focus:border-[#48D597] transition-all text-sm appearance-none"
                  >
                    <option value="">Select a position...</option>
                    {jobs.map((j) => (
                      <option key={j.id} value={j.title}>
                        {j.title}
                      </option>
                    ))}
                    <option value="Other">Other / General Interest</option>
                  </select>
                </div>
              </div>

              {/* Experience & Availability */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-1.5">
                    Relevant Experience
                  </label>
                  <select
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#345460]/12 bg-[#fafaf8] text-[#345460] focus:outline-none focus:ring-2 focus:ring-[#48D597]/40 focus:border-[#48D597] transition-all text-sm appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="none">No prior experience</option>
                    <option value="less-than-1">Less than 1 year</option>
                    <option value="1-2">1–2 years</option>
                    <option value="3-plus">3+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#345460] mb-1.5">
                    Availability
                  </label>
                  <select
                    name="availability"
                    value={form.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#345460]/12 bg-[#fafaf8] text-[#345460] focus:outline-none focus:ring-2 focus:ring-[#48D597]/40 focus:border-[#48D597] transition-all text-sm appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* About You */}
              <div>
                <label className="block text-sm font-semibold text-[#345460] mb-1.5">
                  Tell Us About Yourself
                </label>
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Why do you want to work at Metro Mutts? Do you have pets? What makes you a great fit?"
                  className="w-full px-4 py-3 rounded-xl border border-[#345460]/12 bg-[#fafaf8] text-[#345460] placeholder:text-[#345460]/30 focus:outline-none focus:ring-2 focus:ring-[#48D597]/40 focus:border-[#48D597] transition-all text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold text-base px-10 h-13 shadow-lg shadow-[#48D597]/20 transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
                <p className="text-xs text-[#345460]/35 mt-3">
                  We'll respond within 3–5 business days. Your information is
                  kept confidential.
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-16 lg:py-20 bg-[#345460]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-7 h-7 text-[#48D597] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Don't See the Right Fit?
            </h2>
            <p className="text-white/55 max-w-md mx-auto mb-6">
              We're always looking for great people. Submit a general application
              and we'll keep you in mind for future openings.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#48D597] text-[#345460] font-bold text-sm hover:bg-[#3bc085] transition-all hover:-translate-y-0.5 shadow-lg shadow-black/15"
            >
              Apply Anyway
              <Send className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
