import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import hair1 from "../assets/hair1.jpg";
import hair2 from "../assets/hair2.jpg";
import hair3 from "../assets/hair3.jpg";
import hair4 from "../assets/hair4.jpg";
import hair5 from "../assets/hair5.jpg";
import hair6 from "../assets/hair6.jpg";
import spa1 from "../assets/spa1.jpg";
import spa2 from "../assets/spa2.jpg";
import spa3 from "../assets/spa3.jpg";
import studio1 from "../assets/studio1.jpg";
import studio2 from "../assets/studio2.jpg";
import studio3 from "../assets/studio3.jpg";
import studio4 from "../assets/studio4.jpg";
import skin1 from "../assets/skin1.jpg";
import skin2 from "../assets/skin2.jpg";
import makeup1 from "../assets/makeup1.jpg";
import bridal1 from "../assets/bridalcouture1.jpg"
import bridal2 from "../assets/bridalcouture2.jpg"
import bridal3 from "../assets/bridalcouture3.jpg"
import bridal4 from "../assets/bridalcouture4.jpg"
import bridal5 from "../assets/bridalcouture5.jpg"
import bridal6 from "../assets/bridalcouture6.jpg"

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'hair', name: 'Hair Transformation' },
    { id: 'makeup', name: 'Makeup Art' },
    { id: 'skin', name: 'Skin & Spa' },
    { id: 'bridal', name: 'Bridal Couture' },
    { id: 'salon', name: 'The Studio' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'hair',
      title: 'Balayage Blonde Transformation',
      src: hair1,
    },
    {
      id: 2,
      category: 'makeup',
      title: 'Classic Soft Glam Makeup',
      src: makeup1,
    },
    {
      id: 3,
      category: 'skin',
      title: 'Gold Glow Facial Therapy',
      src: skin1,
    },
    {
      id: 4,
      category: 'bridal',
      title: 'HD Bridal Silhouette Look',
      src: bridal1,
    },
    {
      id: 5,
      category: 'skin',
      // title: ,
      src: skin2,
    },
    {
      id: 6,
      category: 'salon',
      title: 'Luxury Pedicure Station',
      src: studio2,
    },
    {
      id: 7,
      category: 'hair',
      title: 'Smooth & Sleek Hair Therapy',
      src: hair5,
    },
    {
      id: 8,
      category: 'salon',
      // title: 'Luxury Pedicure Station',
      src: studio3,
    },
    {
      id: 9,
      category: 'hair',
      // title: 'Smooth & Sleek Hair Therapy',
      src: hair6,
    },
    {
      id: 10,
      category: 'bridal',
      title: 'Timeless Royal Bridal Makeup',
      src: bridal2,
    },
    {
      id: 15,
      category: 'hair',
      // title: 'Smooth & Sleek Hair Therapy',
      src: hair4,
    },
    {
      id: 16,
      category: 'makeup',
      title: 'Dewy Engagement Glow',
      src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600',
    },
    {
      id: 17,
      category: 'bridal',
      title: 'Timeless Royal Bridal Makeup',
      src: bridal6,
    },
    {
      id: 18,
      category: 'salon',
      // title: 'Luxury Pedicure Station',
      src: studio4,
    },
    {
      id: 19,
      category: 'spa',
      // title: 'Organic Body Scrub Massage',
      src: spa1,
    },
    {
      id: 20,
      category: 'bridal',
      title: 'Timeless Royal Bridal Makeup',
      src: bridal3,
    },
    {
      id: 21,
      category: 'salon',
      title: 'Luxury Spa Lounge',
      src: studio1,
    },
    {
      id: 22,
      category: 'bridal',
      // title: 'Timeless Royal Bridal Makeup',
      src: bridal5,
    },
    {
      id: 23,
      category: 'spa',
      // title: 'Organic Body Scrub Massage',
      src: spa3,
    },
    {
      id: 24,
      category: 'bridal',
      title: 'Timeless Royal Bridal Makeup',
      src: bridal4,
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative py-24 overflow-hidden bg-warmIvory dark:bg-charcoal font-poppins">
      <div className="absolute left-0 rounded-full pointer-events-none top-1/4 w-80 h-80 bg-roseGold/5 blur-3xl" />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseGold font-manrope mb-3">
            Our Portfolio
          </p>
          <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-darkGray dark:text-white">
            A Gallery of Elegance
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-roseGold to-champagneGold mx-auto mb-6" />
          <p className="text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
            Witness the real transformations crafted by our certified styling artists. Every photo represents authenticity and professional precision.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase font-manrope transition-all duration-300 relative focus:outline-none ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'text-darkGray dark:text-warmIvory/80 border border-roseGold/15 hover:bg-roseGold/10'
              }`}
            >
              <span className="relative z-10">{cat.name}</span>
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activeGalleryCategoryBg"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-roseGold to-champagneGold"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Layout (Columns masonry mockup) */}
        <motion.div
          layout
          className="gap-6 space-y-6 columns-1 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden border cursor-pointer break-inside-avoid group rounded-3xl border-roseGold/10 shadow-luxury bg-white/40 dark:bg-charcoal/40"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-auto transition-transform duration-700 ease-out transform group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlays */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent group-hover:opacity-100" />
                
                {/* Zoom Icon overlay */}
                <div className="absolute flex items-center justify-center w-10 h-10 text-white transition-all duration-300 transform translate-y-2 border rounded-full opacity-0 top-4 right-4 bg-white/30 backdrop-blur-md group-hover:opacity-100 group-hover:translate-y-0 border-white/20">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 z-10 w-full p-6 text-left transition-all duration-300 transform translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-[10px] uppercase font-semibold font-manrope tracking-widest text-champagneGold mb-1 block">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold leading-tight text-white font-playfair">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4 select-none"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 border rounded-full top-6 right-6 glass-panel border-white/10 hover:bg-roseGold/20 hover:scale-105 focus:outline-none"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 border rounded-full left-4 glass-panel border-white/10 hover:bg-roseGold/20 hover:scale-105 active:scale-95 focus:outline-none"
                onClick={handlePrev}
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 border rounded-full right-4 glass-panel border-white/10 hover:bg-roseGold/20 hover:scale-105 active:scale-95 focus:outline-none"
                onClick={handleNext}
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative max-w-4xl max-h-[80vh] flex flex-col items-center gap-4 focus:outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] rounded-2xl border border-white/10 shadow-2xl object-contain select-none"
                />
                <div className="text-center">
                  <span className="block mb-1 text-xs font-semibold tracking-widest uppercase font-manrope text-roseGold">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-playfair">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
