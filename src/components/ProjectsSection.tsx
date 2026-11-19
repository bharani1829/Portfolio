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
    id: 'ruralcare-360',
    number: '01',
    category: 'AI & Healthcare Platform (Vibe Coding)',
    title: 'RuralCare 360 – Healthcare Coordination Platform',
    description:
      'RuralCare 360 is a role-based rural healthcare coordination platform that connects health workers, doctors, facilities, and administrators. It streamlines patient triage, referrals, teleconsultations, diagnostics, medicine tracking, and follow-ups to ensure every patient receives continuous care.',
    tags: ['Vibe Coding', 'AI Tools', 'Rural Healthcare', 'Role-Based Triage', 'Teleconsultations', 'Medicine Tracking'],
    images: [
      '/assets/projects/ruralcare-sub1.svg',
      '/assets/projects/ruralcare-sub2.svg',
      '/assets/projects/ruralcare-main.svg',
    ],
    githubUrl: 'https://github.com/bharani1829/SIH-PROJECT.git',
    liveUrl: '#',
  },
  {
    id: 'skill-cycle',
    number: '02',
    category: 'College Workshop Innovation',
    title: 'Skill Cycle – Skill Exchange Platform',
    description:
      'Developed during an intensive college workshop. A collaborative web platform empowering users to exchange, teach, and learn skills directly from peers in an interactive community ecosystem.',
    tags: ['HTML/CSS', 'Skill Exchange', 'Peer Learning', 'UX Design', 'Workshop Innovation'],
    images: [
      '/skill-cycle/sc-photo1.jpg',
      '/skill-cycle/sc-photo2.jpg',
      '/skill-cycle/sc-photo3.jpg',
      '/skill-cycle/sc-photo4.jpg',
    ],
    githubUrl: 'https://github.com/bharani1829',
    liveUrl: '#',
  },
  {
    id: 'atm-management',
    number: '03',
    category: 'Python Desktop Application',
    title: 'ATM Management System',
    description:
      'A feature-rich banking application constructed with Python. Engine supporting secure account creation, instant deposits, cash withdrawals, balance inquiries, and detailed transaction history logs.',
    tags: ['Python', 'Object-Oriented Programming', 'Banking Logic', 'Security Protocols', 'CLI/GUI'],
    images: [
      '/assets/projects/atm-sub1.svg',
      '/assets/projects/atm-sub2.svg',
      '/assets/projects/atm-main.svg',
    ],
    githubUrl: 'https://github.com/bharani1829/Bank_Account_Management_System.git',
    liveUrl: '#',
  },
  {
    id: 'student-attendance',
    number: '04',
    category: 'C++ Systems Application',
    title: 'Student Attendance Management System',
    description:
      'A high-performance academic management application engineered in C++. Uses Object-Oriented Programming, binary file persistence, and binary search logic to record student logs, calculate attendance percentages, and automatically filter semester defaulters below 75%.',
    tags: ['C++', 'Object-Oriented Programming', 'File I/O Streams', 'Data Structures', 'Academic Systems'],
    images: [
      '/assets/projects/attendance-sub1.svg',
      '/assets/projects/attendance-sub2.svg',
      '/assets/projects/attendance-main.svg',
    ],
    githubUrl: 'https://github.com/bharani1829/Student_Attendence_Management_System.git',
    liveUrl: '#',
  },
  {
    id: 'bank-management-mysql',
    number: '05',
    category: 'Database Management Systems (RDBMS)',
    title: 'Bank Management System Using MySQL',
    description:
      'A relational enterprise banking engine constructed with MySQL and relational database theory. Supports ACID transactions, stored procedures, audit triggers, multi-table joins, and balance checks ensuring rock-solid consistency across customer deposits and withdrawals.',
    tags: ['MySQL', 'RDBMS', 'SQL Transactions (ACID)', 'Stored Procedures', 'Triggers & Indexing'],
    images: [
      '/assets/projects/bankdb-sub1.svg',
      '/assets/projects/bankdb-sub2.svg',
      '/assets/projects/bankdb-main.svg',
    ],
    githubUrl: 'https://github.com/bharani1829/Bank_Account_Management_System.git',
    liveUrl: '#',
  },
  {
    id: 'loan-prediction-ml',
    number: '06',
    category: 'Data Science & Machine Learning',
    title: 'Loan Prediction System Using NumPy, Pandas & Matplotlib',
    description:
      'An end-to-end data science and predictive analytics pipeline. Performs exploratory data analysis (EDA), missing value median imputations, log distributions via NumPy, and correlation heatmap visualization with Matplotlib to assess credit risk and forecast applicant loan approvals.',
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'EDA & Feature Engineering', 'Predictive Modeling'],
    images: [
      '/assets/projects/loanml-sub1.svg',
      '/assets/projects/loanml-sub2.svg',
      '/assets/projects/loanml-main.svg',
    ],
    githubUrl: 'https://github.com/bharani1829/Loan-Prediction-Data-Analysis-System.git',
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
          <h2 className="hero-heading text-[clamp(2.5rem,8vw,90px)] leading-none tracking-tight font-serif text-[#7F011F]">
            PROJECTS
          </h2>
          <p className="text-[#7F011F]/70 uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
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
        className="rounded-[28px] sm:rounded-[36px] border border-[#7F011F]/15 bg-[#FAF6EC] p-5 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(127,1,31,0.06)] overflow-hidden transition-all duration-300 hover:border-[#7F011F]/30"
      >
        {/* ── Header Row ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#7F011F]/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-light text-3xl sm:text-5xl text-[#7F011F]/40 font-serif">
              {project.number}
            </span>
            <div>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#7F011F]/70 block mb-1">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#7F011F] font-serif">
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
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#7F011F] text-[#F5EBD0] shadow-sm text-xs font-mono hover:bg-[#630018] active:scale-[0.98] transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-[#F5EBD0]" />
                GitHub ↗
              </a>
            )}
            <LiveProjectButton label="Live Demo" href={project.liveUrl} />
          </div>
        </div>

        {/* ── Description & Tags ── */}
        <div className="mb-6 sm:mb-8">
          <p className="text-[#7F011F]/80 font-normal text-sm sm:text-base leading-relaxed max-w-3xl mb-4 font-sans">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#F5EBD0] border border-[#7F011F]/15 text-xs font-mono text-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] transition-all duration-200 cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Image Grid ── */}
        {isSkillCycle ? (
          /* Skill Cycle: 4 authentic workshop photos (1 large left + 3 right) */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* First real photo — large left */}
            <div className="md:col-span-6 h-[240px] sm:h-[320px] md:h-[400px] rounded-[28px] overflow-hidden border border-[#7F011F]/15 group/img relative shadow-sm">
              <img
                src={project.images[0]}
                alt={`${project.title} – Workshop Team`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <span className="text-xs font-mono text-white/90">Workshop Innovation Team Photo</span>
              </div>
            </div>

            {/* 3 workshop event photos — right column */}
            <div className="md:col-span-6 grid grid-cols-2 gap-3 h-full">
              {/* Photo 2 - spans full row */}
              <div
                className="col-span-2 h-[150px] sm:h-[190px] rounded-[22px] overflow-hidden border border-[#7F011F]/15 group/img relative shadow-sm cursor-pointer"
                onMouseEnter={() => setHoveredImg(1)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <motion.img
                  src={project.images[1]}
                  alt={`${project.title} – event photo 2`}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredImg === 1 ? 1.05 : 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-[#7F011F]/80 backdrop-blur-sm text-[10px] font-mono text-[#F5EBD0]">
                  Event Session
                </div>
              </div>

              {/* Photos 3 & 4 */}
              {project.images.slice(2).map((src, i) => (
                <div
                  key={i + 2}
                  className="h-[120px] sm:h-[150px] rounded-[20px] overflow-hidden border border-[#7F011F]/15 group/img relative shadow-sm cursor-pointer"
                  onMouseEnter={() => setHoveredImg(i + 2)}
                  onMouseLeave={() => setHoveredImg(null)}
                >
                  <motion.img
                    src={src}
                    alt={`${project.title} – event photo ${i + 3}`}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredImg === i + 2 ? 1.04 : 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#7F011F]/80 backdrop-blur-sm text-[10px] font-mono text-[#F5EBD0]">
                    Workshop {i + 3}
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
                  className={`rounded-[26px] overflow-hidden border border-[#7F011F]/15 group/img shadow-sm bg-[#F5EBD0] ${
                    i === 0 ? 'h-[140px] sm:h-[180px] md:h-[210px]' : 'h-[160px] sm:h-[220px] md:h-[250px]'
                  }`}
                >
                  <img
                    src={src}
                    alt={`${project.title} Preview ${i + 1}`}
                    className="w-full h-full object-cover group-hover/img:scale-[1.04] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="md:col-span-7 h-[280px] sm:h-[410px] md:h-[475px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#7F011F]/15 group/img shadow-md bg-[#F5EBD0]">
              <img
                src={project.images[2]}
                alt={`${project.title} Main Preview`}
                className="w-full h-full object-cover group-hover/img:scale-[1.03] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
