import { motion } from "framer-motion";
import { Award } from "lucide-react";

const CERTS = [
  { title: "Certified System Administrator (CSA)", issuer: "ServiceNow", year: "2025", badge: "🏆", color: "#a78bfa", cat: "Enterprise Platform", tags: ["ITSM Config", "Business Rules", "Workflow", "ACL"] },
  { title: "AI Code Sarathi", issuer: "NASSCOM", year: "2024", badge: "🤖", color: "#38bdf8", cat: "Artificial Intelligence", tags: ["LLM Apps", "Prompt Eng", "Python AI", "NLP"] },
  { title: "Data Structures & Algorithms in Java", issuer: "NPTEL", year: "2024", badge: "📊", color: "#60a5fa", cat: "Computer Science", tags: ["Arrays", "Strings", "LinkedList", "Stack", "Queue", "Hashing", "Trees", "Graphs", "Heaps", "Dynamic Programming", "Greedy Algorithms", "Complexities"] },
  { title: "Machine Learning", issuer: "NPTEL", year: "2025", badge: "📊", color: "#60a5fa", cat: "Computer Science", tags: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning", "Classification", "Clustering", "Regression"] },
  { title: "AI/ML Foundations", issuer: "SmartBridge", year: "2024", badge: "🧠", color: "#818cf8", cat: "Machine Learning", tags: ["Supervised", "Neural Nets", "CNN", "NLP"] },
  { title: "Web Development Fundamentals", issuer: "Vault of Codes", year: "2025", badge: "🌐", color: "#38bdf8", cat: "Web Development", tags: ["HTML5/CSS3", "JS ES6+", "Responsive", "Performance"] },
  { title: "TCS iON Career Edge", issuer: "TCS", year: "2024", badge: "⭐", color: "#c084fc", cat: "Professional Dev", tags: ["Communication", "Problem Solving", "Industry Ready"] },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(124,58,237,0.06) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="section-tag mx-auto w-fit">Certifications</div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-heading font-black text-white text-4xl md:text-5xl mb-4">
            Credentials & <span className="grad-primary">Badges</span>
          </motion.h2>
          <div className="section-line" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Industry-recognized credentials validating expertise across AI and enterprise platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="cert-card"
              style={{ border: `1px solid ${c.color}12` }}
              whileHover={{ y: -5, borderColor: `${c.color}40`, boxShadow: `0 0 32px ${c.color}0f, 0 20px 60px rgba(0,0,0,0.3)` } as object}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${c.color}12`, border: `1px solid ${c.color}22`, boxShadow: `0 0 12px ${c.color}30` }}>
                  {c.badge}
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-bold uppercase tracking-widest block" style={{ color: c.color }}>{c.cat}</span>
                  <span className="text-[10px] text-slate-500">{c.year}</span>
                </div>
              </div>

              <h3 className="font-heading font-bold text-white text-sm mb-1.5 leading-snug">{c.title}</h3>
              <div className="flex items-center gap-1.5 mb-4">
                <Award size={11} style={{ color: c.color }} />
                <span className="text-xs font-semibold" style={{ color: c.color }}>{c.issuer}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[9px] font-medium"
                    style={{ background: `${c.color}0a`, border: `1px solid ${c.color}18`, color: `${c.color}cc` }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.14)" }}>
            <Award size={17} className="text-violet-400" />
            <span className="text-sm text-slate-300 font-medium">
              <span className="font-bold text-white">6+</span> certifications across AI,Web
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
