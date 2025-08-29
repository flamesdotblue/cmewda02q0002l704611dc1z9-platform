import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Hacker Terminal UI',
    description:
      'A retro terminal interface with command parsing, file system emulation, and animated CRT scanlines.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: '3D Scene Explorer',
    description:
      'Interactive 3D viewer with orbital controls, smooth transitions, and dynamic lighting.',
    tech: ['React', 'Three.js', 'Postprocessing'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Realtime Dashboard',
    description:
      'Streams live metrics with websockets, animated charts, and themeable UI components.',
    tech: ['Vite', 'WebSockets', 'D3.js'],
    github: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="font-mono text-green-200/90 text-xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          0x01: selected projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative rounded-lg border border-green-500/20 bg-black/40 backdrop-blur-[1px] p-5 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(0,255,140,0.08), transparent 40%)'
              }} />
              <div className="relative">
                <h3 className="text-lg text-green-100 font-semibold tracking-wide">{p.title}</h3>
                <p className="mt-2 text-sm text-green-200/80 leading-relaxed">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-green-300/80">
                  {p.tech.map(t => (
                    <li key={t} className="px-2 py-1 rounded border border-green-500/20 bg-green-500/5">{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-green-200/90 hover:text-green-100 transition-colors">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-green-200/90 hover:text-green-100 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
