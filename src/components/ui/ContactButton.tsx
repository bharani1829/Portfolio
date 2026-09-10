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
      className="contact-btn-bg inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-white text-xs sm:text-sm font-medium uppercase tracking-widest hover:scale-105 transition-transform duration-500 whitespace-nowrap"
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
};
