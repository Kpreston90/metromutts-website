/**
 * Metro Mutts — Smart Booking Modal (Option C)
 * Routes users by service type, handles new vs existing customers,
 * captures email leads before redirecting to Gingr.
 * Brand: Green #48D597, Dark #345460, Cream #FFFFEC
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  X,
  Dog,
  Scissors,
  Moon,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Phone,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const GINGR_LOGIN =
  "https://metromutts.portal.gingrapp.com/public/login/Ii9zZWN1cmUvaG9tZSI=";
const GINGR_SIGNUP =
  "https://metromutts.portal.gingrapp.com/public/new_customer";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "service" | "customer-type" | "redirect";
type Service = "daycare" | "grooming" | "boarding" | "store";

const services = [
  {
    id: "daycare" as Service,
    icon: Dog,
    title: "Daycare",
    subtitle: "Full day of play & socialization",
    highlight: "First day FREE",
  },
  {
    id: "grooming" as Service,
    icon: Scissors,
    title: "Grooming",
    subtitle: "Bath, haircut, nails & more",
    highlight: "By appointment",
  },
  {
    id: "boarding" as Service,
    icon: Moon,
    title: "Boarding",
    subtitle: "Overnight stays with play included",
    highlight: "Luxury suites",
  },
  {
    id: "store" as Service,
    icon: ShoppingBag,
    title: "Visit the Store",
    subtitle: "Treats, toys, food & gear",
    highlight: "No appointment needed",
  },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setStep("service");
      setSelectedService(null);
    }, 300);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    if (service === "store") {
      // Store doesn't need booking — just show hours/directions
      setStep("redirect");
    } else {
      setStep("customer-type");
    }
  };

  const handleBack = () => {
    if (step === "customer-type") {
      setStep("service");
      setSelectedService(null);
    } else if (step === "redirect") {
      setStep("customer-type");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-[#345460] px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {step !== "service" && (
                    <button
                      onClick={handleBack}
                      className="text-white/70 hover:text-white transition-colors p-1"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div>
                    <h2 className="text-white font-bold text-lg">
                      {step === "service" && "What can we help with?"}
                      {step === "customer-type" && "Have you been here before?"}
                      {step === "redirect" && getRedirectTitle(selectedService)}
                    </h2>
                    <p className="text-white/60 text-sm">
                      {step === "service" && "Choose a service to get started"}
                      {step === "customer-type" &&
                        "This helps us send you to the right place"}
                      {step === "redirect" && "You're almost there!"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/70 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {step === "service" && (
                    <ServiceStep
                      key="service"
                      onSelect={handleServiceSelect}
                    />
                  )}
                  {step === "customer-type" && (
                    <CustomerTypeStep
                      key="customer-type"
                      service={selectedService!}
                    />
                  )}
                  {step === "redirect" && selectedService === "store" && (
                    <StoreStep key="store" />
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="tel:5398673841"
                  className="text-[#345460]/60 hover:text-[#345460] text-sm flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Prefer to call? 539-867-3841
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Step 1: Service Selection ─── */
function ServiceStep({
  onSelect,
}: {
  onSelect: (service: Service) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <button
            key={service.id}
            onClick={() => onSelect(service.id)}
            className="group relative text-left pt-8 pb-5 px-5 rounded-xl border border-gray-100 hover:border-[#48D597] hover:shadow-lg hover:shadow-[#48D597]/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            {service.highlight && (
              <span className="absolute top-2.5 right-3 text-[10px] font-bold text-[#48D597] bg-[#48D597]/10 px-2 py-0.5 rounded-full">
                {service.highlight}
              </span>
            )}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#48D597]/10 flex items-center justify-center shrink-0 group-hover:bg-[#48D597]/20 transition-colors">
                <Icon className="w-5 h-5 text-[#48D597]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#345460] text-sm mb-0.5">
                  {service.title}
                </h3>
                <p className="text-[#345460]/50 text-xs leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </motion.div>
  );
}

