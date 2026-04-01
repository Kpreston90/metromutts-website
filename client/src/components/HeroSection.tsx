/*
 * Metro Mutts Hero — Dogtopia-style full-width hero photo
 * Large photo fills viewport, logo centered on image
 * No text overlay except logo — clean like Dogtopia
 */

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-dogs-group-daycare_55f83d1f.jpeg";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-logo-white_a0eef0bd.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden">
      {/* Background photo — full bleed like Dogtopia */}
      <img
        src={HERO_IMG}
        alt="Happy dogs playing at Metro Mutts daycare in Tulsa"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Subtle overlay for logo readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered logo overlay — like Dogtopia's hero */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={LOGO_URL}
          alt="Metro Mutts"
          className="w-56 sm:w-72 lg:w-96 xl:w-[26rem] h-auto drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  );
}
