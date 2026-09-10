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
    name: 'Full-Stack Web Design',
    description:
      'Designing clean, modern, and high-conversion web applications with attention to layout, dark-mode gradients, fluid typography, and seamless user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-transparent text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20 select-none">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            SERVICES
          </h2>
        </FadeIn>

        {/* 5 Services Vertical List */}
        <div className="flex flex-col border-t border-white/10">
          {servicesData.map((item, idx) => (
            <FadeIn key={item.number} delay={idx * 0.1} y={30}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-white/10 gap-4 md:gap-8 group hover:bg-white/[0.03] px-4 rounded-2xl transition-colors duration-500">
                {/* Number */}
                <div className="font-black text-[clamp(3rem,8vw,120px)] leading-none text-[#D7E2EA]/30 font-kanit min-w-[120px] sm:min-w-[160px] group-hover:text-[#7621B0] transition-colors duration-500">
                  {item.number}
                </div>

                {/* Name & Description */}
                <div className="flex flex-col gap-2 flex-grow">
                  <h3 className="font-medium uppercase text-[clamp(1.1rem,2.2vw,2.1rem)] text-white tracking-wide">
                    {item.name}
                  </h3>
                  <p className="font-light leading-relaxed text-[#D7E2EA]/60 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
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
