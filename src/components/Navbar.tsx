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
            className="flex items-center gap-2.5 text-[#7F011F] font-bold uppercase tracking-wider text-base md:text-lg group transition-all duration-300"
          >
            <span className="group-hover:opacity-80 transition-opacity duration-300 tracking-tight font-serif text-lg">
              ORSU LEELA BHARANI
            </span>
          </a>

          {/* Desktop Nav Links — Light Sand capsule with subtle Wine Red border */}
          <nav className="hidden lg:flex items-center gap-7 px-8 py-2.5 rounded-full bg-[#F5EBD0]/90 border border-[#7F011F]/15 backdrop-blur-xl shadow-[0_4px_20px_rgba(127,1,31,0.06)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#7F011F]/75 font-medium tracking-normal text-[13px] hover:text-[#7F011F] transition-colors duration-200"
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#7F011F]/25 bg-transparent text-[#7F011F] text-xs uppercase font-medium tracking-wider hover:bg-[#7F011F]/5 active:scale-[0.98] transition-all duration-200 shadow-sm"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={1.75} />
              <span>GitHub</span>
            </a>
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7F011F] text-[#F5EBD0] text-xs uppercase font-medium tracking-wider hover:bg-[#630018] active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-[#F5EBD0]" strokeWidth={1.75} />
              <span>Resume ↗</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#7F011F] p-2.5 rounded-[14px] bg-[#7F011F]/5 border border-[#7F011F]/20 hover:bg-[#7F011F]/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mx-4 mt-3 rounded-[24px] bg-[#FAF6EC] border border-[#7F011F]/20 py-6 px-7 flex flex-col gap-4 shadow-[0_20px_50px_rgba(127,1,31,0.12)] z-50">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#7F011F]/80 font-medium text-base hover:text-[#7F011F] py-1 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#7F011F]/15 flex flex-col gap-2.5">
              <a
                href="https://github.com/bharani1829"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#7F011F]/30 text-[#7F011F] hover:bg-[#7F011F]/5 font-medium uppercase text-xs tracking-wider shadow-sm transition-all"
              >
                <Github className="w-4 h-4 text-[#7F011F]" strokeWidth={1.75} />
                <span>GitHub Profile</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#7F011F] text-[#F5EBD0] hover:bg-[#630018] font-medium uppercase text-xs tracking-wider shadow-sm transition-all"
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
