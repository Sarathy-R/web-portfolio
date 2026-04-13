import React from 'react';
import { Award, Star } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { SectionContainer } from './SectionContainer';
import { AchievementItem } from '../types';

const achievementsData: AchievementItem[] = [
  {
    id: '1',
    title: 'The Extra Mile Award - Q4 FY25 (Accenture India)',
    description: 'Awarded for demonstrating dedication, innovation, and a commitment to excellence in delivering high-quality solutions that exceeded client expectations in GxP project.',
    iconName: 'award'
  },
  {
    id: '2',
    title: 'North Star - Pinnacle Award FY24 (Accenture India)',
    description: 'Recognized for taking initiative, going above and beyond, and consistently delivering exceptional results that significantly contributed to the success of the project and client satisfaction.',
    iconName: 'star'
  }
];

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={56} className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.5} />,
  star: <Star size={56} className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.5} />,
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

export const Achievements: React.FC = () => {
  return (
    <SectionContainer id="achievements">
      <h2 className="mb-12 px-4 text-3xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white sm:text-4xl">
        Achievements
      </h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2"
      >
        {achievementsData.map((achievement) => (
          <motion.div 
            key={achievement.id}
            variants={itemVariants}
            className="group flex flex-col items-start rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 dark:border-transparent dark:bg-surface-dark dark:hover:bg-white/5 dark:hover:shadow-primary/10"
          >
            {iconMap[achievement.iconName]}
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary dark:text-white transition-colors">
              {achievement.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
};
