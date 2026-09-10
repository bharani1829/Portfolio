import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { AnimatedText } from './ui/AnimatedText';
import { ContactButton } from './ui/ContactButton';
import { GraduationCap, Award, Brain, Code, Zap, Globe } from 'lucide-react';

/* ── Parallax floating decoration ────────────────────────────────────────── */
interface ParallaxBlobProps {
  src: string;
  alt: string;
  glow: string;
  speed: number;
  className: string;
  delay?: number;
}

const ParallaxBlob: React.FC<ParallaxBlobProps> = ({ src, alt, glow, speed, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 80, -speed * 80]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <FadeIn delay={delay} x={speed > 0 ? -50 : 50} y={0} duration={1.1}>
        <div
          className="relative rounded-[28px] p-3 border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl"
          style={{ boxShadow: `0 20px 60px -15px ${glow}55` }}
        >
          <div
            className="absolute -inset-3 rounded-[32px] opacity-50 blur-2xl -z-10"
            style={{ background: `radial-gradient(circle, ${glow}66, transparent 70%)` }}
          />
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full object-contain drop-shadow-xl transition-transform duration-700 hover:scale-105"
          />
        </div>
      </FadeIn>
    </motion.div>
  );
};

/* ── Stat card ────────────────────────────────────────────────────────────── */
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, accent, delay }) => (
  <FadeIn delay={delay} y={24}>
    <div
      className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center gap-2 transition-all duration-500 cursor-default group"
      style={{ ['--accent' as string]: accent }}
    >
      <div
        className="p-2 rounded-xl transition-colors duration-300 group-hover:scale-110 transform transition-transform"
        style={{ background: `${accent}22` }}
      >
        {icon}
      </div>
      <span className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wide">{label}</span>
      <span className="text-sm font-bold text-white">{value}</span>
    </div>
  </FadeIn>
);

/* ── Main Component ───────────────────────────────────────────────────────── */
export const AboutSection: React.FC = () => {
  const bioText =
    "I am a dedicated Artificial Intelligence & Machine Learning student at Aditya University with a strong academic record (9.10 CGPA in 1st Year) and a passion for technology. I enjoy building real-world applications, solving programming problems, and continuously improving my skills. Currently exploring Artificial Intelligence while deepening my knowledge in Database Management Systems and C++. Let's engineer something extraordinary!";

  const floatingItems = [
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
      alt: '3D Moon',
      glow: '#7621B0',
      speed: 0.5,
      className: 'absolute top-[8%] left-[2%] sm:left-[4%] md:left-[6%] z-0 pointer-events-none w-[80px] sm:w-[120px] md:w-[155px]',
      delay: 0.1,
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
      alt: '3D Lego',
      glow: '#3B82F6',
      speed: -0.4,
      className: 'absolute top-[8%] right-[2%] sm:right-[4%] md:right-[6%] z-0 pointer-events-none w-[80px] sm:w-[120px] md:w-[155px]',
      delay: 0.15,
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
      alt: '3D Geometric',
      glow: '#B600A8',
      speed: 0.35,
      className: 'absolute bottom-[12%] left-[5%] sm:left-[8%] md:left-[12%] z-0 pointer-events-none w-[65px] sm:w-[100px] md:w-[130px]',
      delay: 0.25,
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
      alt: '3D Sphere',
      glow: '#06B6D4',
      speed: -0.3,
      className: 'absolute bottom-[12%] right-[5%] sm:right-[8%] md:right-[12%] z-0 pointer-events-none w-[80px] sm:w-[120px] md:w-[160px]',
      delay: 0.3,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 bg-transparent overflow-hidden select-none"
    >
      {/* Parallax Floating 3D Objects */}
      {floatingItems.map((item) => (
        <ParallaxBlob key={item.alt} {...item} />
      ))}

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-1">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7621B0]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3B82F6]/8 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center gap-10 sm:gap-14 text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,150px)]">
            ABOUT ME
          </h2>
        </FadeIn>

        {/* Animated Bio Text */}
        <div className="max-w-[640px] px-2">
          <AnimatedText
            text={bioText}
            className="font-medium text-[#D7E2EA] leading-relaxed justify-center text-center text-[clamp(0.95rem,1.8vw,1.25rem)]"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl mt-2">
          <StatCard icon={<GraduationCap className="w-5 h-5" style={{ color: '#C084FC' }} />} label="University" value="Aditya Univ" accent="#7621B0" delay={0.3} />
          <StatCard icon={<Award className="w-5 h-5" style={{ color: '#B600A8' }} />} label="1st Yr CGPA" value="9.10 / 10" accent="#B600A8" delay={0.38} />
          <StatCard icon={<Brain className="w-5 h-5" style={{ color: '#3B82F6' }} />} label="Specialization" value="AI & ML" accent="#3B82F6" delay={0.46} />
          <StatCard icon={<Code className="w-5 h-5" style={{ color: '#10B981' }} />} label="Current Year" value="2nd B.Tech" accent="#10B981" delay={0.54} />
          <StatCard icon={<Zap className="w-5 h-5" style={{ color: '#F59E0B' }} />} label="Languages" value="Python · C++" accent="#F59E0B" delay={0.62} />
          <StatCard icon={<Globe className="w-5 h-5" style={{ color: '#06B6D4' }} />} label="Focus Area" value="AI Engineer" accent="#06B6D4" delay={0.70} />
        </div>

        {/* CTA */}
        <FadeIn delay={0.5} y={20} className="mt-2">
          <ContactButton label="Let's Connect" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
