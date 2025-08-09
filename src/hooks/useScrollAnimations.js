import { useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, threshold: 0.1 });
  const aboutInView = useInView(aboutRef, { once: true, threshold: 0.3 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return {
    scrollYProgress,
    heroRef,
    servicesRef,
    aboutRef,
    heroInView,
    servicesInView,
    aboutInView,
    backgroundY,
    textY
  };
};
