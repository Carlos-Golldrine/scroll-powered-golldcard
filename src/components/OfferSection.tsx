import { useEffect, useState } from "react";
import { Clock, MessageCircle, Zap } from "lucide-react";

const STORAGE_KEY = "offer_end_time";

const getOrCreateEndTime = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const storedTime = parseInt(stored, 10);
    if (storedTime > Date.now()) {
      return storedTime;
    }
  }
  const newTime = Date.now() + 3 * 60 * 60 * 1000;
  localStorage.setItem(STORAGE_KEY, newTime.toString());
  return newTime;
};

const calculateTimeLeft = (endTime: number) => {
  const difference = endTime - Date.now();
  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

const OfferSection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero aproveitar a promoção do Agente de IA.";
  
  const [endTime] = useState(() => getOrCreateEndTime());
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endTime);
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
        localStorage.removeItem(STORAGE_KEY);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-20 px-6 bg-brand-darker relative overflow-hidden">
      {/* Orange glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px]" />
      
      <div className="max-w-lg mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Oferta Especial
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Promoção válida por{" "}
            <span className="text-brand-orange">tempo limitado</span>
          </h2>
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Min" },
            { value: timeLeft.seconds, label: "Seg" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-brand-orange flex items-center justify-center mb-2 animate-pulse-glow">
                <span className="text-3xl font-bold text-white">
                  {formatNumber(item.value)}
                </span>
              </div>
              <span className="text-sm text-brand-light/70">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-brand-light/70">
            <Clock className="w-5 h-5" />
            <span>A oferta expira em breve</span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary text-lg w-full justify-center sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            Garantir Meu Chat Bot Agora
          </a>

          <p className="text-sm text-muted-foreground">
            Vagas limitadas para implementação este mês
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;