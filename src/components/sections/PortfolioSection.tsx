import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Database, 
  Globe, 
  FileText,
  ExternalLink,
  Github,
  Play,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { ProjectProps } from '../ui/ProjectCard';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'ml', label: 'ML Projects', icon: Brain },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'data', label: 'Data Science', icon: Database },
    { id: 'research', label: 'Research', icon: FileText },
  ];

  // New filter logic: allow projects to appear in multiple categories
  const matchesFilter = (project: ProjectProps, filter: string) => {
    if (filter === 'all') return true;
    if (filter === 'ml') {
      return project.technologies.some(tech =>
        /ml|machine learning|pytorch|tensorflow|cnn|nlp|deep learning|gan|recommendation/i.test(tech)
      );
    }
    if (filter === 'data') {
      return project.technologies.some(tech =>
        /data|data science|analytics|clustering/i.test(tech)
      );
    }
    if (filter === 'web') {
      return project.technologies.some(tech =>
        /flask|web|api|react/i.test(tech)
      );
    }
    if (filter === 'research') {
      return project.technologies.some(tech =>
        /research/i.test(tech)
      ) || project.paper || /research|paper/i.test(project.title);
    }
    return false;
  };

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => matchesFilter(project, activeFilter));

  const ProjectCard: React.FC<{ project: ProjectProps }> = React.memo(({ project }) => (
    <motion.div
      key={`${activeFilter}-${project.title}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: project.title.length * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <Play className="w-5 h-5" />
              </a>
            )}
            {project.paper && (
              <a
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <FileText className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-gradient-to-r from-accent-500/10 to-accent-600/10 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium border border-accent-500/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  ));

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          My Portfolio
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of my technical projects, research work, and creative solutions.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {filters.map((filter, index) => {
          const Icon = filter.icon;
          return (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/50 border border-gray-200/50 dark:border-gray-700/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Icon className="w-4 h-4" />
              <span>{filter.label}</span>
              {activeFilter === filter.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl"
                  layoutId="activeFilter"
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${activeFilter}-${index}`} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            Try selecting a different category to see more projects.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioSection;