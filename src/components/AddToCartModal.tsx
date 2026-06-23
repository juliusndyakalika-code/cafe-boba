import { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart, fmt, type Size } from '../store/useCart';
import { TOPPINGS, type MenuCategory } from '../data/menu';

interface Props {
  item: MenuCategory['items'][0];
  category: MenuCategory;
  onClose: () => void;
}

const TOPPING_PRICE = (name: string) =>
  TOPPINGS.find((t) => t.name === name)?.price ?? 0;

export function AddToCartModal({ item, category, onClose }: Props) {
  const { addItem } = useCart();

  const availableSizes = (['S', 'M', 'L'] as Size[]).filter((s) => {
    const prices = Object.keys(item.prices).length > 0 ? item.prices : category.defaultSizes;
    return prices[s] !== undefined;
  });

  const [size, setSize] = useState<Size>(availableSizes[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [qty, setQty] = useState(1);

  const prices = Object.keys(item.prices).length > 0 ? item.prices : category.defaultSizes;
  const basePrice = prices[size] ?? 0;
  const toppingTotal = selectedToppings.reduce((s, t) => s + TOPPING_PRICE(t), 0);
  const lineTotal = (basePrice + toppingTotal) * qty;

  function toggleTopping(name: string) {
    setSelectedToppings((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    );
  }

  function handleAdd() {
    addItem({
      name: item.name,
      category: category.label,
      size,
      price: basePrice + toppingTotal,
      toppings: selectedToppings,
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100">
          <div>
            <h3 className="font-display font-black text-xl text-gray-900">{item.name}</h3>
            <p className="text-gray-400 text-sm mt-0.5">{item.ingredients}</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-gray-100 transition-colors ml-4 shrink-0">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Size picker */}
          <div>
            <h4 className="font-display font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Choose Size</h4>
            <div className="flex gap-3">
              {availableSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`flex-1 py-3 rounded-2xl border-2 text-sm font-bold transition-all ${
                    size === s
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-200 text-gray-500 hover:border-pink-300'
                  }`}
                >
                  <div className="text-lg mb-0.5">{s === 'S' ? 'S' : s === 'M' ? 'M' : 'L'}</div>
                  <div className="text-xs font-semibold">{fmt(prices[s]!)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Toppings */}
          <div>
            <h4 className="font-display font-bold text-gray-800 mb-1 text-sm uppercase tracking-wide">Add Toppings</h4>
            <p className="text-gray-400 text-xs mb-3">Optional — select as many as you like</p>
            <div className="grid grid-cols-2 gap-2">
              {TOPPINGS.map((t) => {
                const checked = selectedToppings.includes(t.name);
                return (
                  <button
                    key={t.name}
                    onClick={() => toggleTopping(t.name)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-left transition-all ${
                      checked
                        ? 'border-purple-500 bg-purple-50 text-purple-800'
                        : 'border-gray-200 text-gray-600 hover:border-purple-300'
                    }`}
                  >
                    <span className="text-xs font-medium">{t.name}</span>
                    <span className="text-xs text-gray-400 shrink-0 ml-1">+{fmt(t.price)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h4 className="font-display font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Quantity</h4>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-pink-400 transition-colors"
              >
                <Minus className="h-4 w-4 text-gray-500" />
              </button>
              <span className="font-display font-black text-2xl text-gray-900 w-8 text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-pink-400 transition-colors"
              >
                <Plus className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-gray-100">
          <button
            onClick={handleAdd}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-display font-bold py-4 rounded-2xl text-lg hover:shadow-lg hover:shadow-pink-200 transition-all active:scale-95"
          >
            Add to Order — {fmt(lineTotal)}
          </button>
        </div>
      </div>
    </div>
  );
}
