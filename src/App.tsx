import React, { useState } from 'react';
import { MinimalAnimalCursor } from './components/ui/MinimalAnimalCursor';
import { Canvas3DBackground } from './components/ui/Canvas3DBackground';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  useSmoothScroll();

  const handleOpenResumeModal = () => setIsResumeModalOpen(true);
  const handleCloseResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className="relative bg-transparent text-[#F5F5F7] font-sans antialiased selection:bg-white/20 overflow-x-clip min-h-screen">
      {/* Minimal Animal Cursor Follower */}
      <MinimalAnimalCursor />

      {/* Scroll Journey Progress Indicator */}
      <ScrollProgress />

      {/* Interactive Ambient 3D Particle Canvas */}
      <Canvas3DBackground />

      {/* Main Page Layout Container */}
      <main className="relative z-10 w-full overflow-x-clip">
        {/* 1. HERO SECTION */}
        <HeroSection onOpenResumeModal={handleOpenResumeModal} />

        {/* 2. ABOUT SECTION */}
        <AboutSection />

        {/* 4. SERVICES SECTION */}
        <ServicesSection />

        {/* 5. PROJECTS SECTION */}
        <ProjectsSection />

        {/* 6. EDUCATION SECTION */}
        <EducationSection />

        {/* 7. SKILLS SECTION */}
        <SkillsSection />

        {/* 8. CERTIFICATIONS SECTION */}
        <CertificationsSection />

        {/* 9. LEARNING JOURNEY TIMELINE */}
        <TimelineSection />

        {/* 10. CONTACT SECTION */}
        <ContactSection onOpenResumeModal={handleOpenResumeModal} />

        {/* 11. FOOTER */}
        <Footer />
      </main>

      {/* Resume Download / View Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
      />
    </div>
  );
};

export default App;
