import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

import Background from "./components/ParallaxBackground";
import SmoothScroll from "./components/SmoothScroll";
import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { GithubIcon, LinkedinIcon } from "./components/BrandIcons";
import { Mail, Heart } from "lucide-react";

export default function App() {
  const [intro, setIntro] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.body.style.overflow = intro ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [intro]);

  return (
    <div className="relative text-slate-200">
      {/* Fixed CSS background — stars + radial gradients */}
      <Background />

      {/* Intro loader */}
      <AnimatePresence mode="wait">
        {intro && <IntroLoader key="loader" onComplete={() => setIntro(false)} />}
      </AnimatePresence>

      {!intro && (
        <SmoothScroll>
          {/* Scroll progress bar */}
          <motion.div className="scroll-bar" style={{ scaleX }} />

          <Navbar />

          <Hero />

          <main className="relative z-10">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="relative z-10 py-10 mt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(3,7,18,0.85)", backdropFilter: "blur(16px)" }}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="flex flex-col items-center md:items-start">
                <span className="font-heading font-black text-lg grad-primary">Oleti Dheeraj Kumar</span>
                <span className="text-xs text-slate-500 mt-1">ServiceNow CSA · Full Stack · AI Engineer</span>
              </div>

              <p className="text-xs text-slate-500 flex items-center gap-2">
                © {new Date().getFullYear()} All rights reserved ·
                Built with <Heart size={10} className="text-violet-500 fill-current" /> by Dheeraj
              </p>

              <div className="flex items-center gap-4">
                {[
                  { href: "https://github.com/Dheeraj-1105", icon: <GithubIcon size={17} />, label: "GitHub" },
                  { href: "https://linkedin.com/in/dheerajkumar-oleti-877093315", icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
                  { href: "mailto:dheerajkumaroleti.2005@gmail.com", icon: <Mail size={17} />, label: "Email" },
                ].map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label}
                    className="text-slate-500 hover:text-white transition-colors">{l.icon}</a>
                ))}
              </div>
            </div>
          </footer>
        </SmoothScroll>
      )}
    </div>
  );
}
