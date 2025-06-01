
import React from 'react';
import { Button } from '@/components/ui/button';

interface ModalFooterProps {
  whatsapp: string;
  company: string;
  onViewFullPage: () => void;
}

const ModalFooter = ({ whatsapp, company, onViewFullPage }: ModalFooterProps) => {
  return (
    <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Button
          asChild
          className="flex-1 bg-green-800 hover:bg-green-900 text-white rounded-full px-6 py-3 text-center justify-center hover:scale-105 transition-transform duration-150"
        >
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contatar ${company} via WhatsApp`}
            className="flex items-center justify-center w-full"
          >
            Contatar via WhatsApp
          </a>
        </Button>
        
        <Button
          variant="outline"
          onClick={onViewFullPage}
          className="flex-1 bg-transparent border border-green-800 text-green-800 hover:bg-green-50 rounded-full px-6 py-3 text-center justify-center hover:scale-105 transition-transform duration-150"
        >
          Ver página completa
        </Button>
      </div>
    </div>
  );
};

export default ModalFooter;
