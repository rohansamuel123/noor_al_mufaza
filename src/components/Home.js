import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useState } from "react"; // NEW
import "../App.css"; 
import { Link } from "react-router-dom"; 

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // NEW

  const services = [
    { title: "Fit-out", image: "/images/fitout.jpg" },
    { title: "MEP", image: "/images/mep.jpg" },
    { title: "Glass and Aluminium Installation", image: "/images/glass-aluminium.jpg" },
    { title: "Painting", image: "/images/painting.jpg" },
    { title: "Floor and Wall Tiling", image: "/images/tiling.jpg" },
    { title: "Carpentry and Wood Works", image: "/images/carpentry.jpg" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001362] font-sans scroll-smooth">
      <Helmet>
        <title>Noor Al Mufaza Technical Services</title>
        <meta name="description" content="Noor Al Mufaza offers top-tier technical and interior services including fit-out, MEP, painting, tiling, and carpentry." />
        <meta name="keywords" content="Noor Al Mufaza, technical services, interior maintenance, MEP, fit-out, carpentry" />
      </Helmet>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Noor Al Mufaza Technical Services",
              "url": "https://www.nooralmufaza.netlify.app",
              "logo": "https://www.nooralmufaza.netlify.app/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971 545933287",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.instagram.com/nooralmufaza",
              ]
            }
          `}
        </script>
      </Helmet>
 
      {/* Header */}
      <header className="flex items-center justify-between p-6 shadow-md bg-[#e3ecfa] relative">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Noor A Mufaza Logo" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-2xl font-bold">Noor Al Mufaza</h1>
            <p className="text-sm text-[#001362]">Technical Services LLC</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-[#eaaf47] transition">Services</a>
          <a href="#about" className="hover:text-[#eaaf47] transition">About</a>
          <a href="#contact" className="hover:text-[#eaaf47] transition">Contact</a>
        </nav>

        {/* Hamburger Menu */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-8 h-8 text-[#001362]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> // Hamburger
            )}
          </svg>
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-6 mt-2 w-40 bg-white rounded-lg shadow-lg flex flex-col items-start p-4 space-y-2 z-50"
          >
            <a href="#services" className="w-full text-left hover:text-[#eaaf47] transition" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="w-full text-left hover:text-[#eaaf47] transition" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="w-full text-left hover:text-[#eaaf47] transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </header>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-[#e3ecfa] via-white to-[#fff8eb]"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Your Property, Our Priority</h2>
        <p className="text-lg md:text-xl max-w-2xl text-[#001362] mb-8">
          High-quality interior maintenance and technical services tailored to your space.
        </p>
        <a href="#services" className="bg-[#eaaf47] text-[#001362] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
          Explore Services
        </a>
      </motion.section>

      <section id="services" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold text-[#001362] mb-8">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="p-6 shadow-lg rounded-2xl bg-[#e3ecfa] hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-bold text-[#eaaf47] mb-2">{service.title}</h4>
              <p className="text-[#001362] text-sm">Professional and reliable {service.title.toLowerCase()} services for homes and businesses.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-[#e3ecfa] text-center">
        <h3 className="text-3xl font-semibold text-[#001362] mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-[#001362]">
          Noor Al Mufaza Technical Services LLC is dedicated to providing top-tier interior maintenance and technical solutions. With a team of experienced professionals and a passion for quality, we ensure your property receives the best care possible.
        </p>
      </section>

      <section id="contact" className="py-20 px-6 bg-[#fff4db] text-center">
        <h3 className="text-3xl font-semibold text-[#001362] mb-6">Contact Us</h3>
        <p className="mb-4 text-[#001362]">We’d love to hear from you. Reach out for a free consultation or service quote.</p>
        <Link to="/contact-details">
          <button className="bg-[#001362] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
            Get in Touch
          </button>
        </Link>
      </section>

      <footer className="bg-[#001362] text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Noor Al Mufaza Technical Services LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
