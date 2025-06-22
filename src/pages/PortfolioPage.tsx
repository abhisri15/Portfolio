import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import { projectsData } from '../data/projectsData';

const PortfolioPage = () => {
  return (
    <div className="pt-1">
      {/* Projects Section */}
      <Projects 
        title="Technical Projects" 
        subtitle="A collection of software development and machine learning projects."
        projects={projectsData}
      />
      
      {/* Research Section */}
      <Research />
    </div>
  );
};

export default PortfolioPage;