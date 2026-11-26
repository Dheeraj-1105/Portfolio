import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, Loader2, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const INFO = [
  { icon: <Mail size={17} />, label: "Email", val: "dheerajkumaroleti.2005@gmail.com", href: "mailto:dheerajkumaroleti.2005@gmail.com", color: "#a78bfa" },
  { icon: <Phone size={17} />, label: "Phone", val: "+91 7013779728", href: "tel:+917013779728", color: "#38bdf8" },
  { icon: <GithubIcon size={17} />, label: "GitHub", val: "github.com/Dheeraj-1105", href: "https://github.com/Dheeraj-1105", color: "#60a5fa" },
  { icon: <LinkedinIcon size={17} />, label: "LinkedIn", val: "in/dheerajkumar-oleti", href: "https://www.linkedin.com/in/dheeraj-kumar-oleti-877093315/", color: "#818cf8" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [toast, setToast] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrMsg("");
    if (!form.name || !form.email || !form.message) {
      setStatus("error"); setErrMsg("Please fill in all required fields."); return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus("error"); setErrMsg("Please enter a valid email address."); return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("idle");
    setForm({ name: "", email: "", message: "" });
    setToast(true);
    setTimeout(() => setToast(false), 5000);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(124,58,237,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(14,165,233,0.05) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag mx-auto w-fit">Contact</div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-heading font-black text-white text-4xl md:text-5xl mb-4">
            Get In <span className="grad-primary">Touch</span>
          </motion.h2>
          <div className="section-line" />
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Open for opportunities, collaborations, and interesting conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <h3 className="font-heading font-bold text-white text-xl mb-2">Contact Details</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Looking to collaborate on AI systems, software development,build enterprise workflows, or just chat? I respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {INFO.map((item, i) => (
                <motion.a key={i} href={item.href} target="_blank" rel="noreferrer"
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass group"
                  style={{ border: `1px solid ${item.color}10` }}
                  whileHover={{ y: -2, borderColor: `${item.color}35`, boxShadow: `0 0 18px ${item.color}0c` } as object}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${item.color}10`, color: item.color }}>{item.icon}</div>
                  <div className="min-w-0">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 block">{item.label}</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate block">{item.val}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.14)" }}>
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Available for Opportunities</p>
                <p className="text-xs text-slate-400">Open to full-time, internships & freelance</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 md:p-8" style={{ border: "1px solid rgba(124,58,237,0.1)" }}>
              <form onSubmit={onSubmit} className="space-y-4" noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="c-name" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Name <span className="text-violet-400">*</span>
                    </label>
                    <input id="c-name" name="name" type="text" value={form.name} onChange={onChange}
                      placeholder="John Doe" className="form-input" required />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="c-email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Email <span className="text-violet-400">*</span>
                    </label>
                    <input id="c-email" name="email" type="email" value={form.email} onChange={onChange}
                      placeholder="john@company.com" className="form-input" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="c-msg" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea id="c-msg" name="message" value={form.message} onChange={onChange}
                    placeholder="Tell me about your project, opportunity, or just say hello…"
                    rows={5} className="form-input resize-none" required />
                </div>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2.5 p-3 rounded-xl text-sm text-red-300"
                      style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)" }}>
                      <span className="shrink-0">⚠️</span>{errMsg}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button id="c-submit" type="submit" disabled={status === "loading"}
                  className="btn-primary w-full justify-center"
                  style={{ opacity: status === "loading" ? 0.7 : 1 }}>
                  {status === "loading"
                    ? <><Loader2 size={15} className="animate-spin" /> Sending…</>
                    : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div className="toast"
            initial={{ opacity: 0, y: 24, x: 24 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(56,189,248,0.12)" }}>
              <CheckCircle2 size={17} className="text-sky-400" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Message sent!</p>
              <p className="text-xs text-slate-400 mt-0.5">I'll get back within 24 hours.</p>
            </div>
            <button onClick={() => setToast(false)} className="ml-auto text-slate-500 hover:text-white transition-colors"
              style={{ background: "none", border: "none", cursor: "pointer" }}>
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
