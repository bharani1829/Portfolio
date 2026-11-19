import React from 'react';
import { FadeIn } from './ui/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    name: '3D Modeling & Visuals',
    description:
      'Creation of detailed 3D objects, characters, or interactive environments tailored to specific project needs, ideal for web graphics, software products, and AI visualizations.',
  },
  {
    number: '02',
    name: 'High-Fidelity Rendering',
    description:
      'High-quality, photorealistic renders that showcase concepts with custom lighting, textures, and materials to bring digital ideas into striking reality.',
  },
  {
    number: '03',
    name: 'AI & Motion Design',
    description:
      'Dynamic animations, GenAI simulations, and interactive motion graphics that add storytelling, responsiveness, and energy to digital applications.',
  },
  {
    number: '04',
    name: 'Software & Core Engineering',
    description:
      'Crafting robust Python systems, ATM platforms, Data Structures using C/C++, and optimized Database Management System (DBMS) architectures.',
  },
  {
    number: '05',
    name: 'Responsive Web Design',
    description:
      'Designing clean, modern, and accessible web pages with HTML5, CSS3, semantic layouts, fluid typography, and mobile-responsive styling.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-transparent text-[#7F011F] rounded-t-[32px] sm:rounded-t-[44px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 w-full relative z-20 select-none">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
          <h2 className="hero-heading text-[clamp(2.5rem,8vw,90px)] leading-none tracking-tight font-serif text-[#7F011F]">
            SERVICES
          </h2>
          <p className="text-[#7F011F]/70 text-xs sm:text-sm font-mono tracking-widest uppercase mt-3">
            Capabilities &amp; Engineering Disciplines
          </p>
        </FadeIn>

        {/* 5 Services Vertical List */}
        <div className="flex flex-col border-t border-[#7F011F]/15">
          {servicesData.map((item, idx) => (
            <FadeIn key={item.number} delay={idx * 0.08} y={30}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-7 sm:py-9 border-b border-[#7F011F]/15 gap-4 md:gap-8 group hover:bg-[#7F011F]/5 px-5 rounded-[20px] transition-all duration-300">
                {/* Number */}
                <div className="font-light text-[clamp(2.5rem,6vw,80px)] leading-none text-[#7F011F]/30 font-serif min-w-[90px] sm:min-w-[120px] group-hover:text-[#7F011F] transition-colors duration-300">
                  {item.number}
                </div>

                {/* Name & Description */}
                <div className="flex flex-col gap-1.5 flex-grow">
                  <h3 className="font-bold text-lg sm:text-2xl text-[#7F011F] tracking-tight font-serif">
                    {item.name}
                  </h3>
                  <p className="font-normal leading-relaxed text-[#7F011F]/80 max-w-2xl text-sm sm:text-base font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
