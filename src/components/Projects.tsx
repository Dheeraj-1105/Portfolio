import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "./BrandIcons";
import { Layers, Code2, Cpu, Sparkles, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: "diabetic-retinopathy",
    subtitle: "AI-Powered Diabetic Retinopathy System",
    title: "Diabetic Retinopathy Detection & Severity Assessment Using Deep Learning",
    description: "An AI-powered clinical decision-support system that analyzes retinal fundus images, classifies diabetic retinopathy into five severity levels, and generates personalized preventive recommendations using deep learning.",
    architecture: [
      "End-to-end image preprocessing pipeline with CLAHE, resizing, and data augmentation",
      "Transfer learning architecture using EfficientNet-B0 and ResNet50 CNN models",
      "FastAPI REST backend for real-time image classification and preventive recommendations",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "FastAPI",
      "REST APIs",
    ],
    features: [
      "Five-level severity classification — No DR, Mild, Moderate, Severe, and Proliferative DR",
      "ResNet50 classification model achieving 79.64% test accuracy",
      "Grad-CAM visualization for explainable AI predictions",
      "Personalized prevention recommendation engine based on predicted severity",
      "Performance evaluation using Accuracy, Precision, Recall, F1-score, and Confusion Matrix",
    ],
    github: "https://github.com/Dheeraj-1105/DiabeticRetinopathy",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.25)",
    icon: "👁️",
  },
  {
    id: "coderefine",
    subtitle: "CodeRefine AI",
    title: "AI-Powered Code Review & Quality Analysis System",
    description: "A scalable AI pipeline that analyzes code quality, detects security vulnerabilities, and delivers context-aware micro-optimizations using LLMs.",
    architecture: [
      "FastAPI REST layer with structured JSON serialization schemas",
      "LLM integration with custom prompt engineering for code analysis",
      "Async task queue for concurrent multi-file code scanning",
    ],
    stack: ["FastAPI", "Python", "LLM", "REST APIs", "JSON Schemas", "Async"],
    features: [
      "Real-time security vulnerability detection with severity levels",
      "AI-generated optimization suggestions (Critical / High / Medium / Low)",
      "Multi-language code analysis — Python, Java, JavaScript",
    ],
    github: "https://github.com/Dheeraj-1105/code_refine",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.25)",
    icon: "🔍",
  },
  {
    id: "agri",
    subtitle: "Smart Agriculture Advisor",
    title: "AI-Based Agri-Advisory Field Agent",
    description: "A multilingual AI assistant enabling farmers to diagnose crop diseases, access weather data, and get expert advisory via voice, photo, or text.",
    architecture: [
      "React dashboard with real-time weather and market price feeds",
      "FastAPI backend with image classification pipeline",
      "Speech-to-text for regional Indian language support",
    ],
    stack: ["Typescript", "Firebase", "Whisper API", "Grok", "computer vision"],
    features: [
      "Voice input/output in regional Indian languages (Hindi, Telugu)",
      "Leaf disease detection with 94%+ accuracy",
      "Real-time weather, pest warnings and micro-market price feeds",
    ],
    github: "https://github.com/Dheeraj-1105/agrifield",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.25)",
    icon: "🌾",
  },
];

type Stage = "overview" | "architecture" | "stack" | "features" | "links";
const STAGES: Stage[] = ["overview", "architecture", "stack", "features", "links"];
const STAGE_META: Record<Stage, { label: string; icon: React.ReactNode }> = {
  overview: { label: "Overview", icon: <Sparkles size={13} /> },
  architecture: { label: "Architecture", icon: <Layers size={13} /> },
  stack: { label: "Tech Stack", icon: <Code2 size={13} /> },
  features: { label: "Features", icon: <Cpu size={13} /> },
  links: { label: "Explore", icon: <ExternalLink size={13} /> },
};

