const PHOTOS = [
  { src: '/images/hero.jpg', alt: 'Cafe Boba signature drink' },
  { src: '/images/drink1.jpg', alt: 'Brown sugar boba' },
  { src: '/images/drink2.jpg', alt: 'Colourful frappuccino' },
  { src: '/images/drink3.jpg', alt: 'Strawberry iced tea and chocolate boba' },
  { src: '/images/drink4.jpg', alt: 'Strawberry slush boba' },
  { src: '/images/drink5.jpg', alt: 'Mango passion slush' },
  { src: '/images/drink6.jpg', alt: 'Cafe Boba on duka.direct' },
  { src: '/images/drink7.jpg', alt: 'Boba tea lamp scene' },
  { src: '/images/drink8.jpg', alt: 'Two drinks at table' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            📸 Gallery
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-gray-900 mb-3">
            Happy in Every Sip
          </h2>
          <p className="text-gray-500">
            Follow us{' '}
            <a
              href="https://www.instagram.com/cafebobaslipway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-semibold hover:underline"
            >
              @cafebobaslipway
            </a>{' '}
            for daily inspo
          </p>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
