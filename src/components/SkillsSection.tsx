import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import {
  Code2,
  Database,
  BrainCircuit,
  Globe,
  Terminal,
  Cpu,
  Layers,
  Zap,
  GitBranch,
} from 'lucide-react';

interface SkillCategoryData {
  id: string;
  category: string;
  icon: any;
  skills: {
    name: string;
    level: number;
    status: 'Proficient' | 'Learning' | 'Basic';
  }[];
}

interface SkillItemRowProps {
  name: string;
  level: number;
  status: string;
}

const SkillItemRow: React.FC<SkillItemRowProps> = ({ name, level, status }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayLevel, setDisplayLevel] = useState(level);

  // When hovered, percentage counts up / flows up from 0 to target level with smooth easing
  useEffect(() => {
    let animFrame: number;
    if (isHovered) {
      const duration = 550; // ms
      const startTime = performance.now();

      const animateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(ease * level);
        setDisplayLevel(current);

        if (progress < 1) {
          animFrame = requestAnimationFrame(animateCount);
        } else {
          setDisplayLevel(level);
        }
      };

      animFrame = requestAnimationFrame(animateCount);
    } else {
      setDisplayLevel(level);
    }

    return () => cancelAnimationFrame(animFrame);
  }, [isHovered, level]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-3 -mx-3 rounded-[16px] transition-all duration-300 hover:bg-[#7F011F]/5 group/skill cursor-default select-none"
    >
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-[#7F011F] font-medium flex items-center gap-2 group-hover/skill:text-[#7F011F] transition-colors">
          {name}
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#7F011F]/5 border border-[#7F011F]/15 text-[#7F011F]/80 group-hover/skill:border-[#7F011F]/30 group-hover/skill:text-[#7F011F] transition-all">
            {status}
          </span>
        </span>

        {/* Percentage Badge */}
        <motion.div
          animate={isHovered ? { y: -3, scale: 1.08 } : { y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
          className="flex items-center gap-1 font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#7F011F]/5 border border-[#7F011F]/15 group-hover/skill:border-[#7F011F]/30 group-hover/skill:bg-[#7F011F]/10 transition-colors"
        >
          <span className="text-[#7F011F]">
            {displayLevel}%
          </span>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] text-[#7F011F] font-bold"
            >
              ↑
            </motion.span>
          )}
        </motion.div>
      </div>

      {/* Progress Bar — Wine Red on Light Sand Track */}
      <div className="w-full h-1.5 rounded-full bg-[#E8D5A7] overflow-hidden relative">
        <motion.div
          key={isHovered ? 'hovered' : 'normal'}
          initial={isHovered ? { width: '0%' } : { width: `${level}%` }}
          animate={{ width: `${level}%` }}
          transition={{
            duration: isHovered ? 0.6 : 1.0,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`h-full rounded-full transition-colors duration-300 ${
            isHovered
              ? 'bg-[#630018] shadow-[0_0_8px_rgba(127,1,31,0.4)]'
              : 'bg-[#7F011F]'
          }`}
        />
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillCategories: SkillCategoryData[] = [
    {
      id: 'version-control',
      category: 'Git & Version Control',
      icon: GitBranch,
      skills: [
        { name: 'Git (Push, Pull, Commit, Branching)', level: 90, status: 'Proficient' },
        { name: 'GitHub Collaboration & Workflow', level: 88, status: 'Proficient' },
        { name: 'Vibe Coding with AI Dev Tools', level: 92, status: 'Proficient' },
      ],
    },
    {
      id: 'languages',
      category: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 88, status: 'Proficient' },
        { name: 'C Language', level: 85, status: 'Proficient' },
        { name: 'C++', level: 65, status: 'Learning' },
      ],
    },
    {
      id: 'core',
      category: 'Core Computer Science',
      icon: Cpu,
      skills: [
        { name: 'Data Structures using C', level: 84, status: 'Proficient' },
        { name: 'DBMS', level: 76, status: 'Learning' },
        { name: 'Artificial Intelligence', level: 72, status: 'Learning' },
      ],
    },
    {
      id: 'web',
      category: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'HTML5 & Semantic Markup', level: 92, status: 'Proficient' },
        { name: 'CSS3 & Modern Styling', level: 88, status: 'Proficient' },
        { name: 'Responsive Web Design', level: 86, status: 'Proficient' },
      ],
    },
    {
      id: 'other',
      category: 'Specialized & Engineering',
      icon: BrainCircuit,
      skills: [
        { name: 'Prompt Engineering', level: 86, status: 'Proficient' },
        { name: 'Problem Solving', level: 88, status: 'Proficient' },
        { name: 'Agile Software Eng.', level: 78, status: 'Learning' },
        { name: 'SQL (Relational DB)', level: 70, status: 'Basic' },
      ],
    },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-12 sm:mb-16">
          <h2 className="hero-heading text-[clamp(2.5rem,8vw,90px)] leading-none tracking-tight font-serif text-[#7F011F]">
            SKILLS &amp; TECH
          </h2>
          <p className="text-[#7F011F]/70 uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Core Competencies • Version Control &amp; AI Engineering
          </p>
        </FadeIn>

        {/* Tab Filters */}
        <FadeIn delay={0.1} y={20} className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-full bg-[#FAF6EC] border border-[#7F011F]/15 shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-normal transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-[#7F011F] text-[#F5EBD0] shadow-sm'
                  : 'text-[#7F011F]/70 hover:text-[#7F011F]'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-normal transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-[#7F011F] text-[#F5EBD0] shadow-sm'
                    : 'text-[#7F011F]/70 hover:text-[#7F011F]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCategories.map((catGroup, idx) => {
            const IconComp = catGroup.icon;
            return (
              <FadeIn key={catGroup.id} delay={0.08 * idx} y={30}>
                <div className="rounded-[24px] sm:rounded-[28px] border border-[#7F011F]/15 bg-[#FAF6EC] p-6 sm:p-8 hover:border-[#7F011F]/30 transition-all duration-300 group shadow-[0_10px_30px_rgba(127,1,31,0.05)]">
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#7F011F]/10">
                    <div className="w-10 h-10 rounded-[12px] bg-[#7F011F]/10 border border-[#7F011F]/20 flex items-center justify-center text-[#7F011F] shadow-sm">
                      <IconComp className="w-4 h-4 text-[#7F011F]" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#7F011F] font-serif">
                      {catGroup.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {catGroup.skills.map((skill) => (
                      <SkillItemRow
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        status={skill.status}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
