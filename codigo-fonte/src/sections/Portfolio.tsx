import React from 'react';
import SectionHeading from '../components/SectionHeading';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Responsivo',
      category: 'Desenvolvimento Web',
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Aplicativo de Delivery',
      category: 'Desenvolvimento Mobile',
      imageUrl: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Sistema de Gestão',
      category: 'Sistemas Personalizados',
      imageUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Portal Institucional',
      category: 'Desenvolvimento Web',
      imageUrl: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Dashboard Analítico',
      category: 'Sistemas Personalizados',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'App de Finanças',
      category: 'Desenvolvimento Mobile',
      imageUrl: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Nosso Portfólio" 
          subtitle="Confira alguns dos projetos que desenvolvemos para nossos clientes."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem 
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn btn-primary">
            Quero um projeto como esses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;