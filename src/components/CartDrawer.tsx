import { useEffect, useState } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, Bike, Check } from 'lucide-react';
import { useCart, cartTotal, fmt, type CartItem } from '../store/useCart';
import { WHATSAPP_PHONE } from '../config';
import { DUKA_STORE_URL } from '../config';

function buildOrderLines(items: CartItem[]) {
  return items.map((item) => {
    const toppings = item.toppings.length > 0 ? `\n   + ${item.toppings.join(', ')}` : '';
    return `• ${item.qty}x ${item.name} (${item.size}) — ${fmt(item.price * item.qty)}${toppings}`;
  });
}

function buildWhatsAppMessage(items: CartItem[]) {
  const total = cartTotal(items);
  return `🧋 *Order from Cafe Boba Website*\n\n${buildOrderLines(items).join('\n')}\n\n*Total: ${fmt(total)}*\n\nPlease confirm my order. Thank you!`;
}

function buildDukaMessage(items: CartItem[]) {
  const total = cartTotal(items);
  return `Cafe Boba order\n\n${buildOrderLines(items).join('\n')}\n\nTotal: ${fmt(total)}`;
}

async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the textarea fallback below
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, clear } = useCart();
  const total = cartTotal(items);
  const [dukaCopied, setDukaCopied] = useState(false);

  useEffect(() => {
    if (!dukaCopied) return;
    const t = setTimeout(() => setDukaCopied(false), 4000);
    return () => clearTimeout(t);
  }, [dukaCopied]);

  function handleCheckout() {
    const msg = buildWhatsAppMessage(items);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  function handleDukaCheckout() {
    // duka.direct has no public cart API, so we hand the shopper their order
    // text to paste once the app opens. Deliberately not awaited and the
    // anchor's default navigation is left alone: iOS only fires Universal
    // Links for a real link activation, not for JS-driven navigation.
    void copyToClipboard(buildDukaMessage(items)).then(setDukaCopied);
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
            <a
              href={DUKA_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDukaCheckout}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white font-display font-bold py-4 rounded-2xl text-lg transition-all hover:shadow-lg active:scale-95"
            >
              <Bike className="h-5 w-5" />
              Order on duka.direct
            </a>
            {dukaCopied && (
              <p className="flex items-center justify-center gap-1.5 text-green-600 text-xs font-medium">
                <Check className="h-3.5 w-3.5" />
                Order copied — paste it into duka.direct’s order notes
              </p>
            )}
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
