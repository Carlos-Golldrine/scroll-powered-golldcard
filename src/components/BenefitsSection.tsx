import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !itemsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current?.children || [],
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Compartilhamento Instantâneo",
      description: "Transfira seus dados de contato em menos de 1 segundo",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Compatível com Todos os Smartphones",
      description: "Funciona com iPhone e Android, sem app necessário",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Material Resistente e Durável",
      description: "Feito com materiais premium que duram anos",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Pedido Fácil via WhatsApp",
      description: "Tire dúvidas e faça seu pedido pelo WhatsApp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="beneficios"
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Por que escolher
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Por que escolher nossos{" "}
              <span className="text-gradient-blue">cartões inteligentes?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tecnologia de ponta combinada com design premium para transformar suas conexões profissionais.
            </p>
          </div>

          <div ref={itemsRef} className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(145deg, #1A1F2C 0%, #111827 100%)",
                  border: "1px solid rgba(26, 86, 219, 0.2)",
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary"
                  style={{
                    background: "linear-gradient(135deg, rgba(26, 86, 219, 0.2) 0%, rgba(26, 86, 219, 0.1) 100%)",
                    border: "1px solid rgba(26, 86, 219, 0.3)",
                  }}
                >
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
