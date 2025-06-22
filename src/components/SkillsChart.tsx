import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', percentage: 100, category: 'Programming Languages' },
  { name: 'C++', percentage: 100, category: 'Programming Languages' },
  { name: 'C', percentage: 90, category: 'Programming Languages' },
  { name: 'SQL', percentage: 85, category: 'Programming Languages' },
  
  // Machine Learning & AI
  { name: 'PyTorch', percentage: 100, category: 'Machine Learning & AI' },
  { name: 'TensorFlow', percentage: 95, category: 'Machine Learning & AI' },
  { name: 'Scikit-Learn', percentage: 100, category: 'Machine Learning & AI' },
  { name: 'OpenCV', percentage: 90, category: 'Machine Learning & AI' },
  { name: 'NLP', percentage: 85, category: 'Machine Learning & AI' },
  { name: 'Computer Vision', percentage: 90, category: 'Machine Learning & AI' },
  { name: 'Deep Learning', percentage: 95, category: 'Machine Learning & AI' },
  
  // Web & API Development
  { name: 'Flask', percentage: 90, category: 'Web & API Development' },
  { name: 'RESTful APIs', percentage: 85, category: 'Web & API Development' },
  { name: 'Web Services', percentage: 80, category: 'Web & API Development' },
  
  // Cloud & DevOps
  { name: 'GCP', percentage: 70, category: 'Cloud & DevOps' },
  { name: 'App Engine', percentage: 70, category: 'Cloud & DevOps' },
  { name: 'Cloud Storage', percentage: 75, category: 'Cloud & DevOps' },
  { name: 'Git', percentage: 70, category: 'Cloud & DevOps' },
  { name: 'Linux', percentage: 75, category: 'Cloud & DevOps' },
  
  // Computer Science Fundamentals
  { name: 'Operating Systems', percentage: 80, category: 'Computer Science Fundamentals' },
  { name: 'DBMS', percentage: 75, category: 'Computer Science Fundamentals' },
  { name: 'Networking', percentage: 70, category: 'Computer Science Fundamentals' },
];

const SkillsChart: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="container mx-auto px-4 py-8">
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-32 h-32 mb-4">
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        pathColor: `rgba(62, 152, 199, ${skill.percentage / 100})`,
                        textColor: '#2c3e50',
                        trailColor: '#d6d6d6',
                      })}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsChart; 