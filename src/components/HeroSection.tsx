import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "./ui/button";
import GolldCard3D from "./GolldCard3D";

const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Floating animation when user is not scrolling
    const floatAnimation = gsap.to(cardRef.current, {
      y: -15,
      rotateX: 8,
      rotateY: -8,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Mouse movement effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !cardRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateX = ((e.clientY - centerY) / rect.height) * 15;
      const rotateY = ((e.clientX - centerX) / rect.width) * -15;
      
      gsap.to(cardRef.current, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      floatAnimation.play();
    };

    const handleMouseEnter = () => {
      floatAnimation.pause();
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);
    containerRef.current?.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      floatAnimation.kill();
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      containerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden perspective-1000"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(0, 0%, 8%) 0%, hsl(0, 0%, 3%) 100%)",
        }}
      />
      
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(43, 74%, 49%) 0%, transparent 70%)",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                Cartão Inteligente Premium
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Conecte Pessoas e Negócios com{" "}
              <span className="text-gradient-gold">um Toque</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Cartão inteligente, profissional e personalizável. Transforme a forma como você compartilha suas informações de contato.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Peça Já o Seu!
              </Button>
              <Button variant="hero-outline" size="xl">
                Ver Modelos
              </Button>
            </div>
          </div>
          
          {/* 3D Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <GolldCard3D
                ref={cardRef}
                className="floating"
                style={{
                  transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
                }}
              />
              
              {/* Glow ring */}
              <div
                className="absolute inset-0 -m-8 rounded-full opacity-30 blur-2xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle, hsl(43, 74%, 49%) 0%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Role para descobrir</span>
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
