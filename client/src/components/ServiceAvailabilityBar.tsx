/**
 * ServiceAvailabilityBar — Sticky bar showing real-time availability for a specific service.
 * Used on Daycare, Grooming, and Boarding pages.
 */
import { trpc } from "@/lib/trpc";
import { Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { useBookingModal } from "@/contexts/BookingModalContext";

type ServiceType = "daycare" | "grooming" | "boarding";

interface ServiceAvailabilityBarProps {
  service: ServiceType;
}

export default function ServiceAvailabilityBar({ service }: ServiceAvailabilityBarProps) {
  const { openBookingModal } = useBookingModal();
  const { data: availability } = trpc.availability.todayAndTomorrow.useQuery(
    undefined,
    { staleTime: 5 * 60 * 1000, retry: 1 }
  );

  const getServiceData = () => {
    if (!availability) return null;
    return {
      today: availability.today[service],
      tomorrow: availability.tomorrow[service],
    };
  };

  const serviceData = getServiceData();

  const serviceLabels: Record<ServiceType, string> = {
    daycare: "Daycare",
    grooming: "Grooming",
    boarding: "Boarding",
  };

  const serviceCapacity: Record<ServiceType, number> = {
    daycare: 40,
    grooming: 6,
    boarding: 19,
  };

  // Determine urgency level
  const getUrgencyLevel = (spotsLeft: number) => {
    if (spotsLeft <= 2) return "critical";
    if (spotsLeft <= 5) return "warning";
    return "available";
  };

  const getUrgencyStyles = (level: string) => {
    switch (level) {
      case "critical":
        return "bg-red-50 border-red-200 text-red-800";
      case "warning":
        return "bg-[#FB923C]/10 border-[#FB923C]/30 text-[#FB923C]";
      default:
        return "bg-[#48D597]/10 border-[#48D597]/30 text-[#345460]";
    }
  };

  const getIcon = (level: string) => {
    switch (level) {
      case "critical":
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case "warning":
        return <Clock className="w-4 h-4 text-[#FB923C]" />;
      default:
        return <CheckCircle className="w-4 h-4 text-[#48D597]" />;
    }
  };

  // Fallback when API is unavailable
  if (!serviceData) {
    return (
      <div className="sticky top-[72px] z-30 border-b border-[#48D597]/20 bg-[#48D597]/5 backdrop-blur-sm">
        <div className="container py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#48D597] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#48D597]"></span>
            </span>
            <span className="text-sm font-medium text-[#345460]">
              {serviceCapacity[service]} {serviceLabels[service].toLowerCase()} spots open today
            </span>
          </div>
          <button
            onClick={openBookingModal}
            className="text-sm font-semibold text-[#48D597] hover:text-[#3bc085] transition-colors"
          >
            Book Now →
          </button>
        </div>
      </div>
    );
  }

  const todaySpots = serviceData.today.spotsLeft;
  const tomorrowSpots = serviceData.tomorrow.spotsLeft;
  const urgency = getUrgencyLevel(todaySpots);

  return (
    <div className="sticky top-[72px] z-30 border-b border-[#48D597]/20 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-3">
          {/* Today */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getUrgencyStyles(urgency)}`}>
            {getIcon(urgency)}
            <span>
              Today: {todaySpots === 0 ? "Full" : `${todaySpots} ${todaySpots === 1 ? "spot" : "spots"} left`}
            </span>
          </div>
          {/* Tomorrow */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getUrgencyStyles(getUrgencyLevel(tomorrowSpots))}`}>
            {getIcon(getUrgencyLevel(tomorrowSpots))}
            <span>
              Tomorrow: {tomorrowSpots === 0 ? "Full" : `${tomorrowSpots} ${tomorrowSpots === 1 ? "spot" : "spots"} left`}
            </span>
          </div>
        </div>
        <button
          onClick={openBookingModal}
          className="text-sm font-semibold text-[#48D597] hover:text-[#3bc085] transition-colors whitespace-nowrap"
        >
          Book Now →
        </button>
      </div>
    </div>
  );
}
