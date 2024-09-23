import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "How do I contact customer support if I have a question or issue?",
    answer:
      "You can reach our customer support team by emailing support@email.com or calling our toll-free number. We're here to assist you promptly.",
  },
  {
    question: "Can I return the product if it doesn't meet my expectations?",
    answer:
      "Yes, we offer a hassle-free return policy within 30 days of purchase. Contact support for more details.",
  },
  {
    question: "What makes your product stand out from others in the market?",
    answer:
      "Our product features innovative functionality, reliable support, and a user-friendly design, making it unique in the market.",
  },
  {
    question: "Is there a warranty on the product, and what does it cover?",
    answer:
      "Yes, our product comes with a 1-year warranty covering defects in materials and workmanship. It does not cover accidental damage.",
  },
];

const FAQStreamPurchase = () => {
  return (
    <section className="py-12  text-gray-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 px-4">
        <Accordion type="single" collapsible>
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700 focus:outline-none hover:bg-gray-700/50 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700 mt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQStreamPurchase;
