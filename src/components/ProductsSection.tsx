import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 80, rotateY: 15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      name: "GolldCard",
      subtitle: "Cartão Inteligente",
      description: "O cartão essencial para networking moderno",
      price: "A partir de R$ 149",
      features: ["NFC integrado", "Design premium", "App exclusivo"],
      popular: false,
    },
    {
      name: "GolldCard Premium",
      subtitle: "Personalizável",
      description: "Personalização completa para sua marca",
      price: "A partir de R$ 249",
      features: ["Tudo do básico", "Logo personalizado", "Cores exclusivas", "Suporte prioritário"],
      popular: true,
    },
    {
      name: "Avalia Card",
      subtitle: "Para Avaliações",
      description: "Colete avaliações com facilidade",
      price: "A partir de R$ 199",
      features: ["QR Code dinâmico", "Google Reviews", "Dashboard analytics"],
      popular: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="modelos"
      className="relative py-32 overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1A56DB 0%, transparent 70%)",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Modelos de Lançamento
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Escolha o seu <span className="text-gradient-blue">GolldCard</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto perspective-1000">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 preserve-3d ${
                product.popular ? "md:-translate-y-4" : ""
              }`}
              style={{
                background: product.popular
                  ? "linear-gradient(145deg, rgba(26, 86, 219, 0.2) 0%, #1A1F2C 100%)"
                  : "linear-gradient(145deg, #1A1F2C 0%, #111827 100%)",
                border: product.popular
                  ? "2px solid #1A56DB"
                  : "1px solid rgba(255,255,255,0.1)",
                boxShadow: product.popular
                  ? "0 30px 80px -20px rgba(26, 86, 219, 0.3)"
                  : "0 20px 60px -20px rgba(0, 0, 0, 0.5)",
              }}
            >
              {product.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-gradient-blue text-white"
                >
                  Mais Popular
                </div>
              )}
              
              <div className="text-center">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="text-primary text-sm mt-1">{product.subtitle}</p>
                <p className="text-muted-foreground text-sm mt-4">{product.description}</p>
                
                <div className="my-8">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {product.price}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={product.popular ? "hero" : "hero-outline"}
                  className="w-full"
                >
                  Escolher
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
