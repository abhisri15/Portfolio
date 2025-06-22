import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mt-20 py-8 bg-gradient-to-r from-white/80 to-white/60 dark:from-dark-100/80 dark:to-dark-200/60 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 text-gray-600 dark:text-gray-400 text-center md:text-left">
            <span>© {currentYear} Abhikalp Srivastava</span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-500" />
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            <a 
              href="mailto:abhikalp15092003@gmail.com" 
              className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors duration-300 flex items-center space-x-1"
            >
              <span>abhikalp15092003@gmail.com</span>
            </a>
            <span className="hidden md:block">•</span>
            <div className="flex items-center space-x-1">
              <Coffee className="w-4 h-4" />
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;