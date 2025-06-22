import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  video?: string;
  paper?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  github,
  demo,
  video,
  paper,
}) => {
  return (
    <div
      className="bg-accent-50 dark:bg-accent-900/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-accent-200 dark:border-accent-800"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
              aria-label="View source code on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {video && (
            <a 
              href={video} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-accent-500 hover:text-accent-600 transition-colors"
            >
              Watch Demo
            </a>
          )}
          {paper && (
            <a 
              href={paper} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-accent-500 hover:text-accent-600 transition-colors"
            >
              Read Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;