import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-green-300 selection:bg-green-500/30 selection:text-green-100">
      <MatrixBackground />

      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-sm/0 bg-black/30 border-b border-green-500/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-mono text-green-300 hover:text-green-100 transition-colors">// dev-matrix</a>
          <nav className="hidden sm:flex items-center gap-6 font-mono text-sm">
            <a href="#projects" className="hover:text-green-100 transition-colors">projects</a>
            <a href="#contact" className="hover:text-green-100 transition-colors">contact</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-green-100 transition-colors">github</a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.08]" style={{backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,100,0.3) 0px, rgba(0,255,100,0.3) 1px, transparent 1px, transparent 3px)'}} />
    </div>
  );
}
