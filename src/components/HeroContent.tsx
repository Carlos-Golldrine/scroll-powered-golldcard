import { Button } from "./ui/button";

const HeroContent = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1A56DB 0%, transparent 70%)",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Cartão Inteligente Premium
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Conecte Pessoas e Negócios com{" "}
            <span className="text-gradient-blue">um Toque</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Cartão inteligente, profissional e personalizável. Transforme a forma como você compartilha suas informações de contato.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Peça Já o Seu!
            </Button>
            <Button variant="hero-outline" size="xl">
              Ver Modelos
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Role para descobrir</span>
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroContent;
