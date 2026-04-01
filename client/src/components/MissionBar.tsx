/*
 * Metro Mutts Mission Bar — Dogtopia Foundation bar equivalent
 * Green background, mission text, white outline CTA
 * Matches Dogtopia's green foundation banner
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/mm-logo-dark_455bad7b.png";

export default function MissionBar() {
  return (
    <section className="bg-[#48D597] py-10 lg:py-12">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="Metro Mutts"
          className="h-16 lg:h-20 w-auto shrink-0"
        />

        {/* Mission text */}
        <p className="text-[#345460] text-sm lg:text-base leading-relaxed flex-1">
          Metro Mutts is committed to providing a safe, fun, and enriching environment
          for every dog in Tulsa. We believe every pup deserves the highest level of care,
          socialization, and love. Our mission is to be the trusted partner for pet parents
          who want the very best for their furry family members.
        </p>

        {/* CTA — white outline like Dogtopia */}
        <a
          href="#about"
          className="shrink-0 inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded font-bold text-sm hover:bg-white hover:text-[#48D597] transition-colors"
        >
          learn more &rsaquo;
        </a>
      </div>
    </section>
  );
}
