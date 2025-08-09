import { Helmet } from "react-helmet";
import "../App.css";
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { SEO_DATA, SCHEMA_ORG } from '../data/constants';
import { Header } from '../components/common/Header';
import { FloatingProgressBar } from '../components/common/FloatingProgressBar';
import { Footer } from '../components/common/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { AboutSection } from '../components/home/AboutSection';
import { ContactSection } from '../components/home/ContactSection';

export default function Home() {
  const {
    scrollYProgress,
    heroRef,
    servicesRef,
    aboutRef,
    heroInView,
    servicesInView,
    aboutInView,
    backgroundY,
    textY
  } = useScrollAnimations();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001362] font-sans scroll-smooth overflow-x-hidden">
      <Helmet>
        <title>{SEO_DATA.title}</title>
        <meta name="description" content={SEO_DATA.description} />
        <meta name="keywords" content={SEO_DATA.keywords} />
        <link rel="canonical" href={SEO_DATA.canonicalUrl} />
      </Helmet>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(SCHEMA_ORG)}
        </script>
      </Helmet>

      <FloatingProgressBar scrollYProgress={scrollYProgress} />
      <Header />
      
      <HeroSection 
        heroRef={heroRef}
        heroInView={heroInView}
        backgroundY={backgroundY}
        textY={textY}
      />
      
      <ServicesSection 
        servicesRef={servicesRef}
        servicesInView={servicesInView}
      />
      
      <AboutSection 
        aboutRef={aboutRef}
        aboutInView={aboutInView}
      />
      
      <ContactSection />
      <Footer />
    </div>
  );
}
