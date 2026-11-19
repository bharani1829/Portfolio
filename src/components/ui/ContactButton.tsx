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
      className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#7F011F] text-[#F5EBD0] hover:bg-[#630018] active:scale-[0.98] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 shadow-md whitespace-nowrap"
    >
      <span>{label} ↗</span>
      <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
    </a>
  );
};
