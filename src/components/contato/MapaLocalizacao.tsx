
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Componente MapaLocalizacao - Mapa interativo de Maués
 * 
 * Este componente exibe um mapa do Google Maps incorporado mostrando
 * a localização da cidade de Maués no estado do Amazonas.
 * 
 * Funcionalidades do mapa:
 * - Visualização interativa da localização de Maués
 * - Zoom e navegação habilitados
 * - Carregamento otimizado (lazy loading)
 * - Responsivo e adaptável a diferentes tamanhos de tela
 * - Configurações de segurança para iframe externo
 * 
 * Características técnicas:
 * - iframe do Google Maps com parâmetros específicos para Maués-AM
 * - Altura fixa de 320px (80 * 4 = h-80 em Tailwind)
 * - Bordas arredondadas e overflow hidden para design limpo
 * - Mensagem informativa adicional sobre visitas presenciais
 */
const MapaLocalizacao = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        {/* Título da seção com emoji de localização */}
        <CardTitle className="text-xl font-bold text-verde-escuro">
          📍 Onde estamos
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {/* Container do mapa com altura fixa e bordas arredondadas */}
        <div className="relative w-full h-80 rounded-lg overflow-hidden">
          {/* 
            Iframe do Google Maps configurado especificamente para Maués-AM
            
            Parâmetros da URL do Google Maps:
            - pb: dados codificados da localização
            - Coordenadas aproximadas de Maués: -3.3806999973239546, -57.72826268571426
            - zoom level, style e outras configurações do mapa
            
            TODO: Substitua pela URL real com as coordenadas exatas da Secretaria
          */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8966047396!2d-57.72826268571426!3d-3.3806999973239546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b9c8b4b4b4b%3A0x1234567890abcdef!2sMau%C3%A9s%2C%20AM!5e0!3m2!1spt!2sbr!4v1643723600000!5m2!1spt!2sbr"
            width="100%" // Ocupa toda a largura do container
            height="100%" // Ocupa toda a altura do container (320px)
            style={{ border: 0 }} // Remove borda padrão do iframe
            allowFullScreen // Permite modo tela cheia
            loading="lazy" // Carregamento otimizado - só carrega quando visível
            referrerPolicy="no-referrer-when-downgrade" // Política de referência para segurança
            title="Localização de Maués - AM" // Título para acessibilidade
          />
        </div>
        
        {/* Mensagem informativa adicional sobre visitas presenciais */}
        {/* Design similar a um alerta ou tip box */}
        <div className="mt-4 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
          <p className="text-sm text-green-800">
            <strong>💡 Visite-nos:</strong> Caso você esteja na cidade, também pode nos visitar pessoalmente. 
            Estamos localizados no centro de Maués.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapaLocalizacao;
