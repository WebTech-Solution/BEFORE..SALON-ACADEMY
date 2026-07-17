import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingBookButton from './components/FloatingBookButton';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mimic luxury preloader hold
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Luxury Preloader Splash Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[10000] bg-charcoal flex flex-col items-center justify-center font-poppins"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 text-center"
            >
              <span className="block text-3xl font-bold tracking-widest text-transparent font-playfair md:text-4xl bg-gradient-to-r from-roseGold to-champagneGold bg-clip-text">
                BEFORE..
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gray-400 font-manrope uppercase block">
                SALON &amp; ACADEMY
              </span>
              
              {/* Premium micro progress bar */}
              <div className="w-20 h-[1.5px] bg-white/5 mx-auto mt-6 relative overflow-hidden rounded-full">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                  className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-roseGold to-champagneGold"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen transition-colors duration-300 bg-warmIvory text-darkGray dark:bg-charcoal dark:text-gray-200">
        {/* Scroll Progress Tracker */}
        <ScrollProgress />

        {/* Custom Fine Pointer Cursor */}
        <CustomCursor />

        {/* Floating WhatsApp Support Widget */}
        <FloatingWhatsApp />

        {/* Floating Calendar Booking Button */}
        <FloatingBookButton />

        {/* App Router Mapping */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Navbar />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Navbar />
                <TermsConditions />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
