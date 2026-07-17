import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // Check if we are on home page
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }

    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        // Defer scroll slightly on mobile to avoid layout transition conflicts
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 150);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setActiveSection(id);
    }
  };

  const handleBookClick = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      const offset = 80;
      const elementPosition = appointmentSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 150);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel py-3 shadow-luxury'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex flex-col focus:outline-none"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <span className="text-2xl font-bold tracking-wide text-transparent font-playfair bg-gradient-to-r from-roseGold to-champagneGold bg-clip-text">
                BEFORE..
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gray-500 dark:text-gray-400 font-manrope uppercase -mt-1 pl-0.5">
                SALON & ACADEMY
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="items-center hidden gap-8 lg:flex">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative font-manrope text-sm font-medium tracking-wider transition-colors duration-300 focus:outline-none ${
                      isActive
                        ? 'text-roseGold dark:text-champagneGold'
                        : 'text-darkGray/80 hover:text-roseGold dark:text-warmIvory/80 dark:hover:text-champagneGold'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute bottom-[-6px] left-0 w-full h-[1.5px] bg-gradient-to-r from-roseGold to-champagneGold rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Actions: DarkMode, Book Now, Mobile Menu Button */}
            <div className="items-center hidden gap-4 lg:flex">
              <DarkModeToggle />
              <button
                onClick={handleBookClick}
                className="px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-roseGold to-roseGold-dark hover:from-roseGold-dark hover:to-champagneGold transition-all duration-500 shadow-luxury hover:shadow-luxury-gold hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
            </div>

            {/* Tablet/Mobile Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              <DarkModeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 transition-colors rounded-full text-darkGray dark:text-warmIvory hover:bg-roseGold/10 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t lg:hidden glass-panel border-roseGold/10"
            >
              <div className="flex flex-col px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const id = link.href.substring(1);
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-300 ${
                        isActive
                          ? 'bg-roseGold/10 text-roseGold dark:text-champagneGold font-semibold border-l-4 border-roseGold pl-3'
                          : 'text-darkGray dark:text-warmIvory/90 hover:bg-roseGold/5 hover:text-roseGold'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-roseGold/10">
                  <button
                    onClick={handleBookClick}
                    className="w-full py-3.5 rounded-full text-center text-base font-semibold tracking-wider text-white bg-gradient-to-r from-roseGold to-roseGold-dark hover:from-roseGold-dark hover:to-champagneGold transition-all duration-500 shadow-luxury flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
