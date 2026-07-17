import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, MessageSquare, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Instagram,
      url: 'https://www.instagram.com/xxx',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/p/Before-Salon-Academy-100085339062058/',
      label: 'Facebook',
    },
    {
      icon: Youtube,
      url: 'https://www.youtube.com/xxxxx',
      label: 'YouTube',
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-warmIvory/30 dark:bg-charcoal-light/30 font-poppins">
      <div className="absolute left-0 rounded-full pointer-events-none top-1/2 w-80 h-80 bg-roseGold/5 blur-3xl" />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseGold font-manrope mb-3 animate-pulse-subtle">
            Connect
          </p>
          <h2 className="mb-4 text-4xl font-bold font-playfair md:text-5xl text-darkGray dark:text-white">
            Visit Our Sanctuary
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-roseGold to-champagneGold mx-auto mb-6" />
          <p className="text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
            Drop by for a premium treatment or get in touch with our front desk to answer any service queries. We look forward to hosting you!
          </p>
        </div>

        <div className="grid items-stretch grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Contact Cards Info */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            
            {/* Cards wrapper */}
            <div className="space-y-6 text-left">
              
              {/* Address card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-4 p-6 border rounded-3xl glass-panel bg-white/50 dark:bg-charcoal/50 border-roseGold/10 shadow-luxury"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-roseGold/10 text-roseGold shrink-0">
                  <MapPin className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="mb-2 text-base font-bold font-playfair text-darkGray dark:text-warmIvory">
                    Our Location
                  </h4>
                  <p className="text-xs font-light leading-relaxed text-gray-500 md:text-sm dark:text-gray-400">
                    MS-28/1, Bengal Ambuja St, near Akash institute,<br />
                    City Center, Durgapur,<br />
                    West Bengal – 713216
                  </p>
                </div>
              </motion.div>

              {/* Contact numbers card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-4 p-6 border rounded-3xl glass-panel bg-white/50 dark:bg-charcoal/50 border-roseGold/10 shadow-luxury"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-roseGold/10 text-roseGold shrink-0">
                  <Phone className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="mb-2 text-base font-bold font-playfair text-darkGray dark:text-warmIvory">
                    Phone &amp; Email
                  </h4>
                  <p className="mb-1 text-xs font-light text-gray-500 md:text-sm dark:text-gray-400">
                    Front Desk:{' '}
                    <a href="tel:8293057700" className="font-semibold text-roseGold dark:text-champagneGold hover:underline">
                      8293057700
                    </a>
                  </p>
                  <p className="text-xs font-light text-gray-500 md:text-sm dark:text-gray-400">
                    Support:{' '}
                    <span className="font-semibold text-roseGold dark:text-champagneGold">
                      info@beforesalonacademy.com
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Hours card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4 p-6 border rounded-3xl glass-panel bg-white/50 dark:bg-charcoal/50 border-roseGold/10 shadow-luxury"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-roseGold/10 text-roseGold shrink-0">
                  <Clock className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="mb-2 text-base font-bold font-playfair text-darkGray dark:text-warmIvory">
                    Studio Hours
                  </h4>
                  <p className="text-xs font-light leading-relaxed text-gray-500 md:text-sm dark:text-gray-400">
                    Monday – Sunday:<br />
                    10:00 AM – 08:00 PM
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <a
                href="tel:8293057700"
                className="w-full py-4 rounded-full text-center text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-roseGold to-roseGold-dark hover:from-roseGold-dark hover:to-champagneGold transition-all duration-300 shadow-luxury hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/918293057700"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-full text-center text-xs font-semibold uppercase tracking-wider text-darkGray dark:text-white glass-panel hover:bg-roseGold/15 border border-roseGold/20 transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-green-500 fill-green-500/20" />
                WhatsApp
              </a>
            </div>

          </div>

          {/* Interactive Google Map Map */}
          <div className="lg:col-span-7 h-full min-h-[380px] rounded-[2.5rem] overflow-hidden border border-roseGold/15 shadow-luxury">
            <iframe
              title="BEFORE..SALON & ACADEMY Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.778459439269!2d87.3025351751083!3d23.540469278814264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771c7478fbecb%3A0x4c42abfc004492c!2sBEFORE..SALON%20%26%20ACADEMY!5e0!3m2!1sen!2sin!4v1784303525088!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
