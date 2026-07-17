import { motion } from 'framer-motion';
import { Award, Compass, Heart, ShieldCheck } from 'lucide-react';
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.jpg";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Professional Stylists',
      desc: 'Our team consists of highly certified, experienced, and passionate artists trained in global trends.',
    },
    {
      icon: Heart,
      title: 'Premium Products',
      desc: 'We exclusively use premium, dermatologist-tested, international salon brands for optimal skin & hair health.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Environment',
      desc: '100% sanitized tools, safe processes, and a clean, luxury lounge designed for your comfort and safety.',
    },
    {
      icon: Compass,
      title: 'Personalized Care',
      desc: 'Every service starts with a free professional consultation to tailor treatments exactly to your goals.',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-warmIvory/30 dark:bg-charcoal-light/30 font-poppins">
      <div className="absolute left-0 rounded-full pointer-events-none top-1/2 w-80 h-80 bg-roseGold/5 blur-3xl" />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Images Columns */}
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-roseGold/10 shadow-luxury">
                  <img
                    src={about3}
                    alt="Facial skincare session"
                    className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center p-8 overflow-hidden text-white border aspect-square rounded-3xl border-roseGold/10 bg-gradient-to-tr from-roseGold to-blushPink shadow-luxury">
                  <div>
                    <p className="mb-1 text-3xl font-bold font-playfair md:text-4xl">10+</p>
                    <p className="text-xs uppercase tracking-[0.15em] font-manrope font-semibold">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="pt-12 space-y-4"
              >
                <div className="flex items-center justify-center p-8 overflow-hidden text-white border aspect-square rounded-3xl border-roseGold/10 bg-charcoal dark:bg-warmIvory dark:text-darkGray shadow-luxury">
                  <div>
                    <p className="mb-1 text-3xl font-bold font-playfair md:text-4xl">100%</p>
                    <p className="text-xs uppercase tracking-[0.15em] font-manrope font-semibold opacity-85">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-roseGold/10 shadow-luxury">
                  <img
                    src={about2}
                    alt="Premium makeup art session"
                    className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseGold font-manrope mb-3">
                Welcome to BEFORE..SALON & ACADEMY
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight font-playfair sm:text-5xl text-darkGray dark:text-white">
                Where Beauty Meets Luxury &amp; Professional Care
              </h2>
              <p className="mb-10 text-sm font-light leading-relaxed text-gray-800 dark:text-gray-200 md:text-base">
                BEFORE..SALON & ACADEMY &amp; Makeup Studio has been Durgapur's benchmark for premium salon and skincare therapies. We believe in providing an oasis of relaxation, elegance, and expert care. From state-of-the-art hair makeovers to timeless bridal aesthetics, we craft styles that enhance your unique elegance and build everlasting confidence.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex items-center justify-center w-10 h-10 border rounded-xl bg-roseGold/10 dark:bg-roseGold/5 border-roseGold/20 text-roseGold shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-semibold font-playfair text-darkGray dark:text-warmIvory">
                        {item.title}
                      </h4>
                      <p className="text-xs font-light leading-relaxed text-gray-500 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
