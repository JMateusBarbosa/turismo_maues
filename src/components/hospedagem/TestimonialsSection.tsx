
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Hospedagem incrível! A Pousada Guaraná superou todas as expectativas. Atendimento excepcional e café da manhã delicioso.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      comment: "O Ecolodge Floresta proporcionou uma experiência única. Dormir na floresta foi inesquecível!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Costa",
      location: "Brasília, DF",
      rating: 4,
      comment: "Hotel Amazônia com excelente localização e vista linda para o rio. Voltarei em breve!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carlos Oliveira",
      location: "Manaus, AM",
      rating: 5,
      comment: "A Pousada Rio Verde é perfeita para quem busca tranquilidade. As paisagens são de tirar o fôlego.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-verde-escuro mb-8 text-center font-serif">
          ⭐ Depoimentos de Hóspedes
        </h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white border border-gray-200 h-full">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                      />
                      
                      <h3 className="font-semibold text-verde-escuro mb-1">
                        {testimonial.name}
                      </h3>
                      
                      <p className="text-sm text-gray-500 mb-3">
                        {testimonial.location}
                      </p>
                      
                      <div className="flex justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <p className="text-gray-600 text-sm italic">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
