/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        roseGold: {
          light: '#e1b1b9',
          DEFAULT: '#B76E79',
          dark: '#934d57',
        },
        blushPink: {
          light: '#fef1f2',
          DEFAULT: '#FADADD',
          dark: '#f5b5bd',
        },
        champagneGold: {
          light: '#ecd687',
          DEFAULT: '#D4AF37',
          dark: '#a5831f',
        },
        warmIvory: {
          light: '#FFFDFB',
          DEFAULT: '#FFF9F5',
          dark: '#f3ece7',
        },
        charcoal: {
          light: '#2d2d2d',
          DEFAULT: '#1C1C1C',
          dark: '#121212',
        },
        darkGray: '#333333',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'rose-gold-gradient': 'linear-gradient(135deg, #B76E79 0%, #FADADD 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5D77F 100%)',
        'rose-gold-gold': 'linear-gradient(135deg, #B76E79 0%, #D4AF37 100%)',
        'luxury-dark': 'linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 100%)',
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(183, 110, 121, 0.12)',
        'luxury-hover': '0 20px 40px -15px rgba(183, 110, 121, 0.25)',
        'luxury-gold': '0 10px 30px -10px rgba(212, 175, 55, 0.15)',
        'glass-light': '0 8px 32px 0 rgba(183, 110, 121, 0.04)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'sparkle-slow': 'sparkle 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 0.9 },
        }
      }
    },
  },
  plugins: [],
}
