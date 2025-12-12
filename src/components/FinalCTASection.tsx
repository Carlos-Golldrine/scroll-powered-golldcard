import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FinalCTASection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o Agente de IA.";
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(sectionRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section className="py-20 px-6 bg-brand-dark">
      <div ref={sectionRef} className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 opacity-0">
          Pronto para{" "}
          <span className="text-brand-orange">transformar</span>{" "}
          seu negócio?
        </h2>
        
        <p className="text-brand-light/70 mb-8 leading-relaxed opacity-0">
          Pare de perder clientes por falta de atendimento. 
          Deixe a IA trabalhar por você enquanto você foca no que importa.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-brand-orange text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-orange-glow opacity-0"
        >
          <MessageCircle className="w-7 h-7" />
          Solicitar um Orçamento Agora
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>

        <p className="text-sm text-muted-foreground mt-6 opacity-0">
          Resposta em até 5 minutos • Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;