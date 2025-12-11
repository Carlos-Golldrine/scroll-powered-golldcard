import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GolldCard3D from "./GolldCard3D";
import Wallet3D from "./Wallet3D";
import Phone3D from "./Phone3D";
import Tree3D from "./Tree3D";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
      });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
        },
      });

      // Phase 1: Card moves to wallet
      tl.to(cardRef.current, {
        x: -100,
        y: 150,
        rotateX: 30,
        rotateY: 20,
        rotateZ: -10,
        scale: 0.8,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(walletRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      }, "<0.3")
      .to(text1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, "<0.2")
      
      // Phase 2: Card moves to phone
      .to(cardRef.current, {
        x: 100,
        y: 0,
        rotateX: 0,
        rotateY: -15,
        rotateZ: 0,
        scale: 0.6,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(walletRef.current, {
        opacity: 0,
        x: -200,
        duration: 0.5,
      }, "<")
      .to(text1Ref.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
      }, "<")
      .to(phoneRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.5,
      }, "<0.3")
      .to(text2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, "<0.2")
      
      // Phase 3: Card moves to tree
      .to(cardRef.current, {
        x: -80,
        y: -50,
        rotateX: 5,
        rotateY: 10,
        rotateZ: 5,
        scale: 0.7,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(phoneRef.current, {
        opacity: 0,
        x: 200,
        duration: 0.5,
      }, "<")
      .to(text2Ref.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
      }, "<")
      .to(treeRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.5,
      }, "<0.3")
      .to(text3Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, "<0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-background overflow-hidden"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(0, 0%, 6%) 0%, hsl(0, 0%, 3%) 100%)",
        }}
      />
      
      {/* Animated elements container */}
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        {/* The Card - always visible, moving with scroll */}
        <div
          ref={cardRef}
          className="absolute z-30 preserve-3d"
          style={{
            transform: "perspective(1000px)",
          }}
        >
          <GolldCard3D />
        </div>
        
        {/* Wallet */}
        <div
          ref={walletRef}
          className="absolute z-20 opacity-0"
          style={{
            transform: "scale(0.8)",
          }}
        >
          <Wallet3D />
        </div>
        
        {/* Phone */}
        <div
          ref={phoneRef}
          className="absolute z-20 opacity-0"
          style={{
            transform: "translateX(200px) scale(0.8)",
          }}
        >
          <Phone3D />
        </div>
        
        {/* Tree */}
        <div
          ref={treeRef}
          className="absolute z-20 opacity-0"
          style={{
            transform: "translateX(150px) scale(0.8)",
          }}
        >
          <Tree3D />
        </div>
      </div>
      
      {/* Text overlays */}
      <div className="absolute inset-0 flex items-end justify-center pb-32 pointer-events-none">
        {/* Text for wallet phase */}
        <div
          ref={text1Ref}
          className="absolute text-center opacity-0"
          style={{ transform: "translateY(20px)" }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Guarde com <span className="text-gradient-gold">Elegância</span>
          </h2>
          <p className="text-muted-foreground">Seu cartão premium, sempre à mão</p>
        </div>
        
        {/* Text for phone phase */}
        <div
          ref={text2Ref}
          className="absolute text-center opacity-0"
          style={{ transform: "translateY(20px)" }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Conecte com <span className="text-gradient-gold">um Toque</span>
          </h2>
          <p className="text-muted-foreground">Tecnologia NFC para compartilhamento instantâneo</p>
        </div>
        
        {/* Text for tree phase */}
        <div
          ref={text3Ref}
          className="absolute text-center opacity-0"
          style={{ transform: "translateY(20px)" }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Pense <span className="text-gradient-gold">Sustentável</span>
          </h2>
          <p className="text-muted-foreground">Menos papel, mais conexões</p>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <div className="w-2 h-2 rounded-full bg-gold" />
        <div className="w-2 h-2 rounded-full bg-muted" />
        <div className="w-2 h-2 rounded-full bg-muted" />
      </div>
    </section>
  );
};

export default ScrollAnimationSection;
