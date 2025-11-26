import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SectionContainer } from './SectionContainer';
import { SkillCategory } from '../types';

const expertiseData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      // { name: 'Bash', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      // { name: 'Kubernetes', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Terraform', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      // { name: 'Ansible', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
      { name: 'Jenkins', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    ]
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      // { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      // { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      // { name: 'Django', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Flask', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      // { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const Expertise: React.FC = () => {
  return (
    <SectionContainer id="expertise">
      <h2 className="mb-12 px-4 text-3xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white sm:text-4xl">
        Technology Expertise
      </h2>
      <div className="flex flex-col gap-16 px-4">
        {expertiseData.map((category, index) => (
          <div key={category.title}>
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-sm font-bold uppercase tracking-wider text-primary"
            >
              {category.title}
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-5"
            >
              {category.skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                  }}
                  className="group flex cursor-default items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 dark:border-transparent dark:bg-surface-dark dark:hover:bg-white/5 dark:hover:shadow-primary/20"
                >
                  <img 
                    src={skill.iconUrl} 
                    alt={`${skill.name} logo`} 
                    className={`h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 ${
                      skill.name === 'Flask' || skill.name === 'Bash' ? 'dark:invert' : ''
                    }`} 
                  />
                  <span className="text-base font-medium text-gray-700 transition-colors group-hover:text-primary dark:text-gray-300 dark:group-hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};