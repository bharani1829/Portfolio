import React, { useState } from 'react';
import { Menu, X, FileDown, Github } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-50 w-full">
      <FadeIn delay={0} y={-20}>
        <div className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-[#F5F5F7] font-bold uppercase tracking-wider text-base md:text-lg group transition-all duration-300"
          >
            <span className="w-7 h-7 rounded-full bg-white/[0.08] border border-white/12 flex items-center justify-center text-[#F5F5F7] text-xs group-hover:scale-105 transition-transform duration-300 shadow-sm">
              ⚡
            </span>
            <span className="group-hover:text-white transition-colors duration-300 tracking-tight font-sans">
              BHARANI
            </span>
          </a>

          {/* Desktop Nav Links — Apple VisionOS / macOS Frosted Capsule Dock */}
          <nav className="hidden lg:flex items-center gap-7 px-7 py-2 rounded-full bg-[#161618]/80 border border-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#A1A1A6] font-normal tracking-normal text-[13px] hover:text-[#F5F5F7] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/bharani1829"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 shadow-sm text-[#F5F5F7] text-xs uppercase font-medium tracking-wider hover:bg-white/[0.12] hover:border-white/20 active:scale-[0.98] transition-all duration-200"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5 text-[#A1A1A6]" strokeWidth={1.75} />
              <span>GitHub</span>
            </a>
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 shadow-sm text-[#F5F5F7] text-xs uppercase font-medium tracking-wider hover:bg-white/[0.12] hover:border-white/20 active:scale-[0.98] transition-all duration-200"
            >
              <FileDown className="w-3.5 h-3.5 text-[#A1A1A6]" strokeWidth={1.75} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F5F5F7] p-2.5 rounded-[14px] bg-white/[0.06] border border-white/10 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer — Apple VisionOS Squircle */}
        {mobileMenuOpen && (
          <div className="lg:hidden mx-4 mt-3 rounded-[24px] bg-[#161618]/95 backdrop-blur-2xl border border-white/10 py-6 px-7 flex flex-col gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#A1A1A6] font-normal text-base hover:text-white py-1 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="https://github.com/bharani1829"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-[#F5F5F7] hover:bg-white/[0.12] font-medium uppercase text-xs tracking-wider shadow-sm transition-all"
              >
                <Github className="w-4 h-4 text-[#A1A1A6]" strokeWidth={1.75} />
                <span>GitHub Profile</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F5F5F7] text-[#0A0A0A] hover:bg-white font-medium uppercase text-xs tracking-wider shadow-sm transition-all"
              >
                <FileDown className="w-4 h-4" strokeWidth={1.75} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </FadeIn>
    </header>
  );
};
