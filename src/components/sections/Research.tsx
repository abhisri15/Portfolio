import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FileText, ExternalLink } from 'lucide-react';

interface ResearchProject {
  title: string;
  description: string;
  date: string;
  paperLink: string;
  technologies: string[];
  image: string;
}

const Research = () => {
  const researchProjects: ResearchProject[] = [
    {
      title: 'Secure Apple Leaf Disease Detection',
      description: 'Benchmarked 5 CNN architectures (VGG16/19, ResNet50/101, MobileNetV2), developing a hybrid model through late fusion of ResNet50 and MobileNetV2, achieving 92.48% accuracy, 3.2% improvement over baseline models. Enhanced preprocessing pipelines employing data augmentation techniques (flip, rotation, scaling) and normalization, improving model generalization on diverse agricultural datasets (5864 images across 13 classes).',
      date: 'February 2024',
      paperLink: 'https://example.com/paper',
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg'
    }
  ];
  
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Research Projects" 
          subtitle="Academic research initiatives and published papers."
        />
        
        <div className="grid grid-cols-1 gap-8">
          {researchProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-accent-50 dark:bg-accent-900/30 rounded-xl overflow-hidden shadow-lg border border-accent-200 dark:border-accent-800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="bg-accent-500 p-3 rounded-full mr-4">
                      <FileText className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{project.date}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={project.paperLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-accent-500 hover:text-accent-600 transition-colors"
                  >
                    View Paper <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
                
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;