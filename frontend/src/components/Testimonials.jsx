import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  { quote: "DCX handled our school's digital marketing with such care. Admissions enquiries rose noticeably after their campaigns, and parents constantly compliment our online presence. Professional, patient and always a phone call away.", name: "Sr. Rosy", role: "Principal, CMC Convent School", initials: "SR" },
  { quote: "Their social media team understood our school's values instantly. Our pages now reflect the warmth of our campus, events get the attention they deserve, and engagement from parents has never been higher.", name: "The Principal", role: "St. Joseph Convent School", initials: "SJ" },
  { quote: "I knew nothing about Google Ads. DCX set everything up, explained it simply, and within weeks new clients were finding my practice online. My business presence has genuinely grown.", name: "Dheeraj", role: "Chartered Accountant", initials: "DR" },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const go = (d) => { setDir(d); setIdx((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const t = TESTIMONIALS[idx];

  return (
    <section id="testimonials" className="relative py-16 md:py-24 overflow-hidden" data-testid="testimonials-section">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10">
          <p className="font-tech text-[11px] uppercase tracking-[0.3em] text-[#00F0FF] mb-4" data-testid="testimonials-overline">Word on the street</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white" data-testid="testimonials-heading">Client <span className="text-[#00F0FF]">Signals</span></h2>
        </motion.div>

        <div className="relative border border-white/10 bg-[#0F0F11] p-6 sm:p-8 md:p-14 min-h-[420px] sm:min-h-[320px]" data-testid="testimonial-card">
          <Quote size={48} className="text-[#00F0FF]/20 absolute top-8 right-8" />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure key={idx} custom={dir}
              initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
              <blockquote className="text-lg md:text-2xl text-gray-200 leading-relaxed font-light max-w-3xl" data-testid="testimonial-quote">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#00F0FF]/40 font-tech text-sm text-[#00F0FF]">{t.initials}</span>
                <div>
                  <p className="font-display text-sm text-white tracking-wide" data-testid="testimonial-name">{t.name}</p>
                  <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1" data-testid="testimonial-role">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-3">
            <button onClick={() => go(-1)} data-testid="testimonial-prev" aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-[border-color,color,transform] duration-300 hover:border-[#00F0FF] hover:text-[#00F0FF] active:scale-90">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => go(1)} data-testid="testimonial-next" aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-[border-color,color,transform] duration-300 hover:border-[#00F0FF] hover:text-[#00F0FF] active:scale-90">
              <ChevronRight size={20} />
            </button>
          </div>
          <p className="font-tech text-xs tracking-[0.25em] text-gray-500" data-testid="testimonial-counter">
            {String(idx + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
