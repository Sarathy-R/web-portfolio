import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionContainer } from './SectionContainer';
import { ArticleItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const articlesData: ArticleItem[] = [
  {
    id: '1',
    title: 'Mastering Concurrency in Python',
    summary: 'An in-depth guide to using asyncio and multithreading for building high-performance applications.',
    category: 'Python',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAy4xiXjrH9ymXkQvSh8MiB3pCQJI7G8PuN9EEDg2NXGgbGjupgK8YnCS17RRhQ_ac3gj9luWCp8j3cCnUJgXenpDT_D8ZE5UCEozmLcKwbQv9NhW9FjMRKg87ZjYm4Rz29oeCZ18WcKXAVQLJkuLBUuE-idXM8JHve7UE7XIywXJiC8lijVABX-z2_f2g2SB7mkjQHGQBZEGkCM6ZME4dkz0WPyqXKHXYG48AtBiqjklq0nVV8M5M1C6I2aA5LTe2spb_XEs3E6K0'
  },
  {
    id: '2',
    title: 'Serverless CI/CD on AWS',
    summary: 'Leveraging AWS CodePipeline and Lambda to create a fully automated, serverless deployment pipeline.',
    category: 'AWS',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASogVt9kFia2QuFy5l29q-5kwRs6gWGJmctjNUxvmqnewUWI0p1WYiU3w-Ga-FVsBeQ_nfhSIF-TzZpl-OL5jiyVxcYZCicZg510NMbPQsc_GJ4Ah9CBCA2GE2QlcOShkEwulAtWUIO6kNFIExBhwVhEWqkW1leSmfzA-cFyJi2_Rq_yvHbQXzq59fwcU0A2NwDyhc_wPp7E90Dg1t-qlVps-8ziqPQjpVGOtIu7SYDU9maDVofcf51XEJYBIY91EtN0MZE6rCqbVD'
  },
  {
    id: '3',
    title: 'Terraform Best Practices for Teams',
    summary: 'Strategies for structuring your Terraform projects to improve collaboration and maintainability.',
    category: 'DevOps',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABMAqRirI61bC5iiXTbq5lTHDETeMH7R5wSeRExjYogo2XQZh54ObjviCNQCBUhxYEW6qwzlvd5I-wRl5tCPMAJuGnFFxjoydN7mjjUdoYF0gce7sr0Ye0fq5bQq-mOX48U6dWXXxtOJz_hfb_6rs9XnT0arbMNgvS8llDNjlkeItPjBBCUzS3MrtysPAVvqHMfnWKY-eCXMs0ju3rTsUQqDJHUG_reFGqoU3U_NTACMBhch_jLWmVBbYk472F5FZWzGZO1T1QO69I'
  }
];

const categories = ['All', 'Python', 'AWS', 'DevOps'];

export const Articles: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All' 
    ? articlesData 
    : articlesData.filter(article => article.category === activeCategory);

  return (
    <SectionContainer id="articles">
      <h2 className="mb-10 px-4 text-3xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white sm:text-4xl">
        Articles
      </h2>
      
      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-3 px-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 hover:scale-105 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900 dark:bg-surface-dark dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 dark:border-transparent dark:bg-surface-dark"
            >
              <div 
                className="h-56 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${article.imageUrl}')` }}
              />
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                   <span className="rounded bg-primary/5 dark:bg-background-dark/80 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary border border-primary/20">
                     {article.category}
                   </span>
                </div>
                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {article.summary}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-bold text-primary transition-colors hover:text-primary/80"
                >
                  Read More <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
};