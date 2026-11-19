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
    doc.text('ORSU LEELA BHARANI', 20, 24);

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
    doc.text('2025 – 2029 (2nd Year)', 148, y);
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
    doc.text('HTML5, CSS3, Responsive Design (Scrimba Certified)', 72, y);
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
    doc.text('2026', 178, y);
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
      'Python, web design (HTML/CSS), and continuous problem solving.',
      23,
      y
    );

    // Trigger PDF download
    doc.save('Orsu_Leela_Bharani_Resume.pdf');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-[#FAF6EC] border border-[#7F011F]/20 rounded-[28px] shadow-[0_24px_64px_rgba(127,1,31,0.2)] p-6 sm:p-8 my-8 overflow-hidden max-h-[90vh] flex flex-col text-[#7F011F]"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#7F011F]/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-[#7F011F]/10 border border-[#7F011F]/20 flex items-center justify-center text-[#7F011F]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#7F011F] font-serif">
                Orsu Leela Bharani — Resume
              </h3>
              <span className="text-xs font-mono text-[#7F011F]/70">
                Aditya University • B.Tech AI &amp; ML (9.10 CGPA)
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#7F011F]/10 hover:bg-[#7F011F]/20 text-[#7F011F] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 text-sm text-[#7F011F]/80">
          {/* Summary / Tagline */}
          <div className="p-4 rounded-[18px] bg-[#F5EBD0] border border-[#7F011F]/15">
            <p className="text-xs font-mono uppercase tracking-wider text-[#7F011F]/70 mb-1 font-semibold">Professional Tagline</p>
            <p className="font-semibold text-[#7F011F]">
              AI &amp; ML Student | AI Enthusiast | Python Developer | Lifelong Learner
            </p>
          </div>

          {/* Quick Links & Handles */}
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://github.com/bharani1829"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EBD0] border border-[#7F011F]/20 text-xs text-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] transition-all"
            >
              <Github className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>github.com/bharani1829</span>
            </a>
            <a
              href="https://www.linkedin.com/in/orsu-leela-bharani-973649397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EBD0] border border-[#7F011F]/20 text-xs text-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#7F011F] font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#7F011F]" /> Education
            </h4>
            <div className="p-4 rounded-[18px] bg-[#F5EBD0] border border-[#7F011F]/15 space-y-1">
              <div className="flex justify-between items-center font-bold text-[#7F011F] font-serif">
                <span>B.Tech in AI &amp; ML</span>
                <span className="text-xs font-mono text-[#F5EBD0] bg-[#7F011F] px-2.5 py-0.5 rounded-full">CGPA: 9.10</span>
              </div>
              <p className="text-xs text-[#7F011F]/80">Aditya University • Currently in 2nd Year</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#7F011F] font-semibold flex items-center gap-2">
              <Award className="w-4 h-4 text-[#7F011F]" /> Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-[16px] bg-[#F5EBD0] border border-[#7F011F]/15">
                <span className="font-bold text-[#7F011F] block mb-1">Languages:</span>
                <span className="text-[#7F011F]/80">Python, C Language, C++ (Learning)</span>
              </div>
              <div className="p-3.5 rounded-[16px] bg-[#F5EBD0] border border-[#7F011F]/15">
                <span className="font-bold text-[#7F011F] block mb-1">Core Subjects:</span>
                <span className="text-[#7F011F]/80">Data Structures in C, DBMS, AI</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#7F011F] font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#7F011F]" /> Highlight Projects
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="p-3.5 rounded-[16px] bg-[#F5EBD0] border border-[#7F011F]/15">
                <strong className="text-[#7F011F] font-bold">1. RuralCare 360:</strong> <span className="text-[#7F011F]/80">Role-based rural healthcare coordination platform.</span>
              </li>
              <li className="p-3.5 rounded-[16px] bg-[#F5EBD0] border border-[#7F011F]/15">
                <strong className="text-[#7F011F] font-bold">2. Student Attendance System:</strong> <span className="text-[#7F011F]/80">C++ object-oriented system with binary file persistence.</span>
              </li>
              <li className="p-3.5 rounded-[16px] bg-[#F5EBD0] border border-[#7F011F]/15">
                <strong className="text-[#7F011F] font-bold">3. Bank Management System (MySQL):</strong> <span className="text-[#7F011F]/80">Enterprise transactional database engine.</span>
              </li>
              <li className="p-3.5 rounded-[16px] bg-[#F5EBD0] border border-[#7F011F]/15">
                <strong className="text-[#7F011F] font-bold">4. Loan Prediction (NumPy/Pandas):</strong> <span className="text-[#7F011F]/80">Predictive data science pipeline.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="pt-4 border-t border-[#7F011F]/15 flex flex-wrap gap-4 items-center justify-between">
          <span className="text-xs font-mono text-[#7F011F]/70">
            Print-Ready Vector PDF Document
          </span>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#7F011F]/25 text-[#7F011F] text-xs uppercase font-semibold hover:bg-[#7F011F]/5 active:scale-[0.98] transition-all"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7F011F] text-[#F5EBD0] text-xs uppercase font-semibold tracking-wider hover:bg-[#630018] active:scale-[0.98] transition-all shadow-md"
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
