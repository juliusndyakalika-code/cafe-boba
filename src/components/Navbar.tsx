import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../store/useCart';
import { openDuka, dukaHref } from '../lib/dukaDirect';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Find Us', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { items, openCart } = useCart();
  const itemCount = items.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Cafe Boba"
              className={`w-10 h-10 rounded-full object-cover transition-all ${scrolled ? '' : 'brightness-125'}`}
            />
            <span className={`font-display font-bold text-lg tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Cafe Boba
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white/90 hover:text-white'}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openCart}
              className={`relative flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all ${scrolled ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:scale-105' : 'bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30'}`}
            >
              <ShoppingBag className="h-4 w-4" />
              Order
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-gray-900 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          <button className="md:hidden p-1.5" onClick={() => setOpen(!open)}>
            {open
              ? <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
              : <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col px-6 py-4 gap-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={dukaHref()}
              onClick={(e) => {
                e.preventDefault();
                openDuka();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-4 py-2.5 rounded-full"
            >
              Order on duka.direct
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
