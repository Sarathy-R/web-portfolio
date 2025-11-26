import React from 'react';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="profile" className="flex flex-col gap-10 pt-10 sm:pt-16">
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-8"
        >
          <div 
            className="h-32 w-32 shrink-0 rounded-full border-4 border-white dark:border-surface-dark bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-105 hover:border-primary/50"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80")' }}
            aria-label="Professional headshot of Sarathy Ranganathan"
          />
          <div className="flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-5xl"
            >
              Sarathy Ranganathan
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl"
            >
              Senior Software Engineer | Python, AWS, & DevOps Specialist. A passionate developer with over 6.5 years of experience building scalable, resilient systems in the cloud.
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex w-full max-w-[560px] flex-wrap gap-4"
      >
        <button className="group flex h-12 flex-1 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
          <Download size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
          <span className="truncate">Download Resume</span>
        </button>
        <button className="group flex h-12 flex-1 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-200 dark:bg-surface-dark px-6 text-base font-bold text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 hover:bg-gray-300 dark:hover:bg-white/10 hover:shadow-lg">
          <Mail size={20} className="transition-transform duration-300 group-hover:rotate-12" />
          <span className="truncate">Contact Me</span>
        </button>
        <div className="flex gap-4">
          <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200 dark:bg-surface-dark text-gray-700 dark:text-white transition-all duration-300 hover:scale-110 hover:bg-[#0077b5] hover:text-white hover:shadow-lg">
            <Linkedin size={22} />
          </a>
          <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200 dark:bg-surface-dark text-gray-700 dark:text-white transition-all duration-300 hover:scale-110 hover:bg-[#333] hover:text-white hover:shadow-lg">
            <Github size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};