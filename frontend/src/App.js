import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Addons from "@/components/Addons";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { NOISE_IMG } from "@/lib/media";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen" data-testid="dcx-app">
      <div className="grain-overlay" style={{ backgroundImage: `url(${NOISE_IMG})` }} aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <Leadership />
        <Addons />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <Toaster theme="dark" position="bottom-left" />
    </div>
  );
}

export default App;
