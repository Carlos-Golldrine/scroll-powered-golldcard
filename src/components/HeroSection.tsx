import { MessageCircle, Volume2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o Agente de IA.";
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6 }, 
      "-=0.4"
    )
    .fromTo(descRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6 }, 
      "-=0.3"
    )
    .fromTo(videoRef.current, 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.8 }, 
      "-=0.3"
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5 }, 
      "-=0.3"
    )
    .fromTo(trustRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5 }, 
      "-=0.2"
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center px-6 py-16 bg-brand-dark relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-darker" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">

        {/* Main Headline */}
        <h1 ref={headlineRef} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight text-white mb-6 opacity-0">
          Automatize seu{" "}
          <span className="bg-brand-blue px-3 py-1 rounded-lg">Atendimento</span>
          {" "}de clientes
        </h1>
        
        <p ref={subtitleRef} className="text-lg sm:text-xl text-brand-light/80 mb-4 font-body opacity-0">
          Converta conversas em agendamentos,{" "}
          <span className="font-semibold text-white">mesmo enquanto você dorme</span>.
        </p>
        
        <p ref={descRef} className="text-base text-muted-foreground mb-8 font-body opacity-0">
          Essa foi a forma que encontrei para crescer meu negócio{" "}
          <span className="bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded font-medium">
            sem precisar de funcionários extras
          </span>
          {" "}com muito menos esforço.
        </p>

        {/* Video placeholder */}
        <div ref={videoRef} className="relative w-full max-w-2xl mx-auto aspect-video bg-gradient-to-br from-brand-darker to-brand-dark rounded-2xl mb-8 border-2 border-white/10 overflow-hidden shadow-2xl opacity-0">
          {/* Decorative frame */}
          <div className="absolute inset-2 border border-white/5 rounded-xl" />
          
          {/* Video content placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand-blue flex items-center justify-center shadow-lg shadow-brand-blue/30">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-medium mb-1">Seu vídeo já começou</p>
              <p className="text-muted-foreground text-sm">Clique para ouvir</p>
            </div>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-brand-orange/50 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-brand-orange/50 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-brand-orange/50 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-brand-orange/50 rounded-br-lg" />
        </div>

        {/* CTA Button */}
        <a
          ref={ctaRef}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30 uppercase tracking-wide opacity-0"
        >
          <MessageCircle className="w-6 h-6" />
          Quero ter clientes todos os dias
        </a>

        {/* Trust indicator */}
        <p ref={trustRef} className="text-sm text-muted-foreground mt-8 opacity-0">
          +200 empresas já automatizaram seu atendimento
        </p>
      </div>
    </section>
  );
};

export default HeroSection;