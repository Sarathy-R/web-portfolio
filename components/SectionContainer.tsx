import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className = "", delay = 0 }) => {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-32 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};