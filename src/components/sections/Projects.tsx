import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard, { ProjectProps } from '../ui/ProjectCard';

interface ProjectsProps {
  title: string;
  subtitle?: string;
  projects: ProjectProps[];
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ 
  title, 
  subtitle, 
  projects,
  limit
}) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={title} 
          subtitle={subtitle}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;