/* ─── Step 2: New vs Existing Customer ─── */
function CustomerTypeStep({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.2 }}
      className="space-y-4"
    >
      {/* Existing Customer */}
      <a
        href={GINGR_LOGIN}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-5 rounded-xl border border-gray-100 hover:border-[#48D597] hover:shadow-lg hover:shadow-[#48D597]/10 transition-all duration-200 hover:-translate-y-0.5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#48D597]/10 flex items-center justify-center group-hover:bg-[#48D597]/20 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#48D597]" />
            </div>
            <div>
              <h3 className="font-bold text-[#345460] mb-0.5">
                I'm a returning customer
              </h3>
              <p className="text-[#345460]/50 text-sm">
                Log in to book {service}
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-[#345460]/30 group-hover:text-[#48D597] transition-colors" />
        </div>
      </a>

      {/* New Customer */}
      <a
        href={GINGR_SIGNUP}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-5 rounded-xl border border-gray-100 hover:border-[#48D597] hover:shadow-lg hover:shadow-[#48D597]/10 transition-all duration-200 hover:-translate-y-0.5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EAB308]/10 flex items-center justify-center group-hover:bg-[#EAB308]/20 transition-colors">
              <Sparkles className="w-6 h-6 text-[#EAB308]" />
            </div>
            <div>
              <h3 className="font-bold text-[#345460] mb-0.5">
                I'm new here!
              </h3>
              <p className="text-[#345460]/50 text-sm">
                Create an account to get started
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-[#345460]/30 group-hover:text-[#EAB308] transition-colors" />
        </div>
      </a>

      {/* First day free callout */}
      {service === "daycare" && (
        <div className="bg-[#EAB308]/5 border border-[#EAB308]/20 rounded-xl p-4 flex items-center gap-3">
          <Dog className="w-5 h-5 text-[#EAB308] shrink-0" />
          <p className="text-sm text-[#345460]/70">
            <span className="font-bold text-[#EAB308]">First day is FREE</span>{" "}
            for all new daycare pups! Just sign up and schedule a meet & greet.
          </p>
        </div>
      )}

      {service === "grooming" && (
        <div className="bg-[#48D597]/5 border border-[#48D597]/20 rounded-xl p-4 flex items-center gap-3">
          <Scissors className="w-5 h-5 text-[#48D597] shrink-0" />
          <p className="text-sm text-[#345460]/70">
            <span className="font-bold text-[#345460]">Grooming by Jacque</span>{" "}
            — book early, spots fill up fast! Call if you need a specific day.
          </p>
        </div>
      )}

      {service === "boarding" && (
        <div className="bg-[#48D597]/5 border border-[#48D597]/20 rounded-xl p-4 flex items-center gap-3">
          <Moon className="w-5 h-5 text-[#48D597] shrink-0" />
          <p className="text-sm text-[#345460]/70">
            <span className="font-bold text-[#345460]">
              Boarding includes daycare play!
            </span>{" "}
            Your pup won't just sleep here — they'll have a blast.
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ─── Store Step (no booking needed) ─── */
function StoreStep() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.2 }}
      className="space-y-5"
    >
      <div className="bg-[#48D597]/5 border border-[#48D597]/20 rounded-xl p-5">
        <h3 className="font-bold text-[#345460] mb-3 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-[#48D597]" />
          No appointment needed!
        </h3>
        <p className="text-[#345460]/70 text-sm mb-4">
          Just walk in during business hours. We carry premium food, treats,
          toys, enrichment puzzles, leashes, and more.
        </p>
        <div className="space-y-2 text-sm text-[#345460]/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#48D597]" />
            <span>
              <strong>Mon–Fri:</strong> 6:30 AM – 7:00 PM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#48D597]" />
            <span>
              <strong>Saturday:</strong> 8:00 AM – 5:00 PM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#48D597]" />
            <span>
              <strong>Sunday:</strong> Closed
            </span>
          </div>
        </div>
      </div>

      <Button
        className="w-full bg-[#48D597] hover:bg-[#3bc085] text-[#345460] font-bold h-12"
        asChild
      >
        <a
          href="https://maps.google.com/?q=Metro+Mutts+Tulsa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </Button>
    </motion.div>
  );
}

/* ─── Helpers ─── */
function getRedirectTitle(service: Service | null) {
  switch (service) {
    case "store":
      return "Visit Our Store";
    default:
      return "Almost there!";
  }
}
