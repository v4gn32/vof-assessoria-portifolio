import React from 'react';
import AnimatedElement from './AnimatedElement';

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
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <AnimatedElement>
        <h2 className="section-title relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-secondary-400"></span>
        </h2>
      </AnimatedElement>
      
      {subtitle && (
        <AnimatedElement delay={0.2}>
          <p className="section-subtitle mt-6">{subtitle}</p>
        </AnimatedElement>
      )}
    </div>
  );
};

export default SectionHeading;