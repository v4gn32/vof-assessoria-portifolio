import React from 'react';
import { Monitor, Smartphone, Code, Server, Globe, BarChart3 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento de Sites',
      description: 'Criamos sites modernos, responsivos e otimizados para SEO, garantindo presença online eficiente para seu negócio.',
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android que proporcionam experiências excepcionais aos usuários.',
    },
    {
      icon: Server,
      title: 'Sistemas Personalizados',
      description: 'Soluções sob medida para automatizar processos, gerenciar dados e otimizar a operação do seu negócio.',
    },
    {
      icon: Code,
      title: 'Desenvolvimento Front-end',
      description: 'Interfaces modernas e atraentes que garantem experiência de usuário excepcional e conversões efetivas.',
    },
    {
      icon: BarChart3,
      title: 'Consultoria em TI',
      description: 'Orientação especializada para implementar as melhores soluções tecnológicas para o seu negócio.',
    },
    {
      icon: Monitor,
      title: 'UX/UI Design',
      description: 'Design de interfaces intuitivas e visualmente atraentes, focadas na experiência do usuário e na conversão.',
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Nossos Serviços" 
          subtitle="Oferecemos soluções completas em desenvolvimento de software para impulsionar seu negócio no ambiente digital."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;