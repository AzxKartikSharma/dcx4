import Marquee from "react-fast-marquee";

const ITEMS = ["Website Development", "Application Development", "Digital Marketing", "Brand Building", "Social Media Management", "Video Editing", "Public Relations"];

export default function MarqueeStrip() {
  return (
    <div className="relative py-10 border-y border-white/10 bg-[#050505] overflow-hidden" data-testid="marquee-section">
      <Marquee speed={25} gradient={false} pauseOnHover>
        {ITEMS.map((t) => (
          <span key={t} className="flex items-center">
            <span className="font-display text-5xl md:text-7xl text-outline px-6 whitespace-nowrap">{t}</span>
            <span className="text-[#00F0FF] text-2xl px-2">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
