import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    // Add a small delay to allow the menu to start closing before scrolling
    // This prevents layout shift conflicts on mobile browsers
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { label: 'Experience', id: 'experience' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Articles', id: 'articles' },
    { label: 'Certifications', id: 'certifications' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-center border-b px-4 py-3 transition-all duration-300 ${
        isScrolled
          ? 'border-gray-200 dark:border-white/10 bg-white/90 dark:bg-background-dark/95 backdrop-blur-md shadow-sm'
          : 'border-transparent bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="flex w-full max-w-[960px] items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
            <Hexagon size={28} strokeWidth={2.5} />
            <span className="absolute text-[10px] font-bold text-white">SR</span>
          </div>
          <h2 className="hidden text-lg font-bold leading-tight tracking-tight sm:block text-gray-900 dark:text-white">
            Sarathy Ranganathan
          </h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-600 dark:text-white/80 transition-colors hover:text-primary dark:hover:text-white hover:underline decoration-primary decoration-2 underline-offset-4"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-300 dark:bg-white/20"></div>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
            Contact
          </button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            className="text-gray-900 dark:text-white/80 hover:text-primary dark:hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full border-b border-gray-200 dark:border-white/10 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md md:hidden overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="block w-full py-2 text-left text-base font-medium text-gray-900 dark:text-white/80 hover:text-primary dark:hover:text-white active:bg-gray-100 dark:active:bg-white/5 rounded-md px-2"
                >
                  {link.label}
                </a>
              ))}
              <button className="h-10 w-full rounded-lg bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20">
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};