import { motion } from "framer-motion";
import { Globe, Smartphone, Megaphone, Fingerprint, Share2, Clapperboard, ArrowUpRight } from "lucide-react";
import { BENTO_IMG } from "@/lib/media";

const Card = ({ icon: Icon, title, desc, className = "", testid, bg = false, delay = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    data-testid={testid}
    className={`group relative overflow-hidden border border-white/10 bg-[#0F0F11] p-8 md:p-10 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-[#00F0FF]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] ${className}`}
  >
    {bg && (
      <>
        <img src={BENTO_IMG} alt="Abstract 3D geometric shapes in neon light" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25 transition-opacity duration-700 group-hover:opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      </>
    )}
    <div className="relative z-10 flex h-full flex-col justify-between gap-10">
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center border border-white/15 text-[#00F0FF] transition-[box-shadow] duration-500 group-hover:shadow-[0_0_16px_rgba(0,240,255,0.4)]">
          <Icon size={22} />
        </span>
        <ArrowUpRight size={20} className="text-gray-600 transition-[color,transform] duration-500 group-hover:text-[#39FF14] group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <div>
        <h3 className="font-display text-xl md:text-2xl font-light text-white tracking-tight">{title}</h3>
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  </motion.article>
);

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
          <p className="font-tech text-sm md:text-base uppercase tracking-[0.3em] text-[#00F0FF] mb-4" data-testid="services-overline">What we do</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white" data-testid="services-heading">
            Services Built for <span className="text-[#00F0FF]">Dominance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <Card bg testid="service-web-dev" className="lg:col-span-2" icon={Globe} title="Website Development"
            desc="Fast, conversion-focused websites built to rank, load instantly and sell harder." />
          <Card testid="service-app-dev" className="lg:col-span-2" icon={Smartphone} title="Application Development"
            desc="Android, iOS and web apps engineered for scale — clean code, intuitive UX, relentless testing." />
          <Card testid="service-marketing" className="lg:col-span-2" icon={Megaphone} title="Digital Marketing & SEO"
            desc="SEO and data-driven campaigns that turn clicks into customers." />
          <Card testid="service-brand" className="lg:col-span-2" icon={Fingerprint} title="Brand Building"
            desc="Identity, voice and strategy that make your brand unforgettable." />
          <Card testid="service-social" className="lg:col-span-2" icon={Share2} title="Social Media Management"
            desc="End-to-end management of Instagram, Facebook, YouTube, X and LinkedIn." />
          <Card testid="service-video" className="lg:col-span-2" icon={Clapperboard} title="Video Editing"
            desc="Scroll-stopping reels, cinematic edits and brand films for every platform." />
          <motion.a href="#contact" onClick={(e) => { e.preventDefault(); import("./Navbar").then(m => m.scrollTo("#contact")); }}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            data-testid="services-cta-card"
            className="md:col-span-2 lg:col-span-6 group relative flex items-center justify-between overflow-hidden border border-[#39FF14]/40 bg-[#39FF14]/5 p-8 md:p-10 transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]">
            <div>
              <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-[#39FF14] mb-3">Next step</p>
              <p className="font-display text-2xl md:text-3xl font-light text-white tracking-tight">Have a project in mind?<br />Let's build it together.</p>
              <p className="mt-3 text-sm text-gray-400">No jargon, no lock-ins — just honest work that moves your numbers.</p>
            </div>
            <ArrowUpRight size={40} className="text-[#39FF14] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
