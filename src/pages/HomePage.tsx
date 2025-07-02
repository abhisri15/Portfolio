import React, { useState } from 'react';
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Sun, 
  Moon,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ResumeSection from '../components/sections/ResumeSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import ErrorBoundary from '../components/utils/ErrorBoundary';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'resume':
        return <ResumeSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="relative">
        {/* Main Container */}
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          
          {/* Header with Navigation */}
          <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between p-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center shadow-md">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Abhikalp Srivastava
                  </h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Software Developer & ML Engineer</p>
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-150"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-accent-600" />
                ) : (
                  <Moon className="w-4 h-4 text-accent-600" />
                )}
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-4 pb-4">
              <div className="flex flex-wrap gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-colors duration-150 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </header>

          {/* Content Area */}
          <main className="relative min-h-[500px]">
            <div className="p-4 md:p-6">
              {renderSection()}
            </div>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;