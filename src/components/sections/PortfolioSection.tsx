import ProjectCard, { ProjectProps } from '../ui/ProjectCard';
import { projectsData } from '../../data/projectsData';

const PortfolioSection = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          My Portfolio
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of my technical projects, research work, and creative solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;