import React from 'react';
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award,
  Code,
  Calendar,
  MapPin,
  Building
} from 'lucide-react';
import { educationData } from '../../data/educationData';

const ResumeSection = () => {
  const experiences = [
    {
      company: 'NXP India',
      position: 'Technical Intern',
      duration: 'Jan 2025 - Present',
      location: 'Bangalore, India',
      type: 'Current',
      responsibilities: [
        'Developed Python-based automation scripts for data processing and workflow optimization, improving task efficiency by over 30%',
        'Collaborated with cross-functional teams to integrate proprietary systems with external APIs and third-party tools',
        'Assisted in designing and delivering AI/ML training programs, enabling effective knowledge transfer across teams'
      ]
    },
    {
      company: 'NXP India',
      position: 'Technical Intern',
      duration: 'May 2024 - Jul 2024',
      location: 'Bangalore, India',
      type: 'Past',
      responsibilities: [
        'Engineered automated multi-label NLP classification system using Python, Scikit-Learn, and TF-IDF vectorization, achieving 78% accuracy',
        'Constructed text preprocessing pipelines and evaluated model performance across multiple algorithms',
        'Packaged the optimal model as a Python module with 92% recall'
      ]
    },
    {
      company: 'MyParticipants',
      position: 'Software Development Intern',
      duration: 'Dec 2023 - Feb 2024',
      location: 'Remote',
      type: 'Past',
      responsibilities: [
        'Built a robust speech analytics platform using Whisper API and PyAnnote-Audio clustering',
        'Achieved 15% reduction in Word Error Rate (WER) and improved speaker diarization accuracy by 22%',
        'Architected scalable GCP cloud infrastructure, reducing cloud expenses by 35%'
      ]
    }
  ];

  const skills = {
    'Programming Languages': [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'C', level: 85 },
    ],
    'Machine Learning & AI': [
      { name: 'PyTorch', level: 80 },
      { name: 'TensorFlow', level: 90 },
      { name: 'NLP', level: 95 },
      { name: 'Scikit Learn', level: 90 },
      { name: 'Computer Vision', level: 85 },
      { name: 'MLOps', level: 40 },
    ],
    'Web & Cloud': [
      { name: 'Flask', level: 85 },
      { name: 'REST APIs', level: 80 },
      { name: 'GCP', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'Linux', level: 65 },
    ],
  };

  const achievements = [
    "NXP Q2'25 Outstanding Collaboration and Teamwork Award",
    "NXP Q3'24 Outstanding Collaboration Award for automation efforts",
    "Top 3 Finalist at HackFest'23 ML Hackathon (100+ teams)",
    "IEEE-Published Research at ESIC 2024 International Conference"
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          My Resume
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive overview of my professional journey, skills, and achievements.
        </p>
        <a
          href="https://drive.google.com/file/d/1fMzc-2nRgIr2Aqlw3ZVnuvgpKZ1TIGJd/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl font-medium shadow-lg"
        >
          <Download className="w-5 h-5" />
          <span>Download PDF Resume</span>
        </a>
      </div>

      {/* Education */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold flex items-center">
          <GraduationCap className="w-8 h-8 text-accent-500 mr-4" />
          Education
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="p-8 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border border-blue-200 dark:border-purple-700 shadow-sm"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{education.degree}</h4>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">{education.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{education.date}</span>
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{education.location}</span>
                    {education.gpa && <span className="font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">CGPA: {education.gpa}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold flex items-center">
          <Briefcase className="w-8 h-8 text-accent-500 mr-4" />
          Professional Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="p-8 bg-green-50 dark:bg-green-900/30 rounded-2xl border border-green-200 dark:border-emerald-700 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h4>
                      <p className="text-accent-600 dark:text-accent-400 font-medium text-lg">{exp.company}</p>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mt-2">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    exp.type === 'Current' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                  }`}>
                    {exp.type}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold flex items-center">
          <Code className="w-8 h-8 text-accent-500 mr-4" />
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div
              key={category}
              className="p-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl border border-indigo-200 dark:border-cyan-700 shadow-sm"
            >
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-6">{category}</h4>
              <div className="space-y-4">
                {skillList.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-accent-500 to-accent-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold flex items-center">
          <Award className="w-8 h-8 text-accent-500 mr-4" />
          Achievements & Recognition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-2xl border border-yellow-200 dark:border-yellow-700 shadow-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeSection;
