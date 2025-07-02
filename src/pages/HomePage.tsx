import React, { useState, useCallback } from 'react';
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

  // Memoize section change handler
  const handleSectionChange = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

  // Memoize theme toggle
  const handleThemeToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

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
        <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
          
          {/* Header with Navigation */}
          <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between p-3">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-md flex items-center justify-center shadow-sm">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-base font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Abhikalp Srivastava
                  </h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Software Developer & ML Engineer</p>
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={handleThemeToggle}
                className="relative p-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-accent-600" />
                ) : (
                  <Moon className="w-4 h-4 text-accent-600" />
                )}
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-3 pb-3">
              <div className="flex flex-wrap gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSectionChange(item.id)}
                      className={`relative flex items-center space-x-1 px-2 py-1.5 rounded-md font-medium transition-colors duration-100 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-sm'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </header>

          {/* Content Area */}
          <main className="relative min-h-[400px]">
            <div className="p-3 md:p-4">
              {renderSection()}
            </div>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;