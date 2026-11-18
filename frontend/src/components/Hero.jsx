import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { HERO_IMG } from "@/lib/media";
import { scrollTo } from "./Navbar";

const line = {
  hidden: { y: "115%" },
  show: (i) => ({ y: "0%", transition: { duration: 0.9, delay: 0.25 + i * 0.15, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 60, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 60, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="home" ref={ref} onMouseMove={onMove} data-testid="hero-section"
      className="relative min-h-screen flex items-end overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img src={HERO_IMG} alt="Futuristic neon tunnel — DCX Marketing Solutions digital technology" fetchPriority="high" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70" />
      </motion.div>

      <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
        className="absolute right-[6%] top-[18%] hidden lg:block w-[380px] h-[480px] -z-0 border border-white/15 overflow-hidden"
        data-testid="hero-spotlight-frame">
        <img src={HERO_IMG} alt="Futuristic neon tunnel backdrop" loading="lazy" decoding="async" className="w-full h-full object-cover scale-110 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <p className="absolute bottom-4 left-4 font-tech text-[10px] uppercase tracking-[0.2em] text-[#00F0FF]">EST. JAMMU — IND</p>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-32 w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.8 }}
          className="font-tech text-sm md:text-base uppercase tracking-[0.3em] text-[#00F0FF] mb-8 flex items-center gap-2" data-testid="hero-overline">
          <Sparkles size={14} /> DCX Marketing Solutions
        </motion.p>

        <h1 className="font-display font-black leading-[0.95] tracking-tight text-[13vw] md:text-[8.5vw] lg:text-8xl text-white" data-testid="hero-heading">
          {["WE ENGINEER", "DIGITAL", "GRAVITY"].map((t, i) => (
            <span key={t} className="block overflow-hidden pb-1">
              <motion.span custom={i} variants={line} initial="hidden" animate="show" className="block">
                {i === 2 ? <span className="text-outline-accent">{t}</span> : t}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-xl text-base md:text-lg text-gray-400 leading-relaxed" data-testid="hero-subtext">
          The Best Marketing Agency for Brands that refuse to be ordinary.
          Brand Development, Social Media Management, Business Consultancy, Application Development, Website Development and AI-Driven Marketing — Engineered under One Roof.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4">
          <button onClick={() => scrollTo("#contact")} data-testid="hero-cta-start"
            className="w-full sm:w-auto text-center rounded-full bg-[#00F0FF] px-8 py-4 font-tech text-xs uppercase tracking-[0.2em] text-black font-bold transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,240,255,0.5)] active:scale-95">
            Start a project
          </button>
          <button onClick={() => scrollTo("#services")} data-testid="hero-cta-services"
            className="w-full sm:w-auto text-center rounded-full border border-white/25 px-8 py-4 font-tech text-xs uppercase tracking-[0.2em] text-white transition-[transform,border-color,color] duration-300 hover:-translate-y-1 hover:border-[#39FF14] hover:text-[#39FF14] active:scale-95">
            Explore services
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="mt-16 flex items-center gap-3 font-tech text-[10px] uppercase tracking-[0.25em] text-gray-500">
          <ArrowDown size={14} className="animate-bounce" /> Scroll to decode
        </motion.div>
      </div>
    </section>
  );
}
