import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      className="bg-[#001362] text-white text-center p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p>&copy; {new Date().getFullYear()} Noor Al Mufaza Technical Services LLC. All rights reserved.</p>
    </motion.footer>
  );
};
