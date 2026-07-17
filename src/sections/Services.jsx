import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, Palette, Crown, Gem, Gift, Droplets, Heart } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'hair', name: 'Hair Care' },
    { id: 'skin', name: 'Skin Care' },
    { id: 'makeup', name: 'Makeup Studio' },
    { id: 'packages', name: 'Luxury Packages' },
  ];

  const servicesData = [
    // Hair
    {
      id: 'hair-1',
      category: 'hair',
      title: 'Premium Haircut',
      description: 'Consultation, luxury hair wash, precision haircut, and custom blow-dry styling by master artists.',
      price: 'From ₹800',
      icon: Scissors,
    },
    {
      id: 'hair-2',
      category: 'hair',
      title: 'Luxury Hair Spa',
      description: 'Intense micro-mist nourishment treatment, deep hydration mask, and relaxing scalp massage.',
      price: 'From ₹1,500',
      icon: Droplets,
    },
    {
      id: 'hair-3',
      category: 'hair',
      title: 'Global Hair Coloring',
      description: 'Ammonia-free luxury shades, custom balayage, highlight streaks, and expert root touchups.',
      price: 'From ₹3,500',
      icon: Palette,
    },
    {
      id: 'hair-4',
      category: 'hair',
      title: 'Hair Smoothening',
      description: 'Pro-keratin protein infusion therapy to tame frizz and add mirror-like gloss and sleekness.',
      price: 'From ₹5,000',
      icon: Sparkles,
    },
    {
      id: 'hair-5',
      category: 'hair',
      title: 'Hair Straightening',
      description: 'Permanent straight and sleek hair texture rejuvenation using advanced premium formulas.',
      price: 'From ₹6,000',
      icon: Sparkles,
    },
    {
      id: 'hair-6',
      category: 'hair',
      title: 'Advanced Hair Treatment',
      description: 'Targeted hair therapy for hair fall, dandruff, olaplex bond-building, and dry-ends recovery.',
      price: 'From ₹2,500',
      icon: Heart,
    },
    // Skin Care
    {
      id: 'skin-1',
      category: 'skin',
      title: 'Premium Facial',
      description: 'Luxury botanical facials, HydraFacial sessions, brightening treatments, and anti-aging therapies.',
      price: 'From ₹2,000',
      icon: Sparkles,
    },
    {
      id: 'skin-2',
      category: 'skin',
      title: 'Detox Cleanup',
      description: 'Gentle pore cleansing, blackhead extraction, vitamin hydration, and soothing skin steam.',
      price: 'From ₹1,000',
      icon: Droplets,
    },
    {
      id: 'skin-3',
      category: 'skin',
      title: 'Luxury Bleach & De-Tan',
      description: 'Skin whitening and organic tan removal using dermatologically approved natural formulas.',
      price: 'From ₹800',
      icon: Sparkles,
    },
    {
      id: 'skin-4',
      category: 'skin',
      title: 'Signature Skin Care',
      description: 'Customized intensive therapies for acne, glow enhancement, and collagen restoration.',
      price: 'From ₹1,800',
      icon: Heart,
    },
    {
      id: 'skin-5',
      category: 'skin',
      title: 'Premium Waxing',
      description: 'Soothing organic honey, Rica liposoluble wax, and full body glow treatments.',
      price: 'From ₹600',
      icon: Sparkles,
    },
    {
      id: 'skin-6',
      category: 'skin',
      title: 'Precision Threading',
      description: 'Brows, upper lip, chin shaping, and facial threading with ultimate precision and minimal discomfort.',
      price: 'From ₹100',
      icon: Scissors,
    },
    {
      id: 'skin-7',
      category: 'skin',
      title: 'Luxury Manicure & Pedicure',
      description: 'Nail shaping, cuticle care, organic scrub, mask therapy, and relaxing hot stone massage.',
      price: 'From ₹1,200',
      icon: Sparkles,
    },
    // Makeup
    {
      id: 'makeup-1',
      category: 'makeup',
      title: 'HD Bridal Makeup',
      description: 'Exquisite airbrush or HD wedding makeup, hair design, draping, and luxury false lashes.',
      price: 'From ₹15,000',
      icon: Crown,
    },
    {
      id: 'makeup-2',
      category: 'makeup',
      title: 'Glam Party Makeup',
      description: 'Stunning party makeup for festivals, socials, or baby showers with long-wear locks.',
      price: 'From ₹4,500',
      icon: Sparkles,
    },
    {
      id: 'makeup-3',
      category: 'makeup',
      title: 'Engagement Makeup',
      description: 'Elegant, dewy, or matte makeup tailored for engagement functions and light photography.',
      price: 'From ₹8,000',
      icon: Gem,
    },
    // Packages
    {
      id: 'pkg-1',
      category: 'packages',
      title: 'Empress Bridal Package',
      description: 'Complete pre-bridal skin therapy, hair spa, body polish, manicure, pedicure, and HD wedding makeup.',
      price: 'From ₹22,000',
      icon: Gift,
    },
    {
      id: 'pkg-2',
      category: 'packages',
      title: 'Imperial Groom Package',
      description: 'Groom skin facial, hair styling, beard grooming, organic manicure, and relaxing scalp therapies.',
      price: 'From ₹6,000',
      icon: Gift,
    },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-warmIvory dark:bg-charcoal relative overflow-hidden font-poppins">
      <div className="absolute top-10 right-0 w-72 h-72 bg-champagneGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseGold font-manrope mb-3 animate-pulse-subtle">
            Indulge in Excellence
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-darkGray dark:text-white mb-4 leading-tight">
            Our Luxury Offerings
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-roseGold to-champagneGold mx-auto mb-6" />
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light leading-relaxed">
            From rejuvenating skincare treatments to dramatic hair makeovers and professional makeup artistry, discover our curated luxury salon solutions.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase font-manrope transition-all duration-300 relative focus:outline-none ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'text-darkGray dark:text-warmIvory/80 border border-roseGold/20 hover:bg-roseGold/10'
              }`}
            >
              <span className="relative z-10">{cat.name}</span>
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gradient-to-r from-roseGold to-champagneGold rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Services Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
