import { motion } from "framer-motion";
import { COMPANY_INFO } from '../../data/constants';
import { floatingAnimation } from '../../utils/animations';

export const HeroSection = ({ heroRef, heroInView, backgroundY, textY }) => {
  return (
    <motion.section
      ref={heroRef}
      style={{ y: backgroundY }}
      className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-[#e3ecfa] via-white to-[#fff8eb] relative overflow-hidden"
    >
      {/* Floating elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-[#eaaf47] rounded-full opacity-20"
        animate={floatingAnimation.animate}
        transition={floatingAnimation.transition}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-[#001362] rounded-full opacity-10"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={heroInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {COMPANY_INFO.heroTitle}
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl text-[#001362] mb-8 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {COMPANY_INFO.description}
        </motion.p>

        <motion.a 
          href="#services" 
          className="bg-[#eaaf47] text-[#001362] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Services
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
