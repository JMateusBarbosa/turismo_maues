
import React from 'react';

interface ScheduleTableProps {
  days: string[];
  departure: string;
  arrival: string;
  price: string;
}

const ScheduleTable = ({ days, departure, arrival, price }: ScheduleTableProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-verde-escuro mb-3">Horários e Preços</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-green-50">
              <th className="border border-gray-300 px-4 py-2 text-left">Dia da Semana</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Saída</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Chegada</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Preço</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{day}</td>
                <td className="border border-gray-300 px-4 py-2">{departure}</td>
                <td className="border border-gray-300 px-4 py-2">{arrival}</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-vermelho-guarana">{price}/pessoa</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
