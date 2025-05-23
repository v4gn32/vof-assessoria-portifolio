import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`font-medium transition-colors duration-300 hover:text-secondary-400 ${
                      isScrolled ? 'text-primary-500' : 'text-primary-500'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-primary-500" /> : <Moon className="h-5 w-5 text-primary-500" />}
            </button>
            <a 
              href="https://wa.me/5511974602336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Fale Conosco
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-primary-500" /> : <Moon className="h-5 w-5 text-primary-500" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-primary-500 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute w-full">
          <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={toggleMenu}
                  className="block py-3 px-4 text-primary-500 font-medium hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a 
                href="https://wa.me/5511974602336" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-3 px-4 bg-primary-500 text-white font-medium rounded-lg text-center"
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;