import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContactDetails() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001362] font-sans scroll-smooth">
      
      {/* Header */}
      <header className="flex items-center justify-between p-6 shadow-md bg-[#e3ecfa]">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Noor A Mufaza Logo" className="h-12 w-12 object-contain" />
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
              <a href="tel:+971501234567">+971 50 123 4567</a>
            </p>
            <p className="hover:text-[#eaaf47] transition">
              <a href="tel:+971559876543">+971 55 987 6543</a>
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

        <Link to="/" className="mt-10">
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
