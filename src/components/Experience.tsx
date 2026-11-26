import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle } from "lucide-react";

const EXP = [
  {
    company: "ServiceNow University — Smart Bridge",
    role: "ServiceNow System Administrator Intern",
    duration: "Aug 2025 – Sep 2025",
    location: "Remote",
    tag: "CSA Certified",
    color: "#a78bfa",
    bullets: [
      "Configured and customized ITSM modules including Incident, Problem, and Change Management.",
      "Programmed business rules, workflow automations, ACL lists, and system UI configurations.",
      "Acquired hands-on enterprise service management architecture experience.",
      "Earned the ServiceNow Certified System Administrator (CSA) certification.",
    ],
  },
  {
    company: "Vault of Codes",
    role: "Web Developer Intern",
    duration: "Jun 2025 – Jul 2025",
    location: "Remote",
    tag: "Frontend Focus",
    color: "#60a5fa",
    bullets: [
      "Built responsive, cross-browser web interfaces using HTML5, CSS3, and JavaScript.",
      "Refined UI/UX consistency across components, resolving rendering bugs and optimizing scripts.",
      "Collaborated in an agile team to draft clean, modular frontend components.",
    ],
  },
  {
    company: "SmartBridge",
    role: "AI/ML Training Participant",
    duration: "2024",
    location: "Remote",
    tag: "AI Training",
    color: "#38bdf8",
    bullets: [
      "Completed intensive AI/ML training covering supervised and unsupervised learning.",
      "Worked on image classification and NLP datasets.",
      "Earned SmartBridge certification in AI fundamentals.",
    ],
  },
  {
    company: "Cisco Networking Academy",
    role: "Networking",
    duration: "Jun 2025 – Aug 2025",
    location: "Remote",
    tag: "Networking certified",
    color: "#38bdf8",
    bullets: [
      "Completed Cisco–AICTE Virtual Internship in Networking, covering networking fundamentals, routing, switching, and network security.",
      "Gained practical experience in network configuration, simulation, and troubleshooting using Cisco Packet Tracer.",
      "Earned Cisco Networking Academy certification for successfully completing the Virtual Internship Program in Networking."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 75% 50%, rgba(124,58,237,0.05) 0%, transparent 65%)" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto w-fit">Experience</div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-heading font-black text-white text-4xl md:text-5xl mb-4">
            Work <span className="grad-purple">Journey</span>
          </motion.h2>
          <div className="section-line" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, rgba(124,58,237,0.6), rgba(14,165,233,0.6), rgba(56,189,248,0.3))" }} />

          <div className="space-y-10 pl-14 md:pl-16">
            {EXP.map((e, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative">

                {/* Node */}
                <div className="absolute -left-[38px] md:-left-[42px] top-5 w-5 h-5 rounded-full flex items-center justify-center tl-dot"
                  style={{ background: "#030712", border: `2px solid ${e.color}`, boxShadow: `0 0 12px ${e.color}60` }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: e.color }} />
                </div>

                {/* Card */}
                <motion.div className="glass rounded-2xl p-6 md:p-7"
                  style={{ border: `1px solid ${e.color}12` }}
                  whileHover={{ y: -3, borderColor: `${e.color}35`, boxShadow: `0 0 25px ${e.color}0d, 0 16px 50px rgba(0,0,0,0.25)` }}
                  transition={{ duration: 0.3 }}>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-heading font-bold text-white text-lg">{e.role}</h3>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold"
                          style={{ background: `${e.color}15`, color: e.color, border: `1px solid ${e.color}28` }}>
                          {e.tag}
                        </span>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: e.color }}>{e.company}</p>
                    </div>
                    <div className="flex gap-2 shrink-0 flex-wrap">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-400"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <Calendar size={10} /> {e.duration}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-400"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <MapPin size={10} /> {e.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {e.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: e.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
