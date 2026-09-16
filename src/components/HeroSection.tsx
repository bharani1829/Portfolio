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

      {/* Main Hero Content — Clean & Minimal Centered Layout */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 pt-24 pb-16 max-w-5xl mx-auto w-full"
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-3xl">
          {/* Eyebrow Badge — Apple VisionOS Frosted Pill */}
          <FadeIn delay={0.1} y={20}>
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 backdrop-blur-xl shadow-sm transition-all duration-300">
              <GraduationCap className="w-4 h-4 text-[#A1A1A6]" strokeWidth={1.75} />
              <span className="text-[11px] sm:text-xs font-mono tracking-wider text-[#A1A1A6]">
                Aditya University • AI &amp; ML
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 ml-1" />
              <span className="text-[10px] font-mono text-emerald-400/90 font-medium tracking-wider uppercase">
                2nd Year
              </span>
            </div>
          </FadeIn>

          {/* Main Title — Apple Clean Headline */}
          <FadeIn delay={0.2} y={35}>
            <h1 className="hero-heading text-[clamp(3.5rem,9vw,110px)] leading-[0.95] tracking-tight">
              HI, I'M<br />
              <span className="hero-heading-vibrant">BHARANI</span>
            </h1>
          </FadeIn>

          {/* Tagline — Calm, Readable Apple Subtitle */}
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#A1A1A6] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              <span className="text-[#F5F5F7] font-medium">Crafting intelligent systems.</span>{' '}
              AI Enthusiast · Python Developer · Lifelong Learner
            </p>
          </FadeIn>

          {/* Metadata Chips — Apple Frosted Squircles */}
          <FadeIn delay={0.45} y={16}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono uppercase tracking-wider text-[#A1A1A6]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 backdrop-blur-xl shadow-sm transition-all duration-300">
                <Award className="w-3.5 h-3.5 text-[#A1A1A6]" strokeWidth={1.75} />
                <span className="text-[#F5F5F7] font-medium">CGPA: 9.10 (First Year)</span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 backdrop-blur-xl shadow-sm transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90" />
                <span className="text-[#F5F5F7] font-medium">Available for Opportunities</span>
              </div>
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.55} y={16} className="mt-2">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ContactButton label="Contact Me" href="#contact" />
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-[#F5F5F7] text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-200 active:scale-[0.98] shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#A1A1A6]" strokeWidth={1.75} />
                <span>View Resume</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="pb-6 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-80 transition-opacity duration-300"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#A1A1A6] font-mono">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#A1A1A6]" strokeWidth={1.75} />
      </motion.div>
    </section>
  );
};