function ProjectCard({ p, reverse }: { p: typeof PROJECTS[0]; reverse?: boolean }) {
  const [stage, setStage] = useState<Stage>("overview");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      {/* Visual panel */}
      <div className={`relative rounded-2xl overflow-hidden ${reverse ? "lg:order-2" : ""}`}
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${p.color}0d, rgba(15,23,42,0.8))`, border: `1px solid ${p.color}20`, minHeight: 280 }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `linear-gradient(${p.color}30 1px, transparent 1px), linear-gradient(90deg, ${p.color}30 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />

        <div className="relative z-10 flex flex-col items-center justify-center h-full py-12 gap-5">
          <motion.span className="text-7xl" animate={{ scale: [1, 1.06, 1], rotate: [0, 2, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>{p.icon}</motion.span>

          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-1 h-1 rounded-full pointer-events-none"
              style={{ background: p.color, top: `${18 + i * 14}%`, left: `${10 + i * 16}%`, opacity: 0.45 }}
              animate={{ y: [-5, 5, -5], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }} />
          ))}

          {/* Stage dots */}
          <div className="flex gap-2">
            {STAGES.map((s) => (
              <button key={s} onClick={() => setStage(s)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: stage === s ? p.color : "rgba(255,255,255,0.18)",
                  boxShadow: stage === s ? `0 0 8px ${p.glow}` : "none",
                  transform: stage === s ? "scale(1.5)" : "scale(1)",
                }} />
            ))}
          </div>
        </div>

        {/* Stage tabs */}
        <div className="absolute bottom-0 inset-x-0 flex gap-1.5 p-3 overflow-x-auto">
          {STAGES.map((s) => (
            <button key={s} onClick={() => setStage(s)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold shrink-0 transition-all duration-250"
              style={{
                background: stage === s ? `${p.color}20` : "rgba(255,255,255,0.04)",
                border: `1px solid ${stage === s ? p.color + "45" : "rgba(255,255,255,0.06)"}`,
                color: stage === s ? p.color : "rgba(148,163,184,0.6)",
              }}>
              {STAGE_META[s].icon}{STAGE_META[s].label}
            </button>
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div className={`space-y-5 ${reverse ? "lg:order-1" : ""}`}>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{ background: `${p.color}10`, border: `1px solid ${p.color}28`, color: p.color }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color, boxShadow: `0 0 6px ${p.glow}` }} />
          {p.subtitle}
        </span>

        <h3 className="font-heading font-black text-white text-2xl md:text-3xl leading-tight">{p.title}</h3>

        <div className="glass rounded-2xl p-5 min-h-[200px]" style={{ border: `1px solid ${p.color}12` }}>
          <AnimatePresence mode="wait">
            <motion.div key={stage}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}>

              <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: `1px solid ${p.color}12` }}>
                <span style={{ color: p.color }}>{STAGE_META[stage].icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: p.color }}>
                  {STAGE_META[stage].label}
                </span>
              </div>

              {stage === "overview" && <p className="text-slate-300 text-sm leading-relaxed">{p.description}</p>}

              {stage === "architecture" && (
                <ul className="space-y-2.5">
                  {p.architecture.map((item, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }} className="flex gap-2.5 text-sm text-slate-300">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: p.color }} />{item}
                    </motion.li>
                  ))}
                </ul>
              )}

              {stage === "stack" && (
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t, i) => (
                    <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: `${p.color}10`, border: `1px solid ${p.color}28`, color: p.color }}>
                      {t}
                    </motion.span>
                  ))}
                </div>
              )}

              {stage === "features" && (
                <ul className="space-y-2">
                  {p.features.map((f, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }} className="flex gap-2.5 text-sm text-slate-300">
                      <span className="shrink-0 text-xs mt-0.5" style={{ color: p.color }}>✦</span>{f}
                    </motion.li>
                  ))}
                </ul>
              )}

              {stage === "links" && (
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-slate-400">Explore the full implementation and source code on GitHub.</p>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white w-fit"
                    style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)`, boxShadow: `0 0 20px ${p.glow}` }}>
                    <GithubIcon size={15} /> View on GitHub
                  </a>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-tag mx-auto w-fit">Projects</div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-heading font-black text-white text-4xl md:text-5xl mb-4">
            Featured <span className="grad-primary">Work</span>
          </motion.h2>
          <div className="section-line" />
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Scroll to explore architecture, tech stack, and key features of each project.
          </p>
        </div>

        <div className="space-y-20">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
