import { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const formattedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918293057700?text=${formattedMsg}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990] font-poppins">
      {/* Chat window */}
      {isOpen && (
        <div className="mb-4 overflow-hidden border w-80 md:w-96 rounded-2xl glass-panel shadow-luxury-hover border-roseGold/20 animate-float-medium">
          {/* Header */}
          <div className="flex items-center justify-between p-4 text-white bg-gradient-to-r from-roseGold to-champagneGold">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex items-center justify-center w-10 h-10 text-lg font-bold border rounded-full bg-white/20 border-white/40 font-playfair">
                  B
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-semibold">BEFORE..SALON & ACADEMY Support</h4>
                <p className="text-xs text-white/80">Typically replies in a few minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white transition-colors hover:text-white/80"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 overflow-y-auto bg-warmIvory/50 dark:bg-charcoal/50 max-h-60">
            <div className="bg-white dark:bg-charcoal-light p-3 rounded-2xl rounded-tl-none shadow-sm text-sm inline-block max-w-[85%] border border-roseGold/10">
              <p className="text-darkGray dark:text-warmIvory">
                Hello! Welcome to BEFORE..SALON & ACADEMY. How can we help you look fabulous today? ✨
              </p>
              <span className="text-[10px] text-gray-400 block text-right mt-1">Just now</span>
            </div>
          </div>

          {/* Footer Form */}
          <form onSubmit={handleSend} className="flex items-center gap-2 p-3 bg-white border-t dark:bg-charcoal-light border-roseGold/10">
            <input
              type="text"
              placeholder="Type your inquiry here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border rounded-full bg-warmIvory dark:bg-charcoal border-roseGold/20 focus:outline-none focus:border-roseGold dark:text-white"
            />
            <button
              type="submit"
              className="p-2 text-white transition-all duration-300 rounded-full bg-gradient-to-r from-roseGold to-champagneGold hover:from-champagneGold hover:to-roseGold"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Pulsing Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center text-white transition-all duration-300 border-2 rounded-full group w-14 h-14 bg-gradient-to-r from-roseGold to-champagneGold hover:from-champagneGold hover:to-roseGold shadow-luxury-hover hover:scale-105 focus:outline-none border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
        
        {/* Custom WhatsApp Icon using SVG */}
        <svg
          className="fill-current w-7 h-7"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.022 14.07 1 11.997 1 6.558 1 2.133 5.37 2.13 10.8c-.002 1.638.447 3.237 1.3 4.646l-.993 3.626 3.72-.972zm12.39-4.945c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.672-1.62-.92-2.22-.242-.584-.487-.504-.67-.514l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
