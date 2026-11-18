import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import Logo from "./Logo";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const WELCOME = { role: "assistant", content: "Hey, I'm DC X — DCX Marketing Solutions' AI assistant. Ask me about our websites, apps, marketing or anything DCX." };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef(null);
  const [sessionId] = useState(() => {
    let s = localStorage.getItem("dcx_chat_session");
    if (!s) {
      s = crypto.randomUUID();
      localStorage.setItem("dcx_chat_session", s);
    }
    return s;
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    fetch(`${API}/chat/history/${sessionId}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.messages?.length) setMessages([WELCOME, ...d.messages]);
      })
      .catch(() => {});
  }, [sessionId]);

  const send = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    setBusy(true);
    setMessages((m) => [...m, { role: "user", content: text }, { role: "assistant", content: "" }]);
    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: text }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Chat failed");
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let buf = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const parts = buf.split("\n\n");
        buf = parts.pop();
        for (const p of parts) {
          const line = p.trim();
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (payload === "[DONE]") break;
          try {
            const obj = JSON.parse(payload);
            if (obj.error) throw new Error(obj.error);
            if (obj.token) {
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: "assistant", content: copy[copy.length - 1].content + obj.token };
                return copy;
              });
            }
          } catch (parseErr) {
            if (parseErr.message !== "Unexpected end of JSON input") throw parseErr;
          }
        }
      }
    } catch (err) {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: err.message || "DC X is momentarily unavailable — please email info@dcxsolutions.in." };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setOpen(!open)} data-testid="chat-toggle-button" aria-label="Chat with DC X"
        className="fixed bottom-5 right-5 z-[70] flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#00F0FF] text-black shadow-[0_0_24px_rgba(0,240,255,0.5)] transition-[transform,box-shadow] duration-300 hover:scale-110 hover:shadow-[0_0_36px_rgba(0,240,255,0.7)] active:scale-95"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            data-testid="chat-panel"
            className="fixed bottom-[4.75rem] right-3 left-3 sm:left-auto sm:right-6 z-[70] sm:w-[calc(100vw-2rem)] sm:max-w-sm h-[min(480px,calc(100dvh-7.5rem))] flex flex-col overflow-hidden border border-white/15 bg-[#0A0A0C]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 bg-white/[0.03]">
              <Logo size={32} />
              <div>
                <p className="font-display text-sm text-white tracking-wide" data-testid="chat-title">DC X</p>
                <p className="font-tech text-[9px] uppercase tracking-[0.2em] text-[#00F0FF]">AI assistant · DCX Marketing Solutions</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" data-testid="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-[#00F0FF] text-black rounded-2xl rounded-br-sm" : "bg-white/[0.06] border border-white/10 text-gray-200 rounded-2xl rounded-bl-sm"}`}
                    data-testid={`chat-message-${m.role}-${i}`}>
                    {m.content || <Loader2 size={16} className="animate-spin text-[#00F0FF]" />}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <form onSubmit={send} className="flex items-center gap-2 border-t border-white/10 p-3" data-testid="chat-form">
              <input
                value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask DC X anything…" maxLength={2000}
                data-testid="chat-input"
                className="flex-1 min-w-0 bg-white/5 border border-white/15 px-4 py-2.5 text-base md:text-sm text-white placeholder:text-gray-600 outline-none focus:border-[#00F0FF]/60 rounded-full transition-colors duration-300"
              />
              <button type="submit" disabled={busy || !input.trim()} data-testid="chat-send-button" aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00F0FF] text-black transition-[transform,opacity] duration-300 hover:scale-105 active:scale-90 disabled:opacity-40">
                {busy ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
