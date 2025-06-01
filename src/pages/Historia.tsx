
import React from 'react';
import { Leaf, Anchor, Church, Package } from 'lucide-react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import { Slider } from '../components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { cn } from '../lib/utils';

const Historia = () => {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />
      <AnnouncementBar />
      
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-verde-escuro font-bold mb-6">
            📖 História de Maués
          </h1>
          <div className="w-24 h-1 bg-vermelho-guarana mx-auto"></div>
        </div>
      </section>

      {/* Section 1: Introdução Histórica */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="font-serif text-lg leading-relaxed text-gray-800 space-y-6">
          <p>
            A história de Maués está intimamente ligada à natureza amazônica e ao guaraná, planta sagrada que se tornou símbolo da região. 
            Os índios Sateré-Mawé, habitantes originais desta terra, já cultivavam o guaraná muito antes da chegada dos colonizadores
            <span className="inline-flex items-center mx-1 text-verde-escuro"> <Leaf size={16} className="mr-1" /> </span>
            e foram eles que desenvolveram as primeiras técnicas de cultivo e processamento desta planta medicinal.
          </p>

          <p>
            Em 1669, os jesuítas estabeleceram a primeira missão na região
            <span className="inline-flex items-center mx-1 text-verde-escuro"> <Church size={16} className="mr-1" /> </span>
            denominada "Missão de Nossa Senhora da Conceição de Maués". O povoamento foi oficialmente elevado à categoria de Vila em 1798, 
            recebendo o nome de "Luséa". Somente em 1833 o nome foi alterado para "Maués", em homenagem à etnia indígena Maué que habitava a região.
          </p>

          <p>
            A economia de Maués se desenvolveu principalmente através das vias fluviais,
            <span className="inline-flex items-center mx-1 text-verde-escuro"> <Anchor size={16} className="mr-1" /> </span>
            com o Rio Maués-Açu servindo como principal rota de transporte e comércio. O ciclo da borracha também influenciou significativamente o 
            desenvolvimento da cidade, mas foi o guaraná que se firmou como o verdadeiro ouro vermelho da região, base econômica e cultural do município.
          </p>

          <p>
            Hoje, Maués é reconhecida mundialmente como a "Terra do Guaraná", responsável por grande parte da produção nacional desta planta. 
            <span className="inline-flex items-center mx-1 text-verde-escuro"> <Package size={16} className="mr-1" /> </span>
            O município também se destaca por suas belezas naturais, festividades tradicionais e pela hospitalidade de seu povo, que mantém vivas as 
            tradições e conhecimentos ancestrais relacionados à floresta amazônica.
          </p>
        </div>
      </section>

      {/* Section 2: Linha do Tempo */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-verde-escuro font-bold mb-12 text-center">
            A Linha do Tempo de Maués
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Section 3: Curiosidades e Fatos */}
      <section className="py-16 bg-off-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center text-vermelho-guarana">
            🌟 Curiosidades sobre Maués
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CuriosidadeCard 
              title="O Guaraná mais puro do mundo" 
              content="Maués produz o guaraná considerado o mais puro do mundo, cultivado pelos índios Sateré-Mawé seguindo técnicas ancestrais que preservam todas as propriedades da planta."
            />
            <CuriosidadeCard 
              title="Lar do maior festival de guaraná" 
              content="A Festa do Guaraná acontece anualmente em novembro e reúne milhares de visitantes para celebrar a colheita, com apresentações culturais, competições e degustação de produtos derivados do guaraná."
            />
            <CuriosidadeCard 
              title="Amazônia dos lagos" 
              content="A região de Maués é conhecida como a 'Amazônia dos Lagos', abrigando mais de 1.600 lagos de águas cristalinas que formam um ecossistema único, habitat de diversas espécies de peixes, inclusive o pirarucu."
            />
            <CuriosidadeCard 
              title="Mito da criação do guaraná" 
              content="Segundo a lenda Sateré-Mawé, o guaraná nasceu dos olhos de uma criança indígena morta injustamente. Seus olhos, plantados pela mãe, deram origem à planta do guaraná, cujos frutos lembram olhos humanos."
            />
          </div>
        </div>
      </section>

      {/* Section 4: Antes e Depois */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center text-verde-escuro">
            📸 Maués: Ontem e Hoje
          </h2>
          
          <div className="space-y-12">
            <AntesDepoisComparacao 
              imagemAntiga="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800" 
              imagemNova="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800" 
              legenda="Centro histórico de Maués - 1960 vs 2023"
            />
            
            <AntesDepoisComparacao 
              imagemAntiga="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800" 
              imagemNova="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800" 
              legenda="Plantação de Guaraná - Métodos tradicionais vs modernos"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Componente de card para curiosidades
const CuriosidadeCard = ({ title, content }) => (
  <Card className="bg-verde-claro bg-opacity-30 shadow hover:shadow-md transition-all duration-200 hover:translate-y-[-5px]">
    <CardHeader>
      <CardTitle className="text-xl text-verde-escuro">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700">{content}</p>
    </CardContent>
  </Card>
);

// Componente de comparação antes e depois
const AntesDepoisComparacao = ({ imagemAntiga, imagemNova, legenda }) => {
  const [sliderValue, setSliderValue] = React.useState(50);
  
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-[400px] w-full">
        {/* Imagem Antiga (esquerda) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imagemAntiga})` }}
        />
        
        {/* Imagem Nova (direita) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imagemNova})`,
            clipPath: `inset(0 0 0 ${sliderValue}%)`
          }}
        />
        
        {/* Divisor / Slider */}
        <div 
          className="absolute inset-y-0 w-1 bg-white"
          style={{ left: `${sliderValue}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-verde-escuro rounded-full flex items-center justify-center shadow-lg">
            <div className="flex items-center justify-center">
              <span className="text-white font-bold text-sm">{'<>'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Controle deslizante */}
      <div className="px-4 py-2">
        <Slider 
          value={[sliderValue]} 
          onValueChange={(values) => setSliderValue(values[0])}
          max={100}
          step={1}
          className="my-4"
        />
      </div>
      
      {/* Legenda */}
      <p className="text-sm text-gray-700 text-center pb-4">{legenda}</p>
    </div>
  );
};

export default Historia;
