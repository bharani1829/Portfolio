import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Minimal Apple celebratory silver particle burst (calm, non-neon)
    confetti({
      particleCount: 28,
      spread: 45,
      origin: { y: 0.6 },
      colors: ['#FFFFFF', '#E5E5EA', '#A1A1A6', '#8E8E93'],
      ticks: 180,
      gravity: 0.8,
      scalar: 0.75,
    });

    // Generate high-resolution Apple-minimalist PDF Resume
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // ── Header Section ──
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(20, 20, 24);
    doc.text('O LEELA BHARANI', 20, 24);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 88);
    doc.text('B.Tech AI & ML Student  |  AI Enthusiast  |  Python & Software Developer', 20, 31);
    doc.text('Email: orsuleelabharani18@gmail.com   |   Phone: +91 82972 40018', 20, 36.5);
    doc.text('GitHub: github.com/bharani1829   |   LinkedIn: linkedin.com/in/orsu-leela-bharani-973649397', 20, 42);

    // Subtle Hairline Divider
    doc.setDrawColor(215, 215, 220);
    doc.setLineWidth(0.35);
    doc.line(20, 47, 190, 47);

    let y = 56;

    const addSectionHeader = (title: string) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(18, 18, 22);
      doc.text(title.toUpperCase(), 20, y);
      doc.setDrawColor(210, 210, 215);
      doc.setLineWidth(0.2);
      doc.line(20, y + 2, 190, y + 2);
      y += 8;
    };

    // ── Education ──
    addSectionHeader('Education');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(25, 25, 30);
    doc.text('Aditya University — B.Tech in Artificial Intelligence & Machine Learning', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(90, 90, 95);
    doc.text('2024 – 2028 (2nd Year)', 148, y);
    y += 5;
    doc.setTextColor(60, 60, 65);
    doc.setFont('helvetica', 'normal');
    doc.text('• First Year Academic Distinction: 9.10 / 10 CGPA', 23, y);
    y += 5;
    doc.text('• Core Subjects: Data Structures in C, DBMS, AI Foundations, Python, C++, SQL', 23, y);
    y += 9;

    // ── Technical Skills ──
    addSectionHeader('Technical Skills');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(35, 35, 40);
    doc.text('Programming Languages:', 23, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(70, 70, 75);
    doc.text('Python, C, C++ (Learning)', 72, y);
    y += 5;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(35, 35, 40);
    doc.text('Core Computer Science:', 23, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(70, 70, 75);
    doc.text('Data Structures in C, Relational DBMS, Artificial Intelligence', 72, y);
    y += 5;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(35, 35, 40);
    doc.text('Web Technologies:', 23, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(70, 70, 75);
    doc.text('HTML5, CSS3, JavaScript, React UI, Tailwind CSS', 72, y);
    y += 5;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(35, 35, 40);
    doc.text('Tools & Methodologies:', 23, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(70, 70, 75);
    doc.text('Git & GitHub (Push, Pull, Commit), Prompt Engineering, Agile Software Engineering', 72, y);
    y += 9;

    // ── Highlight Projects ──
    addSectionHeader('Projects & Implementations');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(25, 25, 30);
    doc.text('RuralCare 360 — Rural Healthcare Coordination Platform', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(90, 90, 95);
    doc.text('2026', 178, y);
    y += 4.5;
    doc.setTextColor(60, 60, 65);
    doc.setFontSize(9);
    doc.text('• Role-based rural healthcare coordination platform connecting health workers, doctors, and facilities.', 23, y);
    y += 4.5;
    doc.text('• Streamlines patient triage, referrals, teleconsultations, diagnostics, and continuous medicine tracking.', 23, y);
    y += 6.5;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(25, 25, 30);
    doc.text('Skill Cycle — Peer-to-Peer Skill Exchange Platform', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(90, 90, 95);
    doc.text('2024', 178, y);
    y += 4.5;
    doc.setTextColor(60, 60, 65);
    doc.setFontSize(9);
    doc.text('• Developed during an intensive college workshop enabling students to exchange and learn skills collaboratively.', 23, y);
    y += 4.5;
    doc.text('• Designed interactive user interface with intuitive category matching and community workflow.', 23, y);
    y += 6.5;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(25, 25, 30);
    doc.text('ATM Management System in Python', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(90, 90, 95);
    doc.text('2025', 178, y);
    y += 4.5;
    doc.setTextColor(60, 60, 65);
    doc.setFontSize(9);
    doc.text('• Complete OOP financial banking application supporting account creation, deposits, withdrawals, and inquiry routines.', 23, y);
    y += 9;

    // ── Certifications ──
    addSectionHeader('Professional Certifications');
    const certs = [
      '• Cisco Networking Academy: C Essentials, Python Essentials',
      '• Tata Forage: GenAI Powered Data Analytics Simulation',
      '• Coursera: Database Management Systems, Agile Software Engineering, Prompt Engineering',
      '• Scrimba: HTML & CSS Crash Course',
    ];
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 65);
    certs.forEach((c) => {
      doc.text(c, 23, y);
      y += 4.5;
    });
    y += 4.5;

    // ── Career Objective ──
    addSectionHeader('Career Objective');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 65);
    doc.text(
      'Aspiring AI Engineer / Software Developer dedicated to engineering impactful applications using Artificial Intelligence,',
      23,
      y
    );
    y += 4.5;
    doc.text(
      'Python, modern full-stack architectures, and continuous problem solving.',
      23,
      y
    );

    // Trigger PDF download
    doc.save('O_Leela_Bharani_Resume.pdf');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-[#161618] border border-white/10 rounded-[28px] shadow-[0_24px_64px_rgba(0,0,0,0.8)] p-6 sm:p-8 my-8 overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#F5F5F7]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-[#F5F5F7]">
                O Leela Bharani — Resume
              </h3>
              <span className="text-xs font-mono text-[#A1A1A6]">
                Aditya University • B.Tech AI & ML (9.10 CGPA)
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#F5F5F7] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 text-sm text-[#A1A1A6]">
          {/* Summary / Tagline */}
          <div className="p-4 rounded-[18px] bg-white/[0.04] border border-white/10">
            <p className="text-xs font-mono uppercase tracking-wider text-[#A1A1A6] mb-1">Professional Tagline</p>
            <p className="font-medium text-[#F5F5F7]">
              AI & ML Student | AI Enthusiast | Python Developer | Lifelong Learner
            </p>
          </div>

          {/* Quick Links & Handles */}
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://github.com/bharani1829"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#F5F5F7] hover:border-white/25 hover:bg-white/[0.08] transition-all"
            >
              <Github className="w-3.5 h-3.5 text-[#A1A1A6]" strokeWidth={1.75} />
              <span>github.com/bharani1829</span>
            </a>
            <a
              href="https://www.linkedin.com/in/orsu-leela-bharani-973649397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#F5F5F7] hover:border-white/25 hover:bg-white/[0.08] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#A1A1A6]" strokeWidth={1.75} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#A1A1A6] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-white/80" /> Education
            </h4>
            <div className="p-4 rounded-[18px] bg-white/[0.02] border border-white/10 space-y-1">
              <div className="flex justify-between items-center font-medium text-[#F5F5F7]">
                <span>B.Tech in AI &amp; ML</span>
                <span className="text-xs font-mono text-white bg-white/[0.08] px-2.5 py-0.5 rounded-full border border-white/10">CGPA: 9.10</span>
              </div>
              <p className="text-xs text-[#A1A1A6]">Aditya University • Currently in 2nd Year</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#A1A1A6] flex items-center gap-2">
              <Award className="w-4 h-4 text-white/80" /> Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-[16px] bg-white/[0.02] border border-white/8">
                <span className="font-medium text-[#F5F5F7] block mb-1">Languages:</span>
                <span className="text-[#A1A1A6]">Python, C Language, C++ (Learning)</span>
              </div>
              <div className="p-3.5 rounded-[16px] bg-white/[0.02] border border-white/8">
                <span className="font-medium text-[#F5F5F7] block mb-1">Core Subjects:</span>
                <span className="text-[#A1A1A6]">Data Structures in C, DBMS, AI</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#A1A1A6] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-white/80" /> Highlight Projects
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="p-3.5 rounded-[16px] bg-white/[0.02] border border-white/8">
                <strong className="text-[#F5F5F7] font-medium">1. RuralCare 360:</strong> <span className="text-[#A1A1A6]">Role-based rural healthcare coordination platform connecting health workers, doctors, and facilities.</span>
              </li>
              <li className="p-3.5 rounded-[16px] bg-white/[0.02] border border-white/8">
                <strong className="text-[#F5F5F7] font-medium">2. Skill Cycle:</strong> <span className="text-[#A1A1A6]">Skill exchange platform developed during college workshop.</span>
              </li>
              <li className="p-3.5 rounded-[16px] bg-white/[0.02] border border-white/8">
                <strong className="text-[#F5F5F7] font-medium">3. ATM Management System:</strong> <span className="text-[#A1A1A6]">Python financial banking application.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
          <span className="text-xs font-mono text-[#A1A1A6]">
            Print-Ready Vector PDF Document
          </span>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/10 text-[#F5F5F7] text-xs uppercase font-medium hover:bg-white/[0.08] active:scale-[0.98] transition-all"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="apple-pill-hover flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F5F5F7] text-[#0A0A0A] text-xs uppercase font-semibold tracking-wider hover:bg-white active:scale-[0.98] transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
