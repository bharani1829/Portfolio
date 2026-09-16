import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-transparent border-t border-white/8 py-12 px-6 md:px-12 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2.5 text-[#F5F5F7] font-semibold uppercase tracking-wider text-base">
            <span className="w-6 h-6 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#F5F5F7] text-xs">
              ⚡
            </span>
            <span>O LEELA BHARANI</span>
          </div>
          <p className="text-xs font-mono text-[#A1A1A6]">
            Aditya University • B.Tech AI & ML (2nd Year)
          </p>
        </div>

        {/* Center Tagline */}
        <div className="text-center text-xs text-[#A1A1A6] max-w-xs font-mono uppercase tracking-wider">
          Crafted with React, Framer Motion & 3D Web Design
        </div>

        {/* Right Action & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/bharani1829"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/25 flex items-center justify-center text-[#F5F5F7] transition-all duration-200"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-[#F5F5F7]" />
          </a>
          <a
            href="https://www.linkedin.com/in/orsu-leela-bharani-973649397"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/25 flex items-center justify-center text-[#F5F5F7] transition-all duration-200"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-[#F5F5F7]" />
          </a>
          <a
            href="mailto:orsuleelabharani18@gmail.com"
            className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/25 flex items-center justify-center text-[#F5F5F7] transition-all duration-200"
            title="Send Email"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4 text-[#F5F5F7]" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/25 flex items-center justify-center text-[#F5F5F7] transition-all duration-200"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-[#F5F5F7]" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-[#A1A1A6]/70 font-mono">
        © {new Date().getFullYear()} O Leela Bharani. All rights reserved. Designed for Internships & Career Growth.
      </div>
    </footer>
  );
};
