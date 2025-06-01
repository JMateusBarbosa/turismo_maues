
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Instagram, Youtube } from 'lucide-react';

/**
 * Componente RedesSociais - Links para redes sociais oficiais
 * 
 * Este componente exibe os links para as redes sociais oficiais da
 * Secretaria de Turismo de Maués, permitindo que os visitantes
 * acompanhem novidades, eventos e dicas de turismo.
 * 
 * Redes sociais incluídas:
 * - Facebook: para eventos e interação com a comunidade
 * - Instagram: para fotos e stories dos pontos turísticos
 * - YouTube: para vídeos promocionais e documentários
 * 
 * Funcionalidades:
 * - Links externos que abrem em nova aba
 * - Hover effects com mudança de cor específica para cada rede
 * - Animações de escala para feedback visual
 * - Layout centralizado e responsivo
 */
const RedesSociais = () => {
  // Array com configurações de cada rede social
  // Facilita manutenção e adição de novas redes no futuro
  const redesSociais = [
    {
      nome: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/turismomaues', // Substitua pela URL real
      cor: 'hover:text-blue-600' // Cor oficial do Facebook
    },
    {
      nome: 'Instagram', 
      icon: Instagram,
      url: 'https://instagram.com/turismomaues', // Substitua pela URL real
      cor: 'hover:text-pink-600' // Cor próxima do Instagram
    },
    {
      nome: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@turismomaues', // Substitua pela URL real
      cor: 'hover:text-red-600' // Cor oficial do YouTube
    }
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        {/* Título da seção */}
        <CardTitle className="text-xl font-bold text-verde-escuro">
          📲 Redes Sociais Oficiais
        </CardTitle>
        {/* Subtítulo explicativo */}
        <p className="text-gray-600 text-sm">
          Acompanhe eventos, dicas e novidades sobre Maués também nas redes.
        </p>
      </CardHeader>
      
      <CardContent>
        {/* Container flexível centralizado com espaçamento entre ícones */}
        <div className="flex justify-center space-x-6">
          {/* Mapeia cada rede social criando um link interativo */}
          {redesSociais.map((rede) => (
            <a
              key={rede.nome} // Key única para otimização do React
              href={rede.url}
              target="_blank" // Abre em nova aba
              rel="noopener noreferrer" // Segurança para links externos
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 hover:scale-110 ${rede.cor} group`}
            >
              {/* Ícone da rede social com animação de escala no hover */}
              <rede.icon className="w-8 h-8 text-gray-600 group-hover:scale-110 transition-transform" />
              
              {/* Nome da rede social abaixo do ícone */}
              <span className="text-sm mt-2 text-gray-700 group-hover:font-medium">
                {rede.nome}
              </span>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RedesSociais;
