import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o Agente de IA.";

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-12 bg-brand-dark relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-darker opacity-90" />
      
      <div className="relative z-10 max-w-lg mx-auto w-full">
        {/* Video placeholder */}
        <div className="w-full aspect-video bg-brand-darker rounded-2xl mb-8 flex items-center justify-center border border-white/10 overflow-hidden">
          <div className="text-center text-muted-foreground">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-brand-blue/20 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
            </div>
            <p className="text-sm">Vídeo em breve</p>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Seu novo agente inteligente que trabalha por você{" "}
            <span className="text-gradient-orange">24h</span>.
          </h1>
          
          <p className="text-lg text-brand-light/80 leading-relaxed">
            Converte conversas em agendamentos, lembra clientes que esquecem, 
            e cobra de forma educada — tudo automaticamente.
          </p>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary text-lg mt-4"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar um Orçamento
          </a>

          {/* Trust indicator */}
          <p className="text-sm text-muted-foreground mt-6">
            +200 empresas já automatizaram seu atendimento
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;