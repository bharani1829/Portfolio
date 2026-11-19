import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from './Navbar';
import { FadeIn } from './ui/FadeIn';
import { ContactButton } from './ui/ContactButton';
import { Award, ArrowDown, FileText, GraduationCap } from 'lucide-react';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-transparent select-none"
    >
      {/* Top Navbar */}
      <Navbar onOpenResumeModal={onOpenResumeModal} />

      {/* Main Hero Content — Editorial Centered Layout matching Reference */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 pt-24 pb-16 max-w-5xl mx-auto w-full"
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-3xl">
          {/* Eyebrow Label — Subtle Wine Red Uppercase Tracker */}
          <FadeIn delay={0.1} y={20}>
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#7F011F]/5 hover:bg-[#7F011F]/10 border border-[#7F011F]/15 shadow-sm transition-all duration-300">
              <GraduationCap className="w-4 h-4 text-[#7F011F]" strokeWidth={1.75} />
              <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#7F011F] uppercase font-semibold">
                Aditya University • AI &amp; ML
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7F011F] ml-1" />
              <span className="text-[10px] font-mono text-[#7F011F] font-semibold tracking-widest uppercase">
                2nd Year
              </span>
            </div>
          </FadeIn>

          {/* Main Title — Serif Editorial Display matching reference image */}
          <FadeIn delay={0.2} y={35}>
            <h1 className="hero-heading text-[clamp(3.5rem,9.5vw,115px)] leading-[0.98] tracking-tight font-serif text-[#7F011F]">
              HI, I'M<br />
              <span className="hero-heading-vibrant font-serif italic font-normal text-[#7F011F]">BHARANI.</span>
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#7F011F]/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-sans">
              <span className="text-[#7F011F] font-semibold">Designing intelligent systems for modern technology.</span>{' '}
              AI Enthusiast · Python &amp; C++ Developer · Lifelong Learner
            </p>
          </FadeIn>

          {/* Metadata Chips */}
          <FadeIn delay={0.45} y={16}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono uppercase tracking-wider text-[#7F011F]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7F011F]/5 border border-[#7F011F]/15 shadow-sm">
                <Award className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={1.75} />
                <span className="text-[#7F011F] font-semibold">CGPA: 9.10 (First Year)</span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#7F011F]/5 border border-[#7F011F]/15 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7F011F]" />
                <span className="text-[#7F011F] font-semibold">Available for Opportunities</span>
              </div>
            </div>
          </FadeIn>

          {/* CTAs matching reference pill buttons */}
          <FadeIn delay={0.55} y={16} className="mt-2">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#7F011F] text-[#F5EBD0] text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#630018] active:scale-[0.98] transition-all duration-200 shadow-md"
              >
                <span>Explore My Work ↗</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[#7F011F]/30 bg-transparent text-[#7F011F] text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#7F011F]/5 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <span>About Journey</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="pb-6 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#7F011F] font-mono">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#7F011F]" strokeWidth={2} />
      </motion.div>
    </section>
  );
};
