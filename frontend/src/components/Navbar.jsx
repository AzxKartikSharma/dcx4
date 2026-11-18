import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Add-On's", href: "#addons" },
  { label: "Testimonials", href: "#testimonials" },
];

export const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header data-testid="navbar" className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-500 ${scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent"}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-[70px]">
        <a href="#home" onClick={(e) => go(e, "#home")} data-testid="nav-logo-link" className="flex items-center gap-3">
          <Logo size={34} />
          <span className="font-display text-xs sm:text-sm tracking-[0.2em] text-white">DCX MARKETING <span className="text-[#00F0FF]">SOLUTIONS</span></span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="font-tech text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-[#00F0FF] transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => go(e, "#contact")} data-testid="nav-cta-button"
            className="group flex items-center gap-2 rounded-full border border-[#00F0FF]/50 px-5 py-2 font-tech text-[11px] uppercase tracking-[0.2em] text-[#00F0FF] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#00F0FF]/10 hover:shadow-[0_0_18px_rgba(0,240,255,0.35)]">
            Start a project <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <button data-testid="nav-menu-toggle" className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}
            className="lg:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-5" data-testid="nav-mobile-menu">
            {[...LINKS, { label: "Contact", href: "#contact" }].map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className="font-display text-lg text-gray-200 hover:text-[#00F0FF] transition-colors duration-300">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
