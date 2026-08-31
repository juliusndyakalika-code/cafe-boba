import { Phone, MapPin, Clock } from 'lucide-react';
import { DUKA_STORE_URL } from '../config';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 text-pink-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            📍 Find Us
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl mb-3">
            Come Say Hello
          </h2>
          <p className="text-gray-400">We're right at Slipway — your favourite waterfront spot in Dar es Salaam.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <div className="space-y-4">
            <a
              href="tel:+255687886869"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Call us</div>
                <div className="font-display font-bold text-white group-hover:text-pink-300 transition-colors">
                  +255 687 886 869
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Location</div>
                <div className="font-display font-bold text-white">Slipway, Dar es Salaam</div>
                <div className="text-gray-400 text-sm">Tanzania</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Opening Hours</div>
                <div className="font-display font-bold text-white">8:00 AM – 10:00 PM</div>
                <div className="text-gray-400 text-sm">Open every day</div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/cafebobaslipway"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 flex items-center justify-center shrink-0 text-white font-bold text-sm">
                IG
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Follow us</div>
                <div className="font-display font-bold text-white group-hover:text-pink-300 transition-colors">
                  @cafebobaslipway
                </div>
              </div>
            </a>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden h-72 lg:h-auto border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0!2d39.2698184!3d-6.7526035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d9189f02431%3A0x30b23e41ccb0f1b8!2sCafe%20Boba!5e0!3m2!1sen!2stz!4v1719100000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Boba location"
            />
          </div>
        </div>

        {/* duka.direct CTA */}
        <div className="mt-12 bg-gradient-to-r from-pink-600 to-purple-700 rounded-3xl p-8 text-center">
          <div className="text-3xl mb-3">🛵</div>
          <h3 className="font-display font-black text-2xl mb-2">Now on duka.direct!</h3>
          <p className="text-white/80 mb-5">Order your favourite bubble teas and sweet treats — delivered right to you.</p>
          <a
            href={DUKA_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-display font-bold px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Order on duka.direct
          </a>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-sm">
          <p>© 2026 Cafe Boba. All rights reserved.</p>
          <p className="italic">Made with real fruits — no artificial additives.</p>
        </div>
      </div>
    </section>
  );
}
