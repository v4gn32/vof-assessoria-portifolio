import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <AnimatedElement delay={delay} className="h-full">
      <div className="card h-full p-6 flex flex-col">
        <div className="mb-5 p-3 bg-primary-50 rounded-lg w-fit">
          <Icon className="h-7 w-7 text-primary-500" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-primary-500">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4">
          <a 
            href="#contact" 
            className="inline-flex items-center text-secondary-400 font-medium hover:underline"
          >
            Saiba mais
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default ServiceCard;