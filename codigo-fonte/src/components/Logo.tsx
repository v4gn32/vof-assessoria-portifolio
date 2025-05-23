import React from 'react';
import { Check } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center">
      <div className="relative h-10 w-10 mr-2">
        <div className="absolute inset-0 rounded-full border-4 border-primary-500"></div>
        <Check className="absolute inset-0 h-10 w-10 p-1 text-secondary-400" />
      </div>
      <div>
        <span className="text-2xl font-bold text-primary-500">VOF</span>
        <span className="block text-sm font-semibold text-primary-500">ASSESSORIA</span>
      </div>
    </a>
  );
};

export default Logo;