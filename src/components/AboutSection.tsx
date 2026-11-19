import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { AnimatedText } from './ui/AnimatedText';
import { ContactButton } from './ui/ContactButton';
import { Building2, Award, Cpu, CalendarCheck, Terminal, Compass, ArrowUpRight } from 'lucide-react';

/* ── Sand & Wine Red Frosted Bento Card ───────────────────────────────────── */
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subBadge: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, subBadge, delay }) => (
  <FadeIn delay={delay} y={24} className="h-full">
    <div
      className="relative h-full rounded-[22px] sm:rounded-[24px] p-5 bg-[#FAF6EC]/90 hover:bg-[#FAF6EC] border border-[#7F011F]/15 hover:border-[#7F011F]/30 shadow-[0_4px_24px_rgba(127,1,31,0.06)] transition-all duration-300 group cursor-default flex flex-col justify-between gap-4 text-left overflow-hidden hover:-translate-y-0.5"
    >
      {/* Top Row: Wine Icon Well + Corner Indicator */}
      <div className="flex items-center justify-between relative z-10">
        <div
          className="w-9 h-9 rounded-[12px] bg-[#7F011F]/10 border border-[#7F011F]/20 flex items-center justify-center text-[#7F011F] shadow-sm group-hover:scale-105 transition-transform duration-200"
        >
          {icon}
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#7F011F]/40 group-hover:text-[#7F011F] transition-colors duration-200" />
      </div>

      {/* Middle & Bottom Content */}
      <div className="flex flex-col gap-1 relative z-10">
        <span className="text-[11px] font-mono tracking-wider text-[#7F011F]/70 uppercase">
          {label}
        </span>
        <span className="text-base sm:text-lg font-semibold text-[#7F011F] tracking-tight font-serif">
          {value}
        </span>
        <div className="pt-1">
          <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#7F011F]/5 border border-[#7F011F]/15 text-[#7F011F] group-hover:bg-[#7F011F]/10 transition-colors">
            {subBadge}
          </span>
        </div>
      </div>
    </div>
  </FadeIn>
);

/* ── Main Component ───────────────────────────────────────────────────────── */
export const AboutSection: React.FC = () => {
  const bioText =
    "I am a dedicated Artificial Intelligence & Machine Learning student at Aditya University with a strong academic record (9.10 CGPA in 1st Year) and a passion for technology. I enjoy building real-world applications, solving programming problems, and continuously improving my skills. Currently exploring Artificial Intelligence while deepening my knowledge in Database Management Systems and C++. Let's engineer something extraordinary!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 bg-transparent overflow-hidden select-none"
    >
      {/* Subtle Sand/Wine background ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-1">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7F011F]/[0.03] rounded-full blur-[140px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center gap-10 sm:gap-14 text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="flex flex-col items-center gap-2">
          <h2 className="hero-heading leading-none tracking-tight text-[clamp(2.8rem,9vw,100px)] font-serif text-[#7F011F]">
            ABOUT ME
          </h2>
          <p className="text-[#7F011F]/70 text-base sm:text-lg font-normal tracking-normal font-sans">
            Passion for intelligence, logic &amp; modern software craft
          </p>
        </FadeIn>

        {/* Animated Bio Text */}
        <div className="max-w-[680px] px-2">
          <AnimatedText
            text={bioText}
            className="font-normal text-[#7F011F]/90 leading-relaxed justify-center text-center text-[clamp(0.95rem,1.8vw,1.15rem)] font-sans"
          />
        </div>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 w-full max-w-3xl mt-2">
          <StatCard
            icon={<Building2 className="w-4 h-4" strokeWidth={1.75} />}
            label="Study &amp; Campus"
            value="Aditya University"
            subBadge="Autonomous Campus"
            delay={0.25}
          />
          <StatCard
            icon={<Award className="w-4 h-4" strokeWidth={1.75} />}
            label="Academic Rank"
            value="9.10 / 10 CGPA"
            subBadge="First Year Honors"
            delay={0.32}
          />
          <StatCard
            icon={<Cpu className="w-4 h-4" strokeWidth={1.75} />}
            label="Specialization"
            value="AI &amp; Machine Learning"
            subBadge="Neural Systems"
            delay={0.39}
          />
          <StatCard
            icon={<CalendarCheck className="w-4 h-4" strokeWidth={1.75} />}
            label="Current Status"
            value="2nd Year B.Tech"
            subBadge="2025 — 2029 Cohort"
            delay={0.46}
          />
          <StatCard
            icon={<Terminal className="w-4 h-4" strokeWidth={1.75} />}
            label="Core Stacks"
            value="Python · C++ · SQL"
            subBadge="OOP &amp; Algorithms"
            delay={0.53}
          />
          <StatCard
            icon={<Compass className="w-4 h-4" strokeWidth={1.75} />}
            label="Aspirations"
            value="AI Engineer"
            subBadge="Continuous Innovation"
            delay={0.60}
          />
        </div>

        {/* CTA */}
        <FadeIn delay={0.5} y={20} className="mt-2">
          <ContactButton label="Let's Connect" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
