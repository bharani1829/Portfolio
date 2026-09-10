import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Award, ShieldCheck, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { Certification } from '../types/portfolio';

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
    iconName: 'Sparkles',
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
  return (
    <section id="certifications" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-14 sm:mb-20">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,110px)] leading-none tracking-tight">
            CERTIFICATIONS
          </h2>
          <p className="text-[#9CA3AF] uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Verified Credentials & Global Specializations
          </p>
        </FadeIn>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificationsData.map((cert, idx) => (
            <FadeIn key={cert.id} delay={idx * 0.08} y={30}>
              <div className="rounded-[30px] border border-white/10 bg-neutral-950/80 p-6 sm:p-7 flex flex-col justify-between h-full hover:border-[#7621B0]/50 transition-all duration-500 group shadow-xl backdrop-blur-md relative overflow-hidden">
                {/* Accent Corner Glow */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cert.badgeColor} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`}
                ></div>

                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {cert.issuer}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-tr ${cert.badgeColor} flex items-center justify-center text-white shadow-md`}
                    >
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#C084FC] transition-colors duration-500">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Badges & Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 mb-4">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-[#D7E2EA]/80"
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
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C084FC] hover:text-white transition-colors duration-500"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
