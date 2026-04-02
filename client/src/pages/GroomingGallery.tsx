/**
 * Metro Mutts Grooming Gallery
 * Brand: Green #48D597, Dark #345460
 * Showcases Jacque's grooming work — 32 real client photos
 * SEO target: "dog grooming Tulsa", "pet grooming gallery Tulsa"
 */
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Scissors, ArrowLeft, Phone } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb";

const groomingPhotos = [
  { src: `${CDN}/groom-01_4138aade.jpg`, alt: "Small dog freshly groomed at Metro Mutts Tulsa" },
  { src: `${CDN}/groom-02_d82e8e44.jpg`, alt: "Happy Corgi with tongue out on the grooming table after a bath and trim" },
  { src: `${CDN}/groom-03_0f1bd748.jpg`, alt: "Rough Collie with a gorgeous flowing coat after a full groom session" },
  { src: `${CDN}/groom-04_51191a74.jpg`, alt: "Goldendoodle with a neat body trim looking adorable on the grooming table" },
  { src: `${CDN}/groom-05_c896f636.jpg`, alt: "Freshly groomed pup ready for pickup at Metro Mutts" },
  { src: `${CDN}/groom-06_aadaadf2.jpg`, alt: "Dog looking sharp after a professional grooming session" },
  { src: `${CDN}/groom-07_b646a579.jpg`, alt: "Clean and fluffy dog after Jacque's expert grooming" },
  { src: `${CDN}/groom-08_c3ea5888.jpg`, alt: "Happy dog on the grooming table after a bath and style" },
  { src: `${CDN}/groom-09_a5c44067.jpg`, alt: "Freshly bathed and trimmed dog at Metro Mutts grooming salon" },
  { src: `${CDN}/groom-10_d4b80439.jpg`, alt: "Dog with a perfect coat after grooming at Metro Mutts Tulsa" },
  { src: `${CDN}/groom-11_45007fc2.jpg`, alt: "Black Standard Poodle with a fresh clip on the grooming table" },
  { src: `${CDN}/groom-12_4818e023.jpg`, alt: "Beautifully groomed dog posing after a spa treatment" },
  { src: `${CDN}/groom-13_68a51d35.jpg`, alt: "Dog looking their best after a full grooming session" },
  { src: `${CDN}/groom-14_c0fc8e4f.jpg`, alt: "Professional breed-specific grooming results at Metro Mutts" },
  { src: `${CDN}/groom-15_e0dc59cd.jpg`, alt: "Freshly groomed and happy pup on the grooming table" },
  { src: `${CDN}/groom-16_dd83a14a.jpg`, alt: "Clean coat and neat trim by groomer Jacque" },
  { src: `${CDN}/groom-17_3cb87f40.jpg`, alt: "Dog with a beautiful grooming cut at Metro Mutts" },
  { src: `${CDN}/groom-18_109b645d.jpg`, alt: "Another satisfied grooming client at Metro Mutts Tulsa" },
  { src: `${CDN}/groom-19_0e7d222c.jpg`, alt: "Professional cut and style on the grooming table" },
  { src: `${CDN}/groom-20_5c1e9e61.jpg`, alt: "Dog looking gorgeous after a full spa day" },
  { src: `${CDN}/groom-21_677232de.jpg`, alt: "Freshly groomed pup ready to go home" },
  { src: `${CDN}/groom-22_7b45e343.jpg`, alt: "Beautiful grooming work by Jacque at Metro Mutts" },
  { src: `${CDN}/groom-23_9d2bdb26.jpg`, alt: "Dog with a perfect trim and clean coat" },
  { src: `${CDN}/groom-24_4242b605.jpg`, alt: "Happy dog after grooming at Metro Mutts in Tulsa" },
  { src: `${CDN}/groom-25_f41b1ebc.jpg`, alt: "Freshly groomed and camera-ready pup" },
  { src: `${CDN}/groom-26_12ee0631.jpg`, alt: "Black and white terrier mix with a neat body clip, tongue out and happy" },
  { src: `${CDN}/groom-27_c8baf2cf.jpg`, alt: "Adorable dog after a grooming session at Metro Mutts" },
  { src: `${CDN}/groom-28_c62a1b94.jpg`, alt: "Dog looking clean and styled after a professional groom" },
  { src: `${CDN}/groom-29_3245c6e2.jpg`, alt: "Freshly bathed and trimmed pup at Metro Mutts grooming" },
  { src: `${CDN}/groom-30_d1d555e9.jpg`, alt: "Dog with a beautiful coat after grooming by Jacque" },
  { src: `${CDN}/groom-31_30a915f6.jpg`, alt: "Happy grooming client on the table at Metro Mutts Tulsa" },
  { src: `${CDN}/groom-32_c1f387b4.jpg`, alt: "Lhasa Apso with a gorgeous flowing golden coat after a full groom" },
];

