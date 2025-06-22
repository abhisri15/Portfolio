import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Award } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "NXP Q2'25 Outstanding Collaboration and Teamwork Award",
      description: "Recognized for exceptional team contributions in cross-functional projects."
    },
    {
      title: "NXP Q3'24 Outstanding Collaboration Award",
      description: "Awarded for automation efforts saving 200+ engineering hours."
    },
    {
      title: "HackFest'23 ML Hackathon Top 3 Finalist",
      description: "Achieved top 3 position out of 100+ participating teams."
    },
    {
      title: "IEEE-Published Research",
      description: "Presented original research findings at the ESIC 2024 International Conference."
    }
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
          title="Achievements" 
          subtitle="Recognition and accolades earned throughout my academic and professional journey."
          centered
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex"
            >
              <div className="bg-accent-500 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 mr-4">
                <Award className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;