import { MessageCircle, Bot, CalendarCheck, Smartphone } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Cliente envia mensagem",
    description: "Seu cliente manda uma mensagem pelo WhatsApp, a qualquer hora."
  },
  {
    icon: Bot,
    step: "02",
    title: "Agente responde de forma humanizada",
    description: "A IA conversa naturalmente, entende a necessidade e oferece soluções."
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Agenda, lembra e cobra",
    description: "O agente marca na agenda, envia lembretes e realiza cobranças automaticamente."
  },
  {
    icon: Smartphone,
    step: "04",
    title: "Você acompanha tudo",
    description: "Receba notificações e acompanhe pelo WhatsApp ou painel de controle."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-6 bg-brand-dark">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">
          Como <span className="text-gradient-blue">funciona</span>
        </h2>
        <p className="text-center text-brand-light/70 mb-12">
          Simples, rápido e eficiente
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-blue via-brand-orange to-brand-blue" />

          <div className="space-y-8">
            {steps.map((item, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Icon circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-darker border-2 border-brand-blue flex items-center justify-center z-10">
                  <item.icon className="w-5 h-5 text-brand-blue" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <span className="text-xs font-bold text-brand-orange tracking-wider">
                    PASSO {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-light/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;