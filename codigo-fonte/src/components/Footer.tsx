import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                <svg className="absolute inset-0 h-10 w-10 p-1 text-secondary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">VOF</span>
                <span className="block text-sm font-semibold text-white">ASSESSORIA</span>
              </div>
            </div>
            <p className="mb-4 text-gray-200">
              Soluções inteligentes para decisões seguras. Desenvolvimento de sistemas, sites e aplicativos.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-200 hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-200 hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Informações de Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-secondary-400" />
                <a href="tel:+5511974602336" className="text-gray-200 hover:text-white transition-colors">
                  (11) 97460-2336
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-secondary-400" />
                <a href="mailto:contato@vofassessoria.com.br" className="text-gray-200 hover:text-white transition-colors">
                  contato@vofassessoria.com.br
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-secondary-400" />
                <span className="text-gray-200">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1By8d2ph94/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/v4gn32/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vagner-florencio-85679860/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://github.com/v4gn32" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
            <div className="mt-6">
              <a 
                href="https://wa.me/5511974602336" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-secondary-400 hover:bg-secondary-500 text-white w-full flex justify-center items-center"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.7 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} VOF Assessoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;