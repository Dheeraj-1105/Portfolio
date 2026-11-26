import { motion } from "framer-motion";
import { GraduationCap, Target, Zap, Calendar } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(124,58,237,0.06) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto w-fit">About Me</div>
          <motion.h2 {...fadeUp(0.05)} className="font-heading font-black text-white text-4xl md:text-5xl mb-4">
            Who I <span className="grad-primary">Am</span>
          </motion.h2>
          <div className="section-line" />
          <motion.p {...fadeUp(0.15)} className="text-slate-400 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            A Computer Science undergraduate with a passion for Software development,
            Web developer, AI developer and engineering AI-driven solutions that solve real problems.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Education */}
          <motion.div {...fadeUp(0)} className="glass rounded-2xl p-7"
            style={{ border: "1px solid rgba(124,58,237,0.15)" }}
            whileHover={{ y: -4, borderColor: "rgba(124,58,237,0.35)", boxShadow: "0 0 30px rgba(124,58,237,0.1), 0 20px 60px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.3 }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(124,58,237,0.1)" }}>
              <GraduationCap className="text-violet-400" size={22} />
            </div>
            <h3 className="font-heading font-bold text-white text-lg mb-5">Education</h3>
            <div className="space-y-4">
              {[
                { deg: "B.Tech — Computer Science", school: "Anurag University, Hyderabad", gpa: "9.40", period: "2023–2027", color: "#a78bfa" },
                { deg: "Intermediate (MPC)", school: "Narayana Junior College, AP", gpa: "9.68", period: "2021–2023", color: "#60a5fa" },
                { deg: "S.S.C", school: "CVR English Medium High School", gpa: "10.0", period: "2015–2021", color: "#38bdf8" },
              ].map((item, i) => (
                <div key={i} className="pl-4 relative">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full"
                    style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                  {i < 2 && <div className="absolute left-[3px] top-3.5 w-px bottom-[-16px]"
                    style={{ background: "rgba(255,255,255,0.05)" }} />}
                  <p className="text-sm font-semibold text-slate-200">{item.deg}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.school}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={10} className="text-slate-500" />
                    <span className="text-[10px] text-slate-500">{item.period}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                      style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}25` }}>
                      {item.gpa} GPA
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div {...fadeUp(0.1)} className="glass rounded-2xl p-7"
            style={{ border: "1px solid rgba(14,165,233,0.15)" }}
            whileHover={{ y: -4, borderColor: "rgba(14,165,233,0.35)", boxShadow: "0 0 30px rgba(14,165,233,0.1), 0 20px 60px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.3 }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(14,165,233,0.1)" }}>
              <Target className="text-sky-400" size={22} />
            </div>
            <h3 className="font-heading font-bold text-white text-lg mb-5">Career Goals</h3>
            <div className="space-y-4">
              {[
                { emoji: "🚀", title: "Software Engineering", desc: "Build scalable, production-grade systems at top-tier tech companies." },
                { emoji: "☁️", title: "ServiceNow", desc: "Architect enterprise ITSM workflows." },
                { emoji: "🤖", title: "AI Integration", desc: "Engineer LLM-powered automation pipelines solving real-world problems." },
              ].map((g, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-xl shrink-0">{g.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{g.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.2)} className="glass rounded-2xl p-7 md:col-span-2 lg:col-span-1"
            style={{ border: "1px solid rgba(99,102,241,0.15)" }}
            whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.35)", boxShadow: "0 0 30px rgba(99,102,241,0.1), 0 20px 60px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.3 }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(99,102,241,0.1)" }}>
              <Zap className="text-indigo-400" size={22} />
            </div>
            <h3 className="font-heading font-bold text-white text-lg mb-5">At a Glance</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "9.40", label: "GPA", color: "#a78bfa" },
                { val: "300+", label: "DSA Problems", color: "#60a5fa" },
                { val: "CSA", label: "ServiceNow Cert", color: "#38bdf8" },
                { val: "3+", label: "Internships", color: "#818cf8" },
                { val: "10+", label: "Certifications", color: "#a78bfa" },
                { val: "5+", label: "AI Projects", color: "#60a5fa" },
              ].map((s, i) => (
                <div key={i} className="p-3 rounded-xl text-center"
                  style={{ background: `${s.color}08`, border: `1px solid ${s.color}18` }}>
                  <p className="font-heading font-black text-2xl" style={{ color: s.color }}>{s.val}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature row */}
        <motion.div {...fadeUp(0.25)} className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "⚙️", label: "Systems Architect", desc: "Designs scalable, high-performance back-end systems." },
            { icon: "🏆", label: "ServiceNow CSA", desc: "Certified admin with ITSM module customization expertise." },
            { icon: "🤖", label: "AI Developer", desc: "Creates intelligent LLM-powered automation pipelines." },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
