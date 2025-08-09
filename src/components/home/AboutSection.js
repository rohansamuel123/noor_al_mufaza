import { motion } from "framer-motion";

export const AboutSection = ({ aboutRef, aboutInView }) => {
  return (
    <motion.section 
      id="about" 
      ref={aboutRef}
      className="py-20 px-6 bg-[#e3ecfa] text-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #eaaf47 0%, transparent 50%), radial-gradient(circle at 75% 75%, #001362 0%, transparent 50%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.h3 
          className="text-3xl font-semibold text-[#001362] mb-6"
          whileInView={{ scale: [0.8, 1.1, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h3>
        <motion.p 
          className="max-w-3xl mx-auto text-[#001362] text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Noor Al Mufaza Technical Services LLC is dedicated to providing top-tier interior maintenance and technical solutions. With a team of experienced professionals and a passion for quality, we ensure your property receives the best care possible.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};
