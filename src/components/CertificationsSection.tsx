import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { Award, ShieldCheck, ExternalLink, Cpu, CheckCircle2, Trophy, Flame } from 'lucide-react';
import { Certification } from '../types/portfolio';

interface HackathonItem {
  id: string;
  title: string;
  organizer: string;
  role: string;
  date: string;
  description: string;
  tags: string[];
  certificateUrl?: string;
}

const hackathonsData: HackathonItem[] = [
  {
    id: 'sih-hackathon',
    title: 'Smart India Hackathon (SIH)',
    organizer: 'Ministry of Education & AICTE',
    role: 'Lead Developer / Innovator',
    date: '2026',
    description: 'Developed RuralCare 360, a digital healthcare coordination ecosystem addressing grassroots patient triage, referral systems, and medicine logistics across rural healthcare centers.',
    tags: ['Rural Healthcare', 'AI Triage', 'Public Health', 'National Level'],
    certificateUrl: 'https://github.com/bharani1829/SIH-PROJECT.git',
  },
  {
    id: 'adobe-hackathon',
    title: 'Adobe University Hackathon',
    organizer: 'Adobe (via Unstop)',
    role: 'Participant — Aditya University',
    date: '9th August 2026',
    description: 'Participated in the prestigious Adobe University Hackathon tackling real-world software design, user interaction architectures, and scalable problem-solving.',
    tags: ['Adobe', 'UI/UX Innovation', 'Unstop', 'Competitive Hackathon'],
    certificateUrl: '/certificates/adobe_hackathon.pdf',
  },
  {
    id: 'agentic-ai-hackathon',
    title: 'Agentic AI Hackathon',
    organizer: 'Product Space (via Unstop)',
    role: 'Team Lead — Team orsuleelabharani18',
    date: '2026',
    description: 'Built autonomous AI agent workflows and decision-making systems using modern Agentic architectures, LLM orchestration, and prompt reasoning strategies.',
    tags: ['Agentic AI', 'Autonomous Agents', 'Product Space', 'LLM Workflows'],
    certificateUrl: '/certificates/agentic_ai_hackathon.pdf',
  },
  {
    id: 'atom-quest-hackathon',
    title: 'Atom Quest Hackathon',
    organizer: 'Aditya University / Tech Community',
    role: 'Participant & Developer',
    date: '2026',
    description: 'Challenged with rapid prototyping, building innovative software solutions under tight countdowns with peer teamwork, algorithmic design, and problem decomposition.',
    tags: ['Fast Prototyping', 'Algorithms', 'Collaborative Coding'],
  },
  {
    id: 'veda-symposium',
    title: 'VEDA-2K26 Student Symposium — Technical Photography',
    organizer: 'Aditya University',
    role: 'Active Participant (25B11AI860)',
    date: '11th & 12th September 2026',
    description: 'Demonstrated enthusiasm and technical visual storytelling at VEDA Student Symposium in the specialized Technical Photography from E-Garbage T-PEG category.',
    tags: ['VEDA Symposium', 'Technical Photography', 'E-Waste Innovation', 'Aditya Univ'],
    certificateUrl: '/certificates/veda_technical_photography.pdf',
  },
];

const certificationsData: Certification[] = [
  {
    id: 'cisco-c',
    title: 'C Essentials Certification',
    issuer: 'Cisco Networking Academy',
    badgeColor: 'from-[#00BCEB] to-[#005073]',
    iconName: 'ShieldCheck',
    description: 'Comprehensive mastery of C language fundamentals, memory management, pointers, and structured programming.',
    skillsLearned: ['C Language', 'Memory Allocation', 'Pointers', 'Data Types'],
    verifyUrl: 'https://www.netacad.com',
  },
  {
    id: 'cisco-python',
    title: 'Python Essentials Certification',
    issuer: 'Cisco Networking Academy',
    badgeColor: 'from-[#3776AB] to-[#FFD43B]',
    iconName: 'ShieldCheck',
    description: 'Foundational and intermediate Python programming, OOP design, module management, and exception handling.',
    skillsLearned: ['Python 3', 'OOP', 'Data Structures', 'Modules'],
    verifyUrl: 'https://www.netacad.com',
  },
  {
    id: 'tata-genai',
    title: 'GenAI Powered Data Analytics',
    issuer: 'Tata Forage',
    badgeColor: 'from-[#7621B0] to-[#B600A8]',
    iconName: 'Cpu',
    description: 'Industry simulation executing generative AI analytical workflows, business reporting, and data interpretation.',
    skillsLearned: ['Generative AI', 'Data Analytics', 'Prompt Engineering', 'Insight Reports'],
    verifyUrl: 'https://www.theforage.com',
  },
  {
    id: 'coursera-dbms',
    title: 'Database Management Systems',
    issuer: 'Coursera',
    badgeColor: 'from-[#0056D2] to-[#3B82F6]',
    iconName: 'Award',
    description: 'Relational database architecture, SQL queries, entity-relationship models, normalization, and ACID properties.',
    skillsLearned: ['DBMS', 'SQL Queries', 'Relational Schema', 'Normalization'],
    verifyUrl: 'https://www.coursera.org',
  },
  {
    id: 'coursera-agile',
    title: 'Agile Software Engineering',
    issuer: 'Coursera',
    badgeColor: 'from-[#10B981] to-[#059669]',
    iconName: 'Award',
    description: 'Iterative development lifecycles, Scrum principles, user story mapping, sprint planning, and team collaboration.',
    skillsLearned: ['Agile Methodology', 'Scrum', 'Sprint Lifecycle', 'Software Eng'],
    verifyUrl: 'https://www.coursera.org',
  },
  {
    id: 'coursera-prompt',
    title: 'Prompt Engineering',
    issuer: 'Coursera',
    badgeColor: 'from-[#EC4899] to-[#8B5CF6]',
    iconName: 'Award',
    description: 'Designing context-aware LLM prompts, few-shot prompting, persona steering, and AI response optimization.',
    skillsLearned: ['Prompt Design', 'LLM Tuning', 'AI Automation', 'System Instructions'],
    verifyUrl: 'https://www.coursera.org',
  },
  {
    id: 'scrimba-html-css',
    title: 'HTML & CSS Crash Course',
    issuer: 'Scrimba (via Coursera)',
    badgeColor: 'from-[#F16529] to-[#264DE4]',
    iconName: 'Award',
    description: 'Hands-on interactive web layout engineering, Flexbox, Grid, semantic HTML5 tags, and CSS animation.',
    skillsLearned: ['HTML5', 'CSS3', 'Flexbox/Grid', 'Responsive Layout'],
    verifyUrl: 'https://scrimba.com',
  },
];

