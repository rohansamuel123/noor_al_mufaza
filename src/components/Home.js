import { motion } from "framer-motion";
import "../App.css"; // Ensure Tailwind CSS is imported

export default function Home() {
  const services = [
    {
      title: "Fit-out",
      image: "/images/fitout.jpg"
    },
    {
      title: "MEP",
      image: "/images/mep.jpg"
    },
    {
      title: "Glass and Aluminium Installation",
      image: "/images/glass-aluminium.jpg"
    },
    {
      title: "Painting",
      image: "/images/painting.jpg"
    },
    {
      title: "Floor and Wall Tiling",
      image: "/images/tiling.jpg"
    },
    {
      title: "Carpentry and Wood Works",
      image: "/images/carpentry.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#001362] font-sans scroll-smooth">
      <header className="flex items-center justify-between p-6 shadow-md bg-[#e3ecfa]">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Noor A Mufaza Logo" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-2xl font-bold">Noor Al Mufaza</h1>
            <p className="text-sm text-[#001362]">Technical Services LLC</p>
          </div>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-[#eaaf47] transition">Services</a>
          <a href="#about" className="hover:text-[#eaaf47] transition">About</a>
          <a href="#contact" className="hover:text-[#eaaf47] transition">Contact</a>
        </nav>
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
        <button className="bg-[#001362] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
          Get in Touch
        </button>
      </section>

      <footer className="bg-[#001362] text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Noor Al Mufaza Technical Services LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
