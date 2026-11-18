import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { scrollTo } from "./Navbar";

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/solutionsdcx/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/solutionsdcx/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@solutionsdcx", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/solutionsdcx", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/110223419/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16 md:py-20 overflow-hidden" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <span className="font-display text-lg tracking-[0.2em] text-white">DCX MARKETING SOLUTIONS</span>
            </div>
            <p className="mt-6 max-w-sm text-sm text-gray-500 leading-relaxed">
              DCX Marketing Solutions helps businesses in Jammu and across India get found, build trust and turn attention into enquiries. From brand building and web development to Google Ads, Meta Ads and lead generation, our team handles it all so you deal with one agency, not five.
            </p>
            <div className="mt-8 flex gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`DCX Solutions on ${s.label}`}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-gray-400 transition-[color,border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:text-[#00F0FF] hover:border-[#00F0FF]/60 hover:shadow-[0_0_16px_rgba(0,240,255,0.35)]">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-3 font-tech text-xs tracking-[0.2em] uppercase text-gray-500">
            <a href="mailto:info@dcxsolutions.in" data-testid="footer-email-link" className="hover:text-[#00F0FF] transition-colors duration-300">info@dcxsolutions.in</a>
            <a href="https://wa.me/918837688699" target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp-link" className="hover:text-[#00F0FF] transition-colors duration-300">+91 8837688699</a>
            <button onClick={() => scrollTo("#home")} data-testid="footer-back-to-top" className="mt-2 text-[#39FF14] hover:text-white transition-colors duration-300 uppercase">Back to top ↑</button>
          </div>
        </div>

        <div className="mt-12 select-none overflow-hidden" aria-hidden="true">
          <p className="font-display font-black text-[18vw] leading-none text-outline text-center tracking-tight">DCX</p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-3 border-t border-white/10 pt-8 font-tech text-[10px] uppercase tracking-[0.2em] text-gray-600">
          <p data-testid="footer-copyright">© 2026 DCX Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
