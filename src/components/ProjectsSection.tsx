import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { LiveProjectButton } from './ui/LiveProjectButton';
import { Github } from 'lucide-react';

interface ProjectCardData {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  images: string[]; // flexible: 3 or 4 images
  githubUrl?: string;
  liveUrl?: string;
}

const projects: ProjectCardData[] = [
  {
    id: 'skill-cycle',
    number: '01',
    category: 'College Workshop Project',
    title: 'Skill Cycle – Skill Exchange Platform',
    description:
      'Developed during an intensive college workshop. A collaborative web platform empowering users to exchange, teach, and learn skills directly from peers in an interactive community ecosystem.',
    tags: ['HTML/CSS', 'Skill Exchange', 'Peer Learning', 'UX Design'],
    // First image kept as original concept; photos 1-4 are user's real photos (excluding first)
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      '/skill-cycle/sc-photo1.jpg',
      '/skill-cycle/sc-photo2.jpg',
      '/skill-cycle/sc-photo3.jpg',
      '/skill-cycle/sc-photo4.jpg',
    ],
    githubUrl: 'https://github.com/mudavath-leela-bharani',
    liveUrl: '#',
  },
  {
    id: 'atm-management',
    number: '02',
    category: 'Python Desktop Application',
    title: 'ATM Management System',
    description:
      'A feature-rich banking application constructed with Python. Engine supporting secure account creation, instant deposits, cash withdrawals, balance inquiries, and detailed transaction history logs.',
    tags: ['Python', 'Object-Oriented Programming', 'Banking Logic', 'CLI/GUI'],
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
    githubUrl: 'https://github.com/mudavath-leela-bharani',
    liveUrl: '#',
  },
  {
    id: 'genai-analytics',
    number: '03',
    category: 'Tata Forage Simulation',
    title: 'GenAI Powered Data Analytics',
    description:
      'Generative AI data analytics simulation environment built for business intelligence, predictive trend synthesis, automated insight summaries, and statistical data visualization.',
    tags: ['Generative AI', 'Data Analytics', 'Prompt Engineering', 'Python'],
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
    githubUrl: 'https://github.com/mudavath-leela-bharani',
    liveUrl: '#',
  },
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-transparent rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-28 px-5 sm:px-8 md:px-10 relative z-30 select-none"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            PROJECTS
          </h2>
          <p className="text-[#9CA3AF] uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Handcrafted Software &amp; AI Applications
          </p>
        </FadeIn>

        <div className="relative flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectCardData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hoveredImg, setHoveredImg] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Skill Cycle: 5 images → use a special 5-photo layout
  const isSkillCycle = project.id === 'skill-cycle';

  return (
    <div
      ref={cardRef}
      className="sticky w-full"
      style={{ top: `calc(80px + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C]/90 backdrop-blur-xl p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(118,33,176,0.3)]"
      >
        {/* ── Header Row ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-4xl sm:text-6xl text-[#D7E2EA] font-kanit opacity-60">
              {project.number}
            </span>
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#9CA3AF] block mb-0.5">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-3xl font-bold uppercase tracking-tight text-white font-kanit">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D7E2EA]/70 hover:text-white hover:border-[#7621B0]/50 hover:bg-[#7621B0]/10 transition-all duration-300"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
            <LiveProjectButton label="Live Demo" href={project.liveUrl} />
          </div>
        </div>

        {/* ── Description & Tags ── */}
        <div className="mb-6 sm:mb-8">
          <p className="text-[#D7E2EA]/75 text-sm sm:text-base leading-relaxed max-w-3xl mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C084FC] hover:bg-[#7621B0]/20 hover:border-[#7621B0]/40 transition-all duration-300 cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Image Grid ── */}
        {isSkillCycle ? (
          /* Skill Cycle: 5-image mosaic (1 wide + 4 in 2×2) */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* First image — large left */}
            <div className="md:col-span-5 h-[220px] sm:h-[300px] md:h-[380px] rounded-[28px] overflow-hidden border border-white/10 group/img relative">
              <img
                src={project.images[0]}
                alt={`${project.title} – concept`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-400" />
            </div>

            {/* 4 user photos — 2×2 right grid */}
            <div className="md:col-span-7 grid grid-cols-2 gap-3">
              {project.images.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="h-[130px] sm:h-[175px] md:h-[183px] rounded-[22px] overflow-hidden border border-white/10 group/img relative cursor-pointer"
                  onMouseEnter={() => setHoveredImg(i)}
                  onMouseLeave={() => setHoveredImg(null)}
                >
                  <motion.img
                    src={src}
                    alt={`${project.title} – event photo ${i + 1}`}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredImg === i ? 1.07 : 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7621B0]/30 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-400" />
                  {/* Photo badge */}
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white/80 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    Photo {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Standard 3-image layout */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-5 flex flex-col gap-4">
              {project.images.slice(0, 2).map((src, i) => (
                <div
                  key={i}
                  className={`rounded-[28px] overflow-hidden border border-white/10 group/img shadow-md ${
                    i === 0 ? 'h-[140px] sm:h-[180px] md:h-[210px]' : 'h-[160px] sm:h-[220px] md:h-[260px]'
                  }`}
                >
                  <img
                    src={src}
                    alt={`${project.title} Preview ${i + 1}`}
                    className="w-full h-full object-cover group-hover/img:scale-[1.06] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="md:col-span-7 h-[280px] sm:h-[410px] md:h-[486px] rounded-[28px] sm:rounded-[40px] overflow-hidden border border-white/10 group/img shadow-md">
              <img
                src={project.images[2]}
                alt={`${project.title} Main`}
                className="w-full h-full object-cover group-hover/img:scale-[1.05] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
