
import React from 'react';
import { Church, Anchor, Leaf, Package } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon, isLast = false }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col items-center md:w-32 md:flex-shrink-0">
        <div className="flex items-center justify-center w-10 h-10 bg-verde-escuro rounded-full text-white">
          {icon}
        </div>
        {!isLast && (
          <div className="w-1 flex-1 bg-verde-escuro my-2 md:h-full md:w-1"></div>
        )}
      </div>
      <div className={cn(
        "flex flex-col pt-1 md:pt-0 md:pl-8 pb-8",
        isLast ? "pb-0" : ""
      )}>
        <span className="font-serif font-bold text-vermelho-guarana text-xl mb-1">
          {year}
        </span>
        <h3 className="font-serif font-bold text-verde-escuro text-lg mb-2">
          {title}
        </h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      year: "1669",
      title: "Fundação da Missão",
      description: "Jesuítas estabelecem a Missão de Nossa Senhora da Conceição de Maués, primeiro núcleo populacional da região.",
      icon: <Church size={18} />
    },
    {
      year: "1798",
      title: "Elevação à Vila",
      description: "O povoado é elevado à categoria de Vila, recebendo o nome de 'Luséa' pela coroa portuguesa.",
      icon: <Church size={18} />
    },
    {
      year: "1850",
      title: "Ciclo da Borracha",
      description: "Maués participa ativamente do ciclo econômico da borracha, com expansão das vias fluviais e comércio.",
      icon: <Anchor size={18} />
    },
    {
      year: "1896",
      title: "Nome Atual",
      description: "A vila é renomeada definitivamente para 'Maués', em homenagem aos indígenas que habitavam originalmente a região.",
      icon: <Leaf size={18} />
    },
    {
      year: "1960",
      title: "Cultura do Guaraná",
      description: "Intensificação da produção de guaraná, que se torna o principal produto da economia local.",
      icon: <Leaf size={18} />
    },
    {
      year: "1980",
      title: "Primeira Festa do Guaraná",
      description: "Realização da primeira edição da Festa do Guaraná, que viria a se tornar um dos mais importantes eventos culturais da região Norte.",
      icon: <Package size={18} />
    },
    {
      year: "Atual",
      title: "Turismo Sustentável",
      description: "Desenvolvimento do ecoturismo e turismo cultural, valorizando as tradições indígenas e a preservação ambiental da Amazônia.",
      icon: <Leaf size={18} />,
      isLast: true
    }
  ];

  return (
    <div className="w-full">
      <div className="md:grid md:grid-cols-2 md:gap-x-12 gap-y-8">
        {timelineData.map((item, index) => (
          <div key={index} className={cn(
            "relative",
            index % 2 === 1 && "md:mt-24"
          )}>
            <TimelineItem
              year={item.year}
              title={item.title}
              description={item.description}
              icon={item.icon}
              isLast={item.isLast}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
