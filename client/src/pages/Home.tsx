/*
 * Metro Mutts Home Page
 * Design: Vibrant Contemporary — "Pawsitive Energy"
 * Teal (#0891B2) primary, Amber (#F59E0B) accent, Navy text
 * Plus Jakarta Sans typography, wave dividers, animated sections
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FounderSpotlight from "@/components/FounderSpotlight";
import InstagramFeed from "@/components/InstagramFeed";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <AboutSection />
        <InstagramFeed />
        <FounderSpotlight />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
