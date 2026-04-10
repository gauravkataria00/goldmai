import React from 'react'

export default function LuxuryBanner() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1565636192335-14c46fa1120d?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-yellow-600/20 px-4 py-2 rounded-full border border-yellow-400/50 mb-6">
              <i className="fa-solid fa-gem text-yellow-400"></i>
              <span className="text-yellow-300 text-xs font-black">CURATED COLLECTION</span>
            </div>

            <h2 className="heading-font text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">EXCLUSIVE</span>
              <br />
              <span className="text-white">Luxury Collections</span>
            </h2>

            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Hand-picked from India's finest boutiques. Every piece tells a story of tradition, craftsmanship, and elegance.
            </p>

            <p className="text-gray-400 text-base mb-8">
              🌟 Verified Sellers • 🎁 Premium Packaging • 🚀 Express Delivery
            </p>

            <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-yellow-600/50 transition transform hover:scale-105 active:scale-95">
              <span>EXPLORE COLLECTIONS</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-600/30 rounded-2xl p-8 hover:border-yellow-600/60 transition group">
              <div className="text-5xl font-black text-yellow-400 mb-2 group-hover:text-yellow-300 transition">
                1000+
              </div>
              <p className="text-gray-300 font-bold">Premium Stores</p>
              <p className="text-gray-500 text-sm mt-2">Across India</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-600/30 rounded-2xl p-8 hover:border-yellow-600/60 transition group">
              <div className="text-5xl font-black text-yellow-400 mb-2 group-hover:text-yellow-300 transition">
                45K+
              </div>
              <p className="text-gray-300 font-bold">Happy Customers</p>
              <p className="text-gray-500 text-sm mt-2">Trusted by thousands</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-600/30 rounded-2xl p-8 hover:border-yellow-600/60 transition group">
              <div className="text-5xl font-black text-yellow-400 mb-2 group-hover:text-yellow-300 transition">
                4.8⭐
              </div>
              <p className="text-gray-300 font-bold">Average Rating</p>
              <p className="text-gray-500 text-sm mt-2">Quality assured</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-600/30 rounded-2xl p-8 hover:border-yellow-600/60 transition group">
              <div className="text-5xl font-black text-yellow-400 mb-2 group-hover:text-yellow-300 transition">
                24hrs
              </div>
              <p className="text-gray-300 font-bold">Express Delivery</p>
              <p className="text-gray-500 text-sm mt-2">Available in major cities</p>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="mt-16 pt-8 border-t border-yellow-600/20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: 'fa-check-circle', text: '100% Authentic' },
            { icon: 'fa-shield', text: 'Secure Payment' },
            { icon: 'fa-box', text: 'Gift Wrapped' },
            { icon: 'fa-undo', text: '30 Day Returns' }
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <i className={`fa-solid ${feature.icon} text-yellow-400 text-2xl mb-2`}></i>
              <p className="text-gray-300 font-bold text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
