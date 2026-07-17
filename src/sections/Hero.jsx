import { motion } from 'framer-motion';
import { Calendar, Compass, Sparkles } from 'lucide-react';
import hero1 from "../assets/hero1.png"

const Hero = () => {
  const handleScrollTo = (id) => {
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
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-warmIvory dark:bg-charcoal pt-16">
      {/* Background ambient glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-roseGold/10 rounded-full blur-[100px] dark:bg-roseGold/5 animate-pulse-subtle pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-champagneGold/10 rounded-full blur-[100px] dark:bg-champagneGold/5 animate-pulse-subtle pointer-events-none" />

      {/* Floating beauty SVGs / Sparkles */}
      <div className="absolute hidden top-1/3 left-10 md:left-20 sparkle-element text-roseGold/30 dark:text-roseGold/10 md:block">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute hidden bottom-1/3 right-10 md:right-20 sparkle-element text-champagneGold/30 dark:text-champagneGold/10 md:block" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-6 h-6" />
      </div>

      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B76E790a_1px,transparent_1px),linear-gradient(to_bottom,#B76E790a_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />

      <div className="relative z-10 w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Hero text */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-roseGold/10 dark:bg-roseGold/5 border border-roseGold/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-roseGold dark:text-champagneGold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-roseGold-dark dark:text-champagneGold font-manrope">
                BEFORE..SALON & ACADEMY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-darkGray dark:text-white mb-6 text-luxury-shadow"
            >
              Luxury Beauty.<br />
              <span className="italic font-light text-roseGold dark:text-champagneGold">Timeless Confidence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl mx-auto mb-10 text-base leading-relaxed text-gray-800 sm:text-lg dark:text-gray-200 lg:mx-0 font-poppins"
            >
              Experience premium salon, skincare, makeup, and hair transformations curated by certified professionals using world-class brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <button
                onClick={() => handleScrollTo('appointment')}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold tracking-wider text-white bg-gradient-to-r from-roseGold to-roseGold-dark hover:from-roseGold-dark hover:to-champagneGold transition-all duration-500 shadow-luxury hover:shadow-luxury-gold hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              
              <button
                onClick={() => handleScrollTo('services')}
                className="flex items-center justify-center w-full gap-2 px-8 py-4 text-base font-semibold tracking-wider transition-all duration-300 border rounded-full sm:w-auto text-darkGray dark:text-white glass-panel hover:bg-roseGold/10 border-roseGold/20"
              >
                <Compass className="w-5 h-5 text-roseGold dark:text-champagneGold" />
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Hero Image Layout */}
          <div className="flex justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-luxury border-4 border-white/60 dark:border-white/5"
            >
              {/* Luxury image layer */}
              <img
                src={hero1}
                alt="Luxury salon hair and beauty session"
                className="object-cover w-full h-full transition-transform duration-700 ease-out transform hover:scale-105"
                loading="eager"
              />
              
              {/* Translucent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              
              {/* Small floating info card */}
              <div className="absolute flex items-center gap-3 p-4 text-left border bottom-6 left-6 right-6 rounded-2xl glass-panel border-white/30">
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-full shadow-md bg-roseGold shrink-0">
                  ★
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-roseGold dark:text-champagneGold font-manrope">
                    Client Rating
                  </p>
                  <p className="text-sm font-semibold font-playfair text-darkGray dark:text-white">
                    4.8/5 based on 700+ Reviews
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute flex flex-col items-center gap-2 transform -translate-x-1/2 pointer-events-none bottom-6 left-1/2 text-roseGold/60 dark:text-champagneGold/60">
        <span className="text-[10px] uppercase tracking-[0.2em] font-manrope font-light">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center w-5 p-1 border-2 rounded-full h-9 border-roseGold/40 dark:border-champagneGold/40"
        >
          <div className="w-1.5 h-1.5 bg-roseGold dark:bg-champagneGold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
