import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail,
  Code,
  Brain,
  Database,
  Cloud
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

  // Custom SVG icons for LeetCode and Kaggle
  const LeetCodeIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"/>
    </svg>
  );

  const KaggleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336"/>
    </svg>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
      {/* Left Content */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 bg-clip-text text-transparent">
              Abhikalp
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-8">
            I'm a{' '}
            <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent font-semibold">
              {titles[currentTitle]}
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            Passionate about building intelligent systems that solve real-world problems. 
            From agricultural tech to autonomous systems, I love turning complex challenges into elegant solutions.
          </p>
        </div>

        {/* Social Links - All 5 icons in a row */}
        <div className="flex space-x-3">
          <a
            href="https://github.com/abhisri15"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-accent-500 hover:text-white transition-colors duration-150"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhikalp-srivastava-00ab4122a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-accent-500 hover:text-white transition-colors duration-150"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:abhikalp15092003@gmail.com"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-accent-500 hover:text-white transition-colors duration-150"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/u/abhikalpsri/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-accent-500 hover:text-white transition-colors duration-150"
          >
            <LeetCodeIcon />
          </a>
          <a
            href="https://www.kaggle.com/abhikalpsrivastava15"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-accent-500 hover:text-white transition-colors duration-150"
          >
            <KaggleIcon />
          </a>
        </div>
      </div>

      {/* Right Content - Profile & Skills */}
      <div className="relative">
        <div className="relative">
          {/* Profile Image */}
          <div className="relative mx-auto w-80 h-80 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl p-1 shadow-xl">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={theme === 'dark' ? "/1.jpeg" : "/2.jpeg"}
                  alt="Abhikalp Srivastava"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.label}
                  className="relative"
                >
                  <div className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className={`w-8 h-8 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-2`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-xs text-gray-800 dark:text-gray-200 leading-tight">
                      {skill.label}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;