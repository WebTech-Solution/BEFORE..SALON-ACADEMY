import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Raima Mandi',
      rating: 5,
      avatarInitials: 'RM',
      text: "Got Botox Treatment done twice from here, The service here is exceptional.The treatment lasted almost 6 months.Will definitely recommend!",
    },
    {
      id: 2,
      name: 'Sahil Shaikh',
      rating: 5,
      avatarInitials: 'SS',
      text: "I had an amazing experience at this salon! The staff was very friendly and professional. The service was clean, hygienic, and well-organized. My haircut and styling turned out exactly how I wanted—perfect in every way. They use high-quality products, and the overall atmosphere is very comfortable. Totally worth the money! Highly recommended, and I’ll definitely visit again!",
    },
    {
      id: 3,
      name: 'Sangeeta Basu',
      rating: 5,
      avatarInitials: 'P',
      text: "The experience was amazing, all the staff were very professional with very good behaviour. I got my hair style and colour that I wished for. Very happy and highly recommended👌 …",
    },
  ];

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    resetTimer();
  };

  const handleDotClick = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    resetTimer();
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="relative py-24 overflow-hidden bg-warmIvory/30 dark:bg-charcoal-light/30 font-poppins">
      <div className="absolute w-64 h-64 rounded-full pointer-events-none top-10 left-10 bg-roseGold/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseGold font-manrope mb-3 animate-pulse-subtle">
            Testimonials
          </p>
          <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-darkGray dark:text-white">
            Loved By Our Clients
          </h2>
          <div className="flex items-center justify-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-champagneGold text-champagneGold" />
            ))}
          </div>
          <p className="text-sm font-semibold tracking-wider uppercase font-manrope text-roseGold dark:text-champagneGold">
            4.8★ / 5 (Based on 700+ Reviews)
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative glass-panel bg-white/50 dark:bg-charcoal/50 border border-roseGold/15 rounded-3xl p-8 md:p-12 shadow-luxury min-h-[350px] flex flex-col justify-between overflow-hidden">
          
          {/* Decorative Quote Icon */}
          <div className="absolute top-6 left-6 text-roseGold/10 dark:text-roseGold/5">
            <Quote className="w-16 h-16 transform -rotate-180" />
          </div>

          <div className="flex flex-col justify-center flex-1">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="space-y-6"
              >
                {/* Review Text */}
                <p className="px-4 text-sm italic font-light leading-relaxed text-gray-600 md:text-base lg:text-lg dark:text-gray-200 font-poppins md:px-8">
                  "{reviews[currentIndex].text}"
                </p>

                {/* Rating stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-champagneGold text-champagneGold" />
                  ))}
                </div>

                {/* Client Profile */}
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 text-base font-semibold text-white rounded-full shadow-md bg-gradient-to-tr from-roseGold to-blushPink font-playfair shrink-0">
                    {reviews[currentIndex].avatarInitials}
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-bold font-playfair text-darkGray dark:text-white">
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-[10px] uppercase font-semibold font-manrope tracking-wider text-roseGold dark:text-champagneGold">
                      Verified Client
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="z-20 flex items-center justify-between pt-6 mt-8 border-t border-roseGold/10">
            {/* Prev arrow */}
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full border-roseGold/20 hover:border-roseGold hover:bg-roseGold/10 text-roseGold dark:text-champagneGold dark:border-roseGold/30 dark:hover:bg-roseGold/5 focus:outline-none"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    currentIndex === idx
                      ? 'bg-roseGold scale-125 w-5'
                      : 'bg-roseGold/20 hover:bg-roseGold/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full border-roseGold/20 hover:border-roseGold hover:bg-roseGold/10 text-roseGold dark:text-champagneGold dark:border-roseGold/30 dark:hover:bg-roseGold/5 focus:outline-none"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
