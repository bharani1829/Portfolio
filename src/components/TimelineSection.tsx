import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { TimelineItem } from '../types/portfolio';
import {
  GraduationCap,
  Code2,
  Brain,
  Award,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

const timelineData: TimelineItem[] = [
  {
    year: '2024',
    period: 'Academic Milestone',
    title: 'Aditya University Admission & 9.10 CGPA',
    subtitle: 'B.Tech AI & ML First Year',
    description:
      'Started B.Tech AI & ML at Aditya University. Achieved stellar academic excellence with a 9.10 CGPA score in the first year.',
    icon: 'GraduationCap',
    tag: 'Academic Distinction',
    achievements: ['9.10 First Year CGPA', 'Solid C & Problem Solving Foundation'],
  },
  {
    year: '2024',
    period: 'Hands-on Workshop',
    title: 'Skill Cycle Exchange Platform',
    subtitle: 'College Workshop Innovation',
    description:
      'Engineered "Skill Cycle" during an intensive college workshop, enabling peer-to-peer skill exchange and collaborative learning.',
    icon: 'Code2',
    tag: 'Project Launch',
    achievements: ['Peer Collaboration System', 'Interactive User Interface'],
  },
  {
    year: '2025',
    period: 'System Development',
    title: 'ATM Management System in Python',
    subtitle: 'Software Architecture & Logic',
    description:
      'Built a complete ATM financial application featuring account creation, balance inquiry, deposit/withdrawal routines, and transaction security.',
    icon: 'Rocket',
    tag: 'Python Application',
    achievements: ['OOP Financial Engine', 'Transaction Logging'],
  },
  {
    year: '2025',
    period: 'Credential Mastery',
    title: 'Global Certifications & GenAI Analytics',
    subtitle: 'Cisco, Tata Forage & Coursera',
    description:
      'Earned certifications across Cisco (C & Python Essentials), Tata Forage (GenAI Data Analytics), and Coursera (DBMS, Agile, Prompt Engineering).',
    icon: 'Award',
    tag: 'Professional Certifications',
    achievements: ['7 Verified Credentials', 'Generative AI Simulation'],
  },
  {
    year: '2026',
    period: 'Vibe Coding & Version Control',
    title: 'Git, GitHub Mastery & RuralCare 360',
    subtitle: 'AI Development & Open Source Collaboration',
    description:
      'Mastered Git & GitHub version control (push, pull, commit, branch management). Architected and deployed RuralCare 360 healthcare coordination platform using AI tools and Vibe Coding.',
    icon: 'Rocket',
    tag: 'Innovation & Version Control',
    achievements: ['Git Push / Pull / Commit Workflows', 'RuralCare 360 Platform', 'AI Assisted Vibe Coding'],
  },
  {
    year: '2026',
    period: 'Current Pursuit',
    title: '2nd Year B.Tech & AI Exploration',
    subtitle: 'Aditya University Current Focus',
    description:
      'Deepening expertise in Artificial Intelligence, C++ data structure optimizations, relational DBMS schemas, and full-stack web engineering.',
    icon: 'Brain',
    tag: 'Active Specialization',
    achievements: ['AI Model Fundamentals', 'Full-Stack Architecture'],
  },
];

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-24">
          <h2 className="hero-heading font-berkshire text-[clamp(2.5rem,8vw,100px)] leading-none tracking-wide">
            LEARNING JOURNEY
          </h2>
          <p className="text-[#A1A1A6] uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Milestones • Growth • Continuous Innovation
          </p>
        </FadeIn>

        {/* Timeline Vertical Track */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 md:ml-12 space-y-12 sm:space-y-16">
          {timelineData.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1} y={30}>
              <div className="relative pl-8 sm:pl-12 group">
                {/* Timeline Point Orb — Minimal Apple Node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#161618] border border-white/20 flex items-center justify-center text-white group-hover:border-white/50 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  <span className="w-2 h-2 rounded-full bg-[#F5F5F7] group-hover:scale-125 transition-transform duration-300"></span>
                </div>

                {/* Card Wrapper — Apple Graphite Bento */}
                <div className="rounded-[24px] border border-white/10 bg-[#161618]/80 p-6 sm:p-8 hover:border-white/20 hover:bg-[#1C1C1E]/80 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-[#F5F5F7] text-xs font-mono font-medium tracking-wider backdrop-blur-md">
                      {item.year} • {item.period}
                    </span>
                    <span className="text-xs font-mono text-white/50 font-medium">
                      #{item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F5F5F7] mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-mono text-[#A1A1A6] uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </h4>

                  <p className="text-[#A1A1A6] text-sm sm:text-base leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>

                  {/* Highlights Bullet Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {item.achievements.map((ach) => (
                      <span
                        key={ach}
                        className="inline-flex items-center gap-1.5 text-xs text-[#E5E5EA] bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/70" strokeWidth={2} />
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
