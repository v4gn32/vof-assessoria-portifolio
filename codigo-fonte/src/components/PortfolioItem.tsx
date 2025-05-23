import React from 'react';
import AnimatedElement from './AnimatedElement';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  delay?: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  title, 
  category, 
  imageUrl,
  delay = 0 
}) => {
  return (
    <AnimatedElement delay={delay} className="h-full">
      <div className="card group h-full overflow-hidden">
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-white/80">{category}</p>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default PortfolioItem;