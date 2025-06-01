
import React, { useState } from 'react';
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email || !email.includes('@')) {
      toast.error("Por favor, insira um email válido.");
      return;
    }
    
    // Here would be the API call to subscribe the user
    // For now, just show a success message
    toast.success(`Obrigado por se inscrever com ${email}!`);
    setEmail('');
  };

  return (
    <section 
      className="py-16 px-4 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-marrom-terra opacity-80"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white font-serif">Fique por dentro das novidades</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Inscreva-se para receber atualizações sobre eventos, promoções e novidades turísticas de Maués-AM.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-claro"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="bg-vermelho-guarana hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
