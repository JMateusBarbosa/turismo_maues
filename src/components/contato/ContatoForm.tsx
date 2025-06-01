
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

/**
 * Componente ContatoForm - Formulário de contato interativo
 * 
 * Este componente permite aos usuários enviarem mensagens para a Secretaria
 * de Turismo através de um formulário web estruturado.
 * 
 * Funcionalidades:
 * - Validação de campos obrigatórios
 * - Feedback visual durante o envio
 * - Toast de confirmação após envio bem-sucedido
 * - Limpeza automática do formulário após envio
 * - Dropdown com categorias predefinidas de assunto
 * 
 * Estado gerenciado:
 * - formData: objeto com todos os campos do formulário
 * - isSubmitting: controla estado de carregamento do botão
 */
const ContatoForm = () => {
  // Estado para armazenar todos os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',      // Nome completo do usuário
    email: '',     // Email para resposta
    assunto: '',   // Categoria da mensagem (dropdown)
    mensagem: ''   // Conteúdo da mensagem
  });
  
  // Estado para controlar o botão durante o envio
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Hook para exibir notificações toast
  const { toast } = useToast();

  /**
   * Função para atualizar o estado quando o usuário digita nos campos
   * Funciona para Input, Textarea e Select através do evento onChange
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Função para processar o envio do formulário
   * Simula o envio para um backend (substitua por chamada real de API)
   * Inclui feedback visual e reset do formulário
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne reload da página
    setIsSubmitting(true); // Ativa estado de carregamento

    // Simulação de envio para API (substitua por fetch real)
    // TODO: Implementar integração com backend real
    setTimeout(() => {
      // Exibe toast de sucesso
      toast({
        title: "✅ Mensagem enviada com sucesso!",
        description: "Obrigado pelo seu contato! Retornaremos em breve via e-mail.",
        variant: "default",
      });
      
      // Limpa todos os campos do formulário
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
      
      // Remove estado de carregamento
      setIsSubmitting(false);
    }, 1000); // Simula 1 segundo de processamento
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-verde-escuro">
          Envie sua Mensagem
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
              Nome completo *
            </Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              E-mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu.email@exemplo.com"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="assunto" className="text-sm font-medium text-gray-700">
              Assunto *
            </Label>
            <select
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleInputChange}
              required
              className="mt-1 w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Selecione um assunto</option>
              <option value="duvida">Dúvida</option>
              <option value="sugestao">Sugestão</option>
              <option value="informacoes">Informações</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div>
            <Label htmlFor="mensagem" className="text-sm font-medium text-gray-700">
              Mensagem *
            </Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Digite sua mensagem aqui..."
              required
              rows={5}
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-verde-escuro hover:bg-verde-escuro/90 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-200"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContatoForm;
