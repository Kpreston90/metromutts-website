import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface SEOFaqSectionProps {
  title: string;
  subtitle?: string;
  faqs: FaqItem[];
  /** JSON-LD FAQ schema injected as a script tag for SEO */
  schemaId?: string;
}

/**
 * SEO-optimized FAQ section with:
 * 1. Visible accordion UI for users
 * 2. JSON-LD FAQPage structured data for Google rich results
 * 3. Semantic HTML with proper heading hierarchy
 */
export default function SEOFaqSection({ title, subtitle, faqs, schemaId }: SEOFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 px-4 bg-white" id={schemaId || "faq-section"}>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#345460] tracking-tight mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#345460]/60 text-lg">{subtitle}</p>
          )}
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#345460]/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#48D597]/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#345460] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#48D597] shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-[#345460]/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
