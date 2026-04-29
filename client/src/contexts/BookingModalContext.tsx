import { createContext, useContext, useState, type ReactNode } from "react";
import BookingModal from "@/components/BookingModal";

interface BookingModalContextType {
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingModalContext.Provider
      value={{
        openBookingModal: () => setIsOpen(true),
        closeBookingModal: () => setIsOpen(false),
      }}
    >
      {children}
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return context;
}
