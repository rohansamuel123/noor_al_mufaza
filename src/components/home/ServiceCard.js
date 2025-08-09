import { motion } from "framer-motion";
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const ServiceCard = ({ service, index, expandedService, setExpandedService }) => {
  const { handleBookService } = useWhatsApp();

  return (
    <motion.div
      className="relative group cursor-pointer"
      onHoverStart={() => setExpandedService(index)}
      onHoverEnd={() => setExpandedService(null)}
      onClick={() => setExpandedService(expandedService === index ? null : index)}
    >
      <motion.div
        className="p-6 shadow-lg rounded-2xl bg-[#e3ecfa] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        whileHover={{ scale: 1.03, rotateY: 5 }}
        layout
      >
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#eaaf47] to-[#001362] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.img 
          src={service.image} 
          alt={`Professional ${service.title.toLowerCase()} services in Dubai by Noor Al Mufaza`} 
          className="w-full h-48 object-cover rounded-md mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.h4 
          className="text-xl font-bold text-[#eaaf47] mb-2"
          whileHover={{ scale: 1.1 }}
        >
          {service.title}
        </motion.h4>
        
        <p className="text-[#001362] text-sm mb-4">
          {service.description}
        </p>

        {/* Expanded content */}
        <motion.div
          initial={false}
          animate={{ 
            height: expandedService === index ? "auto" : 0,
            opacity: expandedService === index ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="border-t border-[#001362] border-opacity-20 pt-4">
            <ul className="text-left space-y-2 mb-4">
              {service.details.map((detail, detailIdx) => (
                <motion.li
                  key={detailIdx}
                  className="text-sm text-[#001362] flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: expandedService === index ? 1 : 0,
                    x: expandedService === index ? 0 : -10
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: detailIdx * 0.05
                  }}
                >
                  <span className="w-2 h-2 bg-[#eaaf47] rounded-full mr-2" />
                  {detail}
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleBookService(service.title);
              }}
              className="w-full bg-[#001362] text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Book Now via WhatsApp</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Always visible Book Now button for collapsed state */}
        {expandedService !== index && (
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              handleBookService(service.title);
            }}
            className="w-full bg-[#eaaf47] text-[#001362] py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center space-x-2 mt-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>Book Now</span>
          </motion.button>
        )}

        {/* Click indicator */}
        <motion.div
          className="absolute bottom-2 right-2 text-[#001362] opacity-50"
          animate={{ 
            rotate: expandedService === index ? 180 : 0,
            scale: expandedService === index ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
