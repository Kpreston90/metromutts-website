/*
 * Metro Mutts Photo Gallery
 * Brand: Green #48D597, Dark #345460
 * Filterable masonry grid with lightbox viewer
 */
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Daycare", "Boarding", "Grooming", "Outdoor", "Facility"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  span?: "tall" | "wide";
}

const images: GalleryImage[] = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/gallery-outdoor-play-WdnZ6ZRGdfmfH9AXZXQADi.webp",
    alt: "Staff supervising dogs playing in the outdoor turf area",
    category: "Outdoor",
    span: "wide",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/gallery-grooming-closeup-Ur97hjpVj8G2zT3crW4Unz.webp",
    alt: "Professional groomer carefully trimming a Bichon Frise",
    category: "Grooming",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/gallery-dogs-playing-BfSr5ehaeRPFzukQGEBYsh.webp",
    alt: "Dogs playing together on the indoor turf area",
    category: "Daycare",
    span: "wide",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/gallery-boarding-suite-NGgLa8N2gBsHjTEPTDyyGJ.webp",
    alt: "Golden retriever relaxing in a cozy boarding suite",
    category: "Boarding",
    span: "tall",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/gallery-puppy-first-day-TXuN382bJytMRacCgEbhJv.webp",
    alt: "Puppy with red bandana meeting a staff member on first day",
    category: "Daycare",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/reception-welcome-aBghJbxUirJ4BZnJwhtVtQ.webp",
    alt: "Staff greeting a customer and golden retriever at the front desk",
    category: "Facility",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/reception-welcome-aBghJbxUirJ4BZnJwhtVtQ.webp",
    alt: "Metro Mutts reception area with staff greeting customers",
    category: "Facility",
    span: "wide",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/new-staff-cuddle-PjhfHvXzFSDCVuoaoZZxq6.webp",
    alt: "Staff member cuddling with a happy dog",
    category: "Daycare",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/new-daycare-9JTdpbodWw4zW5xQhTfmzM.webp",
    alt: "Dogs socializing in the indoor daycare area",
    category: "Daycare",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/new-boarding-v2-CwC54XGXncXGgfsW4r5qkv.webp",
    alt: "Dog settling into a comfortable boarding space",
    category: "Boarding",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/new-grooming-v2-P52m7Vwun9UEmDTRAQJb3H.webp",
    alt: "Professional grooming session in progress",
    category: "Grooming",
    span: "tall",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/realistic-indoor-play-ZvWc5A7LSn5PUgeFcAKee5.webp",
    alt: "Spacious indoor play area with dogs and staff",
    category: "Facility",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  const openLightbox = useCallback((index: number) => setLightbox(index), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.003_90)]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#345460] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(72,213,151,0.12),transparent_60%)]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48D597]/15 text-[#48D597] text-sm font-bold mb-6 tracking-wide uppercase">
              <Camera className="w-4 h-4" />
              Photo Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              A Day in the Life at{" "}
              <span className="text-[#48D597]">Metro Mutts</span>
            </h1>
            <p className="mt-5 text-lg text-white/60 max-w-xl">
              Take a peek inside our facility — from the outdoor play yard to
              the grooming suite and cozy boarding rooms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setLightbox(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  filter === cat
                    ? "bg-[#48D597] text-white shadow-md shadow-[#48D597]/25"
                    : "bg-[#345460]/5 text-[#345460]/70 hover:bg-[#345460]/10"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({images.filter((img) => img.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.button
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => openLightbox(i)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48D597] ${
                    img.span === "wide"
                      ? "sm:col-span-2"
                      : img.span === "tall"
                        ? "row-span-2"
                        : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-2">
                      {img.category}
                    </span>
                    <p className="text-white text-sm font-medium leading-snug">
                      {img.alt}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#345460]/40">
              <Camera className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p className="text-lg font-medium">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#345460]">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Want to See It in Person?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Schedule a free tour and let your pup check out the play areas firsthand.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#48D597] text-white font-bold rounded-full hover:bg-[#3bc485] transition-colors shadow-lg shadow-[#48D597]/25"
          >
            Book a Free Visit
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.img
              key={filtered[lightbox]?.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/80 text-sm font-medium max-w-md">
                {filtered[lightbox]?.alt}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightbox + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
