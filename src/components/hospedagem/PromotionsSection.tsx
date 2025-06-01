
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PromotionsSection = () => {
  const promotions = [
    {
      title: "Diária + Passeio Fluvial",
      price: "R$250",
      description: "Hospedagem por 1 noite + passeio de barco pelo Rio Maués-Açu",
      originalPrice: "R$320"
    },
    {
      title: "Fim de Semana Completo",
      price: "R$480",
      description: "2 diárias + café da manhã + visita à plantação de guaraná",
      originalPrice: "R$580"
    },
    {
      title: "Semana do Guaraná",
      price: "R$1.200",
      description: "5 diárias + todos os passeios + refeições inclusas",
      originalPrice: "R$1.500"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="bg-vermelho-guarana text-white rounded-xl py-6 px-8 shadow-lg mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            🎉 Promoções Especiais
          </h2>
          <p className="text-white/90">
            Aproveite nossos pacotes exclusivos com descontos imperdíveis
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {promotions.map((promo, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-verde-escuro mb-3">
                    {promo.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 line-through">
                      {promo.originalPrice}
                    </span>
                    <div className="text-3xl font-bold text-vermelho-guarana">
                      {promo.price}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {promo.description}
                  </p>
                  
                  <div className="bg-green-50 text-green-800 text-xs font-medium px-3 py-1 rounded-full inline-block">
                    Oferta Limitada
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="bg-verde-escuro hover:bg-verde-escuro/90 text-white px-8 py-3">
            <a href="/passeios">Ver Pacotes Completos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
