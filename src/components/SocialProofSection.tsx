import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Carlos Silva",
    role: "Clínica Odontológica",
    text: "Reduzi 70% das faltas em consultas. O agente lembra meus pacientes automaticamente.",
    rating: 5
  },
  {
    name: "Ana Paula",
    role: "Estúdio de Pilates",
    text: "Não preciso mais ficar cobrando alunos. O agente faz isso de forma super educada.",
    rating: 5
  },
  {
    name: "Roberto Mendes",
    role: "Consultoria Financeira",
    text: "Meu faturamento aumentou 40% desde que automatizei o agendamento.",
    rating: 5
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 px-6 section-dark">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">
          Quem usa, <span className="text-gradient-orange">recomenda</span>
        </h2>
        <p className="text-center text-brand-light/70 mb-12">
          Veja o que nossos clientes dizem
        </p>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-orange/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              
              <p className="text-brand-light/90 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-brand-light/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;