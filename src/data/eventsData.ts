export interface Event {
  id: string;
  name: string;
  date: string;
  month: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  category: string;
  program: string[];
  tips: string;
  isToday?: boolean;
  isFree?: boolean;
}

export const eventsData: Event[] = [
  {
    id: "carnaval-maues",
    name: "Carnaval de Maués",
    date: "10 a 13 de Fevereiro",
    month: "Fevereiro",
    location: "Centro da Cidade",
    shortDescription: "Quatro dias de muita música, dança e alegria com blocos tradicionais e apresentações especiais.",
    fullDescription: "O Carnaval de Maués é uma das festas mais animadas da região amazônica. Durante quatro dias, a cidade se transforma em um grande palco de alegria com blocos tradicionais, trios elétricos e apresentações de grupos folclóricos locais.",
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    ],
    category: "Cultural",
    program: [
      "10/02 - Abertura com Bloco das Crianças",
      "11/02 - Desfile dos Blocos Tradicionais",
      "12/02 - Noite dos Trios Elétricos",
      "13/02 - Grande Desfile Final"
    ],
    tips: "Use roupas confortáveis e leves. Leve protetor solar e mantenha-se hidratado.",
    isFree: true
  },
  {
    id: "festa-sao-sebastiao",
    name: "Festa de São Sebastião",
    date: "20 de Janeiro",
    month: "Janeiro",
    location: "Igreja São Sebastião",
    shortDescription: "Tradicional festa religiosa em honra ao padroeiro da cidade com procissão e celebrações.",
    fullDescription: "A Festa de São Sebastião é uma das mais importantes celebrações religiosas de Maués. A tradição centenária inclui novena, procissão pelas ruas da cidade e festa comunitária com comidas típicas.",
    images: [
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop"
    ],
    category: "Religioso",
    program: [
      "12/01 - Início da Novena",
      "20/01 - Missa Solene às 8h",
      "20/01 - Procissão às 16h",
      "20/01 - Festa Comunitária às 19h"
    ],
    tips: "Para a procissão, use roupas adequadas para o clima quente. Chegue cedo para participar da missa.",
    isFree: true
  },
  {
    id: "festival-guarana",
    name: "Festival do Guaraná",
    date: "15 a 25 de Maio",
    month: "Maio",
    location: "Centro da Cidade",
    shortDescription: "A maior festa de Maués celebra o fruto símbolo da cidade com shows, danças típicas e gastronomia local.",
    fullDescription: "O Festival do Guaraná é o evento mais aguardado do ano em Maués. Durante 10 dias, a cidade se transforma em um grande palco de celebração da cultura amazônica, com apresentações de grupos folclóricos, shows musicais, feira gastronômica e exposições sobre a história do guaraná.",
    images: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    ],
    category: "Cultural",
    program: [
      "15/05 - Abertura oficial com show pirotécnico",
      "16-18/05 - Apresentações culturais e folclóricas",
      "19-21/05 - Shows musicais regionais e nacionais",
      "22-24/05 - Feira gastronômica e artesanato",
      "25/05 - Encerramento com grande procissão"
    ],
    tips: "Chegue com antecedência para garantir os melhores lugares. Use roupas leves e confortáveis. Experimente as comidas típicas da região!",
    isFree: true
  },
  {
    id: "festa-junina",
    name: "Arraial de Maués",
    date: "23 a 24 de Junho",
    month: "Junho",
    location: "Praça da Matriz",
    shortDescription: "Tradicional festa junina com quadrilhas, comidas típicas, fogueira e muita diversão para toda a família.",
    fullDescription: "O Arraial de Maués mantém viva a tradição das festas juninas na região amazônica. Com decoração típica, apresentações de quadrilhas, barracas de comidas tradicionais e fogueira, é uma celebração que une gerações.",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    ],
    category: "Cultural",
    program: [
      "23/06 - Quadrilhas Infantis às 19h",
      "23/06 - Quadrilhas Adultas às 21h",
      "24/06 - Concurso de Quadrilhas às 20h",
      "24/06 - Fogueira de São João às 00h"
    ],
    tips: "Use roupas caipiras ou trajes típicos juninos. Chegue cedo para aproveitar todas as atividades.",
    isFree: true
  },
  {
    id: "festival-verao",
    name: "Festival de Verão",
    date: "15 a 17 de Dezembro",
    month: "Dezembro",
    location: "Orla do Rio Maués-Açu",
    shortDescription: "Festival de música e cultura na beira do rio com shows, esportes aquáticos e gastronomia regional.",
    fullDescription: "O Festival de Verão aproveita as belezas naturais de Maués para criar um evento único às margens do Rio Maués-Açu. Com palco flutuante, apresentações musicais, competições esportivas e feira gastronômica.",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    ],
    category: "Cultural",
    program: [
      "15/12 - Abertura com shows regionais",
      "16/12 - Competições esportivas aquáticas",
      "16/12 - Shows nacionais à noite",
      "17/12 - Encerramento com festival gastronômico"
    ],
    tips: "Traga roupas de banho para atividades aquáticas. Use protetor solar e repelente.",
    isFree: true
  },
  {
    id: "olimpiadas-estudantis",
    name: "Olimpíadas Estudantis de Maués",
    date: "5 a 12 de Setembro",
    month: "Setembro",
    location: "Complexo Esportivo Municipal",
    shortDescription: "Competição esportiva entre escolas da cidade e região com diversas modalidades.",
    fullDescription: "As Olimpíadas Estudantis de Maués promovem o esporte e a integração entre os jovens da região. Durante uma semana, estudantes competem em diversas modalidades esportivas em um ambiente de fair play e amizade.",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    ],
    category: "Esportivo",
    program: [
      "5/09 - Cerimônia de abertura",
      "6-10/09 - Competições por modalidade",
      "11/09 - Finais e semifinais",
      "12/09 - Cerimônia de encerramento"
    ],
    tips: "Para assistir, chegue cedo para garantir lugar. Leve água e protetor solar.",
    isFree: true
  },
  {
    id: "festival-criancas",
    name: "Festival das Crianças",
    date: "12 de Outubro",
    month: "Outubro",
    location: "Parque Municipal",
    shortDescription: "Dia especial dedicado às crianças com brincadeiras, apresentações teatrais e atividades educativas.",
    fullDescription: "O Festival das Crianças transforma o Parque Municipal em um grande espaço de diversão e aprendizado. Com oficinas, teatro, música, jogos tradicionais e muitas surpresas para a criançada.",
    images: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    ],
    category: "Infantil",
    program: [
      "8h - Abertura com café da manhã",
      "9h - Oficinas de arte e artesanato",
      "11h - Teatro infantil",
      "14h - Jogos e brincadeiras tradicionais",
      "16h - Encerramento com lanche coletivo"
    ],
    tips: "Traga as crianças com roupas confortáveis para brincadeiras. Atividade totalmente gratuita.",
    isFree: true
  }
];
