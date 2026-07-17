import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const { title, description, price, icon: Icon } = service;

  const handleBookClick = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl glass-panel p-6 hover:shadow-luxury-hover border border-roseGold/10 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full bg-white/40 dark:bg-charcoal/40"
    >
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-roseGold/10 dark:bg-roseGold/5 rounded-full blur-2xl group-hover:bg-champagneGold/20 dark:group-hover:bg-champagneGold/10 transition-all duration-500 pointer-events-none" />

      <div>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-roseGold to-blushPink dark:from-roseGold/80 dark:to-charcoal-light flex items-center justify-center text-white mb-6 group-hover:from-roseGold group-hover:to-champagneGold transition-all duration-500">
          {Icon && <Icon className="w-6 h-6 stroke-[1.5]" />}
        </div>

        <h3 className="font-playfair text-xl font-semibold mb-3 text-darkGray dark:text-warmIvory group-hover:text-roseGold dark:group-hover:text-champagneGold transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 font-poppins">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-roseGold/10">
        <span className="font-playfair font-semibold text-roseGold dark:text-champagneGold">
          {price}
        </span>
        <button
          onClick={handleBookClick}
          className="flex items-center gap-1.5 text-sm font-semibold text-darkGray dark:text-warmIvory group-hover:text-roseGold dark:group-hover:text-champagneGold transition-all duration-300"
        >
          Book Now
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
