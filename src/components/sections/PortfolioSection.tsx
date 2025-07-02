import React, { useMemo } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Static data for instant loading - no imports
const projects = [
  {
    title: 'CropStop (AgroTech Platform)',
    description: '🌾 Smart AgroTech platform using ML for crop price prediction, disease detection (CNN), and crop recommendations based on soil & weather data.',
    image: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: 'https://github.com/abhisri15/CropStop',
    demo: 'https://example.com',
    video: 'https://drive.google.com/file/d/1Q3CF1kXaNLk1Q0Il5qsizlCl-fk7CLFW/view'
  },
  {
    title: 'AI Self-Driving Car',
    description: 'Dive into the realm of deep Q-learning, neural network architectures, and experience replay as our AI-infused car cruises through custom-designed maps.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    technologies: ['Python', 'PyTorch', 'Deep Q-Learning', 'Neural Networks'],
    github: 'https://github.com/abhisri15/AI-Self-Driving-Car',
    demo: 'https://example.com'
  },
  {
    title: 'Secure Apple Leaf Disease Detection',
    description: 'Developed an advanced apple leaf disease classification pipeline by fusing ResNet50 and MobileNetV2, achieving high accuracy of 92.48%.',
    image: 'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    paper: 'https://ieeexplore.ieee.org/document/10481567'
  },
  {
    title: 'mediBOX',
    description: '🏥 mediBOX: A virtual hospital platform with ML-based disease prediction, medicine reminders, health updates & nearby hospital locator.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg',
    technologies: ['Python', 'Flask', 'Machine Learning', 'Healthcare'],
    github: 'https://github.com/abhisri15/mediBOX__healthcare_website'
  },
  {
    title: 'Book Recommender System',
    description: '📚 Personalized book recommendation system using collaborative filtering and popularity-based methods. Built with Python, Streamlit & Flask.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    technologies: ['Python', 'Streamlit', 'Flask', 'ML'],
    github: 'https://github.com/abhisri15/Book-Recommender-System'
  },
  {
    title: 'Friend Store',
    description: 'Friend Store is a web app built with Flask and React, allowing users to manage friends with full CRUD functionality.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    technologies: ['Flask', 'React', 'SQLite', 'CRUD'],
    github: 'https://github.com/abhisri15/Friend-Store-using-Flask'
  }
];

const PortfolioSection = () => {
  // Memoize the projects to prevent re-renders
  const memoizedProjects = useMemo(() => projects, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          My Portfolio
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          A showcase of my technical projects and creative solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {memoizedProjects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-100">
            <div className="h-32 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-3">
              <h3 className="text-base font-bold mb-1 leading-tight">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-xs leading-relaxed line-clamp-2">{project.description}</p>
              
              <div className="mb-2 flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-0.5 bg-accent-100 dark:bg-accent-900/30 rounded text-accent-700 dark:text-accent-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex space-x-2 text-xs">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-500 transition-colors duration-100"
                  >
                    <Github className="h-3 w-3" />
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent-500 transition-colors duration-100"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {project.video && (
                  <a 
                    href={project.video} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-500 hover:text-accent-600 transition-colors duration-100"
                  >
                    Demo
                  </a>
                )}
                {project.paper && (
                  <a 
                    href={project.paper} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-500 hover:text-accent-600 transition-colors duration-100"
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