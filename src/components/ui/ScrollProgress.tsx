import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-white/40 backdrop-blur-sm"
    />
  );
};
