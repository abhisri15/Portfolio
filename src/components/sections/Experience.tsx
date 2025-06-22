import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ExperienceCard, { ExperienceProps } from '../ui/ExperienceCard';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences: ExperienceProps[] = [
    {
      company: 'NXP India',
      position: 'Technical Intern',
      duration: 'Jan 2025 - Jun 2025',
      location: 'Bangalore, India',
      responsibilities: [
        'Developed Python-based automation scripts for data processing and workflow optimization, improving task efficiency by over 30% through scripting and automation techniques.',
        'Collaborated with cross-functional teams to integrate proprietary systems with external APIs and third-party tools, improving scalability and data interoperability.',
        'Assisted in designing and delivering AI/ML training programs, enabling effective knowledge transfer across teams.'
      ]
    },
    {
      company: 'NXP India',
      position: 'Technical Intern',
      duration: 'May 2024 - Jul 2024',
      location: 'Bangalore, India',
      responsibilities: [
        'Engineered automated multi-label NLP classification system using Python, Scikit-Learn, and TF-IDF vectorization, achieving 78% accuracy with SVM classifier, resulting in a 60% reduction in manual processing time.',
        'Constructed text preprocessing pipelines and evaluated model performance across Logistic Regression, Random Forest, and SVM, packaging the optimal model as a Python module with 92% recall.'
      ]
    },
    {
      company: 'MyParticipants',
      position: 'Software Development Intern',
      duration: 'Dec 2023 - Feb 2024',
      location: 'Remote',
      responsibilities: [
        'Built a robust speech analytics platform using Whisper API and PyAnnote-Audio clustering, achieving 15% reduction in Word Error Rate (WER) and improving speaker diarization accuracy by 22% on 500+ hours of audio.',
        'Architected scalable GCP cloud infrastructure leveraging Cloud Storage and App Engine; implemented resource monitoring tools, effectively reducing cloud expenses by 35% while maintaining high availability.'
      ]
    }
  ];
  
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Professional Experience"
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16">
                {/* Timeline dot with bag icon */}
                <div className="absolute left-0 w-16 h-16 bg-white dark:bg-primary-500 rounded-full flex items-center justify-center border-2 border-accent-500 z-10">
                  <Briefcase className="h-6 w-6 text-accent-500" />
                </div>
                
                <div className="bg-white dark:bg-primary-500 rounded-lg p-6 shadow-md">
                  <div className="bg-accent-50 dark:bg-accent-900/30 rounded-xl shadow-lg border border-accent-200 dark:border-accent-800 p-6">
                    <ExperienceCard {...exp} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;