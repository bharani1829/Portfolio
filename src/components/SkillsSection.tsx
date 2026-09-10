import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import {
  Code2,
  Database,
  BrainCircuit,
  Globe,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Zap,
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

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillCategories: SkillCategoryData[] = [
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
        { name: 'JavaScript & React UI', level: 78, status: 'Learning' },
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
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,110px)] leading-none tracking-tight">
            SKILLS & TECH
          </h2>
          <p className="text-[#9CA3AF] uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Core Competencies • Technical Mastery
          </p>
        </FadeIn>

        {/* Tab Filters */}
        <FadeIn delay={0.1} y={20} className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-500 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#7621B0] to-[#B600A8] text-white shadow-lg'
                  : 'text-[#D7E2EA]/70 hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-500 ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-[#7621B0] to-[#B600A8] text-white shadow-lg'
                    : 'text-[#D7E2EA]/70 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((catGroup, idx) => {
            const IconComp = catGroup.icon;
            return (
              <FadeIn key={catGroup.id} delay={0.1 * idx} y={30}>
                <div className="rounded-[30px] border border-white/10 bg-neutral-950/70 p-6 sm:p-8 hover:border-[#7621B0]/50 transition-all duration-500 group shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7621B0] to-[#3B82F6] flex items-center justify-center text-white shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                      {catGroup.category}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {catGroup.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-medium">
                          <span className="text-[#D7E2EA] font-semibold flex items-center gap-2">
                            {skill.name}
                            <span
                              className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full ${
                                skill.status === 'Proficient'
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : skill.status === 'Learning'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                  : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              }`}
                            >
                              {skill.status}
                            </span>
                          </span>
                          <span className="text-[#9CA3AF] font-mono text-xs">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden relative p-0.5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#7621B0] via-[#B600A8] to-[#3B82F6] transition-all duration-1000 ease-out shadow-sm"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
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
