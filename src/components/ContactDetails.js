import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function ContactDetails() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001362] font-sans scroll-smooth">
      <Helmet>
        <title>Stretch Ceiling, Fitout, Renovation, Landscaping Services Dubai | Noor Al Mufaza</title>
        <meta name="description" content="Contact Noor Al Mufaza for expert renovation, fitout, landscaping, and MEP services in Dubai." />
        <meta name="keywords" content="Noor Al Mufaza, technical services, interior maintenance, stretch ceiling Dubai, fitout contractors Dubai, home renovation Dubai, kitchen renovation Dubai, bathroom renovation Dubai, MEP services Dubai, landscaping Dubai, garden renovation Dubai, tiling services Dubai, plumbing services Dubai, wooden flooring Dubai, custom cabinets Dubai" />
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
      <header className="flex items-center justify-between p-6 shadow-md bg-[#e3ecfa]">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Noor Al Mufaza Logo" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-2xl font-bold">Noor Al Mufaza</h1>
            <p className="text-sm text-[#001362]">Technical Services LLC</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#eaaf47] transition">Home</Link>
        </nav>
      </header>

      {/* Main Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-[#e3ecfa] via-white to-[#fff8eb]"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          We'd love to hear from you! Contact us for any service inquiries, consultations, or quotes.
        </p>

        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg grid gap-6 text-left text-[#001362]">
          <div>
            <h4 className="text-lg font-semibold mb-1">Phone Numbers:</h4>
            <p className="hover:text-[#eaaf47] transition">
              <a href="tel:+971545933287">+971 54 593 3287</a>
            </p>
            <p className="hover:text-[#eaaf47] transition">
              <a href="tel:+971581473035">+971 58 147 3035</a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-1">Email:</h4>
            <p className="hover:text-[#eaaf47] transition">
              <a href="mailto:nooralmufaza@gmail.com">nooralmufaza@gmail.com</a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-1">Office Location:</h4>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>

        {/* Instagram Button */}
        <a href="https://www.instagram.com/nooralmufaza" target="_blank" rel="noopener noreferrer" className="mt-8">
          <button className="bg-[#eaaf47] text-[#001362] px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">
            Visit our Instagram
          </button>
        </a>

        {/* Back to Home Button */}
        <Link to="/" className="mt-6">
          <button className="bg-[#001362] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
            Back to Home
          </button>
        </Link>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#001362] text-white text-center p-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} Noor Al Mufaza Technical Services LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
