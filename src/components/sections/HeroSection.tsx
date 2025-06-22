import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  Code,
  Brain,
  Database,
  Cloud,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const { theme } = useTheme();
  const titles = [
    "ML Engineer",
    "Software Developer", 
    "Data Scientist",
    "AI Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: Brain, label: "Machine Learning", color: "from-purple-500 to-pink-500" },
    { icon: Code, label: "Software Development", color: "from-blue-500 to-cyan-500" },
    { icon: Database, label: "Data Science", color: "from-green-500 to-emerald-500" },
    { icon: Cloud, label: "Cloud Computing", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 bg-clip-text text-transparent">
              Abhikalp
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-8"
          >
            I'm a{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent font-semibold"
              >
                {titles[currentTitle]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
          >
            Passionate about building intelligent systems that solve real-world problems. 
            From agricultural tech to autonomous systems, I love turning complex challenges into elegant solutions.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <button className="group relative px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl font-medium shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-300 flex items-center space-x-2">
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="https://drive.google.com/file/d/1fMzc-2nRgIr2Aqlw3ZVnuvgpKZ1TIGJd/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex space-x-4"
        >
          {[
            { icon: Github, href: "https://github.com/abhisri15", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhikalp-srivastava-00ab4122a/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:abhikalp15092003@gmail.com", label: "Email" },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-accent-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Right Content - Profile & Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="relative">
          {/* Profile Image */}
          <motion.div
            className="relative mx-auto w-80 h-80 mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl p-1 shadow-2xl">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={theme === 'dark' ? "/1.jpeg" : "/2.jpeg"}
                  alt="Abhikalp Srivastava"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  onMouseOver={e => (e.currentTarget.src = theme === 'dark' ? '/2.jpeg' : '/1.jpeg')}
                  onMouseOut={e => (e.currentTarget.src = theme === 'dark' ? '/1.jpeg' : '/2.jpeg')}
                />
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 transition-all duration-300">
                    <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 leading-tight">
                      {skill.label}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;