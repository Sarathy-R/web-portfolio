import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Expertise } from './components/Expertise';
import { Articles } from './components/Articles';
import { Certifications } from './components/Certifications';
import { BackToTop } from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main className="flex flex-1 justify-center py-12 sm:py-24 px-6">
        <div className="flex w-full max-w-[960px] flex-col gap-32 pb-32">
          <Hero />
          <Experience />
          <Expertise />
          <Articles />
          <Certifications />
        </div>
      </main>
      <BackToTop />
    </div>
  );
};

export default App;