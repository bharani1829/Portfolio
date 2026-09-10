import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-14 sm:mb-20">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,110px)] leading-none tracking-tight">
            EDUCATION
          </h2>
          <p className="text-[#9CA3AF] uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Academic Foundation & Distinction
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <div className="relative group rounded-[30px] sm:rounded-[40px] border-2 border-white/10 bg-neutral-950/80 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl backdrop-blur-xl hover:border-[#7621B0]/50 transition-all duration-500">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7621B0]/20 via-[#B600A8]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: College Emblem & Title */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#7621B0]/20 border border-[#7621B0]/40 text-[#C084FC] text-xs font-mono uppercase tracking-wider w-fit">
                  <GraduationCap className="w-4 h-4 text-[#B600A8]" />
                  <span>Aditya University • Autonomous</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
                  B.Tech in Artificial Intelligence & Machine Learning
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-[#D7E2EA] font-mono text-sm">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> 2nd Year Pursuing
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/80">Aditya University Campus</span>
                </div>

                <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                  Acquiring rigorous fundamentals in computer science, algorithm optimization, software engineering methodologies, database design, and next-generation AI architectures.
                </p>

                {/* Key Subjects Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Data Structures in C',
                    'DBMS',
                    'Artificial Intelligence',
                    'C++',
                    'Python',
                    'SQL',
                  ].map((sub) => (
                    <span
                      key={sub}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#D7E2EA]"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: CGPA Card Highlight */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#18011F] to-[#0C0C0C] border border-[#7621B0]/40 text-center relative overflow-hidden group/card shadow-xl">
                <div className="absolute inset-0 bg-[#B600A8]/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                <Award className="w-12 h-12 text-[#B600A8] mb-3 animate-pulse-slow" />
                <span className="text-xs uppercase font-mono tracking-widest text-[#9CA3AF] mb-1">
                  Academic Performance
                </span>
                <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C084FC] to-[#60A5FA]">
                  9.10
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold mt-1">
                  CGPA • First Year Distinction
                </span>
                
                <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-[#D7E2EA]/70">
                  <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Consistently Top Academic Performer</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
