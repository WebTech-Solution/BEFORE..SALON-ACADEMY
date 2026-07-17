import { motion } from 'framer-motion';
import { Shield, Sparkles, Smile, Star, Users, CheckCircle, Flame, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Premium Products',
      description: 'Dermatologically safe, organic, and luxury global hair & skincare products.',
    },
    {
      icon: Sparkles,
      title: 'Certified Experts',
      description: 'Artisans trained in international beauty clinics and hair academies.',
    },
    {
      icon: Heart,
      title: 'Affordable Luxury',
      description: 'World-class salon treatments offered at transparent and reasonable prices.',
    },
    {
      icon: Smile,
      title: 'Personalized Consultation',
      description: 'One-on-one expert beauty profiling before starting any therapy.',
    },
    {
      icon: Star,
      title: '700+ Happy Reviews',
      description: 'Consistently rated 4.8★ by clients in City Center and Durgapur.',
    },
    {
      icon: Users,
      title: 'Professional Staff',
      description: 'Warm, soft-spoken, accommodating, and fully vaccinated professionals.',
    },
    {
      icon: CheckCircle,
      title: 'Latest Beauty Trends',
      description: 'Always equipped with the newest hair stylings, makeup arts, and skincare gear.',
    },
    {
      icon: Flame,
      title: 'Hygienic Environment',
      description: 'Rigorous sanitization protocols, disposable materials, and clean lounges.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-warmIvory/30 dark:bg-charcoal-light/30 font-poppins">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-roseGold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseGold font-manrope mb-3">
            Our Standards
          </p>
          <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-darkGray dark:text-white">
            Why Choose Before..Salon & Academy?
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-roseGold to-champagneGold mx-auto mb-6" />
          <p className="text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
            We hold ourselves to the highest standards of beauty care, ensuring a relaxing, premium experience that elevates your outer beauty and inner confidence.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="flex flex-col items-center p-6 text-center transition-all duration-300 border group rounded-3xl glass-panel bg-white/40 dark:bg-charcoal/40 border-roseGold/10 hover:border-roseGold/30 hover:shadow-luxury"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-6 text-white transition-all duration-500 shadow-md rounded-2xl bg-gradient-to-r from-roseGold to-blushPink dark:from-roseGold/80 dark:to-charcoal-light group-hover:from-roseGold group-hover:to-champagneGold">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 font-playfair text-darkGray dark:text-warmIvory group-hover:text-roseGold dark:group-hover:text-champagneGold">
                  {item.title}
                </h3>
                <p className="text-xs font-light leading-relaxed text-gray-500 dark:text-gray-400 font-poppins">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
