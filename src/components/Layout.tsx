import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full bg-pink-300 py-4 z-50"  // Barra fixa com fundo rosa
      style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}     // Sombra suave na barra
    >
      <div className="container mx-auto flex justify-center items-center px-4">
        {/* Links de navegação e ícones centralizados */}
        <div className="flex items-center space-x-8">
          <a href="#about" className="text-white text-lg font-bold hover:text-light-pink" 
             style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' }}>
            Sobre
          </a>
          <a href="#services" className="text-white text-lg font-bold hover:text-light-pink" 
             style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' }}>
            Serviços
          </a>
          <a href="#contacts" className="text-white text-lg font-bold hover:text-light-pink" 
             style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' }}>
            Contatos
          </a>
          {/* Ícones de Redes Sociais */}
          <a href="https://www.linkedin.com/" className="text-white text-2xl hover:text-light-pink">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/" className="text-white text-2xl hover:text-light-pink">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
