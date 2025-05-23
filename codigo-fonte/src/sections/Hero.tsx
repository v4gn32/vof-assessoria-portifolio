import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-50 rounded-full blur-3xl opacity-70 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary-50 rounded-full blur-3xl opacity-70 transform translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-400/10 text-secondary-400 font-medium mb-6">
              Desenvolvimento de Alta Qualidade
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Soluções Digitais</span> para Impulsionar seu Negócio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Desenvolvimento de sistemas, sites e aplicativos modernos e eficientes para transformar suas ideias em realidade digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Solicite um Orçamento
              </a>
              <a href="#services" className="btn btn-outline">
                Conheça Nossos Serviços
              </a>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Profissional de Desenvolvimento" 
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-secondary-400"></div>
                    <p className="font-medium text-primary-500">Desenvolvimento Web</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4.5,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-primary-500"></div>
                    <p className="font-medium text-primary-500">Aplicativos Mobile</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Background Grid/Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
              <div className="w-full h-full bg-gradient-to-br from-primary-500/5 to-secondary-400/5 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <p className="text-primary-500 mb-2 text-sm">Scroll para explorar</p>
        <ChevronDown className="h-6 w-6 text-primary-500" />
      </motion.div>
    </section>
  );
};

export default Hero;