import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const word = {
    hidden: { opacity: 0.15 },
    visible: { opacity: 1 },
  };

  return (
    <motion.p
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="mr-[0.3em] whitespace-pre">
          {w}
        </motion.span>
      ))}
    </motion.p>
  );
};
