import { Faq } from "@/seo/faqs";

/**
 * Visible FAQ list. Each question is an <h3> immediately followed by its
 * answer, the structure answer engines extract most reliably. Pass the same
 * array to the route's `faqs` in src/seo/routes.ts so the FAQPage JSON-LD matches.
 */
const FaqSection = ({
  faqs,
  title = "Frequently asked questions",
  className = "",
}: {
  faqs: Faq[];
  title?: string;
  className?: string;
}) => (
  <section className={`max-w-3xl mx-auto px-4 ${className}`}>
    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    <div className="mt-6 space-y-4">
      {faqs.map((faq) => (
        <div key={faq.question} className="rounded-2xl border border-border bg-background p-6">
          <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FaqSection;
