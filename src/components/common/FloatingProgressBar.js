import { motion } from "framer-motion";

export const FloatingProgressBar = ({ scrollYProgress }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#eaaf47] transform-gpu z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
};
