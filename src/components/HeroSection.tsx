import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from './Navbar';
import { FadeIn } from './ui/FadeIn';
import { Magnet } from './ui/Magnet';
import { ContactButton } from './ui/ContactButton';
import { Sparkles, ArrowDown } from 'lucide-react';

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
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const avatarScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.88]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-transparent select-none"
    >
      {/* Top Navbar */}
      <Navbar onOpenResumeModal={onOpenResumeModal} />

      {/* Main Hero Content — Two-column layout */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="flex-1 flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-8 gap-6 md:gap-0"
      >
        {/* LEFT: Text content */}
        <div className="flex flex-col justify-center gap-5 md:gap-7 z-10 max-w-[55%] md:max-w-[50%]">
          {/* Eyebrow Badge */}
          <FadeIn delay={0.1} y={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#7621B0]/30 backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C084FC]">
                Aditya University • AI &amp; ML • 2nd Year
              </span>
            </div>
          </FadeIn>

          {/* Main Name */}
          <FadeIn delay={0.2} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.9] text-[clamp(2.8rem,7vw,110px)] drop-shadow-2xl">
              HI, I'M<br />
              <span className="hero-heading-vibrant">BHARANI</span>
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA]/70 font-light uppercase tracking-wider leading-snug text-[clamp(0.65rem,1.3vw,1.1rem)] max-w-[340px]">
              AI Enthusiast · Python Developer · Lifelong Learner
            </p>
          </FadeIn>

          {/* CGPA chip */}
          <FadeIn delay={0.45} y={16}>
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF] uppercase tracking-widest font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>CGPA: 9.10 (First Year)</span>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.55} y={16} className="mt-2">
            <ContactButton label="Contact Me" href="#contact" />
          </FadeIn>
        </div>

        {/* RIGHT: 3D Magnetic Avatar */}
        <motion.div
          style={{ y: avatarY, scale: avatarScale }}
          className="relative z-10 flex-shrink-0 w-[38%] md:w-[42%] lg:w-[38%] flex items-center justify-center pointer-events-auto"
        >
          <FadeIn delay={0.5} y={30} className="w-full flex justify-center">
            <Magnet
              padding={120}
              strength={2.5}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.7s ease-in-out"
              className="w-full flex justify-center"
            >
              <div className="relative group cursor-pointer w-full flex justify-center">
                {/* Layered Glow Halos */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#7621B0] via-[#B600A8] to-[#3B82F6] opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] opacity-15 blur-xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse" />

                <img
                  src="/assets/bharani_3d_avatar.png"
                  alt="O Leela Bharani 3D Avatar"
                  className="relative z-10 w-full h-auto max-h-[70vh] object-contain drop-shadow-[0_20px_60px_rgba(118,33,176,0.55)] transform group-hover:scale-[1.04] transition-transform duration-600 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';
                  }}
                />

                {/* Status Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-[#0C0C0C]/80 backdrop-blur-md border border-[#7621B0]/50 text-white text-[11px] sm:text-xs font-mono tracking-wide flex items-center gap-2 shadow-xl whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
                  <span>Available for Opportunities</span>
                </div>
              </div>
            </Magnet>
          </FadeIn>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#7621B0] animate-bounce" />
      </motion.div>
    </section>
  );
};
