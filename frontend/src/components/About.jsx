import { motion } from "framer-motion";
import { Cpu, Target, Rocket } from "lucide-react";

const PILLARS = [
  { icon: Cpu, title: "AI- First Thinking", desc: "We pair human creativity with AI tooling for research, content and campaign optimisation — faster output, sharper results." },
  { icon: Target, title: "Local Roots, Global Standards", desc: "Born in Jammu, built to compete anywhere. We understand the local market and execute at an international level." },
  { icon: Rocket, title: "One Team, Full Stack", desc: "Strategy, Design, Development, Marketing and PR under one Roof — no hand-offs, no dilution of your vision." },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5">
          <p className="font-tech text-sm md:text-base uppercase tracking-[0.3em] text-[#00F0FF] mb-4" data-testid="about-overline">Who we are</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight" data-testid="about-heading">
            A Tech & <span className="text-[#00F0FF]">Marketing</span> Company
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-7">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed" data-testid="about-copy">
            DCX Solutions is where Engineering meets Storytelling. We build the Websites and Applications your Business runs On — then we make sure the world finds them. From Brand Building and Social Media Management to Video Editing and Public Relations, Everything we do is measured against One Metric : YOUR OVERALL GROWTH.
          </p>
          <p className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed" data-testid="about-copy-2">
            Every Engagement starts with Strategy : We Study Your Market, Your Competitors and Your Customers before a single Pixel is Placed. Then Our Designers, Developers and Marketers execute as One Team — So your Website, your App and your Campaigns all speak the same language. The result is a brand presence that Looks Premium, Loads Fast and Turns Visitors into Customers. Whether you need a single Landing Page or a Complete Digital Presence, you get one accountable team and one clear point of contact from Day 1.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`about-pillar-${i}`} className="border border-white/10 bg-[#0F0F11] p-6 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-[#39FF14]/40">
                <p.icon size={22} className="text-[#39FF14]" />
                <h3 className="font-display text-sm font-light text-white mt-4 tracking-tight">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mt-3">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
