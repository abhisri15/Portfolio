import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Brain, Database, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titles = [
    "ML Engineer",
    "Software Developer",
    "Data Scientist"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-0 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2 mt-[-32px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              <span className="text-accent-500">Hello,</span> I'm<br />
              Abhikalp Srivastava
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              I'm a <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-accent-500"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>
            
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
              I'm a Software Developer & ML Engineer passionate about building intelligent systems 
              that solve real-world problems. From agricultural tech to autonomous systems, 
              I love turning complex challenges into elegant solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* Removed 'View My Work' button as per request */}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="aspect-square w-[27rem] max-w-full bg-gradient-to-br from-accent-500 to-primary-500 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 border-2 border-accent-400">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full mb-4">
                  <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md flex flex-col items-center shadow-md">
                    <Brain className="h-8 w-8 text-white mb-1" />
                    <h3 className="text-white text-sm font-bold mb-0.5">ML/AI</h3>
                    <p className="text-white/90 text-xs text-center whitespace-normal leading-snug">Deep Learning, NLP, Computer Vision</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md flex flex-col items-center shadow-md">
                    <Code className="h-8 w-8 text-white mb-1" />
                    <h3 className="text-white text-sm font-bold mb-0.5">Development</h3>
                    <p className="text-white/90 text-xs text-center whitespace-normal leading-snug">Python, C++, Flask, REST, Scripting</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md flex flex-col items-center shadow-md">
                    <Database className="h-8 w-8 text-white mb-1" />
                    <h3 className="text-white text-sm font-bold mb-0.5">Data</h3>
                    <p className="text-white/90 text-xs text-center whitespace-normal leading-snug">SQL, Analytics, Preprocessing, Visualization, Pipelines</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md flex flex-col items-center shadow-md">
                    <Terminal className="h-8 w-8 text-white mb-1" />
                    <h3 className="text-white text-sm font-bold mb-0.5">Cloud & Tools</h3>
                    <p className="text-white/90 text-xs text-center whitespace-normal leading-snug">GCP, Git, Linux</p>
                  </div>
                </div>
                <div className="text-center mt-1">
                  <div className="text-white text-lg font-extrabold mb-0.5">3+ Years of Experience</div>
                  <div className="text-white/90 text-base">Building Intelligent Solutions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;