import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Loader2, Send, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const SERVICES = ["Website Development", "Application Development", "Digital Marketing & SEO", "Brand Building", "Social Media Management", "Video Editing", "Public Relations", "Other"];

const fieldCls = "bg-white/5 border-white/15 text-white placeholder:text-gray-600 rounded-none h-12 text-base md:text-sm focus-visible:ring-[#00F0FF]/60 focus-visible:border-[#00F0FF]/60";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Enquiry sent — the DCX team will reach out shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      toast.error(err.response?.data?.detail || "Could not send your enquiry. Please email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#0A0A0C] border-t border-white/5" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5">
          <p className="font-tech text-[11px] uppercase tracking-[0.3em] text-[#00F0FF] mb-4" data-testid="contact-overline">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-white leading-tight" data-testid="contact-heading">
            Let's make <span className="text-[#39FF14]">Something Loud</span>
          </h2>
          <p className="mt-6 text-base text-gray-400 leading-relaxed max-w-md">
            Tell us about your project. Every enquiry lands directly in the DCX inbox — we reply within one business day.
          </p>
          <div className="mt-10 space-y-5">
            <a href="mailto:info@dcxsolutions.in" data-testid="contact-email-link" className="group flex items-center gap-4 text-gray-300 hover:text-[#00F0FF] transition-colors duration-300">
              <span className="flex h-11 w-11 items-center justify-center border border-white/15 group-hover:border-[#00F0FF]/60 transition-colors duration-300"><Mail size={18} /></span>
              <span className="font-tech text-sm tracking-wide">info@dcxsolutions.in</span>
            </a>
            <a href="https://wa.me/918837688699" target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-link" className="group flex items-center gap-4 text-gray-300 hover:text-[#00F0FF] transition-colors duration-300">
              <span className="flex h-11 w-11 items-center justify-center border border-white/15 group-hover:border-[#00F0FF]/60 transition-colors duration-300"><Phone size={18} /></span>
              <span className="font-tech text-sm tracking-wide">+91 8837688699</span>
            </a>
          </div>
        </motion.div>

        <motion.form onSubmit={submit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 glass p-8 md:p-12 space-y-6" data-testid="contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={fieldCls} data-testid="contact-name-input" />
            <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className={fieldCls} data-testid="contact-email-input" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone (optional)" className={fieldCls} data-testid="contact-phone-input" />
            <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
              <SelectTrigger className={`${fieldCls} w-full`} data-testid="contact-service-select">
                <SelectValue placeholder="Service you're interested in" />
              </SelectTrigger>
              <SelectContent className="bg-[#0F0F11] border-white/15 text-white">
                {SERVICES.map((s) => <SelectItem key={s} value={s} data-testid={`contact-service-option-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project…" rows={5}
            className="bg-white/5 border-white/15 text-white placeholder:text-gray-600 rounded-none text-base md:text-sm focus-visible:ring-[#00F0FF]/60 focus-visible:border-[#00F0FF]/60" data-testid="contact-message-input" />
          <button type="submit" disabled={sending} data-testid="contact-submit-button"
            className="group flex items-center gap-3 rounded-full bg-[#00F0FF] px-8 py-4 font-tech text-xs uppercase tracking-[0.2em] text-black font-bold transition-[transform,box-shadow,opacity] duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,240,255,0.5)] active:scale-95 disabled:opacity-60 disabled:hover:translate-y-0">
            {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
            {sending ? "Transmitting…" : "Send enquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
