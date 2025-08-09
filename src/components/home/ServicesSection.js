import { motion } from "framer-motion";
import { useState } from "react";
import { services } from '../../data/services';
import { ServiceCard } from './ServiceCard';
import { containerVariants, itemVariants } from '../../utils/animations';

export const ServicesSection = ({ servicesRef, servicesInView }) => {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section id="services" ref={servicesRef} className="py-20 px-6 bg-white text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-[#001362] mb-8">Our Services</h3>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
      >
        {services.map((service, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <ServiceCard
              service={service}
              index={idx}
              expandedService={expandedService}
              setExpandedService={setExpandedService}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
