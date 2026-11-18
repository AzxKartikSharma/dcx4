import { motion } from "framer-motion";
import { Search, Share2, Target, Clapperboard } from "lucide-react";

const ADDONS = [
  {
    icon: Search,
    title: "Google Ads",
    tag: "Google Ads Agency in Jammu and Kashmir | DCX Marketing Solutions",
    desc: "Reach customers already searching for you. We set up, track and optimise Google Ads campaigns that bring qualified leads.",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    tag: "Facebook & Instagram Ads in Jammu and Kashmir | DCX Marketing Solutions",
    desc: "Get discovered by the right audience with Meta Ads built around your offer, creative and lead goals.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    tag: "Lead Generation Services in J&K | DCX Marketing Solutions",
    desc: "Campaigns and funnels focused on qualified leads, not just clicks.",
  },
  {
    icon: Clapperboard,
    title: "Video & Motion Ads",
    tag: "Video Editing & Motion Graphics Ads | DCX Marketing Solutions",
    desc: "Scroll-stopping videos and motion graphics ads for social media and campaigns.",
  },
];

export default function Addons() {
  return (
    <section id="addons" className="relative py-16 md:py-24" data-testid="addons-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
          <p className="font-tech text-sm md:text-base uppercase tracking-[0.3em] text-[#00F0FF] mb-4" data-testid="addons-overline">Add-On'S</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white" data-testid="addons-heading">
            Customized <span className="text-[#00F0FF]">Advertisements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADDONS.map((a, i) => (
            <motion.article key={a.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.1 }}
              data-testid={`addon-${a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="group border border-white/10 bg-[#0F0F11] p-8 md:p-10 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-[#00F0FF]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]">
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 text-[#00F0FF] transition-[box-shadow] duration-500 group-hover:shadow-[0_0_16px_rgba(0,240,255,0.4)]">
                  <a.icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-light text-white tracking-tight">{a.title}</h3>
                  <p className="mt-2 font-tech text-[10px] uppercase tracking-[0.15em] text-[#39FF14] leading-relaxed">{a.tag}</p>
                  <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
