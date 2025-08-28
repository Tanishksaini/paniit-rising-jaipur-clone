import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can attend Rising Rajasthan 2025?",
      answer: "Founders, CXOs, investors, policymakers, alumni, students, researchers, and anyone interested in the intersection of technology and innovation are welcome to attend."
    },
    {
      question: "Will there be investor access?",
      answer: "Yes—live pitches, speed-dating, and curated VC networking sessions are integral parts of the event. We'll have 100+ investors and VCs participating."
    },
    {
      question: "How do I exhibit my startup?",
      answer: "Apply via 'Exhibit Your Startup' section. Limited booths are available on a first-come, first-served basis. Early bird applications receive priority consideration."
    },
    {
      question: "Are there cultural elements?",
      answer: "Yes—folk fusion performances, chai corners representing different IITs, nostalgia lounges, open mics, and traditional Rajasthani hospitality throughout the event."
    },
    {
      question: "What about refunds and transfers?",
      answer: "Tickets are transferable to other participants. Refund policy follows registration terms and conditions. Please contact us for specific transfer requests."
    },
    {
      question: "Is accommodation provided?",
      answer: "We'll provide recommendations for nearby hotels and accommodations. Special rates may be available for conference attendees."
    },
    {
      question: "What networking opportunities are available?",
      answer: "Multiple networking sessions, chai corners, exhibition halls, garden activations, meals, and dedicated spaces for meaningful connections throughout both days."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Everything you need to know about Rising Rajasthan 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover-lift animate-fade-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-primary hover:text-accent font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;