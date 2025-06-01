
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

/**
 * Componente ContatoInfo - Informações de contato da Secretaria
 * 
 * Este componente exibe todas as formas de contato direto com a
 * Secretaria Municipal de Turismo e Cultura de Maués.
 * 
 * Informações incluídas:
 * - Telefone fixo institucional
 * - WhatsApp para contato rápido
 * - Email oficial da secretaria
 * - Horário de funcionamento
 * - Localização física
 * - Dica adicional para contato direto
 * 
 * Design:
 * - Ícones do Lucide React para cada tipo de informação
 * - Card com fundo cinza claro para diferenciação
 * - Estrutura flexível com ícones alinhados à esquerda
 */
const ContatoInfo = () => {
  return (
    <Card className="shadow-lg bg-gray-50">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-verde-escuro">
          Secretaria Municipal de Turismo e Cultura
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-vermelho-guarana mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">Telefone</p>
            <p className="text-gray-600">(92) 3345-6789</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-vermelho-guarana mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">WhatsApp</p>
            <p className="text-gray-600">(92) 99999-8888</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-vermelho-guarana mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">E-mail</p>
            <p className="text-gray-600">turismo@maues.am.gov.br</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-vermelho-guarana mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">Horário de Atendimento</p>
            <p className="text-gray-600">Segunda a Sexta, das 8h às 17h</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-vermelho-guarana mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">Localização</p>
            <p className="text-gray-600">Centro de Maués - AM</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-6">
          <p className="text-sm text-blue-800">
            <strong>💡 Dica:</strong> Caso prefira, entre em contato diretamente conosco por telefone ou WhatsApp.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContatoInfo;