export const CertificationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hackathons' | 'certifications'>('hackathons');

  return (
    <section id="certifications" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-10 sm:mb-14">
          <h2 className="hero-heading text-[clamp(2.5rem,8vw,90px)] leading-none tracking-tight font-serif text-[#7F011F]">
            ACHIEVEMENTS
          </h2>
          <p className="text-[#7F011F]/70 uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Hackathons &amp; Global Certifications
          </p>
        </FadeIn>

        {/* Tab Switcher */}
        <FadeIn delay={0.1} y={20} className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#FAF6EC] border border-[#7F011F]/15 shadow-sm">
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 ${
                activeTab === 'hackathons'
                  ? 'bg-[#7F011F] text-[#F5EBD0] shadow-sm'
                  : 'text-[#7F011F]/70 hover:text-[#7F011F]'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Hackathons ({hackathonsData.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 ${
                activeTab === 'certifications'
                  ? 'bg-[#7F011F] text-[#F5EBD0] shadow-sm'
                  : 'text-[#7F011F]/70 hover:text-[#7F011F]'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Certifications ({certificationsData.length})</span>
            </button>
          </div>
        </FadeIn>

        {/* ── Hackathons Grid ── */}
        {activeTab === 'hackathons' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {hackathonsData.map((hack, idx) => (
              <FadeIn key={hack.id} delay={idx * 0.06} y={30}>
                <div className="rounded-[24px] sm:rounded-[26px] border border-[#7F011F]/15 bg-[#FAF6EC] p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_8px_24px_rgba(127,1,31,0.05)] hover:border-[#7F011F]/30 transition-all duration-300 group relative overflow-hidden">
                  <div>
                    {/* Top Badge & Organizer */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#F5EBD0] border border-[#7F011F]/15 text-[#7F011F]">
                        <Flame className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={2} />
                        {hack.organizer}
                      </span>
                      <span className="text-[11px] font-mono text-[#7F011F]/60 font-semibold">
                        {hack.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#7F011F] mb-1 font-serif">
                      {hack.title}
                    </h3>
                    <p className="text-xs font-mono text-[#7F011F]/70 font-semibold mb-3">
                      {hack.role}
                    </p>

                    {/* Description */}
                    <p className="text-[#7F011F]/80 text-xs sm:text-sm leading-relaxed mb-4 font-normal font-sans">
                      {hack.description}
                    </p>
                  </div>

                  {/* Tags & Action Link */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#7F011F]/10 mb-4">
                      {hack.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-[8px] bg-[#F5EBD0] border border-[#7F011F]/15 text-[#7F011F]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {hack.certificateUrl && (
                      <a
                        href={hack.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7F011F] hover:underline transition-colors duration-200"
                      >
                        <span>View Certificate ↗</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={1.75} />
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* ── Certifications Grid ── */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {certificationsData.map((cert, idx) => (
              <FadeIn key={cert.id} delay={idx * 0.06} y={30}>
                <div className="rounded-[24px] sm:rounded-[26px] border border-[#7F011F]/15 bg-[#FAF6EC] p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_8px_24px_rgba(127,1,31,0.05)] hover:border-[#7F011F]/30 transition-all duration-300 group relative overflow-hidden">
                  <div>
                    {/* Top Badge & Issuer */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#F5EBD0] border border-[#7F011F]/15 text-[#7F011F]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={2} />
                        {cert.issuer}
                      </span>
                      <div className="w-8 h-8 rounded-[10px] bg-[#7F011F]/10 border border-[#7F011F]/15 flex items-center justify-center text-[#7F011F] shadow-sm">
                        <Award className="w-4 h-4 text-[#7F011F]" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#7F011F] mb-2 font-serif">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#7F011F]/80 text-xs sm:text-sm leading-relaxed mb-4 font-normal font-sans">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Badges & Link */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#7F011F]/10 mb-4">
                      {cert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-[8px] bg-[#F5EBD0] border border-[#7F011F]/15 text-[#7F011F]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7F011F] hover:underline transition-colors duration-200"
                      >
                        <span>Verify Credential ↗</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={1.75} />
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
