import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactButtonProps {
  label: string;
  href: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ label, href }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#F5F5F7] text-[#0A0A0A] hover:bg-white active:scale-[0.98] text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.3)] whitespace-nowrap"
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
    </a>
  );
};
