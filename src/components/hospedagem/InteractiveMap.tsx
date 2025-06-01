
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InteractiveMap = () => {
  const mapData = [
    { type: 'hotel', color: '#006400', label: 'Hotéis' },
    { type: 'pousada', color: '#C21807', label: 'Pousadas' },
    { type: 'ecolodge', color: '#A5D6A7', label: 'Ecolodges' }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-verde-escuro mb-8 text-center font-serif">
          Localização das Hospedagens
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-3">
            <Card className="h-96 bg-white border border-gray-200">
              <CardContent className="p-0 h-full">
                <div 
                  className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center relative"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2044&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-verde-escuro/20 rounded-lg"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="bg-white/90 text-verde-escuro px-6 py-4 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Mapa Interativo</h3>
                      <p className="text-sm">
                        Visualize a localização de todas as hospedagens em Maués
                      </p>
                    </div>
                  </div>
                  
                  {/* Sample pins */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-vermelho-guarana rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-verde-escuro rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-verde-claro rounded-full border-2 border-white shadow-lg"></div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Legend */}
          <div className="lg:col-span-1">
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-verde-escuro text-lg">Legenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mapData.map((item) => (
                    <div key={item.type} className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    Clique nos pins do mapa para ver detalhes da hospedagem
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
