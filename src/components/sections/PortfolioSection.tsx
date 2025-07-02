import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

const PortfolioSection = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          My Portfolio
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my technical projects, research work, and creative solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="h-40 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed line-clamp-3">{project.description}</p>
              
              <div className="mb-3 flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-700 dark:text-accent-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex space-x-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-150"
                    aria-label="View source code on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-150"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {project.video && (
                  <a 
                    href={project.video} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-accent-500 hover:text-accent-600 transition-colors duration-150"
                  >
                    Demo
                  </a>
                )}
                {project.paper && (
                  <a 
                    href={project.paper} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-accent-500 hover:text-accent-600 transition-colors duration-150"
                  >
                    Paper
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;