import { ShoppingBag } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { CartDrawer } from './components/CartDrawer';
import { useCart } from './store/useCart';

export default function App() {
  const { items, openCart } = useCart();
  const itemCount = items.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="font-display">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <CartDrawer />

      {/* Mobile floating cart button */}
      {itemCount > 0 && (
        <button
          onClick={openCart}
          className="md:hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-display font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-pink-300/50 hover:scale-105 transition-all"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Order ({itemCount})</span>
        </button>
      )}
    </div>
  );
}
