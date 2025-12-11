import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "stagger";

export const useScrollAnimation = (
  animation: AnimationType = "fadeUp",
  options?: {
    delay?: number;
    duration?: number;
    staggerAmount?: number;
  }
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const { delay = 0, duration = 0.8, staggerAmount = 0.1 } = options || {};

    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    };

    switch (animation) {
      case "fadeUp":
        fromVars = { opacity: 0, y: 50 };
        toVars = { ...toVars, opacity: 1, y: 0 };
        break;
      case "fadeLeft":
        fromVars = { opacity: 0, x: -50 };
        toVars = { ...toVars, opacity: 1, x: 0 };
        break;
      case "fadeRight":
        fromVars = { opacity: 0, x: 50 };
        toVars = { ...toVars, opacity: 1, x: 0 };
        break;
      case "scaleIn":
        fromVars = { opacity: 0, scale: 0.8 };
        toVars = { ...toVars, opacity: 1, scale: 1 };
        break;
      case "stagger":
        const children = element.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration,
            stagger: staggerAmount,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
        return;
    }

    gsap.fromTo(element, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, options]);

  return ref;
};

export default useScrollAnimation;