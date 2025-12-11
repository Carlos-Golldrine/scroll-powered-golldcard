import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  MessageSquare, 
  Calendar, 
  Bell, 
  DollarSign, 
  FileText, 
  Mic, 
  UserPlus, 
  Handshake,
  Clock,
  Brain
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: MessageSquare,
    title: "Fala humanizada 24h",
    description: "Atende seus clientes de forma natural e profissional, pelo WhatsApp, a qualquer hora do dia ou da noite."
  },
  {
    icon: Calendar,
    title: "Agendamento automático",
    description: "Conecta direto com a agenda do doutor e equipe, marcando consultas sem intervenção humana."
  },
  {
    icon: Bell,
    title: "Lembretes inteligentes",
    description: "Lembra o cliente um dia antes e no dia da consulta, confirmando presença automaticamente."
  },
  {
    icon: DollarSign,
    title: "Cobranças educadas",
    description: "Realiza cobranças de forma profissional, avisa sobre vencimentos e confirma pagamentos."
  },
  {
    icon: Handshake,
    title: "Negocia por você",
    description: "Negocia condições de pagamento e resolve pendências financeiras com seus clientes."
  },
  {
    icon: UserPlus,
    title: "Prospecção de clientes",
    description: "Realiza prospecção ativa de novos clientes, aumentando sua base de forma automatizada."
  },
  {
    icon: FileText,
    title: "Emissão de notas fiscais",
    description: "Coleta informações, envia PDFs e organiza tudo para você só revisar e confirmar."
  },
  {
    icon: Brain,
    title: "Responde perguntas",
    description: "Responde dúvidas simples e complexas, envia checklists de documentos e guias."
  },
  {
    icon: Mic,
    title: "Escuta áudios",
    description: "Entende e responde mensagens de áudio, facilitando a comunicação com seus clientes."
  },
  {
    icon: Clock,
    title: "Sem exaustão",
    description: "Nunca cansa, nunca fica estressado e nunca precisa de férias. Atendimento consistente sempre."
  }
];

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !itemsRef.current) return;

    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
        }
      }
    );

    const items = itemsRef.current.children;
    gsap.fromTo(items,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-brand-dark">
      <div className="max-w-lg mx-auto">
        <h2 ref={titleRef} className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 opacity-0">
          Seu assistente virtual{" "}
          <span className="text-brand-orange">completo</span>
        </h2>
        <p ref={subtitleRef} className="text-center text-brand-light/70 mb-12 opacity-0">
          Um agente de IA que cuida de tudo pelo WhatsApp
        </p>

        <div ref={itemsRef} className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-brand-darker/50 border border-white/5 transition-all duration-300 hover:border-brand-orange/30 opacity-0"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {benefit.title}
                </h3>
                <p className="text-brand-light/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;