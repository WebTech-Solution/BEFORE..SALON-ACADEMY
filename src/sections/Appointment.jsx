import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, Mail, Clock, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Mimic backend delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Appointment submitted:', data);
        setClientName(data.name);
        setIsSubmitted(true);
        reset();
        resolve();
      }, 1500);
    });
  };

  const services = [
    'Premium Haircut & Styling',
    'Luxury Hair Spa',
    'Global Hair Coloring & Balayage',
    'Pro-Keratin Hair Smoothening',
    'Permanent Hair Straightening',
    'Custom Skin Therapy Facial',
    'Organic Face & Body Cleanup',
    'Exquisite HD Bridal Makeup',
    'Glam Party/Engagement Makeup',
    'Luxury Manicure & Pedicure',
    'Empress Bridal Pre-Care Package',
    'Imperial Groom Spa Package',
  ];

  const timeSlots = [
    '10:00 AM - 11:30 AM',
    '11:30 AM - 01:00 PM',
    '01:00 PM - 02:30 PM',
    '02:30 PM - 04:00 PM',
    '04:00 PM - 05:30 PM',
    '05:30 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
  ];

  return (
    <section id="appointment" className="py-24 bg-warmIvory dark:bg-charcoal relative overflow-hidden font-poppins">
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-roseGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseGold font-manrope mb-3">
            Reservation
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-darkGray dark:text-white mb-4">
            Book Your Treatment
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-roseGold to-champagneGold mx-auto mb-6" />
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light leading-relaxed">
            Reserve your bespoke styling session. Choose your preferred slot and our consultants will call you to finalize your booking details.
          </p>
        </div>

        {/* Card Frame */}
        <div className="glass-panel bg-white/60 dark:bg-charcoal/60 border border-roseGold/15 rounded-[2.5rem] p-8 md:p-12 shadow-luxury overflow-hidden relative">
          
          {/* Subtle sparkles */}
          <div className="absolute top-6 right-6 sparkle-element text-champagneGold/20">
            <Sparkles className="w-6 h-6" />
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="appointment-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-manrope">
                      <User className="w-3.5 h-3.5 text-roseGold" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-2xl bg-warmIvory dark:bg-charcoal border text-sm focus:outline-none dark:text-white ${
                        errors.name
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-roseGold/20 focus:border-roseGold'
                      }`}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 font-manrope mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-manrope">
                      <Phone className="w-3.5 h-3.5 text-roseGold" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      className={`w-full px-4 py-3 rounded-2xl bg-warmIvory dark:bg-charcoal border text-sm focus:outline-none dark:text-white ${
                        errors.phone
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-roseGold/20 focus:border-roseGold'
                      }`}
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit phone number',
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-400 font-manrope mt-1">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-manrope">
                      <Mail className="w-3.5 h-3.5 text-roseGold" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-warmIvory dark:bg-charcoal border text-sm focus:outline-none dark:text-white ${
                        errors.email
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-roseGold/20 focus:border-roseGold'
                      }`}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 font-manrope mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Service selection */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-manrope">
                      <Calendar className="w-3.5 h-3.5 text-roseGold" />
                      Select Service
                    </label>
                    <select
                      className={`w-full px-4 py-3 rounded-2xl bg-warmIvory dark:bg-charcoal border text-sm focus:outline-none dark:text-white cursor-pointer ${
                        errors.service
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-roseGold/20 focus:border-roseGold'
                      }`}
                      {...register('service', { required: 'Please select a service' })}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="dark:bg-charcoal">
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-[10px] text-red-400 font-manrope mt-1">
                        {errors.service.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-manrope">
                      <Calendar className="w-3.5 h-3.5 text-roseGold" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className={`w-full px-4 py-3 rounded-2xl bg-warmIvory dark:bg-charcoal border text-sm focus:outline-none dark:text-white cursor-pointer ${
                        errors.date
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-roseGold/20 focus:border-roseGold'
                      }`}
                      {...register('date', { required: 'Preferred date is required' })}
                    />
                    {errors.date && (
                      <span className="text-[10px] text-red-400 font-manrope mt-1">
                        {errors.date.message}
                      </span>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-manrope">
                      <Clock className="w-3.5 h-3.5 text-roseGold" />
                      Preferred Time Slot
                    </label>
                    <select
                      className={`w-full px-4 py-3 rounded-2xl bg-warmIvory dark:bg-charcoal border text-sm focus:outline-none dark:text-white cursor-pointer ${
                        errors.time
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-roseGold/20 focus:border-roseGold'
                      }`}
                      {...register('time', { required: 'Preferred time slot is required' })}
                    >
                      <option value="">Select a time slot...</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t} className="dark:bg-charcoal">
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <span className="text-[10px] text-red-400 font-manrope mt-1">
                        {errors.time.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-manrope">
                    <MessageSquare className="w-3.5 h-3.5 text-roseGold" />
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us if you have any allergies, special skin conditions, or queries."
                    className="w-full px-4 py-3 rounded-2xl bg-warmIvory dark:bg-charcoal border border-roseGold/20 text-sm focus:outline-none focus:border-roseGold dark:text-white resize-none"
                    {...register('message')}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full text-base font-semibold tracking-wider text-white bg-gradient-to-r from-roseGold to-roseGold-dark hover:from-roseGold-dark hover:to-champagneGold disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-500 shadow-luxury hover:shadow-luxury-gold flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing Booking...
                      </>
                    ) : (
                      'Schedule Session Now'
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="appointment-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-roseGold/10 flex items-center justify-center text-roseGold animate-pulse-subtle border border-roseGold/20">
                  <CheckCircle className="w-12 h-12 stroke-[1.25]" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-playfair text-3xl font-bold text-darkGray dark:text-white">
                    Booking Request Placed!
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="font-semibold text-roseGold dark:text-champagneGold">{clientName}</strong>! Your luxury treatment request has been registered in our scheduling system.
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                    We will call you shortly at the provided number to confirm your final date, pricing, and timing.
                  </p>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-roseGold hover:text-white border border-roseGold hover:bg-roseGold transition-all duration-300"
                >
                  Book Another Service
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
