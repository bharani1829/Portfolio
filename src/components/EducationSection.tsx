import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { GraduationCap, Award, BookOpen, Trophy, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-14 sm:mb-20">
          <h2 className="hero-heading text-[clamp(2.5rem,8vw,90px)] leading-none tracking-tight font-serif text-[#7F011F]">
            EDUCATION
          </h2>
          <p className="text-[#7F011F]/70 uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Academic Foundation &amp; Distinction
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <div className="relative group rounded-[28px] sm:rounded-[36px] border border-[#7F011F]/15 bg-[#FAF6EC] p-6 sm:p-10 md:p-12 overflow-hidden shadow-[0_12px_36px_rgba(127,1,31,0.06)] backdrop-blur-xl hover:border-[#7F011F]/30 transition-all duration-300">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: College Emblem & Title */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#7F011F]/5 border border-[#7F011F]/15 shadow-sm text-[#7F011F] text-xs font-mono uppercase tracking-wider w-fit">
                  <GraduationCap className="w-4 h-4 text-[#7F011F]" strokeWidth={1.75} />
                  <span>Aditya University • Autonomous</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#7F011F] leading-tight font-serif">
                  B.Tech in Artificial Intelligence &amp; Machine Learning
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-[#7F011F]/70 font-mono text-sm">
                  <span className="flex items-center gap-1.5 text-[#7F011F] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#7F011F]" strokeWidth={2} /> 2nd Year Pursuing
                  </span>
                  <span className="text-[#7F011F]/20">•</span>
                  <span className="text-[#7F011F]/80">Aditya University Campus</span>
                </div>

                <p className="text-[#7F011F]/80 leading-relaxed text-sm sm:text-base font-normal font-sans">
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
                      className="px-3.5 py-1.5 rounded-[12px] bg-[#F5EBD0] border border-[#7F011F]/15 text-xs font-medium text-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] transition-colors"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: CGPA Card Highlight */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-[24px] bg-[#F5EBD0] border border-[#7F011F]/20 text-center relative overflow-hidden shadow-sm">
                <div className="w-12 h-12 rounded-[14px] bg-[#7F011F]/10 border border-[#7F011F]/20 flex items-center justify-center mb-3 shadow-sm text-[#7F011F]">
                  <Award className="w-6 h-6 text-[#7F011F]" strokeWidth={1.75} />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#7F011F]/70 mb-1">
                  Academic Performance
                </span>
                <div className="text-5xl sm:text-6xl font-bold text-[#7F011F] tracking-tight font-serif">
                  9.10
                </div>
                <span className="text-xs font-mono text-[#7F011F] font-semibold mt-1">
                  CGPA • First Year Distinction
                </span>
                
                <div className="mt-4 pt-4 border-t border-[#7F011F]/15 w-full flex items-center justify-center gap-2 text-xs text-[#7F011F]/80">
                  <Trophy className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={1.75} />
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
