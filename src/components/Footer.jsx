import { Instagram, Facebook, Youtube, Phone, MapPin, ArrowUp, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative overflow-hidden text-gray-300 border-t bg-charcoal border-roseGold/20 font-poppins">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 rounded-full pointer-events-none w-96 h-96 bg-roseGold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 rounded-full pointer-events-none w-96 h-96 bg-champagneGold/5 blur-3xl" />

      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <span className="block text-2xl font-bold tracking-wide text-transparent font-playfair bg-gradient-to-r from-roseGold to-champagneGold bg-clip-text">
              BEFORE..
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gray-400 font-manrope uppercase block mt-1">
              SALON & ACADEMY
            </span>
            <p className="mt-6 text-sm font-light leading-relaxed text-gray-400">
              Experience the pinnacle of luxury, style, and personal care. Our certified beauty artisans craft bespoke looks that celebrate your uniqueness.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.instagram.com/xxx"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-full bg-white/5 border-white/10 hover:border-roseGold hover:bg-roseGold/10 hover:text-roseGold hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Before-Salon-Academy-100085339062058/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-full bg-white/5 border-white/10 hover:border-roseGold hover:bg-roseGold/10 hover:text-roseGold hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/xxxxx"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-full bg-white/5 border-white/10 hover:border-roseGold hover:bg-roseGold/10 hover:text-roseGold hover:scale-110 hover:-translate-y-1"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="pl-3 mb-6 text-lg font-semibold text-white border-l-2 font-playfair border-roseGold">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-light font-manrope">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, 'gallery')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleNavClick(e, 'reviews')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="pl-3 mb-6 text-lg font-semibold text-white border-l-2 font-playfair border-roseGold">
              Services
            </h4>
            <ul className="space-y-4 text-sm font-light font-manrope">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Luxury Hair Transformations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Bridal & Party Makeup
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Expert Skin Therapy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Manicure & Pedicure Spa
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="transition-colors duration-200 hover:text-roseGold"
                >
                  Bridal & Groom Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="pl-3 mb-6 text-lg font-semibold text-white border-l-2 font-playfair border-roseGold">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm font-light font-manrope">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-roseGold shrink-0" />
                <span className="leading-relaxed">
                  MS-28/1, Bengal Ambuja St, near Akash institute,<br />
                  City Center, Durgapur,<br />
                  West Bengal – 713216
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-roseGold shrink-0" />
                <a href="tel:8293057700" className="transition-colors hover:text-roseGold">
                  8293057700
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-roseGold shrink-0" />
                <span className="transition-colors cursor-pointer hover:text-roseGold">
                  info@beforesalon&academy.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-roseGold shrink-0" />
                <span>
                  Mon - Sun: 10:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-800 my-12" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 text-xs text-gray-500 sm:flex-row font-manrope">
          <div>
            © {currentYear} BEFORE..SALON & ACADEMY. All rights reserved. | Developed with Luxury.
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-roseGold">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-roseGold">
              Terms & Conditions
            </a>
          </div>
          <button
            onClick={handleBackToTop}
            className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-full bg-roseGold hover:bg-champagneGold hover:scale-110 active:scale-95 shadow-luxury focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
