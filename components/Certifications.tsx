import React from 'react';
import { BadgeCheck, LayoutTemplate, Activity, Box } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { SectionContainer } from './SectionContainer';
import { CertificationItem } from '../types';

const certificationsData: CertificationItem[] = [
  { id: '1', name: 'AWS Certified Solutions Architect - Associate', iconName: 'verified' },
  { id: '2', name: 'AWS Certified Developer - Associate', iconName: 'developer_mode' },
  { id: '3', name: 'AWS Certified SysOps Administrator - Associate', iconName: 'monitoring' },
  { id: '4', name: 'Certified Kubernetes Administrator (CKA)', iconName: 'deployed_code' },
];

const iconMap: Record<string, React.ReactNode> = {
  verified: <BadgeCheck size={56} className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.5} />,
  developer_mode: <LayoutTemplate size={56} className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.5} />,
  monitoring: <Activity size={56} className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.5} />,
  deployed_code: <Box size={56} className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.5} />,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

export const Certifications: React.FC = () => {
  return (
    <SectionContainer id="certifications">
      <h2 className="mb-12 px-4 text-3xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white sm:text-4xl">
        Certifications
      </h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {certificationsData.map((cert) => (
          <motion.div 
            key={cert.id}
            variants={itemVariants}
            className="group flex flex-col items-center justify-start rounded-2xl border border-gray-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 dark:border-transparent dark:bg-surface-dark dark:hover:bg-white/5 dark:hover:shadow-primary/10"
          >
            {iconMap[cert.iconName]}
            <p className="text-base font-bold leading-snug text-gray-900 group-hover:text-primary dark:text-white transition-colors">
              {cert.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};