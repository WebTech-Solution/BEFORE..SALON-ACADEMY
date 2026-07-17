import { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy terms and customer data protection guidelines for BEFORE..SALON & ACADEMY."
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
              <Shield className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h1 className="mb-1 text-3xl font-bold font-playfair md:text-4xl text-darkGray dark:text-white">
                Privacy Policy
              </h1>
              <p className="text-xs tracking-wider text-gray-400 uppercase font-manrope">
                Last Updated: July 20, 2026
              </p>
            </div>
          </div>

          {/* Policy text Content */}
          <div className="p-8 space-y-8 text-sm font-light leading-relaxed text-gray-600 border glass-panel bg-white/50 dark:bg-charcoal/50 border-roseGold/10 rounded-3xl md:p-12 shadow-luxury dark:text-gray-300">
            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                1. Introduction
              </h3>
              <p>
                Welcome to BEFORE..SALON & ACADEMY ("we", "our", "us"). We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and secure your information when you visit our website or book salon services at our Durgapur studio.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                2. Information We Collect
              </h3>
              <p>
                When you make an appointment or contact us using our online form, we collect personal information you voluntarily provide, including:
              </p>
              <ul className="pl-4 mt-3 space-y-2 list-disc list-inside">
                <li>Your name, email address, and phone number.</li>
                <li>Preferred booking date, time, and requested salon services.</li>
                <li>Any custom requests or skin/hair conditions you choose to specify.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                3. How We Use Your Information
              </h3>
              <p>
                We use the gathered information to:
              </p>
              <ul className="pl-4 mt-3 space-y-2 list-disc list-inside">
                <li>Process and confirm your appointment reservations.</li>
                <li>Contact you regarding scheduling changes or confirmation calls.</li>
                <li>Improve our client relations and respond to inquiries.</li>
                <li>Send occasional promotion messages (with your consent).</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                4. Data Protection & Safety
              </h3>
              <p>
                We implement robust security measures to prevent unauthorized access, altering, or disclosure of your personal details. We do not sell, trade, or share your contact information with third-party marketers.
              </p>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold font-playfair text-darkGray dark:text-white">
                5. Contact Details
              </h3>
              <p>
                If you have questions regarding our privacy practices or wish to update/delete your records from our systems, contact our Durgapur desk:
              </p>
              <p className="mt-3 font-semibold text-roseGold dark:text-champagneGold">
                BEFORE..SALON & ACADEMY<br />
                MS-28/1, Bengal Ambuja St, near Akash institute, City Center, Durgapur, West Bengal – 713216<br />
                Phone: 8293057700 | Email: info@beforesalonacademy.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
