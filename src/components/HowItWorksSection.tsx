import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !stepsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stepsRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: "⚡",
      title: "Rápido",
      description: "Compartilhe informações em segundos",
    },
    {
      icon: "📱",
      title: "Universal",
      description: "Funciona em qualquer smartphone",
    },
    {
      icon: "🎨",
      title: "Personalizável",
      description: "Design único para sua marca",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="relative py-32"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Veja Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Descubra como é simples conectar pessoas e negócios{" "}
            <span className="text-gradient-blue">com apenas um toque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clique para assistir a demonstração
          </p>
        </div>

        {/* Video placeholder */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div
            className="aspect-video rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #1A1F2C 0%, #111827 100%)",
              boxShadow: "0 40px 100px -30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(26, 86, 219, 0.1)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-gradient-blue shadow-blue"
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            
            <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
          </div>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(145deg, #1A1F2C 0%, #111827 100%)",
                border: "1px solid rgba(26, 86, 219, 0.2)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl bg-gradient-blue"
              >
                {step.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
