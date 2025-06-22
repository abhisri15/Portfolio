import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export interface ExperienceProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  company,
  position,
  duration,
  location,
  responsibilities,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 md:gap-6"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="bg-accent-500 w-10 h-10 rounded-full flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-primary-500" />
        </div>
      </div>
      
      <div className="pb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-1">{position}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-medium">{company}</span>
            <span className="hidden sm:block mx-2">•</span>
            <span>{location}</span>
            <span className="hidden sm:block mx-2">•</span>
            <span>{duration}</span>
          </div>
          
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex">
                <span className="mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;