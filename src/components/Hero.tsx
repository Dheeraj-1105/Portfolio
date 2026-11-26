import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Eye, Mail, ExternalLink } from "lucide-react";

const ROLES = [
  "Software Engineer and developer",
  "ServiceNow Certified",
  "AI-Powered Solution Builder",
  "Web Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((p) => (p + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      setMouseGlow({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mouse-reactive ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 70%)",
          left: `${mouseGlow.x}%`,
          top: `${mouseGlow.y}%`,
          transform: "translate(-50%,-50%)",
          transition: "left 0.9s ease, top 0.9s ease",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Static accent orbs */}
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ top: "8%", left: "8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", filter: "blur(50px)", zIndex: 1 }} />
      <div aria-hidden="true" className="absolute pointer-events-none" style={{ bottom: "12%", right: "8%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)", filter: "blur(50px)", zIndex: 1 }} />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-sm mb-10"
          style={{ border: "1px solid rgba(124,58,237,0.25)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-violet-300">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-slate-400 text-lg md:text-xl tracking-wide mb-2"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black tracking-tight text-white leading-none mb-6"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          Oleti{" "}
          <span className="grad-primary">Dheeraj</span>
          <br />
          Kumar
        </motion.h1>

        {/* Animated role */}
        <div className="h-10 md:h-14 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIdx}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.45 }}
              className="font-heading font-semibold text-xl md:text-3xl grad-blue"
            >
              {ROLES[roleIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mb-12"
        >
          CS undergraduate with a{" "}
          <span className="text-sky-400 font-semibold">9.40 GPA</span>, building scalable
          AI systems, enterprise and software development.{" "}
          <span className="text-violet-400 font-semibold">ServiceNow</span> workflows,
          and full-stack applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <button
            id="hero-projects"
            onClick={() => scrollTo("projects")}
            className="btn-primary"
          >
            <Eye size={15} />
            View Projects
          </button>

          <a
            id="hero-experience"
            href={`${import.meta.env.BASE_URL}Oleti_Dheeraj_Kumar_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <ExternalLink size={14} />
            View Resume
          </a>

          <a
            id="hero-download"
            href={`${import.meta.env.BASE_URL}Oleti_Dheeraj_Kumar_Resume.pdf`}
            download="Oleti_Dheeraj_Kumar_Resume.pdf"
            className="btn-ghost"
          >
            <Download size={14} />
            Download CV
          </a>

          <button
            id="hero-contact"
            onClick={() => scrollTo("contact")}
            className="btn-ghost"
          >
            <Mail size={14} />
            Contact Me
          </button>
        </motion.div>

        {/* Tech row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap gap-2 justify-center mt-14"
        >
          {["React", "Java", "Python", "FastAPI", "ServiceNow", "Spring Boot", "Node.js", "SQL", "REST APIs"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-medium text-slate-500"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer z-10"
        style={{ background: "none", border: "none" }}
      >
        <span className="text-[10px] uppercase tracking-[4px] font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.button>
    </section>
  );
}
