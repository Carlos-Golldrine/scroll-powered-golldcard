import { MessageSquare, Calendar, Bell, DollarSign, UserCheck, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Conversa automaticamente",
    description: "Responde seus clientes de forma humanizada, 24 horas por dia, 7 dias por semana."
  },
  {
    icon: Calendar,
    title: "Agenda reunião/consulta",
    description: "Marca compromissos direto na sua agenda, sem você precisar fazer nada."
  },
  {
    icon: Bell,
    title: "Lembra clientes",
    description: "Envia lembretes automáticos para quem sempre esquece dos compromissos."
  },
  {
    icon: DollarSign,
    title: "Realiza cobranças",
    description: "Cobra de forma educada e profissional, sem constrangimentos."
  },
  {
    icon: UserCheck,
    title: "Reduz faltas",
    description: "Melhora drasticamente sua taxa de comparecimento."
  },
  {
    icon: TrendingUp,
    title: "Aumenta receita",
    description: "Automatiza processos e aumenta seu faturamento sem esforço."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 bg-brand-dark">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">
          Tudo que seu negócio precisa,{" "}
          <span className="text-gradient-blue">em um só agente</span>
        </h2>
        <p className="text-center text-brand-light/70 mb-12">
          Funcionalidades que transformam seu atendimento
        </p>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-brand-darker/50 border border-white/5 transition-all duration-300 hover:border-brand-blue/30"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-brand-blue" />
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