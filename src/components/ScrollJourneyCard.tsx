import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GolldCard3D from "./GolldCard3D";

gsap.registerPlugin(ScrollTrigger);

const ScrollJourneyCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Initial floating animation
      const floatAnim = gsap.to(cardRef.current, {
        y: -10,
        rotateX: 5,
        rotateY: -5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        paused: true,
      });

      // Start floating
      floatAnim.play();

      // Main scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            // Pause floating during active scroll
            if (self.direction !== 0) {
              floatAnim.pause();
            } else {
              floatAnim.play();
            }
          },
        },
      });

      // Phase 1: Hero to Wallet (0% - 25%)
      tl.to(cardRef.current, {
        y: "50vh",
        x: "-5vw",
        rotateX: 25,
        rotateY: 15,
        rotateZ: -8,
        scale: 0.75,
        duration: 1,
        ease: "power2.inOut",
      })
      // Phase 2: In Wallet (25% - 40%)
      .to(cardRef.current, {
        y: "55vh",
        x: "0vw",
        rotateX: 35,
        rotateY: 0,
        rotateZ: 0,
        scale: 0.7,
        duration: 0.5,
        ease: "power2.inOut",
      })
      // Phase 3: Wallet to Phone (40% - 65%)
      .to(cardRef.current, {
        y: "50vh",
        x: "8vw",
        rotateX: 0,
        rotateY: -20,
        rotateZ: 5,
        scale: 0.65,
        duration: 1,
        ease: "power2.inOut",
      })
      // Phase 4: NFC approach to phone (65% - 75%)
      .to(cardRef.current, {
        y: "48vh",
        x: "5vw",
        rotateX: 5,
        rotateY: -10,
        rotateZ: 0,
        scale: 0.6,
        duration: 0.5,
        ease: "power2.inOut",
      })
      // Phase 5: Phone to Tree (75% - 100%)
      .to(cardRef.current, {
        y: "45vh",
        x: "-10vw",
        rotateX: 10,
        rotateY: 15,
        rotateZ: 8,
        scale: 0.7,
        duration: 1,
        ease: "power2.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Fixed Card that follows scroll */}
      <div
        ref={cardRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none perspective-1000"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <GolldCard3D />
      </div>
      
      {/* Scroll container - determines the journey length */}
      <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
        {/* Section markers for visual context */}
        
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div 
              className="w-[600px] h-[600px] rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, #1A56DB 0%, transparent 70%)" }}
            />
          </div>
        </section>
        
        {/* Wallet Section */}
        <section className="h-screen flex items-center justify-center relative">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Guarde com <span className="text-gradient-blue">Elegância</span>
            </h2>
            <p className="text-muted-foreground text-lg">Seu cartão premium, sempre à mão</p>
          </div>
          {/* Wallet visual */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[260px] rounded-3xl opacity-20"
            style={{
              background: "linear-gradient(145deg, #1A1F2C 0%, #111827 100%)",
              boxShadow: "0 30px 100px -30px rgba(0, 0, 0, 0.9)",
              transform: "perspective(1000px) rotateX(10deg)",
            }}
          />
        </section>
        
        {/* Phone Section */}
        <section className="h-screen flex items-center justify-center relative">
          <div className="text-center z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conecte com <span className="text-gradient-blue">um Toque</span>
            </h2>
            <p className="text-muted-foreground text-lg">Tecnologia NFC para compartilhamento instantâneo</p>
          </div>
          {/* Phone visual */}
          <div 
            className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[180px] h-[360px] rounded-[35px] opacity-20"
            style={{
              background: "linear-gradient(145deg, #272D3A 0%, #1A1F2C 100%)",
              boxShadow: "0 40px 120px -30px rgba(0, 0, 0, 0.9)",
              border: "3px solid #3F83F8",
            }}
          />
        </section>
        
        {/* Tree Section */}
        <section className="h-screen flex items-center justify-center relative">
          <div className="text-center z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pense <span className="text-gradient-blue">Sustentável</span>
            </h2>
            <p className="text-muted-foreground text-lg">Menos papel, mais conexões</p>
          </div>
          {/* Tree visual */}
          <div className="absolute top-1/2 left-[20%] -translate-y-1/2 opacity-20">
            <div 
              className="w-0 h-0"
              style={{
                borderLeft: "80px solid transparent",
                borderRight: "80px solid transparent",
                borderBottom: "140px solid #1A56DB",
              }}
            />
            <div 
              className="w-10 h-20 mx-auto rounded-t"
              style={{ background: "#3F83F8" }}
            />
          </div>
        </section>
        
        {/* Final Section - empty space */}
        <section className="h-screen" />
      </div>
    </>
  );
};

export default ScrollJourneyCard;
