import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import avatarCarlos from "@/assets/avatar-carlos.jpg";
import avatarAna from "@/assets/avatar-ana.jpg";
import avatarRoberto from "@/assets/avatar-roberto.jpg";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Dr. Carlos Silva",
    role: "Clínica Odontológica",
    text: "Reduzi 70% das faltas em consultas. O agente lembra meus pacientes automaticamente.",
    rating: 5,
    timeAgo: "2 semanas atrás",
    avatar: avatarCarlos
  },
  {
    name: "Ana Paula",
    role: "Estúdio de Pilates",
    text: "Não preciso mais ficar cobrando alunos. O agente faz isso de forma super educada.",
    rating: 5,
    timeAgo: "1 mês atrás",
    avatar: avatarAna
  },
  {
    name: "Roberto Mendes",
    role: "Consultoria Financeira",
    text: "Meu faturamento aumentou 40% desde que automatizei o agendamento.",
    rating: 5,
    timeAgo: "3 semanas atrás",
    avatar: avatarRoberto
  }
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const SocialProofSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !cardsRef.current) return;

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

    const cards = cardsRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section className="py-20 px-6 bg-brand-darker">
      <div className="max-w-lg mx-auto">
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GoogleLogo />
            <span className="text-white font-medium">Google Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Quem usa, <span className="text-brand-orange">recomenda</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-brand-light/60">baseado em 47 avaliações</span>
          </div>
        </div>

        <div ref={cardsRef} className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white shadow-lg opacity-0"
            >
              {/* Header with avatar, name and Google logo */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.timeAgo}</p>
                  </div>
                </div>
                <GoogleLogo />
              </div>
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                {testimonial.text}
              </p>
              
              {/* Business type tag */}
              <span className="inline-block text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {testimonial.role}
              </span>
            </div>
          ))}
        </div>

        {/* View all reviews link */}
        <div className="text-center mt-6">
          <a href="#" className="text-brand-orange hover:text-brand-orange/80 text-sm font-medium transition-colors">
            Ver todas as avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;