import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="font-mono text-green-200/90 text-xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          0x02: contact
        </motion.h2>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl border border-green-500/25 bg-black/40 p-8"
          style={{
            background: 'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(0,255,140,0.06), transparent 40%)'
          }}
        >
          <p className="text-green-200/85 max-w-2xl">
            Want to build something together or just say hi? My inbox is always open.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:neo@matrix.dev"
              className="inline-flex items-center gap-2 rounded-md bg-green-500/20 hover:bg-green-500/30 text-green-200 border border-green-400/40 px-4 py-2 transition-colors"
            >
              <Mail size={16} /> neo@matrix.dev
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md hover:bg-green-500/10 text-green-200/90 border border-green-400/30 px-4 py-2 transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md hover:bg-green-500/10 text-green-200/90 border border-green-400/30 px-4 py-2 transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <footer className="mt-10 pt-6 border-t border-green-500/20 text-xs text-green-300/70 font-mono flex items-center justify-between">
            <span>© {new Date().getFullYear()} Neo Dev</span>
            <span>crafted with React + Vite + Tailwind</span>
          </footer>

          <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.04), transparent 30%, transparent 70%, rgba(255,255,255,0.04))'}} />
        </motion.div>
      </div>
    </section>
  );
}
