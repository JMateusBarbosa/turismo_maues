
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * EventsGallery Component
 * 
 * Gallery of past events with lightbox functionality
 */
const EventsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      alt: "Festival do Guaraná 2023",
      year: "2023"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      alt: "Carnaval de Maués 2023",
      year: "2023"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      alt: "Festa de São Sebastião 2024",
      year: "2024"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      alt: "Festival de Verão 2024",
      year: "2024"
    },
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      alt: "Procissão do Círio 2024",
      year: "2024"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&brightness=0.8",
      alt: "Festival do Açaí 2024",
      year: "2024"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev + 1) % galleryImages.length : 0
    );
  };

  const prevImage = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
    );
  };

  return (
    <section className="py-16 bg-off-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-verde-escuro text-center mb-8">
          📸 Memórias de Edições Passadas
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm">{image.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-full p-4">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110"
                aria-label="Fechar galeria"
              >
                <X size={24} className="text-gray-800" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>
              
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="font-medium">{galleryImages[selectedImage].alt}</p>
                <p className="text-sm opacity-80">{galleryImages[selectedImage].year}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsGallery;
