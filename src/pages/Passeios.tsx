
import React, { useState } from 'react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Search, Clock, DollarSign, Star, Phone, MapPin, Users, Filter, Map, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * TOUR PACKAGES DATA
 * Mock data representing available tour packages in Maués
 * Each package includes complete information needed for display and booking
 */
const tourPackages = [
  {
    id: 1,
    name: "Navegação pelo Rio Maués-Açú",
    category: "Fluvial", // Category for filtering tours
    duration: "4h",
    price: "150", // Price in Brazilian Reais per person
    rating: 4.8, // User rating out of 5 stars
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Navegue pelas águas cristalinas do Rio Maués-Açú, conhecendo comunidades ribeirinhas e observando a fauna amazônica.",
    highlights: ["Avistamento de botos", "Visita a comunidades", "Almoço típico"], // Tour highlights for marketing
    meetingPoint: "Porto da cidade de Maués", // Where tourists should meet the guide
    whatToBring: ["Protetor solar", "Chapéu", "Câmera", "Repelente"], // Essential items for tourists
    guide: {
      name: "Carlos Ribeiro",
      phone: "(92) 99999-1234",
      bio: "Guia local com 15 anos de experiência na região amazônica."
    }
  },
  {
    id: 2,
    name: "Trilha do Guaraná Nativo",
    category: "Trilhas",
    duration: "6h",
    price: "120",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Caminhada ecológica pela floresta até as plantações nativas de guaraná, com degustação e aprendizado sobre o cultivo.",
    highlights: ["Plantações nativas", "Degustação de guaraná", "Flora amazônica"],
    meetingPoint: "Centro de visitantes - Fazenda do Guaraná",
    whatToBring: ["Calçado fechado", "Água", "Lanche", "Repelente"],
    guide: {
      name: "Ana Silva",
      phone: "(92) 99999-5678",
      bio: "Bióloga especializada em botânica amazônica e guia certificada."
    }
  },
  {
    id: 3,
    name: "Imersão Cultural Maué",
    category: "Culturais",
    duration: "8h",
    price: "200",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Visite a aldeia indígena Maué e aprenda sobre as tradições ancestrais, artesanato e lendas do guaraná.",
    highlights: ["Aldeia indígena", "Artesanato tradicional", "Lendas do guaraná"],
    meetingPoint: "Píer fluvial de Maués",
    whatToBring: ["Respeito cultural", "Câmera", "Presente simbólico"],
    guide: {
      name: "João Maué",
      phone: "(92) 99999-9012",
      bio: "Indígena da etnia Maué, contador oficial das tradições ancestrais."
    }
  }
];

/**
 * TESTIMONIALS DATA
 * Customer reviews and feedback to build trust and credibility
 * Used in the social proof section of the page
 */
