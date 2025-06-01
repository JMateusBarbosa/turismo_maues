
import React from 'react';

interface RouteDescriptionProps {
  vessel: string;
  company: string;
  type: string;
  departureLocation: string;
  arrivalLocation: string;
}

const RouteDescription = ({ vessel, company, type, departureLocation, arrivalLocation }: RouteDescriptionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-verde-escuro mb-3">Sobre a Embarcação</h3>
      <p className="text-gray-800 leading-relaxed">
        A {vessel} da {company} oferece conforto e segurança para sua viagem entre {departureLocation} e {arrivalLocation}. 
        A embarcação conta com {type === 'Ajato (Lancha)' ? 'assentos reclináveis, ar-condicionado e lanche a bordo' : 'redes e camarotes, banheiros, área de alimentação e deck para contemplação da paisagem amazônica'}. 
        Bagagem permitida: até 20kg por passageiro. Para bagagens extras, consulte taxas adicionais no embarque.
      </p>
    </div>
  );
};

export default RouteDescription;
