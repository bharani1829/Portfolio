import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingImageProps {
  src: string;
  alt: string;
  glow: string; // tailwind color class fragment, e.g. '#7621B0'
  widthClass: string;
  wobbleDelay?: number;
  parallaxSpeed?: number; // -1 to 1, negative = moves up while scrolling, positive = down
  className?: string;
}

export const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  glow,
  widthClass,
  wobbleDelay = 0,
  parallaxSpeed = 0.2,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60 * parallaxSpeed, -60 * parallaxSpeed]);

  if (failed) return null;

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <div
        className="relative rounded-[28px] p-3 sm:p-4 border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl animate-float"
        style={{
          animationDelay: `${wobbleDelay}s`,
          boxShadow: `0 20px 60px -15px ${glow}55`,
        }}
      >
        <div
          className="absolute -inset-3 rounded-[32px] opacity-40 blur-2xl -z-10"
          style={{ background: `radial-gradient(circle, ${glow}66, transparent 70%)` }}
        />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`${widthClass} object-contain drop-shadow-xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105`}
        />
      </div>
    </motion.div>
  );
};