const testimonials = [
  {
    name: "Maria Santos",
    location: "São Paulo",
    rating: 5,
    comment: "Experiência incrível! O passeio fluvial superou todas as expectativas.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b976?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Roberto Lima",
    location: "Rio de Janeiro",
    rating: 5,
    comment: "A trilha do guaraná foi educativa e emocionante. Recomendo muito!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

/**
 * FAQ DATA
 * Frequently Asked Questions to reduce customer support burden
 * Addresses common concerns about tour bookings and logistics
 */
const faqData = [
  {
    question: "Qual a idade mínima para os passeios?",
    answer: "A idade mínima varia por passeio. Passeios fluviais: 5 anos. Trilhas: 8 anos. Culturais: todas as idades com acompanhante."
  },
  {
    question: "O que está incluso nos pacotes?",
    answer: "Todos os pacotes incluem guia especializado, equipamentos de segurança e lanche. Transporte e refeições variam conforme o pacote."
  },
  {
    question: "Qual a política de cancelamento?",
    answer: "Cancelamento gratuito até 48h antes do passeio. Entre 24-48h: 50% de reembolso. Menos de 24h: sem reembolso, exceto por condições climáticas."
  },
  {
    question: "Os passeios funcionam em qualquer clima?",
    answer: "A maioria dos passeios é adaptada ao clima amazônico. Em caso de chuvas intensas, oferecemos reagendamento ou atividades alternativas cobertas."
  }
];

/**
 * TOUR CARD COMPONENT PROPS INTERFACE
 * Defines the structure for tour card component properties
 */
interface TourCardProps {
  tour: typeof tourPackages[0]; // Single tour package data
  onDetailsClick: (tour: typeof tourPackages[0]) => void; // Callback for opening tour details modal
}

/**
 * TOUR CARD COMPONENT
 * Displays individual tour package information in a card format
 * Handles tour preview and click-to-details functionality
 * 
 * @param tour - Tour package data object
 * @param onDetailsClick - Function to handle opening tour details modal
 */
const TourCard = ({ tour, onDetailsClick }: TourCardProps) => {
  /**
   * GET CATEGORY COLOR UTILITY
   * Returns appropriate Tailwind CSS classes based on tour category
   * Used for consistent category badge styling across the interface
   * 
   * @param category - Tour category string
   * @returns Tailwind CSS classes for badge styling
   */
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fluvial': return 'bg-blue-100 text-blue-800';
      case 'Trilhas': return 'bg-green-100 text-green-800';
      case 'Culturais': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] bg-white">
      {/* TOUR IMAGE HEADER */}
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={tour.image} 
            alt={tour.name}
            className="w-full h-full object-cover"
          />
          {/* CATEGORY BADGE OVERLAY */}
          <Badge className={cn("absolute top-3 left-3", getCategoryColor(tour.category))}>
            {tour.category}
          </Badge>
        </div>
      </CardHeader>

      {/* TOUR INFORMATION CONTENT */}
      <CardContent className="p-4">
        {/* Tour title and description */}
        <h3 className="text-xl font-semibold text-verde-escuro font-serif mb-2">{tour.name}</h3>
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{tour.description}</p>
        
        {/* TOUR METADATA: Duration and Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-1" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center text-sm font-medium text-verde-escuro">
            <DollarSign size={16} className="mr-1" />
            <span>R$ {tour.price}/pessoa</span>
          </div>
        </div>
        
        {/* STAR RATING DISPLAY */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={cn(
                "mr-1",
                i < Math.floor(tour.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
              )} 
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({tour.rating})</span>
        </div>
      </CardContent>

      {/* CALL-TO-ACTION BUTTON */}
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onDetailsClick(tour)}
          className="w-full bg-vermelho-guarana hover:bg-vermelho-guarana/80 text-white rounded-full px-6 py-2 shadow-md transition-all duration-200"
        >
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
};

/**
 * TOUR MODAL COMPONENT PROPS INTERFACE
 * Defines the structure for tour modal component properties
 */
interface TourModalProps {
  tour: typeof tourPackages[0] | null; // Tour data or null when modal is closed
  onClose: () => void; // Function to close the modal
}

/**
 * TOUR MODAL COMPONENT
 * Full-screen modal displaying comprehensive tour details
 * Includes image gallery, description, location map, and booking functionality
 * 
 * @param tour - Selected tour package data (null when closed)
 * @param onClose - Function to close the modal
 */
const TourModal = ({ tour, onClose }: TourModalProps) => {
  // Early return if no tour is selected (modal closed)
  if (!tour) return null;

  return (
    // MODAL OVERLAY AND CONTAINER
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* MODAL HEADER WITH CLOSE BUTTON */}
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-verde-escuro font-serif">{tour.name}</h2>
          <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </Button>
        </div>
        
        {/* MODAL CONTENT */}
        <div className="p-6">
          {/* TOUR IMAGE GALLERY SECTION */}
          <div className="mb-6">
            <img 
              src={tour.image} 
              alt={tour.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          {/* DETAILED DESCRIPTION SECTION */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-verde-escuro mb-3">Descrição Completa</h3>
            <p className="text-gray-700 mb-4">{tour.description}</p>
            
            {/* TOUR HIGHLIGHTS LIST */}
            <h4 className="font-semibold text-verde-escuro mb-2">Destaques do Passeio:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {tour.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          {/* LOCATION MAP PLACEHOLDER SECTION */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-verde-escuro mb-3">Localização</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <Map className="text-gray-400" size={48} />
              <span className="ml-2 text-gray-500">Mapa interativo será carregado aqui</span>
            </div>
          </div>
          
          {/* TOUR DETAILS AND GUIDE INFORMATION GRID */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            
            {/* LEFT COLUMN: Tour Information */}
            <div>
              <h3 className="text-xl font-semibold text-verde-escuro mb-3">Informações</h3>
              
              {/* TOUR METADATA DISPLAY */}
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center">
                  <Clock className="mr-2" size={16} />
                  <span>Duração: {tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="mr-2" size={16} />
                  <span>Preço: R$ {tour.price}/pessoa</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  <span>Encontro: {tour.meetingPoint}</span>
                </div>
              </div>
              
              {/* WHAT TO BRING LIST */}
              <h4 className="font-semibold text-verde-escuro mt-4 mb-2">O que levar:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {tour.whatToBring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* RIGHT COLUMN: Guide Information */}
            <div>
              <h3 className="text-xl font-semibold text-verde-escuro mb-3">Seu Guia</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-verde-escuro">{tour.guide.name}</h4>
                <div className="flex items-center text-gray-600 mt-1">
                  <Phone size={16} className="mr-2" />
                  <span>{tour.guide.phone}</span>
                </div>
                <p className="text-sm text-gray-700 mt-2">{tour.guide.bio}</p>
              </div>
            </div>
          </div>
          
          {/* BOOKING CALL-TO-ACTION BUTTON */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-vermelho-guarana hover:bg-vermelho-guarana/80 text-white px-8 py-3 rounded-full shadow-lg"
            >
              Reservar Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * MAIN PASSEIOS PAGE COMPONENT
 * Primary component for the Tours page displaying all tour packages
 * Handles search, filtering, and modal state management
 */
const Passeios = () => {
  // COMPONENT STATE MANAGEMENT
  const [selectedTour, setSelectedTour] = useState<typeof tourPackages[0] | null>(null); // Currently selected tour for modal
  const [searchTerm, setSearchTerm] = useState(''); // Search input value
  const [categoryFilter, setCategoryFilter] = useState(''); // Selected category filter

  /**
   * TOUR FILTERING LOGIC
   * Filters tours based on search term and category selection
   * Searches through tour name and description for matching text
   */
  const filteredTours = tourPackages.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || tour.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      {/* SITE NAVIGATION COMPONENTS */}
      <Header />
      <AnnouncementBar />
      
      <main>
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <section 
          className="relative py-16 bg-verde-claro/20 flex items-center justify-center px-4 md:px-8" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* BACKGROUND OVERLAY FOR TEXT READABILITY */}
          <div className="absolute inset-0 bg-white/70"></div>
          
          {/* HERO CONTENT */}
          <div className="relative z-10 text-center max-w-5xl">
            <h1 className="text-verde-escuro text-4xl md:text-5xl font-bold mb-4 font-serif">
              🚤 Passeios Turísticos
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              Descubra roteiros fluviais, trilhas e experiências culturais em Maués
            </p>
          </div>
        </section>

        {/* SEARCH AND FILTER CONTROLS SECTION */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            
            {/* SEARCH INPUT WITH ICON */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="search"
                placeholder="Pesquisar passeios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-verde-escuro focus:border-transparent"
              />
            </div>
            
            {/* FILTER SHEET TRIGGER */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 px-6 py-3 rounded-xl">
                  <Filter size={20} />
                  Filtros
                </Button>
              </SheetTrigger>
              
              {/* FILTER SHEET CONTENT */}
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtrar Passeios</SheetTitle>
                </SheetHeader>
                
                {/* CATEGORY FILTER OPTIONS */}
                <div className="py-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Categoria</h3>
                    <div className="space-y-2">
                      {['', 'Fluvial', 'Trilhas', 'Culturais'].map((category) => (
                        <label key={category} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={categoryFilter === category}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="mr-2"
                          />
                          {category || 'Todos'}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* TOUR CARDS GRID DISPLAY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {filteredTours.map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                onDetailsClick={setSelectedTour}
              />
            ))}
          </div>
        </section>

        {/* CUSTOMER TESTIMONIALS SECTION */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-verde-escuro font-serif mb-8 text-center">
            O que nossos visitantes dizem
          </h2>
          
          {/* TESTIMONIALS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    
                    {/* CUSTOMER AVATAR */}
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    
                    {/* TESTIMONIAL CONTENT */}
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold text-verde-escuro">{testimonial.name}</h4>
                        <span className="text-sm text-gray-500 ml-2">- {testimonial.location}</span>
                      </div>
                      
                      {/* CUSTOMER RATING STARS */}
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* TESTIMONIAL TEXT */}
                      <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-verde-escuro font-serif mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-700">Ainda com dúvidas? Encontre as respostas aqui!</p>
          </div>
          
          {/* FAQ ACCORDION INTERFACE */}
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CALL-TO-ACTION SECTION */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-vermelho-guarana/90 text-white rounded-xl py-8 px-6 shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
              Pronto para explorar Maués?
            </h2>
            <p className="text-lg mb-6">
              Descubra mais atrações e planeje sua estadia completa!
            </p>
            
            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-verde-escuro hover:bg-verde-escuro/80 text-white px-8 py-3 rounded-xl shadow-md"
                onClick={() => window.location.href = "/pontos-turisticos"}
              >
                <MapPin className="mr-2" size={20} />
                Pontos Turísticos
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-vermelho-guarana border-white hover:bg-gray-50 px-8 py-3 rounded-xl shadow-md"
                onClick={() => window.location.href = "/hospedagem"}
              >
                <Heart className="mr-2" size={20} />
                Ver Hospedagem
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* SITE FOOTER */}
      <Footer />
      
      {/* TOUR DETAILS MODAL (CONDITIONAL RENDER) */}
      <TourModal 
        tour={selectedTour} 
        onClose={() => setSelectedTour(null)} 
      />
    </div>
  );
};

export default Passeios;
