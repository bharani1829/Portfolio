import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  label: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ label, href }) => {
  if (!href || href === '#') {
    return (
      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-white/40 text-xs uppercase font-semibold tracking-wider cursor-not-allowed">
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white text-xs uppercase font-semibold tracking-wider hover:bg-white/15 hover:border-[#7621B0] transition-all"
    >
      <span>{label}</span>
      <ExternalLink className="w-3.5 h-3.5" />
    </a>
  );
};
