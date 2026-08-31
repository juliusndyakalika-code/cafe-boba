export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Cafe Boba drinks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-900/60 to-rose-900/70" />
      </div>

      {/* Floating bubbles decoration */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-pink-400/20 blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-purple-400/20 blur-xl animate-pulse delay-300" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-rose-400/20 blur-xl animate-pulse delay-700" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Cafe Boba" className="w-24 h-24 rounded-full shadow-2xl shadow-black/40 border-2 border-white/30" />
        </div>
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/30">
          📍 Slipway, Dar es Salaam
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Sip the{' '}
          <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Good Vibes
          </span>
        </h1>

        <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Bubble teas, frappuccinos, milkshakes and fizzy floats — all made with
          real fruits, no artificial syrups, colours or preservatives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="font-display font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all"
          >
            Explore the Menu
          </a>
          <a
            href="tel:+255783134808"
            className="font-display font-bold bg-white/20 backdrop-blur-sm text-white border border-white/40 px-8 py-4 rounded-full text-lg hover:bg-white/30 transition-all"
          >
            Call Us Now
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-sm mx-auto">
          {[
            { num: '100%', label: 'Real Fruits' },
            { num: '8am', label: 'Opens Daily' },
            { num: 'duka.direct', label: 'Delivery' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-black text-2xl text-white">{s.num}</div>
              <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
