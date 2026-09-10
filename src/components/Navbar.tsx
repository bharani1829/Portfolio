import React, { useState } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
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
            className="flex items-center gap-2 text-[#D7E2EA] font-extrabold uppercase tracking-widest text-lg md:text-xl lg:text-2xl group transition-all duration-500"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7621B0] to-[#B600A8] flex items-center justify-center text-white text-sm group-hover:rotate-180 transition-transform duration-500 shadow-md shadow-[#7621B0]/50">
              ⚡
            </span>
            <span className="group-hover:text-white transition-colors duration-500">
              BHARANI
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm lg:text-[1.15rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] text-xs uppercase font-medium tracking-wider hover:bg-[#D7E2EA]/10 hover:border-white transition-all duration-200"
            >
              <FileDown className="w-4 h-4 text-[#C084FC]" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#D7E2EA] p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0C0C0C]/95 backdrop-blur-xl border-b border-white/10 py-6 px-8 flex flex-col gap-5 shadow-2xl z-50">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-lg hover:text-white py-1 transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#7621B0] to-[#B600A8] text-white font-medium uppercase text-sm tracking-wider"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </FadeIn>
    </header>
  );
};
