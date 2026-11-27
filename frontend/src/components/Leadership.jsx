import { motion } from "framer-motion";

const LEADERS = [
  {
    name: "Ayushi",
    role: "Founder ",
    initial: "A",
    testid: "leader-ayushi",
    bio: "Ayushi is the visionary force behind DCX Marketing Solutions, Jammu and Kashmir. A Strategist at Heart, She started DCX with a Single Conviction — that World-Class Technology and Marketing shouldn't be limited to Metro Cities. She leads the company's creative and AI-driven Marketing Vision, personally shaping Brand Strategies for Clients across Industries. Under her leadership, DCX has grown into one of the most trusted names for Brand Building, PR, Digital Marketing and Social Media Management. She believes every Business deserves a Digital Presence that punches far above its weight.",}
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-16 md:py-24 bg-[#0A0A0C] border-y border-white/5" data-testid="leadership-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
          <p className="font-tech text-sm md:text-base uppercase tracking-[0.3em] text-[#00F0FF] mb-4" data-testid="leadership-overline">Leadership</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white" data-testid="leadership-heading">
            The Minds Behind <span className="text-[#39FF14]">DCX</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {LEADERS.map((p, i) => (
            <motion.article key={p.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.15 }}
              data-testid={p.testid}
              className="group relative border border-white/10 bg-[#0F0F11] overflow-hidden p-8 md:p-12 transition-[border-color,box-shadow] duration-500 hover:border-[#00F0FF]/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              <span aria-hidden="true" className="absolute -right-4 -bottom-10 font-display font-black text-[11rem] leading-none text-outline opacity-40 select-none transition-opacity duration-700 group-hover:opacity-70">
                {p.initial}
              </span>
              <div className="relative z-10">
                <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-[#00F0FF]" data-testid={`${p.testid}-role`}>{p.role}</p>
                <h3 className="font-display text-3xl font-light text-white mt-2 tracking-tight" data-testid={`${p.testid}-name`}>{p.name}</h3>
                <p className="mt-5 text-sm md:text-base text-gray-400 leading-relaxed max-w-lg">{p.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
