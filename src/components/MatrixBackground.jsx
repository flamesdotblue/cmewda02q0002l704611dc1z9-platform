import React, { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const katakana = 'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = (katakana + latin + nums).split('');

    let columns = 0;
    let fontSize = 16;
    let drops = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      fontSize = Math.max(14, Math.min(22, Math.floor(width / 60)));
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -50));
      ctx.font = `${fontSize}px monospace`;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < columns; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // leading character glow
        ctx.shadowColor = 'rgba(0,255,140,0.7)';
        ctx.shadowBlur = 8;
        ctx.fillStyle = 'rgba(180,255,210,0.95)';
        ctx.fillText(text, x, y);

        // trailing character
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(0,255,140,0.6)';
        ctx.fillText(text, x, y - fontSize);

        if (y > height + Math.random() * 100) {
          drops[i] = Math.floor(Math.random() * -40);
        } else {
          drops[i]++;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
    </div>
  );
}
