import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GolldCard3D from "./GolldCard3D";

gsap.registerPlugin(ScrollTrigger);

const ScrollJourneyCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    if (!cardRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(cardRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        rotateX: 5,
        rotateY: -5,
        rotateZ: 0,
        scale: 1,
      });

      // Section 1: Hero - subtle float (controlled by scroll)
      ScrollTrigger.create({
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          if (!cardRef.current) return;
          const progress = self.progress;
          gsap.to(cardRef.current, {
            y: progress * 100,
            rotateY: -5 + progress * 10,
            duration: 0,
          });
        },
      });

      // Section 2: Connect/Phone - card approaches phone with glow
      ScrollTrigger.create({
        trigger: "#connect-section",
        start: "top 80%",
        end: "center center",
        scrub: 0.7,
        onEnter: () => setIsGlowing(true),
        onLeaveBack: () => setIsGlowing(false),
        onUpdate: (self) => {
          if (!cardRef.current || !phoneRef.current) return;
          const progress = self.progress;
          
          // Get phone position
          const phoneRect = phoneRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          // Calculate target position (left of phone)
          const targetX = (phoneRect.left - viewportWidth / 2) - 80;
          const targetY = (phoneRect.top + phoneRect.height / 2 - viewportHeight / 2) - 20;
          
          gsap.to(cardRef.current, {
            x: targetX * progress,
            y: 100 + (targetY - 100) * progress,
            rotateX: 5 - 5 * progress,
            rotateY: 5 - 20 * progress,
            rotateZ: -5 * progress,
            scale: 1 - 0.15 * progress,
            duration: 0,
          });
        },
      });

      // Section 2b: Stay snapped at phone
      ScrollTrigger.create({
        trigger: "#connect-section",
        start: "center center",
        end: "bottom 20%",
        scrub: 0.5,
        onUpdate: (self) => {
          if (!cardRef.current || !phoneRef.current) return;
          const phoneRect = phoneRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          const targetX = (phoneRect.left - viewportWidth / 2) - 80;
          const targetY = (phoneRect.top + phoneRect.height / 2 - viewportHeight / 2) - 20;
          
          // Small oscillation for "reading" effect
          const pulse = Math.sin(self.progress * Math.PI * 2) * 3;
          
          gsap.to(cardRef.current, {
            x: targetX + pulse,
            y: targetY,
            rotateX: 0,
            rotateY: -15,
            rotateZ: -5,
            scale: 0.85,
            duration: 0,
          });
        },
      });

      // Section 3: Wallet - card slides into wallet
      ScrollTrigger.create({
        trigger: "#wallet-section",
        start: "top 80%",
        end: "center center",
        scrub: 0.7,
        onEnter: () => setIsGlowing(false),
        onUpdate: (self) => {
          if (!cardRef.current || !walletRef.current) return;
          const progress = self.progress;
          
          const walletRect = walletRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          // Start position (from phone area)
          const startX = -200;
          const startY = -50;
          
          // Target: center of wallet slot
          const targetX = (walletRect.left + walletRect.width / 2 - viewportWidth / 2);
          const targetY = (walletRect.top + walletRect.height / 2 - viewportHeight / 2) + 30;
          
          gsap.to(cardRef.current, {
            x: startX + (targetX - startX) * progress,
            y: startY + (targetY - startY) * progress,
            rotateX: 0 + 25 * progress,
            rotateY: -15 + 15 * progress,
            rotateZ: -5 + 5 * progress,
            scale: 0.85 - 0.15 * progress,
            duration: 0,
          });
        },
      });

      // Section 3b: Stay in wallet
      ScrollTrigger.create({
        trigger: "#wallet-section",
        start: "center center",
        end: "bottom 20%",
        scrub: 0.5,
        onUpdate: (self) => {
          if (!cardRef.current || !walletRef.current) return;
          
          const walletRect = walletRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          const targetX = (walletRect.left + walletRect.width / 2 - viewportWidth / 2);
          const targetY = (walletRect.top + walletRect.height / 2 - viewportHeight / 2) + 30;
          
          gsap.to(cardRef.current, {
            x: targetX,
            y: targetY,
            rotateX: 25,
            rotateY: 0,
            rotateZ: 0,
            scale: 0.7,
            duration: 0,
          });
        },
      });

      // Section 4: Tree - sustainability
      ScrollTrigger.create({
        trigger: "#tree-section",
        start: "top 80%",
        end: "center center",
        scrub: 0.7,
        onUpdate: (self) => {
          if (!cardRef.current || !treeRef.current) return;
          const progress = self.progress;
          
          const treeRect = treeRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          // Start from wallet position
          const startX = 0;
          const startY = 100;
          
          // Target: right of tree
          const targetX = (treeRect.right - viewportWidth / 2) + 60;
          const targetY = (treeRect.top + treeRect.height / 2 - viewportHeight / 2);
          
          gsap.to(cardRef.current, {
            x: startX + (targetX - startX) * progress,
            y: startY + (targetY - startY) * progress,
            rotateX: 25 - 20 * progress,
            rotateY: 0 + 15 * progress,
            rotateZ: 0 + 8 * progress,
            scale: 0.7 + 0.1 * progress,
            duration: 0,
          });
        },
      });

      // Section 4b: Stay at tree
      ScrollTrigger.create({
        trigger: "#tree-section",
        start: "center center",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          if (!cardRef.current || !treeRef.current) return;
          
          const treeRect = treeRef.current.getBoundingClientRect();
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          const targetX = (treeRect.right - viewportWidth / 2) + 60;
          const targetY = (treeRect.top + treeRect.height / 2 - viewportHeight / 2);
          
          gsap.to(cardRef.current, {
            x: targetX,
            y: targetY,
            rotateX: 5,
            rotateY: 15,
            rotateZ: 8,
            scale: 0.8,
            duration: 0,
          });
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Fixed Card that follows scroll */}
      <div
        ref={cardRef}
        className={`fixed top-1/2 left-1/2 z-50 pointer-events-none perspective-1000 transition-shadow duration-300 ${
          isGlowing ? "drop-shadow-[0_0_30px_rgba(26,86,219,0.8)]" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <GolldCard3D />
        {/* Glow effect overlay */}
        {isGlowing && (
          <div
            className="absolute inset-0 rounded-2xl animate-pulse pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(26,86,219,0.4) 0%, transparent 70%)",
              transform: "scale(1.3)",
            }}
          />
        )}
      </div>
      
      {/* Hero Section */}
      <section id="hero-section" className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div 
            className="w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, #1A56DB 0%, transparent 70%)" }}
          />
        </div>
      </section>
      
      {/* Connect/Phone Section */}
      <section id="connect-section" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conecte com <span className="text-gradient-blue">um Toque</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tecnologia NFC para compartilhamento instantâneo
            </p>
          </div>
          
          {/* Phone visual */}
          <div 
            ref={phoneRef}
            id="phone-element"
            className="relative w-[200px] h-[400px] rounded-[40px] flex-shrink-0"
            style={{
              background: "linear-gradient(145deg, #272D3A 0%, #1A1F2C 100%)",
              boxShadow: "0 40px 120px -30px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255,255,255,0.1)",
              border: "3px solid #3F83F8",
            }}
          >
            {/* Screen */}
            <div className="absolute top-3 left-3 right-3 bottom-3 rounded-[32px] overflow-hidden bg-golldrine-bg">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-golldrine-card rounded-b-xl" />
              
              {/* NFC waves */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full opacity-20 animate-ping" style={{ background: "radial-gradient(circle, #1A56DB 0%, transparent 70%)" }} />
                  <div className="absolute inset-2 rounded-full opacity-30 animate-ping" style={{ background: "radial-gradient(circle, #1A56DB 0%, transparent 70%)", animationDelay: "0.2s" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-primary" strokeWidth="1.5">
                      <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a8.25 8.25 0 0113.788 0M1.924 8.674a11.25 11.25 0 0120.152 0" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="mt-4 text-primary text-sm font-medium">Aproxime seu cartão</p>
                <p className="mt-1 text-muted-foreground text-xs">GolldCard detectado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wallet Section */}
      <section id="wallet-section" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Wallet visual */}
          <div 
            ref={walletRef}
            id="wallet-element"
            className="relative w-[380px] h-[260px] rounded-3xl flex-shrink-0"
            style={{
              background: "linear-gradient(145deg, #1A1F2C 0%, #111827 100%)",
              boxShadow: "0 30px 100px -30px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255,255,255,0.05)",
              transform: "perspective(1000px) rotateX(10deg)",
            }}
          >
            {/* Leather texture */}
            <div className="absolute inset-0 rounded-3xl opacity-10" style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }} />
            
            {/* Card slot */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[200px] rounded-2xl"
              style={{
                background: "linear-gradient(180deg, #0A0F16 0%, #111827 100%)",
                boxShadow: "inset 0 5px 20px rgba(0,0,0,0.8)",
                border: "1px solid rgba(26, 86, 219, 0.2)",
              }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/50 uppercase tracking-widest">
                Slot
              </div>
            </div>
            
            {/* Stitching */}
            <div className="absolute inset-4 rounded-2xl pointer-events-none" style={{ border: "2px dashed rgba(26, 86, 219, 0.2)" }} />
            
            {/* Clasp */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-5 rounded-full bg-gradient-blue" />
          </div>
          
          {/* Text */}
          <div className="max-w-md text-right">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Guarde com <span className="text-gradient-blue">Elegância</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Seu cartão premium, sempre à mão
            </p>
          </div>
        </div>
      </section>
      
      {/* Tree Section */}
      <section id="tree-section" className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pense <span className="text-gradient-blue">Sustentável</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Menos papel, mais conexões
            </p>
          </div>
          
          {/* Tree visual */}
          <div 
            ref={treeRef}
            id="tree-element"
            className="relative w-[250px] h-[350px] flex-shrink-0"
          >
            {/* Trunk */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-24 rounded-t-lg" style={{
              background: "linear-gradient(90deg, #133FA3 0%, #1A56DB 50%, #133FA3 100%)",
            }} />
            
            {/* Foliage layers */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-0 h-0" style={{
              borderLeft: "100px solid transparent",
              borderRight: "100px solid transparent",
              borderBottom: "140px solid #1A56DB",
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
            }} />
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-0 h-0" style={{
              borderLeft: "80px solid transparent",
              borderRight: "80px solid transparent",
              borderBottom: "110px solid #3F83F8",
            }} />
            <div className="absolute bottom-44 left-1/2 -translate-x-1/2 w-0 h-0" style={{
              borderLeft: "55px solid transparent",
              borderRight: "55px solid transparent",
              borderBottom: "80px solid #1A56DB",
            }} />
            
            {/* Decorative dots */}
            <div className="absolute bottom-28 left-[30%] w-2 h-2 rounded-full bg-white/60" />
            <div className="absolute bottom-40 right-[28%] w-1.5 h-1.5 rounded-full bg-white/50" />
            <div className="absolute bottom-52 left-[40%] w-2 h-2 rounded-full bg-white/60" />
            
            {/* Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <p className="text-xs text-primary uppercase tracking-[0.25em]">Sustentabilidade</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollJourneyCard;
