import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        {title}
        <span className="text-accent-500">.</span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;