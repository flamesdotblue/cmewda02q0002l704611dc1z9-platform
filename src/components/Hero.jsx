import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="mx-auto max-w-6xl px-6 py-28 w-full">
        <motion.p
          className="font-mono text-green-400/80 text-sm mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          0x00: booting portfolio.sys
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-green-200 drop-shadow-[0_0_12px_rgba(34,197,94,0.25)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Hi, I'm Neo Dev
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-green-300/80 leading-relaxed font-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Frontend engineer crafting delightful interfaces and immersive web experiences. I love building fast, accessible, animated UIs with React.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-green-500/20 hover:bg-green-500/30 text-green-200 border border-green-400/40 px-4 py-2 transition-colors"
          >
            <Rocket size={16} /> View Projects
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md hover:bg-green-500/10 text-green-200/90 border border-green-400/30 px-4 py-2 transition-colors"
          >
            <Mail size={16} /> Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
