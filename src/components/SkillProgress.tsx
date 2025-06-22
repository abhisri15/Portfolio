import React from 'react';

interface SkillProgressProps {
  percentage: number;
  size?: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ percentage, size = 120 }) => {
  return (
    <div className="flex items-center w-full">
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden shadow-inner border border-gray-300 dark:border-gray-800">
        <div
          className="h-2 rounded-full transition-all duration-700 ease-in-out shadow-md"
          style={{ 
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, #2ED573 0%, #64FFDA 100%)',
            boxShadow: '0 2px 8px 0 rgba(46,213,115,0.15)'
          }}
        ></div>
      </div>
      <span className="ml-3 text-sm font-extrabold text-gray-800 dark:text-accent-200 drop-shadow" style={{ minWidth: 36 }}>{percentage}%</span>
    </div>
  );
};

export default SkillProgress; 