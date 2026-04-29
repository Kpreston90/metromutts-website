/**
 * Gingr API Integration
 * Fetches reservation and availability data from the Gingr pet management system.
 * Docs: https://support.gingrapp.com/hc/en-us/articles/25722122517517
 */
import { ENV } from "./_core/env";

const GINGR_BASE = ENV.gingrBaseUrl;
const GINGR_KEY = ENV.gingrApiKey;

interface ReservationType {
  id: number;
  name: string;
  category?: string;
  active: boolean;
  [key: string]: unknown;
}

interface WidgetData {
  check_ins: number;
  check_outs: number;
  overnights: number;
  [key: string]: unknown;
}

interface Reservation {
  id: number;
  reservation_type_id: number;
  reservation_type_name?: string;
  start_date: string;
  end_date: string;
  animal_name?: string;
  owner_name?: string;
  status?: string;
  [key: string]: unknown;
}

export interface AvailabilityData {
  date: string;
  daycare: { booked: number; capacity: number; spotsLeft: number };
  boarding: { booked: number; capacity: number; spotsLeft: number };
  grooming: { booked: number; capacity: number; spotsLeft: number };
  lastUpdated: string;
}

// Default capacities — these should be updated to match actual facility limits
const CAPACITY = {
  daycare: 50, // max dogs per day
  boarding: 20, // max overnight suites
  grooming: 8, // max grooming appointments per day
};

/**
 * Fetch reservation types from Gingr
 */
export async function getReservationTypes(): Promise<ReservationType[]> {
  const url = `${GINGR_BASE}/api/v1/reservation_types?key=${GINGR_KEY}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (!res.ok) {
    throw new Error(`Gingr API error (reservation_types): ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/**
 * Fetch the reservation widget data for a specific date
 */
export async function getWidgetData(date: string): Promise<WidgetData> {
  const url = `${GINGR_BASE}/api/v1/reservation_widget_data?key=${GINGR_KEY}&timestamp=${date}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (!res.ok) {
    throw new Error(`Gingr API error (widget_data): ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/**
 * Fetch reservations within a date range
 */
export async function getReservations(
  startDate: string,
  endDate: string,
  checkedIn: boolean = false
): Promise<Reservation[]> {
  const res = await fetch(`${GINGR_BASE}/api/v1/reservations`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      key: GINGR_KEY,
      start_date: startDate,
      end_date: endDate,
      checked_in: String(checkedIn),
    }),
  });

  if (!res.ok) {
    throw new Error(`Gingr API error (reservations): ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/**
 * Get availability for a specific date by counting reservations against capacity.
 * Groups reservations by type (daycare, boarding, grooming) and calculates remaining spots.
 */
export async function getAvailability(date: string): Promise<AvailabilityData> {
  try {
    // Fetch reservations for the target date
    const reservations = await getReservations(date, date, false);

    // Count reservations by type
    let daycareCount = 0;
    let boardingCount = 0;
    let groomingCount = 0;

    for (const res of reservations) {
      const typeName = (res.reservation_type_name || "").toLowerCase();
      if (typeName.includes("daycare") || typeName.includes("day care")) {
        daycareCount++;
      } else if (typeName.includes("board") || typeName.includes("overnight") || typeName.includes("lodge")) {
        boardingCount++;
      } else if (typeName.includes("groom") || typeName.includes("bath") || typeName.includes("spa")) {
        groomingCount++;
      }
    }

    return {
      date,
      daycare: {
        booked: daycareCount,
        capacity: CAPACITY.daycare,
        spotsLeft: Math.max(0, CAPACITY.daycare - daycareCount),
      },
      boarding: {
        booked: boardingCount,
        capacity: CAPACITY.boarding,
        spotsLeft: Math.max(0, CAPACITY.boarding - boardingCount),
      },
      grooming: {
        booked: groomingCount,
        capacity: CAPACITY.grooming,
        spotsLeft: Math.max(0, CAPACITY.grooming - groomingCount),
      },
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    // Return fallback data if API is unreachable
    console.error("Gingr API error:", error);
    return {
      date,
      daycare: { booked: 0, capacity: CAPACITY.daycare, spotsLeft: CAPACITY.daycare },
      boarding: { booked: 0, capacity: CAPACITY.boarding, spotsLeft: CAPACITY.boarding },
      grooming: { booked: 0, capacity: CAPACITY.grooming, spotsLeft: CAPACITY.grooming },
      lastUpdated: new Date().toISOString(),
    };
  }
}

/**
 * Get availability for today and tomorrow (most common use case for the toast)
 */
export async function getTodayAndTomorrowAvailability(): Promise<{
  today: AvailabilityData;
  tomorrow: AvailabilityData;
}> {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayStr = today.toISOString().split("T")[0];
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  const [todayData, tomorrowData] = await Promise.all([
    getAvailability(todayStr),
    getAvailability(tomorrowStr),
  ]);

  return { today: todayData, tomorrow: tomorrowData };
}
