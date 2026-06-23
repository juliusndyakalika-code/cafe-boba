import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { useCart, cartTotal, fmt, type CartItem } from '../store/useCart';

const PHONE = '255687886869';

function buildWhatsAppMessage(items: CartItem[]) {
  const lines = items.map((item) => {
    const toppings = item.toppings.length > 0 ? `\n   + ${item.toppings.join(', ')}` : '';
    return `• ${item.qty}x ${item.name} (${item.size}) — ${fmt(item.price * item.qty)}${toppings}`;
  });
  const total = cartTotal(items);
  return `🧋 *Order from Cafe Boba Website*\n\n${lines.join('\n')}\n\n*Total: ${fmt(total)}*\n\nPlease confirm my order. Thank you!`;
}

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, clear } = useCart();
  const total = cartTotal(items);

  function handleCheckout() {
    const msg = buildWhatsAppMessage(items);
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[55] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeCart} />
      <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="font-display font-black text-xl text-gray-900">Your Order</h2>
            <p className="text-gray-400 text-xs mt-0.5">{items.length === 0 ? 'Nothing added yet' : `${items.reduce((s, i) => s + i.qty, 0)} item(s)`}</p>
          </div>
          <button onClick={closeCart} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center pb-20">
              <div className="text-6xl mb-4">🧋</div>
              <p className="font-display font-bold text-gray-400 text-lg">Your order is empty</p>
              <p className="text-gray-300 text-sm mt-1">Add drinks from the menu</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1">
                    <div className="font-display font-bold text-gray-900 text-sm">{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.category} · Size {item.size}</div>
                    {item.toppings.length > 0 && (
                      <div className="text-purple-500 text-xs mt-0.5">+ {item.toppings.join(', ')}</div>
                    )}
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-1 text-gray-300 hover:text-red-400 transition-colors shrink-0">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-pink-400 transition-colors"
                    >
                      <Minus className="h-3 w-3 text-gray-500" />
                    </button>
                    <span className="font-bold text-gray-900 text-sm w-5 text-center">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-pink-400 transition-colors"
                    >
                      <Plus className="h-3 w-3 text-gray-500" />
                    </button>
                  </div>
                  <span className="font-display font-bold text-pink-600 text-sm">{fmt(item.price * item.qty)}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 font-medium">Total</span>
              <span className="font-display font-black text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {fmt(total)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-display font-bold py-4 rounded-2xl text-lg transition-all hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Send Order on WhatsApp
            </button>
            <button
              onClick={clear}
              className="w-full text-center text-gray-400 text-sm hover:text-red-400 transition-colors py-1"
            >
              Clear order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
