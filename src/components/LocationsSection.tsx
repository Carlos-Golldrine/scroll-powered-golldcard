import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Star, Clock, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    name: "Clínica Odonto Premium",
    address: "Av. Paulista, 1578 - São Paulo, SP",
    rating: 4.9,
    reviews: 127,
    status: "Aberto",
    hours: "08:00 - 18:00",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=200&fit=crop"
  },
  {
    name: "Studio Pilates Corpo & Mente",
    address: "R. Oscar Freire, 890 - São Paulo, SP",
    rating: 5.0,
    reviews: 89,
    status: "Aberto",
    hours: "06:00 - 21:00",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=200&fit=crop"
  },
  {
    name: "Consultoria Mendes & Associados",
    address: "R. Funchal, 418 - São Paulo, SP",
    rating: 4.8,
    reviews: 56,
    status: "Fechado",
    hours: "Abre às 09:00",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop"
  }
];

const LocationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-brand-dark">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/20 text-brand-blue text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            Empresas que confiam
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Presente em todo o <span className="text-brand-orange">Brasil</span>
          </h2>
          <p className="text-brand-light/70">
            Mais de 300 empresas já automatizaram seu atendimento
          </p>
        </div>

        <div ref={cardsRef} className="space-y-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0"
            >
              {/* Map preview image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-3 flex items-center gap-1 text-white text-xs">
                  <MapPin className="w-3 h-3" />
                  <span className="font-medium">Ver no mapa</span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">
                    {location.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900">{location.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${i < Math.floor(location.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">({location.reviews})</span>
                </div>

                {/* Address */}
                <p className="text-gray-600 text-sm mb-3">{location.address}</p>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className={`text-sm font-medium ${location.status === 'Aberto' ? 'text-green-600' : 'text-red-500'}`}>
                    {location.status}
                  </span>
                  <span className="text-gray-500 text-sm">· {location.hours}</span>
                </div>

                {/* Integration badge */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-500">Agente IA ativo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps style footer */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-brand-light/50 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Dados atualizados em tempo real</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
