import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun, FileText } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-primary-500/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-accent-500" />
            <span className="text-xl font-bold tracking-tight">Abhikalp</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `transition-colors duration-300 hover:text-accent-500 ${
                    isActive ? 'text-accent-500 font-medium' : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="ml-2 flex items-center">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1 px-3 py-2 rounded-full border-2 border-accent-500 bg-white/90 dark:bg-primary-700 shadow-md hover:bg-accent-100 dark:hover:bg-accent-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 z-50"
                aria-label="Toggle dark mode"
                style={{ minWidth: 80 }}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-accent-500" />
                ) : (
                  <Moon className="h-5 w-5 text-accent-500" />
                )}
                <span className="text-xs font-semibold text-accent-500 ml-1 select-none">
                  {theme === 'dark' ? 'Dark' : 'Light'}
                </span>
              </button>
            </div>
            <a
              href="/Abhikalp_Srivastava_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-accent-500 text-primary-500 font-medium hover:bg-accent-600 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 px-3 py-2 rounded-full border border-accent-500 bg-white/80 dark:bg-primary-700 shadow-sm hover:bg-accent-100 dark:hover:bg-accent-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-accent-500" />
              ) : (
                <Moon className="h-5 w-5 text-accent-500" />
              )}
              <span className="text-xs font-semibold text-accent-500 ml-1 select-none">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 py-4 bg-white dark:bg-primary-500 rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `px-4 py-2 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                      isActive ? 'text-accent-500 font-medium' : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="/Abhikalp_Srivastava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 px-4 py-2 rounded-md bg-accent-500 text-primary-500 font-medium hover:bg-accent-600 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;