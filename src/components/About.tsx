const FEATURES = [
  { emoji: '🍓', title: 'Real Fruits Only', desc: 'No artificial syrups, colours, chemicals or preservatives. Every drink bursts with natural goodness.' },
  { emoji: '🧋', title: '60+ Drink Options', desc: 'Bubble teas, frappuccinos, milkshakes, fizzy floats, iced fruit teas and hot drinks.' },
  { emoji: '✨', title: 'Customizable', desc: 'Pick your size (S/M/L) and add any topping — crystal boba, jelly, cheese foam and more.' },
  { emoji: '🛵', title: 'Piki Delivery', desc: 'Order from Cafe Boba on Piki and get your sweet treats delivered right to your door.' },
];

export function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-3xl overflow-hidden h-52 shadow-lg">
                  <img src="/images/drink4.jpg" alt="Cafe Boba drink" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden h-36 shadow-lg">
                  <img src="/images/drink5.jpg" alt="Cafe Boba drink" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-3 mt-8">
                <div className="rounded-3xl overflow-hidden h-36 shadow-lg">
                  <img src="/images/drink7.jpg" alt="Cafe Boba drink" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden h-52 shadow-lg">
                  <img src="/images/drink8.jpg" alt="Cafe Boba drink" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 text-center border border-pink-100">
              <div className="font-display font-black text-xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Open 8am – 10pm
              </div>
              <div className="text-xs text-gray-400 mt-0.5">Every day at Slipway</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              🧋 Our Story
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-gray-900 leading-tight mb-5">
              Happiness is{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                in a Cup
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Tucked at the Slipway in Dar es Salaam, Cafe Boba is the city's favourite spot for premium bubble tea and creative drinks. We believe every sip should be an experience — colourful, flavourful and made with love.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From our iconic Teddy Frappuccinos to refreshing iced fruit teas, everything is handcrafted using real fruit purees and quality ingredients. No shortcuts, no artificial colours — just pure, unapologetic sweetness.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="text-2xl mb-2">{f.emoji}</div>
                  <div className="font-display font-bold text-gray-900 text-sm mb-1">{f.title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
