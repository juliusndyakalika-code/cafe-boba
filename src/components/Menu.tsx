import { useState } from 'react';
import { Plus } from 'lucide-react';
import { MENU, TOPPINGS, COMBOS, type MenuCategory } from '../data/menu';
import { AddToCartModal } from './AddToCartModal';
import { fmt } from '../store/useCart';

function SizeTag({ label, price }: { label: string; price: number }) {
  return (
    <span className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-700 rounded-lg px-2 py-0.5 text-xs font-semibold">
      <span className="text-gray-400">{label}</span>
      {fmt(price)}
    </span>
  );
}

function MenuCard({
  item,
  category,
}: {
  item: MenuCategory['items'][0];
  category: MenuCategory;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const prices = Object.keys(item.prices).length > 0 ? item.prices : category.defaultSizes;
  const lowestPrice = Math.min(...(Object.values(prices) as number[]));

  return (
    <>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-pink-100 transition-all group flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-display font-bold text-gray-900 text-sm leading-snug group-hover:text-pink-600 transition-colors">
            {item.name}
            {item.tag === 'top' && (
              <span className="ml-2 text-[10px] bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wide">Top</span>
            )}
            {item.tag === 'new' && (
              <span className="ml-2 text-[10px] bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wide">New</span>
            )}
          </h4>
        </div>
        <p className="text-gray-400 text-xs mb-2 italic">{item.ingredients}</p>
        <p className="text-gray-500 text-xs mb-3 leading-relaxed flex-1">{item.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {(['S', 'M', 'L'] as const).filter((s) => prices[s] !== undefined).map((s) => (
            <SizeTag key={s} label={s} price={prices[s]!} />
          ))}
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold py-2 rounded-xl hover:shadow-md hover:shadow-pink-200 transition-all active:scale-95"
        >
          <Plus className="h-3.5 w-3.5" />
          Add to Order · from {fmt(lowestPrice)}
        </button>
      </div>

      {modalOpen && (
        <AddToCartModal item={item} category={category} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🧋 Full Menu
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-gray-900 mb-3">
            What We Serve
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Pick your drink, choose your size and toppings, then send your order directly on WhatsApp.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-8">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                active === cat.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-pink-600'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active category */}
        <div className={`${category.bg} rounded-3xl p-6 sm:p-8 mb-6`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{category.emoji}</span>
            <div>
              <h3 className={`font-display font-black text-2xl ${category.color}`}>{category.label}</h3>
              {Object.keys(category.defaultSizes).length > 0 && (
                <div className="flex gap-3 mt-1">
                  {(['S', 'M', 'L'] as const).filter((s) => category.defaultSizes[s]).map((s) => (
                    <span key={s} className="text-xs text-gray-500 font-medium">
                      {s} · {fmt(category.defaultSizes[s]!)}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          {category.note && (
            <p className="text-xs text-gray-500 italic mb-4 border-l-2 border-pink-300 pl-3">{category.note}</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {category.items.map((item) => (
              <MenuCard key={item.name} item={item} category={category} />
            ))}
          </div>
        </div>

        {/* Toppings */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 mb-6">
          <h3 className="font-display font-black text-2xl text-gray-900 mb-1">🍡 Toppings</h3>
          <p className="text-gray-400 text-sm mb-5">Added when you pick your drink</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {TOPPINGS.map((t) => (
              <div key={t.name} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                <span className="text-sm font-medium text-gray-700">{t.name}</span>
                <span className="text-xs font-bold text-pink-600 ml-2 shrink-0">+{fmt(t.price)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Combo Deals */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-6 sm:p-8 border border-pink-100">
          <h3 className="font-display font-black text-2xl text-gray-900 mb-1">🎉 Bubble Waffle Combo Deals</h3>
          <p className="text-gray-400 text-sm mb-5">Best value bundles — eat more, spend less</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {COMBOS.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl p-5 shadow-sm border border-white/80 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h4 className="font-display font-bold text-gray-900 mb-1">{c.name}</h4>
                <p className="text-gray-400 text-sm mb-3">{c.description}</p>
                <div className="font-display font-black text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {fmt(c.price)}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Get Your Scoop of Happiness with Ice Cream for TZS 5,000!</p>
        </div>
      </div>
    </section>
  );
}
