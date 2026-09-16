import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { GraduationCap, Award, BookOpen, Trophy, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-14 sm:mb-20">
          <h2 className="hero-heading text-[clamp(2.5rem,8vw,90px)] leading-none tracking-tight font-bold">
            EDUCATION
          </h2>
          <p className="text-[#A1A1A6] uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Academic Foundation &amp; Distinction
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <div className="relative group rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#161618]/85 p-6 sm:p-10 md:p-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl hover:border-white/20 transition-all duration-300">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: College Emblem & Title */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 shadow-sm text-[#A1A1A6] text-xs font-mono uppercase tracking-wider w-fit backdrop-blur-md">
                  <GraduationCap className="w-4 h-4 text-[#A1A1A6]" strokeWidth={1.75} />
                  <span>Aditya University • Autonomous</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F5F7] leading-tight font-sans">
                  B.Tech in Artificial Intelligence &amp; Machine Learning
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-[#A1A1A6] font-mono text-sm">
                  <span className="flex items-center gap-1.5 text-emerald-400/90 font-medium">
                    <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} /> 2nd Year Pursuing
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-white/70">Aditya University Campus</span>
                </div>

                <p className="text-[#A1A1A6] leading-relaxed text-sm sm:text-base font-normal">
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
                      className="px-3.5 py-1.5 rounded-[12px] bg-white/[0.04] border border-white/8 text-xs font-normal text-[#A1A1A6] hover:text-white hover:border-white/15 transition-colors"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: CGPA Card Highlight */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-[24px] bg-white/[0.03] border border-white/10 text-center relative overflow-hidden shadow-sm backdrop-blur-xl">
                <div className="w-12 h-12 rounded-[14px] bg-white/[0.05] border border-white/10 flex items-center justify-center mb-3 shadow-sm">
                  <Award className="w-6 h-6 text-[#F5F5F7]" strokeWidth={1.75} />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#A1A1A6] mb-1">
                  Academic Performance
                </span>
                <div className="text-5xl sm:text-6xl font-bold text-[#F5F5F7] tracking-tight font-sans">
                  9.10
                </div>
                <span className="text-xs font-mono text-[#A1A1A6] font-medium mt-1">
                  CGPA • First Year Distinction
                </span>
                
                <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-[#A1A1A6]">
                  <Trophy className="w-3.5 h-3.5 text-[#A1A1A6]" strokeWidth={1.75} />
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
