import { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Terms &amp; Conditions"
        description="Booking rules, cancellation terms, and general policies of BEFORE..SALON & ACADEMY &amp; Makeup Studio."
      />
      <div className="min-h-screen pt-32 pb-24 text-left bg-warmIvory dark:bg-charcoal font-poppins">
        <div className="max-w-4xl px-4 mx-auto sm:px-6">
          {/* Back button */}
          <a
            href="/"
            className="inline-flex items-center gap-2 mb-8 text-xs font-semibold tracking-wider uppercase transition-colors text-roseGold hover:text-champagneGold focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          {/* Heading */}
          <div className="flex items-center gap-4 pb-6 mb-10 border-b border-roseGold/10">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-roseGold/10 text-roseGold shrink-0">
              <FileText className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h1 className="mb-1 text-3xl font-bold font-playfair md:text-4xl text-darkGray dark:text-white">
                Terms &amp; Conditions
              </h1>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-manrope">
                Last Updated: July 20, 2026
              </p>
            </div>
          </div>

          {/* Terms text content */}
          <div className="p-8 space-y-8 text-sm font-light leading-relaxed text-gray-600 border glass-panel bg-white/50 dark:bg-charcoal/50 border-roseGold/10 rounded-3xl md:p-12 shadow-luxury dark:text-gray-300">
            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                1. Salon Booking &amp; Confirmations
              </h3>
              <p>
                By booking a session through our website, you request a salon service slot. All website bookings are tentative and require final telephone confirmation from our front office team before being scheduled as confirmed slots.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                2. Cancellations &amp; Rescheduling
              </h3>
              <p>
                We value your time and our stylists' time. If you need to cancel or reschedule your salon appointment, we request you notify us at least 3 hours prior to your scheduled time slot by calling 8293057700.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                3. Health, Hair &amp; Skin Disclosures
              </h3>
              <p>
                Certain treatments (such as chemical hair smoothening, bleaching, or intensive facials) require specific skin conditions. It is your responsibility to disclose any known skin allergies, pregnancy, scalp irritations, or chemical histories to our stylists during your initial consultation.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                4. Pricing Details
              </h3>
              <p>
                Prices listed on our services page represent baseline rates and are subject to change based on hair length, density, complex skin conditions, or customization request upgrades. Final estimates will be shared during your in-studio consultation.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                5. Safety &amp; Liabilities
              </h3>
              <p>
                We sanitize all equipment and employ certified materials. We are not liable for allergic reactions resulting from undisclosed medical/skin sensitivities or post-treatment care neglect outside our studio environment.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
