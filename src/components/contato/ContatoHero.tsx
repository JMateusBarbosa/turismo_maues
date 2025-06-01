
import React from 'react';

/**
 * Componente ContatoHero - Seção de destaque da página de contato
 * 
 * Este componente renderiza o cabeçalho principal da página de contato,
 * incluindo título chamativo e descrição explicativa sobre como entrar
 * em contato com a equipe de turismo.
 * 
 * Características visuais:
 * - Texto em branco com sombra para contraste
 * - Container semi-transparente com blur para legibilidade
 * - Design responsivo com tamanhos diferentes para mobile/desktop
 * - Emoji para tornar mais amigável e atrativo
 */
const ContatoHero = () => {
  return (
    <div className="text-center mb-12">
      {/* Título principal com emoji e tipografia responsiva */}
      {/* Mobile: text-4xl | Desktop: text-5xl */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
        📞 Entre em Contato Conosco
      </h1>
      
      {/* Container com fundo semi-transparente para melhor legibilidade */}
      {/* Usa backdrop-blur para efeito de vidro fosco moderno */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
        {/* Descrição explicativa sobre o propósito da página */}
        {/* Responsive: text-xl em mobile, text-2xl em desktop */}
        <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-md">
          Ficou com alguma dúvida, sugestão ou quer conversar com a equipe de Turismo de Maués? 
          Preencha o formulário abaixo ou use os contatos disponíveis. Teremos prazer em te atender!
        </p>
      </div>
    </div>
  );
};

export default ContatoHero;
