import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What services does DCX Marketing Solutions offer?",
    a: "DCX Marketing Solutions is a full-stack digital agency offering website development, application development (Android, iOS and web), digital marketing and SEO, Google Ads management, brand building, social media management, video editing, public relations and business consultancy — all under one roof.",
  },
  {
    q: "Who leads DCX Marketing Solutions?",
    a: "DCX is led by Co-Founder and CEO Ayushi Sethi, a strategist who personally shapes the company's creative and AI-driven marketing vision for every client.",
  },
  {
    q: "Does DCX work with small businesses and startups?",
    a: "Yes. From schools and clinics to tourism operators and chartered accountants, DCX works with businesses of every size — locally and remotely across India.",
  },
  {
    q: "How do I start a project with DCX?",
    a: "Fill in the enquiry form on this page or email info@dcxsolutions.in. Every enquiry lands directly in the DCX inbox and the team replies within one business day.",
  },
  {
    q: "How much does a project with DCX cost?",
    a: "Every project is scoped individually — a landing page, an e-commerce platform and a full marketing retainer all have different needs. Share your requirements through the contact form or email and you will receive a clear, itemised quote within one business day. No hidden costs, no pressure.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope, but most business websites go live in two to four weeks, and marketing campaigns start showing measurable traction within the first month. You get a clear timeline before any work begins, with regular updates throughout.",
  },
  {
    q: "Does DCX offer AI-powered marketing?",
    a: "Yes. DCX pairs human creativity with AI tooling for research, content and campaign optimisation — and this website's own assistant, DC X, is a live example of the AI experiences DCX designs and builds for its clients.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative py-16 md:py-24 bg-[#0A0A0C] border-t border-white/5" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10">
          <p className="font-tech text-sm md:text-base uppercase tracking-[0.3em] text-[#00F0FF] mb-4" data-testid="faq-overline">FAQ</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-white" data-testid="faq-heading">
            Answers <span className="text-[#00F0FF]">Upfront</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-white/10" data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-light text-white hover:text-[#00F0FF] hover:no-underline py-6 transition-colors duration-300" data-testid={`faq-trigger-${i}`}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pb-6" data-testid={`faq-content-${i}`}>
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
