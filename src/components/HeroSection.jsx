import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-bg min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-yellow-600/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-5xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600/25 to-yellow-500/15 backdrop-blur-xl px-7 py-4 rounded-full border border-yellow-400/60 mb-8 animate-slide-in-left hover:border-yellow-300 hover:bg-gradient-to-r hover:from-yellow-600/30 hover:to-yellow-500/20 transition shadow-lg shadow-yellow-600/20" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <i className="fa-solid fa-crown text-yellow-400 text-xl"></i>
            <span className="text-yellow-300 text-sm font-black tracking-widest">LUXURY CRAFTED FOR ROYALTY</span>
            <span className="text-yellow-400/70 text-sm">✨</span>
          </div>

          {/* Main Heading - BIGGER */}
          <h1 className="heading-font text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-tight font-black text-white tracking-tighter mb-6 sm:mb-8 animate-slide-in-left" style={{ animationDelay: '0.3s', animationFillMode: 'both', lineHeight: '1.1' }}>
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 bg-clip-text text-transparent">AUTHENTIC</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent">FASHION</span>
            <br />
            <span className="text-yellow-100">YOUR CHOICE</span>
          </h1>

          {/* Subheading - BIGGER */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl md:text-3xl text-gray-100 leading-relaxed max-w-3xl font-bold animate-slide-in-left" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            Discover 1000+ exclusive boutiques. Premium collections from emerging designers. Same-day delivery. 
            <span className="block text-yellow-300 mt-2">✨ Luxury at your doorstep ✨</span>
          </p>

          {/* CTA Buttons - BIGGER & PREMIUM */}
          <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 animate-slide-in-left" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <Link to="/shop" className="gold-button font-bold px-8 sm:px-12 py-5 sm:py-7 rounded-3xl text-base sm:text-xl flex items-center justify-center sm:justify-start gap-3 sm:gap-4 shadow-2xl hover:shadow-3xl hover:shadow-yellow-600/60 transition transform hover:scale-110 active:scale-95 border border-yellow-400/30 hover:border-yellow-200 flex-1 sm:flex-none">
              <span>START SHOPPING</span>
              <i className="fa-solid fa-bolt text-yellow-300"></i>
            </Link>

            <Link to="/stores" className="glass px-8 sm:px-12 py-5 sm:py-7 rounded-3xl text-base sm:text-xl font-bold hover:bg-white/15 transition border-2 border-yellow-400/40 hover:border-yellow-300/70 transform hover:scale-110 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 flex-1 sm:flex-none">
              <i className="fa-solid fa-map-location-dot text-yellow-300"></i>
              Find Stores Near You
            </Link>
          </div>

          {/* Enhanced Trust Bar - BIGGER */}
          <div className="mt-12 sm:mt-20 flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10 md:gap-16 animate-slide-in-left" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
            <div className="flex items-center gap-4 group cursor-pointer hover:scale-110 transition">
              <div className="text-6xl group-hover:animate-bounce">⭐</div>
              <div>
                <div className="font-black text-yellow-300 text-4xl">4.8/5</div>
                <div className="text-gray-300 text-sm font-medium">45K+ Happy Customers</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 group cursor-pointer hover:scale-110 transition">
              <div className="text-6xl group-hover:animate-bounce" style={{ animationDelay: '0.1s' }}>🏪</div>
              <div>
                <div className="font-black text-yellow-300 text-4xl">1000+</div>
                <div className="text-gray-300 text-sm font-medium">Stores Across India</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4 group cursor-pointer hover:scale-110 transition">
              <div className="text-6xl group-hover:animate-bounce" style={{ animationDelay: '0.2s' }}>🚀</div>
              <div>
                <div className="font-black text-yellow-300 text-4xl">24hr</div>
                <div className="text-gray-300 text-sm font-medium">Express Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slideIn 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
