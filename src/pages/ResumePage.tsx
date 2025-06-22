import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Experience from '../components/sections/Experience';
import { Download, Briefcase } from 'lucide-react';
import { educationData } from '../data/educationData';
import SkillProgress from '../components/SkillProgress';

const ResumePage = () => {
  const skills = {
    'Programming Languages': [
      { name: 'Python', percentage: 100 },
      { name: 'C++', percentage: 100 },
      { name: 'C', percentage: 90 },
      { name: 'SQL', percentage: 85 },
    ],
    'Machine Learning & AI': [
      { name: 'PyTorch', percentage: 100 },
      { name: 'TensorFlow', percentage: 95 },
      { name: 'Scikit-Learn', percentage: 100 },
      { name: 'OpenCV', percentage: 90 },
      { name: 'NLP', percentage: 85 },
      { name: 'Computer Vision', percentage: 90 },
      { name: 'Deep Learning', percentage: 95 },
    ],
    'Web & API Development': [
      { name: 'Flask', percentage: 90 },
      { name: 'RESTful APIs', percentage: 85 },
      { name: 'Web Services', percentage: 80 },
    ],
    'Cloud & DevOps': [
      { name: 'GCP', percentage: 70 },
      { name: 'App Engine', percentage: 70 },
      { name: 'Cloud Storage', percentage: 75 },
      { name: 'Git', percentage: 70 },
      { name: 'Linux', percentage: 75 },
    ],
    'Computer Science Fundamentals': [
      { name: 'Operating Systems', percentage: 80 },
      { name: 'DBMS', percentage: 75 },
      { name: 'Networking', percentage: 70 },
    ],
  };

  return (
    <div className="pt-4 pb-6">
      {/* Resume Header */}
      <section className="bg-white dark:bg-gray-800 py-6">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-2">
                My Resume<span className="text-accent-500">.</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl text-sm">
                A compact overview of my professional experience, education, skills and achievements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 md:mt-0"
            >
              <a 
                href="/Abhikalp_Srivastava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-accent-500 text-primary-500 rounded-md font-medium hover:bg-accent-600 transition-colors text-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Personal Info */}
      <section className="py-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="bg-accent-50 dark:bg-accent-900/30 rounded-xl shadow-lg border border-accent-200 dark:border-accent-800 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold mb-2">Abhikalp Srivastava</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">Software Developer & ML Engineer</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Computer Science student with strong technical skills in AI/ML, data, and automation.
                </p>
              </div>
              
              <div className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                <p><span className="font-medium">Email:</span> abhikalp15092003@gmail.com</p>
                <p><span className="font-medium">Phone:</span> +91 9483855063</p>
                <p><span className="font-medium">Location:</span> Bangalore, India</p>
                <p>
                  <span className="font-medium">LinkedIn:</span> 
                  <a 
                    href="https://www.linkedin.com/in/abhikalp-srivastava-00ab4122a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-accent-500 hover:underline"
                  >
                    linkedin.com/in/abhikalp-srivastava-00ab4122a
                  </a>
                </p>
                <p>
                  <span className="font-medium">LeetCode:</span>
                  <a
                    href="https://leetcode.com/u/abhikalpsri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-accent-500 hover:underline"
                  >
                    leetcode.com/u/abhikalpsri
                  </a>
                </p>
                <p>
                  <span className="font-medium">Kaggle:</span>
                  <a
                    href="https://www.kaggle.com/abhikalpsrivastava15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-accent-500 hover:underline"
                  >
                    kaggle.com/abhikalpsrivastava15
                  </a>
                </p>
                <p>
                  <span className="font-medium">Resume:</span>
                  <a
                    href="https://drive.google.com/file/d/1fMzc-2nRgIr2Aqlw3ZVnuvgpKZ1TIGJd/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-accent-500 hover:underline"
                  >
                    View Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education */}
      <section className="py-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <SectionHeading 
            title="Education" 
          />
          
          <div className="space-y-4">
            {educationData.map((education, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-accent-50 dark:bg-accent-900/30 p-4 rounded-xl shadow-lg border border-accent-200 dark:border-accent-800"
              >
                <h3 className="text-lg font-bold mb-1">{education.institution}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm">{education.degree}</p>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 mb-2 text-xs">
                  <span>{education.date}</span>
                  <span className="hidden sm:block mx-2">•</span>
                  <span>{education.location}</span>
                  {education.gpa && (
                    <>
                      <span className="hidden sm:block mx-2">•</span>
                      <span>CGPA: {education.gpa}</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience */}
      <Experience />
      
      {/* Skills */}
      <section className="py-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <SectionHeading 
            title="Technical Skills" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-accent-50 dark:bg-accent-900/30 rounded-xl shadow-lg border border-accent-200 dark:border-accent-800 p-4 flex flex-col items-center">
                <h3 className="text-base font-semibold text-accent-500 mb-1 text-center">{category}</h3>
                <div className="w-full space-y-1">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between w-full">
                      <span className="text-xs text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                      <div className="w-36 ml-2">
                        <SkillProgress percentage={skill.percentage} size={24} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <SectionHeading 
            title="Achievements" 
          />
          
          <ul className="space-y-2 list-disc pl-5 text-sm">
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">NXP Q2'25 Outstanding Collaboration and Teamwork Award</span> for exceptional team contributions.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">NXP Q3'24 Outstanding Collaboration Award</span> for automation efforts saving 200+ engineering hours.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Top 3 Finalist position at HackFest'23 ML Hackathon</span> out of 100+ participating teams.
            </li>
          </ul>
        </div>
      </section>
      
      {/* Profile Links */}
      <section className="py-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Profile Links" 
          />
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              LeetCode
            </a>
            <a 
              href="https://kaggle.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Kaggle
            </a>
            <a 
              href="https://opengenus.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              OpenGenus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;