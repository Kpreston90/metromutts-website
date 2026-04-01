/*
 * Metro Mutts Home Page — Dogtopia-style section order
 * Navbar → Hero → Intro → ServiceCards → StatsBar → TestimonialsBar
 * → FacilitySection → AboutSection → GallerySection → MissionBar → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServiceCards from "@/components/ServiceCards";
import StatsBar from "@/components/StatsBar";
import TestimonialsBar from "@/components/TestimonialsBar";
import FacilitySection from "@/components/FacilitySection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import MissionBar from "@/components/MissionBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ServiceCards />
        <StatsBar />
        <TestimonialsBar />
        <FacilitySection />
        <AboutSection />
        <GallerySection />
        <MissionBar />
      </main>
      <Footer />
    </div>
  );
}
