import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className={`mx-3 mt-3 rounded-2xl transition-all duration-400 ${scrolled ? "glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""}`}>
        <nav className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" onClick={(e) => go(e, "home")}
            className="font-heading font-black text-xl tracking-wide grad-primary">
            ODK
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {LINKS.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <a key={id} href={`#${id}`} onClick={(e) => go(e, id)}
                  className={`relative px-3 py-1.5 rounded-lg text-[13px] font-semibold tracking-wide transition-colors duration-200 ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`}>
                  {isActive && (
                    <motion.span layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile burger */}
          <button id="nav-burger" onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl glass-sm text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-2 rounded-2xl glass-nav border border-white/5 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {LINKS.map(({ id, label }) => (
                <a key={id} href={`#${id}`} onClick={(e) => go(e, id)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
