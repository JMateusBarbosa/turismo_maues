
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

interface AccommodationGridProps {
  searchTerm: string;
  filters: {
    priceRange: number[];
    type: string;
    rating: number;
  };
}

const accommodations = [
  {
    id: 1,
    name: "Pousada Guaraná",
    type: "pousada",
    priceRange: "R$120–R$200",
    location: "Centro de Maués",
    description: "Pousada aconchegante no coração da cidade, próxima aos principais pontos turísticos.",
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    website: "https://pousadaguarana.com.br",
    whatsapp: "5592999999999"
  },
  {
    id: 2,
    name: "Hotel Amazônia",
    type: "hotel",
    priceRange: "R$180–R$320",
    location: "Avenida Principal",
    description: "Hotel moderno com vista para o rio, oferecendo conforto e comodidade para toda família.",
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    website: "https://hotelamazonia.com.br",
    whatsapp: "5592888888888"
  },
  {
    id: 3,
    name: "Ecolodge Floresta",
    type: "ecolodge",
    priceRange: "R$250–R$400",
    location: "Zona Rural",
    description: "Experiência única na floresta com chalés sustentáveis e contato direto com a natureza.",
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    ],
    website: "https://ecolodgefloresta.com.br",
    whatsapp: "5592777777777"
  },
  {
    id: 4,
    name: "Pousada Rio Verde",
    type: "pousada",
    priceRange: "R$100–R$180",
    location: "Beira Rio",
    description: "Localizada às margens do rio, oferece tranquilidade e belas paisagens naturais.",
    rating: 4.3,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    website: "https://pousadarioverde.com.br",
    whatsapp: "5592666666666"
  },
  {
    id: 5,
    name: "Hotel Maués Palace",
    type: "hotel",
    priceRange: "R$200–R$350",
    location: "Centro Comercial",
    description: "Hotel executivo com infraestrutura completa para negócios e lazer.",
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    ],
    website: "https://mauespalace.com.br",
    whatsapp: "5592555555555"
  },
  {
    id: 6,
    name: "Pousada Terra do Guaraná",
    type: "pousada",
    priceRange: "R$90–R$160",
    location: "Zona Norte",
    description: "Ambiente familiar com café da manhã regional e atendimento personalizado.",
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    website: "https://terradoguarana.com.br",
    whatsapp: "5592444444444"
  }
];

const AccommodationGrid = ({ searchTerm, filters }: AccommodationGridProps) => {
  const filteredAccommodations = accommodations.filter(accommodation => {
    const matchesSearch = accommodation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         accommodation.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = !filters.type || accommodation.type === filters.type;
    
    const priceValue = parseInt(accommodation.priceRange.split('–')[0].replace('R$', ''));
    const matchesPrice = priceValue >= filters.priceRange[0] && priceValue <= filters.priceRange[1];
    
    const matchesRating = accommodation.rating >= filters.rating;
    
    return matchesSearch && matchesType && matchesPrice && matchesRating;
  });

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">☆</span>}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-verde-escuro mb-8 text-center font-serif">
          Opções de Hospedagem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccommodations.map((accommodation) => (
            <Card key={accommodation.id} className="bg-white border border-marrom-terra/20 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {accommodation.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video">
                          <img
                            src={image}
                            alt={`${accommodation.name} - Imagem ${index + 1}`}
                            className="w-full h-full object-cover rounded-t-xl"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {accommodation.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </>
                  )}
                </Carousel>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-verde-escuro mb-2">
                  {accommodation.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-2 text-vermelho-guarana font-medium">
                  <span>💰</span>
                  <span>{accommodation.priceRange} / noite</span>
                </div>
                
                <div className="flex items-center gap-1 mb-3 text-gray-600">
                  <span>📍</span>
                  <span className="text-sm">{accommodation.location}</span>
                </div>
                
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {accommodation.description}
                </p>
                
                <div className="mb-4">
                  {renderStars(accommodation.rating)}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    asChild
                    className="flex-1 bg-verde-escuro hover:bg-verde-escuro/90 text-white text-sm"
                  >
                    <a href={accommodation.website} target="_blank" rel="noopener noreferrer">
                      🔗 Site oficial
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="flex-1 border-vermelho-guarana text-vermelho-guarana hover:bg-vermelho-guarana hover:text-white text-sm"
                  >
                    <a href={`https://wa.me/${accommodation.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      📱 WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredAccommodations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhuma hospedagem encontrada com os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AccommodationGrid;
