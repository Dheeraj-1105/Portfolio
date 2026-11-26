import { motion } from "framer-motion";

interface Group { category: string; color: string; glow: string; icon: string; skills: string[]; }

const GROUPS: Group[] = [
  { category: "Frontend", color: "#60a5fa", glow: "rgba(96,165,250,0.3)", icon: "🖥️", skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript", "JavaScript"] },
  { category: "Backend", color: "#a78bfa", glow: "rgba(167,139,250,0.3)", icon: "⚙️", skills: ["Spring Boot", "FastAPI", "REST APIs", "Node.js", "JSON Schemas"] },
  { category: "ServiceNow", color: "#38bdf8", glow: "rgba(56,189,248,0.3)", icon: "☁️", skills: ["ServiceNow CSA", "ITSM Modules", "Workflow Automation", "ACL Config", "Business Rules"] },
  { category: "Artificial Intelligence", color: "#818cf8", glow: "rgba(129,140,248,0.3)", icon: "🤖", skills: ["LLM Integration", "Prompt Engineering", "Computer Vision", "NLP", "AI Pipelines", "Deep Learning", "Machine Learning"] },
  { category: "Programming Languages", color: "#a78bfa", glow: "rgba(167,139,250,0.3)", icon: "💻", skills: ["Java", "Python", "C Language", "SQL"] },
  { category: "Tools", color: "#38bdf8", glow: "rgba(56,189,248,0.3)", icon: "🔧", skills: ["Git & GitHub", "VS Code", "Postman", "MySQL", "Excel", "Tableau"] },
];

const FLOATERS = [
  { icon: "⚛️", label: "React", style: { top: "12%", left: "2%" } },
  { icon: "🐍", label: "Python", style: { top: "30%", right: "2%" } },
  { icon: "🔧", label: "ServiceNow", style: { bottom: "15%", right: "2%" } },
  { icon: "☕", label: "Java", style: { top: "65%", left: "2%" } },
  { icon: "🌱", label: "Spring Boot", style: { top: "50%", right: "1%" } },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 25% 50%, rgba(96,165,250,0.05) 0%, transparent 65%)" }} />

      {/* Floating icons — desktop only */}
      {FLOATERS.map((f, i) => (
        <motion.div key={i} className="absolute pointer-events-none hidden xl:flex flex-col items-center gap-1"
          style={f.style as React.CSSProperties}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          animate={{ y: [-6, 6, -6] }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg glass-sm"
            style={{ boxShadow: "0 0 12px rgba(124,58,237,0.12)" }}>
            {f.icon}
          </div>
          <span className="text-[9px] text-slate-600 font-medium">{f.label}</span>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="section-tag mx-auto w-fit">Tech Stack</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-heading font-black text-white text-4xl md:text-5xl mb-4">
            Technical <span className="grad-blue">Arsenal</span>
          </motion.h2>
          <div className="section-line" />
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
            A curated ecosystem of technologies I use to build, scale, and automate.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((g, gi) => (
            <motion.div key={g.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6 group"
              style={{ border: `1px solid ${g.color}18` }}
              whileHover={{ y: -4, borderColor: `${g.color}45`, boxShadow: `0 0 28px ${g.glow}, 0 20px 60px rgba(0,0,0,0.25)` }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{g.icon}</span>
                <h3 className="font-heading font-bold text-sm" style={{ color: g.color }}>{g.category}</h3>
                <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: g.color, boxShadow: `0 0 6px ${g.glow}` }} />
              </div>

              {/* Pill badges */}
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <motion.span key={s}
                    className="skill-pill"
                    style={{ background: `${g.color}0a`, border: `1px solid ${g.color}22`, color: g.color }}
                    whileHover={{ y: -2, scale: 1.06, backgroundColor: `${g.color}20`, borderColor: `${g.color}60`, boxShadow: `0 0 14px ${g.glow}`, color: "#fff" }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-10">
          Currently exploring{" "}
          <span className="text-violet-400 font-semibold">RAG</span>,{" "}
          <span className="text-sky-400 font-semibold">GenerativeAI</span> &{" "}
          <span className="text-blue-400 font-semibold">LLMs</span>
        </motion.p>
      </div>
    </section>
  );
}
