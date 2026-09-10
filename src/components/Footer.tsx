import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-transparent border-t border-white/10 py-12 px-6 md:px-12 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-white font-extrabold uppercase tracking-widest text-lg">
            <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7621B0] to-[#B600A8] flex items-center justify-center text-white text-xs">
              ⚡
            </span>
            <span>O LEELA BHARANI</span>
          </div>
          <p className="text-xs font-mono text-[#9CA3AF]">
            Aditya University • B.Tech AI & ML (2nd Year)
          </p>
        </div>

        {/* Center Tagline */}
        <div className="text-center text-xs text-[#9CA3AF] max-w-xs font-mono uppercase tracking-wider">
          Crafted with React, Framer Motion & 3D Web Design
        </div>

        {/* Right Action & Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 flex items-center justify-center text-white transition-colors duration-500"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-[#C084FC]" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-[#9CA3AF]/60 font-mono">
        © {new Date().getFullYear()} O Leela Bharani. All rights reserved. Designed for Internships & Career Growth.
      </div>
    </footer>
  );
};
