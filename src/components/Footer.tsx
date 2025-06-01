
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-off-white">
      <div className="max-w-5xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-verde-escuro font-bold text-xl mr-2">Maués-AM</span>
              <svg 
                className="w-5 h-5"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" 
                  fill="#006400"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              Maués, conhecida como a "Terra do Guaraná", é um município localizado no estado do Amazonas. 
              Rica em natureza, cultura e tradições, oferece aos visitantes uma experiência única na 
              Floresta Amazônica. Venha conhecer nossa cidade!
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-verde-escuro font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-vermelho-guarana transition-colors">Home</a></li>
              <li><a href="/historia" className="text-gray-600 hover:text-vermelho-guarana transition-colors">História</a></li>
              <li><a href="/pontos-turisticos" className="text-gray-600 hover:text-vermelho-guarana transition-colors">Pontos Turísticos</a></li>
              <li><a href="/passeios" className="text-gray-600 hover:text-vermelho-guarana transition-colors">Passeios</a></li>
              <li><a href="/hospedagem" className="text-gray-600 hover:text-vermelho-guarana transition-colors">Hospedagem</a></li>
              <li><a href="/eventos" className="text-gray-600 hover:text-vermelho-guarana transition-colors">Eventos</a></li>
              <li><a href="/contato" className="text-gray-600 hover:text-vermelho-guarana transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-verde-escuro font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <span className="font-medium">Endereço:</span><br />
                Prefeitura Municipal de Maués<br />
                Estrada do Guaraná, 1000<br />
                Maués, AM, 69190-000
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Telefone:</span><br />
                (92) 3345-6789
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Email:</span><br />
                turismo@maues.am.gov.br
              </li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-verde-escuro font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-verde-escuro hover:text-vermelho-guarana transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-verde-escuro hover:text-vermelho-guarana transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-verde-escuro hover:text-vermelho-guarana transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-verde-escuro font-bold mb-2">Horário de Atendimento:</h4>
              <p className="text-gray-600">
                Segunda a Sexta: 8h às 17h<br />
                Sábado: 9h às 12h
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>© 2025 Prefeitura de Maués-AM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
