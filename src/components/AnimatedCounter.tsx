import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const [count, setCount] = useState(300);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        if (!hasStarted) {
          setHasStarted(true);
          // Initial burst: add 2 quickly
          setTimeout(() => setCount(prev => prev + 1), 500);
          setTimeout(() => setCount(prev => prev + 1), 1000);
        }
      }
    });

    return () => trigger.kill();
  }, [hasStarted]);

  // Increment every 30 seconds after initial burst
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 30000);

    return () => clearInterval(interval);
  }, [hasStarted]);

  // Animate counter on change
  useEffect(() => {
    if (counterRef.current) {
      gsap.fromTo(
        counterRef.current,
        { scale: 1.2, color: "#FF7700" },
        { scale: 1, color: "#ffffff", duration: 0.3, ease: "power2.out" }
      );
    }
  }, [count]);

  return (
    <div ref={sectionRef} className="py-12 px-6 bg-brand-darker">
      <div className="max-w-lg mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-brand-orange/10 border border-brand-orange/30 rounded-2xl px-8 py-6">
          <TrendingUp className="w-8 h-8 text-brand-orange" />
          <div className="text-left">
            <span ref={counterRef} className="text-4xl sm:text-5xl font-bold text-white">
              +{count}
            </span>
            <p className="text-brand-light/70 text-sm mt-1">vendas realizadas com nosso agente</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;