import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20 px-6 bg-[#fff4db] text-center"
      whileInView={{ y: [50, 0] }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h3 
        className="text-3xl font-semibent text-[#001362] mb-6"
        whileInView={{ scale: [0.8, 1.1, 1] }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h3>
      <motion.p 
        className="mb-4 text-[#001362]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We'd love to hear from you. Reach out for a free consultation or service quote.
      </motion.p>
      <Link to="/contact-details">
        <motion.button 
          className="bg-[#001362] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.button>
      </Link>
    </motion.section>
  );
};
