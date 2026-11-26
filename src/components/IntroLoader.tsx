import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPct((p) => (p >= 100 ? 100 : p + 3)), 50);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (pct >= 100) setTimeout(onComplete, 380);
  }, [pct, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "#030712" }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 60% at 30% 20%, rgba(124,58,237,0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 75% 80%, rgba(14,165,233,0.08) 0%, transparent 60%)"
      }} />

      {/* Stars */}
      {Array.from({ length: 40 }, (_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: i % 4 === 0 ? 2 : 1.2,
          height: i % 4 === 0 ? 2 : 1.2,
          borderRadius: "50%",
          background: "white",
          top: `${((i * 37) % 97)}%`,
          left: `${((i * 53) % 99)}%`,
          opacity: 0.25 + (i % 5) * 0.1,
        }} />
      ))}

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-heading font-black text-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(14,165,233,0.1))",
              border: "1px solid rgba(124,58,237,0.3)",
              boxShadow: "0 0 40px rgba(124,58,237,0.18)",
            }}>
            <span className="grad-primary">ODK</span>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="font-heading text-2xl font-black text-white mb-1">
          Oleti Dheeraj Kumar
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
          className="text-slate-400 text-sm mb-10 font-mono">
          Software Engineer · Web developer · AI developer
        </motion.p>

        {/* Progress bar */}
        <div className="w-52 md:w-64 h-px rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
          <div className="h-full rounded-full transition-all duration-50"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, #7c3aed, #60a5fa, #38bdf8)",
              boxShadow: "0 0 8px rgba(124,58,237,0.6)",
            }} />
        </div>
        <p className="text-xs text-slate-500 mt-3 font-mono">{pct}%</p>
      </div>
    </motion.div>
  );
}
