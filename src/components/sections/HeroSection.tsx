import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';

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
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
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

        {/* Social Links */}
        <div className="flex space-x-4">
          {[
            { icon: Github, href: "https://github.com/abhisri15", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhikalp-srivastava-00ab4122a/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:abhikalp15092003@gmail.com", label: "Email" },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-accent-500 hover:text-white transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Right Content - Profile & Skills */}
      <div className="relative">
        <div className="relative">
          {/* Profile Image */}
          <div className="relative mx-auto w-80 h-80 mb-8">
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
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.label}
                  className="relative group"
                >
                  <div className={`p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 transition-all duration-300`}>
                    <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 leading-tight">
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