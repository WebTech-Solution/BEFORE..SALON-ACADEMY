import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import Gallery from '../sections/Gallery';
import Statistics from '../sections/Statistics';
import Testimonials from '../sections/Testimonials';
import Appointment from '../sections/Appointment';
import Contact from '../sections/Contact';

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "BEFORE..SALON & ACADEMY",
    "image": "https://beforesalonacademy.com/images/og-image.jpg",
    "url": "https://beforesalonacademy.com",
    "telephone": "8293057700",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MS-28/1, Bengal Ambuja St, near Akash institute, City Center",
      "addressLocality": "Durgapur",
      "addressRegion": "West Bengal",
      "postalCode": "713216",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO
        title="Luxury Salon &amp; Makeup Studio in Durgapur"
        description="Experience premium hair, skincare, and bridal makeup services at BEFORE..SALON & ACADEMY &amp; Makeup Studio, City Center, Durgapur. Schedule an appointment."
        schema={homeSchema}
      />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Statistics />
      <Testimonials />
      <Appointment />
      <Contact />
    </>
  );
};

export default Home;
