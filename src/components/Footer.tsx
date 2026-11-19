import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FAF6EC] border-t border-[#7F011F]/15 py-12 px-6 md:px-12 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2.5 text-[#7F011F] font-bold uppercase tracking-wider text-base font-serif">
            <span>ORSU LEELA BHARANI</span>
          </div>
          <p className="text-xs font-mono text-[#7F011F]/70">
            Aditya University • B.Tech AI & ML (2nd Year)
          </p>
        </div>

        {/* Center Tagline */}
        <div className="text-center text-xs text-[#7F011F]/70 max-w-xs font-mono uppercase tracking-wider">
          Crafted with React, Framer Motion &amp; Elegant Design
        </div>

        {/* Right Action & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/bharani1829"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#7F011F]/20 hover:bg-[#7F011F] hover:text-[#F5EBD0] text-[#7F011F] flex items-center justify-center transition-all duration-200"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/orsu-leela-bharani-973649397"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#7F011F]/20 hover:bg-[#7F011F] hover:text-[#F5EBD0] text-[#7F011F] flex items-center justify-center transition-all duration-200"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:orsuleelabharani18@gmail.com"
            className="w-10 h-10 rounded-full border border-[#7F011F]/20 hover:bg-[#7F011F] hover:text-[#F5EBD0] text-[#7F011F] flex items-center justify-center transition-all duration-200"
            title="Send Email"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#7F011F]/20 hover:bg-[#7F011F] hover:text-[#F5EBD0] text-[#7F011F] flex items-center justify-center transition-all duration-200"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#7F011F]/10 text-center text-[11px] text-[#7F011F]/70 font-mono">
        © {new Date().getFullYear()} Orsu Leela Bharani. All rights reserved. Designed for Internships &amp; Career Growth.
      </div>
    </footer>
  );
};
