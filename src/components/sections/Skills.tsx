import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: ['Python', 'C++', 'C', 'SQL'],
    },
    {
      name: 'Machine Learning & AI',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'NLP', 'Computer Vision', 'Deep Learning'],
    },
    {
      name: 'Web & API Development',
      skills: ['Flask', 'RESTful APIs', 'Web Services'],
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Google Cloud Platform (GCP)', 'App Engine', 'Cloud Storage', 'Git', 'Linux'],
    },
    {
      name: 'Computer Science Fundamentals',
      skills: ['Operating Systems', 'DBMS', 'Networking'],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise and proficiencies." 
          centered
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-500 dark:text-accent-500">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;