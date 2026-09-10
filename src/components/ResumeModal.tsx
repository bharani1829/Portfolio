import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Briefcase, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
    });

    // Create a dynamic printable/downloadable text resume representation
    const resumeText = `=====================================================
O LEELA BHARANI — CURRICULUM VITAE
AI & ML Student | AI Enthusiast | Python Developer
Email: orsuleelabharani18@gmail.com
Phone: +91 82972 40018
LinkedIn: linkedin.com/in/orsu-leela-bharani-973649397
Instagram: @_bharani.29
Location: Aditya University, Andhra Pradesh, India
=====================================================

EDUCATION:
- B.Tech in Artificial Intelligence & Machine Learning
  Aditya University (Current Year: 2nd Year)
  First Year CGPA: 9.10 / 10

TECHNICAL SKILLS:
- Programming: Python, C, C++ (Learning)
- Core CS: Data Structures using C, DBMS (Learning), AI (Learning)
- Web Tech: HTML5, CSS3, JavaScript / React UI
- Tools & Engineering: Prompt Engineering, Agile Software Engineering, Problem Solving, SQL (Basic)

PROJECTS:
1. Skill Cycle – Skill Exchange Platform
   - College workshop innovation enabling peer-to-peer skill sharing.
2. ATM Management System
   - Python application supporting account creation, deposits, withdrawals, and balance inquiry.

CERTIFICATIONS:
- Cisco Networking Academy: C Essentials, Python Essentials
- Tata Forage: GenAI Powered Data Analytics Simulation
- Coursera: Database Management Systems, Agile Software Engineering, Prompt Engineering
- Scrimba: HTML & CSS Crash Course

CAREER GOAL:
Aspiring AI Engineer / Software Developer dedicated to building impactful applications using Artificial Intelligence, Python, and modern software technologies.
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'O_Leela_Bharani_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0C0C0C] border-2 border-[#7621B0]/60 rounded-[35px] shadow-2xl p-6 sm:p-10 my-8 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7621B0] to-[#B600A8] flex items-center justify-center text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white font-kanit">
                O Leela Bharani — Resume
              </h3>
              <span className="text-xs font-mono text-[#9CA3AF]">
                Aditya University • B.Tech AI & ML (9.10 CGPA)
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#D7E2EA] transition-colors duration-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 text-sm text-[#D7E2EA]">
          {/* Summary / Tagline */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-xs font-mono uppercase text-[#C084FC] mb-1">Professional Tagline</p>
            <p className="font-semibold text-white">
              AI & ML Student | AI Enthusiast | Python Developer | Lifelong Learner
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#9CA3AF] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#7621B0]" /> Education
            </h4>
            <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>B.Tech in AI &amp; ML</span>
                <span className="text-emerald-400 font-mono">CGPA: 9.10</span>
              </div>
              <p className="text-xs text-[#9CA3AF]">Aditya University • Currently in 2nd Year</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#9CA3AF] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#B600A8]" /> Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-900 border border-white/5">
                <span className="font-semibold text-white block mb-1">Languages:</span>
                <span className="text-[#9CA3AF]">Python, C Language, C++ (Learning)</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900 border border-white/5">
                <span className="font-semibold text-white block mb-1">Core Subjects:</span>
                <span className="text-[#9CA3AF]">Data Structures in C, DBMS, AI</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#9CA3AF] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#3B82F6]" /> Highlight Projects
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="p-3 rounded-xl bg-neutral-900 border border-white/5">
                <strong className="text-white">1. Skill Cycle:</strong> Skill exchange platform developed during college workshop.
              </li>
              <li className="p-3 rounded-xl bg-neutral-900 border border-white/5">
                <strong className="text-white">2. ATM Management System:</strong> Python financial banking application.
              </li>
            </ul>
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
          <span className="text-xs font-mono text-[#9CA3AF]">
            PDF / Text Resume Package Ready
          </span>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/20 text-white text-xs uppercase font-medium hover:bg-white/10 transition-colors duration-500"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full contact-btn-bg text-white text-xs uppercase font-semibold tracking-wider hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
