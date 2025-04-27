import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContactDetails() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#001362] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6 shadow-md bg-[#e3ecfa]">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Noor Al Mufaza Logo" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-2xl font-bold">Noor Al Mufaza</h1>
            <p className="text-sm text-[#001362]">Technical Services LLC</p>
          </div>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-[#eaaf47] transition">Home</Link>
          <a href="#services" className="hover:text-[#eaaf47] transition">Services</a>
          <a href="#about" className="hover:text-[#eaaf47] transition">About</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-br from-[#e3ecfa] via-white to-[#fff8eb]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          We're here to help with all your technical service needs. Reach out to us!
        </p>

        <div className="bg-[#e3ecfa] rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto text-left space-y-4">
          <div>
            <h3 className="text-xl font-bold text-[#eaaf47] mb-2">Phone Numbers</h3>
            <p className="text-[#001362]">+971 54 593 3287</p>
            <p className="text-[#001362]">+971 58 147 3035</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#eaaf47] mb-2">Email</h3>
            <p className="text-[#001362]">nooralmufaza@gmail.com</p>
          </div>
        </div>

        {/* Back to Home Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/"
            className="mt-8 inline-block bg-[#001362] text-white px-8 py-3 rounded-full hover:bg-blue-800 transition relative overflow-hidden"
          >
            <span className="relative z-10">Back to Home</span>
            <span className="absolute inset-0 rounded-full bg-[#eaaf47] opacity-0 hover:opacity-20 transition"></span>
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#001362] text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Noor Al Mufaza Technical Services LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
