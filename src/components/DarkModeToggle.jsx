import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // return (
  //   <button
  //     onClick={toggleTheme}
  //     className="p-2.5 rounded-full glass-card hover:bg-roseGold/20 text-roseGold hover:text-champagneGold dark:text-blushPink dark:hover:text-champagneGold transition-all duration-300 shadow-luxury focus:outline-none"
  //     aria-label="Toggle dark mode"
  //   >
  //     {theme === 'dark' ? (
  //       <Sun className="w-5 h-5 animate-pulse-subtle" />
  //     ) : (
  //       <Moon className="w-5 h-5" />
  //     )}
  //   </button>
  // );
  return <></>;
};

export default DarkModeToggle;