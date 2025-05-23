import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedElement from '../components/AnimatedElement';

const About: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Anos de Experiência' },
    { value: '50+', label: 'Projetos Entregues' },
    { value: '30+', label: 'Clientes Satisfeitos' },
    { value: '100%', label: 'Satisfação Garantida' },
  ];
  
  const values = [
    { 
      icon: Shield, 
      title: 'Qualidade', 
      description: 'Comprometimento com a excelência em cada linha de código e pixel de design.' 
    },
    { 
      icon: Clock, 
      title: 'Pontualidade', 
      description: 'Respeitamos prazos e mantemos comunicação clara durante todo o projeto.' 
    },
    { 
      icon: Users, 
      title: 'Colaboração', 
      description: 'Trabalhamos em parceria com nossos clientes para alcançar os melhores resultados.' 
    },
    { 
      icon: Award, 
      title: 'Inovação', 
      description: 'Buscamos constantemente novas tecnologias e metodologias para oferecer soluções modernas.' 
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <AnimatedElement>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="VOF Assessoria Equipe" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <motion.p 
                          className="text-2xl font-bold text-primary-500"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {stat.value}
                        </motion.p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <SectionHeading 
              title="Sobre a VOF Assessoria" 
              subtitle="Somos uma empresa especializada em desenvolvimento de soluções digitais, com foco em qualidade e inovação."
            />
            
            <AnimatedElement delay={0.2}>
              <p className="text-gray-600 mb-6">
                Fundada com a missão de fornecer soluções tecnológicas inteligentes, a VOF Assessoria atua no desenvolvimento de sistemas, sites e aplicativos que transformam a maneira como as empresas operam no ambiente digital.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa equipe é formada por profissionais altamente qualificados e apaixonados por tecnologia, sempre atualizados com as mais recentes tendências e melhores práticas do mercado.
              </p>
            </AnimatedElement>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {values.map((value, index) => (
                <AnimatedElement key={index} delay={0.3 + index * 0.1}>
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary-50 rounded-lg">
                      <value.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-500 mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;