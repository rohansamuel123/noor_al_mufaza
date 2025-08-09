import { motion } from "framer-motion";
import { useState } from "react";
import { COMPANY_INFO } from '../../data/constants';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { MobileMenu } from '../ui/MobileMenu';
import { headerSlideIn, logoHover, navItemHover } from '../../utils/animations';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={headerSlideIn.initial}
      animate={headerSlideIn.animate}
      transition={headerSlideIn.transition}
      className="flex items-center justify-between p-6 shadow-md bg-[#e3ecfa] relative z-40"
    >
      <motion.div 
        className="flex items-center space-x-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img 
          src="/logo.png" 
          alt="Noor Al Mufaza Technical Services LLC logo Dubai" 
          className="h-12 w-12 object-contain"
          whileHover={logoHover.whileHover}
          transition={logoHover.transition}
        />
        <div>
          <h1 className="text-2xl font-bold">{COMPANY_INFO.name}</h1>
          <p className="text-sm text-[#001362]">{COMPANY_INFO.tagline}</p>
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="space-x-6 hidden md:flex items-center">
        {['Services', 'About', 'Contact'].map((item, index) => (
          <motion.a 
            key={item}
            href={item === 'Contact' ? '/contact-details' : `#${item.toLowerCase()}`}
            className="hover:text-[#eaaf47] transition relative"
            whileHover={navItemHover.whileHover}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {item}
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eaaf47]"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
        
        <WhatsAppButton />
      </nav>

      {/* Mobile Menu Button */}
      <motion.button 
        className="md:hidden focus:outline-none" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg 
          className="w-8 h-8 text-[#001362]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24"
          animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </motion.svg>
      </motion.button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </motion.header>
  );
};
