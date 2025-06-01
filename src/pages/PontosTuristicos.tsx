
import React from 'react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import { cn } from '@/lib/utils';
import { Map, MapPin, Clock, Compass, Anchor, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

// Mock data for tourist spots
// Each point includes a name, description, location, schedule, image, and map coordinates
const turisticPoints = [
  {
    id: 1,
    name: "Praia da Ponta da Maresia",
    description: "Uma das mais belas praias de rio da Amazônia, com areias brancas e águas tranquilas. Perfeita para banho e contemplação do pôr do sol.",
    location: "5 km do centro da cidade",
    schedule: "Visitação livre, 24h",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    // GOOGLE_MAPS_COORDINATES: Latitude e longitude da Praia da Ponta da Maresia
    coordinates: {
      lat: -3.3833, // Substitua com as coordenadas reais
      lng: -57.7078 // Substitua com as coordenadas reais
    }
  },
  {
    id: 2,
    name: "Mirante da Serra do Apocalipse",
    description: "Vista panorâmica de toda a região de Maués e do encontro dos rios. Ideal para fotografias e contemplação da natureza amazônica.",
    location: "12 km do centro, acesso por trilha",
    schedule: "6h às 18h, todos os dias",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    // GOOGLE_MAPS_COORDINATES: Latitude e longitude do Mirante da Serra do Apocalipse
    coordinates: {
      lat: -3.3933, // Substitua com as coordenadas reais
      lng: -57.6978 // Substitua com as coordenadas reais
    }
  },
  {
    id: 3,
    name: "Feira do Guaraná",
    description: "Mercado tradicional onde é possível encontrar o verdadeiro guaraná de Maués em diversas formas: em rama, em pó e artesanatos derivados.",
    location: "Centro da cidade",
    schedule: "5h às 14h, de terça a domingo",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    // GOOGLE_MAPS_COORDINATES: Latitude e longitude da Feira do Guaraná
    coordinates: {
      lat: -3.4033, // Substitua com as coordenadas reais
      lng: -57.7178 // Substitua com as coordenadas reais
    }
  },
  {
    id: 4,
    name: "Praça da Matriz",
    description: "Centro histórico da cidade com a Igreja Matriz de Nossa Senhora da Conceição. Local de encontro dos moradores e eventos culturais.",
    location: "Centro histórico",
    schedule: "Visitação livre, 24h",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    // GOOGLE_MAPS_COORDINATES: Latitude e longitude da Praça da Matriz
    coordinates: {
      lat: -3.3933, // Substitua com as coordenadas reais
      lng: -57.7078 // Substitua com as coordenadas reais
    }
  },
  {
    id: 5,
    name: "Orla da Cidade",
    description: "Calçadão à beira do rio Maués-Açú, ideal para caminhadas e contemplação do entardecer. Conta com quiosques de alimentação e área de lazer.",
    location: "Centro da cidade",
    schedule: "Visitação livre, 24h",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    // GOOGLE_MAPS_COORDINATES: Latitude e longitude da Orla da Cidade
    coordinates: {
      lat: -3.4033, // Substitua com as coordenadas reais
      lng: -57.7228 // Substitua com as coordenadas reais
    }
  },
  {
    id: 6,
    name: "Comunidade Indígena Maué",
    description: "Visita cultural à comunidade originária do povo Maué, detentores do conhecimento ancestral sobre o guaraná. Exige autorização prévia.",
    location: "35 km do centro (acesso fluvial)",
    schedule: "Entrada controlada, mediante agendamento",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    // GOOGLE_MAPS_COORDINATES: Latitude e longitude da Comunidade Indígena Maué
    coordinates: {
      lat: -3.3733, // Substitua com as coordenadas reais
      lng: -57.5978 // Substitua com as coordenadas reais
    }
  }
];

interface TouristPointCardProps {
  name: string;
  description: string;
  location: string;
  schedule: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const TouristPointCard = ({ name, description, location, schedule, image, coordinates }: TouristPointCardProps) => {
  // Função para abrir o Google Maps com visualização do local
  const openInGoogleMaps = () => {
    // GOOGLE_MAPS_VIEW_URL: URL para visualizar o local no Google Maps
    const mapUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=15`;
    window.open(mapUrl, '_blank');
  };

  // Função para abrir rota de direção no Google Maps a partir da localização atual
  const openDirections = () => {
    // GOOGLE_MAPS_DIRECTIONS_URL: URL para obter direções para o local
    if (navigator.geolocation) {
      // Se a geolocalização estiver disponível, use a localização atual do usuário
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLat = position.coords.latitude;
        const currentLng = position.coords.longitude;
        const directionsUrl = `https://www.google.com/maps/dir/${currentLat},${currentLng}/${coordinates.lat},${coordinates.lng}`;
        window.open(directionsUrl, '_blank');
      }, () => {
        // Fallback se a geolocalização for negada
        const directionsUrl = `https://www.google.com/maps/dir//${coordinates.lat},${coordinates.lng}`;
        window.open(directionsUrl, '_blank');
      });
    } else {
      // Fallback para navegadores sem suporte à geolocalização
      const directionsUrl = `https://www.google.com/maps/dir//${coordinates.lat},${coordinates.lng}`;
      window.open(directionsUrl, '_blank');
    }
  };

  return (
    <Card className="bg-white rounded-xl shadow-md overflow-hidden border border-marrom-terra/20 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      <CardHeader className="p-0">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={`Foto de ${name}`} 
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold text-verde-escuro font-serif mb-2">{name}</h3>
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-2 text-verde-escuro" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Clock size={16} className="mr-2 text-verde-escuro" />
          <span>{schedule}</span>
        </div>
        
        {/* GOOGLE_MAPS_EMBED: Iframe do Google Maps */}
        <div className="w-full h-40 rounded-md overflow-hidden mb-4 border border-gray-200">
          <iframe
            title={`Mapa de ${name}`}
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${coordinates.lat},${coordinates.lng}&zoom=15`}
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 px-5 pb-5 pt-0">
        <Button 
          onClick={openInGoogleMaps}
          className="w-full bg-verde-escuro hover:bg-verde-escuro/80 text-white"
          variant="default"
        >
          <Map className="mr-2" size={16} /> Ver no Google Maps
        </Button>
        <Button 
          onClick={openDirections}
          className="w-full bg-vermelho-guarana hover:bg-vermelho-guarana/80 text-white"
          variant="default"
        >
          <Navigation className="mr-2" size={16} /> Ir até o local
        </Button>
      </CardFooter>
    </Card>
  );
};

const PontosTuristicos = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      <AnnouncementBar />
      <main>
        {/* Hero Section */}
        <section 
          className="relative py-16 bg-verde-claro/20 flex items-center justify-center px-4 md:px-8" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/70"></div>
          
          <div className="relative z-10 text-center max-w-5xl">
            <h1 className="text-verde-escuro text-4xl md:text-5xl font-bold mb-4 font-serif">
              📸 Pontos Turísticos de Maués
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Conheça os locais mais encantadores da Terra do Guaraná
            </p>
          </div>
        </section>

        {/* Pontos Turísticos "por conta própria" */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-verde-escuro font-serif mb-4">
              Locais para Visitar por Conta Própria
            </h2>
            <p className="text-lg text-gray-800">
              Maués oferece diversos pontos turísticos de livre acesso que podem ser visitados de forma independente. 
              Conheça algumas das atrações mais procuradas pelos visitantes e aprecie as belezas naturais 
              e culturais que nossa cidade tem a oferecer.
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {turisticPoints.map((point) => (
              <TouristPointCard 
                key={point.id}
                name={point.name}
                description={point.description}
                location={point.location}
                schedule={point.schedule}
                image={point.image}
                coordinates={point.coordinates}
              />
            ))}
          </div>
        </section>

        {/* CTA - Pacotes Turísticos */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-[#C21807]/90 text-white rounded-xl py-8 px-6 shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
              Quer conhecer ainda mais?
            </h2>
            <p className="text-lg mb-6">
              Explore nossos pacotes turísticos com guias especializados e visite lugares exclusivos!
            </p>
            <Button 
              size="lg" 
              className="bg-verde-escuro hover:bg-verde-escuro/80 text-white px-8 py-6 text-lg rounded-xl shadow-md transition-all duration-200"
              onClick={() => window.location.href = "/passeios"}
            >
              <Anchor className="mr-2" size={20} /> 
              Ver Pacotes de Passeio
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PontosTuristicos;
