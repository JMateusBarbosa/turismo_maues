
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContatoHero from '../components/contato/ContatoHero';
import ContatoForm from '../components/contato/ContatoForm';
import ContatoInfo from '../components/contato/ContatoInfo';
import RedesSociais from '../components/contato/RedesSociais';
import MapaLocalizacao from '../components/contato/MapaLocalizacao';

/**
 * Página de Contato - Componente principal da página
 * 
 * Esta página permite aos visitantes entrarem em contato com a Secretaria
 * Municipal de Turismo e Cultura de Maués através de diferentes meios:
 * - Formulário de contato online
 * - Informações de contato direto (telefone, email, WhatsApp)
 * - Links para redes sociais oficiais
 * - Mapa de localização da cidade
 * 
 * Estrutura da página:
 * 1. Hero section com título e descrição
 * 2. Grid com formulário e informações de contato
 * 3. Seção de redes sociais
 * 4. Mapa de localização
 * 5. Mensagem motivacional final
 */
const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      {/* Header fixo presente em todas as páginas */}
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Seção de destaque com gradiente verde */}
        <section className="bg-gradient-to-br from-verde-claro to-verde-escuro text-white py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            {/* Componente do hero com título e descrição principal */}
            <ContatoHero />
          </div>
        </section>

        {/* Conteúdo Principal - Todas as seções de contato */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            
            {/* Grid Responsivo - Formulário e Informações de Contato lado a lado */}
            {/* Em telas grandes: 2 colunas | Em telas pequenas: 1 coluna empilhada */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Coluna esquerda: Formulário de contato interativo */}
              <ContatoForm />
              
              {/* Coluna direita: Informações de contato da Secretaria */}
              <ContatoInfo />
            </div>

            {/* Seção de Redes Sociais - Links para Facebook, Instagram e YouTube */}
            <div className="mb-12">
              <RedesSociais />
            </div>

            {/* Seção do Mapa - Localização de Maués no Google Maps */}
            <div className="mb-8">
              <MapaLocalizacao />
            </div>

            {/* Mensagem de Incentivo Final - Call-to-action motivacional */}
            {/* Gradiente vermelho-laranja para destacar a mensagem */}
            <div className="bg-gradient-to-r from-vermelho-guarana to-orange-500 text-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">
                🌟 Ajude a tornar Maués ainda melhor para os turistas!
              </h3>
              <p className="text-lg">
                Sua sugestão é bem-vinda e nos ajuda a melhorar constantemente o atendimento e os serviços turísticos.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer padrão presente em todas as páginas */}
      <Footer />
    </div>
  );
};

export default Contato;
