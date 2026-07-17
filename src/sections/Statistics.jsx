import { motion } from 'framer-motion';
import { Award, Users, Star, ThumbsUp, Sparkles } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const Statistics = () => {
  const stats = [
    {
      icon: ThumbsUp,
      target: '700',
      suffix: '+',
      label: 'Happy Reviews',
    },
    {
      icon: Star,
      target: '4.8',
      suffix: '★',
      label: 'Average Rating',
    },
    {
      icon: Users,
      target: '1000',
      suffix: '+',
      label: 'Happy Clients',
    },
    {
      icon: Sparkles,
      target: '10',
      suffix: '+',
      label: 'Beauty Experts',
    },
    {
      icon: Award,
      target: '10',
      suffix: '+',
      label: 'Years of Experience',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden text-white bg-charcoal font-poppins">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-roseGold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagneGold/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle grid layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 text-center border rounded-3xl bg-white/5 border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-10 h-10 mb-4 border shadow-md rounded-xl bg-roseGold/10 border-roseGold/20 text-roseGold shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                {/* Custom animated counter */}
                <div className="mb-2 text-4xl font-bold font-playfair md:text-5xl lg:text-6xl text-roseGold dark:text-champagneGold">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                
                <span className="text-xs font-light tracking-wider text-gray-400 md:text-sm font-manrope">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
