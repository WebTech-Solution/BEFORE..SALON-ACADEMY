import { useEffect } from 'react';
import { Compass, Home } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The luxury beauty link you are looking for does not exist. Return to BEFORE..SALON & ACADEMY homepage."
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden bg-warmIvory dark:bg-charcoal font-poppins">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-roseGold/10 dark:bg-roseGold/5 rounded-full blur-[120px] pointer-events-none animate-pulse-subtle" />

        <div className="relative z-10 max-w-md space-y-8 text-center">
          {/* Decorative Logo Icon */}
          <div className="w-24 h-24 rounded-[2rem] bg-roseGold/10 border border-roseGold/20 flex items-center justify-center text-roseGold mx-auto shadow-luxury-hover animate-float-medium">
            <Compass className="w-12 h-12 stroke-[1.25]" />
          </div>

          <div className="space-y-3">
            <h1 className="font-bold text-transparent font-playfair text-7xl md:text-8xl bg-gradient-to-r from-roseGold to-champagneGold bg-clip-text">
              404
            </h1>
            <h2 className="text-2xl font-semibold font-playfair md:text-3xl text-darkGray dark:text-white">
              Sought After Beauty is Elsewhere
            </h2>
            <p className="text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
              The page you are looking for has been moved, renamed, or styled differently. Let's redirect you to safety.
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider text-white transition-all duration-300 rounded-full bg-gradient-to-r from-roseGold to-roseGold-dark hover:from-roseGold-dark hover:to-champagneGold shadow-luxury hover:scale-105 active:scale-95 focus:outline-none"
          >
            <Home className="w-4 h-4" />
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
