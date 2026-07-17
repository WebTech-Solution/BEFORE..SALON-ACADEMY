import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const FloatingBookButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = appointmentSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleBookClick}
      className="fixed bottom-24 right-6 z-[9990] w-14 h-14 bg-gradient-to-r from-roseGold to-roseGold-dark hover:from-roseGold-dark hover:to-champagneGold text-white rounded-full flex items-center justify-center shadow-luxury-hover hover:scale-105 transition-all duration-300 focus:outline-none border-2 border-white/20"
      aria-label="Book appointment slot"
      title="Book Appointment"
    >
      <Calendar className="w-6 h-6" />
    </button>
  );
};

export default FloatingBookButton;
