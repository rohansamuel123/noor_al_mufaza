import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function ContactDetails() {
  // WhatsApp number and contact function
  const whatsappNumber = "971544027535";

  const handleWhatsAppContact = () => {
    const message = `Hi Noor Al Mufaza! I would like to inquire about your services. Please contact me. Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001362] font-sans scroll-smooth">
      <Helmet>
        <title>Stretch Ceiling, Fitout, Renovation, Landscaping Services Dubai | Noor Al Mufaza</title>
        <meta name="description" content="Contact Noor Al Mufaza for expert renovation, fitout, landscaping, and MEP services in Dubai." />
        <meta name="keywords" content="Noor Al Mufaza, technical services, home renovation, interior maintenance, property maintenance, stretch ceiling, fitout contractors, kitchen renovation, bathroom renovation, MEP services, landscaping, garden renovation, tiling services, plumbing services, wooden flooring, custom cabinets, civil works, Dubai" />
        <link rel="canonical" href="https://www.nooralmufaza.com/contact" />
      </Helmet>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Noor Al Mufaza Technical Services",
              "url": "https://www.nooralmufaza.com",
              "logo": "https://www.nooralmufaza.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971 545933287",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.instagram.com/nooralmufaza"
              ]
            }
          `}
        </script>
      </Helmet>
      
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between p-6 shadow-md bg-[#e3ecfa]"
      >
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img 
            src="/logo.png" 
            alt="Noor Al Mufaza Logo" 
            className="h-12 w-12 object-contain"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          />
          <div>
            <h1 className="text-2xl font-bold">Noor Al Mufaza</h1>
            <p className="text-sm text-[#001362]">Technical Services LLC</p>
          </div>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#eaaf47] transition relative group">
            Home
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eaaf47] group-hover:w-full transition-all duration-300"
            />
          </Link>
        </nav>
      </motion.header>

      {/* Main Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-[#e3ecfa] via-white to-[#fff8eb]"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl max-w-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We'd love to hear from you! Contact us for any service inquiries, consultations, or quotes.
        </motion.p>

        <motion.div 
          className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg grid gap-6 text-left text-[#001362]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-1">Phone Numbers:</h4>
            <motion.p className="hover:text-[#eaaf47] transition" whileHover={{ x: 5 }}>
              <a href="tel:+971544027535">+971 54 402 7535</a>
            </motion.p>
            <motion.p className="hover:text-[#eaaf47] transition" whileHover={{ x: 5 }}>
              <a href="tel:+971545933287">+971 54 593 3287</a>
            </motion.p>
            <motion.p className="hover:text-[#eaaf47] transition" whileHover={{ x: 5 }}>
              <a href="tel:+971581473035">+971 58 147 3035</a>
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h4 className="text-lg font-semibold mb-1">Email:</h4>
            <motion.p className="hover:text-[#eaaf47] transition" whileHover={{ x: 5 }}>
              <a href="mailto:nooralmufaza@gmail.com">info@nooralmufaza.com</a>
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h4 className="text-lg font-semibold mb-1">Office Location:</h4>
            <p>Dubai, United Arab Emirates</p>
          </motion.div>
        </motion.div>

        {/* Social Media and Contact Buttons */}
        <motion.div 
          className="flex flex-col items-center space-y-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
        {/* Instagram Button */}
        <motion.a 
          href="https://www.instagram.com/nooralmufaza" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
    <button className="bg-[#eaaf47] text-[#001362] px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300 flex items-center space-x-2">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
      <span>Visit our Instagram</span>
    </button>
  </motion.a>

  {/* WhatsApp Button */}
  <motion.button
    onClick={handleWhatsAppContact}
    className="bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#20BA5A] transition duration-300 flex items-center space-x-2"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
    <span>Contact us on WhatsApp</span>
  </motion.button>
</motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <Link to="/" className="mt-6 inline-block">
            <motion.button 
              className="bg-[#001362] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-[#001362] text-white text-center p-4 mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <p>&copy; {new Date().getFullYear()} Noor Al Mufaza Technical Services LLC. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