export default function GroomingGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightbox(index), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox((prev) =>
      prev !== null ? (prev + 1) % groomingPhotos.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) =>
      prev !== null
        ? (prev - 1 + groomingPhotos.length) % groomingPhotos.length
        : null
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, goNext, goPrev]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.003_90)]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#345460] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(72,213,151,0.12),transparent_60%)]" />
        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#48D597]/15 text-[#48D597] text-sm font-bold mb-6 tracking-wide uppercase">
              <Scissors className="w-4 h-4" />
              Grooming by Jacque
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Dog Grooming{" "}
              <span className="text-[#48D597]">Gallery</span>
            </h1>
            <p className="mt-5 text-lg text-white/60 max-w-xl">
              Every pup deserves to look and feel their best. Browse real results
              from our in-house groomer Jacque — baths, trims, breed cuts, and full
              spa treatments right here in Tulsa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:539-867-3841"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#48D597] text-white font-bold hover:bg-[#3bc485] transition-colors shadow-lg shadow-[#48D597]/25"
              >
                <Phone className="w-4 h-4" />
                Book a Grooming — 539-867-3841
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b border-black/5 shadow-sm">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-extrabold text-[#345460]">1,000s</p>
                <p className="text-sm text-[#345460]/50 font-medium">of Happy Grooms</p>
              </div>
              <div className="w-px h-10 bg-[#345460]/10" />
              <div>
                <p className="text-3xl font-extrabold text-[#345460]">All</p>
                <p className="text-sm text-[#345460]/50 font-medium">Breeds Welcome</p>
              </div>
              <div className="w-px h-10 bg-[#345460]/10 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-3xl font-extrabold text-[#345460]">5★</p>
                <p className="text-sm text-[#345460]/50 font-medium">Rated Grooming</p>
              </div>
            </div>
            <p className="text-sm text-[#345460]/40 italic max-w-xs">
              All photos are real clients groomed at Metro Mutts by Jacque.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery grid — masonry columns */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
            {groomingPhotos.map((photo, i) => (
              <motion.button
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                onClick={() => openLightbox(i)}
                className="relative group w-full mb-4 break-inside-avoid rounded-xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48D597] block"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium drop-shadow-lg">
                    {photo.alt}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content section */}
      <section className="py-12 bg-white border-t border-black/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-[#345460] mb-4">
            Professional Dog Grooming in Tulsa, OK
          </h2>
          <div className="prose prose-slate max-w-none text-[#345460]/70 leading-relaxed space-y-4">
            <p>
              At Metro Mutts, our in-house groomer Jacque provides professional dog grooming
              services for all breeds and sizes. From simple baths and nail trims to full
              breed-specific cuts and spa treatments, every dog leaves looking and feeling
              their best.
            </p>
            <p>
              Our grooming services include baths with premium shampoos, haircuts and breed
              cuts, nail trimming and grinding, ear cleaning, teeth brushing, de-shedding
              treatments, and flea &amp; tick baths. We use professional-grade equipment and
              products to ensure your pup gets the best care possible.
            </p>
            <p>
              Located at 1219 E 13th St in Tulsa, Metro Mutts is your one-stop shop for
              dog daycare, boarding, and grooming. Call us at{" "}
              <a href="tel:539-867-3841" className="text-[#48D597] font-semibold hover:underline">
                539-867-3841
              </a>{" "}
              to book a grooming appointment today.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#345460]">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready for Your Pup's{" "}
            <span className="text-[#48D597]">Glow Up?</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Book a grooming appointment with Jacque today. Baths, breed-specific
            cuts, nail trims, teeth brushing, and full spa packages available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:539-867-3841"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#48D597] text-white font-bold hover:bg-[#3bc485] transition-colors shadow-lg shadow-[#48D597]/25"
            >
              <Phone className="w-4 h-4" />
              Call to Book — 539-867-3841
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
              aria-label="Next photo"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={groomingPhotos[lightbox].src}
              alt={groomingPhotos[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/80 text-sm font-medium mb-1">
                {groomingPhotos[lightbox].alt}
              </p>
              <p className="text-white/40 text-xs">
                {lightbox + 1} / {groomingPhotos.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
