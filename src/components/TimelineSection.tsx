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
    year: '2025',
    period: 'Joined College',
    title: 'Aditya University Admission & 9.10 CGPA',
    subtitle: 'B.Tech AI & ML First Year',
    description:
      'Joined B.Tech AI & ML at Aditya University in 2025. Achieved stellar academic excellence with a 9.10 CGPA score in the first year.',
    icon: 'GraduationCap',
    tag: 'Academic Distinction',
    achievements: ['Joined College in 2025', '9.10 First Year CGPA', 'Solid C & Problem Solving Foundation'],
  },
  {
    year: '2025',
    period: 'System Development',
    title: 'ATM Management System in Python',
    subtitle: 'Software Architecture & Logic',
    description:
      'Built a complete ATM financial application in 2025 featuring account creation, balance inquiry, deposit/withdrawal routines, and transaction security.',
    icon: 'Rocket',
    tag: 'Python Application',
    achievements: ['Developed in 2025', 'OOP Financial Engine', 'Transaction Logging'],
  },
  {
    year: '2026',
    period: 'Hands-on Workshop',
    title: 'Skill Cycle Exchange Platform',
    subtitle: 'College Workshop Innovation',
    description:
      'Engineered "Skill Cycle" during an intensive college workshop in 2026, enabling peer-to-peer skill exchange and collaborative learning.',
    icon: 'Code2',
    tag: 'Project Launch',
    achievements: ['Peer Collaboration System', 'Interactive User Interface'],
  },
  {
    year: '2026',
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
      'Mastered Git & GitHub version control (push, pull, commit, branch management). Architected and deployed RuralCare 360 healthcare coordination platform for Smart India Hackathon using AI tools and Vibe Coding.',
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
      'Deepening expertise in Artificial Intelligence, C++ data structure optimizations, relational DBMS schemas, and responsive web design with HTML & CSS.',
    icon: 'Brain',
    tag: 'Active Specialization',
    achievements: ['AI Model Fundamentals', 'Web Design (HTML & CSS)'],
  },
];

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-24">
          <h2 className="hero-heading font-serif text-[clamp(2.5rem,8vw,100px)] leading-none tracking-wide text-[#7F011F]">
            LEARNING JOURNEY
          </h2>
          <p className="text-[#7F011F]/70 uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Milestones • Growth • Continuous Innovation
          </p>
        </FadeIn>

        {/* Timeline Vertical Track */}
        <div className="relative border-l border-[#7F011F]/20 ml-4 sm:ml-8 md:ml-12 space-y-12 sm:space-y-16">
          {timelineData.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1} y={30}>
              <div className="relative pl-8 sm:pl-12 group">
                {/* Timeline Point Orb */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#FAF6EC] border-2 border-[#7F011F] flex items-center justify-center text-[#7F011F] group-hover:bg-[#7F011F] group-hover:text-[#F5EBD0] transition-all duration-300 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7F011F] group-hover:bg-[#F5EBD0] transition-colors duration-300"></span>
                </div>

                {/* Card Wrapper */}
                <div className="rounded-[24px] border border-[#7F011F]/15 bg-[#FAF6EC] p-6 sm:p-8 hover:border-[#7F011F]/30 transition-all duration-300 shadow-[0_8px_28px_rgba(127,1,31,0.05)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3.5 py-1 rounded-full bg-[#F5EBD0] border border-[#7F011F]/15 text-[#7F011F] text-xs font-mono font-semibold tracking-wider">
                      {item.year} • {item.period}
                    </span>
                    <span className="text-xs font-mono text-[#7F011F]/60 font-semibold">
                      #{item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#7F011F] mb-1 font-serif">
                    {item.title}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-mono text-[#7F011F]/70 uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </h4>

                  <p className="text-[#7F011F]/80 text-sm sm:text-base leading-relaxed mb-5 font-normal font-sans">
                    {item.description}
                  </p>

                  {/* Highlights Bullet Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#7F011F]/10">
                    {item.achievements.map((ach) => (
                      <span
                        key={ach}
                        className="inline-flex items-center gap-1.5 text-xs text-[#7F011F] bg-[#F5EBD0] px-3.5 py-1.5 rounded-full border border-[#7F011F]/15"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={2} />
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
